import { Component } from 'solid-js';
import './HomePage.scss'
import Solid_logo from './image/logo.svg'
import Tauri_logo from './image/tauri-1.svg'
import Sora_logo from './image/sora.jfif'
const HomePage: Component = () => {
    return (
        <div class='HomePage flex'>
            <h1>Tauri For desktop App</h1>
            <h2>in sora style</h2>
            <div class="img flex">
                <img src={Solid_logo} alt="SolidJS" />
                <img src={Tauri_logo} alt="Tauri" />
                <img src={Sora_logo} alt="" />
            </div>
            <a href='https://github.com/donnie3237/' target='blank' class='flex'>Explore my GitHub</a>
        </div>
    )
}

export default HomePage;