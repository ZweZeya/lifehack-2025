import React, { useLayoutEffect, useRef } from 'react';
import p5 from 'p5';

import "./Hero.scss";

const Hero = () => {
    const containerRef = useRef();

    // Inspired by Roni Kaufman's sketch
    // https://editor.p5js.org/ronikaufman/sketches/IxzXjdCmb
    const Sketch = (p) => {
        const w = 320;
        const h = 240;
        
        const logoSize = 220;
        const frameWidth = 60;
        const standTopWidth = 120;
        const standBaseWidth = 150
        const standHeight = 20;

        let backgroundColor = p.color("#080808");

        let logo;
        let computerScreen;
        let computerFrame;
        let computerStand;
        let glow;

        let barY1;
        let barY2;
        let ppx;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight * 0.8);
            
            setupComputerScreen();
            setupComputerFrame();
            setupComputerStand();
            setupGlow();
            
            p.frameRate(12);
            p.noSmooth();
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            setupComputerFrame();
            setupComputerStand();
            setupGlow();
        }

        p.draw = () => {
            p.background(backgroundColor);
            updateBar();
            updateScreen();

            p.push();
            p.translate((p.width - w) / 2, (p.height - h) / 2);
            p.scale(1, 1.01);
            p.image(computerScreen, 0, 0);
            p.pop();

            p.image(computerFrame, 0, 0);
            p.image(computerStand, 0, 0);
            p.image(glow, 0, 0);

            p.loadImage("/logo_circle.png", (image) => {
                image.resize(logoSize, logoSize);
                logo.copy(image, 0, 0, logoSize, logoSize, (w - logoSize) / 2, (h - logoSize) / 2, logoSize, logoSize);
                logo.loadPixels();
            });
        }

        const setupComputerScreen = () => {
            computerScreen = p.createImage(w, h);
            computerScreen.loadPixels();

            logo = p.createImage(w, h);
            logo.loadPixels();

            ppx = [];
            for (let y = 0; y < computerScreen.pixels.length; y++) {
                ppx.push(p.floor(p.random(-64, 64)));
            }

            barY1 = p.random(h);
            barY2 = barY1 + p.random(30, 40);
        }

        const setupComputerFrame = () => {
            computerFrame = p.createGraphics(p.width, p.height);
            computerFrame.noStroke();
            computerFrame.fill(24);
            computerFrame.rect(
                (p.width - w - frameWidth) / 2,
                (p.height - h - frameWidth) / 2,
                w + frameWidth,
                h + frameWidth
            );

            computerFrame.erase();
            computerFrame.rect((p.width - w) / 2, (p.height - h) / 2, w, h);
            computerFrame.noErase();
        }

        const setupComputerStand = () => {
            computerStand = p.createGraphics(p.width, p.height);
            computerStand.noStroke();
            computerStand.fill(12);
            computerStand.quad(
                (p.width - standTopWidth) / 2, (p.height + h + frameWidth) / 2,
                (p.width + standTopWidth) / 2, (p.height + h + frameWidth) / 2,
                (p.width + standBaseWidth) / 2, (p.height + h + frameWidth) / 2 + standHeight,
                (p.width - standBaseWidth) / 2, (p.height + h + frameWidth) / 2 + standHeight
            );
            computerStand.ellipse(p.width / 2, (p.height + h + frameWidth) / 2 + standHeight + 15, 240, 50);
        }

        const setupGlow = () => {
            glow = p.createGraphics(p.width, p.height);
            glow.drawingContext.shadowBlur = 320;
            glow.drawingContext.shadowColor = p.color(140, 205, 207);
            glow.rect((p.width - w) / 2, (p.height - h) / 2, w, h);

            glow.drawingContext.shadowBlur = 0;
            glow.erase();
            glow.rect((p.width - w) / 2, (p.height - h) / 2, w, h);
            glow.noErase();
        }

        const updateBar = () => {
            if (barY1 > h) {
                barY1 = 10 - 50;
                barY2 = p.random(-10, 0);
            }
            barY1 += 2;
            barY2 += 2;
        }

        const updateScreen = () => {
            let offRed = p.floor(p.random(2)) * 4;
            let offGreen = p.floor(p.random(2)) * 4;
            let offBlue = p.floor(p.random(2)) * 4;
            let flicker = p.random(2);
            let blank = p.frameCount < 12 || p.frameCount == 14;

            let i = 0;
            for (let y = 1; y < h; y++) {
                let colDiv = (y < barY2 && y > barY1) ? 20 + flicker : flicker;
                let strips = (y & 1) * 64 + colDiv;
                let noiseLine = p.floor(p.random(0, h)) * w;
                for (let x = 0; x < w; x++) {
                    let imagePixelR = 0;
                    let imagePixelG = 0;
                    let imagePixelB = 0;
                    if (!blank) {
                        imagePixelR = logo.pixels[i + offRed];
                        imagePixelG = logo.pixels[i + 1 + offGreen];
                        imagePixelB = logo.pixels[i + 2 + offBlue];
                    }

                    let processEffect = -strips - ppx[noiseLine + x];
                    computerScreen.pixels[i] = imagePixelR + processEffect;
                    computerScreen.pixels[i + 1] = imagePixelG + processEffect;
                    computerScreen.pixels[i + 2] = imagePixelB + processEffect;
                    computerScreen.pixels[i + 3] = 255;
                    i += 4;
                }
            }
            computerScreen.updatePixels();
        }
    }

    useLayoutEffect(() => {
        let s = new p5(Sketch, containerRef.current);
        return () => s.remove();
    }, []);

    return (
        <div className="hero-container" ref={containerRef} />
    );
};

export default Hero;