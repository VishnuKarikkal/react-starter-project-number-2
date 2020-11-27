import React from 'react';
import '../../css/services.css';
import img1 from '../../images/svg4.svg';
import img2 from '../../images/svg5.svg';
import img3 from '../../images/svg6.svg';


function Services() {
    return (
        <div className="services container-fluid text-center">
            <h1>Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4">
                   
                     <div class="card">
                         <img class="card-img-top" src={img1} alt="CardImg" />
                             <div class="card-body">
                                 <h5 class="card-title">Title</h5>
                                 <p class="card-text">Something...</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4 col-md-4">
                        <div class="card">
                         <img class="card-img-top" src={img2} alt="CardImg" />
                             <div class="card-body">
                                 <h5 class="card-title">Title</h5>
                                 <p class="card-text">Something...</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4 col-md-4">

                    <div class="card">
                         <img class="card-img-top" src={img3} alt="CardImg" />
                             <div class="card-body">
                                 <h5 class="card-title">Title</h5>
                                 <p class="card-text">Something...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
