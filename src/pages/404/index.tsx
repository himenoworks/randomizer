import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
   const navigate = useNavigate();

   return (
      <div className="font-Kanit w-screen h-screen flex flex-col justify-center items-center gap-5 bg-primary">
         <div className="relative flex flex-col justify-center items-center gap-6 font-extralight text-center leading-none uppercase border-4 border-chinese-silver p-8 pt-24">
            <p className="absolute text-[186px] bg-primary bottom-[208px] px-4 leading-none">404</p>
            <p className="text-[34px] tracking-[6px] ml-[6px]">Oops! Nothing was found</p>
            <p className="text-base normal-case whitespace-pre">
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
