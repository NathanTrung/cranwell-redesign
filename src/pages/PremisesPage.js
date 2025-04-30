import { useEffect } from 'react';
import styled from 'styled-components';
import SlideShowHero from '../components/SlideShowHero';

// Import premises images
import premisesHero from '../assets/slideshows/premises/car3-1024x231.jpg';
import premisesGarage from '../assets/premises/Garage.jpg';
import premisesPaint from '../assets/premises/Paint.jpg';
import premisesOffice from '../assets/premises/Office.jpg';
import premisesOffice2 from '../assets/premises/Office 2.jpg';

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
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  padding-bottom: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #2e8b57;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PremisesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PremisesItem = styled.div`
  margin-bottom: 40px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
    position: relative;
    padding-bottom: 10px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: #2e8b57;
    }
  }
  
  p {
    line-height: 1.7;
    color: #666;
    margin-bottom: 15px;
  }
`;

const FacilityImage = styled.div`
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 50px;
`;

const GalleryItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  height: 250px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

function PremisesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Premises - Cranwell Collision Repair Centre';
  }, []);
  
  // Define image slides for the hero slideshow
  const heroSlides = [
    { image: premisesHero }
  ];
  
  return (
    <main>
      <SlideShowHero
        slides={heroSlides}
        title="Our Premises"
        subtitle="State-of-the-art facilities equipped with the latest technology to provide the highest quality repair services"
        height="400px"
      />
      
      <Section>
        <Container>
          <SectionTitle>Our Facilities</SectionTitle>
          
          <PremisesGrid>
            <div>
              <FacilityImage>
                <img src={premisesGarage} alt="Cranwell Collision workshop area" />
              </FacilityImage>
              
              <PremisesItem>
                <h3>Modern Workshop</h3>
                <p>
                  Our workshop is equipped with the latest technology and equipment to ensure that your vehicle is repaired to the highest standard. We constantly update our facilities to stay at the forefront of the collision repair industry.
                </p>
                <p>
                  The spacious design of our workshop allows our technicians to work efficiently, reducing repair time and getting you back on the road sooner.
                </p>
              </PremisesItem>
              
              <FacilityImage>
                <img src={premisesPaint} alt="Cranwell Collision paint booth" />
              </FacilityImage>
              
              <PremisesItem>
                <h3>Advanced Refinishing</h3>
                <p>
                  Our state-of-the-art paint booth ensures a perfect match to your vehicle's original color and a flawless finish. We use environmentally friendly paint products that meet the highest quality standards.
                </p>
                <p>
                  Our color matching technology allows us to recreate your vehicle's exact color, even for the most challenging shades and effects.
                </p>
              </PremisesItem>
            </div>
            
            <div>
              <FacilityImage>
                <img src={premisesOffice} alt="Cranwell Collision diagnostic equipment" />
              </FacilityImage>
              
              <PremisesItem>
                <h3>Diagnostic Center</h3>
                <p>
                  We utilize advanced diagnostic equipment to identify all areas of damage, including those not visible to the naked eye. This thorough approach ensures that all damage is addressed during the repair process.
                </p>
                <p>
                  Our computerized measuring systems enable precise repairs that restore your vehicle's structural integrity to manufacturer specifications.
                </p>
              </PremisesItem>
              
              <FacilityImage>
                <img src={premisesOffice2} alt="Cranwell Collision customer waiting area" />
              </FacilityImage>
              
              <PremisesItem>
                <h3>Customer Lounge</h3>
                <p>
                  While waiting for estimates or minor repairs, customers can relax in our comfortable lounge area. Enjoy complimentary beverages, Wi-Fi, and a clean, welcoming environment.
                </p>
                <p>
                  We understand that having your vehicle repaired can be stressful, which is why we've created a comfortable space where you can wait or discuss your repair needs with our staff.
                </p>
              </PremisesItem>
            </div>
          </PremisesGrid>
          
          <SectionTitle style={{ marginTop: '80px' }}>Facility Gallery</SectionTitle>
          
          <GalleryGrid>
            <GalleryItem>
              <img src={premisesGarage} alt="Cranwell Collision facility - Garage" />
            </GalleryItem>
            <GalleryItem>
              <img src={premisesPaint} alt="Cranwell Collision facility - Paint Booth" />
            </GalleryItem>
            <GalleryItem>
              <img src={premisesOffice} alt="Cranwell Collision facility - Office" />
            </GalleryItem>
            <GalleryItem>
              <img src={premisesOffice2} alt="Cranwell Collision facility - Office Reception" />
            </GalleryItem>
            <GalleryItem>
              <img src={premisesGarage} alt="Cranwell Collision facility - Workshop" />
            </GalleryItem>
            <GalleryItem>
              <img src={premisesPaint} alt="Cranwell Collision facility - Paint Area" />
            </GalleryItem>
          </GalleryGrid>
        </Container>
      </Section>
    </main>
  );
}

export default PremisesPage;