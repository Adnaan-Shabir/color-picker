const button = document.getElementById("btn");
const result = document.getElementById("result");
const colorPicker = async () => {
  const eyeDropper = new EyeDropper();
  const { sRGBHex } = await eyeDropper.open();
  result.innerHTML = sRGBHex;
};
button.addEventListener("click", colorPicker);