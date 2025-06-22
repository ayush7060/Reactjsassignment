export default function Navbar(){
    return(
        <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3"></i>Sahosoft</h1>
                        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="blog.html" className="nav-item nav-link">Blog</a>
                            
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="feature.html" className="dropdown-item">Our Feature</a>
                                    <a href="cars.html" className="dropdown-item">Our Cars</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}