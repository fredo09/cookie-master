import React, { ChangeEvent, useState, useEffect, FC } from "react";
import { Layout } from "../components/layout";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

//Interface de props para el Funcional Components
interface Props {
  theme: string;
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentState] = useState(theme);

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const selectTheme = event.target.value;

    setCurrentState(selectTheme);

    Cookies.set("theme", selectTheme);
  };

  const onClick = async () => {
    const resp = await axios.get("/api/hello");
  };

  useEffect(() => {
    //console.log("Coockies: ", Cookies.get("theme"));
  }, []);

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={handleChangeTheme}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

/**
 * Con esta importancion "getServerSideProps" nosotros le decios a Next
 * que generamos este page del lado del servidor mediante SSR "SERVER SIDE RENDERING"
 **/
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light", name = "No name" } = req.cookies;

  const validThemes = ["light", "custom", "dark"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
      name,
    },
  };
};

export default ThemeChangerPage;
