import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home/Home";
import Universitas from "./Component/Universitas/Universitas";
import Daftar from "./Component/Daftar/Daftar";
import Sosial from "./Component/sosial/sosial";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const data = [
  {
    title:"Home",
    to: "/"
  },
  {
    title:"Universitas",
    to: "Universitas"
  },
  {
    title:"Daftar Universitas",
    to: "Daftar_Universitas"
  },
  {
    title:"Hubungi Kami",
    to: "Hubungi_Kami"
  }
]

const Routing = () => {
  return (
    <Router>
      <div>
        <Header data={data}/>
        <Switch>
          <Route
            exact path="/"
            render={(props) => <Home {...props}
              title="SIKANJAT"
              subTitle="Sistem Informasi kampus Negeri se Jawa Tengah"
            />}
          />
          <Route
            path="/Universitas"
            render={(props) => <Universitas {...props}
            title="SIKANJAT"
            subTitle="Sistem Informasi kampus Negeri se Jawa Tengah"
            />}
          />
          <Route path="/Daftar_Universitas" component={Daftar} />
          <Route path="/Hubungi_Kami" component={Sosial} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);