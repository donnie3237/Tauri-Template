import { createSignal , createEffect} from "solid-js";
import "./App.css";
import Headers from "./components/Headers/Headers"; //import header
import HomePage from "./components/HomePage/HomePage";

function App() {
  //check internet connction state
  const [net,setNet]= createSignal<boolean>(false)

  //loading before start
  const [Loading ,setLoading] = createSignal<boolean>(true)

  //out of loading
  createEffect(()=>{
   console.log("netna is : "+ netna)
   setTimeout(() => {
    setLoading(false)
   }, 2000);}
  )
  function Reload(){
    if(net()=== true){
      window.location.reload();
    }else{
      const status = document.getElementById('statuS') as HTMLElement;
      status.innerHTML = 'connection is Faild!!'
      setTimeout(() => {
        status.innerHTML = ''
      }, 2000);
    }
  }
  const netna = window.navigator.onLine
  setNet(netna)
  window.addEventListener('online',()=> setNet(true))
  console.log(net())
  return (
    <div class="container">
      {/* //Header is Tab to run close resize minsize button  */}
      <Headers />
      {net()? 
        <div>{Loading()? <div class="connect"><h1>Loading.......</h1></div>
          :
        // you can change this in home page 
        <HomePage/>}</div>
        :
        <div class="connect">
        <h1>please Connect internet</h1>
        <button onClick={Reload}>Try again</button>
        <p id="statuS"></p>
      </div>}
    </div>
    
  );
}

export default App;
