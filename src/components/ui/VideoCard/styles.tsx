import Image from "next/image";
import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

export const VideoCard = styled.button`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: -1px 4px 54px 0px rgba(0, 0, 0, 0.1);
  transform-origin: bottom center;

  figure {
    display: block;
    position: relative;
    padding-bottom: 9rem;

    @media ${device.md} {
      padding-bottom: 7rem;
    }

    @media ${device.lg} {
      padding-bottom: 8rem;
    }

    img {
      height: 19.5rem;
      object-fit: cover;
      object-position: center;

      @media ${device.lg} {
        height: 16.5rem;
      }

      @media ${device.sm} {
        height: 22rem;
      }

      @media (max-width: 630px) {
        height: 20rem;
      }

      @media (max-width: 600px) {
        height: 30rem;
      }

      @media (max-width: 425px) {
        height: 25rem;
      }

      @media ${device.xs} {
        height: 31rem;
      }

      @media ${device.xxxs} {
        height: 29rem;
      }
    }

    figcaption {
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        @media ${device.sm} {
          line-height: 2.6rem;
        }

        @media ${device.xs} {
          line-height: 2.6rem;
          font-size: 2.3rem;
        }
      }
    }

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

  @media (hover: hover) {
    &:hover {
      box-shadow: -1px 4px 54px 0px rgba(0, 0, 0, 0.2);

      & > img {
        opacity: 1;
        transform: scale(1);
      }

      figcaption {
        height: 10.5rem;

        @media ${device.lg} {
          height: 8.5rem;
        }
      }

      figure {
        &::before {
          opacity: 0.5;
          transform: scale(20);

          @media ${device.sm} {
            transform: scale(20);
          }

          @media (max-width: 600px) {
            transform: scale(40);
          }
        }

        img {
          transform: translateY(5px) scale(1.03);
        }
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
  transition: all 0.3s cubic-bezier(0.465, 0.345, 0.095, 1.55);
`;

export const CaptionVideo = styled.figcaption`
  position: absolute;
  z-index: 15;
  background-color: #ffffff;
  height: 9rem;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2rem;
  transition: all 0.2s ease-out;

  @media ${device.lg} {
    padding: 1.4rem 2rem;
    height: 9rem;
  }

  @media ${device.md} {
    padding: 1.3rem 2rem;
    height: 7rem;
  }

  @media ${device.sm} {
    padding: 1.6rem 2rem;
    height: 9rem;
  }

  p {
    line-height: 2.5rem;

    @media ${device.lg} {
      line-height: 2.3rem;
    }

    @media ${device.md} {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
`;
