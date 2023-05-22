const htmlBody = document.querySelector("body");

const randomClickFunction = function () {
  const colors = [
    "#002942",
    "#ca7DB",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  htmlBody.style.backgroundColor = randomColor;

  console.log("The clicked and set the color to " + randomColor);
};
