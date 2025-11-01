// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "QEvent",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className} suppressHydrationWarning>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           <Header />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// ✅ CORRECT layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}