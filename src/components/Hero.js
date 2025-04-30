import styled from 'styled-components';

const HeroContainer = styled.div`
  height: ${props => props.height || '500px'};
  background-image: ${props => `url(${props.image || '/images/hero-bg.jpg'})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, ${props => props.overlay || '0.5'});
  }
  
  @media (max-width: 768px) {
    height: ${props => props.mobileHeight || '400px'};
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  padding: 0 20px;
  
  h1 {
    font-size: ${props => props.titleSize || '3rem'};
    margin-bottom: 20px;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 30px;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${props => props.primary ? '#2e8b57' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'white'};
  text-decoration: none;
  border: 2px solid ${props => props.primary ? '#2e8b57' : 'white'};
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#267349' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-3px);
  }
`;

function Hero({ 
  title, 
  subtitle, 
  image, 
  height, 
  mobileHeight, 
  overlay, 
  titleSize, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink 
}) {
  return (
    <HeroContainer 
      image={image} 
      height={height} 
      mobileHeight={mobileHeight} 
      overlay={overlay}
    >
      <HeroContent titleSize={titleSize}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        
        {(primaryButtonText || secondaryButtonText) && (
          <ButtonContainer>
            {primaryButtonText && (
              <Button 
                href={primaryButtonLink || '#'} 
                primary
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && (
              <Button 
                href={secondaryButtonLink || '#'}
              >
                {secondaryButtonText}
              </Button>
            )}
          </ButtonContainer>
        )}
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero; 