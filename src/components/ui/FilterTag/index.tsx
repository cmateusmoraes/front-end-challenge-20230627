import { useState } from "react";

import { Text } from "@/components/ui/Text";

import * as S from "@/components/ui/FilterTag/styles";

type FilterTagProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function FilterTag({ label, isActive, onClick }: FilterTagProps) {
  return (
    <S.Filter
      onClick={() => {
        onClick();
      }}
      active={isActive}
    >
      <Text fontSize="xs" fontWeight="500" as="button">
        {label}
      </Text>
    </S.Filter>
  );
}
