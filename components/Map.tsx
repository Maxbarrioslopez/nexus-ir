"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || instanceRef.current) return

    const map = L.map(mapRef.current, {
      center: [-34.1701, -70.7406],
      zoom: 12,
      scrollWheelZoom: false,
    })

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map)

    const icon = L.divIcon({
      html: `<div style="background:#F59E0B;width:16px;height:16px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    })

    L.marker([-34.1701, -70.7406], { icon })
      .addTo(map)
      .bindPopup("<b>Nexus IRL</b><br/>Rancagua, Chile")

    const coverage = L.circle([-34.1701, -70.7406], {
      radius: 50000,
      color: "#F59E0B",
      fillColor: "#F59E0B",
      fillOpacity: 0.08,
      weight: 1,
      dashArray: "4",
    }).addTo(map)

    const countryCoverage = L.circle([-33.4489, -70.6693], {
      radius: 400000,
      color: "#F59E0B",
      fillColor: "#F59E0B",
      fillOpacity: 0.04,
      weight: 1,
      dashArray: "4",
    }).addTo(map)

    instanceRef.current = map

    return () => {
      map.remove()
      instanceRef.current = null
    }
  }, [])

  return <div ref={mapRef} className="h-80 w-full rounded-xl z-0" aria-label="Mapa de cobertura Nexus IRL" />
}
