import { useState } from "react";
import Dialog from "../../components/Dialog/Dialog";
import InputChip, { Chip } from "../../components/Input/InputChip";
import { randomGroup } from "../../helper/random";
import BaseButton from "../../components/Button/BaseButton";

export type Group = {
   [key: string]: string[];
};

const RandomGroupPage = () => {
   const [randomResult, setRandomResult] = useState<Group>({});
   const [members, setMembers] = useState<Chip[]>([]);
   const [groups, setGroups] = useState<Chip[]>([]);
   const [open, setOpen] = useState<boolean>(false);

   const handleGenerate = () => {
      const groupNames = groups.map((group) => group.label);
      const memberNames = members.map((member) => member.label);
      setRandomResult(randomGroup(memberNames, groupNames));
      setOpen(true);
   };

   const onClose = () => {
      setOpen(!open);
   };

   const onFocus = (elementId: string) => document.getElementById(elementId)?.focus();

   return (
      <>
         <Dialog isOpen={open} onClose={() => setOpen(!open)}>
            <RandomResult randomResult={randomResult} onClose={onClose} onRandom={handleGenerate} />
         </Dialog>
         <div className="w-full h-full flex flex-col gap-4 rounded-2xl text-primary">
            <div className="flex flex-col gap-4">
               <span className="flex justify-between items-center">
                  <h1 className="text-2xl font-medium">Group Generator</h1>
               </span>
               <hr className="border-lightgray" />
            </div>

            <div className="w-full flex gap-10">
               <div className="w-full h-full flex flex-col gap-2">
                  <h2 className="flex items-center gap-2 text-xl">
                     <i className="fa-solid fa-user-group"></i>Group
                  </h2>
                  <div
                     className="h-[296px] border-2 border-chinese-silver rounded-lg p-3 overflow-y-auto"
                     onClick={() => onFocus("input-group")}
                  >
                     <InputChip elementId="input-group" addChips={setGroups} />
                  </div>
               </div>
               <div className="w-full h-full flex flex-col gap-2">
                  <h2 className="flex items-center gap-2 text-xl">
                     <i className="fa-solid fa-user"></i>Member
                  </h2>
                  <div
                     className="h-[296px] border-2 border-chinese-silver rounded-lg p-3 overflow-y-auto"
                     onClick={() => onFocus("input-member")}
                  >
                     <InputChip elementId="input-member" addChips={setMembers} />
                  </div>
               </div>
            </div>
            <div className="flex justify-center gap-3 mt-7">
               <BaseButton icon="fa-solid fa-shuffle" label="Generate" onClick={handleGenerate} />
               <BaseButton icon="fa-solid fa-eye" label="View Result" />
               <BaseButton icon="fa-solid fa-trash-can" label="Discard" />
            </div>
         </div>
      </>
   );
};

export default RandomGroupPage;

type ResultProps = {
   randomResult: Group;
   onClose: () => void;
   onRandom: () => void;
};

const RandomResult = ({ randomResult, onClose, onRandom }: ResultProps) => {
   return (
      <div className="w-[820px] h-[578px] flex flex-col gap-4 py-6 px-8 rounded-xl bg-white">
         <div className="flex flex-col gap-4">
            <span className="flex justify-between items-center">
               <h1 className="text-xl font-medium">Result</h1>
               <button className="flex justify-center items-center" onClick={onClose}>
                  <i className="fa-solid fa-xmark text-lg"></i>
               </button>
            </span>
            <hr className="border-lightgray" />
         </div>
         <div className="w-full h-full rounded-md overflow-y-scroll">
            <div className="grid grid-cols-3 gap-8">
               {Object.keys(randomResult).map((groupName, index) => {
                  return (
                     <div className="flex justify-center items-start" key={index}>
                        <div className="w-full h-48 flex flex-col rounded-2xl p-0.5 text-primary capitalize bg-secondary">
                           <p className="flex items-center gap-2 text-lg font-semibold py-1.5 px-3">
                              <i className="fa-solid fa-user-group"></i>
                              {groupName}
                           </p>
                           <div className="h-full flex flex-col gap-2 text-base font-medium bg-primary rounded-[14px] rounded-t-none p-2 px-3 overflow-y-scroll">
                              {randomResult[groupName].map((member, index) => (
                                 <p className="flex items-center gap-3" key={index}>
                                    <i className="fa-solid fa-user"></i>
                                    {member}
                                 </p>
                              ))}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="flex items-center justify-center gap-3">
            <button
               className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
               onClick={onRandom}
            >
               <i className="fa-solid fa-rotate-right"></i>
               Generate
            </button>
            <button
               className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
               onClick={onClose}
            >
               <i className="fa-solid fa-pen"></i>
               Edit
            </button>
         </div>
      </div>
   );
};
