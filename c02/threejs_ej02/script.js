      var scene = new THREE.Scene();

      // Configura la cámara
      //var camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
      //camera.position.z = 15;

      var camera = new THREE.OrthographicCamera();
      scene.add( camera );

      // Configura el renderizador
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('container').appendChild(renderer.domElement);

      // Crea un cubo
      //var texture = new THREE.TextureLoader().load('textures/flor.jpg');
      
      //var materialCube = new THREE.MeshBasicMaterial({ map: texture });
      
      var geometryCube = new THREE.BoxGeometry();
      var materialCube = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new THREE.Mesh(geometryCube, materialCube);
      scene.add(cube);

      // Crea una esfera
      var geometrySphere = new THREE.SphereGeometry(1,30,30);
      var materialSphere = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      var sphere = new THREE.Mesh(geometrySphere, materialSphere);
      sphere.position.x = -2;
      scene.add(sphere);

      // Renderiza la escena
      var animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

     

      animate();