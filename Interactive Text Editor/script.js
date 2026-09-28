const target = document.getElementById("target");

const bold = document.getElementById("bold");
const italic = document.getElementById("italic");

const alignmentLeft = document.getElementById("alignmentLeft");
const alignmentCenter = document.getElementById("alignmentCenter");
const alignmentRight = document.getElementById("alignmentRight");

const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const capitalize = document.querySelector(".capitalize");
const clear = document.querySelector(".clear");

const textColor = document.getElementById("textColor");
const backgroundColor = document.querySelector(".backgroundColor");

const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");

bold.addEventListener("click", () => {
  target.style.fontWeight = "bold";
});

italic.addEventListener("click", () => {
  target.style.fontStyle =
    target.style.fontStyle === "italic" ? "normal" : "italic";
});

alignmentLeft.addEventListener("click", () => {
  target.style.justifyContent = "start";
  console.log(target);
});

alignmentCenter.addEventListener("click", () => {
  target.style.justifyContent = "center";
  console.log(target);
});

alignmentRight.addEventListener("click", () => {
  target.style.justifyContent = "end";
  console.log(target);
});

upper.addEventListener("click", () => {
  target.style.textTransform = "uppercase";
});

lower.addEventListener("click", () => {
  target.style.textTransform = "lowercase";
});

capitalize.addEventListener("click", () => {
  target.style.textTransform = "capitalize";
});

clear.addEventListener("click", () => {
  target.style.cssText = "";
});

textColor.addEventListener("input", () => {
  target.style.color = textColor.value;
});

backgroundColor.addEventListener("input", () => {
  target.style.backgroundColor = backgroundColor.value;
});

fontSize.addEventListener("input", () => {
  const size = parseInt(fontSize.value);
  if (size > 0) {
    target.style.fontSize = `${size}px`;
  }
});

fontFamily.addEventListener("input", () => {
  target.style.fontFamily = fontFamily.value;
});
