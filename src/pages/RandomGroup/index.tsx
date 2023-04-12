import { useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { splitStringFromText } from "../../helper/text-management";
import { FormInput, Group } from "../../interface/form";
import { randomGroup } from "../../helper/random";

const RandomGroupPage = () => {
   const { register, handleSubmit } = useForm<FormInput>();
   const [randomResult, setRandomResult] = useState<Group>({});
   const handleRandomGroup = (data: FormInput) => {
      const groupList = splitStringFromText(data.group);
      const memberList = splitStringFromText(data.member);
      setRandomResult(randomGroup(memberList, groupList));
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
            <div className="flex flex-wrap">
               {Object.keys(randomResult).map((key) => {
                  return (
                     <div className="border border-red-500 rounded-md w-64" key={key}>
                        <p className="flex">Group: {key}</p>
                        Member:
                        {randomResult[key].map((member) => (
                           <span key={member}>{member} </span>
                        ))}
                     </div>
                  );
               })}
            </div>
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
