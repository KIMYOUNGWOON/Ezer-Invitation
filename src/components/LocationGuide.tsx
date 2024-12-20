"use client";

import KakaoMap from "./KakaoMap";

export default function LocationGuide() {
  return (
    <div className="px-8">
      <div className="mb-6 text-lg text-center font-semibold">오시는 길</div>
      <p className="text-neutral-600 text-sm">
        경기 시흥시 수인로 2421번길 19, 카페모무스
      </p>
      <p className="mb-4 text-neutral-600 text-sm">OPEN 11AM - CLOSE 8PM</p>
      <KakaoMap />
    </div>
  );
}
