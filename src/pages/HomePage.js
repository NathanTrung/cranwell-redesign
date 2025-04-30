import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTools, faAward, faUserTie } from '@fortawesome/free-solid-svg-icons';
import SlideShowHero from '../components/SlideShowHero';
import ServiceCard from '../components/ServiceCard';
import GoogleReviews from '../components/GoogleReviews';
// Import slideshow images
import heroSlide1 from '../assets/slideshows/home/484579837_1198449028739417_311295794158011842_n.jpg';
import heroSlide2 from '../assets/slideshows/home/480963323_639161975192949_5259754577005885460_n.jpg';
// Import MP4 video for the first slide
import heroVideo from '../assets/slideshows/home/84089870_188799162209253_5157038408505229312_n.mp4';
// Import services images 
import serviceQuotingCar from '../assets/services/quotingcar.jpg';
// Import premises images for the about section
import premisesGarage from '../assets/premises/Garage.jpg';

const Section = styled.section`
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
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
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 30px auto 50px;
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.7;
  }
  
  .about-cta {
    margin-top: 30px;
  }
  
  .btn {
    display: inline-block;
    background-color: #2e8b57;
    color: white;
    padding: 12px 25px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s;
    
    &:hover {
      background-color: #267349;
      transform: translateY(-3px);
    }
  }
`;

const AboutImage = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .experience-badge {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background-color: #2e8b57;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 40px 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    width: 80px;
    height: 80px;
    background-color: rgba(46, 139, 87, 0.1);
    color: #2e8b57;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 2rem;
    margin: 0 auto 25px;
  }
  
  h3 {
    margin-bottom: 20px;
    color: #333;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const CtaSection = styled.div`
  background-color: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 40px;
    color: #666;
    line-height: 1.7;
    font-size: 1.1rem;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #2e8b57;
    color: white;
    padding: 15px 35px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #267349;
    }
  }
`;

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cranwell Collision Repair Centre - Sunshine';
  }, []);
  
  // Define image slides for the hero slideshow
  const heroSlides = [
    { 
      video: heroVideo,
      title: "Cranwell Collision Repair Centre",
      subtitle: "We aim to provide the highest standards of work in all aspects of collision repairs and panel beating to ensure customer satisfaction"
    },
    { 
      image: heroSlide1,
      title: "Cranwell Collision Repair Centre",
      subtitle: "We aim to provide the highest standards of work in all aspects of collision repairs and panel beating to ensure customer satisfaction"
    },
    { 
      image: heroSlide2,
      title: "Cranwell Collision Repair Centre",
      subtitle: "We aim to provide the highest standards of work in all aspects of collision repairs and panel beating to ensure customer satisfaction"
    }
  ];
  
  return (
    <main>
      <SlideShowHero
        slides={heroSlides}
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        autoSlideInterval={7000}
        height="650px"
        mobileHeight="500px"
        overlay="0.4"
      />
      
      <GoogleReviews maxReviews={3} />
      
      <Section>
        <Container>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            At Cranwell Collision Repair Centre, we offer a comprehensive range of automotive repair services.
            Our highly trained technicians use the latest technology to ensure your vehicle is restored to its pre-accident condition.
          </SectionSubtitle>
          
          <ServicesGrid>
            <ServiceCard
              title="Collision Repairs"
              description="Expert repairs for vehicles involved in collisions, restoring them to pre-accident condition using the latest techniques and equipment."
              image={serviceQuotingCar}
              link="/services"
            />
            
            <ServiceCard
              title="Panel Beating"
              description="Professional panel beating services to restore damaged vehicle panels to their original form with precision and care."
              image={serviceQuotingCar}
              link="/services"
            />
            
            <ServiceCard
              title="Insurance Claims"
              description="We work with all major insurance companies to process your claims smoothly and efficiently with minimal hassle."
              image={serviceQuotingCar}
              link="/services"
            />
          </ServicesGrid>
        </Container>
      </Section>
      
      <Section style={{ backgroundColor: '#f9f9f9' }}>
        <Container>
          <AboutSection>
            <AboutContent>
              <h3>Quality and Environmentally Endorsed Repairs</h3>
              <p>
                Over the years, Cranwell Collision Repair Centre have grown a large and reputable customer base of private and insurance customers.
              </p>
              <p>
                We use the latest technology and techniques to ensure your vehicle is repaired to the highest standard. Our team of qualified professionals is committed to delivering exceptional service and quality workmanship.
              </p>
              <p>
                We take pride in our environmentally responsible approach to collision repairs, ensuring we minimize waste and use eco-friendly products whenever possible.
              </p>
              <div className="about-cta">
                <a href="/premises" className="btn">Explore Our Premises</a>
              </div>
            </AboutContent>
            
            <AboutImage>
              <img src={premisesGarage} alt="Cranwell Collision Repair Centre workshop" />
              <div className="experience-badge">
                25+ Years Experience
              </div>
            </AboutImage>
          </AboutSection>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <SectionTitle>Why Choose Us</SectionTitle>
          <SectionSubtitle>
            When it comes to your vehicle's repair needs, we offer a combination of expertise, quality, and customer service that sets us apart.
          </SectionSubtitle>
          
          <FeaturesGrid>
            <FeatureCard>
              <div className="icon">
                <FontAwesomeIcon icon={faTools} />
              </div>
              <h3>Quality Repairs</h3>
              <p>Our skilled technicians use state-of-the-art equipment to deliver superior collision repairs.</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon">
                <FontAwesomeIcon icon={faCar} />
              </div>
              <h3>Fleet Services</h3>
              <p>Specialized repair solutions for commercial fleet vehicles with priority scheduling.</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3>Personalized Service</h3>
              <p>We treat every customer and their vehicle with the utmost care and attention to detail.</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </Section>
      
      <CtaSection>
        <Container>
          <h2>Ready to Get Your Vehicle Fixed?</h2>
          <p>Contact us today to schedule an appointment or get a free estimate for your vehicle repair needs.</p>
          <a href="/contact" className="cta-button">Contact Us Today</a>
        </Container>
      </CtaSection>
    </main>
  );
}

export default HomePage; 