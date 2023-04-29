import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonProps } from "../../interface/button";

type IconProps = {
   name: IconDefinition;
   size: SizeProp;
};

const Icon = ({ name, size, ...rest }: IconProps) => (
   <FontAwesomeIcon icon={name} size={size} {...rest} />
);

export const BaseButton = ({ icon, label, onClick }: ButtonProps) => {
   return (
      <button
         className="flex items-center gap-2 rounded-md border border-chinese-silver px-2 py-1"
         type="button"
         onClick={onClick}
      >
         <Icon name={icon} size="sm" />
         {label}
      </button>
   );
};
