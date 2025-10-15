---
title: Overview of ARK organizations
permalink: /naan/stats/
published: true
---

<style>
.tooltip {
  position: absolute;
  text-align: center;
  padding: 8px;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  pointer-events: none;
}
#tldGraph {
  display: flex;
  justify-content: center;
}
.arc path {
  cursor: pointer;
}
@media (prefers-color-scheme: dark) {
	#yearGraph svg text { fill: white }
}
</style>

<script src="https://d3js.org/d3.v7.min.js" integrity="sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i" crossorigin="anonymous"></script>

Every ARK organization has a [Name Assigning Authority Number] (NAAN) listed in
the public [NAAN registry]. Usually the NAAN representing a Name Assigning
Authority (NAA) is a 5-digit number, but sometimes it is
a [shoulder](https://arks.org/about/ark-namespaces/), which is a few characters
longer (e.g., "12345/x5"). As of <span id="current-date"></span>, there are
<span id="naan_count"></span> NAAs in the public registry.

Each NAAN record includes the local organizational resolver to which the global
[Name-to-Thing](https://n2t.net) (N2T.net) resolver will redirect ARKs that
come in with that NAAN. Most ARKs, however, are published as URLs based at the
local resolver (server) domain name, bypassing the global resolver.

## Distribution of top-level domains (TLDs)

The range of top-level domains -- the final part of the domain name -- across
all local ARK resolvers is shown below. There is also a simple
[NAAN registry search interface]({{ site.list_ark_orgs }}).

<br/>
<div id="tldGraph"></div>
<br/>

## Organizations registered per year

The next chart shows the number of newly registered NAANs per year.
Click on a TLD slice above to update the NAANs registered per year
in the chart below for that TLD.

<div id="yearGraph"></div>

<div>
  <button id="resetYearGraph" style="display:none;">Reset Year Graph</button>
  <span id="yearGraphTitle" style="margin-left: 1em; font-weight: bold;"></span>
</div>

## Latest ARK organizations registered

Any memory organization can start creating ARKs once it obtains a NAAN, which
may be requested at no cost by filling out the [NAAN request form].
The <span id="number_latest"></span> most recently registered ARK organizations
appear below.

<ul id="naan_latest"></ul>

<br/>
<small class="ark-alliance__tagline d-block text-secondary text-uppercase fs-6">
  Page concept and JavaScript credit: Bob Coret, National Library of the Netherlands
</small>

<script>

//  const today = new Date();
//  const options = { year: 'numeric', month: 'long', day: 'numeric' };
//  document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
const today = new Date();
document.getElementById('current-date').textContent = formatDateToYYYYMMDD(today);


const naan_registry_url='https://cdluc3.github.io/naan_reg_priv/naan_records.json';
const maxTldShow=40;
const maxLatest=20;

function getLastEntriesByDate(data, count) {
    // Filter entries with a valid 'when' field and a number in the 'what' field
    const filtered = data.filter(entry =>
        entry.when && /\d/.test(entry.what)
    );

    // Sort descending by 'when' (assumes year or ISO-like date string)
    filtered.sort((a, b) => {
        const dateA = new Date(a.when).getTime();
        const dateB = new Date(b.when).getTime();
        return dateB - dateA;
    });

    // Get the last `count` entries (most recent ones)
    return filtered.slice(0, count);
}

function getYearCounts(data, tld) {
    const yearCounts = {};

    data.forEach(entry => {
        if (entry.when && /^\d{4}/.test(entry.when) && entry.where) {
            const matchesTLD = !tld || (() => {
              try {
                  const hostname = new URL(entry.where).hostname;
                  const parts = hostname.split('.');
                  const entryTLD = parts[parts.length - 1].toLowerCase();
                  return entryTLD === tld;
              } catch (e) {
                  return false;
              }
            })();

            if (matchesTLD) {
                const year = entry.when.slice(0, 4);
                yearCounts[year] = (yearCounts[year] || 0) + 1;
            }
        }
    });

    return yearCounts;
}

function yearGraph(data, tld = null) {
    const container = document.getElementById("yearGraph");
    const fullWidth = container.offsetWidth;
    const margin = {
        top: 25,
        right: 25,
        bottom: 75,
        left: 75
    };
    const width = fullWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const yearCounts = getYearCounts(data, tld);

    const yearData = Object.entries(yearCounts)
        .map(([year, count]) => ({
            year: +year,
            count
        }))
        .sort((a, b) => a.year - b.year);

    const svg = d3.select("#yearGraph")
        .append("svg")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", `0 0 ${fullWidth} ${height + margin.top + margin.bottom}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Scales
    const x = d3.scaleBand()
        .domain(yearData.map(d => d.year))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(yearData, d => d.count)])
        .nice()
        .range([height, 0]);

    // Bars with animation
    svg.selectAll("rect")
        .data(yearData)
        .enter()
        .append("rect")
        .attr("x", d => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", height)
        .attr("height", 0)
        .attr("fill", "#ab8716")
        .on("mouseover", (event, d) => {
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(`<strong>${d.year}</strong><br>${d.count} new NAAN registrations`)
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
            tooltip.transition().duration(300).style("opacity", 0);
        })
        .transition()
        .duration(600)
        .attr("y", d => y(d.count))
        .attr("height", d => height - y(d.count));

    // Axes
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format("d")))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

    svg.append("g")
        .call(d3.axisLeft(y));

    // Labels
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 50)
        .attr("text-anchor", "middle")
        .text("Year");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", -height / 2)
        .attr("text-anchor", "middle")
        .text("Number of new NAANs");

    // Update title and reset button
    const title = document.getElementById("yearGraphTitle");
    const resetBtn = document.getElementById("resetYearGraph");

    if (tld) {
        title.innerText = `Filtered by .${tld}`;
        resetBtn.style.display = "inline-block";
    } else {
        title.innerText = "";
        resetBtn.style.display = "none";
    }
}

function getTldCounts(data) {
    const tldCounts = {};

    data.forEach(entry => {
        if (!entry.where) return;
        try {
            const hostname = new URL(entry.where).hostname;
            const parts = hostname.split('.');
            const tld = parts[parts.length - 1].toLowerCase();

            if (tld) {
                tldCounts[tld] = (tldCounts[tld] || 0) + 1;
            }
        } catch (e) {
            // Invalid URL – skip
        }
    });

    return tldCounts;
}

// future refinement(?): use TLD of org URL rather than the resolver URL
function tldGraph(data) {
    const tldCounts = getTldCounts(data);

    const total = Object.values(tldCounts).reduce((sum, val) => sum + val, 0);
    const tldData = Object.entries(tldCounts)
        .map(([tld, count]) => ({
            tld,
            count
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, maxTldShow);

    const size = Math.min(document.getElementById('tldGraph').offsetWidth,500);
    const radius =  size / 2;

    const svg = d3.select("#tldGraph")
        .style("display", "flex")
        .style("justify-content", "center")
        .append("svg")
        .attr("width", size)
        .attr("height", size)
        .append("g")
        .attr("transform", `translate(${size / 2}, ${size / 2})`);

    const color = d3.scaleOrdinal()
        .domain(tldData.map(d => d.tld))
        .range(d3.schemeTableau10);

    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    const pie = d3.pie()
        .value(d => d.count);

    const arc = d3.arc()
        .innerRadius(radius * 0.5)
        .outerRadius(radius);

    const arcs = svg.selectAll("arc")
        .data(pie(tldData))
        .enter()
        .append("g")
        .attr("class", "arc");

    arcs.append("path")
        .attr("d", arc)
        .attr("fill", d => color(d.data.tld))
        .style("cursor", "pointer") // 👈 Add pointer cursor
        .on("mouseover", (event, d) => {
            const percent = ((d.data.count / total) * 100).toFixed(2);
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(`<strong>.${d.data.tld}</strong><br>${d.data.count} NAAN registrations<br>${percent}%`)
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
            tooltip.transition().duration(300).style("opacity", 0);
        });

    arcs.append("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("font-size", "11px")
        .style("fill", "#fff")
        .text(d => {
            const percent = (d.data.count / total) * 100;
            return percent > 3 ? `${percent.toFixed(1)}%` : '';
        });
		
	arcs.on("click", (event, d) => {
		d3.select("#yearGraph").selectAll("*").remove();
		yearGraph(data, d.data.tld);
		document.getElementById('registered-naans-per-year').scrollIntoView({ behavior: 'smooth' });
	});		
}

let data;

fetch(naan_registry_url)
    .then(response => response.text())
    .then(json => {        

        data = JSON.parse(json).data.filter(entry => entry.what && !entry.what.includes('/'));

        const countWithUrl = data.filter(entry => 'where' in entry).length;
        document.getElementById("naan_count").innerHTML = countWithUrl.toLocaleString();

        const latest = getLastEntriesByDate(data, maxLatest);

		    document.getElementById("number_latest").innerHTML = maxLatest.toLocaleString();
		
        const ul = document.getElementById("naan_latest");

        latest.forEach(entry => {
            const who = entry.who.name || "";
            const what = entry.what || "";
            const when = entry.when.substring(0, 10) || "";

            const li = document.createElement("li");
            li.innerHTML = `${when} &nbsp; <a href="https://arks.org/ark:${what}">${what}</a> &nbsp; ${who}`;
            ul.appendChild(li);
        });

        tldGraph(data);
        yearGraph(data);

        document.getElementById("resetYearGraph").addEventListener("click", () => {
            d3.select("#yearGraph").selectAll("*").remove();
            yearGraph(data); // back to unfiltered
        });

    })
    .catch(error => console.error('Error fetching the NAAN registry:', error));
</script>

[Name Assigning Authority Number]: ark-naans-and-systems.md
[NAAN request form]: {{ site.naan_form_url }}
[NAAN registry]: {{ site.list_ark_orgs }}
