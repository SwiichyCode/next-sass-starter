"use client";

import { ButtonLink } from "@/components/shop/ButtonLink";
import { VariantsAnimate } from "@/components/shop/animation/VariantsAnimate";
import { ImageContainer } from "@/components/shop/layouts/ImageContainer";
import { ScreenContainer } from "@/components/shop/layouts/ScreenContainer";
import { about } from "@/constants/text";

export default function AboutPage() {
  return (
    <ScreenContainer className="flex-col lg:flex-row">
      <ImageContainer
        bgImage="bg-about-pattern"
        className="hidden lg:block lg:w-2/4 lg:h-full lg:bg-center"
      />
      <VariantsAnimate
        className="w-full lg:w-2/4 flex flex-col space-y-6 font-prompt font-light p-12 overflow-y-auto scroll-smooth"
        items={[
          <div
            key="group"
            className="flex flex-wrap justify-between items-center gap-4"
          >
            <h1 className="uppercase text-5xl flex justify-center items-center gap-4">
              <span>{about.title}</span>
            </h1>
            <ButtonLink href="/gallery">see gallery</ButtonLink>
          </div>,
          ...about.paragraph.map((p, i) => <p key={i}>{p}</p>),
        ]}
      />
    </ScreenContainer>
  );
}
