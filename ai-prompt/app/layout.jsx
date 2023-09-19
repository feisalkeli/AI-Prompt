import React from "react";
import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "PromptAi",
  description: "Discover and Share rich AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Nav />

        {children}
      </main>
    </html>
  );
};

export default RootLayout;
