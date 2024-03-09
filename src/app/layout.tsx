import type { Metadata } from "next";
import "@/scss/main.scss";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "QuizGrad",
  description: "QuizGrad next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
