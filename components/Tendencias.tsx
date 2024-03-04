"use client";

import { Montserrat_Alternates, DM_Sans } from "next/font/google";
import { Tabs, Tab } from "@nextui-org/tabs";
import Cardt from "./Cardt";
import { Suspense } from "react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const monse = Montserrat_Alternates({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: ["300", "700"],
  subsets: ["latin"],
});

function Tendencias() {
  return (
    <div className="bg-tendencia-image py-6">
      {/*TITULO*/}
      <div className="flex w-full  justify-center">
        <h1 className={`${monse.className} text-azul-800 font-bold text-5xl`}>
          Tendencias <span className="text-azul-200 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
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

      {/*TABS*/}
      <div className="text-center px-8">
        <Tabs aria-label="Options" variant="underlined">
          <Tab key="Dama" title="Dama">
            {/*CARD */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper px-8" 
            >
              <SwiperSlide>
                <Suspense fallback={<p>Loading feed...</p>}>
                  <Cardt />
                </Suspense>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Tab>
          <Tab key="caballero" title="Caballero">
            hola
          </Tab>
          <Tab key="unisex" title="Unisex">
            prueba
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Tendencias;
