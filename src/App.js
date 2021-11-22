import React from "react";

// Components
import Header from "./components/header";
import { Canvas } from "react-three-fiber";

import {Html} from "drei";

import "./App.scss"

export default function App() {
    return (
    <>
        <Header />
        <Canvas
        colorManagement
        camera={{position:[0,0,120], fov:70}}
        >
            <Html fullscreen>
                <div className="container">
                    <div className="title">Hello</div>
                </div>
            </Html>
        </Canvas>
    </>
    )
}