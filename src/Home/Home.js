/* eslint-disable jsx-a11y/no-distracting-elements */
import {  useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
import Student from '../Image/illustration/student.jpg';

// const themes = {
//   light: {
//     background: "#f0e6f7",
//     color: "#2d3436",
//     backgroundSize: "100%",
//   },
//   dark: {
//     background: "#2d3436",
//     color: "#fff",
//     backgroundSize: "100%",
//   },
// };
// const ThemeContext = createContext();

export default function Header(props) {
  // const handleIdPembelian = (event, type) => {
  //   if (type === "name") {
  //     setValueInput((prevState) => {
  //       return { ...prevState, name: event.target.value };
  //     });
  //   }
  // };
  
  useEffect(() => {
    document.title = `Tugas Kelompok 48`;
  });

  return (
    <Router>
      <body>
        <div>
          <div className="Utama">
            <div className="tulisan">
              <h1 className="title">{props.title}</h1>
              <h1 style={{marginTop:"10px"}}>{props.subTitle}</h1>
              <h2 style={{marginTop:"20px", fontWeight:"lighter"}}>Daftarkan diri anda !!!</h2>
            </div>
            
            <center className="ilustrasi">
              <img alt="Ilustrasi Universitas" src={Student} className="image"/>
            </center>
          </div>
        </div>
      </body>
    </Router>
  );
}
