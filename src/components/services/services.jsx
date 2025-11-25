import techninciens from "../../assets/ALLSOL techniciens.jpg"
export const Services = ()=> {
    return (
        <div className="mb- h-[750px] "> 
        <div className="container mx-auto px-10 py-5  gap-2 w-full h-[400px] mb-2">
             <h3 className="text-black text-3xl font-black mb-5">Services  &#8594;</h3>
            <h2 class="text-3xl font-bold text-black text-justify mb-5">Les services disponible chez nous</h2>
            <div className="w-85 bg-amber-600 rounded-2xl">
                <div className=" gap-2 pt-2"> 
                    <img src={techninciens} alt="" className="w-70 rounded-t-xl mx-auto mb-2 " />
                    <h1 className="text-[25px] font-bold text-center">Formation Professionnelle</h1>
                    <p className="text-center">Lorem, ipsum dolor sit  <i>amet consectetur adipisicing elit.</i> Ut repellendus qui incidunt sint accusamus </p>
                    <button className="w-44 bg-blue-950 text-1xl hover:border-2 font-bold text-white py-3 px-3 rounded-2xl 
           cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600 hover:border-amber-600 mx-18 my-4">En savoir plus</button>

                  
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Services