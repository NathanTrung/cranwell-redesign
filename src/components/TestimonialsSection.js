import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSectionContainer = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
  
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
  margin-bottom: 15px;
  color: #333;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  color: #2e8b57;
  font-size: 2rem;
  margin-bottom: 15px;
  opacity: 0.5;
`;

const TestimonialText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0 0 5px;
    font-size: 1.1rem;
    color: #333;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

const StarRating = styled.div`
  margin-top: 10px;
  color: #ffb900;
  font-size: 1rem;
  
  svg {
    margin-right: 2px;
  }
`;

function TestimonialsSection({ testimonials }) {
  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          style={{ opacity: i < rating ? 1 : 0.3 }}
        />
      );
    }
    return stars;
  };

  return (
    <TestimonialsSectionContainer>
      <Container>
        <SectionTitle>What Our Customers Say</SectionTitle>
        <SectionSubtitle>
          Don't just take our word for it. Here's what our satisfied customers have to say about our service.
        </SectionSubtitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </QuoteIcon>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <StarRating>
                {renderStars(testimonial.rating)}
              </StarRating>
              <TestimonialAuthor>
                {testimonial.image && (
                  <AuthorImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </AuthorImage>
                )}
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  {testimonial.location && <p>{testimonial.location}</p>}
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSectionContainer>
  );
}

export default TestimonialsSection; 