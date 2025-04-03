import React, { useLayoutEffect, useRef } from 'react';
import p5 from 'p5';

import "./Background.scss";

const Background = () => {
    const containerRef = useRef();

    const Sketch = (p) => {
        let camera;
        let cyan = p.color("#04D9FF");
        let darkBlue = p.color("#14143A");
        let cellSize = 20;

        let rows;
        let cols
        let flying = 0;
        let terrain = [];

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            camera = p.createCamera();
            camera.setPosition(0, 600, 120);
            camera.lookAt(0, 1, 0);
            let aspectRatio = p.windowWidth / p.windowHeight;
            p.perspective(p.PI / 4, aspectRatio, 10, 1600);

            cols = Math.ceil(p.windowWidth / cellSize);
            rows = Math.ceil(p.windowHeight / cellSize);
            for (let x = 0; x < cols; x++) {
                terrain[x] = Array(rows).fill(0);
            }
        };

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            camera.setPosition(0, 600, 120);
            camera.lookAt(0, 1, 0);
            let aspectRatio = p.windowWidth / p.windowHeight;
            p.perspective(p.PI / 4, aspectRatio, 10, 1600);
        }

        p.draw = () => {
            p.background(darkBlue);
            p.translate(-p.windowWidth / 2, 0, 0);

            drawCells();
            drawCircle();
        }

        const drawCells = () => {
            p.push();
            p.stroke(cyan);
            p.fill(darkBlue);
            updateCells();
            for (let y = 0; y < rows - 1; y++) {
                p.beginShape(p.TRIANGLE_STRIP);
                for (let x = 0; x < cols; x++) {
                    p.vertex(x * cellSize, y * cellSize, terrain[x][y]);
                    p.vertex(x * cellSize, (y + 1) * cellSize, terrain[x][y + 1]);
                }
                p.endShape();
            }
            p.pop();
        }

        const updateCells = () => {
            flying -= 0.01;
            let yOffset = flying;
            for (let y = 0; y < rows; y++) {
                let xOffset = 0;
                for (let x = 0; x < cols; x++) {
                    terrain[x][y] = p.map(p.noise(xOffset, yOffset), 0, 1, -20, 20);
                    xOffset += 0.2;
                }
                yOffset += 0.2;
            }
        }

        const drawCircle = () => {
            p.push();
            p.translate(p.windowWidth / 2, 0, 0); // Position the circle in 3D space
            p.rotateY(p.PI / 2);
            p.rotateX(p.PI / 2);
            p.noStroke();
            p.fill(p.color("#ffffff"));
            p.ellipse(-40, 0, 200, 200, 32);
            p.pop();
        }
    }

    useLayoutEffect(() => {
        let s = new p5(Sketch, containerRef.current);
        return () => s.remove();
    }, []);

    return (
        <div className="canvas-container" ref={containerRef} />
    );
};

export default Background;