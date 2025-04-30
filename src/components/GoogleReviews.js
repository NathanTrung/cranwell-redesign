import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const GoogleReviewsContainer = styled.section`
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

const GoogleSourceLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  
  svg {
    color: #4285F4;
    font-size: 2rem;
    margin-right: 10px;
  }
  
  span {
    font-size: 1.2rem;
    color: #666;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
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

const ReviewText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 20px;
  font-style: italic;
  
  // If text is too long, truncate it
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReviewAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;
  font-size: 1.2rem;
  
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
  color: #FBBC05;
  font-size: 1rem;
  
  svg {
    margin-right: 2px;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  
  svg {
    font-size: 2.5rem;
    color: #2e8b57;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #666;
  padding: 30px;
  
  p {
    margin-bottom: 15px;
  }
  
  .view-all-button {
    display: inline-block;
    background-color: #2e8b57;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #267349;
    }
  }
`;

const ViewAllButton = styled.a`
  display: block;
  text-align: center;
  margin-top: 40px;
  
  .view-all-button {
    display: inline-block;
    background-color: #2e8b57;
    color: white;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #267349;
    }
  }
`;

function GoogleReviews({ maxReviews = 3 }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // For a real implementation, this would be an API call to fetch Google reviews
  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchReviews = async () => {
      try {
        setLoading(true);
        
        // In a real implementation, you would fetch from Google's API
        // For now, we'll use real reviews from Cranwell Collision Repair Centre
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        
        const mockReviews = [
          {
            id: 1,
            author_name: "Jamie Bowes",
            profile_photo_url: null,
            rating: 5,
            text: "The best service, after being told by a repair shop within the area that our car would not be fixed for an extended period of time (60 days) Cranwell stepped to in and were able to perform the repair within 8 days. In addition to this their service and communication from the word go was on and above what we expected. The car came back looking fantastic and Sam was an absolute champion talking through the repair with care and consideration.",
            relative_time_description: "February 11, 2022"
          },
          {
            id: 2,
            author_name: "Adrian DeWitts",
            profile_photo_url: null,
            rating: 5,
            text: "I can not recommend Cranwell Collision enough! I was feeling thoroughly annoyed at myself with smashing the rear of my car, and Sam just made the experience so easy and has been awesome at every step. The quality of the work is next level - the boot and bumper is better than it was before. Cranwell went out of their way to make sure different areas of the car were safe. My beautiful car is whole again. Thank you Sam - Have a wonderful holiday break - you guys deserve it!",
            relative_time_description: "December 12, 2021"
          },
          {
            id: 3,
            author_name: "Pham Vien",
            profile_photo_url: null,
            rating: 5,
            text: "Very friendly and awesome staff, especially Sam with ethics in work. My car turned out to be totally cool and shiny. He looks after your car as he takes care of his own car! Very professional and certainly reliable!",
            relative_time_description: "November 19, 2021"
          },
          {
            id: 4,
            author_name: "Simon Nyoto",
            profile_photo_url: null,
            rating: 5,
            text: "It\'s hassle free, great service and communication. Work was completed on time or earlier than scheduled. Very professional, certainly reliable.",
            relative_time_description: "November 06, 2021"
          },
          {
            id: 5,
            author_name: "Nnadine mounajed",
            profile_photo_url: null,
            rating: 5,
            text: "I was served by highly trained staff, and was greeted by Sam (manager) with a warm smile. I am pleased to say that my car had a great turn around with everything done to perfection, they even washed it free of charge. If you need your car detailed, re-sprayed, and repaired, then these guys are the best in business. You will not regret it!",
            relative_time_description: "October 25, 2021"
          },
          {
            id: 6,
            author_name: "Cliff S.",
            profile_photo_url: null,
            rating: 5,
            text: "The whole experience from taking the car in to picking it up was so easy and stress free. The reception staff were very pleasant and the finished product was first class. My car now looks new again. Better than I could have hoped for. I can recommend Cranwell Collision wholeheartedly.",
            relative_time_description: "October 07, 2023"
          },
          {
            id: 7,
            author_name: "Sandra G.",
            profile_photo_url: null,
            rating: 5,
            text: "Terrific job on my repair staff were amazing once started was very quick car presentation was next to non perfect",
            relative_time_description: "March 19, 2023"
          }
        ];
        
        // All reviews are 5-star so no need to filter
        setReviews(mockReviews);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Google reviews:", err);
        setError("Unable to load reviews. Please check our Google Business page for the latest reviews.");
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, []);
  
  // Function to get author initials for the avatar placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };
  
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
    <GoogleReviewsContainer>
      <Container>
        <SectionTitle>Customer Reviews for Cranwell Collision</SectionTitle>
        <GoogleSourceLabel>
          <FontAwesomeIcon icon={faGoogle} />
          <span>Verified Google Reviews</span>
        </GoogleSourceLabel>
        
        {loading ? (
          <LoadingSpinner>
            <FontAwesomeIcon icon={faSpinner} />
          </LoadingSpinner>
        ) : error ? (
          <ErrorMessage>
            <p>{error}</p>
            <a 
              href="https://www.google.com/maps/place/Cranwell+Collision+Repair+Centre/@-37.781082,144.8619064,15z/data=!4m2!3m1!1s0x0:0xea70e15b4f3f588e?sa=X&ved=2ahUKEwi6t-j6t9f4AhVYzTgGHfDFCesQ_BJ6BAhREAU" 
              className="view-all-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Reviews on Google
            </a>
          </ErrorMessage>
        ) : (
          <>
            <ReviewsGrid>
              {reviews.slice(0, maxReviews).map(review => (
                <ReviewCard key={review.id}>
                  <QuoteIcon>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </QuoteIcon>
                  <ReviewText>{review.text}</ReviewText>
                  <StarRating>
                    {renderStars(review.rating)}
                  </StarRating>
                  <ReviewAuthor>
                    {review.profile_photo_url ? (
                      <AuthorImage>
                        <img src={review.profile_photo_url} alt={review.author_name} />
                      </AuthorImage>
                    ) : (
                      <AuthorImage>
                        {getInitials(review.author_name)}
                      </AuthorImage>
                    )}
                    <AuthorInfo>
                      <h4>{review.author_name}</h4>
                      <p>{review.relative_time_description}</p>
                    </AuthorInfo>
                  </ReviewAuthor>
                </ReviewCard>
              ))}
            </ReviewsGrid>
            
            <ViewAllButton
              href="https://www.google.com/maps/place/Cranwell+Collision+Repair+Centre/@-37.781082,144.8619064,15z/data=!4m2!3m1!1s0x0:0xea70e15b4f3f588e?sa=X&ved=2ahUKEwi6t-j6t9f4AhVYzTgGHfDFCesQ_BJ6BAhREAU" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="view-all-button">View All Reviews on Google</span>
            </ViewAllButton>
          </>
        )}
      </Container>
    </GoogleReviewsContainer>
  );
}

export default GoogleReviews; 