import BlogHeader from "./BlogHeader";
import BlogItems from "./BlogItems";

 

 export default function BlogSection() {
  return (
     <div className="container-fluid blog py-5">
            <div className="container py-5">
                <BlogHeader />
                <BlogItems/>
                 
            </div>
        </div>
            
  )
}       