import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SlideShowContainer = styled.div`
  height: ${props => props.height || '500px'};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: ${props => props.mobileHeight || '400px'};
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, ${props => props.overlay || '0.5'});
  }
`;

const VideoSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  overflow: hidden;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, ${props => props.overlay || '0.5'});
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
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

const SlideArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 20;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  
  &:hover {
    background: white;
    transform: scale(1.2);
  }
`;

function SlideShowHero({ 
  slides,
  height, 
  mobileHeight, 
  overlay, 
  titleSize, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  autoSlideInterval = 5000
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  
  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [slidesCount, autoSlideInterval]);
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <SlideShowContainer height={height} mobileHeight={mobileHeight}>
      {slides.map((slide, index) => {
        // Check if the slide is a video
        if (slide.video) {
          return (
            <VideoSlide 
              key={index} 
              active={index === currentSlide}
              overlay={overlay}
            >
              <video autoPlay muted loop playsInline>
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoSlide>
          );
        } else {
          return (
            <Slide 
              key={index} 
              image={slide.image} 
              active={index === currentSlide}
              overlay={overlay}
            />
          );
        }
      })}
      
      <SlideContent titleSize={titleSize}>
        <h1>{slides[currentSlide].title}</h1>
        {slides[currentSlide].subtitle && <p>{slides[currentSlide].subtitle}</p>}
        
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
      </SlideContent>
      
      <SlideArrow className="prev" onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </SlideArrow>
      
      <SlideArrow className="next" onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </SlideArrow>
      
      <SlideIndicators>
        {slides.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === currentSlide} 
            onClick={() => goToSlide(index)}
          />
        ))}
      </SlideIndicators>
    </SlideShowContainer>
  );
}

export default SlideShowHero; 