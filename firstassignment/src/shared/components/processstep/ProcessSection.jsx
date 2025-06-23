import ProcessHeader from "./ProcessHeader"
import ProcessItem from "./ProcessItem"

export default function ProcessSection() {
    // const processData=[
    //     {heading:"Come In Contact",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",step: '01'},
    //     {heading:"Choose A Car",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",step: '02'},
    //     {heading:"Enjoy Driving",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",step: '03'}]

  return (
     <div className="container-fluid steps py-5">
            <div className="container py-5">
                <ProcessHeader/>
                <ProcessItem/>
            </div>
        </div>
  )
}