import { FC } from "react";
import FooterSection from "./footer";
import NavbarSection from "./navbar";

type LayoutProps = {
   children: React.ReactNode;
};

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <header className="w-full flex absolute top-0 select-none">
            <NavbarSection />
         </header>
         <main className="w-screen h-screen bg-primary select-none pt-14 overflow-y-auto">
            <div className="w-full h-full flex justify-center items-center">{children}</div>
            <footer className="w-full h-16 px-10 py-4 bg-secondary">
               <FooterSection />
            </footer>
         </main>
      </>
   );
};

export default LayoutWrapper;
