import { Navbar, Header, Services, Footer } from "../components"
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
     <div>
      <Helmet>
        <title> Homepage | GEO-FOSU LTD</title>
    	  <meta name="description" content="At GEO-Fosu, we deliver excellence in Construction, Research and Project Management Consultations. Click to view our website."/>
        <link rel="canonical" href="https://www.geofosulimitedcompany.com"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:title" content="GEO-Fosu Limited Company"/>
        <meta property="og:description" content="At GEO-Fosu, we deliver excellence in Construction, Research and Project Management Consultations. Click to view our website."/>
        <meta property="og:url" content="https://www.geofosulimitedcompany.com"/>
        <meta property="og:site_name" content="GEO-FOSU Limited Company"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="GEO-Fosu Limited Company"/>
        <meta name="twitter:image" content="../assets/images/OFFC.jpg"/>
      </Helmet>
    
    <div className="w-[100%] overflow-hidden">
     <div className="bg-office bg-cover bg-no-repeat bg-center h-[80vh]">
      <div className="bg-blue/30 w-[100%] h-[80vh]">
       <Navbar/>
       <Header/>
      </div>
     </div>
     <Services/>
     <Footer/>
    </div>
    </div>
  )
}

export default Home