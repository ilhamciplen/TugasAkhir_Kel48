import React, { useState } from "react";
import Content from './Content';
import Footer from './Footer';

export const AppsContext = React.createContext({});
export default function Sosial() {
  const [apps] = useState({
    description: "Sistem Informasi kampus Negeri se Jawa Tengah",
    contact: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/noval.chrstian/",
      },
      {
        label: "Website",
        url: "https://novalchristian.com/"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/novalchristian/"
      },
      {
        label: "Dribble",
        url: "https://dribbble.com/NovalChristian"
      }
    ]
  });

  return (
    <AppsContext.Provider value={{ apps }}>
      <Content title={"SIKANJAT"} />
      <Footer title={"OWNER SOSIAL MEDIA"} />
    </AppsContext.Provider>
  );
}