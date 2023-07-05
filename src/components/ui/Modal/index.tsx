"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as S from "./styles";

gsap.registerPlugin(ScrollTrigger);

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const modalRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const closeBtnRef = useRef(null);

  const tl = useRef(
    gsap.timeline({
      ease: Power1.easeOut,
    })
  );

  useEffect(() => {
    if (isOpen) {
      const ctx = gsap.context(() => {
        tl.current = gsap
          .timeline()
          .fromTo(
            titleRef.current,
            { autoAlpha: 0, x: 30 },
            { autoAlpha: 1, x: 0, duration: 0.8, delay: 0.3 },
            0
          )
          .fromTo(
            titleRef.current,
            { autoAlpha: 0, x: 30 },
            { autoAlpha: 1, x: 0, duration: 0.8, delay: 0.3 },
            0
          )
          .fromTo(
            contentRef.current,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.4"
          )
          .fromTo(
            closeBtnRef.current,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.4"
          );
      }, modalRef);
      return () => ctx.revert();
    }
  }, [isOpen]);

  return (
    <S.Modal ref={modalRef} isOpen={isOpen}>
      <S.ContentWrapper ref={contentRef}>
        <S.CloseButton ref={closeBtnRef} onClick={onClose}>
          <S.CloseIcon />
        </S.CloseButton>
        {children}
      </S.ContentWrapper>
    </S.Modal>
  );
}
