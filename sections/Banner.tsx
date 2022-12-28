import { apply, tw } from "twind";
import { animation, css } from "twind/css";
import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  image: LiveImage;
  imageMobile: LiveImage;
  altText: string;
  title: string;
  subTitle: string;
}

export default function Banner({
  image,
  imageMobile,
  altText,
  subTitle,
  title,
}: Props) {
  return (
    <div class="bg-primary px-7 pt-16 pb-10">
      <div class="flex flex-col lg:flex-row lg:max-w-[1155px] lg:mx-auto">
        <div class="h-full w-full lg:self-center">
          <div class="flex flex-col justify-center h-full w-full max-w-screen-xl m-auto px-5">
            <h1 class="text-[7.5vw] mt-2 md:mt-8 lg:text-[2rem]">{title}</h1>
            <p class="text-lg lg:text-xl mt-7">{subTitle}</p>
            <button class="mt-8 flex justify-center rounded-[2rem] py-3 border-text border-1 text-sm min-w-[6rem] text-center w-min">
              Sign up
            </button>
          </div>
        </div>
        <picture class="w-full mt-[3.75rem]">
          <source media="(max-width: 767px)" srcset={imageMobile} />
          <source media="(min-width: 768px)" srcset={image} />
          <Image
            class="object-cover w-full h-full inset-0 md:h-auto"
            sizes="(max-width: 640px) 75vw, 50vw"
            src={image}
            alt={altText}
            width={300}
            height={300}
          />
        </picture>
      </div>
    </div>
  );
}
