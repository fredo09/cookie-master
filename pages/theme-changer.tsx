import React, { ChangeEvent, useState } from "react";
import { Layout } from "../components/layout";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Cookies from "js-cookie";

export const ThemeChangerPage = () => {
  const [currentTheme, setCurrentState] = useState("light");

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const selectTheme = event.target.value;

    console.log({ selectTheme });

    setCurrentState(selectTheme);

    Cookies.set("theme", selectTheme);
  };

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
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;
