import * as React from "react";
import { useState } from "react";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl";
import { usIncome } from "../../../data/incomeData";
import { stateCapitals } from "../../../data/stateCapitals";
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

  // inline style for div tag below
  const divStyle = {
    height: "100%",
    position: "relative",
  };

  // inline style for navigation control
  const navStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    padding: "10px",
  };

  // usIncome Layer
  const fill = {
    id: "usIncome",
    type: "fill",
    source: "usIncome",
    paint: {
      "fill-opacity": 0.2,
    },
  };

  // stateCapitals Layer
  const circle = {
    id: "stateCapitals",
    type: "circle",
    source: "stateCapitals",
    paint: {
      "circle-color": "#B22222",
    },
  };

  return (
    <div className="app" style={divStyle}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Source id="usIncome" type="geojson" data={usIncome}>
          <Layer {...fill} />
        </Source>

        <Source id="stateCapitals" type="geojson" data={stateCapitals}>
          <Layer {...circle} />
        </Source>
        <div style={navStyle}>
          <NavigationControl
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          />
        </div>
      </MapGL>
    </div>
  );
}
