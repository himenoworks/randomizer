import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = {
   icon: IconDefinition;
   label: string;
   onClick?: () => void;
};
