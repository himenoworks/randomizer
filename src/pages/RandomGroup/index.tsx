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
            <div className="w-full h-[calc(100%-65px)] flex gap-14">
               <div className="w-6/12 flex flex-col gap-8">
                  <div className="w-full h-full flex gap-14">
                     <form
                        className="w-full h-full flex flex-col gap-8"
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
               <div className="w-6/12">
                  <div className="h-full flex flex-col gap-2">
                     <h2 className="text-xl">Result</h2>
                     <div className="h-full border rounded-md p-6 overflow-y-scroll">
                        <div className="grid grid-cols-2 gap-8">
                           {Object.keys(randomResult).map((groupName, index) => {
                              return (
                                 <div className="flex justify-center items-start" key={index}>
                                    <div className="w-full h-44 flex flex-col rounded-lg p-0.5 bg-orange-400">
                                       <p className="text-lg font-medium text-white py-1 px-2">
                                          Group : {groupName}
                                       </p>
                                       <div className="h-full flex flex-col gap-2 text-base font-medium bg-white rounded-md rounded-t-none p-2 overflow-y-scroll">
                                          {randomResult[groupName].map((member, index) => (
                                             <p key={index}>{member}</p>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>
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
