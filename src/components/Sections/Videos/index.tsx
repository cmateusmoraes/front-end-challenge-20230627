"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Select from "@/components/ui/Select";
import VideoCard from "@/components/ui/VideoCard";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { FilterTag } from "@/components/ui/FilterTag";
import * as S from "./styles";

gsap.registerPlugin(ScrollTrigger);

const filterData = [
  { label: "Agências", value: 1 },
  { label: "Chatbot", value: 2 },
  { label: "Marketing Digital", value: 3 },
  { label: "Geração de Leads", value: 4 },
  { label: "Mídia Paga", value: 5 },
];

const options = [
  { value: "ASC", label: "Mais recentes" },
  { value: "DESC", label: "Mais antigos" },
];

const itemsPagination = [1, 2, 3, 4];

export function Videos() {
  const filters = useRef(null);
  const select = useRef(null);
  const videoGrid = useRef(null);

  const tl = useRef(
    gsap.timeline({
      ease: Power1.easeOut,
    })
  );

  const handleClickFilter = () => {
    console.log("Filter");
  };

  const handleClearFilter = () => {
    console.log("Filter");
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(
          filters.current,
          { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.3 },
          0
        )
        .to(select.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to(videoGrid.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4");
    }, filters);
    return () => ctx.revert();
  }, []);

  return (
    <Container id="videos" as="section">
      <S.FilterWrapper ref={filters}>
        <S.FilterList>
          {filterData.map((item, index) => (
            <FilterTag
              key={index}
              label={item.label}
              onClick={handleClickFilter}
            />
          ))}
          <FilterTag label="Todos" onClick={handleClearFilter} />
        </S.FilterList>

        <S.SelectWrapper ref={select}>
          <Text fontSize="xs" fontWeight="500" as="label">
            Ordenar por
          </Text>
          <Select options={Object(options)} placeholder="Data de publicação" />
        </S.SelectWrapper>
      </S.FilterWrapper>

      <S.VideosWrapper ref={videoGrid}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </S.VideosWrapper>

      <S.PaginationWrapper>
        <Text fontSize="2.5rem" fontWeight="600" color="#000000">
          Página
        </Text>

        <S.PaginationList>
          {itemsPagination.map((item, index) => (
            <S.PaginationItem key={index}>
              <S.PaginationButton>{item}</S.PaginationButton>
            </S.PaginationItem>
          ))}
        </S.PaginationList>
      </S.PaginationWrapper>
    </Container>
  );
}
