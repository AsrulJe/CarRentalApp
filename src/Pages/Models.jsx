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
    { image: CarImg1, name: "Bezza", brand: "Perodua", price: "RM 45", transmission: "Automatic", fuelType: "Petrol"},
    { image: CarImg2, name: "City", brand: "Honda", price: "RM 37" , transmission: "Automatic", fuelType: "Petrol"},
    { image: CarImg3, name: "Civic", brand: "Honda", price: "RM 30" , transmission: "Automatic", fuelType: "Petrol"},
    { image: CarImg4, name: "Vios", brand: "Toyota", price: "RM 35", transmission: "Automatic", fuelType: "Petrol"},
    { image: CarImg5, name: "Perdana", brand: "Proton", price: "RM 50" , transmission: "Automatic" , fuelType: "Petrol"},
    { image: CarImg6, name: "Saga", brand: "Proton", price: "RM 28" , transmission: "Automatic" , fuelType: "Petrol"},
    { image: CarImg6, name: "Camry", brand: "Toyota", price: "RM 28" , transmission: "Automatic" , fuelType: "Petrol"},
    { image: CarImg6, name: "Mazda 2", brand: "Mazda", price: "RM 28", transmission: "Automatic" , fuelType: "Petrol"},
    { image: CarImg6, name: "HRV", brand: "Honda", price: "RM 28" , transmission: "Automatic", fuelType: "Petrol"},
    { image: CarImg6, name: "CR-V", brand: "Honda", price: "RM 28" , transmission: "Automatic" , fuelType: "Petrol"},
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
