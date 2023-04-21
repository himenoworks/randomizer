import { Link } from "react-router-dom";

const FooterSection = () => {
   const getCurrentYear = new Date().getFullYear();

   return (
      <div className="h-full flex items-center justify-between text-xs text-white tracking-[2px]">
         <div className="h-full flex items-center">
            <p>© {getCurrentYear} HIMENOWORKS</p>
         </div>
         <div className="h-full flex items-center gap-4">
            <Link
               className="flex items-center gap-1.5"
               to="https://github.com/HIMENOWORKS/randomizer"
               target="_blank"
            >
               <i className="fa-brands fa-github text-base"></i>
               Github
            </Link>
            <div className="flex items-center gap-1.5 text-sm">
               <i className="fa-solid fa-code-branch text-xs"></i>
               v1.0.0
            </div>
         </div>
      </div>
   );
};

export default FooterSection;
