import { Component, createSignal } from "solid-js";
import './One.scss'
import { useStore } from "../../global/state/zustand";

const One: Component<{}> = (props) => {
  const [count , setCount] = createSignal<number>(0)
  const state = useStore();
  return <div class="one flex">
    <h1>value is : {count()}</h1>
    <div class="btn">
        <button onClick={()=>setCount((prev)=> prev -1 )}>-</button>
        <button onClick={()=>setCount((prev)=> prev +1)}>+</button>
    </div>
    <h1>Global state is : {state.bears}</h1>
  </div>;
};

export default One;