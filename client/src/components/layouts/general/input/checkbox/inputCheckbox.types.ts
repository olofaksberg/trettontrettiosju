/** @format */

import { ChangeEvent } from "react";

export interface IinputCheckboxProps {
    name: string;
    label: string;
    reference?: (el: HTMLInputElement) => void;
    action: (e: ChangeEvent<HTMLInputElement>) => void;
}
