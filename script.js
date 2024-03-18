let canvas1 = document.createElement("canvas");
let canvas2 = document.createElement("canvas");
canvas.width = 1024;
canvas.height = 1024;
canvas.id = "hydra-canvas";
document.body.appendChild(canvas);
const h = new Hydra({
    canvas: canvas1,
    detectAudio: false,
    enableStreamCapture: false,
}).synth
h.osc(4, 0.1, 1.2).out()
const h2 = new Hydra({
    canvas: canvas1,
    detectAudio: false,
    enableStreamCapture: false,
}).synth
h2.noise().out()
