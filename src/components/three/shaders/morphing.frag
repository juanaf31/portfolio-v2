uniform vec3 uColor;
uniform vec3 uGlowColor;
uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vDisplacement;

void main() {
  // Edge glow based on viewing angle (Fresnel effect)
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float fresnel = 1.0 - abs(dot(viewDir, vNormal));
  fresnel = pow(fresnel, 2.0);

  // Pulsing glow
  float pulse = sin(uTime * 0.5) * 0.15 + 0.85;

  // Mix base color with glow
  vec3 color = mix(uColor, uGlowColor, fresnel * pulse);

  // Add displacement-based brightness
  float brightness = 0.6 + vDisplacement * 0.5;
  color *= brightness;

  // Alpha based on fresnel for wireframe-like transparency
  float alpha = 0.3 + fresnel * 0.7;

  gl_FragColor = vec4(color, alpha);
}
