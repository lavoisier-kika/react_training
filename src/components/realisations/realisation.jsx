import virunga from "../../assets/VIRUNGA FOUND.png"
export const Realisation = ()=> {
    return (
        <> 
       <section className="container mx-auto px-10  gap-2 w-full">
        <div class="flex justify-between "> 
            <div> <h3 className="text-black text-3xl font-black mb-5" >Nos réalisation  &#8594;</h3>
            <h3 className="text-3xl font-bold text-black text-justify mb-5">Les travaux réalisés avec différentes organisations</h3>
        </div>
        <button  className="w-32 h-12 bg-orange-400 text-1xl font-bold text-white py-3 
            px-3 rounded-2xl cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600
             hover:border-amber-600">En savoir plus</button>
           
        </div>
       
        <div class="flex gap-5 p-5 w-full h-[200px] bg-amber-200 rounded-[15px] m-2">
            <div class="w-[30%]">
                <img src={virunga} className="w-[40%]" alt="" />
                </div>
                <div class="w-[70%]"> 
                    <p class="font-medium text-black mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consectetur nulla tenetur aut, cum veniam molestiae molestias ipsam 
                        qui nam tempore odio reprehenderit facilis cupiditate dicta ullam libero, laborum, magni tempora dignissimos! Pariatur autem vel nam, eius cupiditate facilis dicta doloribus quaerat corrupti, 
                        vitae quas qui blanditiis architecto impedit sint quibusdam.</p>
            <button class="w-2x20  bg-orange-400 text-1xl font-bold text-white py-3 
            px-3 rounded-2xl cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600
             hover:border-amber-600">En savoir plus</button>
        </div>
        </div>
        </section>
        
        </>
    );
};

export default Realisation