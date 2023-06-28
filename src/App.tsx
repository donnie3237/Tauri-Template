import MainRoute from "./Routes/MainRoute";
import "./global/scss/GlobalStyle.scss";
import { Component } from "solid-js";

const App: Component<{}> = (props) => {
  return <div>
    <MainRoute/>
  </div>;
};

export default App;