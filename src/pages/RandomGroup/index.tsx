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
      <div className="w-full h-full flex flex-col gap-4 rounded-2xl text-primary">
         <div className="flex flex-col gap-4">
            <div className="flex justify-between">
               <span className="flex justify-between items-center">
                  <h1 className="text-2xl font-medium">Group Generator</h1>
               </span>
               <span className="flex gap-3">
                  <button
                     className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
                     form="group-form"
                     type="button"
                  >
                     <i className="fa-solid fa-trash-can"></i>
                     Discard
                  </button>
                  <button
                     className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
                     form="group-form"
                     type="submit"
                  >
                     <i className="fa-solid fa-shuffle"></i>
                     Generate
                  </button>
               </span>
            </div>
            <hr className="border-lightgray" />
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
                        <h2 className="flex items-center gap-2 text-xl">
                           <i className="fa-solid fa-user-group"></i>Group
                        </h2>
                        <TextArea prop={{ ...register("group") }} />
                     </div>
                     <div className="h-full flex flex-col gap-2">
                        <h2 className="flex items-center gap-2 text-xl">
                           <i className="fa-solid fa-user"></i>Member
                        </h2>
                        <TextArea prop={{ ...register("member") }} />
                     </div>
                  </form>
               </div>
            </div>
            <div className="w-6/12">
               <div className="h-full flex flex-col gap-2">
                  <h2 className="text-xl">Result</h2>
                  <div className="h-full border border-chinese-silver rounded-md p-6 overflow-y-scroll">
                     <div className="grid grid-cols-2 gap-8">
                        {Object.keys(randomResult).map((groupName, index) => {
                           return (
                              <div className="flex justify-center items-start" key={index}>
                                 <div className="w-full h-48 flex flex-col rounded-2xl p-0.5 text-primary bg-secondary">
                                    <p className="flex items-center gap-2 text-lg font-mediumpy-1 py-1.5 px-3">
                                       <i className="fa-solid fa-user-group"></i>
                                       Group : {groupName}
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
               </div>
            </div>
         </div>
      </div>
   );
};

const TextArea = ({ prop }: { prop: UseFormRegisterReturn }) => {
   return (
      <>
         <textarea
            {...prop}
            className="h-full bg-transparent border-2 border-chinese-silver rounded-md p-3 resize-none"
         ></textarea>
      </>
   );
};

export default RandomGroupPage;
