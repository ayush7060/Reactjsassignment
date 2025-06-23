import ServiceHeader from "./ServiceHeader";
import ServiceItem from "./ServiceItem";

export default function ServiceMain() {
  return (
     <div className="container-fluid service py-5">
            <div className="container py-5">
			    <ServiceHeader/>
                <ServiceItem/>
            </div>
        </div>
  )
}