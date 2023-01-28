import { Component } from 'solid-js';
import './heders.scss'
import { appWindow } from '@tauri-apps/api/window'

const Headers: Component = () => {
    return (
    <div data-tauri-drag-region class="bar">
        <div class="titlebar-button close" id="titlebar-close" onClick={()=> appWindow.close()}>
            <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
        <div class="titlebar-button change" id="titlebar-maximize" onClick={()=> appWindow.toggleMaximize()}>
            <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
            />
        </div>
        <div class="titlebar-button kill" id="titlebar-minimize" onClick={()=> appWindow.minimize()}>
            <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
            />
        </div>
    </div>
    )
}

export default Headers;