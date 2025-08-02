const fill = document.getElementById("progress-fill");
const percentText = document.getElementById("percent");
const message = document.getElementById("message");

let percent = 0;
const messages = [
  "Initializing quantum flux...",
  "Synchronizing phase vectors...",
  "Compiling entropy modules...",
  "Calibrating thought engine...",
  "Reversing polarity...",
  "Rendering recursive loop...",
  "Decrypting banana matrix...",
];

function updateProgress() {
  percent += Math.random() * 2;
  if (percent > 100) {
    percent = 0; // Reset to simulate eternal loop
  }

  fill.style.width = `${percent}%`;
  percentText.textContent = `${Math.floor(percent)}%`;

  if (Math.random() < 0.1) {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMsg;
  }

  requestAnimationFrame(updateProgress);
}

updateProgress();
