"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, Power1, Back } from "gsap";

import { Text } from "@/components/ui/Text";

import * as S from "./styles";

import imgDetailLeadster from "@/assets/img/leadster-logo.svg";

export function Hero() {
  const hero = useRef(null);
  const tag = useRef(null);
  const title = useRef(null);
  const titleConversion = useRef(null);
  const line = useRef(null);
  const leadsterDetail = useRef(null);
  const text = useRef(null);

  const tl = useRef(
    gsap.timeline({
      ease: Power1.easeOut,
    })
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(hero.current, { opacity: 1, duration: 0.8, delay: 0.3 })
        .from(
          tag.current,
          {
            clipPath: "inset(0 100% 0 0)",
            autoAlpha: 0,
            y: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(title.current, { autoAlpha: 0, y: 30, duration: 0.8 }, "-=0.4")
        .from(
          titleConversion.current,
          { autoAlpha: 0, y: 30, duration: 0.8 },
          "-=0"
        )
        .from(line.current, {
          autoAlpha: 0,
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
        })
        .from(
          leadsterDetail.current,
          {
            autoAlpha: 0,
            scale: 0,
            ease: Back.easeOut.config(3),
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(text.current, { autoAlpha: 0, y: 30, duration: 0.8 }, "-=0.4");
    }, title);
    return () => ctx.revert();
  }, []);

  return (
    <S.SectionHero ref={hero}>
      <S.WrapperText>
        <S.Tag ref={tag}>
          <Text
            fontSize="xxs"
            fontWeight="600"
            color="var(--primaryColor)"
            textAlign="center"
          >
            WEBINARS EXCLUSIVOS
          </Text>
        </S.Tag>

        <S.Title
          ref={title}
          fontSize="lg"
          letterSpacing="-0.1rem"
          textAlign="center"
          as="h1"
        >
          Menos Conversinha,
          <strong ref={titleConversion}>Mais Conversão</strong>
          <S.LeadsterDetail
            src={imgDetailLeadster}
            alt="Leadster"
            ref={leadsterDetail}
          />
        </S.Title>

        <S.Line ref={line} />

        <Text fontSize="sm" fontWeight="500" textAlign="center" ref={text}>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio.
        </Text>
      </S.WrapperText>
    </S.SectionHero>
  );
}
