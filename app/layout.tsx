import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "옆집공방 | 우리 동네 장인 플랫폼",
  description: "만들고 싶거나 고치고 싶은 것을 가까운 공방 장인에게 맡겨보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
