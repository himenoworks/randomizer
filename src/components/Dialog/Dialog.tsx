type DialogProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
   return (
      <dialog
         open={isOpen}
         className="absolute z-50 top-0 left-0 w-screen h-screen p-0 backdrop:bg-opacity-50 backdrop-blur-[2px] bg-black/20"
      >
         <div className="w-full h-full flex items-center justify-center">{children}</div>
      </dialog>
   );
};

export default Dialog;
