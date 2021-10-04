import { useLayoutEffect } from "react";

const useDocumentTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Todo App | React Redux Sage App";
    }
  }, [title]);
};

export default useDocumentTitle;
