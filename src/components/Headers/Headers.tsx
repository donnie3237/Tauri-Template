import { Component } from 'solid-js';
import './heders.scss'
import { A } from '@solidjs/router';

const Headers: Component = () => {
    return (
    <div class="header">
        <A href='/' class='a flex home'>HOME</A>
        <A href='/one' class='a flex'>ONE</A>
        <A href='/two' class='a flex'>TWO</A>
    </div>
    )
}

export default Headers;