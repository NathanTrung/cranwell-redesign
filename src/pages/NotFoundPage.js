import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  margin: 0;
  color: #d40f0f;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 32px;
  margin: 10px 0 20px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: #d40f0f;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #b20d0d;
  }
`;

const LinksContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
  
  a {
    color: #d40f0f;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      color: #b20d0d;
      text-decoration: underline;
    }
  }
`;

function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Page Not Found - Cranwell Collision Repair Centre';
  }, []);
  
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorMessage>
        We\'re sorry, but the page you are looking for doesn't exist or has been moved.
        Please check the URL or use one of the links below to navigate to a working page.
      </ErrorMessage>
      
      <BackButton to="/">Back to Homepage</BackButton>
      
      <LinksContainer>
        <Link to="/">Home</Link>
        <Link to="/premises">Premises</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </LinksContainer>
    </NotFoundContainer>
  );
}

export default NotFoundPage; 