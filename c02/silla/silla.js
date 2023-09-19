 // Configurar la escena
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.y = 1;
 //camera.position.y = 2;
 scene.add( camera );
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // Crear un cubo
 const geometry = new THREE.BoxGeometry(2, 2, 2);
 const material = new THREE.MeshNormalMaterial(); // Color verde
 const cube = new THREE.Mesh(geometry, material);
 const cube1 = new THREE.Mesh(geometry, material);
 const cube2 = new THREE.Mesh(geometry, material);
 const cube3 = new THREE.Mesh(geometry, material);
 const cube4 = new THREE.Mesh(geometry, material);
 const cube5 = new THREE.Mesh(geometry, material);
 cube.scale.set(0.4, 0.1, 0.4);
 cube1.scale.set(0.05, 0.5, 0.05);
 cube2.scale.set(0.05, 0.5, 0.05);
 cube3.scale.set(0.05, 0.5, 0.05);
 cube4.scale.set(0.05, 0.5, 0.05);
 cube.position.y = 0.1;
 cube1.position.set(-0.4,-0.5,-0.4);
 cube2.position.set(0.4,-0.5,-0.4);
 cube3.position.set(-0.4,-0.5,0.4);
 cube4.position.set(0.4,-0.5,0.4);
 scene.add(cube,cube1,cube2,cube3,cube4);

 // Posicionar la cámara
 camera.position.z = 5;

 // Configurar el fondo morado
 scene.background = new THREE.Color(0x800080); // Código de color morado


 renderer.render(scene, camera);


 function escala(x, y, z) {
    cube.scale.set(x, y, z);
}
