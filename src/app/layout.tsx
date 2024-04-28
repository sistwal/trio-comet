"use client";
import React, { useState } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import { LightTheme } from "@/utils/CustomTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "@components/Footer";
import NextTopLoader from "nextjs-toploader";
import { lightColor, darkColor } from "@/utils/CustomTheme/color";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { EdgeStoreProvider } from "@components/EdgeStore";
import { useSelector } from "react-redux";
import ThemeState from "@components/ThemeState";
import WhatsappIcon from "@components/WhatsappIcon";
import { Box, Typography } from "@mui/material";
import BlackBanner from "@components/BlackBanner";

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// Create a custom theme with a 10px base font size

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [themeState, setThemeState] = useState("");
  const themeValue = (state: any) => {
    setThemeState(state);
    return state;
  };
  return (
    <html lang="en">
      <SessionProvider>
        <Provider store={store}>
          <ThemeState themeValue={themeValue} />
          <ThemeProvider theme={LightTheme}>
            {/* // theme={LightTheme}> */}
            <CssBaseline />
            <EdgeStoreProvider>
              {/* application content */}
              <body className={inter.className}>
                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Server Error 500
                  </Typography>
                </Box> */}
                <NextTopLoader
                  color={lightColor.theme.primary}
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  easing="ease"
                  speed={200}
                  shadow={`0 0 10px ${
                    themeState === "light"
                      ? lightColor.theme.primary
                      : darkColor.theme.primary
                  },0 0 5px ${lightColor.theme.primary}`}
                />
                {pathname === "/" ? <BlackBanner /> : ""}
                <Navbar />
                {children}
                <WhatsappIcon />
                {pathname === "/bulk-query" ? "" : <Footer />}
                <ToastContainer
                  position="bottom-left"
                  autoClose={3000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </body>
            </EdgeStoreProvider>
          </ThemeProvider>
          {/* </PersistGate> */}
        </Provider>
      </SessionProvider>
    </html>
  );
}
