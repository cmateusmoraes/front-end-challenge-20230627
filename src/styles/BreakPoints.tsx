const size = {
  xxxs: "320px", // for small screen mobile 3
  xxs: "360px", // for small screen mobile 2
  xs: "375px", // for small screen mobile
  sm: "768px", // for mobile screen
  md: "990px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xxxs: `(max-width: ${size.xxxs})`,
  xxs: `(max-width: ${size.xxs})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
