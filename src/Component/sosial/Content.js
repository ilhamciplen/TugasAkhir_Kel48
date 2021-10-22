import React, { useContext } from "react";
import { AppsContext } from "./sosial";

export default function Content(props) {
  const { apps } = useContext(AppsContext);

  return (
    <div style={{paddingTop:"10vh"}}>
      <h1 style={{textAlign:"center"}}>{props.title}</h1>
      <p style={{textAlign:"center"}}>{apps.description}</p>
    </div>
  );
}