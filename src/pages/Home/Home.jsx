import Head from "../../components/Home/Head/Head"
import Header from "../../components/Home/Header/Header"
import Steps from "../../components/Home/Steps/Steps"
import CallToAction from "../../components/Home/CallToAction/CallToAction"
import Advantages from "../../components/Home/Advantages/Advantages"

const Home = () => {
  return (
    <div>
      <Head/>
      <Header/>
      <Steps/>
      <Advantages/>
      <CallToAction/>
    </div>
  )
}

export default Home
