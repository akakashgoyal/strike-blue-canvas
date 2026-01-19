import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | Strike Productions` : "Strike Productions | Premium Film & Video Production";
    document.title = fullTitle;
  }, [title]);
};

export default usePageTitle;
