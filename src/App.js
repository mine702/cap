import React from 'react';
import { PerspectiveCamera } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function App() {
    const camera = new PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.5, 1000);
    camera.position.set(10, 10, 10);

    return (
        <Canvas camera={camera} gl={{ alpha: true }} style={{ width: '100vw', height: '100vh' }}>
            <OrbitControls />
            <ambientLight />
            <Model position={[0, 0, 0]} />
        </Canvas>
    );
}
