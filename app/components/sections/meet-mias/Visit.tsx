"use client";

import { CONTACT_DETAILS } from "@/constants/meet-mias/contactDetails";
import { OPENING_TIMES } from "@/constants/meet-mias/openingTimes";
import { Fragment } from "react/jsx-runtime";

export const Visit = () => {
  return (
    <div className="my-8 text-brown-light font-knicknack">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto text-center lg:p-8 lg:gap-12">
        <p className="font-knicknack text-3xl text-brown-dark lg:text-6xl">
          Besuche uns
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Öffnungszeiten */}
          <div className="flex flex-col items-center gap-2 bg-amber-50 p-10 rounded-2xl">
            <p className="text-3xl mb-4">Öffnungszeiten</p>
            <div className="flex flex-col space-y-4 w-full">
              {OPENING_TIMES.map((openingTimes) => (
                <div
                  key={openingTimes.id}
                  className="flex flex-col text-lg font-poppins"
                >
                  <p>{openingTimes.days}</p>
                  <p>{openingTimes.time}</p>
                  <span className="border border-cream w-full mt-2"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-center gap-2 bg-amber-50 p-10 rounded-2xl">
            <p className="text-3xl mb-4">Kontakt</p>
            <div className="flex flex-col space-y-4 w-full">
              {CONTACT_DETAILS.map((contactDetails) => (
                <div
                  key={contactDetails.id}
                  className="flex flex-col text-lg font-poppins"
                >
                  <p>{contactDetails.type}</p>
                  <p>{contactDetails.text}</p>
                  <span className="border border-cream w-full mt-2"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
