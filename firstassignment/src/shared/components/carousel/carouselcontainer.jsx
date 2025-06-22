import CarouselPromoText from "./ReservationForm/CarouselPromoText";
import ReservationForm from "./ReservationForm/ReservationForm";
import image from '../../../assets/image/carousel-2.jpg'; 
import Carouselitem from "./ReservationForm/CarouselItems";
 
 
 

export default function Carouselcontainer() {
    return(
        //   Carousel Start  
              <div className="header-carousel">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src={image} className="img-fluid w-100" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container py-4">
                                <div className="row g-5">
                                    <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{animationDelay: '1s'}}>
                                    <ReservationForm/>
                                    </div>
                                    <CarouselPromoText/>
                                </div>
                            </div>
                        </div>
                    </div>
					 <Carouselitem/>
                </div>
            </div>
        </div>
         // Carousel End  
    )
}