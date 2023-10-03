const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Definimos una curva en forma de flor
const petalCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, 2, 0),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(2, 1, 0),
    new THREE.Vector3(0, -1, 0),
]);

const points = petalCurve.getPoints(100);

const material = new THREE.MeshPhongMaterial({
    color:851456,   // Color rosa
    emissive: 7580,
   specular: 0xd110100,  // Especular verde
});

const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 100, 0.1, 20, false);
const tube = new THREE.Mesh(geometry, material);

scene.add(tube);

var hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
hemiLight.position.set(0, 500, 0);
scene.add(hemiLight);


var redLight = new THREE.PointLight(0xff0000, 20, 100);
redLight.position.set(0, 0, 10); // Coloca la luz roja en una posición
scene.add(redLight);


const animate = function () {
    requestAnimationFrame(animate);

    tube.rotation.x += 0.01;
    tube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();