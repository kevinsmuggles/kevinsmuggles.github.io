function applyFilter(filterName) {
    hydra.run(() => {
      s0.initCam(2)
    src(o0)
.layer(src(s0).luma(.38).pixelate(200,200))
.modulate(o0,.003)
.colorama(()=>Math.sin(time*.1)*.2)
.diff(src(o0).scale(.99).thresh(.18))
.hue(.28)
.out()
      // Example filter
        // Apply the specified filter based on filterName
    });
}
