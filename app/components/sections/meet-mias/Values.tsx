"use client";

import { VALUES } from "@/constants/meet-mias/values";

export const Values = () => {
  return (
    <div className="mt-8 lg:mt-12 bg-brown-dark text-orange-dark">
      <div className="flex flex-col gap-8 lg:gap-12 max-w-5xl mx-auto text-center p-8">
        <h2 className="font-knicknack text-3xl lg:text-6xl">Unsere Werte</h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="flex flex-col items-center gap-4 lg:gap-6"
              >
                <Icon className="size-12 lg:size-16" />
                <p className="font-knicknack text-2xl lg:text-3xl">
                  {value.title}
                </p>
                <p className="text-sm lg:text-base">{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
