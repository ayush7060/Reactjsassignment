import teamimg1 from '../../../assets/image/team-1.jpg';
import teamimg2 from '../../../assets/image/team-2.jpg';
import teamimg3 from '../../../assets/image/team-3.jpg';
import teamimg4 from '../../../assets/image/team-4.jpg';
export default function TeamMember() {
  return (
    <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src= {teamimg1} className="img-fluid rounded w-100" alt="Image"/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src={teamimg2} className="img-fluid rounded w-100" alt="Image"/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src={teamimg3} className="img-fluid rounded w-100" alt="Image"/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src={teamimg4} className="img-fluid rounded w-100" alt="Image"/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
  )
}
