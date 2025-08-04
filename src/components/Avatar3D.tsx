import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import '../styles/Avatar3D.css';

const BASE_URL = import.meta.env.BASE_URL;

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

interface AvatarModelProps {
    canvasRef: React.RefObject<HTMLDivElement | null>;
}

function AvatarModel({ canvasRef }: AvatarModelProps) {
    const gltf = useGLTF(`${BASE_URL}assets/images/avatar.glb`);
    const { actions } = useAnimations(gltf.animations, gltf.scene);
    const modelRef = useRef<any>(null);

    const mouse = useRef({ x: 0, y: 0 });

    React.useEffect(() => {
        if (actions && actions['Idle']) {
            actions['Idle'].play();
        }
        const handleMouseMove = (e: MouseEvent) => {
            if (!canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const radius = 250; // radio máximo en px

            // Limita el movimiento dentro del radio
            const limitedDx = clamp(dx, -radius, radius);
            const limitedDy = clamp(dy, -radius, radius);

            // Normaliza para obtener valores entre -1 y 1
            mouse.current.x = limitedDx / radius;
            mouse.current.y = limitedDy / radius;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [actions, canvasRef]);

    useFrame(() => {
    if (modelRef.current) {
        const maxY = 0.6; // más pronunciado horizontal
        const maxX = 0.35; // más pronunciado vertical
        const rotY = clamp(mouse.current.x * maxY, -maxY, maxY);
        const rotX = clamp(mouse.current.y * maxX, -maxX, maxX); // signo positivo para movimiento natural
        modelRef.current.rotation.y = rotY;
        modelRef.current.rotation.x = rotX;
    }
});

    return (
        <group ref={modelRef}>
            <primitive object={gltf.scene} scale={5} position={[0, -3, 0]} />
        </group>
    );
}

export default function Avatar3D() {
    const canvasRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 700);
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <div style={{ position: 'relative', width: 140, height: 140 }}>
            <div className={`avatar-box-bg${animate ? ' animate' : ''}`} />
            <div ref={canvasRef} style={{ width: '100%', height: '100%' }}>
                <Canvas camera={{ position: [0, 0, 3], fov: 35 }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} />
                    <AvatarModel canvasRef={canvasRef} />
                </Canvas>
            </div>
        </div>
    );
}