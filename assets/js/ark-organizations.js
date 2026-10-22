(function (root, factory) {
  const api = factory(root);

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.ArkOrganizations = api;
  }
}(typeof window !== "undefined" ? window : globalThis, function (root) {
  "use strict";

  const MAX_LATEST = 20;
  const MAX_TLD_BARS = 12;

  function extractTld(entry) {
    if (!entry || !entry.where) return null;

    try {
      const hostname = new URL(entry.where).hostname;
      const parts = hostname.split(".");
      return parts[parts.length - 1].toLowerCase() || null;
    } catch (error) {
      return null;
    }
  }

  function getTldData(data) {
    const counts = new Map();

    data.forEach(function (entry) {
      const tld = extractTld(entry);
      if (tld) counts.set(tld, (counts.get(tld) || 0) + 1);
    });

    const total = Array.from(counts.values()).reduce(function (sum, count) {
      return sum + count;
    }, 0);

    return Array.from(counts, function (item) {
      return {
        tld: item[0],
        count: item[1],
        percentage: total ? (item[1] / total) * 100 : 0
      };
    }).sort(function (a, b) {
      return b.count - a.count;
    });
  }

  function getYearData(data, selectedTld) {
    const counts = new Map();

    data.forEach(function (entry) {
      const tld = extractTld(entry);
      const yearText = entry && typeof entry.when === "string"
        ? entry.when.slice(0, 4)
        : "";

      if (!tld || !/^\d{4}$/.test(yearText)) return;
      if (selectedTld && tld !== selectedTld) return;

      const year = Number(yearText);
      counts.set(year, (counts.get(year) || 0) + 1);
    });

    const total = Array.from(counts.values()).reduce(function (sum, count) {
      return sum + count;
    }, 0);

    return Array.from(counts, function (item) {
      return {
        year: item[0],
        count: item[1],
        percentage: total ? (item[1] / total) * 100 : 0
      };
    }).sort(function (a, b) {
      return a.year - b.year;
    });
  }

  function getLastEntriesByDate(data, count) {
    return data.filter(function (entry) {
      return entry.when && entry.what && /\d/.test(entry.what);
    }).sort(function (a, b) {
      return new Date(b.when).getTime() - new Date(a.when).getTime();
    }).slice(0, count);
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function formatCount(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function formatPercentage(value) {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    }).format(value) + "%";
  }

  function appendCell(row, text, header) {
    const cell = document.createElement(header ? "th" : "td");
    if (header) cell.scope = "row";
    cell.textContent = text;
    row.appendChild(cell);
  }

  function renderTldTable(tldData) {
    const body = document.getElementById("tldDataBody");
    const summary = document.getElementById("tldDataSummary");
    const total = tldData.reduce(function (sum, row) {
      return sum + row.count;
    }, 0);

    body.replaceChildren();
    tldData.forEach(function (item) {
      const row = document.createElement("tr");
      appendCell(row, "." + item.tld, true);
      appendCell(row, formatCount(item.count), false);
      appendCell(row, formatPercentage(item.percentage), false);
      body.appendChild(row);
    });

    summary.textContent = formatCount(total) + " registrations across " +
      formatCount(tldData.length) + " TLDs with valid resolver URLs.";
  }

  function renderTldFilter(tldData) {
    const select = document.getElementById("tldFilter");
    select.replaceChildren();

    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "All top-level domains";
    select.appendChild(allOption);

    tldData.forEach(function (item) {
      const option = document.createElement("option");
      option.value = item.tld;
      option.textContent = "." + item.tld + " — " + formatCount(item.count) +
        " registrations (" + formatPercentage(item.percentage) + ")";
      select.appendChild(option);
    });

    select.disabled = false;
  }

  function renderTldGraph(tldData) {
    const container = document.getElementById("tldGraph");
    container.replaceChildren();
    if (!tldData.length) return;

    const visible = tldData.slice(0, MAX_TLD_BARS - 1).map(function (item) {
      return {
        tld: item.tld,
        count: item.count,
        percentage: item.percentage
      };
    });
    const remaining = tldData.slice(MAX_TLD_BARS - 1);
    const total = tldData.reduce(function (sum, item) {
      return sum + item.count;
    }, 0);

    if (remaining.length) {
      const otherCount = remaining.reduce(function (sum, item) {
        return sum + item.count;
      }, 0);
      visible.push({
        tld: "Other",
        count: otherCount,
        percentage: total ? (otherCount / total) * 100 : 0
      });
    }

    const maxPercentage = Math.max.apply(null, visible.map(function (item) {
      return item.percentage;
    }));
    const list = document.createElement("ul");
    list.className = "ark-tld-bars";

    visible.forEach(function (item) {
      const row = document.createElement("li");
      const label = document.createElement("span");
      const track = document.createElement("span");
      const fill = document.createElement("span");
      const value = document.createElement("span");

      row.className = "ark-tld-bar";
      label.className = "ark-tld-bar__label";
      track.className = "ark-tld-bar__track";
      fill.className = "ark-tld-bar__fill";
      value.className = "ark-tld-bar__value";
      label.textContent = item.tld === "Other" ? item.tld : "." + item.tld;
      value.textContent = formatCount(item.count) + " (" +
        formatPercentage(item.percentage) + ")";
      fill.style.width = ((item.percentage / maxPercentage) * 100) + "%";

      track.appendChild(fill);
      row.append(label, track, value);
      list.appendChild(row);
    });

    container.appendChild(list);
  }

  function renderYearTable(yearData, selectedTld) {
    const body = document.getElementById("yearDataBody");
    const caption = document.getElementById("yearDataCaption");
    const status = document.getElementById("yearGraphStatus");
    const total = yearData.reduce(function (sum, item) {
      return sum + item.count;
    }, 0);
    const filterName = selectedTld ? "." + selectedTld : "all top-level domains";

    body.replaceChildren();
    yearData.forEach(function (item) {
      const row = document.createElement("tr");
      appendCell(row, String(item.year), true);
      appendCell(row, formatCount(item.count), false);
      appendCell(row, formatPercentage(item.percentage), false);
      body.appendChild(row);
    });

    caption.textContent = "Annual registrations for " + filterName;
    status.textContent = selectedTld
      ? "Filtered by ." + selectedTld + ": " + formatCount(total) +
        " registrations have a valid registration year."
      : "Showing all TLDs: " + formatCount(total) +
        " registrations have a valid resolver TLD and registration year.";
  }

  function renderYearGraph(yearData) {
    const container = document.getElementById("yearGraph");
    container.replaceChildren();
    if (!yearData.length) {
      container.textContent = "No annual registration data is available for this selection.";
      return;
    }
    if (!root.d3) {
      container.textContent = "The chart is unavailable. Exact values remain available in the table.";
      return;
    }

    const d3 = root.d3;
    const fullWidth = Math.max(280, Math.min(container.clientWidth || 800, 960));
    const fullHeight = 390;
    const margin = { top: 20, right: 16, bottom: 55, left: 58 };
    const width = fullWidth - margin.left - margin.right;
    const height = fullHeight - margin.top - margin.bottom;
    const x = d3.scaleBand()
      .domain(yearData.map(function (item) { return item.year; }))
      .range([0, width])
      .padding(0.16);
    const y = d3.scaleLinear()
      .domain([0, d3.max(yearData, function (item) { return item.count; }) || 1])
      .nice()
      .range([height, 0]);
    const maxTicks = Math.max(3, Math.floor(width / 52));
    const tickStep = Math.max(1, Math.ceil(yearData.length / maxTicks));
    const tickValues = yearData
      .filter(function (item, index) {
        return index % tickStep === 0 || index === yearData.length - 1;
      })
      .map(function (item) { return item.year; });

    const svg = d3.select(container)
      .append("svg")
      .attr("class", "ark-chart ark-chart--bars")
      .attr("viewBox", "0 0 " + fullWidth + " " + fullHeight)
      .attr("focusable", "false")
      .attr("aria-hidden", "true");
    const graph = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    graph.selectAll("rect")
      .data(yearData)
      .enter()
      .append("rect")
      .attr("class", "ark-chart-bar")
      .attr("x", function (item) { return x(item.year); })
      .attr("width", x.bandwidth())
      .attr("y", function (item) { return y(item.count); })
      .attr("height", function (item) { return height - y(item.count); });

    graph.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickValues(tickValues).tickFormat(d3.format("d")));
    graph.append("g").call(d3.axisLeft(y).ticks(6).tickFormat(d3.format("d")));

    graph.append("text")
      .attr("x", width / 2)
      .attr("y", height + 45)
      .attr("text-anchor", "middle")
      .attr("fill", "currentColor")
      .text("Year");
    graph.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -43)
      .attr("text-anchor", "middle")
      .attr("fill", "currentColor")
      .text("New NAANs");
  }

  function renderLatest(data) {
    const latest = getLastEntriesByDate(data, MAX_LATEST);
    const list = document.getElementById("naan_latest");
    document.getElementById("latestSummary").textContent = "The " +
      formatCount(latest.length) + " most recently registered ARK organizations appear below.";
    list.replaceChildren();

    latest.forEach(function (entry) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      const name = entry.who && entry.who.name ? entry.who.name : "";
      const date = String(entry.when).slice(0, 10);

      item.append(document.createTextNode(date + " "));
      link.href = "https://arks.org/ark:" + entry.what;
      link.textContent = entry.what;
      item.append(link);
      if (name) item.append(document.createTextNode(" " + name));
      list.appendChild(item);
    });
  }

  function showLoadError() {
    document.getElementById("registrySummary").textContent =
      "Current registry data could not be loaded. Use the public NAAN registry link above for current records.";
    document.getElementById("tldDataSummary").textContent =
      "TLD data could not be loaded. Try the NAAN registry link above.";
    document.getElementById("yearGraphStatus").textContent =
      "Annual registration data could not be loaded.";
    document.getElementById("latestSummary").textContent =
      "Recent organization data could not be loaded. Use the public NAAN registry link above for current records.";
  }

  function init(options) {
    const registryUrl = options && options.registryUrl;
    const select = document.getElementById("tldFilter");
    const reset = document.getElementById("resetYearGraph");
    let registryData = [];
    let resizeTimer;

    function updateYears() {
      const selectedTld = select.value;
      const yearData = getYearData(registryData, selectedTld);
      reset.disabled = !selectedTld;
      renderYearTable(yearData, selectedTld);
      renderYearGraph(yearData);
    }

    select.addEventListener("change", updateYears);
    reset.addEventListener("click", function () {
      select.value = "";
      updateYears();
      select.focus();
    });

    root.addEventListener("resize", function () {
      root.clearTimeout(resizeTimer);
      resizeTimer = root.setTimeout(function () {
        if (registryData.length) renderYearGraph(getYearData(registryData, select.value));
      }, 150);
    });

    return fetch(registryUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("Registry request failed: " + response.status);
        return response.json();
      })
      .then(function (payload) {
        registryData = payload.data.filter(function (entry) {
          return entry.what && !entry.what.includes("/");
        });

        const tldData = getTldData(registryData);
        document.getElementById("registrySummary").textContent =
          formatCount(registryData.length) +
          " NAAs were retrieved from the public registry on " + formatDate(new Date()) + ".";
        renderTldTable(tldData);
        renderTldFilter(tldData);
        renderTldGraph(tldData);
        renderLatest(registryData);
        updateYears();
      })
      .catch(function (error) {
        showLoadError();
        if (root.console) root.console.error(error);
      });
  }

  return {
    extractTld: extractTld,
    getTldData: getTldData,
    getYearData: getYearData,
    init: init
  };
}));
