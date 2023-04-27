type DialogProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
   return (
      <dialog className="absolute top-0 left-0 w-screen h-screen p-0 bg-transparent" open={isOpen}>
         <div className="absolute z-20 w-full h-full flex items-center justify-center animate-zoom-in">
            {children}
         </div>
         <div className="absolute z-10 top-0 left-0 w-screen h-screen p-0 backdrop:bg-opacity-50 backdrop-blur-[2px] bg-black/20 animate-fade-in"></div>
      </dialog>
   );
};

export default Dialog;
