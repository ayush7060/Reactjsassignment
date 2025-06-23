import {Component} from 'react';
import image from '../../../assets/image/about-img.jpg'
import img1 from '../../../assets/image/about-img-1.jpg'
 
export default class AboutImages extends  Component{
render() {
    return (
       <div className="about-img">
                            <div className="img-1">
                                <img src={image} className="img-fluid rounded h-100 w-100" alt=""/>
                            </div>
                            <div className="img-2">
                            <img src={img1}className="img-fluid rounded w-100" alt=""/>
                            </div>
                        </div>
    )
  }

}