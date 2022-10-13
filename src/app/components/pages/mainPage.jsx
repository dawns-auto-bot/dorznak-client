import React from "react";
import Slider from "react-slick";
import { Typography, Box } from "@mui/material";
import do11 from "../../assets/img/main/11do.png";
import masks from "../../assets/img/main/masks.png";
import zip from "../../assets/img/main/zip.jpg";
import arrow from "../../assets/img/main/arrow.jpg";
import baik from "../../assets/img/main/baik.jpg";

const MainPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider">
      <Box p={2} sx={{ textAlign: "center", color: "#ef7f1a" }}>
        <Typography variant="h3" component={"h3"}>
          ООО "Дорзнак"
        </Typography>
        <Typography variant="h4" component={"h4"}>
          Производство и продажа средств обеспечения безопасности дорожного
          движения
        </Typography>
      </Box>
      <Slider {...settings}>
        <div>
          <Typography variant="subtitle1" component={"h3"}>
            Дорожные знаки ГОСТ 52290-2004
          </Typography>
          <img className="slide-img" src={masks} alt="img1" />
        </div>
        <div>
          <Typography variant="subtitle1" component={"h3"}>
            Барьерное ограждениие 11ДО
          </Typography>
          <img className="slide-img" src={do11} alt="img2" />
        </div>
        <div>
          <Typography variant="subtitle1" component={"h3"}>
            Знаки индивидуального проектирования
          </Typography>
          <img className="slide-img" src={zip} alt="img3" />
        </div>
        <div>
          <Typography variant="subtitle1" component={"h3"}>
            Разметка дорожная
          </Typography>
          <img className="slide-img" src={arrow} alt="img4" />
        </div>
        <div>
          <Typography variant="subtitle1" component={"h3"}>
            Обустройство пешеходных переходов
          </Typography>
          <img className="slide-img" src={baik} alt="img5" />
        </div>
      </Slider>
      <Box p={2} sx={{ textAlign: "left" }}>
        <Typography variant="subtitle1" component={"h5"}>
          Oсновным направлением нашей деятельности является производство
          дорожных знаков, их последующая установка. Специалисты Компании
          «Дорзнак» изготовят любые дорожные знаки согласно ГОСТ Р52290-2004, а
          так же дорожные знаки индивидуального проектирования. Благодаря
          использованию высокоточных технологий имеется возможность изготовления
          дорожных знаков, табличек, указателей по индивидуальным эскизам
          Заказчика. Гарантией качества дорожных знаков, изготовленных на
          производстве нашей компании и установленных нашими специалистами,
          является использование высококачественных сертифицированных
          материалов, современного оборудования, компетентность персонала.
          Заказывая дорожные знаки в нашей компании Вы получаете уверенность в
          том, что обратились действительно к профессионалам, так как мы
          предлагаем индивидуальные решения, кратчайшие сроки по изготовлению и
          монтажу в совокупности с минимальными ценами и гибкой системой скидок.
        </Typography>
      </Box>
    </div>
  );
};
export default MainPage;
