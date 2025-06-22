export default function AboutUs(){
    return (
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <div className="footer-item">
            <h4 className="text-white mb-4">About Us</h4>
            <p className="mb-3">
              Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur adipiscing
              elit.
            </p>
          </div>
          <div className="position-relative">
            <input
              className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
}