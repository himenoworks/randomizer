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
      <div className="w-screen h-screen flex justify-center items-center bg-slate-300 select-none">
         <div className="w-[1024px] h-[650px] flex flex-col gap-4 rounded-lg p-8 bg-white">
            <div className="flex flex-col gap-4">
               <span className="flex justify-between">
                  <h1 className="text-2xl font-medium">Team Generator</h1>
               </span>
               <hr />
            </div>
            <div className="w-full h-full flex gap-14">
               <div className="w-6/12 flex flex-col gap-8">
                  <div className="w-full h-full flex gap-14">
                     <form
                        className="h-full flex flex-col gap-8"
                        onSubmit={handleSubmit(handleRandomGroup)}
                     >
                        <div className="h-full flex flex-col gap-2">
                           <h2 className="text-xl">Group Lists</h2>
                           <TextArea prop={{ ...register("group") }} />
                        </div>
                        <div className="h-full flex flex-col gap-2">
                           <h2 className="text-xl">Member</h2>
                           <TextArea prop={{ ...register("member") }} />
                        </div>
                        <button className="border px-2 rounded-md" type="submit">
                           Generate
                        </button>
                     </form>
                  </div>
               </div>
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

const TextArea = ({ prop }: { prop: UseFormRegisterReturn }) => {
   return (
      <>
         <textarea {...prop} className="h-full border rounded-md p-3 resize-none"></textarea>
      </>
   );
};

export default RandomGroupPage;
