import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
   const navigate = useNavigate();

   return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-primary font-Kanit">
         <div className="relative flex flex-col items-center justify-center gap-6 border-4 border-chinese-silver p-8 pt-24 text-center font-extralight uppercase leading-none">
            <p className="absolute bottom-[208px] bg-primary px-4 text-[186px] leading-none">404</p>
            <p className="ml-[6px] text-[34px] tracking-[6px]">Oops! Nothing was found</p>
            <p className="whitespace-pre text-base normal-case">
               {`The page you are looking for might have been removed had its name changed\nor is temporarily unavailable.`}
            </p>
            <button className="font-medium uppercase underline" onClick={() => navigate(-1)}>
               Back
            </button>
         </div>
      </div>
   );
};

export default PageNotFound;
