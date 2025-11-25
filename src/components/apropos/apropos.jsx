import techimg from "../../assets/IMG-20250709-WA0148.jpg"
export const Apropos = ()=> {

    return (
        <> 
            <section className="container mx-auto px-10 py-5 flex justify-center items-center gap-2 w-full h-[400px]" >
        <div className="w-[45%]"> 
            <h3 className="text-black text-3xl font-black mb-5">A propos de nous &#8594;</h3>
            <h2 className="text-3xl font-bold text-black text-justify mb-5"> La conception et la réalisation de plusieurs projet</h2>
            <p className="font-medium text-black mb-5"> <i> Des solutions d’applications informatiques développées sur mesure. Nous faisons la promotion des nouvelles technologies 
                de l’Information et de la Communication en développant des solutions numériques adaptées aux défis de la communauté.</i> </p>
           <button className="w-44 bg-blue-950 text-1xl hover:border-2 font-bold text-white py-3 px-3 rounded-2xl 
           cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600 hover:border-amber-600 mr-4 ">En savoir plus</button>
        </div>
        <div class="w-[15%] bg-blue-400 h-full rounded-2xl px-auto py-12">
           <div className="w-40 h-20 border-2 border-amber-95 bg-orange-400 mb-4 ml-2 text-1xl font-bold text-white py-3 px-3 rounded-2xl cursor-pointer "> 
            <h1 className="text-center text-4xl font-black text mt-0">10 +</h1>
            <h2 className="text-center mt-0 "> D'éxpériences</h2>

           </div>
           <div className="w-40 h-20 border-2 border-amber-95 bg-orange-400 mb-4 ml-2 text-1xl font-bold text-white py-3 px-3 rounded-2xl cursor-pointer">
             <h1 className="text-center text-4xl font-black text mt-0">500+</h1>
            <h2 className="text-center mt-0 "> Clients satisfait</h2>
            </div>
            <div className="w-40 h-20 border-2 border-amber-95 bg-orange-400  mb-4 ml-2 text-1xl font-bold text-white py-3 px-3 rounded-2xl cursor-pointer">
                 <h1 className="text-center text-4xl font-black text mt-0">50 +</h1>
            <h2 className="text-center mt-0 ">Partenaires </h2>
            </div>
        </div>
        <img src={techimg} className="w-[40%] rounded-2xl" alt="" />

     </section>
      
        </>
    );
};

export default Apropos