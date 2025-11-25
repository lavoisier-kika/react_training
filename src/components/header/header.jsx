
import logo from "../../assets/Logo-AllsolutionsII.png"
export const Header = ()=>{

    return(
        <> 
         <div className="w-full h-[100px] flex justify-between items-center pt-6 px-12" >
            <a href=""> <img src={logo}  alt="" className="w-[200px] pt-4" /></a>
            <div className="flex items-center gap-20"> 
            <ul className="flex items-center gap-8" >
                <li><a href="" className="font-bold text-[20px] hover:text-blue-900  hover:bg-amber-500 hover:rounded-[2px] ">Accueil</a></li>
                <li><a href="" className="font-bold text-[20px] hover:text-blue-900  hover:bg-amber-500 hover:rounded-[2px]" >Services</a></li>
                <li><a href="" className="font-bold text-[20px] hover:text-blue-900  hover:bg-amber-500 hover:rounded-[2px]" >Apropos</a></li>
                <li><a href="" className="font-bold text-[20px] hover:text-blue-900  hover:bg-amber-500 hover:rounded-[2px]" >Shop</a></li>
            </ul>
            <button className="w-30 bg-orange-400 text-1xl hover:border-2 font-bold text-white py-3 
            px-3 rounded-2xl cursor-pointer hover:bg-blue-950 transition duration-300 hover:text-orange-600
             hover:border-amber-600">Contact</button>
            </div>
        </div>
        <hr className="h-7 font-bold" />
        
        </>
       
    );
};

export default Header