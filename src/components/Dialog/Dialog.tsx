import { useCallback, useEffect } from "react";

type DialogProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

export const Dialog = ({ isOpen, children, onClose }: DialogProps) => {
   const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
         if (event.key === "Escape") {
            onClose();
         }
      },
      [onClose]
   );

   const handleClickOutside = useCallback(
      (event: MouseEvent) => {
         if ((event.target as Node) === document.getElementById("outer-dialog")) {
            onClose();
         }
      },
      [onClose]
   );

   useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   }, [handleKeyDown]);

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [handleClickOutside]);

   return (
      <dialog className="absolute left-0 top-0 h-screen w-screen bg-transparent p-0" open={isOpen}>
         <div
            className="absolute z-20 flex h-full w-full animate-zoom-in items-center justify-center"
            id="outer-dialog"
         >
            {children}
         </div>
         <div className="absolute left-0 top-0 z-10 h-screen w-screen animate-fade-in bg-black/20 p-0 backdrop-blur-[2px] backdrop:bg-opacity-50"></div>
      </dialog>
   );
};
