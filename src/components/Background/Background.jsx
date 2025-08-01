import React, { useLayoutEffect, useRef } from 'react';
import p5 from 'p5';

import "./Background.scss";

const Background = () => {
    const containerRef = useRef();

    const Sketch = (p) => {
        const vanishing = 260;
        const horizon = 360;

        let screen;
        let lineBuffer;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight + 100);
            screen = p.createGraphics(p.width, p.height);

            setupMoon();
            setupGrid();
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            screen = p.createGraphics(p.width, p.height);
            setupMoon();
            setupGrid();
        }

        p.draw = () => {
            updateGrid();

            p.push();
            p.image(screen, 0, 0, p.width, p.height);
            p.pop();

            screen.fill(p.color("#14143A"))
            screen.rect(0, horizon, p.width, p.height - 300);
            screen.stroke(p.color("#04D9FF"));
            for (let y of lineBuffer) {
                screen.line(0, y, p.width, y);
            }
            for (let i = 1; i < 20; i++) {
                let dx = p.pow(i / 32, 1.5) * 10000;
                skewLine(dx);
                skewLine(-dx);
            }
        }

        const setupMoon = () => {
            screen.background(p.color("#14143A"));
            screen.noStroke();
            screen.fill(p.color("#cccccc"));
            screen.drawingContext.shadowBlur = 200;
            for (let i = 40; i <= 80; i += 20) {
                screen.drawingContext.shadowColor = p.color(160, 215, 225, i);
                screen.ellipse(p.width / 2, vanishing, 300, 300);
            }

            screen.drawingContext.shadowBlur = 0;
            screen.ellipse(p.width / 2, vanishing, 240, 240);
        }

        const setupGrid = () => {
            lineBuffer = [];
            for (let i = 0; i < 16; i++) {
                let y = horizon + p.pow(i / 16, 1.5) * 600;
                lineBuffer.push(y);
            }
        }

        const updateGrid = () => {
            lineBuffer = lineBuffer
                .map((y, i) => y + p.pow(i / 16, 1.5) * 0.8)
                .filter((y) => y <= p.height);
            while (lineBuffer.length < 16) {
                lineBuffer.unshift(horizon);
            }
        }

        const skewLine = (offset) => {
            let x0 = p.width / 2;
            let y0 = vanishing;
            let x1 = x0 + offset;
            let y1 = p.height;
            let dx = x0 - x1;
            let dy = y0 - y1;
            let m = dy / dx;
            let c = p.height - m * x1;
            let y2 = horizon
            let x2 = (y2 - c) / m;
            screen.line(x1, y1, x2, y2);
        }
    }

    useLayoutEffect(() => {
        let s = new p5(Sketch, containerRef.current);
        return () => s.remove();
    }, []);

    return (
        <div className="background-container" ref={containerRef} />
    );
};

export default Background;