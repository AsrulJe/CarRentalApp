import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";

import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";

function Models() {
  const carList = [
    { image: CarImg1, name: "Audi A1", brand: "Audi", price: "RM 45" },
    { image: CarImg2, name: "Golf 6", brand: "VW", price: "RM 37" },
    { image: CarImg3, name: "Toyota", brand: "Camry", price: "RM 30" },
    { image: CarImg4, name: "BMW 320", brand: "ModernLine", price: "RM 35" },
    { image: CarImg5, name: "Mercedes", brand: "Benz GLK", price: "RM 50" },
    { image: CarImg6, name: "Passat", brand: "VW", price: "RM 28" },
  ];

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {carList.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Models;
