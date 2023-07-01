"use client";

import { Container } from "@/components/ui/Container";
import { Text } from "../ui/Text";

import * as S from "./styles";

import imgLogo from "@/assets/img/logo-leadster.gif";

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Logo src={imgLogo} loading="lazy" alt="Leadster" />
        <Text fontSize="xxs" textAlign="center">
          Transformando Visitantes em clientes.
        </Text>

        <S.WrapperSiteMap>
          <S.WrapperCol>
            <Text as="h3" fontWeight="600" fontSize="sm">
              Links Principais
            </Text>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Ferramenta</a>
              </li>

              <li>
                <a href="#">Preços</a>
              </li>

              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </S.WrapperCol>

          <S.WrapperCol>
            <Text as="h3" fontWeight="600" fontSize="sm">
              Cases
            </Text>
            <ul>
              <li>
                <a href="#">Geração de Leads B2B</a>
              </li>

              <li>
                <a href="#">Geração de Leads em Software</a>
              </li>

              <li>
                <a href="#">Geração de Leads em Imobiliária</a>
              </li>

              <li>
                <a href="#">Cases de Sucesso</a>
              </li>
            </ul>
          </S.WrapperCol>

          <S.WrapperCol>
            <Text as="h3" fontWeight="600" fontSize="sm">
              Materiais
            </Text>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Parceria com Agências</a>
              </li>

              <li>
                <a href="#">Guia Definitivo de Marketing</a>
              </li>

              <li>
                <a href="#">Materiais Gratuitos</a>
              </li>
            </ul>
          </S.WrapperCol>

          <S.WrapperCol>
            <h3>Siga a Leadster</h3>
            <S.Social>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/cmateusmoraes/"
                >
                  <svg
                    stroke="#848eab"
                    fill="#848eab"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="18px"
                    width="18px"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/leadsterplatform?utm_source=vaga_front&amp;utm_medium=contrata&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Branding_leadster&amp;gad=1&amp;gclid=Cj0KCQjwnf-kBhCnARIsAFlg493VF0H3A_ZU7WDTfLFnvd1cO40Klm_5Pg72gUM4W0YLVZmjxalMjBsaAiFDEALw_wcB?utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Branding_leadster&amp;gad=1&amp;gclid=Cj0KCQjwnf-kBhCnARIsAFlg493VF0H3A_ZU7WDTfLFnvd1cO40Klm_5Pg72gUM4W0YLVZmjxalMjBsaAiFDEALw_wcB?utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Branding_leadster&amp;gad=1&amp;gclid=Cj0KCQjwnf-kBhCnARIsAFlg493VF0H3A_ZU7WDTfLFnvd1cO40Klm_5Pg72gUM4W0YLVZmjxalMjBsaAiFDEALw_wcB?utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Mateus_Moraes_cmateusmoraes@gmail"
                >
                  <svg
                    stroke="#848eab"
                    fill="#848eab"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="18px"
                    width="18px"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/leadster.com.br/?utm_source=vaga_front&amp;utm_medium=contrata&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Branding_leadster&amp;gad=1&amp;gclid=Cj0KCQjwnf-kBhCnARIsAFlg493VF0H3A_ZU7WDTfLFnvd1cO40Klm_5Pg72gUM4W0YLVZmjxalMjBsaAiFDEALw_wcB?utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Branding_leadster&amp;gad=1&amp;gclid=Cj0KCQjwnf-kBhCnARIsAFlg493VF0H3A_ZU7WDTfLFnvd1cO40Klm_5Pg72gUM4W0YLVZmjxalMjBsaAiFDEALw_wcB?utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Branding_leadster&amp;gad=1&amp;gclid=Cj0KCQjwnf-kBhCnARIsAFlg493VF0H3A_ZU7WDTfLFnvd1cO40Klm_5Pg72gUM4W0YLVZmjxalMjBsaAiFDEALw_wcB?utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=bofu_pql_CA_search_branding_leadster&amp;utm_term={leadster}&amp;utm_content=CJ_leadster&amp;utm_source=branding&amp;utm_medium=cpc&amp;utm_campaign=Mateus_Moraes_cmateusmoraes@gmail"
                >
                  <svg
                    stroke="#848eab"
                    fill="#848eab"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="18px"
                    width="18px"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </li>
            </S.Social>

            <Text fontSize="xs">
              <strong>E-mail: </strong>cmateusmoraes@gmail.com
            </Text>

            <Text fontSize="xs">
              <strong>Telefone: </strong>11 93032-2625
            </Text>
          </S.WrapperCol>
        </S.WrapperSiteMap>
        <S.WrapperCopy>
          <Text fontSize="xxs" color="#848eab">
            Copyright © 2015 - 2022 Todos os direitos reservados | Leadster
          </Text>

          <Text fontSize="xxs" color="#848eab">
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso | Privacidade
          </Text>
        </S.WrapperCopy>
      </Container>
    </S.Footer>
  );
}
