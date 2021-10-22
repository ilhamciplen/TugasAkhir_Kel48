import React, { useContext } from "react";
import { AppsContext } from "./sosial";

export default function Footer(props) {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <hr />
      <div style={{backgroundColor:"#FFFAFA"}}>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        {apps.contact.map((list, key) => {
          return (
            <div>
              <h1 style={{textAlign:"center" }} key={key}>
                <a href={list.url} target="blank">
                  {list.label}
                </a>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
