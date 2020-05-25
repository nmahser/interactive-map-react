import * as React from "react";
import { useState } from "react";
import MapGL from "react-map-gl";
import { BASIC_STYLE } from "./Style";
import { apiKeyMapBox } from "../../../config";

export function Map() {
  // hooks for viewport
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 800,
    latitude: 40,
    longitude: -100,
    zoom: 3,
  });

  const MAPBOX_TOKEN = apiKeyMapBox;

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></MapGL>
  );
}
