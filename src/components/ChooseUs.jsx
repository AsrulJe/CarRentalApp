import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import LogoUpnamics from "../images/logo/logoUpnamics.png";
import LogoAIE from "../images/logo/AIE.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">

              <div className="text-container__left">
                <h4>Our Partners</h4>
                <img src={LogoUpnamics} className="logoUpnamics"
                  />
                <h2>
                  Upnamics Sdn Bhd</h2>
                <p>
                <b>Upnamics Sdn Bhd</b> is a management consulting, advisory services and
outsourcing company with focuses in Digital Economy initiatives. Incorporated in
1997, the company is owned and managed by bumiputera entrepreneurs, and it
is the local’s leading consultancy firm in Malaysia Digital (MD) initiatives.
Upnamics has partnership with leading clients and organizations from the
private, public and social sectors in developing premier business location for ICT
industries and business ecosystem that promote hi-growth of entrepreneurship
and startup companies.
                </p>
                <img src={LogoAIE} className="logoAIE"
                  />
                <h2>
                 Akar Indah Engineering Sdn Bhd</h2>
                <p>
                <b>Akar Indah Engineering Sdn Bhd (AIE)</b> is a solutions provider, management
consulting and specialised training services company focusses in engineering,
information technology and Industry 4.0 with aim to reduce the costs and
increase the productivity whilst maintaining a sustainable approach in all
aspects.
AIE have partner with leading clients and organizations from the private, public
and social sectors in developing and promoting the adoption of Industry 4.0
(i4.0) in the country.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
