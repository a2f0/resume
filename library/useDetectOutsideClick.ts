import React, {useState, useEffect, SetStateAction} from 'react';

export const useDetectOutsideClick = (
  el: React.MutableRefObject<HTMLDivElement | null>,
  initialState: boolean
): [boolean, React.Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target as Node)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
