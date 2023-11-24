import { Helmet } from 'react-helmet';
import {ProjectHero, ProjectText, Footer, Images, Construction} from '../components/index'


const Projects = () => {
  return (
    <div>
      <Helmet>
      <title> Our Projects | GEO-FOSU LTD</title>
        <meta name="description" content="Take a look at the projects we've embarked on our projects page. Maybe, you would like to contact us about building yours."/>
        <link rel="canonical" href="https://www.geofosulimitedcompany.com/projects"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:title" content="GEO-FOSU Limited Company"/>
        <meta property="og:description" content="Take a look at the projects we've embarked on our projects page. Maybe, you would like to contact us about building yours."/>
        <meta property="og:url" content="https://www.geofosulimitedcompany.com/projects"/>
        <meta property="og:site_name" content="GEO-FOSU Limited Company"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Projects | GEO-FOSU LTD"/>
        <meta name="twitter:image" content="../assets/images/OFFC.jpg"/>
      </Helmet>
      <ProjectHero/>
      <ProjectText/>
      <Images/>
      <Construction/>
      <Footer/>
    </div>
  )
}

export default Projects