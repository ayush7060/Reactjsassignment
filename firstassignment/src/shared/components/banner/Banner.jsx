import image from  '../../../assets/image/banner-1.jpg'
import BannerContent from './BannerContent'
export default function BannerMain() {
    return(
        <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="banner-item rounded">
                    <img src={image} className="img-fluid rounded w-100" alt=""/>
                     <BannerContent/>
                </div>
            </div>
        </div>
    )
}