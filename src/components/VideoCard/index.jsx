import * as S from "./styles";
import { Text } from "@/components/ui/Text";
import imgVideo from "@/assets/img/video4.jpg";
import icoPlay from "@/assets/img/play.svg";

export default function VideoCard() {
  return (
    <S.VideoCard>
      <S.IcoPlay src={icoPlay} alt="Ver vídeo" loading="lazy" />
      <figure>
        <S.ImageVideo
          src={imgVideo}
          alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          loading="lazy"
        />
        <S.CaptionVideo>
          <Text fontSize="xs" fontWeight="800" lineHeight="2.5rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </S.CaptionVideo>
      </figure>
    </S.VideoCard>
  );
}
