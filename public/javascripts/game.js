function initSky(scene){
  var skyGeo = new THREE.SphereGeometry(100, 25, 25); 
  var skyMaterial = new THREE.MeshLambertMaterial({color: 0xAAAAFF});
  //var skyTexture = THREE.ImageUtils.loadTexture( "/images/sky.jpg" );
  var sky = new THREE.Mesh( skyGeo, skyMaterial );
  sky.material.side = THREE.BackSide;
  scene.add(sky);
}

function initLevel(scene){
  var islandGeo = new THREE.CylinderGeometry(40, 40, 1); 
  var islandMaterial = new THREE.MeshLambertMaterial({color: 0x333333});
  var island = new THREE.Mesh( islandGeo, islandMaterial );
  scene.add(island);
}
