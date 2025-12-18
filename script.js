const tree = [
  "            ⭐️",
  "           /**\\",
  "        ///****\\",
  "       /***/*/***\\",
  "     /***/********\\",
  "    //*/*/**********\\",
  "      /*******/*****\\",
  "   /***/**************\\",
  "  //*/*/***************\\",
  "    /***********/******\\",
  " /********************/**\\",
  "/***/*/*******************\\",
  "          |||||",
  "          |||||",
];

const container = document.getElementById("tree");

container.innerHTML = tree
  .map((line) => line.replace(/\*/g, `<span class="star">*</span>`))
  .join("\n");

const stars = Array.from(document.querySelectorAll(".star"));

setInterval(() => {
  stars.forEach((star) => {
    star.style.color = "white";
    star.style.transform = "scale(1)";
  });

  stars
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .forEach((star) => {
      const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      star.style.color = randomColor;
      star.style.transform = "scale(1.4)";
    });
}, 600);
