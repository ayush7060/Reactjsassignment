import AboutImages from "./AboutImages";
import AboutItems from "./AboutItem";

export default function AboutSection(){
    return(
        <div className="container-fluid overflow-hidden about py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <AboutItems/>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                       <AboutImages/>
                    </div>
                </div>
            </div>
        </div>
    )
}