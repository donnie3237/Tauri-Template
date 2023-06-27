import { Component } from "solid-js";
import './two.scss'
import { useStore } from "../../global/state/zustand";

const Two: Component<{}> = (props) => {
  return <div class="two flex">
    <button class="btn" onClick={() => useStore.setState((prev) => ({ bears: prev.bears + 1 }))}>
        UP VALUE PAGE ONE
    </button>
  </div>;
};

export default Two;