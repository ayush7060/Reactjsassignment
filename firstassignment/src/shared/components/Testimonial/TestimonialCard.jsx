import imaget1 from '../../../assets/image/testimonial-1.jpg';
import imaget2 from '../../../assets/image/testimonial-2.jpg';       
import imaget3 from '../../../assets/image/testimonial-2.jpg';     
export default function TestimonialCard() {
  return (
    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item">
                        <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                        </div>
                        <div className="testimonial-inner p-4">
                            <img src={imaget1} className="img-fluid" alt=""/>
                            <div className="ms-4">
                                <h4>Person Name</h4>
                                <p>Profession</p>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star text-body"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top rounded-bottom p-4">
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                        </div>
                        <div className="testimonial-inner p-4">
                            <img src= {imaget2} className="img-fluid" alt=""/>
                            <div className="ms-4">
                                <h4>Person Name</h4>
                                <p>Profession</p>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star text-body"></i>
                                    <i className="fas fa-star text-body"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top rounded-bottom p-4">
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                        </div>
                        <div className="testimonial-inner p-4">
                            <img src={imaget3} className="img-fluid" alt=""/>
                            <div className="ms-4">
                                <h4>Person Name</h4>
                                <p>Profession</p>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star text-body"></i>
                                    <i className="fas fa-star text-body"></i>
                                    <i className="fas fa-star text-body"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top rounded-bottom p-4">
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                        </div>
                    </div>
                </div>
  )
}