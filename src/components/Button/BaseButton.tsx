import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonProps } from "../../interface/button";

export const BaseButton = ({ icon, label, onClick, isDisabled }: ButtonProps) => {
   return (
      <button
         className={`flex items-center gap-2 rounded-md border border-chinese-silver px-2 py-1 ${
            isDisabled ? "disabled: cursor-not-allowed" : ""
         }`}
         type="button"
         onClick={onClick}
         disabled={isDisabled}
      >
         {icon && <FontAwesomeIcon icon={icon} className="text-sm" />}
         {label}
      </button>
   );
};
