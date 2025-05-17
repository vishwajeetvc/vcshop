import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import Subscription from "../components/Subscription"
import Policy from "./Policy"

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <Policy />
      <Subscription />
    </div>
  )
}

export default Home
