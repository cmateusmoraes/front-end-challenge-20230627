import * as S from "./styles";

import imgLogo from "@/assets/img/leadster-logo.svg";
import imgLeadster from "@/assets/img/leadster.png";
import imgWhatsapp from "@/assets/img/whatsapp.png";
import imgForms from "@/assets/img/formulario.png";
import imgSmileLove from "@/assets/img/in-love-emoji-svgrepo-com.svg";
import imgSmileCrying from "@/assets/img/crying-emoji-svgrepo-com.svg";
import imgSmileConfused from "@/assets/img/confused-emoji-svgrepo-com.svg";

export function Chart() {
  return (
    <S.WrapperChart>
      <S.WrapperBar right="406px" bottom="117px">
        <S.Solution
          src={imgForms}
          alt="Usando Formulários"
          pxToCenter="-10px"
        />
        <S.Bar height="158px">
          <S.NumberLeads>
            <strong>150</strong> Leads
          </S.NumberLeads>
        </S.Bar>
        <S.Smile src={imgSmileCrying} alt="Chorando"></S.Smile>
      </S.WrapperBar>
      <S.WrapperBar right="278px" bottom="117px">
        <S.Solution
          src={imgWhatsapp}
          alt="Usando Whatsapp"
          pxToCenter="-10px"
        />
        <S.Bar height="240px">
          <S.NumberLeads>
            <strong>230</strong> Leads
          </S.NumberLeads>
        </S.Bar>
        <S.Smile src={imgSmileConfused} alt="Confuso"></S.Smile>
      </S.WrapperBar>
      <S.WrapperBar right="149px" bottom="117px">
        <S.Solution
          src={imgLeadster}
          alt="Aumentar minhas conversões com Leadster"
          pxToCenter="-40px"
        />
        <S.Bar height="480px" leadster>
          <S.NumberLeads leadster>
            <strong>450</strong> Leads
          </S.NumberLeads>
        </S.Bar>
        <S.Smile src={imgSmileLove} alt="Amando"></S.Smile>
      </S.WrapperBar>
      <S.Detail src={imgLogo} alt="Leadster" />
      <S.Free>14 dias grátis</S.Free>
      <S.Background />
      <S.Plus />
    </S.WrapperChart>
  );
}
