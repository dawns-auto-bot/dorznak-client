import Item from "@mui/material/Grid";
import * as React from "react";
import { Paper } from "@mui/material";
import signs from "../../../assets/img/signs/signs.png";
import basics from "../../../assets/img/basics/DSCN2360.jpg";
import led from "../../../assets/img/led-signs/led.png";
import idn from "../../../assets/img/idn/idn.jpg";
import parking from "../../../assets/img/parking/parking.jpg";
import flashlight from "../../../assets/img/flashlight/flashlight.jpg";
import LeftBarItem from "./leftBarItem";
const LeftBar = () => {
  const leftBarItems = [
    { title: "Знаки дорожные", src: signs, link: "/signs" },
    { title: "Основы дорожных знаков", src: basics, link: "/base" },
    { title: "Светодиодные знаки", src: led, link: "/led" },
    { title: "Лежачие полицейские", src: idn, link: "/idn" },
    { title: "Оборудование для парковок", src: parking, link: "/parking" },
    { title: "Фонари сигнальные", src: flashlight, link: "/flash" },
  ];
  return (
    <Item>
      <Paper elevation={3} sx={{ padding: "1rem", mt: "5.2rem" }}>
        {leftBarItems.map((item) => (
          <LeftBarItem
            title={item.title}
            src={item.src}
            link={item.link}
            key={item.link}
          />
        ))}
      </Paper>
    </Item>
  );
};
export default LeftBar;
