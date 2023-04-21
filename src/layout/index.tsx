import { FC } from "react";
import FooterSection from "./footer";
import NavbarSection from "./navbar";

type LayoutProps = {
   children: React.ReactNode;
};

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <header className="w-full flex absolute top-0 select-none bg-secondary">
            <NavbarSection />
         </header>
         <main className="w-screen h-screen select-none pt-14 overflow-y-auto bg-primary">
            <div className="max-w-6xl h-[calc(100%-104px)] flex p-5 mx-auto">{children}</div>
            <footer className="max-w-6xl h-16 px-6 py-4 mt-8 mx-auto bg-primary">
               <FooterSection />
            </footer>
         </main>
      </>
   );
};

export default LayoutWrapper;
