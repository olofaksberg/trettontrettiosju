/** @format */

import { If } from "../../../helpers";
import { IimageProps } from "./image.types";

import "./image.style.scss";

export const Image = (props: IimageProps) => {
 const { source } = props;

 return (
  <div className="image-container flex JC-C AI-C">
   <If condition={!!source}>
    <img src={`${source}`} alt="" />
   </If>

   <If condition={!source}>
    <div className="no-img">No pic :(</div>
   </If>
  </div>
 );
};
