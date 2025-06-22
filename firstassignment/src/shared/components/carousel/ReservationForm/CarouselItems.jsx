import CarouselPromoText from "./CarouselPromoText";
import ReservationForm from "./ReservationForm";
import image from '../../../../assets/image/carousel-1.jpg';

export default function Carouselitem() {
  return (
    <div className="carousel-item">
      <img src={image} className="img-fluid w-100" alt="First slide" />
      <div className="carousel-caption">
        <div className="container py-4">
          <div className="row g-5">
            <div
              className="col-lg-6 fadeInLeft animated"
              data-animation="fadeInLeft"
              data-delay="1s"
              style={{animationDelay: '1s'}}
            >
              <ReservationForm />
            </div>
            <CarouselPromoText />
          </div>
        </div>
      </div>
    </div>
  )
}