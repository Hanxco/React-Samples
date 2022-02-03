import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);
  const position = [40.420737, -3.755208]
  const position2 = [40.426043, -3.770616]

  return (
    <Map center={[40.420737, -3.755208]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup></Popup>
      </Marker>
      <Marker position={position2}>
        <Popup></Popup>
      </Marker>
    </Map>

  );
}
