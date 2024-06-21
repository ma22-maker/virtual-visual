import React, { useRef, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const vertex = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
void main() {
  vUv = uv;
  vec3 newPosition = position;

  float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
  newPosition.z = position.z + wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const fragment = `
uniform sampler2D uTexture;
uniform vec2 vUvScale;
varying vec2 vUv;
void main() {
  vec2 uv = (vUv - 0.5) * vUvScale + 0.5;
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`;

function WavyImage({ imageSrc}) {
    console.log(imageSrc)
  const image = useRef();
  const texture = useTexture(imageSrc.src);
  const { viewport } = useThree();
  const scale = useAspect(texture.image.width, texture.image.height, 0.3);

  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
    uWaveLength: { value: 5 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(0, 0) },
  });

  useFrame(() => {
    image.current.material.uniforms.uTime.value += 0.04;
    image.current.material.uniforms.uAmplitude.value = 0.12;
    image.current.material.uniforms.uWaveLength.value = 5;
    image.current.scale.x = 8;
    image.current.scale.y = 5;
    image.current.material.uniforms.vUvScale.value.set(1, 1);
  });

  return (
    <mesh ref={image} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}

const Scene = ({ imageSource }) => { 
  return (
    <Canvas className="fixed">
      <Suspense fallback={null}>
        <WavyImage imageSrc={imageSource} /> 
      </Suspense>
    </Canvas>
  );
};

export default Scene;
