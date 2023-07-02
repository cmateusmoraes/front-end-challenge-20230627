"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, Power1, Back } from "gsap";

import logoLeadster from "@/assets/img/leadster.svg";

import { Container, Logo } from "./styles";

export function Header() {
  const logo = useRef(null);

  const tl = useRef(
    gsap.timeline({
      ease: Power1.easeOut,
    })
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(
          logo.current,
          {
            autoAlpha: 1,
            scale: 1,
            ease: Back.easeOut.config(1),
            duration: 0.5,
          },
          0
        );
    }, logo);
    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <Logo src={logoLeadster} alt="Leadster" priority ref={logo} />
    </Container>
  );
}
