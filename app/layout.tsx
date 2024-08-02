import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Courses",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <header className="layout-header">
            <Header />
          </header>
          <main className="layout-main">
            {children}
          </main>
          <footer className="layout-footer">
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
