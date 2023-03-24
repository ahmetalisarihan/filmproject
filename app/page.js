import { David_Libre, Inter } from "@next/font/google";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={interFontFamily.className}>
      <div>Home</div>
    </div>
  );
}
