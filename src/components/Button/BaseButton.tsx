import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonProps } from "../../interface/button";

export const BaseButton = ({ icon, label, onClick }: ButtonProps) => {
   return (
      <button
         className="flex items-center gap-2 rounded-md border border-chinese-silver px-2 py-1"
         type="button"
         onClick={onClick}
      >
         {icon && <FontAwesomeIcon icon={icon} className="text-sm" />}
         {label}
      </button>
   );
};
