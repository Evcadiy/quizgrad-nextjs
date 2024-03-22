import type { Metadata } from "next";
import "@/scss/main.scss";
import Providers from "@/redux/provider";
import ToastNotificationComp from "@/components/ToastNotificationComp/ToastNotificationComp";

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
        <Providers>
          {children}
          <ToastNotificationComp />
        </Providers>
      </body>
    </html>
  );
}
