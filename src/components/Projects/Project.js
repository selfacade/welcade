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
         <div className="divider_2"></div>
         <div className="project_title" data-aos="fade-right">Our Competed Projects</div>
         <div className="project_cards">
            <div className="project_card_1">
                <div data-aos="fade-right" data-aos-duration="1000" className="project_card1"></div>
                <div data-aos="fade-right" data-aos-duration="1000" className="project_card1"></div>
            </div>
            <div className="project_card_2">
                <div data-aos="fade-up" data-aos-duration="1000" className="project_card2"></div>
                <div data-aos="fade-up" data-aos-duration="1000" className="project_card2"></div>
                <div data-aos="fade-up" data-aos-duration="1000" className="project_card2"></div>
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
