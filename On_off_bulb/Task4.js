function toggleLight() {
  let switchBtn = document.getElementById("lightSwitch");
  let bulb = document.getElementById("bulb");
  let status = document.getElementById("status");

  if (switchBtn.checked) {
    bulb.src = "pic_bulbon.gif";
    status.textContent = "💡 Light is ON";
  } else {
    bulb.src = "pic_bulboff.gif";
    status.textContent = "⚫ Light is OFF";
  }
}
