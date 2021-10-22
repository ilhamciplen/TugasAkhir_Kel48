import {  createContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import "./Header.css";


const themes = {
  light: {
    backgroundColor: "white",
    color: "#222222",
  },
  dark: {
    backgroundColor: "#222222",
    color: "white",
  },
};

const ThemeContext = createContext();


export default function Header(props) {
  const [valueTheme, setValueTheme] = useState(themes.light);
  const [darkMode, setDarkMode] = useState("Dark Mode")

  const ButtonClick = () => {
    setValueTheme(valueTheme === themes.light ? themes.dark : themes.light );
    setDarkMode(darkMode === "Dark Mode" ? "Light Mode" : "Dark Mode");
  }

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div  className="header" style={{backgroundColor: valueTheme.backgroundColor}}>
        <Toolbar>
          <div >
              {props.data.map((data) => (
                <Button>
                  <Link to={data.to} className="NavButton" style={{color:valueTheme.color}}>
                    {data.title}
                  </Link>
              </Button>
              ))}
            
            <Button
              style={{
                color: valueTheme.color,
                textTransform:"none",
                fontSize:"20px",
                padding: "8px 15px 8px 15px"}}
              onClick={ButtonClick}>
              {darkMode}
            </Button>
          </div>
        </Toolbar>
      </div>
    </ThemeContext.Provider>
  );
}