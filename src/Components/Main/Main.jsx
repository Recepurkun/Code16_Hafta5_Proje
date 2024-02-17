import React,{useEffect} from "react";
import "./main.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";

import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Santorini",
    location: "Greece",
    grade: "ROMANTIC ESCAPE",
    fees: "$900",
    description: "Santorini, with its stunning sunsets and white-washed buildings, is a dreamy destination for a romantic escape. Explore the charming villages and enjoy delicious Greek cuisine."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "CULTURAL DISCOVERY",
    fees: "$800",
    description: "Kyoto, with its ancient temples and traditional tea houses, offers a rich cultural experience. Immerse yourself in the beauty of Japanese traditions and explore the serene landscapes."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Maui",
    location: "Hawaii, USA",
    grade: "TROPICAL PARADISE",
    fees: "$1200",
    description: "Maui, with its lush landscapes and pristine beaches, is a tropical paradise that attracts travelers seeking relaxation and adventure. Enjoy water activities and stunning natural beauty."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Barcelona",
    location: "Spain",
    grade: "CITY EXPLORATION",
    fees: "$950",
    description: "Barcelona, known for its unique architecture and vibrant street life, is a perfect destination for city exploration. Visit iconic landmarks and savor delicious Catalan cuisine."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Marrakech",
    location: "Morocco",
    grade: "EXOTIC RETREAT",
    fees: "$1100",
    description: "Marrakech, with its vibrant souks and historic architecture, offers an exotic retreat in the heart of Morocco. Immerse yourself in the rich culture and colorful markets."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Aoraki / Mount Cook",
    location: "New Zealand",
    grade: "MOUNTAIN ADVENTURE",
    fees: "$850",
    description: "Aoraki / Mount Cook, the highest mountain in New Zealand, is a haven for mountain enthusiasts. Experience thrilling adventures and breathtaking alpine landscapes."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Aoraki / Mount Cook",
    location: "New Zealand",
    grade: "MOUNTAIN ADVENTURE",
    fees: "$850",
    description: "Aoraki / Mount Cook, the highest mountain in New Zealand, is a haven for mountain enthusiasts. Experience thrilling adventures and breathtaking alpine landscapes."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Aoraki / Mount Cook",
    location: "New Zealand",
    grade: "MOUNTAIN ADVENTURE",
    fees: "$850",
    description: "Aoraki / Mount Cook, the highest mountain in New Zealand, is a haven for mountain enthusiasts. Experience thrilling adventures and breathtaking alpine landscapes."
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Aoraki / Mount Cook",
    location: "New Zealand",
    grade: "MOUNTAIN ADVENTURE",
    fees: "$850",
    description: "Aoraki / Mount Cook, the highest mountain in New Zealand, is a haven for mountain enthusiasts. Experience thrilling adventures and breathtaking alpine landscapes."
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: "Aoraki / Mount Cook",
    location: "New Zealand",
    grade: "MOUNTAIN ADVENTURE",
    fees: "$850",
    description: "Aoraki / Mount Cook, the highest mountain in New Zealand, is a haven for mountain enthusiasts. Experience thrilling adventures and breathtaking alpine landscapes."
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: "Aoraki / Mount Cook",
    location: "New Zealand",
    grade: "MOUNTAIN ADVENTURE",
    fees: "$850",
    description: "Aoraki / Mount Cook, the highest mountain in New Zealand, is a haven for mountain enthusiasts. Experience thrilling adventures and breathtaking alpine landscapes."
  },
];

function Main() {
    //scroll animasyonu için bir hook kullanıyoruz
    useEffect(()=>{
      Aos.init({duration: 2000 })
    },[])
  
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <FaLocationDot className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    Details <FaClipboardCheck className="icon" />
                  </button>

                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Main;
