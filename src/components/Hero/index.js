import React from 'react'
import '../../css/hero.css';
import video from '../../videos/video2.mp4';

const Hero = () => {
// const {hover,setHover}=useState(false);
// const onHover=()=>
// {
//     setHover(!hover);
// }

    return (
        <div className="hero">
            <div className="heroBG">
                <video className="videoBG" autoPlay loop muted src={video} type="video/mp4"></video>
            </div>
            <div className="hero-content">
            <h1>Welcome Aboard Captain!!</h1>
            <p>Lets Start the Adventure!
           
            </p>
    <button className='btn btn-success' to="signup">Lets Go<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
</svg>
    </button>
            </div>
        </div>
    )
}

export default Hero
