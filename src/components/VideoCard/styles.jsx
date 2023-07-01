import Image from "next/image";
import styled from "styled-components";

export const VideoCard = styled.button`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: -1px 4px 54px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;

  figure {
    display: block;
    position: relative;
    padding-bottom: 90px;

    &::before {
      content: " ";
      position: absolute;
      background-color: var(--primaryColor);
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      transform-origin: center center;
      top: calc(40% - 1.5rem);
      right: 0;
      bottom: 0;
      opacity: 0;
      left: calc(50% - 1.5rem);
      transition: all 0.2s ease-out;
      z-index: 10;
    }
  }

  &:hover {
    box-shadow: -1px 4px 54px 0px rgba(0, 0, 0, 0.2);

    & > img {
      opacity: 1;
      transform: scale(1);
    }
    figcaption {
      height: 105px;
    }

    figure {
      &::before {
        opacity: 0.5;
        transform: scale(20);
      }

      img {
        transform: translateY(5px) scale(1.03);
      }
    }
  }
`;

export const ImageVideo = styled(Image)`
  position: relative;
  z-index: 5;
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.25s ease-out;
`;

export const IcoPlay = styled(Image)`
  display: block;
  position: absolute;
  top: calc(35% - 3.5rem);
  right: 0px;
  bottom: 0px;
  left: calc(50% - 3.5rem);
  z-index: 10;
  width: 7rem;
  height: 7rem;
  z-index: 20;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.25s ease-out;
`;

export const CaptionVideo = styled.figcaption`
  position: absolute;
  z-index: 15;
  background-color: #ffffff;
  height: 9rem;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  transition: all 0.2s ease-out;
`;
