import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  ${Card}:hover &::after {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 12px;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #2e8b57;
    transition: width 0.3s;
  }
  
  ${Card}:hover &::after {
    width: 60px;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #2e8b57;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
  margin-top: auto;
  
  svg {
    margin-left: 8px;
    transition: transform 0.3s;
  }
  
  &:hover {
    color: #267349;
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const ReadMoreButton = styled.div`
  padding: 10px 20px;
  background-color: #2e8b57;
  color: white;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #267349;
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(46, 139, 87, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: white;
    font-size: 1.3rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin: 15px 0;
  color: #2e8b57;
  font-weight: 700;
`;

function ServiceCard({ image, title, description, link }) {
  return (
    <Card className="service-card">
      <ImageContainer>
        <Image src={image || '/images/placeholder-service.jpg'} alt={title} />
      </ImageContainer>
      
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMoreLink to={link || '#'}>
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </ReadMoreLink>
      </Content>
    </Card>
  );
}

export default ServiceCard; 