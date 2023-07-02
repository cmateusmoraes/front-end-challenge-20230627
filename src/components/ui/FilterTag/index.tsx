import { useState } from "react";

import { Text } from "@/components/UI/Text";

import * as S from "@/components/UI/FilterTag/styles";

type FilterTagProps = {
  label: string;
  onClick: () => void;
};

export function FilterTag({ label, onClick }: FilterTagProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Filter
      onClick={() => {
        setIsActive(!isActive);
        onClick;
      }}
      active={isActive}
    >
      <Text fontSize="xs" fontWeight="500" as="button">
        {label}
      </Text>
    </S.Filter>
  );
}
