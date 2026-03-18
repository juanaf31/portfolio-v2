uniform vec3 uColor;

varying float vAlpha;
varying float vRandom;

void main() {
  // Circular particle shape
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;

  float alpha = vAlpha * (1.0 - dist * 2.0);
  gl_FragColor = vec4(uColor, alpha);
}
