"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Trees, TreePine, Waves,
  Baby, Award, BookOpen, GraduationCap,
  TramFront, TrainFront,
  ShoppingBag, ShoppingBasket,
  Dumbbell,
  Home,
  type LucideIcon,
} from "lucide-react";

// Kolory z design systemu strony
const INK   = "#2C2420";   // --color-ink
const GOLD  = "#C9A96E";   // --color-gold  (tylko Crocus Hill)

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

const locationIconMap: Record<string, LucideIcon> = {
  "Jasne Błonia":                       Trees,
  "Park Kasprowicza":                   TreePine,
  "Bulwary Odrzańskie":                 Waves,
  "Przedszkole Publiczne nr 2":         Baby,
  "Szkoła Podstawowa nr 54":            BookOpen,
  "Szkoła Podstawowa nr 10":            Award,
  "Uniwersytet Szczeciński":            GraduationCap,
  "Przystanek Tramwajowy (Linie 1, 9)": TramFront,
  "Dworzec Główny PKP":                 TrainFront,
  "Centrum Handlowe Galaxy":            ShoppingBag,
  "Lokalny ryneczek":                   ShoppingBasket,
  "Korty tenisowe":                     Dumbbell,
  "Basen Floating Arena":               Waves,
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
      {/* POI Markers — ink monochrome */}
      {locations.map((loc, idx) => {
        const Icon = locationIconMap[loc.name] ?? Trees;
        return (
          <Marker key={`${loc.name}-${idx}`} longitude={loc.lng} latitude={loc.lat} anchor="bottom">
            <div className="flex flex-col items-center group cursor-pointer">

              {/* Tooltip */}
              <div
                className="
                  opacity-0 group-hover:opacity-100 pointer-events-none
                  transition-all duration-200 translate-y-1 group-hover:translate-y-0
                  text-[11px] font-medium px-2.5 py-1 rounded-lg
                  whitespace-nowrap mb-2 shadow-md relative
                "
                style={{ backgroundColor: INK, color: "#F5F0E8" }}
              >
                {loc.name}
                <span
                  className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 block"
                  style={{
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: `5px solid ${INK}`,
                  }}
                />
              </div>

              {/* Icon circle */}
              <div
                className="
                  flex items-center justify-center w-9 h-9 rounded-full
                  ring-2 ring-white shadow-md
                  transition-transform duration-200 group-hover:scale-110
                "
                style={{ backgroundColor: INK }}
              >
                <Icon size={15} strokeWidth={2} color="#F5F0E8" />
              </div>

              {/* Stem */}
              <div className="w-[2px] h-2 rounded-b-full" style={{ backgroundColor: INK }} />
            </div>
          </Marker>
        );
      })}

      {/* Crocus Hill — gold accent */}
      <Marker longitude={14.5369} latitude={53.4398} anchor="bottom">
        <div className="flex flex-col items-center relative group cursor-pointer">

          {/* Label — always visible */}
          <div
            className="text-[11px] font-medium px-3 py-1 rounded-lg shadow-md mb-2 whitespace-nowrap"
            style={{ backgroundColor: GOLD, color: "#fff" }}
          >
            Crocus Hill
          </div>

          {/* Icon circle — gold, slightly larger */}
          <div
            className="flex items-center justify-center w-11 h-11 rounded-full ring-2 ring-white shadow-lg"
            style={{ backgroundColor: GOLD }}
          >
            <Home size={18} strokeWidth={2} color="#fff" />
          </div>

          {/* Stem */}
          <div className="w-[2px] h-2.5 rounded-b-full" style={{ backgroundColor: GOLD }} />
        </div>
      </Marker>
    </Map>
  );
}
