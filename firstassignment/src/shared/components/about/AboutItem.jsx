import image from '../../../assets/image/about-icon-1.png'
import img2 from '../../../assets/image/about-icon-2.png'
import img3 from '../../../assets/image/attachment-img.jpg' 

export default function AboutItems() {
  return (
    <div className="about-item">
                            <div className="pb-5">
                                <h1 className="display-5 text-capitalize">Sahosoft <span className="text-primary">About</span></h1>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                                </p>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="about-item-inner border p-4">
                                        <div className="about-icon mb-4">
                                            <img src={image} className="img-fluid w-50 h-50" alt="Icon"/>
                                        </div>
                                        <h5 className="mb-3">Our Vision</h5>
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-item-inner border p-4">
                                        <div className="about-icon mb-4">
                                            <img src={img2} className="img-fluid h-50 w-50" alt="Icon"/>
                                        </div>
                                        <h5 className="mb-3">Our Mision</h5>
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-item my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati in!
                            </p>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="text-center rounded bg-secondary p-4">
                                        <h1 className="display-6 text-white">17</h1>
                                        <h5 className="text-light mb-0">Years Of Experience</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="rounded">
                                        <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Morbi tristique senectus</p>
                                        <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> A scelerisque purus</p>
                                        <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Dictumst vestibulum</p>
                                        <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> dio aenean sed adipiscing</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center">
                                    <a href="#" className="btn btn-primary rounded py-3 px-5">More About Us</a>
                                </div>
                                <div className="col-lg-7">
                                    <div className="d-flex align-items-center">
                                        <img src={img3} className="img-fluid rounded-circle border border-4 border-secondary" style={{width: '100px', height: '100px'}} alt="Image"/>
                                        <div className="ms-4">
                                            <h4>William Burgess</h4>
                                            <p className="mb-0">Carveo Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}