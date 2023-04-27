import { Link } from "react-router-dom";

const NavbarSection = () => {
   return (
      <nav className="flex h-14 w-full items-center justify-between gap-4 px-10 text-primary">
         <div className="flex items-center">
            <p className="mb-1 text-xl font-medium">Randomizer</p>
         </div>
         <div className="flex items-end gap-6">
            <Link to="/randomizer">Home</Link>
            <Link to="/randomizer/group-generator">Group Generator</Link>
         </div>
      </nav>
   );
};

export default NavbarSection;
