import FeaturedInfo from "../featureInfo/FeaturedInfo"
import ClientList from "./ClientList"
import ClientCreate from "./ClientCreate"
import "./home.css"


export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <ClientList />
      <ClientCreate />
    </div>
  )
}
