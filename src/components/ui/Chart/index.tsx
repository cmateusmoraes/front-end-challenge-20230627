import { gsap, Power1, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as S from "./styles";

import imgLogo from "@/assets/img/leadster-logo.svg";
import imgLeadster from "@/assets/img/leadster.png";
import imgWhatsapp from "@/assets/img/whatsapp.png";
import imgForms from "@/assets/img/formulario.png";
import imgSmileLove from "@/assets/img/in-love-emoji-svgrepo-com.svg";
import imgSmileCrying from "@/assets/img/crying-emoji-svgrepo-com.svg";
import imgSmileConfused from "@/assets/img/confused-emoji-svgrepo-com.svg";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

gsap.config({ nullTargetWarn: false });

export function Chart() {
  const bgChart = useRef(null);
  const bgPlus = useRef(null);
  const free = useRef(null);
  const logoLeadster = useRef(null);
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  const leads1 = useRef(null);
  const leads2 = useRef(null);
  const leads3 = useRef(null);
  const smile1 = useRef(null);
  const smile2 = useRef(null);
  const smile3 = useRef(null);
  const solution1 = useRef(null);
  const solution2 = useRef(null);
  const solution3 = useRef(null);

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
            trigger: ".chart",
            scrub: false,
            start: "70% bottom",
            toggleActions: "play pause resume reset",
          },
        })
        .fromTo(
          bgChart.current,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0
        )
        .fromTo(
          bgPlus.current,
          { autoAlpha: 0, x: 50 },
          { autoAlpha: 1, x: 0, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          logoLeadster.current,
          { autoAlpha: 0, x: 25, y: 15, scale: 0 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: Back.easeOut.config(1),
          },
          "-=0.4"
        )
        .fromTo(
          bar1.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 1.5 },
          "-=1.2"
        )
        .fromTo(
          leads1.current,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          solution1.current,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          smile1.current,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: Back.easeOut.config(6) },
          "-=0.2"
        )
        .fromTo(
          bar2.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 1.5 },
          "-=1.5"
        )
        .fromTo(
          leads2.current,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          solution2.current,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          smile2.current,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: Back.easeOut.config(6) },
          "-=0.2"
        )
        .fromTo(
          bar3.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 2.5 },
          "-=1.5"
        )
        .fromTo(
          leads3.current,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          solution3.current,
          { autoAlpha: 0, y: 15 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
            ease: Back.easeOut.config(6),
          },
          "-=0.2"
        )
        .fromTo(
          smile3.current,
          { scale: 0 },
          { scale: 1, duration: 1.5, ease: Back.easeOut.config(15) },
          "-=0.2"
        )
        .fromTo(
          free.current,
          { autoAlpha: 0, x: 20 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1.5,
            ease: Back.easeOut.config(6),
          },
          "-=0.2"
        )
        .duration(4);
    }, ".chart");
    return () => ctx.revert();
  }, []);

  return (
    <S.WrapperChart>
      <S.WrapperBar right="406px" bottom="117px" className="chart">
        <S.Solution
          ref={solution1}
          src={imgForms}
          alt="Usando Formulários"
          $pxToCenter="-10px"
        />

        <S.Bar ref={bar1} height="158px">
          <S.NumberLeads ref={leads1}>
            <strong>150</strong> Leads
          </S.NumberLeads>
        </S.Bar>

        <S.Smile ref={smile1} src={imgSmileCrying} alt="Chorando"></S.Smile>
      </S.WrapperBar>

      <S.WrapperBar right="278px" bottom="117px">
        <S.Solution
          ref={solution2}
          src={imgWhatsapp}
          alt="Usando Whatsapp"
          $pxToCenter="-10px"
        />

        <S.Bar height="240px" ref={bar2}>
          <S.NumberLeads ref={leads2}>
            <strong>230</strong> Leads
          </S.NumberLeads>
        </S.Bar>

        <S.Smile src={imgSmileConfused} alt="Confuso" ref={smile2}></S.Smile>
      </S.WrapperBar>

      <S.WrapperBar right="149px" bottom="117px">
        <S.Solution
          ref={solution3}
          src={imgLeadster}
          alt="Aumentar minhas conversões com Leadster"
          $pxToCenter="-40px"
        />
        <S.Bar height="480px" leadster ref={bar3}>
          <S.NumberLeads leadster ref={leads3}>
            <strong>450</strong> Leads
          </S.NumberLeads>
        </S.Bar>
        <S.Smile src={imgSmileLove} alt="Amando" ref={smile3}></S.Smile>
      </S.WrapperBar>
      <S.Detail ref={logoLeadster} src={imgLogo} alt="Leadster" />
      <S.Free ref={free} className="free">
        14 dias grátis
      </S.Free>
      <S.Background ref={bgChart} />
      <S.Plus ref={bgPlus} />
    </S.WrapperChart>
  );
}
