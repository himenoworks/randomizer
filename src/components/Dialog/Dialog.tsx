type DialogProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
   return (
      <dialog
         open={isOpen}
         className={`absolute z-50 top-0 left-0 w-screen h-screen p-0 backdrop:bg-opacity-50 open:animate-fade-in backdrop-blur-sm bg-black/30`}
      >
         <div className="flex items-center justify-center h-full">{children}</div>
      </dialog>
   );
};

export default Dialog;
