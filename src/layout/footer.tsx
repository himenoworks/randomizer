import { Link } from "react-router-dom";

const FooterSection = () => {
   const getCurrentYear = new Date().getFullYear();

   return (
      <div className="flex h-full items-center justify-between text-xs tracking-[2px] text-primary">
         <div className="flex h-full items-center">
            <p>© {getCurrentYear} HIMENOWORKS, All Rights Reserved</p>
         </div>
         <div className="flex h-full items-center gap-4">
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
