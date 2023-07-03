"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Text } from "@/components/ui/Text";
import * as S from "./styles";

import icoPlay from "@/assets/img/play.svg";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface VideoCardProps {
  id: string;
  title: string;
  thumb: {
    url: string;
    width: number;
    height: number;
  };
}

export default function VideoCard({
  id,
  title,
  thumb: { url, width, height },
}: VideoCardProps) {
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
            start: "10% bottom",
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
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <S.IcoPlay src={icoPlay} alt="Ver vídeo" loading="lazy" />
        <figure>
          <S.ImageVideo
            src={url}
            alt={title}
            width={width}
            height={height}
            loading="lazy"
          />
          <S.CaptionVideo>
            <Text fontSize="xs" fontWeight="800">
              {title}
            </Text>
          </S.CaptionVideo>
        </figure>
      </a>
    </S.VideoCard>
  );
}
