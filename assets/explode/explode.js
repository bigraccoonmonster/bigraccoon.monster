const racon = document.querySelector("#oneko");

racon.style.zIndex = 1;

racon.addEventListener("click", (e) => {
  const explosion = document.createElement("img");
  explosion.src = "assets/explode/explode.gif";
  explosion.style.position = "absolute";
  const boundingBox = racon.getBoundingClientRect();
  explosion.style.left = boundingBox.left - boundingBox.width / 4 + "px";
  explosion.style.top = boundingBox.top - boundingBox.height / 2 + "px";

  explosion.style.zIndex = 0;

  explosion.style.width = "48px";

  explosion.style.userSelect = "none";
  explosion.style.pointerEvents = "none";

  document.body.appendChild(explosion);

  const audio = new Audio("./assets/explode/deltarune-explosion.mp3");
  audio.volume = 0.1;
  audio.play();

  setTimeout(() => {
    explosion.remove();
  }, 2400);
});
