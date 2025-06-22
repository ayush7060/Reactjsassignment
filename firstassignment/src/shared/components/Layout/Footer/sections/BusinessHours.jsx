 
 export default function BusinessHours() {
   return (
     <div className="col-md-6 col-lg-6 col-xl-3">
       <div className="footer-item d-flex flex-column">
         <h4 className="text-white mb-4">Business Hours</h4>
         <div className="mb-3">
           <h6 className="text-muted mb-0">Mon - Friday:</h6>
           <p className="text-white mb-0">09.00 am to 07.00 pm</p>
         </div>
         <div className="mb-3">
           <h6 className="text-muted mb-0">Saturday:</h6>
           <p className="text-white mb-0">10.00 am to 05.00 pm</p>
         </div>
         <div className="mb-3">
           <h6 className="text-muted mb-0">Vacation:</h6>
           <p className="text-white mb-0">All Sunday is our vacation</p>
         </div>
       </div>
     </div>
   );
 }
