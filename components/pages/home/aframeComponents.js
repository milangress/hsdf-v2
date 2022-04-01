/* global AFRAME THREE */

AFRAME.registerComponent('modify-materials', {
  init () {
    // Wait for model to load.
    this.el.addEventListener('model-loaded', () => {
      // Grab the mesh / scene.
      const obj = this.el.getObject3D('mesh');
      // Go over the submeshes and modify materials we want.
      obj.traverse(node => {
        // eslint-disable-next-line no-console
        console.log(node.name)
        if (node.name.includes('mesh_0')) {
          // eslint-disable-next-line no-console
          console.log(node.material)
          // node.material.color.set('blue');
          // node.material.metalness.set('1');
          // node.material.emissive.set('1');
        }
      });
    });
  }
});

AFRAME.registerComponent('rotation-reader', {
  init () {
    this.target = null
    this.vector = new THREE.Vector3();
  },
  update () {
    this.target = this.el.sceneEl.querySelector('#logo');
  },
  tick () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    // eslint-disable-next-line no-console
    // console.log(this.target.object3D.rotation);
    // const vector = this.vector

    // `position` is a three.js Vector3.
    // eslint-disable-next-line no-console
    // console.log(this.el.object3D.position);
    // const rotation = this.el.getObject3D('camera').rotation
    const vec3 = new THREE.Vector3()
    // eslint-disable-next-line no-unused-vars
    const position = this.el.getObject3D('camera').getWorldPosition(vec3)
    // eslint-disable-next-line no-console
    // console.log(position)
    // this.target.setAttribute('rotation', {
    //   x: rotation._x * 100,
    //   y: rotation._y * 100,
    //   z: rotation._z
    // });
    // this.target.object3D.rotation.set(
    //   0,
    //   rotation.y,
    //   0
    // );
    // this.vector.subVectors(this.target.object3D.position, position).add(this.target.object3D.position);
    this.target.object3D.lookAt(vec3)

    // this.target.rotation = this.el.getObject3D('camera').rotation

  }
});
