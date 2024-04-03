
import React, { useEffect } from 'react';
import './Header.css'
import img  from '../../assent/img/mi.png'
import siar from '../../assent/img/siar.png'
import usir from '../../assent/img/usr.png'
import minu from '../../assent/img/menu.png'
import tv from '../../assent/img/tv.png'
import ikon from '../../assent/img/hive.png'
import rasm1 from '../../assent/img/color.png'
import rasm2 from '../../assent/img/sketch.png'
import rasm3 from '../../assent/img/color.png'
import rasm4 from '../../assent/img/lam.png'
import rasm5 from '../../assent/img/stopwatch.png'
import rasm6 from '../../assent/img/book.png'
import rasm7 from '../../assent/img/sort.png'
import rasm8 from '../../assent/img/cable.png'
import rasm9 from '../../assent/img/meta.png'

const Header = () => {
  useEffect(() => {
    const menu = document.querySelector('.menu');
    const navLink = document.querySelector('.nav-link');
    const toggleNavLink = () => {
      navLink.classList.toggle('show');
    };
    menu.addEventListener("click", toggleNavLink);
    return () => {
      menu.removeEventListener("click", toggleNavLink);
    };
  }, []);


  useEffect(()=>{
    const Phone =document.querySelector('.Phone')
    const all1 =document.querySelector('.all1')
    Phone.addEventListener('mouseenter',()=>{
      all1.style.display= 'block'
    })  
  })
  useEffect(()=>{
    const Phone =document.querySelector('.Phone')
    const all1 =document.querySelector('.all1')
      Phone.addEventListener('mouseleave',()=>{
    all1.style.display= 'none'
  })
  })
  


  useEffect(()=>{
    const Phone =document.querySelector('.Smart')
    const all1 =document.querySelector('.hammasi')
    Phone.addEventListener('mouseenter',()=>{
      all1.style.display= 'block'
    })  
  })
  useEffect(()=>{
    const Phone =document.querySelector('.Smart')
    const all1 =document.querySelector('.hammasi')
      Phone.addEventListener('mouseleave',()=>{
    all1.style.display= 'none'
  })
  })


  useEffect(()=>{
    const Phone =document.querySelector('.Life')
    const all1 =document.querySelector('.hammasi1')
    Phone.addEventListener('mouseenter',()=>{
      all1.style.display= 'block'
    })  
  })
  useEffect(()=>{
    const Phone =document.querySelector('.Life')
    const all1 =document.querySelector('.hammasi1')
      Phone.addEventListener('mouseleave',()=>{
    all1.style.display= 'none'
  })
  })
  
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav">
            <img src={img} alt="" />
            <a href="" className="Phone">Phone</a>
            <a href="" className="Smart">Smart Home</a>
            <a href="" className="Life">Life Style</a>
          </div>

          <div className="nav-link">
            <div className="nav-etim">
              <a href="" className="">Discover</a>
              <a href="" className="">Support</a>
              <a href="" className=""></a>
              <a href="" className=""><img src={siar} alt="" /></a>
              <a href="" className=""><img src={usir} alt="" /></a>
            </div>
          </div>
          <div className="menu">
            <img src={minu} alt="" />
          </div>
        </nav>
      </div>


      <div className="all1">
    <div className="container">
     <div className="all3">
      <div className="all2">
          <a href="" className="">xiaomi</a>
        </div>
        <div className="all2">
          <a href="" className="">Redmi</a>
        </div>
      </div>
    </div>
    </div>


    <div className="hammasi">
      <div className="container">
        <div className="hammasi-all">
        <div className="hammasi-row">
       <img src={tv} alt="" />
          <p>TV & Media</p>
          </div>
          <div className="hammasi-row">
       <img src={ikon} alt="" />
          <p>Vacuum Cleaner</p>
          </div>
          <div className="hammasi-row">
       <img src={rasm1} alt="" />
          <p>TV & Media</p>
          </div>
          <div className="hammasi-row">
       <img src={ikon} alt="" />
          <p>Envionment Appliance</p>
          </div>
          <div className="hammasi-row">
       <img src={ikon} alt="" />
          <p>Ilimination</p>
          </div>
          <div className="hammasi-row">
       <img src={rasm4} alt="" />
          <p>Smart Divice</p>
          </div>

        </div>
      </div>
    </div>



    <div className="hammasi1">
      <div className="container">
        <div className="hammasi-all1">
        <div className="hammasi-row1">
       <img src={rasm5} alt="" />
          <p>Wearabli</p>
          </div>
          <div className="hammasi-row1">
       <img src={rasm6} alt="" />
          <p>Vehcle</p>
          </div>
          <div className="hammasi-row1">
       <img src={rasm5} alt="" />
          <p>Offic</p>
          </div>
          <div className="hammasi-row1">
       <img src={rasm7} alt="" />
          <p>Personal care</p>
          </div>
          <div className="hammasi-row1">
       <img src={rasm8} alt="" />
          <p>Sport</p>
          </div>
          <div className="hammasi-row1">
       <img src={rasm9} alt="" />
          <p>Accessories</p>
          </div>

        </div>
      </div>
    </div>
    </header>

    
  );
}

export default Header;
