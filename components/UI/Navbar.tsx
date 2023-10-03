import React from "react";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuBookOutlined } from "@mui/icons-material";

import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuBookOutlined />
        </IconButton>

        <NextLink href="/" passHref>
          <Link>
            <Typography variant="h6" color="white">
              Coockie Master
            </Typography>
          </Link>
        </NextLink>

        <div style={{ flex: 1 }} />

        <NextLink href="/theme-changer" passHref>
          <Link>
            <Typography variant="h6" color="white">
              Cambiar Tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
