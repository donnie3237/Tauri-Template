import { createSignal , createEffect} from "solid-js";
import "./App.css";
import Headers from "./components/Headers/Headers";

function App() {
  const [net,setNet]= createSignal<boolean>(false)
  const [Loading ,setLoading] = createSignal<boolean>(true)
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
      <Headers />
      {net()? <div>{Loading()? <div class="connect"><h1>Loading.......</h1></div>:<iframe src="https://dose-products.netlify.app/"></iframe>}</div>
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