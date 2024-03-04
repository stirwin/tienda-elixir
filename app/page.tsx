import Tendencias from "@/components/Tendencias";
import { Link } from "@nextui-org/link";
import { Montserrat_Alternates, DM_Sans} from "next/font/google";
import Image from "next/image";

const monse = Montserrat_Alternates({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const dmsans = DM_Sans({
	weight: ["300", "700"],
	subsets: ["latin"],
  });

export default function Home() {
  return (
    <section className="">
      <div className="flex">
        <div className="w-1/2 ">
          <div className="font-poppins font-bold text-white text-8xl leading-[1.1]">
            <h1 className={monse.className}>
              Los mejores perfumes para ti
              <span className="text-azul-200 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </h1>
          </div>
          {/*Descripcion*/}
          <h1 className={`${dmsans.className}font-dmsans w-2/3 mt-6 text-white`} >
            Descubre la fragancia perfecta para ti con nuestra amplia selección
            de perfumes.
          </h1>
          {/*botones*/}
          <div className="flex mt-6 gap-4">
            <button className="bg-azul-200 text-azul-800 font-bold p-4 rounded-lg ">
              ordenar ahora
            </button>
            <button className="border-2 border-azul-200 text-white p-4 rounded-lg ">
              Ver video
            </button>
          </div>
          {/*datos*/}
          <div className="flex mt-6 gap-4">
            <div>
            <h1 className={`${dmsans.className} text-white font-dmsans font-medium text-3xl`}>500k</h1>
              <h1 className={`${dmsans.className} text-white font-dmsans`}>Clientes</h1>
            </div>
			<div className="border-r-2 border-white"></div>
			<div className="">
              <h1 className={`${dmsans.className} text-white font-medium text-3xl`}>100+</h1>
              <h1 className={`${dmsans.className} text-white`}>Perfumes</h1>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image alt="img" src="/imgmitad.png" width={1500} height={1500} />
        </div>
      </div>

      <Tendencias/>

      
    </section>
  );
}
