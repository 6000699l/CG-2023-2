      var scene = new THREE.Scene();

      // Configura la cámara
      var camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 25;
      scene.add( camera );

      // Configura el renderizador
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('container').appendChild(renderer.domElement);

      // Crea un cubo
      //var texture = new THREE.TextureLoader().load('textures/flor.jpg');
      
      //var materialCube = new THREE.MeshBasicMaterial({ map: texture });
      
      var geometryCube = new THREE.BoxGeometry();
      var materialCube = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
      var cube = new THREE.Mesh(geometryCube, materialCube);
      scene.add(cube);

      // Crea una esfera
      var geometrySphere = new THREE.SphereGeometry(1,30,30);
      var materialSphere = new THREE.MeshNormalMaterial({ color: 0xff0000 });
      var sphere = new THREE.Mesh(geometrySphere, materialSphere);
      sphere.position.x = -2;
      scene.add(sphere);

      // Renderiza la escena
     // var animate = function () {
       //requestAnimationFrame(animate);

        //cube.rotation.x += 0.01;
       // cube.rotation.y += 0.01;

       // sphere.rotation.x += 0.01;
      //  sphere.rotation.y += 0.01;

        
     // };

     

      //animate();

       // Función para cambiar a cámara ortográfica
       function changeToOrthographic() {
        camera = new THREE.OrthographicCamera(-2,2, 2,-2, 0.0001, 1000);
        camera.position.z =5;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
        
      }

      function changeToPerspective() {
        camera = new THREE.PerspectiveCamera(fovSlider.value, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = fov2Slider.value;
        camera.position.x = fov3Slider.value;
        camera.position.y = fov4Slider.value;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      }

      // Escucha los cambios en el deslizador y actualiza la cámara
      var fovSlider = document.getElementById('fovSlider');
      fovSlider.addEventListener('input', function () {
        changeToPerspective();
      });

      var fov2Slider = document.getElementById('fov2Slider');
      fov2Slider.addEventListener('input', function () {
        changeToPerspective();
      });
      var fov3Slider = document.getElementById('fov3Slider');
      fov3Slider.addEventListener('input', function () {
        changeToPerspective();
      });
      var fov4Slider = document.getElementById('fov4Slider');
      fov4Slider.addEventListener('input', function () {
        changeToPerspective();
      });

