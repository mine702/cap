import React, { useRef } from 'react';
import { useLoader, useThree, useFrame  } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model(props) {
    const groupRef = useRef();
    const gltf = useLoader(GLTFLoader, "/models/GLTF.gltf");

    // const chair1 = useRef(gltf.nodes.multi_person_3.children.find(child => child.name === "1"));
    // const chair2 = useRef(gltf.nodes.multi_person_3.children.find(child => child.name === "2"));
    // const chair3 = useRef(gltf.nodes.multi_person_3.children.find(child => child.name === "3"));
    console.log("'1' 번의자에서 클릭 이벤트가 발생했습니다 ")

    return (
        <group>
            <primitive object={gltf.scene} position={[-10, 0, 5]} />
        </group>
    );
}

export default Model;
