 import image1 from '../../../assets/image/blog-1.jpg'
 import image2 from '../../../assets/image/blog-2.jpg'        
 import image3 from '../../../assets/image/blog-3.jpg' 

 export default function BlogItems() {
  return (
     <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image1} className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <div className="blog-date">30 Dec 2025</div>
                                <div className="blog-comment my-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                                </div>
                                <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" className="">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image2} className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <div className="blog-date">25 Dec 2025</div>
                                <div className="blog-comment my-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                                </div>
                                <a href="#" className="h4 d-block mb-3">Rental cost of sport and other cars</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" className="">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image3} className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <div className="blog-date">27 Dec 2025</div>
                                <div className="blog-comment my-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                                </div>
                                <a href="#" className="h4 d-block mb-3">Document required for car rental</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" className="">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            
  )
}       