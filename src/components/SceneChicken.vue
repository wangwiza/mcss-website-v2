<script setup>
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { ref, onMounted } from 'vue';
import { mode } from '@cloudinary/url-gen/actions/rotate';

onMounted(() => {
    let mixer;

    const clock = new THREE.Clock();
    const container = document.getElementById('container');

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 3, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.enablePan = false
    controls.enableZoom = false

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('/assets/models/chicken.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(0.01, 0.01, 0.01);
        model.rotation.set(0,3,0)
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        
        mixer.clipAction(gltf.animations[1]).play();
        animate();
    }, undefined, function (e) {
        console.error(e);
    });

    window.onresize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);
        controls.update();
        renderer.render(scene, camera);
    }
})
</script>

<template>
    <div id="container"></div>
</template>

<style scoped></style>