import React, { FC } from "react";
import { Navbar } from "../UI";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <head></head>

      <nav>
        <Navbar />
      </nav>

      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
