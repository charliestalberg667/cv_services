"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const brands = [
  "Livoltek",
  "Huawei",
  "MaxHub",
  "Sungrow",
  "BYD",
  "Hypontech",
  "PGB",
  "Esdec",
  "I-Fix",
  "Art-Sign",
  "Hager",
  "Livoltek",
  "Huawei",
  "MaxHub",
  "Sungrow",
  "BYD",
  "Hypontech",
  "PGB",
  "Esdec",
  "I-Fix",
  "Art-Sign",
  "Hager",
];

export function BrandsScroll() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="py-3 bg-[#ededed] ">
      <Marquee gradient={false} speed={30}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-8 transition-transform duration-8000 ease-in-out hover:scale-110"
          >
            <span
              className={`text-sm ${
                index % 2 === 0
                  ? "text-[#14281D] font-semibold"
                  : "text-[#14281D] font-light"
              }`}
            >
              {brand}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
