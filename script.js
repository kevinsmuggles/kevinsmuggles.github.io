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

//sezione per i tag

const posts = document.querySelectorAll('.post');
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    const tagName = tag.getAttribute('data-tag');
    posts.forEach(post => {
      const postTags = post.querySelectorAll('.tag');
      let hasTag = false;
      postTags.forEach(postTag => {
        if (postTag.getAttribute('data-tag') === tagName) {
          hasTag = true;
        }
      });
      if (hasTag) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
