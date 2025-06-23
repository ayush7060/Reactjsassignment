import TeamHeader from "./TeamHeader";
import TeamMember from "./TeamMember";

export default function TeamSection() {
  return (
       <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <TeamHeader/>
        <TeamMember/>
      </div>
    </div>
  )
}