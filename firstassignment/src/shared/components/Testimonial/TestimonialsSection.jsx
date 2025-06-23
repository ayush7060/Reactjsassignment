import TestimonialCard from "./TestimonialCard";
import TestimonialHeader from "./TestimonialsHeader";

export default function TestimonialSection() {
  return (
    <div className="container-fluid testimonial pb-5">
            <div className="container pb-5">
                <TestimonialHeader/>
				<TestimonialCard/>
            </div>
        </div>
  )
}