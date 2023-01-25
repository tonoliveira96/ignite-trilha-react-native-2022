import { Circle } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

type CicleStatusType = {
  dietStatus: boolean;
};

export function CircleStatus({ dietStatus }: CicleStatusType) {
  const { COLORS } = useTheme();
  return (
    <Circle size={8} weight="fill" color={dietStatus ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
  );
}