import bannermg from "../../assets/aimabl2e.png"
export const Banner = () => {

    return(
        <>
        <div className=" flex justify-center items-center gap-8 px-24"> 
            <div className="w-3/4"> 
                <h1 className="text-7xl font-mono"> Votre partenaire de confiance </h1> 
                <p className="text-2xl font-light " >Allsolutions Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias velit assumenda, amet itaque atque voluptates, quo minus sed deserunt, qui eaque veritatis ratione vitae odio ducimus. Corrupti unde quam at.</p>
                <div>
                    <button className="w-44 bg-blue-950 text-1xl hover:border-2 font-bold text-white py-3 px-3 rounded-2xl cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600 hover:border-amber-600 mr-4 ">En savoir plus</button>
                    <button className="w-14 h-14 bg-blue-950 text-1xl hover:border-2 font-bold text-white py-3 px-3 rounded-[50%] cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600 hover:border-amber-600">I</button>
                </div>
                </div>
            <img src={bannermg}  className="h-[500px] w-1/4 " alt="" />

        </div>
        </>
    );
};

export default Banner