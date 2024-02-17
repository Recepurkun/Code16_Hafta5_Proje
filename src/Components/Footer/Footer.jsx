import React,{useEffect} from "react";
import "./footer.css";
import video4 from "../../assets/video4.mp4";
import { IoIosSend } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutube,
  FaTripadvisor,
  FaAngleRight,
} from "react-icons/fa";

import Aos from "aos"
import 'aos/dist/aos.css'

function Footer() {
    //scroll animasyonu için bir hook kullanıyoruz
    useEffect(()=>{
      Aos.init({duration: 2000 })
    },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video4} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text" data-aos="fade-up">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <IoIosSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              facere hic alias animi, doloremque iure praesentium est sed iusto
              delectus ipsum tempora rerum vero velit quidem nisi reprehenderit
              porro esse.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaInstagramSquare className="icon" />
              <FaTwitterSquare className="icon" />
              <FaYoutube className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group One */}
            <div data-aos="fade-up" 
            data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div data-aos="fade-up"  data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" 
            data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Tokyo
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Ocenia
              </li>
            </div>

          </div>

          <div className="footerDiv">
            <small>Recep Urkun</small>
            <small> | 2024</small>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
