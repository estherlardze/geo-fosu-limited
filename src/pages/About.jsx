import {AboutHero, AboutText, Footer} from '../components/index'
import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Helmet>
        <title> About Us | GEO-FOSU LTD</title>
	      <meta name="description" content="Discover the essence of our work and the values that drive us forward as a company. Here's our about page."/>
        <link rel="canonical" href="https://www.geofosulimitedcompany.com/about"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:title" content="About GEO-FOSU Limited Company"/>
        <meta property="og:description" content="Discover the essence of our work and the values that drive us forward as a company. Here's our about page."/>
        <meta property="og:url" content="https://www.geofosulimitedcompany.com/about"/>
        <meta property="og:site_name" content="About GEO-FOSU Limited Company"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="About Us | GEO-FOSU LTD"/>
        <meta name="twitter:image" content="../assets/images/RETRO.png"/>
      </Helmet>
      <AboutHero/>
      <AboutText/>
      <Footer/>
     </div>
    
  )
}

export default About
