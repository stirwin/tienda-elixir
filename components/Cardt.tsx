import { Suspense } from 'react'
//fetch
async function  CargaperfumesM(){
    const res = await fetch("http://127.0.0.1:3000/api/perfumes");
    const data= await res.json();
    console.log(data);
  
}


  


export default async function Cardt() {


    const cargaM =await CargaperfumesM();
  return (
    <div>
      {/*CARD*/}
      
      <div
        id="card"
        className="bg-azul-100 rounded-t-full border border-azul-900 w-3/4"
      >
        {/*imagen*/}
        <div className="flex justify-center p-8">
          <img src="./colonia_prueba.png" alt="" />
        </div>
        {/*titulo*/}
        <div className="flex border-t-1 border-azul-900 justify-between p-3">
          <h1 className="text-azul-800 font-bold">versace dylan blue</h1>
          {/*STAR*/}
          <div className="flex">
            <span className="text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <h1>4.0</h1>
          </div>
        </div>
        {/*descripcion*/}
        <div className="px-3 mb-2">
          <h1 className="text-azul-500">100ml</h1>
          <h1 className="text-gray-600">
            for men - cold fragrance - Fern - grapefruit - wood - bergamot
          </h1>
        </div>
        {/*Precio*/}
        <div className="flex justify-between ">
          <div className="ml-3">
            <h1 className="font-bold text-azul-800 text-xl py-4">$107.00</h1>
          </div>
          <div className="flex justify-end">
            <button className="bg-azul-900 text-white px-6 py-2">
              comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
