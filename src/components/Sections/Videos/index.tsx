"use client";

import { Container } from "@/styles/Commom";
import { Text } from "@/components/ui/Text";
import {
  FilterWrapper,
  FilterList,
  SelectWrapper,
  VideosWrapper,
  CardVideo,
  PaginationList,
  PaginationWrapper,
  PaginationItem,
  PaginationButton,
} from "./styles";
import Select from "@/components/ui/Select";
import { FilterTag } from "@/components/ui/Filter";

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

const itemsPagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function Videos() {
  const handleClickFilter = () => {
    console.log("Filter");
  };

  return (
    <Container id="videos" as="section">
      <FilterWrapper>
        <FilterList>
          {filterData.map((item, index) => (
            <FilterTag
              label={item.label}
              key={index}
              onClick={handleClickFilter}
            />
          ))}
        </FilterList>

        <SelectWrapper>
          <Text fontSize="xs" fontWeight="500">
            Ordenar por
          </Text>
          <Select options={Object(options)} placeholder="Data de publicação" />
        </SelectWrapper>
      </FilterWrapper>

      <VideosWrapper>
        <CardVideo>CardVideo</CardVideo>
      </VideosWrapper>

      <PaginationWrapper>
        <Text fontSize="sm" fontWeight="600" color="#000000">
          Página
        </Text>

        <PaginationList>
          {itemsPagination.map((item, index) => (
            <PaginationItem key={index}>
              <PaginationButton>{item}</PaginationButton>
            </PaginationItem>
          ))}
        </PaginationList>
      </PaginationWrapper>
    </Container>
  );
}
