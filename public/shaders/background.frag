precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D screen;
uniform float noise;

void main() {
    vec2 uv = vTexCoord;
    uv.y = 1.0 - uv.y;
    
    vec2 offset = vec2(noise * 0.05, 0.0);
    

    uv = clamp(uv, vec2(0.0), vec2(1.0));
    vec2 uvPlusOffset = clamp(uv + offset, vec2(0.0), vec2(1.0));
    vec2 uvMinusOffset = clamp(uv - offset, vec2(0.0), vec2(1.0));

    vec3 col;
    col.r = texture2D(screen, uvPlusOffset).r;
    col.g = texture2D(screen, uv).g;
    col.b = texture2D(screen, uvMinusOffset).b;
    
    gl_FragColor = vec4(col, 1.0);
}