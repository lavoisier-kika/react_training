
import logo from "../../assets/Logo-AllsolutionsII.png"
export const Footer = ()=>{

    return(
        <> 
        <footer className="bg-blue-950 pb-3 h-[350px]">
            <div className="flex  container w-full mx-auto px-10 py-5 gap-4 mb-5">
                <div className="w-[40%">
                    <img src={logo} className="w-[150px] " alt="" />
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Sapiente corporis
                         Laboriosam possimus modi repellat enim 
                         debitis <br />Corrupti veniam deserunt temporibus!</p>
                </div>
                <h3 className="text-white">Réseaux sociaux </h3>
                <ul className="flex text-white justify-center gap-8"> 
                      <li> <i class="fa-brands fa-x-twitter"></i>twiter</li>
                        

                </ul>
                 <div className="w-[20%] text-center">
                <h3 class="text-white">Nos coordonnées</h3>
                <i class="fa-solid fa-phone text-white"></i>
                <i class="fa-solid fa-envelope text-white"></i>
                <i class="fa-solid fa-location-dot text-white"></i>
                <h3 class="text-white">notre Adresse</h3>

            </div>
            </div>
              <hr className="text-white" />
            <p class="text-center text-white">Copyrigh 2025</p>
            

        </footer>
         
        
        </>
       
    );
};

export default Footer