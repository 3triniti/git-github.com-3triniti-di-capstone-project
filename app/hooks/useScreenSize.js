import { useMediaQuery } from "usehooks-ts";

export const useScreenSize = () => {
  const md = useMediaQuery("(min-width: 640px)");
  const lg = useMediaQuery("(min-width: 1024px)");

  if (lg) return "desktop";
  else if (md) return "tablet";
  else return "mobile";
};
