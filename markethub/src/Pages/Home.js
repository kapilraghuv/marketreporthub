import Clients from "../Components/Clients";
import Homecategory from "../Components/Homecategory";
import Latestcom from "../Components/Latestcom";
import Layout from "../Components/Layout";
import Slider from "../Components/Slider";
import Testimonials from "../Components/Testimonials";
import Why from "../Components/Why";
export default function Home(){
  return (
      
      <>
     
      <Layout>
        <Slider />
        <Homecategory />
        <br /><br /><br /> <br />
       <Latestcom />
         <Why />
        <Testimonials />
        <Clients />
      </Layout>
      
      </>
    );
}