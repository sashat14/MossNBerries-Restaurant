import React from 'react';
import orderImage from '../images/laptop_phone.png';
import prepImage from '../images/prep.jpg';
import deliverImage from '../images/delivery.jpg';

const Home = () => {
    return(
        <div className='container'>
            <div className='home-banner-container'>
                <div className='layer'>
                <h1>The V-SPOT</h1>
                <div className='home-banner-buttons'>
                    <a href='#'>Order Now</a>
                </div>
                </div>
            </div>
            <div className='home-card-container'>
                <div className="home-card">
                    <div className='home-img-container'>
                        <img src={orderImage} />
                    </div>
                    <div className='home-card-text'>
                        <h3>You Order</h3>
                        <p></p>
                    </div>
                </div>
                <div className='home-card'>
                    <div className='home-img-container'>
                        <img src={prepImage} />
                    </div>
                    <div className='home-card-text'>
                        <h3>We Prepare</h3>
                        <p></p>
                    </div>
                </div>
                <div className='home-card'>
                    <div className='home-img-container'>
                        <img src={deliverImage} />
                    </div>
                    <div className='home-card-text'>
                        <h3>We Deliver</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Home;