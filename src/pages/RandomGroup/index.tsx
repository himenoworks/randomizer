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
      <div className="w-[1024px] h-[550px] flex flex-col gap-4 rounded-2xl p-8 bg-white shadow-[0_0_45px_0_rgba(0,0,0,0.1)]">
         <div className="flex flex-col gap-4">
            <div className="flex justify-between">
               <span className="flex justify-between">
                  <h1 className="text-2xl font-medium">Team Generator</h1>
               </span>
               <button className="border px-2 rounded-md" form="group-form" type="submit">
                  Generate
               </button>
            </div>
            <hr />
         </div>
         <div className="w-full h-[calc(100%-65px)] flex gap-14">
            <div className="w-6/12 flex flex-col gap-8">
               <div className="w-full h-full flex gap-14">
                  <form
                     id="group-form"
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
                                 <div className="w-full h-44 flex flex-col rounded-2xl p-0.5 bg-gray-200">
                                    <p className="text-lg font-medium text-black py-1 px-3">
                                       Group : {groupName}
                                    </p>
                                    <div className="h-full flex flex-col gap-2 text-base font-medium bg-white rounded-[14px] rounded-t-none p-2 px-3 overflow-y-scroll">
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
