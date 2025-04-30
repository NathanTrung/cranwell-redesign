import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes, faLocationDot, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import CranwellLogo from '../assets/Cranwell Collision.png';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const TopBar = styled.div`
  background-color: #000000;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .business-logo {
    height: 120px;
    margin-right: 40px;
    
    img {
      height: 100%;
    }
  }
  
  .contact-info {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 6px;
    }
    
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
    
    .separator {
      margin: 0 20px;
      color: rgba(255, 255, 255, 0.5);
    }
    
    .location-group {
      display: flex;
      align-items: center;
      
      .location-info {
        display: flex;
        flex-direction: column;
        
        .location-name {
          font-size: 0.9rem;
          font-weight: 600;
          opacity: 0.9;
          margin-bottom: 5px;
          color: #2e8b57;
        }
        
        .location-phone {
          display: flex;
          align-items: center;
          font-size: 1rem;
          
          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    align-items: center;
    
    .business-logo {
      margin-bottom: 15px;
      margin-right: 0;
    }
    
    .contact-info {
      justify-content: center;
      flex-wrap: wrap;
      
      a, .separator {
        margin: 5px;
      }
      
      .location-group {
        flex-direction: column;
        margin: 10px 0;
        width: 100%;
        
        .separator {
          margin: 15px 0;
          width: 50px;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.3);
        }
        
        .location-info {
          margin-right: 0;
          margin-bottom: 0;
          align-items: center;
          width: 100%;
        }
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 6px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-right: 8px;
    transition: background-color 0.3s;
    
    &:last-child {
      margin-right: 0;
    }
    
    &:hover {
      background-color: #2e8b57;
    }
    
    svg {
      color: white;
      font-size: 14px;
      margin: 0;
      line-height: 1;
      height: 14px;
      width: 14px;
      display: block;
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 8px;
    justify-content: center;
  }
`;

const NavBackground = styled.div`
  width: 100%;
  background-color: #2e8b57;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const LogoWrapper = styled(Link)`
  display: block;
  max-width: 200px;
  padding: 5px 0;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    max-height: 60px;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    max-width: 150px;
    img {
      max-height: 50px;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background-color: #2e8b57;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 60px 20px 20px;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItem = styled(Link)`
  margin: 0 20px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;

  &:hover, &.active {
    color: #f0f0f0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 15px 0;
    font-size: 18px;
    width: 100%;
    
    &::after {
      bottom: -3px;
    }
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <NavContainer>
      <TopBar>
        <div className="business-logo">
          <img src={CranwellLogo} alt="Cranwell Collision Repair Centre" />
        </div>
        <div className="contact-info">
          <div className="location-group">
            <div className="location-info">
              <span className="location-name">Albion</span>
              <a href="tel:0383900155" className="location-phone">
                <FontAwesomeIcon icon={faPhone} />
                (03) 8390 0155
              </a>
              <SocialIcons>
                <a href="https://www.facebook.com/CCRC3020/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/cranwell_collision_albion/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="info@cranwellcollision.com.au" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </SocialIcons>
            </div>
            
            <span className="separator">|</span>
            
            <div className="location-info">
              <span className="location-name">Braybrook</span>
              <a href="tel:0383900155" className="location-phone">
                <FontAwesomeIcon icon={faPhone} />
                (03) 9055 5008
              </a>
              <SocialIcons>
                <a href="https://www.facebook.com/p/Cranwell-Collision-Braybrook-100072974554480/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="INFO@CCBRAYBROOK.COM.AU" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </SocialIcons>
            </div>
          </div>
        </div>
      </TopBar>
      
      <NavBackground>
        <NavInner>
          <MenuButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
          
          <NavLinks isOpen={isOpen}>
            <CloseButton onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
            
            <NavItem to="/" onClick={closeMenu}>HOME</NavItem>
            <NavItem to="/premises" onClick={closeMenu}>PREMISES</NavItem>
            <NavItem to="/services" onClick={closeMenu}>SERVICES</NavItem>
            <NavItem to="/contact" onClick={closeMenu}>CONTACT</NavItem>
          </NavLinks>
        </NavInner>
      </NavBackground>
    </NavContainer>
  );
}

export default Navbar; 