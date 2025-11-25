import Apropos from "./apropos/apropos";
import Banner from "./banner/banner";
import Contact from "./conatct/contact";
import Footer from "./footer/footer";
import Header from "./header/header";
import Realisation from "./realisations/realisation";
import Services from "./services/services";

 
 export default function ContainerComponents() {

    return (
        <main> 
         <div className="bg-gradient-to-r from-orange-400 to-blue-950 filter brightness-90"> 
        <Header />
        <Banner />
        </div>
        <Apropos />
        <Services />
         <Realisation />
         <Contact />
         <Footer />
       
        </main>
       
    );
 };