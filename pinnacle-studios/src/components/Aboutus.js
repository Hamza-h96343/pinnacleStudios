import './aboutUs.css';
import React from 'react';
import {Link} from 'react-router-dom';
import aboutImage from '../assets/about-us.png';

const aboutUs = ({isVisible}) => {
  return (
    <section className="aboutUs-section">
        <section id='aboutus' className={`aboutUs-container ${isVisible ? 'fade-in' : ''}`}>
            <div className='aboutUs-content'>
                <div className='column-left'>

                    <h1>
                        Most brands struggle to reach their full potential
                    </h1>
                    <p>
                        Inconsistent branding is one of the major reasons brands fail to achieve its potential.
                         Developing a brand strategy, and a brand identity system can solve this problem.
                    </p>
                    
                    <Link to="/contactuspage">
                        <button className='contact-us'>
                            Contact Now
                        </button>
                    </Link>
                    
                </div>
                <div className='column-right'>
                    <div className="figure">
                        <img src={aboutImage} alt="showing aboutUs figure" />
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
};

export default aboutUs;
