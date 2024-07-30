import { Inter } from "next/font/google";
import "../styles/globals.css"; // Use the correct relative path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dear Crush",
  description: "Make your crush say 'yes'!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
