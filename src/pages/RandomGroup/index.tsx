import { useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";

type FormInput = {
   member: string;
   group: string;
};

type Group = {
   [key: string]: string[];
};

const RandomGroupPage = () => {
   const { register, handleSubmit } = useForm<FormInput>();
   const handleRandomGroup = (data: FormInput) => {
      const groupList = data.group.split("\n");
      const memberList = data.member.split("\n");
      setRandomResult(randomGroup(memberList, groupList));
      console.log(randomResult);
   };
   const [randomResult, setRandomResult] = useState<Group>({ "": [""] });

   const shuffleArray = (array: string[]): string[] => {
      return array.sort(() => Math.random() - 0.5);
   };

   const mapNameGroup = (groupNames: string[]): Group => {
      const nameRecords: Group = {};
      groupNames.forEach((nameOfGroup) => (nameRecords[nameOfGroup] = []));
      return nameRecords;
   };

   const randomGroup = (members: string[], groupNames: string[]): Group => {
      const oldSortedGroups = mapNameGroup(groupNames);
      const shuffledMembers = shuffleArray(members);
      const shuffledGroups = shuffleArray(groupNames);
      const newSortedGroups = mapNameGroup(shuffledGroups);
      const membersPerGroups = Math.ceil(members.length / groupNames.length);
      for (let i = 0; i < membersPerGroups; i++) {
         shuffledGroups.forEach((nameOfGroup) => {
            shuffledMembers.length !== 0 &&
               newSortedGroups[nameOfGroup].push(shuffledMembers.shift()!);
         });
      }
      groupNames.forEach((m) => oldSortedGroups[m].push(...newSortedGroups[m]));
      return oldSortedGroups;
   };
   return (
      <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
         <div className="flex flex-col">
            <div className="bg-white p-4 w-64">
               <span>Group Random</span>
               <form onSubmit={handleSubmit(handleRandomGroup)}>
                  <TextArea prop={{ ...register("member"), title: "Member" }} />
                  <TextArea prop={{ ...register("group"), title: "Group" }} />
                  <button type="submit">Random</button>
               </form>
            </div>
            {
               <div className="flex flex-wrap">
                  {Object.keys(randomResult).map((key) => {
                     return (
                        <div className="border border-red-500 rounded-md w-64" key={key}>
                           <p className="flex">Group: {key}</p>
                           Member:
                           {randomResult[key].map((member) => (
                              <>{member} </>
                           ))}
                        </div>
                     );
                  })}
               </div>
            }
         </div>
      </div>
   );
};

const TextArea = ({ prop }: { prop: UseFormRegisterReturn & { title: string } }) => {
   return (
      <>
         <h1>{prop.title}</h1>
         <textarea {...prop} className="border"></textarea>
      </>
   );
};

export default RandomGroupPage;
