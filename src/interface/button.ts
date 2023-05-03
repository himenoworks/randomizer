import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = {
   label: string;
   icon?: IconDefinition;
   isDisabled?: boolean;
   onClick?: () => void;
};
