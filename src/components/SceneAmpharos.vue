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
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x4beb76);
    scene.background = new THREE.TextureLoader().load("/assets/textures/forest.jpg")
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 300);
    camera.position.set(0, 30, 100);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enablePan = false
    controls.enableZoom = false

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('/assets/models/ampharos.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, -250, 0);
        model.scale.set(2, 2, 2);
        scene.add(model);
        animate();
    }, undefined, function (e) {
        console.error(e);
    });

    window.onresize = function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();    
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
#container {
    width: 100%;
    height: auto;

}
</style>