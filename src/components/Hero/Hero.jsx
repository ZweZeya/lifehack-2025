import React, { useLayoutEffect, useRef } from 'react';
import ErrorPopup from './ErrorPopup/ErrorPopup';
import p5 from 'p5';

import "./Hero.scss";

const Hero = () => {
    const containerRef = useRef();

    // Inspired by Roni Kaufman's sketch
    // https://editor.p5js.org/ronikaufman/sketches/IxzXjdCmb
    const Sketch = (p) => {
        let w = 320;
        let h = 240;
        let logoSize = 220;
        let frameWidth = 60;
        let standTopWidth = 120;
        let standBaseWidth = 150
        let standHeight = 20;

        let backgroundColor = p.color("#080808");

        let logo;
        let computerScreen;
        let computerFrame;
        let computerStand;
        let glow;

        let theta = 0;
        let barY1;
        let barY2;
        let ppx;
        let needShrink = false;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight * 0.8);
            p.frameRate(12);
            p.noSmooth();
            needShrink = p.windowWidth < 767
            
            setupComputerScreen();
            setupComputerFrame();
            setupComputerStand();
            setupGlow();

            p.loadImage("/logo_circle.png", (image) => {
                image.resize(logoSize, logoSize);
                logo.copy(image, 0, 0, logoSize, logoSize, (w - logoSize) / 2, (h - logoSize) / 2, logoSize, logoSize);
                logo.loadPixels();
            });
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            needShrink = p.windowWidth < 767
            setupComputerFrame();
            setupComputerStand();
            setupGlow();
        }

        p.draw = () => {
            updateBar();
            updateScreen();
            updateGlow();

            p.background(backgroundColor);

            p.push()
            {
                if (needShrink) {
                    p.translate(p.width * 0.1, p.height * 0.1);
                    p.scale(0.8);
                }

                p.push();
                p.translate((p.width - w) / 2, (p.height - h) / 2);
                p.scale(1, 1.01);
                p.image(computerScreen, 0, 0);
                p.pop();
    
                p.image(computerFrame, 0, 0);
                p.image(computerStand, 0, 0);
    
                p.push();
                p.tint(255, 255, 255, (p.sin(theta) * 60) + 195);
                p.image(glow, 0, 0);
                p.pop();
            }
            p.pop();
        }

        const setupComputerScreen = () => {
            computerScreen = p.createImage(w, h);
            computerScreen.loadPixels();

            logo = p.createImage(w, h);
            logo.drawingContext.willReadFrequently = true;
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
            glow.noStroke();
            glow.drawingContext.shadowBlur = 200;
            for (let i = 60; i <= 120; i += 60) {
                glow.drawingContext.shadowColor = p.color(160, 215, 225, i);
                glow.rect((p.width - w) / 2, (p.height - h) / 2, w, h);
            }

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

        const updateGlow = () => {
            theta += 0.1;
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

    const messages1 = [
        "404: The Web Page took a day off.",
        "Oops! Our code tripped over a bug.",
        "Error: This wasn't supposed to happen.",
        "Did you try turning it off and on again?",
        "Beep boop. Something's not right.",
        "Error 403: The gatekeeper says no.",
        "This site's on a coffee break.",
        "Oops! The server said 'nope'.",
        "Warning: Code gremlins at work.",
        "Error: The hamster powering this site fainted.",
    ]

    const messages2 = [
        "500: Internal Server Error — please send snacks.",
        "Oops! The algorithm had an existential crisis.",
        "NullPointerException: We pointed at nothing.",
        "Error: Too many tabs open in the developer’s brain.",
        "Caution: AI tried to take over and failed.",
        "Segmentation Fault: Core dumped... somewhere?",
        "Connection lost: Server ran away screaming.",
        "403 Forbidden: You shall not pass!",
        "System overload: Too much awesomeness detected.",
        "The page you're looking for is in another castle.",
    ]

    const messages3 = [
        "Error 418: I'm a teapot. No coffee for you.",
        "Blue screen of nope.",
        "Glitch in the Matrix detected.",
        "Oops! Our quantum computer is still in superposition.",
        "Server went on a vacation to the cloud.",
        "Unexpected token found. It says 'hello'.",
        "Kernel panic! Please bring a blanket.",
        "Code broke. Developer crying in the corner.",
        "Page not found. Try yelling at your screen?",
        "Error: Compiler tried to compile feelings."
    ]

    return (
        <>
            <div className="hero-container" ref={containerRef} />
            <ErrorPopup messages={messages1} />
            <ErrorPopup messages={messages2} />
            <ErrorPopup messages={messages3} />
        </>
    );
};



export default Hero;