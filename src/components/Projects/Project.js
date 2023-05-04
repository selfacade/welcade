import React, {useEffect} from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="project_container">
         <div className="project_title" data-aos="fade-right">Our Competed Projects</div>
         <div className="project_cards">
            <div className="project_card_1">
                <div data-aos="fade-right" data-aos-duration="1000" className="project_card1"></div>
                <div data-aos="fade-right" data-aos-duration="1000" className="project_card1"></div>
            </div>
            <div className="project_card_2">
                <a data-aos="fade-up" data-aos-duration="1000" href="http://narayanchandratrust.org"className="project_card2" target="_blank" rel="noopener noreferrer">
                </a>
                <a data-aos="fade-up" data-aos-duration="1000" href="http://" className="project_card2" target="_blank" rel="noopener noreferrer">
                </a>
                <a href="http://" data-aos="fade-up" data-aos-duration="1000" target="_blank" className="project_card2" rel="noopener noreferrer">
                </a>
            </div>
            <div className="project_card_3">
                <div data-aos="fade-down" data-aos-duration="8000" className="project_card3"></div>
                <div data-aos="fade-up" data-aos-duration="8000" className="project_card3"></div>
            </div>
                <div className="project_card_4">
                <div data-aos="fade-left" data-aos-duration="10000" className="project_card4"></div>
                </div>
         </div>
    </div>
  )
}
