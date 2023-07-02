"use client";

import Image from "next/image";
import * as S from "./styles";
import imgInfo from "@/assets/img/info.png";
import imgBadge from "@/assets/img/selo-RDStation.png";
import imgNoCredit from "@/assets/img/no-credit-card.svg";
import imgRating from "@/assets/img/rating.webp";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button/styles";

export function About() {
  return (
    <S.SectionAbout id="about">
      <S.WrapperAbout bgBlue>
        <S.WrapperGraph>
          <Image src={imgInfo} alt="Info" width={739} />
        </S.WrapperGraph>

        <S.WrapperInfo>
          <Text as="h2" fontSize="4.1rem" fontWeight="500">
            Pronto para triplicar sua
            <br />
            <strong>Geração de Leads?</strong>
          </Text>

          <Text fontSize="2.3rem" margin="1.5rem 0 2.5rem">
            Criação e ativação em <strong>4 minutos.</strong>
          </Text>

          <S.WrapperCta>
            <Button>Ver Demonstração</Button>

            <Image src={imgBadge} alt="Info" loading="lazy" />
          </S.WrapperCta>

          <S.WrapperDetails fontSize="xs" fontWeight="600">
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
