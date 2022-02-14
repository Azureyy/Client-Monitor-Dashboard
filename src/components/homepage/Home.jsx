import FeaturedInfo from "../featureInfo/FeaturedInfo"
import ClientList from "./ClientList"
import "./home.css"


export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <ClientList />
    < div className="homeWidgets"></div>
    </div>
  )
}
