"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

const fragmentShader = `
precision highp float;

#define filmGrainIntensity 0.12 // Подкорректируй на вкус

uniform float uTime;
uniform vec2 uResolution;
uniform float uSpeed; // Добавляем управление скоростью
uniform float uGrainSize; // Новый uniform для размера шума

#define time uTime

const float arrow_density = 4.5;
const float arrow_length = .45;
const int iterationTime1 = 20;
const int iterationTime2 = 20;
const int vector_field_mode = 0;
const float scale = 6.;
// Уменьшаем оригинальные скорости
const float velocity_x = 0.05; // Было 0.1
const float velocity_y = 0.1;  // Было 0.2
const float mode_2_speed = 1.25; // Было 2.5
const float mode_1_detail = 200.;
const float mode_1_twist = 50.;

float f(in vec2 p) {
    return sin(p.x + sin(p.y + time * velocity_x * uSpeed)) * sin(p.y * p.x * 0.1 + time * velocity_y * uSpeed);
}

struct Field {
    vec2 vel;
    vec2 pos;
};

Field field(in vec2 p, in int mode) {
    Field field;
    if(mode == 0){
        vec2 ep = vec2(0.05, 0.);
        vec2 rz = vec2(0.);
        for(int i = 0; i < iterationTime1; i++) {
            float t0 = f(p);
            float t1 = f(p + ep.xy);
            float t2 = f(p + ep.yx);
            vec2 g = vec2((t1 - t0), (t2 - t0)) / ep.xx;
            vec2 t = vec2(-g.y, g.x);
            p += (mode_1_twist * 0.01) * t + g * (1. / mode_1_detail);
            p.x += sin(time * mode_2_speed * uSpeed / 10.) / 10.;
            p.y += cos(time * mode_2_speed * uSpeed / 10.) / 10.;
            rz = g;
        }
        field.vel = rz;
        return field;
    }

    if(mode == 1){
        vec2 ep = vec2(0.05, 0.);
        vec2 rz = vec2(0.);
        for(int i = 0; i < iterationTime1; i++) {
            float t0 = f(p);
            float t1 = f(p + ep.xy);
            float t2 = f(p + ep.yx);
            vec2 g = vec2((t1 - t0), (t2 - t0)) / ep.xx;
            vec2 t = vec2(-g.y, g.x);
            p += (mode_1_twist * 0.01) * t + g * (1. / mode_1_detail);
            p.x += sin(time * mode_2_speed * uSpeed / 10.) / 10.;
            p.y += cos(time * mode_2_speed * uSpeed / 10.) / 10.;
            rz = g;
        }

        field.vel = rz;
        for(int i = 1; i < iterationTime2; i++) {
            p.x += 0.3 / float(i) * sin(float(i) * 3. * p.y + time * mode_2_speed * uSpeed) + 0.5;
            p.y += 0.3 / float(i) * cos(float(i) * 3. * p.x + time * mode_2_speed * uSpeed) + 0.5;
        }
        field.pos = p;
        return field;
    }

    return field;
}

vec3 applyGradient(float t) {
    // Ваши цвета в формате vec3 (RGB от 0.0 до 1.0)
    vec3 color1 = vec3(35.0/255.0, 27.0/255.0, 43.0/255.0);  // rgba(35, 27, 43, 1)
    vec3 color2 = vec3(102.0/255.0, 0.0/255.0, 255.0/255.0); // rgba(102, 0, 255, 1)
    vec3 color3 = vec3(1.0, 1.0, 1.0);                       // rgba(255, 255, 255, 1)
    vec3 color4 = vec3(90.0/255.0, 0.0/255.0, 255.0/255.0);  // rgba(90, 0, 255, 1)
    vec3 color5 = vec3(1.0, 1.0, 1.0);                       // rgba(255, 255, 255, 1)
    
    // Позиции из вашего градиента (преобразованы в 0..1)
    float pos1 = 0.0;
    float pos2 = 0.305908203125;
    float pos3 = 0.5;
    float pos4 = 0.703857421875;
    float pos5 = 1.0;
    
    // Применяем градиент с учетом позиций
    if (t < pos2) {
        return mix(color1, color2, (t - pos1)/(pos2 - pos1));
    } else if (t < pos3) {
        return mix(color2, color3, (t - pos2)/(pos3 - pos2));
    } else if (t < pos4) {
        return mix(color3, color4, (t - pos3)/(pos4 - pos3));
    } else {
        return mix(color4, color5, (t - pos4)/(pos5 - pos4));
    }
}

// === Шумовые функции ===
mat2 Rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
    return fract(sin(p)*43758.5453);
}

float filmGrainNoise(in vec2 uv) {
    // Масштабируем координаты для управления размером шума
    return length(hash(uv * uGrainSize));
}
// === конец шума ===

vec3 getRGB(in Field fld, in int mode) {
    if(mode == 0){
        vec2 p = fld.vel;
        float intensity = length(p) * 0.5;
        return applyGradient(intensity);
    }

    if(mode == 1){
        vec2 p = fld.pos;
        float gradientValue = sin(p.x + p.y) * 0.5 + 0.5;
        return applyGradient(gradientValue);
    }
    
    return vec3(0.0);
}

void main() {
    vec2 p = gl_FragCoord.xy / uResolution.xy - 0.5;
    p.x *= uResolution.x / uResolution.y;
    p *= scale;

    int vector_mode = 0;
    Field fld = field(p, vector_mode);
    vec3 col = getRGB(fld, vector_mode) * 0.85;

    // Добавляем плёночный шум
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    col -= filmGrainNoise(uv) * filmGrainIntensity;

    gl_FragColor = vec4(col, 1.0);
}
`;

const vertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

export default function ShaderBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2() },
                uSpeed: { value: 0.5 },
                uGrainSize: { value: 2.5 }
            },
            fragmentShader,
            vertexShader,
        });
        scene.add(new THREE.Mesh(geometry, material));

        const resize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";

            renderer.setSize(w, h, false);

            camera.left = -w / h;
            camera.right = w / h;
            camera.updateProjectionMatrix();

            material.uniforms.uResolution.value.set(w * dpr, h * dpr);
        };

        resize();
        window.addEventListener("resize", resize);

        let rafId: number;
        const animate = () => {
            material.uniforms.uTime.value = performance.now() / 1000;
            renderer.render(scene, camera);
            rafId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 invert-100 dark:invert-0">
            <canvas ref={canvasRef} />
        </div>
    );
}