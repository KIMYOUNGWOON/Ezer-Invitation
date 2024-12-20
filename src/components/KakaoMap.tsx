"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const lat = 37.392123;
  const lng = 126.786456;
  return (
    <Map center={{ lat, lng }} style={{ width: "100%", height: "200px" }}>
      <MapMarker position={{ lat, lng }} />
    </Map>
  );
}
