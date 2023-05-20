import React from "react";
import "./Testiimony.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Jhon from "../../assets/Jhon.png";
import Siti from "../../assets/Siti.png";
import Angel from "../../assets/Angel.png";

function Testimony() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src={Jhon} alt="Jhon" />
        <div className="myCarousel">
          <h3>Jhon Fultz</h3>
          <h4>Mahasiswa</h4>
          <p>
            Bahannya sangat bagus, lembut, nyaman, warnanya juga sangat awet dan
            tidak gampang pudar
          </p>
        </div>
      </div>

      <div>
        <img src={Siti} alt="Siti" />
        <div className="myCarousel">
          <h3>Siti Keystone</h3>
          <h4>Designer</h4>
          <p>
            Proses pemesanan hingga jadi dikerjakan sangat cepat, hasil
            memuaskan
          </p>
        </div>
      </div>

      <div>
        <img src={Angel} alt="Angel" />
        <div className="myCarousel">
          <h3>Angeel Sorel</h3>
          <h4>Designer</h4>
          <p>
            Sempat ragu karena harga murah, tetapi kualitasnya memang
            benar-benar mewah!
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default Testimony;
