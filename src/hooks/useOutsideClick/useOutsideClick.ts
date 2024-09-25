import { useEffect } from "react";

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: Function,
  listenCapturing = true
) {
  useEffect(
    function () {
      function handleClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          event.stopPropagation();
          handler();
        }
      }
      window.addEventListener("click", handleClick, listenCapturing);
      return function () {
        window.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing, ref]
  );
}
