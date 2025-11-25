export const Contact = ()=> {

    return(
        <>
         <div className="mb- h-[600px] "> 
                <div className="container mx-auto px-10 py-5  gap-2 w-full h-[400px] mb-2">
                     <h3 className="text-black text-3xl font-black mb-5">Contactez-nous  &#8594;</h3>
                    <h2 class="text-3xl font-bold text-black text-justify mb-5">Laissez-nous un message</h2>
                    <div className="flex justify-between gap-2 ">
                       
                        <form action="" className="space-y-6 w-3/4 bg-amber-100 rounded-2xl p-4">
                        <div>
                        <label htmlFor="name" className="block text-[16px] font-bold text-gray-700 ">Nom </label>
                            <input type="text" name="name" className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                            <label htmlFor="email" className="block text-[16px] font-bold text-gray-700 ">Adresse Email   </label>
                            <input type="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/> 
                        </div>
                        <div>
                <label htmlFor="message" className="block text-[16px] font-bold text-gray-700 "> Votre Message </label>
                <textarea name="message" id="message" rows="4" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="w-1/2 cursor-pointer flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"            >
                  Envoyer le Message
                </button>
              </div>
                        </form>
                         <div className="w-1/4  bg-amber-100 rounded-2xl p-4">
                            <div className="flex justify-between h-1/4 items-center gap-1.5 bg-blue-600 rounded-2xl p-2 mb-4"> <h1 className="text-[15px] ">kkk</h1> 
                            <h2 className="text-[25px] font-bold ">+243 982 256 034</h2>
                            </div>
                             <div className="flex justify-between h-1/4 items-center gap-1.5 bg-orange-400 rounded-2xl p-2 mb-4"> <h1 className="text-[15px] ">kkk</h1> 
                            <h2 className="text-[25px] font-bold ">+243 982 256 034</h2>
                            </div>
                            
                        </div>
                    </div>
                   
                </div>
                
                </div>
        </>
    );
};
export default Contact