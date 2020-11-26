import React from 'react'
import '../../css/info.css';
import {homeObjectOne,homeObjectTwo,homeObjectThree} from './data';
import img1 from '../../images/svg1.svg';
import img2 from '../../images/svg2.svg';
import img3 from '../../images/svg3.svg';

function InfoSection() {
    return (
        <div>
             <div className="container-fluid info-container" id={homeObjectOne.id}>
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                     <div className='col-content'>
                         <p>{homeObjectOne.subtitle}</p>
                         <h1>{homeObjectOne.topLine}</h1>
                         <p>{homeObjectOne.headLine}</p>
                         <button className="btn btn-success" to='home' 
                         smooth={true} duration={500} offset={-80} spy={true}>{homeObjectOne.btnLabel}</button>
                     </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="col-content">
                        <img src={img1} alt={homeObjectOne.alt}></img>
                        <p>{homeObjectOne.desc}</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="container-fluid info-container" id={homeObjectTwo.id}>
            <div className="row align-items-center">
                 <div className="col-md-6 text-center">
                    <div className="col-content">
                        <img src={img2} alt={homeObjectTwo.alt}></img>
                        <p>{homeObjectTwo.desc}</p>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                     <div className='col-content'>
                         <p>{homeObjectTwo.subtitle}</p>
                         <h1>{homeObjectTwo.topLine}</h1>
                         <p>{homeObjectTwo.headLine}</p>
                         <button className="btn btn-success" 
                         to='home' smooth={true} duration={500} offset={-80} spy={true}>{homeObjectTwo.btnLabel}</button>
                     </div>
                </div>
                
            </div>
            </div>

            <div className="container-fluid info-container" id={homeObjectThree.id}>
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                     <div className='col-content'>
                         <p>{homeObjectThree.subtitle}</p>
                         <h1>{homeObjectThree.topLine}</h1>
                         <p>{homeObjectThree.headLine}</p>
                         <button className="btn btn-success" to='home' 
                         smooth={true} duration={500} offset={-80} spy={true}>{homeObjectThree.btnLabel}</button>
                     </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="col-content">
                        <img src={img3} alt={homeObjectThree.alt}></img>
                        <p>{homeObjectThree.desc}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
       
    )
}

export default InfoSection
