"use client";

import { ButtonLink } from "@/components/shop/ButtonLink";
import { VariantsAnimate } from "@/components/shop/animation/VariantsAnimate";
import { ImageContainer } from "@/components/shop/layouts/ImageContainer";
import { ScreenContainer } from "@/components/shop/layouts/ScreenContainer";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <ScreenContainer className="flex-col-reverse lg:flex-row">
      <VariantsAnimate
        className={cn(
          "w-full flex flex-col items-center justify-center space-y-8 font-prompt font-light p-12 mb-auto",
          "lg:w-2/4 lg:mb-0"
        )}
        items={[
          <h1
            key="title"
            className="flex-col lg:text-8xl flex items-center uppercase text-6xl"
          >
            <span>Katia</span>
            <span>Kameneva</span>
          </h1>,
          <p
            key="description"
            className="uppercase font-medium text-xl lg:text-2xl text-center max-w-3xl"
          >
            welcome to Katia Kameneva gallery. here you can browse my artworks,
            purchase it
          </p>,
          <div key="buttons" className="flex flex-wrap gap-2">
            <ButtonLink href="/about">see biography</ButtonLink>
            <ButtonLink
              href="/gallery"
              className="bg-black text-white hover:bg-white hover:text-black min-w-[157px] text-center"
            >
              see gallery
            </ButtonLink>
          </div>,
        ]}
      />

      <ImageContainer
        bgImage="bg-home-pattern"
        className="h-60 w-full lg:w-2/4 lg:h-full lg:block bg-no-repeat bg-center bg-cover"
      />
    </ScreenContainer>
  );
}
