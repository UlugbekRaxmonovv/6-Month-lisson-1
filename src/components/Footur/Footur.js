import React from 'react';
import './Footur.css'
import rasm1 from '../../assent/img/fas.png'
import rams2 from '../../assent/img/insta.png'
import rasm3 from '../../assent/img/til.png'
import rasm4 from '../../assent/img/yutu.png'
import rasm5 from '../../assent/img/right.png'

const Footur = () => {
    return (
      
        <div className='footur'>
            <div className="container">
                <div className="footur-hammasi">
                <div className="footur-all">
                <ul>
                <h1>SUPPORT</h1>
                    <li>
                        <a href="" className="">Contact us</a>
                    </li>
                    <li>
                        <a href="" className="">User Guide</a>
                    </li>
                    <li>
                        <a href="" className="">Warranty</a>
                    </li>
                    <li>
                        <a href="" className="">International Warranty</a>
                    </li>
                    <li>
                        <a href="" className="">EU Declaration of Conformity</a>
                    </li>
                    <li>
                        <a href="" className="">Scooter Safety Notice</a>
                    </li>
                    </ul>
            </div>
            <div className="footur-all">
                <ul>
                <h1>ABOUT US</h1>
                    <li>
                        <a href="" className="">Xiaomi</a>
                    </li>
                    <li>
                        <a href="" className="">Leadership Team</a>
                    </li>
                    <li>
                        <a href="" className="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="" className="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="" className="">Investor Relations</a>
                    </li>
                    <li>
                        <a href="" className="">Sustainability</a>
                    </li>
                    <li>
                        <a href="" className="">Trust Center</a>
                    </li>
                    <li>
                        <a href="" className="">Xiaomi Accessibility</a>
                    </li>
                    </ul>
            </div>
            <div className="footur-all">
                <ul>
                <h1>ABOUT US</h1>
                    <li>
                        <a href="" className="">Xiaomi Creators</a>
                    </li>
                    <li>
                        <a href="" className="">Xiaomi Studios</a>
                    </li>
                    <li>
                        <a href="" className="">Xiaomi Imagery</a>
                    </li>
                    <li>
                        <a href="" className="">Xiaomi Master Class
</a>
                    </li>
                    <li>
                        <a href="" className="">Xiaomi Master Class
</a>
                    </li>
                   
                    </ul>
            </div>
            <div className="footur-all">
                <ul>
                <h1>Follow Xiaomi</h1>
                   <div className="ulLI">
                   <li>
                       <img src={rasm1} alt="" />
                    </li>
                    <li>
                        <img src={rams2} alt="" />
                    </li>
                    <li>
                       <img src={rasm3} alt="" />
                    </li>
                    <li>
                      <img src= {rasm4} alt=""/>
                    </li>
                   </div>
                   <p>Lets stay in touch</p>

                   <div className="input">
                   <div className="input-all">
                   <form action="">  <input type="email" placeholder='Enter email address' /></form>
                    </div>
                    <div className="input-all">
                     <img src={rasm5} alt="" />
                    </div>
                   </div>
                    </ul>
            </div>
                </div>
            </div>
           
            
           
        </div>
    );
}

export default Footur;
