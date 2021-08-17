let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

let renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x8ef0da, 1);
renderer.setSize(1920, 900);
renderer.domElement.setAttribute("id","Model");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(aLight);
const pLight = new THREE.PointLight(0xffffff, 3);
pLight.position.set(10, 0, 70);
scene.add(pLight)

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('human/4a63a7d2-37a1-41e1-85d4-61012193bf6d.glb', function(gltf) {
    obj = gltf;
    obj.scene.scale.set(1, 1, 1, 1);
    scene.add(obj.scene);

});

function animate(e) {
    requestAnimationFrame(animate);
    if(obj) {
        $(window).mousemove(function(e) {
            obj.scene.rotation.y = -e.clientX / 500;
        })

        if(window.scrollY > 1) {

            if(window.scrollY >= 150) {

                $("#Model").css({position: 'fixed', top: 300 + 'px'});
            } else {
                $("#Model").css({position: 'absolute', top: 50 + "%"});
            }




            $(window).scroll(function() {
                obj.scene.rotation.x = -window.scrollY / 800 - 100;
            })
        } else {
            $(document).ready(function() {
                obj.scene.rotation.x =- 100;  
            })

        }


       

        renderer.render(scene,camera);
    }
}

animate();