import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { Chip } from "../../interface/chip";

type Props = {
   addChips: (values: Chip[]) => void;
   elementId: string;
   isClear?: boolean;
   placeholder?: string;
};

export const InputChip = ({ addChips, elementId, isClear, placeholder }: Props) => {
   const [chips, setChips] = useState<Chip[]>([]);
   const [inputValue, setInputValue] = useState("");

   const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && inputValue.trim()) {
         const newChip: Chip = { id: Date.now(), label: inputValue.trim() };
         setChips([...chips, newChip]);
         setInputValue("");
         event.preventDefault();
      } else if (event.key === "Backspace" && !inputValue) {
         setChips(chips.slice(0, -1));
      }
   };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
   };

   const handleDeleteChip = (id: number) => {
      const updatedChips = chips.filter((chip) => chip.id !== id);
      setChips(updatedChips);
   };

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
         {chips.map((chip) => (
            <span
               className="flex h-7 w-fit items-center gap-2 rounded-md bg-secondary pl-2 capitalize"
               key={chip.id}
            >
               {chip.label}
               <button className="pr-2" tabIndex={-1} onClick={() => handleDeleteChip(chip.id)}>
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
