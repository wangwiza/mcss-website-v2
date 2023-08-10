<script setup>
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { ref, onMounted } from 'vue';

onMounted(() => {
    const container = document.getElementById('container');

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(600, 600);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, 1, 1, 100);
    camera.position.set(5, 1, 1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, -1);
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enablePan = false
    controls.enableZoom = false

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('/assets/models/glasses.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(0.3, 0.3, 0.3);
        scene.add(model);
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
        controls.update();
        renderer.render(scene, camera);
    }
})
</script>

<template>
    <div id="container"></div>
</template>

<style scoped>
</style>