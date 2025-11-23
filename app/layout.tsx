// app/layout.tsx
import Navbar from "@/Components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import Footer from "@/Components/Footer";
import SocialSidebar from "@/Components/SocialSidebar";

export const metadata = {
  title: "Romstream Company",
  description: "Professional Team Developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SocialSidebar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
