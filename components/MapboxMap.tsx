"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

type LocationItem = {
  name: string;
  time: string;
  type: "pieszo" | "rowerem" | "samochodem";
  lat: number;
  lng: number;
};

type Props = {
  locations: LocationItem[];
  mapboxToken: string;
};

export default function MapboxMap({ locations, mapboxToken }: Props) {
  return (
    <Map
      initialViewState={{
        longitude: 14.54,
        latitude: 53.435,
        zoom: 12.5,
      }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={mapboxToken}
      style={{ width: "100%", height: "100%" }}
    >
      {locations.map((loc, idx) => (
        <Marker key={idx} longitude={loc.lng} latitude={loc.lat} anchor="bottom">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="bg-ink text-cream font-body text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap mb-1 -translate-y-2">
              {loc.name}
            </div>
            <MapPin className="text-gold drop-shadow-md" size={24} strokeWidth={2} fill="white" />
          </div>
        </Marker>
      ))}

      {/* Główny pin inwestycji */}
      <Marker longitude={14.5369} latitude={53.4398} anchor="bottom">
        <div className="flex flex-col items-center z-10 relative">
          <div className="bg-gold text-white font-body font-medium text-[12px] px-3 py-1.5 rounded-full shadow-lg mb-1">
            Crocus Hill
          </div>
          <div className="w-3 h-3 bg-gold rotate-45 transform -translate-y-2" />
        </div>
      </Marker>
    </Map>
  );
}
