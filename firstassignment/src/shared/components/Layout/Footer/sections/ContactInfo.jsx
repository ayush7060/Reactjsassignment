export  default function Contactinfo(){
    return(
         <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href="#"><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href="mailto:info@example.com"><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href="tel:+012 345 67890"><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="tel:+012 345 67890" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a>
                            <div className="d-flex">
                                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
    )
}