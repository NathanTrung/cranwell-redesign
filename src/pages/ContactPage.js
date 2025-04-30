import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock, faCheck, faUpload, faCar } from '@fortawesome/free-solid-svg-icons';
import SlideShowHero from '../components/SlideShowHero';

// Import contact slideshow image
import contactSlide from '../assets/slideshows/contact/slider2-1400x729.jpg';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
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
  }
  
  p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 30px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 25px;
  
  .icon {
    width: 50px;
    height: 50px;
    background-color: rgba(46, 139, 87, 0.1);
    color: #2e8b57;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 15px;
    flex-shrink: 0;
  }
  
  .content {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: #333;
    }
    
    p, a {
      color: #666;
      line-height: 1.6;
    }
    
    a {
      text-decoration: none;
      transition: color 0.3s;
      
      &:hover {
        color: #2e8b57;
      }
    }
  }
`;

const LocationWrapper = styled.div`
  margin-bottom: 15px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  .location-title {
    font-weight: 600;
    margin-bottom: 3px;
  }
`;

const BusinessHours = styled.div`
  margin-top: 40px;
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    
    span.day {
      font-weight: 600;
      color: #333;
    }
    
    span.time {
      color: #666;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  
  h2 {
    font-size: 2rem;
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
  }
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
    transition: border-color 0.3s;
    
    &:focus {
      outline: none;
      border-color: #2e8b57;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  .error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const VehicleInfoSection = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #333;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 10px;
      color: #2e8b57;
    }
  }
`;

const FileUploadGroup = styled(FormGroup)`
  .upload-container {
    border: 2px dashed #ddd;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    transition: border-color 0.3s;
    cursor: pointer;
    margin-bottom: 10px;
    
    &:hover {
      border-color: #2e8b57;
    }
    
    svg {
      color: #2e8b57;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    p {
      color: #666;
      margin: 0;
    }
    
    input {
      display: none;
    }
  }
  
  .file-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }
  
  .file-item {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #f9f9f9;
    border-radius: 5px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .remove-file {
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0;
      
      &:hover {
        background-color: rgba(231, 76, 60, 0.8);
      }
    }
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const SubmitButton = styled.button`
  background-color: #2e8b57;
  color: white;
  border: none;
  padding: 14px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  
  &:hover {
    background-color: #267349;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(46, 139, 87, 0.1);
  color: #2e8b57;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    margin-right: 10px;
  }
`;

const MapSection = styled.div`
  height: 500px;
  margin-top: 80px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

// New component for location selector
const LocationSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  
  button {
    padding: 15px 30px;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #2e8b57;
      z-index: -1;
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: white;
      border-color: #2e8b57;
      
      &::before {
        width: 100%;
      }
    }
    
    &.active {
      background-color: #2e8b57;
      color: white;
      border-color: #2e8b57;
      box-shadow: 0 4px 10px rgba(46, 139, 87, 0.2);
      
      &::before {
        width: 100%;
      }
    }
    
    &.synchronized {
      animation: pulse 0.6s ease-in-out;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    button {
      margin: 5px 0;
    }
  }
`;

const LocationFormGroup = styled(FormGroup)`
  position: relative;
  
  select {
    padding-left: 15px;
    font-weight: 600;
    color: #2e8b57;
    background-color: rgba(46, 139, 87, 0.05);
    border-color: rgba(46, 139, 87, 0.2);
  }
  
  &::after {
    content: 'Changes affect location selection at top';
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 0.8rem;
    color: #666;
    font-style: italic;
  }
`;

const NotificationMessage = styled.div`
  background: rgba(46, 139, 87, 0.1);
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #2e8b57;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    make: '',
    model: '',
    year: '',
    rego: '',
    location: 'albion', // Default selected location
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoErrors, setPhotoErrors] = useState('');
  const [activeLocation, setActiveLocation] = useState('albion');
  const [animateButton, setAnimateButton] = useState(false);
  const [locationSwitched, setLocationSwitched] = useState(false);
  
  // Contact information for each location
  const locationInfo = {
    albion: {
      address: "1/590 Ballarat Road, Albion VIC 3020",
      phone: "(03) 8390 0155",
      email: "info@cranwellcollision.com.au",
      facebook: "https://www.facebook.com/CCRC3020/",
      instagram: "https://www.instagram.com/cranwell_collision_albion/",
      googleMaps: "https://www.google.com/maps/place/Cranwell+Collision+Repair+Centre/@-37.781082,144.8619064,15z"
    },
    braybrook: {
      address: "41 Cranwell St, Braybrook VIC 3019",
      phone: "(03) 9055 5008",
      email: "info@ccbraybrook.com.au",
      facebook: "https://www.facebook.com/p/Cranwell-Collision-Braybrook-100072974554480/",
      instagram: "https://www.instagram.com/",
      googleMaps: "https://www.google.com/maps/place/Cranwell+Collision+Repair+Centre+Braybrook/@-37.796899,144.876097,15z"
    }
  };
  
  // Map URLs for each location
  const locationMaps = {
    albion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8275912699726!2d144.82545801531773!3d-37.78108797975763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f148d12e79f%3A0x91e36c89476f9f20!2s1%2F590%20Ballarat%20Rd%2C%20Albion%20VIC%203020!5e0!3m2!1sen!2sau!4v1618836726947!5m2!1sen!2sau",
    braybrook: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4099083265403!2d144.86190641531794!3d-37.789791979756784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad668e890ce5ed5%3A0xea70e15b4f3f588e!2s41%20Cranwell%20St%2C%20Braybrook%20VIC%203019!5e0!3m2!1sen!2sau!4v1618836985982!5m2!1sen!2sau"
  };
  
  // Define image slides for the hero slideshow
  const heroSlides = [
    { image: contactSlide }
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - Cranwell Collision Repair Centre';
  }, []);

  const handleLocationChange = (location) => {
    if (location !== activeLocation) {
      setLocationSwitched(true);
      setTimeout(() => setLocationSwitched(false), 2000);
    }
    
    setActiveLocation(location);
    setFormData(prev => ({
      ...prev,
      location
    }));
    
    // Update the destination email based on selected location
    // This would typically affect where the form is submitted
    console.log(`Form will be sent to: ${locationInfo[location].email}`);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // If the location dropdown changes, update the active location
    if (name === 'location') {
      if (value !== activeLocation) {
        setLocationSwitched(true);
        setTimeout(() => setLocationSwitched(false), 2000);
      }
      
      setActiveLocation(value);
      // Trigger animation for the corresponding button
      setAnimateButton(true);
      setTimeout(() => setAnimateButton(false), 600);
    }
  };
  
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotoErrors('');
    
    // Validate file types and sizes
    const validFiles = files.filter(file => {
      const isImage = file.type.startsWith('image/');
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      
      return isImage && isValidSize;
    });
    
    if (validFiles.length !== files.length) {
      setPhotoErrors('Some files were rejected. Please ensure all files are images under 5MB.');
    }
    
    if (validFiles.length > 0) {
      const newPhotos = validFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      
      setPhotos(prev => [...prev, ...newPhotos]);
    }
  };
  
  const removePhoto = (index) => {
    setPhotos(prev => {
      const newPhotos = [...prev];
      URL.revokeObjectURL(newPhotos[index].preview); // Release object URL
      newPhotos.splice(index, 1);
      return newPhotos;
    });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    // Vehicle fields are optional, but validate format if provided
    if (formData.year && !/^\d{4}$/.test(formData.year)) {
      newErrors.year = 'Please enter a valid 4-digit year';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Get the destination email based on selected location
      const destinationEmail = locationInfo[activeLocation].email;
      
      // Normally would send data to server here
      console.log(`Form will be sent to: ${destinationEmail}`);
      console.log('Form submitted:', formData);
      console.log('Photos:', photos);
      
      // For demo purposes, just show success message
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        make: '',
        model: '',
        year: '',
        rego: '',
        location: activeLocation
      });
      
      // Clear photos
      photos.forEach(photo => URL.revokeObjectURL(photo.preview));
      setPhotos([]);
    }
  };
  
  return (
    <main>
      <SlideShowHero
        slides={heroSlides}
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or to schedule an appointment"
        height="400px"
      />
      
      <Section>
        <Container>
          <LocationSelector>
            <button 
              className={`${activeLocation === 'albion' ? 'active' : ''} ${animateButton && activeLocation === 'albion' ? 'synchronized' : ''}`}
              onClick={() => handleLocationChange('albion')}
            >
              Albion Branch
            </button>
            <button 
              className={`${activeLocation === 'braybrook' ? 'active' : ''} ${animateButton && activeLocation === 'braybrook' ? 'synchronized' : ''}`}
              onClick={() => handleLocationChange('braybrook')}
            >
              Braybrook Branch
            </button>
          </LocationSelector>

          <ContactGrid>
            <ContactInfo>
              <h2>Get In Touch</h2>
              <p>
                Have questions or need to book a repair? Contact us today and our friendly team will be happy to assist you. We offer free quotes and consultations for all collision repair services.
              </p>
              
              <ContactItem>
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="content">
                  <h3>Our Locations</h3>
                  <LocationWrapper>
                    <div className="location-title">Albion Branch</div>
                    <p>{locationInfo.albion.address}</p>
                  </LocationWrapper>
                  <LocationWrapper>
                    <div className="location-title">Braybrook Branch</div>
                    <p>{locationInfo.braybrook.address}</p>
                  </LocationWrapper>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="content">
                  <h3>Phone Number</h3>
                  <LocationWrapper>
                    <div className="location-title">Albion</div>
                    <p><a href={`tel:${locationInfo.albion.phone.replace(/[^0-9]/g, '')}`}>{locationInfo.albion.phone}</a></p>
                  </LocationWrapper>
                  <LocationWrapper>
                    <div className="location-title">Braybrook</div>
                    <p><a href={`tel:${locationInfo.braybrook.phone.replace(/[^0-9]/g, '')}`}>{locationInfo.braybrook.phone}</a></p>
                  </LocationWrapper>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="content">
                  <h3>Email Address</h3>
                  <LocationWrapper>
                    <div className="location-title">Albion</div>
                    <p><a href={`mailto:${locationInfo.albion.email}`}>{locationInfo.albion.email}</a></p>
                  </LocationWrapper>
                  <LocationWrapper>
                    <div className="location-title">Braybrook</div>
                    <p><a href={`mailto:${locationInfo.braybrook.email}`}>{locationInfo.braybrook.email}</a></p>
                  </LocationWrapper>
                </div>
              </ContactItem>
              
              <BusinessHours>
                <h3>Business Hours</h3>
                <ul>
                  <li>
                    <span className="day">Monday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Tuesday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Wednesday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Thursday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Friday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Saturday</span>
                    <span className="time">Closed</span>
                  </li>
                  <li>
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </li>
                </ul>
              </BusinessHours>
            </ContactInfo>
            
            <ContactForm onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              {!isSubmitted ? (
                <>
                  <p>Complete the form below to send a message to our {activeLocation === 'albion' ? 'Albion' : 'Braybrook'} branch. We'll respond to your inquiry as soon as possible.</p>
                  
                  {/* Display which email the form will be sent to */}
                  <p style={{ fontWeight: 'bold', color: '#2e8b57' }}>
                    Your message will be sent to: {locationInfo[activeLocation].email}
                  </p>
                  
                  {locationSwitched && (
                    <NotificationMessage>
                      ✓ Location updated to {activeLocation === 'albion' ? 'Albion' : 'Braybrook'} Branch
                    </NotificationMessage>
                  )}
                
                  <LocationFormGroup>
                    <label htmlFor="location">Preferred Location*</label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="albion">Albion Branch</option>
                      <option value="braybrook">Braybrook Branch</option>
                    </select>
                  </LocationFormGroup>
                  
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="name">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <div className="error-message">{errors.name}</div>}
                    </FormGroup>
                    
                    <FormGroup>
                      <label htmlFor="email">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="error-message">{errors.email}</div>}
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="phone">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <div className="error-message">{errors.phone}</div>}
                    </FormGroup>
                    
                    <FormGroup>
                      <label htmlFor="subject">Subject*</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <div className="error-message">{errors.subject}</div>}
                    </FormGroup>
                  </FormRow>
                  
                  <VehicleInfoSection>
                    <h3>
                      <FontAwesomeIcon icon={faCar} />
                      Vehicle Information (Optional)
                    </h3>
                    
                    <FormRow>
                      <FormGroup>
                        <label htmlFor="make">Make</label>
                        <input
                          type="text"
                          id="make"
                          name="make"
                          value={formData.make}
                          onChange={handleChange}
                          placeholder="e.g. Toyota"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <label htmlFor="model">Model</label>
                        <input
                          type="text"
                          id="model"
                          name="model"
                          value={formData.model}
                          onChange={handleChange}
                          placeholder="e.g. Camry"
                        />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <label htmlFor="year">Year</label>
                        <input
                          type="text"
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          placeholder="e.g. 2020"
                        />
                        {errors.year && <div className="error-message">{errors.year}</div>}
                      </FormGroup>
                      
                      <FormGroup>
                        <label htmlFor="rego">Registration Number</label>
                        <input
                          type="text"
                          id="rego"
                          name="rego"
                          value={formData.rego}
                          onChange={handleChange}
                          placeholder="e.g. ABC123"
                        />
                      </FormGroup>
                    </FormRow>
                  </VehicleInfoSection>
                  
                  <FileUploadGroup>
                    <label>Vehicle Photos (Optional)</label>
                    <div 
                      className="upload-container"
                      onClick={() => document.getElementById('photos').click()}
                    >
                      <FontAwesomeIcon icon={faUpload} />
                      <p>Click to upload photos of your vehicle</p>
                      <p>or drag and drop images here</p>
                      <input
                        type="file"
                        id="photos"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    {photoErrors && <div className="error-message">{photoErrors}</div>}
                    
                    {photos.length > 0 && (
                      <div className="file-preview">
                        {photos.map((photo, index) => (
                          <div className="file-item" key={index}>
                            <img src={photo.preview} alt={`Preview ${index + 1}`} />
                            <button 
                              type="button" 
                              className="remove-file"
                              onClick={() => removePhoto(index)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <p>Max 5MB per image. Accepted formats: JPG, PNG, GIF</p>
                  </FileUploadGroup>
                  
                  <FormGroup>
                    <label htmlFor="message">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe the issue with your vehicle or the services you're interested in..."
                    ></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </FormGroup>
                  
                  <SubmitButton type="submit">Send Message</SubmitButton>
                </>
              ) : (
                <SuccessMessage>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Your message has been sent successfully. We'll get back to you soon!</span>
                </SuccessMessage>
              )}
            </ContactForm>
          </ContactGrid>
        </Container>
      </Section>
      
      <Section style={{ padding: '0 0 80px' }}>
        <Container>
          <MapSection>
            <iframe
              src={locationMaps[activeLocation]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Cranwell Collision Repair Centre Location"
            ></iframe>
          </MapSection>
        </Container>
      </Section>
    </main>
  );
}

export default ContactPage; 