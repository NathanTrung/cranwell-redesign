import React from 'react';
import styled from 'styled-components';
import AAMILogo from '../assets/AAMI Insurance.png';
import VirginMoneyLogo from '../assets/Virgin Money.png';
import AustraliaPostLogo from '../assets/Australia Post.png';
import WesfarmersLogo from '../assets/Wesfarmers Insurance.png';
import ZurichLogo from '../assets/Zurich Insurance.png';
import QBELogo from '../assets/QBE Insurance.png';
import EverydayLogo from '../assets/Everyday Insurance.png';
import ResiliumLogo from '../assets/Resilium Insurance.png';
import DodoLogo from '../assets/Dodo Insurance.png';
import CGULogo from '../assets/CGU Insurance.png';
import APIALogo from '../assets/APIA Logo.png';
import YouiLogo from '../assets/Youi Insurance.png';
import VACCLogo from '../assets/VACC.png';
import SuncorpLogo from '../assets/Suncorp Insurance.png';
import AllianzLogo from '../assets/Aalianz Insurance.png';
import RACVLogo from '../assets/RACV.png';

const PartnerLogosSection = styled.section`
  padding: 60px 20px;
  background-color: transparent;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #2e8b57;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    height: 90px;
    width: 180px;
  }
  
  @media (max-width: 480px) {
    height: 80px;
    width: 160px;
  }
`;

// Custom styled wrapper for specific logos that need to be bigger
const EnhancedLogoWrapper = styled(LogoWrapper)`
  img {
    max-width: 95%;
    max-height: 95%;
  }
`;

// Alternative: Slider version (uncomment if you prefer a slider instead of a grid)
const LogoSlider = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 80px;
    height: 100%;
    z-index: 1;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
`;

const SliderTrack = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  width: calc(180px * 32); /* width of each logo * 2 * number of logos */
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-180px * 16)); /* half the total width */
    }
  }
`;

const PartnerLogos = () => {
  // List of logos that need special treatment (larger size)
  const enhancedLogoNames = ['Australia Post', 'Wesfarmers Insurance', 'Resilium Insurance'];
  
  const logos = [
    { src: AAMILogo, alt: 'AAMI Insurance' },
    { src: AllianzLogo, alt: 'Allianz Insurance' },
    { src: RACVLogo, alt: 'RACV' },
    { src: SuncorpLogo, alt: 'Suncorp Insurance' },
    { src: QBELogo, alt: 'QBE Insurance' },
    { src: CGULogo, alt: 'CGU Insurance' },
    { src: APIALogo, alt: 'APIA Insurance' },
    { src: YouiLogo, alt: 'Youi Insurance' },
    { src: EverydayLogo, alt: 'Everyday Insurance' },
    { src: VACCLogo, alt: 'VACC' },
    { src: DodoLogo, alt: 'Dodo Insurance' },
    { src: ZurichLogo, alt: 'Zurich Insurance' },
    { src: WesfarmersLogo, alt: 'Wesfarmers Insurance' },
    { src: ResiliumLogo, alt: 'Resilium Insurance' },
    { src: VirginMoneyLogo, alt: 'Virgin Money' },
    { src: AustraliaPostLogo, alt: 'Australia Post' },
  ];

  return (
    <PartnerLogosSection id="partners">
      <Container>
        <SectionTitle>Our Trusted Partners</SectionTitle>
        <LogoGrid>
          {logos.map((logo, index) => {
            // Determine if this logo should use the enhanced wrapper
            const isEnhanced = enhancedLogoNames.includes(logo.alt);
            
            // Use the appropriate wrapper component
            return isEnhanced ? (
              <EnhancedLogoWrapper key={index}>
                <img src={logo.src} alt={logo.alt} />
              </EnhancedLogoWrapper>
            ) : (
              <LogoWrapper key={index}>
                <img src={logo.src} alt={logo.alt} />
              </LogoWrapper>
            );
          })}
        </LogoGrid>

        {/* Alternative: Uncomment for slider version instead of grid
        <LogoSlider>
          <SliderTrack>
            {[...logos, ...logos].map((logo, index) => (
              <LogoWrapper key={index}>
                <img src={logo.src} alt={logo.alt} />
              </LogoWrapper>
            ))}
          </SliderTrack>
        </LogoSlider>
        */}
      </Container>
    </PartnerLogosSection>
  );
};

export default PartnerLogos; 