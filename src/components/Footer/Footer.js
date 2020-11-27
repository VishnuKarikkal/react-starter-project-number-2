import React from 'react';
import '../../css/footer.css';

function Footer() {
    return (
        <div className="footer container-fluid">
            
                <div className="row  text-center no-gutters py-3">
                    <div className="col-6 col-sm-6 col-lg-3">
                        <h5 className="py-2">About us</h5>
                        <ul>
                            <li>About us</li>
                            <li>carrers</li>
                            <li>submit an idea</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3">
                    <h5 className="py-2">Contact us</h5>
                        <ul>
                            <li>contact</li>
                            <li>support</li>
                            <li>destinations</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3">
                    <h5 className="py-2">Videos</h5>
                        <ul>
                            <li>submit video</li>
                            <li>ambassadors</li>
                            <li>agency</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3">
                    <h5 className="py-2">Social Media</h5>
                        <ul>
                            <li>facebook</li>
                            <li>instagram</li>
                            <li>github</li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center py-3">
                    <div className="col-4">
                        <h2>🤩🤩</h2>
                    </div>
                    <div className="col-6 col-sm-6 align-self-end">
                        <h6> &copy; 2020</h6>
                    </div>
                </div>
           
        </div>
    )
}

export default Footer