"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import VideoCard from "@/components/ui/VideoCard";
import { Text } from "@/components/ui/Text";
import { FilterTag } from "@/components/ui/FilterTag";
import { Modal } from "@/components/ui/Modal";
import { CustomSelect } from "@/components/ui/Select";
import * as S from "./styles";

import { VideoProps, OrderProps } from "@/types/types";
import { categories } from "@/data/categories";
import { orders } from "@/data/orders";

gsap.registerPlugin(ScrollTrigger);

export function Videos() {
  const [localData, setLocalData] = useState<VideoProps[]>([]);
  const [categorySelected, setCategorySelected] = useState<Number>();
  const [orderSelected, setOrderSelected] = useState(orders[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = localData.slice(indexOfFirstItem, indexOfLastItem);

  const filterList = useRef(null);
  const select = useRef(null);
  const videoGrid = useRef(null);

  const tl = useRef(
    gsap.timeline({
      ease: Power1.easeOut,
    })
  );

  const { isLoading, error, data } = useQuery<VideoProps[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://mocki.io/v1/d3ab7e80-a064-40e4-91ee-5ff887ca151e")
        .then(res => res.data),
    onSuccess: data => {
      setLocalData(data);
      setTimeout(() => showVideos(), 500);
    },
  });

  //PAGINATION
  useEffect(() => {
    showVideos();
  }, [currentPage]);

  const sortByOrder = (order: any) => {
    setOrderSelected(order);
    setCurrentPage(1);
    const sortedData = localData.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return orderSelected.value === "DESC"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
    setLocalData(sortedData);
  };

  const filterByCategory = (selectedCategoryId: number) => {
    if (selectedCategoryId !== categorySelected && data) {
      const filteredData = data.filter(
        video => video.snippet.category.id === selectedCategoryId
      );
      setLocalData(filteredData);
      setCategorySelected(selectedCategoryId);
      setCurrentPage(1);
    } else {
      setLocalData(data ? data : []);
      setCategorySelected(0);
    }
    scrollToVideos();
  };

  const showVideos = () => {
    tl.current = gsap
      .timeline()
      .to(
        filterList.current,
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.3 },
        0
      )
      .to(select.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(videoGrid.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4");
  };

  const scrollToVideos = () => {
    const element = document.getElementById("videos") as HTMLElement | null;
    const offsetTop = element?.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  if (isLoading || !data)
    return (
      <S.SectionVideos style={{ padding: "10rem 0", textAlign: "center" }}>
        {/* TODO: Skeleton Loading */}
      </S.SectionVideos>
    );

  if (error)
    return (
      <S.SectionVideos style={{ padding: "10rem 0", textAlign: "center" }}>
        <Text fontSize="2rem" fontWeight="600" color="darkred">
          Ocorreu um erro ao carregar os vídeos
        </Text>
      </S.SectionVideos>
    );

  return (
    <S.SectionVideos id="videos" as="section">
      <S.FilterWrapper ref={filterList}>
        <S.FilterList>
          {categories.map((item, index) => (
            <FilterTag
              key={index}
              label={item.label}
              onClick={() => filterByCategory(item.value)}
              isActive={categorySelected === item.value}
            />
          ))}
          <FilterTag
            label="Todos"
            onClick={() => setLocalData(data)}
            isActive={categorySelected === 0}
          />
        </S.FilterList>

        <S.SelectWrapper ref={select}>
          <Text fontSize="xs" fontWeight="500" as="label">
            Ordenar por
          </Text>
          <CustomSelect
            value={orderSelected}
            onChange={value => {
              sortByOrder(value);
              scrollToVideos();
            }}
            options={orders}
            mapOptionToLabel={(order: OrderProps) => order.label}
            mapOptionToValue={(order: OrderProps) => order.value}
          />
        </S.SelectWrapper>
      </S.FilterWrapper>

      <S.VideosWrapper ref={videoGrid} id="videos-grid">
        {currentItems.map((video, index) => (
          <VideoCard
            key={index}
            id={video?.id?.videoId}
            title={video.snippet.title}
            thumb={video.snippet.thumbnails.high}
          />
        ))}
      </S.VideosWrapper>

      <S.PaginationWrapper>
        <Text fontSize="2.5rem" fontWeight="600" color="#000000">
          Página
        </Text>

        <S.PaginationList>
          {Array.from({
            length: Math.ceil(localData.length / itemsPerPage),
          }).map((item, index) => (
            <S.PaginationItem key={index}>
              <S.PaginationButton
                onClick={() => {
                  setCurrentPage(index + 1);
                  scrollToVideos();
                }}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </S.PaginationButton>
            </S.PaginationItem>
          ))}
        </S.PaginationList>
      </S.PaginationWrapper>

      {/* <Modal onClose={() => setShowModal(!showModal)} isOpen={showModal}>
        Teste
      </Modal> */}
    </S.SectionVideos>
  );
}
