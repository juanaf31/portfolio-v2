uniform float uTime;
uniform float uConverge;

attribute vec3 aTarget;
attribute float aRandom;

varying float vAlpha;
varying float vRandom;

void main() {
  vRandom = aRandom;

  // Interpolate between scattered and target positions
  vec3 scattered = position + vec3(
    sin(uTime * 0.3 + aRandom * 6.28) * 3.0,
    cos(uTime * 0.2 + aRandom * 3.14) * 3.0,
    sin(uTime * 0.4 + aRandom * 9.42) * 3.0
  );

  vec3 pos = mix(scattered, aTarget, uConverge);

  // Fade based on convergence
  vAlpha = 0.3 + uConverge * 0.7;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (3.0 + aRandom * 2.0) * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
