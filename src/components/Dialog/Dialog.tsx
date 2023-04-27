type DialogProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
   return (
      <dialog className="absolute left-0 top-0 h-screen w-screen bg-transparent p-0" open={isOpen}>
         <div className="absolute z-20 flex h-full w-full animate-zoom-in items-center justify-center">
            {children}
         </div>
         <div className="absolute left-0 top-0 z-10 h-screen w-screen animate-fade-in bg-black/20 p-0 backdrop-blur-[2px] backdrop:bg-opacity-50"></div>
      </dialog>
   );
};

export default Dialog;
