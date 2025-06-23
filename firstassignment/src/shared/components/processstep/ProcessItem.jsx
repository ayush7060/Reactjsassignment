export default function ProcessItem() {
  //const {heading,description,steps}=processData;
  return (
    //processData.map((values,index)=>{
    <div className="row g-4">
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="steps-item p-4 mb-4">
          <h4>Come In Contact</h4>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            dolorem!
          </p>
          <div className="setps-number">01.</div>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="steps-item p-4 mb-4">
          <h4>Choose A Car</h4>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            dolorem!
          </p>
          <div className="setps-number">02.</div>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="steps-item p-4 mb-4">
          <h4>Enjoy Driving</h4>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            dolorem!
          </p>
          <div className="setps-number">03.</div>
        </div>
      </div>
    </div>
  );
}
