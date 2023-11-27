import { useLocation, Link } from "react-router-dom"

const BreadCrumb = () => {
  const location = useLocation()

  let currentLink = ''
  const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map((crumb) => {
         currentLink += `/${crumb}`

         return (
           <div key={crumb} className="crumb">
             <Link to={currentLink}>{crumb}</Link>
           </div>
         )
      })
   
  console.log(crumbs)


  return (
    <div className="flex text-xs sm:text-md gap-1 crumbs">
        {crumbs}
    </div>
  )
}

export default BreadCrumb
