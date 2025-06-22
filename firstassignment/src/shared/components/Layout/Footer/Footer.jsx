import AboutUs from "./sections/Aboutus";
import BusinessHours from "./sections/BusinessHours";
import Contactinfo from "./sections/ContactInfo";
import Copyright from "./sections/Copyright";
import QuickLink from "./sections/quicklinks";

export default function Footer(){
    return(
        <>
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                   <AboutUs/>
                   <QuickLink/>
                   <BusinessHours/>
                   <Contactinfo/>
                   
                </div>
            </div>
        </div>
        <div className="container-fluid copyright py-4">
            <div className="container">
                <Copyright/>
            </div>
        </div>
        </>
    )
}