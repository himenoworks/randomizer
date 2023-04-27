import { FC } from "react";

import FooterSection from "./footer";
import NavbarSection from "./navbar";

type LayoutProps = {
   children: React.ReactNode;
};

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <header className="absolute top-0 flex w-full select-none bg-primary shadow-[0_0_14px_-2px] shadow-lightgray">
            <NavbarSection />
         </header>
         <main className="h-screen w-screen select-none overflow-y-auto bg-primary pt-14">
            <div className="mx-auto flex h-[calc(100%-80px)] max-w-6xl p-5">{children}</div>
            <footer className="mx-auto mt-4 h-16 max-w-6xl bg-primary px-6 py-4">
               <FooterSection />
            </footer>
         </main>
      </>
   );
};

export default LayoutWrapper;
