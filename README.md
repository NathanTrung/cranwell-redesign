# Cranwell Collision Repair Centre Website

A modern, responsive redesign of the Cranwell Collision Repair Centre website.

## Features

- Modern, responsive design
- Mobile-friendly navigation with hamburger menu
- Interactive service cards with hover effects
- Filterable services section
- Functional contact form with validation
- Google Maps integration
- Optimized for all screen sizes

## Technology Stack

- React.js
- React Router for navigation
- Styled Components for styling
- Font Awesome for icons
- Form validation with React state

## Getting Started

### Prerequisites

- Node.js (version 16.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies

```bash
cd cranwell-website
npm install
```

### Adding Images

This project requires several images to be placed in the public/images directory. You can add your own images or use placeholders from services like:

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)

Required images (as listed in public/images/.gitkeep):
- hero-bg.jpg - Hero background image for the homepage
- about-image.jpg - Image for the About section
- service-collision.jpg - Image for collision repair service
- service-panel.jpg - Image for panel beating service
- service-insurance.jpg - Image for insurance claims service
- service-paint.jpg - Image for painting service
- service-restoration.jpg - Image for vehicle restoration service
- service-quality.jpg - Image for quality assurance service
- premises-hero.jpg - Hero image for premises page
- premises-1.jpg through premises-4.jpg - Images of the facility
- gallery-1.jpg through gallery-6.jpg - Gallery images of the facility
- services-hero.jpg - Hero image for services page
- contact-hero.jpg - Hero image for contact page

### Running the Development Server

```bash
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

This command creates an optimized production build in the `build` folder.

## Project Structure

- `/public` - Static assets including images
- `/src` - Source code
  - `/components` - Reusable UI components
  - `/pages` - Page components for each route
  - `/App.js` - Main application component
  - `/index.js` - Entry point

## Customization

### Changing Colors

The primary color scheme can be modified by updating the color values in the styled components. The main colors used are:

- Primary Red: `#d40f0f`
- Darker Red: `#b20d0d`
- Dark Gray: `#333`
- Medium Gray: `#666`
- Light Gray: `#f9f9f9`

### Adding New Services

To add a new service:

1. Add a new service object to the `services` array in `ServicesPage.js`
2. Add the corresponding image to the `/public/images` directory

## Browser Support

The website is compatible with:

- Google Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original website: [Cranwell Collision Repair Centre](https://cranwellcollision.com.au/)
# cranwell-redesign
