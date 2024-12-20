import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "에제르 화실 회원전",
  description: "화실 에제르 회원들이 준비한 특별한 전시회가 열립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="에제르 화실 회원전" />
        <meta
          property="og:description"
          content="화실 에제르 회원들이 준비한 특별한 전시회가 열립니다."
        />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta property="og:url" content="https://ezer-invitation.vercel.app" />
        <meta property="og:type" content="website" />
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
