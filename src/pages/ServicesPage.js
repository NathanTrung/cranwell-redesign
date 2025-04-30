import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCarSide, faHandshake, faWrench, faPaintRoller, faCar, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import SlideShowHero from '../components/SlideShowHero';

// Import images
import servicesHero from '../assets/slideshows/services/cranwell_slider1-1400x788.jpg';
import serviceQuotingCar from '../assets/services/quotingcar.jpg';

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

const ServicesIntro = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  
  p {
    color: #666;
    line-height: 1.7;
    font-size: 1.1rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceImage = styled.div`
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s;
  }
  
  ${ServiceCard}:hover img {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 25px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
    display: flex;
    align-items: center;
    
    svg {
      color: #2e8b57;
      margin-right: 12px;
      font-size: 1.3rem;
    }
  }
  
  p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`;

const ServiceFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    
    svg {
      color: #2e8b57;
      margin-right: 10px;
      margin-top: 4px;
    }
  }
`;

const ServiceCTA = styled.div`
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
  margin-top: 50px;
  border-radius: 10px;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  p {
    color: #666;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #2e8b57;
    color: white;
    padding: 12px 30px;
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #267349;
    }
  }
`;

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services - Cranwell Collision Repair Centre';
  }, []);
  
  // Define image slides for the hero slideshow
  const heroSlides = [
    { image: servicesHero }
  ];
  
  const services = [
    {
      id: 1,
      title: 'Collision Repairs',
      description: 'Professional repairs for vehicles involved in collisions, restoring them to pre-accident condition with precision and care.',
      image: serviceQuotingCar,
      icon: faCarSide,
      features: [
        'Complete structural repairs',
        'Frame straightening',
        'Expert metal work',
        'Quality assurance checks'
      ]
    },
    {
      id: 2,
      title: 'Panel Beating',
      description: 'Expert panel beating services to remove dents and restore your vehicle\'s exterior panels to their original form.',
      image: serviceQuotingCar,
      icon: faWrench,
      features: [
        'Dent removal',
        'Panel replacement',
        'Rust repair',
        'Custom fabrication'
      ]
    },
    {
      id: 3,
      title: 'Insurance Claims',
      description: 'We work directly with all major insurance companies to streamline the repair process and handle the paperwork for you.',
      image: serviceQuotingCar,
      icon: faHandshake,
      features: [
        'Direct insurance billing',
        'Claim assistance',
        'Detailed documentation',
        'Lifetime warranty on repairs'
      ]
    },
    {
      id: 4,
      title: 'Paint Services',
      description: 'High-quality painting services with color matching technology to ensure a perfect match to your vehicle\'s original color.',
      image: serviceQuotingCar,
      icon: faPaintRoller,
      features: [
        'Computerized color matching',
        'Environmental-friendly paints',
        'Clear coat protection',
        'Spot and full vehicle painting'
      ]
    },
    {
      id: 5,
      title: 'Vehicle Restoration',
      description: 'Bring your classic or damaged vehicle back to life with our comprehensive restoration services.',
      image: serviceQuotingCar,
      icon: faCar,
      features: [
        'Classic car restoration',
        'Rust removal and prevention',
        'Interior restoration',
        'Mechanical upgrades'
      ]
    },
    {
      id: 6,
      title: 'Quality Assurance',
      description: 'Every repair undergoes rigorous quality checks to ensure your vehicle is returned to you in optimal condition.',
      image: serviceQuotingCar,
      icon: faShieldAlt,
      features: [
        'Multi-point inspection',
        'Road testing',
        'Paint thickness measurement',
        'Digital documentation'
      ]
    }
  ];
  
  return (
    <main>
      <SlideShowHero
        slides={heroSlides}
        title="Our Services"
        subtitle="Comprehensive collision repair services delivered with expertise and care"
        height="400px"
      />
      
      <Section>
        <Container>
          <ServicesIntro>
            <p>
              At Cranwell Collision Repair Centre, we offer a wide range of automotive repair services to address all your vehicle's needs. Our skilled technicians use the latest equipment and techniques to deliver high-quality results that meet or exceed industry standards.
            </p>
          </ServicesIntro>
          
          <ServiceGrid>
            {services.map(service => (
              <ServiceCard key={service.id}>
                <ServiceImage>
                  <img src={service.image} alt={service.title} />
                </ServiceImage>
                
                <ServiceContent>
                  <h3>
                    <FontAwesomeIcon icon={service.icon} />
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                  
                  <ServiceFeatures>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ServiceFeatures>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServiceGrid>
          
          <ServiceCTA>
            <h3>Need Auto Repair Services?</h3>
            <p>
              Contact us today to schedule an appointment or get a free estimate for your vehicle repair needs. Our team is ready to provide you with exceptional service and quality workmanship.
            </p>
            <a href="/contact" className="cta-button">Contact Us Today</a>
          </ServiceCTA>
        </Container>
      </Section>
    </main>
  );
}

export default ServicesPage; 