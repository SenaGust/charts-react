export const tickFormatter = (tick: number | string) => {
  if (typeof tick === "string") return tick;
  else if (tick >= 1000 && tick < 1000000) return tick / 1000 + "k";
  else if (tick >= 1000000) return tick / 1000000 + "m";
  else return tick;
};
