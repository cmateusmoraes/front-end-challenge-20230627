"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Text } from "@/components/ui/Text";
import * as S from "./styles";

import imgVideo from "@/assets/img/video4.jpg";
import icoPlay from "@/assets/img/play.svg";

gsap.registerPlugin(ScrollTrigger);

export default function VideoCard() {
  const video = useRef(null);

  const tl = useRef(
    gsap.timeline({
      ease: Power1.easeOut,
    })
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: video.current,
            scrub: false,
            start: "bottom bottom",
          },
        })
        .fromTo(
          video.current,
          { autoAlpha: 0, scale: 0.8, y: 40 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.5 },
          0
        );
    }, video);
    return () => ctx.revert();
  }, []);

  return (
    <S.VideoCard ref={video}>
      <S.IcoPlay src={icoPlay} alt="Ver vídeo" loading="lazy" />
      <figure>
        <S.ImageVideo
          src={imgVideo}
          alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          loading="lazy"
        />
        <S.CaptionVideo>
          <Text fontSize="xs" fontWeight="800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </S.CaptionVideo>
      </figure>
    </S.VideoCard>
  );
}
