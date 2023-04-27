import { ButtonProps } from "../../interface/button";

export default function BaseButton({ icon, label, disabled = false, onClick }: ButtonProps) {
   return (
      <button
         className="flex items-center gap-2 rounded-md border border-chinese-silver px-2 py-1"
         type="button"
         onClick={onClick}
         disabled={disabled}
      >
         <i className={icon}></i>
         {label}
      </button>
   );
}
