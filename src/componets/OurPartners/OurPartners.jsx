"use client";
import { useEffect, useState, useRef } from "react";
import Image from 'next/image'
import { useRouter } from "next/navigation";

const OurPartners = ({ backgroundClass = "bg-white", hideFade = false, isHomepage = false }) => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const ref = useRef(null);
  const observer = useRef(null);
  const router = useRouter();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          let start = 0;
          const end = 1000; 
          const duration = 1000;
          const steps = 100;
          const intervalTime = duration / steps;
          const increment = end / steps;

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(`1K+`); 
              clearInterval(counter);
              setHasCounted(true);
            } else {
              setCount(Math.round(start));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasCounted]);
  
  const partners = [
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/HireTalentOurPartners/HireTalentOurPartners/YIRicon.png`,
      alt: "Partner 1",
      specialClass: "scale-[75%]"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/Homepagesvgs/BigBasket.png`,
      alt: "BigBasket",
      specialClass: "scale-[80%]"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/Homepagesvgs/cultfitlogosignup.png`,
      alt: "Cultfit",
      specialClass: "scale-[70%]"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/pricingLogos/atomberg.png`,
      alt: "Atomberg",
      specialClass: ""
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/company-logo/Spicejet_p1.png`,
      alt: "Partner 5",
      specialClass: "scale-[90%]"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/pricingLogos/max+life.png`,
      alt: "MaxlifeInsurance",
      specialClass: "scale-[80%]"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/new_partners_logos/digiboxx.png`,
      alt: "Partner 7",
      specialClass: "scale-150"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/new_partners_logos/genesis.png`,
      alt: "Partner 8",
      specialClass: "scale-150"
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/pricingLogos/hdb+financial+services.png`,
      alt: "HBD",
      specialClass: ""
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/my+money/mymoneynew.png`,
      alt: "My Money",
      specialClass: "scale-150" 
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/Homepagesvgs/hungama-removebg-preview.png`,
      alt: "Partner 11",
      specialClass: ""
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/Homepagesvgs/Urban-company-1_enhanced-removebg-preview.png`,
      alt: "Partner 12",
      specialClass: ""
    },
    {
      src: `https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/sony-logo-png_seeklogo-129420-removebg-preview.png`,
      alt: 'Sony Logo',
      specialClass: ""
    },
  ];

  return (
    <div ref={ref} className={`relative w-full ${isHomepage ? 'py-24' : 'sm:mb-12 pt-16'} ${backgroundClass}`}>
      <div className="pb-4 md:pb-8">
        <h4 className="text-2xl text-center font-semibold text-black md:text-[2.5rem]">
          Trusted by <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent px-2 inline-block min-w-[3ch] font-bold">{count}</span> Businesses
        </h4>
      </div>
      <div className="relative overflow-hidden">
        {/* Left Fade Effect */}
        {!hideFade && (
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        )}
        
        {/* Right Fade Effect */}
        {!hideFade && (
           <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        )}

        <div className="relative w-full h-auto">
          <div className="flex gap-4 w-max animate-scroll md:gap-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex gap-4 md:gap-6 shrink-0">
                {partners.map((partner, idx) => (
                  <div key={idx} className="flex items-center justify-center h-20 w-36 sm:h-24 sm:w-40 md:h-32 md:w-48 lg:h-36 lg:w-56">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={200}
                      height={100}
                      className={`max-h-full max-w-full object-contain ${partner.specialClass}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
