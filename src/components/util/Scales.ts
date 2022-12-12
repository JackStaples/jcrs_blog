export const createNormalScale = (
  rMin: number,
  rMax: number,
  targetMin: number,
  targetMax: number
) => {
  return (value: number) => {
    return (
      ((value - rMin) / (rMax - rMin)) * (targetMax - targetMin) + targetMin
    );
  };
};

export const createZeroToOneHundredScale = (rMin: number, rMax: number) => {
  return (value: number) => {
    return ((value - rMin) / (rMax - rMin)) * 100;
  };
};

export const invertScale = (scale: (i: number) => number, max: number) => {
  return (i: number) => {
    return max - scale(i);
  };
};

export const createOffsetScale = (
  scale: (i: number) => number,
  max: number,
  offset: number
) => {
  return (value: number) => {
    return (scale(value) / max) * (max - offset) + offset;
  };
};
