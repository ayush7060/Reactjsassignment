import CounterItems from "./CounterItem";

export default function CounterSections() {
  return (
     <div className="container-fluid counter bg-secondary py-5">
            <div className="container py-5">
                <CounterItems/>
            </div>
        </div>
  )
}