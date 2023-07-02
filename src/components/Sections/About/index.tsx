"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { Chart } from "@/components/ui/Chart";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button/styles";
import * as S from "./styles";

import imgBadge from "@/assets/img/selo-RDStation.png";
import imgNoCredit from "@/assets/img/no-credit-card.svg";
import imgRating from "@/assets/img/rating.webp";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const about = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const demo = useRef(null);
  const credit = useRef(null);
  const cta = useRef(null);

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
            trigger: about.current,
            scrub: false,
            start: "50% bottom",
            toggleActions: "play pause resume reverse",
          },
        })
        .fromTo(
          title.current,
          { autoAlpha: 0, x: 30 },
          { autoAlpha: 1, x: 0, duration: 0.8, delay: 0.3 },
          0
        )
        .fromTo(
          text.current,
          { autoAlpha: 0, x: 30 },
          { autoAlpha: 1, x: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          demo.current,
          { autoAlpha: 0, x: 30 },
          { autoAlpha: 1, x: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          credit.current,
          { autoAlpha: 0, x: 30 },
          { autoAlpha: 1, x: 0, duration: 0.8 },
          "-=0.4"
        )
        .to(cta.current, {
          scale: "+=0.1",
          yoyo: true,
          repeat: 4,
          duration: 0.2,
          delay: 3,
        });
    }, about);
    return () => ctx.revert();
  }, []);

  return (
    <S.SectionAbout id="about">
      <S.WrapperAbout bgBlue>
        <S.WrapperGraph>
          <Chart />
        </S.WrapperGraph>

        <S.WrapperInfo ref={about}>
          <Text as="h2" fontSize="4.1rem" fontWeight="500" ref={title}>
            Pronto para triplicar sua
            <br />
            <strong>Geração de Leads?</strong>
          </Text>

          <Text fontSize="2.3rem" margin="1.5rem 0 2.5rem" ref={text}>
            Criação e ativação em <strong>4 minutos.</strong>
          </Text>

          <S.WrapperCta ref={demo}>
            <Button ref={cta}>Ver Demonstração</Button>

            <Image src={imgBadge} alt="Info" loading="lazy" />
          </S.WrapperCta>

          <S.WrapperDetails fontSize="xs" fontWeight="600" ref={credit}>
            <span>
              <Image
                src={imgNoCredit}
                alt="Não é necessário cartão de crédito."
                style={{
                  width: "18px",
                  height: "auto",
                  display: "block",
                }}
              />
              Não é necessário Cartão de Crédito <i>|</i>
            </span>
            <span>
              <Image
                src={imgRating}
                alt="4.9/5 média de satisfação."
                style={{
                  width: "92px",
                  height: "16px",
                  display: "block",
                }}
              />
              4.9/5 média de satisfação.
            </span>
          </S.WrapperDetails>
        </S.WrapperInfo>
      </S.WrapperAbout>
    </S.SectionAbout>
  );
}
