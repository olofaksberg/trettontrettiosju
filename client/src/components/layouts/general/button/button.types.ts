import { CSSProperties } from "react";

export interface IbuttonProps {
    iconClassName: string,
    text: string;
    action: () => void;
    customStyle?: CSSProperties;
};
