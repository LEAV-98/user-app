import React from "react";
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

export const PrincipalScreen = () => {
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
      <div>
        <Slider {...settings} arrows={false}>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571845/bg_1_fwwobp.jpg"
              alt="img"
            />
            <div className="carousel-info">
              <div className="content-text-1">
                <span className="span">Delicious</span>
                <h1>Italian Cuizine</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <Link to="/" className="btn btn-order">
                    Order Now
                  </Link>
                  <Link to="/" className="btn btn-view">
                    View Menu
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
                <h1>Italian Pizza</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <Link to="/" className="btn btn-order">
                    Order Now
                  </Link>
                  <Link to="/" className="btn btn-view">
                    View Menu
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1630571849/bg_3_e1dwjv.jpg"
              alt="img"
            />
            <div className="carousel-info">
              <div className="content-text-1 content-text-3">
                <span className="span">Welcome</span>
                <h1>We cooked your desired pizza recipe</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <Link to="/" className="btn btn-order">
                    Order Now
                  </Link>
                  <Link to="/" className="btn btn-view">
                    View Menu
                  </Link>
                </p>
              </div>{" "}
            </div>
          </div>
        </Slider>
      </div>
      <div className="ubication-content">
        <div className="info">
          <div className="info-item">
            <div className="d-inline">
              <PhoneIcon style={{ color: yellow[500], fontSize: 20 }} />
              <p>000 (123) 456 7890</p>
            </div>

            <p>A small river named Duden flows</p>
          </div>
          <div className="info-item">
            <div className="d-inline">
              <GpsFixedIcon style={{ color: yellow[500], fontSize: 20 }} />
              <p>198 West 21th Street</p>
            </div>
            <p>Suite 721 New York NY 10016</p>
          </div>
          <div className="info-item">
            <div className="d-inline">
              <QueryBuilderIcon style={{ color: yellow[500], fontSize: 20 }} />
              <p>Open Monday-Friday</p>
            </div>
            <p>8:00am - 9:00pm</p>
          </div>
        </div>
        <div className="social-media">
          <div>
            <FacebookIcon style={{ fontSize: 30, color: "white" }} />
          </div>
          <div>
            <TwitterIcon style={{ fontSize: 30, color: "white" }} />
          </div>
          <div>
            <WhatsAppIcon style={{ fontSize: 30, color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};
