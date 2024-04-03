import React from 'react';
import './Hero.css'
import rasm1 from '../../assent/img/8043..core.large.jpg'
import rasm2 from '../../assent/img/ecbc7d01bcb46191b7c100975fd6baac.png'
import rasm3 from '../../assent/img/scale_1200 (1).png'
import rasm4 from '../../assent/img/images.jpg'
import rasm5 from '../../assent/img/images (1).jpg'
import rasm6 from '../../assent/img/images (2).jpg'

const Hero = () => {
    return (
        <div className='box'>
            <div className="container">
                <div className="box-all">
                    <div className="box-link">
                        <h1>Exsplore your future product</h1>
                        <p>Create our iconic moment</p>
                        <button>Learn more</button>
                    </div>
                </div>

              <h1 className='h-1'>Featured Products</h1>
                <div className="column">
                <div className="column-all">
                    <a href="" className="all">Stayn on Trend</a>
                    </div>
                    <div className="column-all"> 
                    <a href="" className="all">Gaming Essentials</a>
                    </div>
                    <div className="column-all"> 
                    <a href="" className="all">Enjoy the Outdoors</a>
                    </div>
                    <div className="column-all"> 
                    <a href="" className="all">Latest Flagship</a>
                   
                    </div>
                    
                </div>


                <div className="card">
              <div className="list">
              <div className="card-all1">
                        <img src={rasm3} alt="" />
                    </div>
                    <div className="card-all">
                       <h1>Readmi Not <span>13</span> Pro+ <span className='span'>5G</span></h1>
                       <h4>Xiaomi Fan Festival Special aEdition</h4>
                       <p>Limited availability | Mystic Silver</p>
                       <div className='bnt'>Learn more</div>
                    </div>
              </div>

              <div className="al1">
              <div className="al2">
                    <div className="al3">
                        <img src={rasm4} alt="" />
                        <h1>Redmi Note 13 5G</h1>
                        <p>Super-clear 108MP triple camera</p>
                        <div className="btn2">Learn more</div>
                    </div>
                </div>
                <div className="al2">
                    <div className="al3">
                        <img src={rasm5} alt="" />
                        <h1>Redmi Note 13 5G</h1>
                        <p>Super-clear 108MP triple camera</p>
                        <div className="btn2">Learn more</div>
                    </div>
                </div>
                <div className="al2">
                    <div className="al3">
                        <img src={rasm6} alt="" />
                        <h1>Redmi Note 13 5G</h1>
                        <p>Super-clear 108MP triple camera</p>
                        <div className="btn2">Learn more</div>
                    </div>
                </div>
                <div className="al2">
                    <div className="al3">
                        <img src={rasm4} alt="" />
                        <h1>Redmi Note 13 5G</h1>
                        <p>Super-clear 108MP triple camera</p>
                        <div className="btn2">Learn more</div>
                    </div>
                </div>
              </div>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;
