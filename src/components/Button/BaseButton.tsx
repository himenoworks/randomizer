import { ButtonProps } from "../../interface/button";

export default function BaseButton({ icon, label, disabled = false, onClick }: ButtonProps) {
   return (
      <button
         className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
         type="button"
         onClick={onClick}
         disabled={disabled}
      >
         <i className={icon}></i>
         {label}
      </button>
   );
}
