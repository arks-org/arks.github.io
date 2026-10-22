#!/usr/bin/env python3
"""Refresh the accessible map list from the same KML used by Google My Maps.

Run from the repository root. Pass a KML filename to use a downloaded export.
"""
import datetime
import json
import pathlib
import sys
import urllib.request
import xml.etree.ElementTree as ET

SOURCE = "https://www.google.com/maps/d/kml?mid=1ALGeRERECL36f2pg7pqrthUYNmuU43UM&forcekml=1"
NS = {"k": "http://www.opengis.net/kml/2.2"}


def extract_records(kml):
    records = []
    for marker in ET.fromstring(kml).findall(".//k:Placemark", NS):
        name = marker.findtext("k:name", default="", namespaces=NS).strip()
        if not name or name == "placeholder":
            continue
        naan, separator, organization = name.partition(": ")
        description = marker.findtext("k:description", default="", namespaces=NS)
        record = {
            "naan": naan if separator else "",
            "name": organization if separator else name,
            "location": marker.findtext("k:address", default=description, namespaces=NS),
        }
        point = marker.findtext(".//k:coordinates", default="", namespaces=NS).strip()
        if point:
            longitude, latitude, *_ = point.split(",")
            record["coordinates"] = f"{latitude}, {longitude}"
        records.append(record)
    if not records:
        raise ValueError("The map export has no named institutions; existing data was not changed.")
    return sorted(records, key=lambda item: (item["name"].casefold(), item["naan"]))


if __name__ == "__main__":
    if len(sys.argv) > 1:
        source = pathlib.Path(sys.argv[1]).read_bytes()
    else:
        with urllib.request.urlopen(SOURCE, timeout=30) as response:
            source = response.read()
    records = extract_records(source)
    output = pathlib.Path(__file__).resolve().parents[1] / "_data/organization_map.json"
    output.write_text(json.dumps({
        "source": SOURCE,
        "retrieved": datetime.date.today().isoformat(),
        "records": records,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {len(records)} map entries in {output.name}.")
