import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import PartnerLogos from './PartnerLogos';
import CranwellLogo from '../assets/Cranwell Collision.png';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  margin-top: auto;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
`;

// Styling for the partners section wrapper
const PartnerSectionWrapper = styled.div`
  background-color: #2a2a2a;
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 20px;
    font-size: 1.2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background-color: #2e8b57;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 12px;
  }
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: white;
    }
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  
  img {
    max-width: 180px;
    height: auto;
    filter: brightness(0) invert(1);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  svg {
    color: #2e8b57;
    margin-right: 10px;
    margin-top: 3px;
  }
`;

const LocationTitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-right: 10px;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #2e8b57;
    }
    
    svg {
      color: white;
      font-size: 18px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #aaa;
  
  a {
    color: #3cb371;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      {/* Replace PartnersSection with PartnerLogos component */}
      <PartnerSectionWrapper>
        <PartnerLogos />
      </PartnerSectionWrapper>

      <FooterInner>
        <FooterSection>
          <LogoContainer>
            <img src={CranwellLogo} alt="Cranwell Collision Repair Centre" />
          </LogoContainer>
          <p>Cranwell Collision Repair Centre is a Quality and Environmentally Endorsed company providing the highest standards of work in all aspects of collision repairs and panel beating.</p>
          <SocialIcons>
            <a href="https://www.facebook.com/CCRC3020/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/cranwell_collision_albion/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.google.com/maps/place/Cranwell+Collision+Repair+Centre/@-37.781082,144.8619064,15z/data=!4m2!3m1!1s0x0:0xea70e15b4f3f588e?sa=X&ved=2ahUKEwi6t-j6t9f4AhVYzTgGHfDFCesQ_BJ6BAhREAU" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/premises">Premises</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <LocationTitle>Albion</LocationTitle>
              <a href="tel:0383900155">(03) 8390 0155</a>
              <LocationTitle style={{ marginTop: '10px' }}>Braybrook</LocationTitle>
              <a href="tel:0390555008">(03) 9055 5008</a>
            </div>
          </ContactItem>
          
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <LocationTitle>Albion</LocationTitle>
              <a href="mailto:info@cranwellcollision.com.au">info@cranwellcollision.com.au</a>
              <LocationTitle style={{ marginTop: '10px' }}>Braybrook</LocationTitle>
              <a href="mailto:info@ccbraybrook.com.au">info@ccbraybrook.com.au</a>
            </div>
          </ContactItem>
          
          <ContactItem>
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              <LocationTitle>Albion Branch</LocationTitle>
              <p>1/590 Ballarat Road, Albion VIC 3020</p>
              <LocationTitle style={{ marginTop: '10px' }}>Braybrook Branch</LocationTitle>
              <p>41 Cranwell St, Braybrook VIC 3019</p>
            </div>
          </ContactItem>
          
          <ContactItem>
            <FontAwesomeIcon icon={faClock} />
            <div>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 8:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </ContactItem>
        </FooterSection>
      </FooterInner>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Cranwell Collision Repair Centre. All Rights Reserved. 
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 