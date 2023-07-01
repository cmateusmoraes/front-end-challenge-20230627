"use client";

import Select from "@/components/ui/Select";
import VideoCard from "@/components/VideoCard";
import { Container } from "@/styles/Commom";
import { Text } from "@/components/ui/Text";
import { FilterTag } from "@/components/ui/FilterTag";

import * as S from "./styles";

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
  const handleClickFilter = () => {
    console.log("Filter");
  };

  return (
    <Container id="videos" as="section">
      <S.FilterWrapper>
        <S.FilterList>
          {filterData.map((item, index) => (
            <FilterTag
              label={item.label}
              key={index}
              onClick={handleClickFilter}
            />
          ))}
        </S.FilterList>

        <S.SelectWrapper>
          <Text fontSize="xs" fontWeight="500" as="label">
            Ordenar por
          </Text>
          <Select options={Object(options)} placeholder="Data de publicação" />
        </S.SelectWrapper>
      </S.FilterWrapper>

      <S.VideosWrapper>
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
