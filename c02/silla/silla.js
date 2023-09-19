 // Configurar la escena
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.x = 2;
 camera.position.y = 2;
 scene.add( camera );
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // Crear un cubo
 const geometry = new THREE.BoxGeometry(2, 2, 2);
 const material = new THREE.MeshNormalMaterial(); // Color verde
 const cube = new THREE.Mesh(geometry, material);
 const cube1 = new THREE.Mesh(geometry, material);
 cube1.position.x = -2;
 cube.scale.set(0.05, 0.5, 0.05);
 scene.add(cube,cube1);

 // Posicionar la cámara
 camera.position.z = 5;

 // Configurar el fondo morado
 scene.background = new THREE.Color(0x800080); // Código de color morado


 renderer.render(scene, camera);


 function escala(x, y, z) {
    cube.scale.set(x, y, z);
}
