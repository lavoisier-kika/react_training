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
    
        <Apropos/>
        {/* ici le contenus sont des cards conteant une image du text et un bouton alors j'ai eu un peu du mal à le structure et commebt en construire pour la réutilisabilité */}
        <Services />
        {/* De même que dans la réalisation il y a beaucouo que je vien de laisser mainteant je ne sais pas comment faire */}
         <Realisation />
         <Contact />
         <Footer />
       
        </main>
       
    );
 };