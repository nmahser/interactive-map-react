import * as React from "react";
import { useState } from "react";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl";
import { usIncome } from "../../../data/incomeData";
import { stateCapitals } from "../../../data/stateCapitals";
import { BASIC_STYLE } from "./Style";
import { apiKeyMapBox } from "../../../config";
import { User } from "../User/User";

export function Map() {
  // hooks for viewport
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 800,
    latitude: 40,
    longitude: -100,
    zoom: 3,
  });

  // hooks for mapStyle. I couldn't see any reason to create state for mapStyle since state doesn't change.
  //Instructions tell me to do it...
  const [mapStyle, setStyle] = useState(BASIC_STYLE);

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

  // inline style for MapGl
  const mapGl = {
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "#dcdcdc",
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
      "circle-radius": {
        stops: [
          // zoom is 5 -> circle radius will be 5px
          [5, 5],
          // zoom is 10 -> circle radius will be 10px
          [10, 10],
        ],
      },
      "circle-color": "#B22222",
    },
  };

  return (
    <div className="app" style={divStyle}>
      <User />
      <div className="map">
        <MapGL
          style={mapGl}
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
    </div>
  );
}
