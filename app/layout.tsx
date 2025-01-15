import "@/styles/globals.css";
import { Inter, Orbitron } from "next/font/google";
import Header from "@/components/header";
import { ParticleBackground } from "@/components/particle-background";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "RAGE EFFECT - Ultimate Combat Experience",
  description: "Enter the world of tactical warfare and unleash your rage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} font-sans dark`}
    >
      <body className="bg-black text-white min-h-screen flex flex-col">
        <ParticleBackground />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
