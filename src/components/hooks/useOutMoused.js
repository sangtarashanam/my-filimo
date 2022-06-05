import { useEffect } from "react";

export function useOutMoused(ref, onClose) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) onClose();
    }

    document.addEventListener("mouseover", handleClickOutside);
    return () => document.removeEventListener("mouseover", handleClickOutside);
  }, [ref, onClose]);
}
