import { Link } from "react-router-dom";

const NavbarSection = () => {
   return (
      <nav className="w-full h-14 flex items-center justify-between gap-4 px-10 bg-primary shadow-md shadow-[#03060B] text-primary">
         <div className="flex items-center">
            <p className="text-xl font-medium mb-1">Randomizer</p>
         </div>
         <div className="flex items-end gap-6">
            <Link to="/randomizer">Home</Link>
            <Link to="/randomizer/group-generator">Group Generator</Link>
         </div>
      </nav>
   );
};

export default NavbarSection;
