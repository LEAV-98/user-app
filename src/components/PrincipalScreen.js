import React, { useEffect } from "react";
import Slider from "react-slick";
import { Header } from "./Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { yellow } from "@material-ui/core/colors";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
//import { Height } from "@material-ui/icons";

export const PrincipalScreen = () => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "carousel-content",
    adaptativeHeight: "true",
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <Header />
      <Slider {...settings} arrows={false}>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571845/bg_1_fwwobp.jpg"
            alt="img"
          />
          <div className="carousel-info">
            <div className="content-text-1">
              <span className="span">Delicious</span>
              <h1>Cocina Italiana</h1>
              <p>
                Si tienes hambre y quieres pedir comida a domicilio, Mickuy
                Pizzas es la mejor opción.
              </p>
              <p>
                <Link to="/products" className="btn btn-order">
                  Ordenar Ahora
                </Link>
              </p>
            </div>
            <div className="content-img">
              <img
                src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571850/bg_1_itoe55.png"
                alt="pizza"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571845/bg_1_fwwobp.jpg"
            alt="img"
          />
          <div className="carousel-info">
            <div className="content-img">
              <img
                src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571846/bg_2_ba2m14.png"
                alt="pizza"
              />
            </div>
            <div className="content-text-1 context-text-2">
              <span className="span">Crunchy</span>
              <h1>Pizza Italiana</h1>
              <p>
                Si tienes hambre y quieres pedir comida a domicilio, Mickuy
                Pizzas es la mejor opción.
              </p>
              <p>
                <Link to="/products" className="btn btn-order">
                  Ordenar Ahora
                </Link>
              </p>
            </div>
            {/* <img
              src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571849/bg_3_e1dwjv.jpg"
              alt="img"
            /> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571849/bg_3_e1dwjv.jpg"
            alt="img"
          />
          <div className="carousel-info">
            <div className="content-text-1 content-text-3">
              <span className="span">Bienvenidos!</span>
              <h1>Cocinamos tu receta de pizza deseada</h1>
              <p>ASÍ ES COMO AGREGAMOS MÁS DE 60 AÑOS DE AMOR A TU PIZZA</p>
              <p>
                <Link to="/products" className="btn btn-order">
                  Ordenar Ahora
                </Link>
              </p>
            </div>{" "}
          </div>
        </div>
      </Slider>
      <div className="ubication-content">
        <div className="info">
          <div className="info-item">
            <div className="d-inline">
              <PhoneIcon style={{ color: yellow[500], fontSize: 20 }} />
              <p>015780023</p>
            </div>

            <p>Abierto de 12:00pm - 11:00pm</p>
          </div>
          <div className="info-item">
            <div className="d-inline">
              <GpsFixedIcon style={{ color: yellow[500], fontSize: 20 }} />
              <p>Avenida Alfredo Benavides 871</p>
            </div>
            <p>Mickuy Pizzas - Local n°1</p>
          </div>
          <div className="info-item">
            <div className="d-inline">
              <QueryBuilderIcon style={{ color: yellow[500], fontSize: 20 }} />
              <p>Abierto Lunes-Viernes</p>
            </div>
            <p>12:00pm - 11:00pm</p>
          </div>
        </div>
        <div className="social-media">
          <div>
            <Link to="/">
              <FacebookIcon style={{ fontSize: 30, color: "white" }} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <TwitterIcon style={{ fontSize: 30, color: "white" }} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <WhatsAppIcon style={{ fontSize: 30, color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-us-content">
        <div className="img-content">
          <img
            src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630593572/about_wcl159.jpg"
            alt="img"
          />
        </div>
        <div className="info-content">
          <h2>
            Bienvenido a
            <span className="span-pizza">
              <LocalPizzaIcon style={{ fontSize: 30 }} />
              Mickuy
            </span>{" "}
            Pizzas
          </h2>
          <p>
            Nuestra pizza es única e inigualable. Creamos y creemos en una pizza
            saludable y que invita a compartir buenos y divertidos momentos con
            las personas que nos rodean. El secreto de una pizza saludable está
            en su masa... y la nuestra es una creación irrepetible! Una masa
            ligera que no genera pesadez al ser comida, siempre crujiente al
            salir de nuestros característicos hornos de piedra y que además
            contiene superfoods como la quinoa, chia y otros más que han sido
            especialmente pensados para ayudar a tu nutrición.
          </p>
        </div>
      </div>
      <div className="services-content">
        <h2>Nuestros Servicios</h2>
        <div className="services-items">
          <div className="service">
            <div className="service-icon">
              <Icon
                className="fas fa-pizza-slice"
                style={{ fontSize: 30, color: "#5c3d03" }}
              />
            </div>
            <div className="service-info">
              <h3>Comida Saludable</h3>
              <p>
                Podrás recibir todas tus comidas en la puerta de tu casa u
                oficina.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service-icon">
              <Icon
                className="fas fa-utensils"
                style={{ fontSize: 30, color: "#5c3d03" }}
              />
            </div>
            <div className="service-info">
              <h3>Delivery Eficiente</h3>
              <p>
                Podrás recibir todas tus comidas en la puerta de tu casa u
                oficina.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service-icon">
              <Icon
                className="fas fa-heartbeat"
                style={{ fontSize: 30, color: "#5c3d03" }}
              />
            </div>
            <div className="service-info">
              <h3>Receta Original</h3>
              <p>
                Podrás recibir todas tus comidas en la puerta de tu casa u
                oficina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
