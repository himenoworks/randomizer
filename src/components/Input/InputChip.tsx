import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { ChipProps } from "../../interface/chip";

type Props = {
   addChips: (values: ChipProps[]) => void;
   elementId: string;
   isClear?: boolean;
   placeholder?: string;
   initialChips?: ChipProps[];
};

export const InputChip = ({ addChips, elementId, isClear, placeholder, initialChips }: Props) => {
   const [chips, setChips] = useState<ChipProps[]>(initialChips || []);
   const [inputValue, setInputValue] = useState("");

   const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && inputValue.trim()) {
         const newChip: ChipProps = { id: Date.now(), label: inputValue.trim() };
         setChips([...chips, newChip]);
         setInputValue("");
         event.preventDefault();
      } else if (event.key === "Backspace" && !inputValue) {
         setChips((prevChips) => prevChips.slice(0, -1));
      }
   };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setInputValue(event.target.value);

   const handleDeleteChip = (id: number) =>
      setChips((prevChips) => prevChips.filter((chip) => chip.id !== id));

   useEffect(() => {
      addChips(chips);
   }, [addChips, chips]);

   useEffect(() => {
      if (isClear) {
         setChips([]);
         setInputValue("");
      }
   }, [isClear]);

   return (
      <div className="flex flex-wrap gap-3">
         {chips.map((chip, index) => (
            <span
               className="flex h-7 w-fit cursor-default items-center gap-2 rounded-md bg-secondary pl-2 capitalize"
               key={chip.id}
            >
               {chip.label}
               <button
                  className="pr-2"
                  key={index}
                  tabIndex={-1}
                  onClick={() => handleDeleteChip(chip.id)}
               >
                  <FontAwesomeIcon icon={faXmark} />
               </button>
            </span>
         ))}
         <input
            id={elementId}
            className="h-7 bg-transparent focus:outline-none"
            type="text"
            value={inputValue}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            placeholder={placeholder}
         />
      </div>
   );
};
