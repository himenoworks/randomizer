import React, { useEffect, useState } from "react";

export interface Chip {
   id: number;
   label: string;
}

type ChipsProps = {
   addChips: (values: Chip[]) => void;
};

const InputChip = ({ addChips }: ChipsProps) => {
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

   return (
      <div className="flex flex-wrap gap-3">
         {chips.map((chip) => (
            <span
               className="w-fit h-7 flex items-center gap-2 pl-2 rounded-md bg-secondary capitalize"
               key={chip.id}
            >
               {chip.label}
               <button className="pr-2" onClick={() => handleDeleteChip(chip.id)}>
                  <i className="fa-solid fa-xmark text-sm"></i>
               </button>
            </span>
         ))}
         <input
            className="h-7 bg-transparent focus:outline-none"
            type="text"
            value={inputValue}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            placeholder="Add a Group Name..."
         />
      </div>
   );
};

export default InputChip;
