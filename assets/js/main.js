const layers = document.querySelectorAll(".home-page__layer");

if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    layers.forEach((layer, i) => {
      const depth = i + 1;
      layer.style.transform =
        `translate3d(${x * depth}px, ${y * depth}px, 0) scale(${1 + depth * 0.05})`;
    });
  });
}
