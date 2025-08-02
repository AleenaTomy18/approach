const result = document.getElementById('result');
const verifyBtn = document.getElementById('verify-btn');
const questionSection = document.getElementById('question-section');
const questionText = document.getElementById('question');
const answer = document.getElementById('answer');
const nextBtn = document.getElementById('next-btn');
const certSection = document.getElementById('certificate-section');
const generateBtn = document.getElementById('generate-certificate');
const certBox = document.getElementById('certificate');

const certName = document.getElementById('cert-name');
const certGender = document.getElementById('cert-gender');
const certAnimal = document.getElementById('cert-animal');
const certRating = document.getElementById('cert-rating');

const fakeBreathRatings = [
  "yukk, i think you got cold",
  "ohhhh wow,i can feel your breath",
  "OMG, you can breathe?",
];

const questions = [
  "What color does your soul feel like today?",
  "can you blink.",
  "What’s your favorite triangle?",
  "If you're real, what's 3 x imaginary?",
  "Would a mirror recognize you?",
];

const genders = [
  "may be a male",
  "may be a fe-Male",
  "gender cannot be identified",
  "neutral",
  "genderless",
  "undefines"
];

const animals = [
  "Window-Slapping Sea Duck",
  "Quantum Hamster of Chaos",
  "Emotional Support Giraffe",
  "Backwards Llama",
  "Undercover Platypus",
  "Mildly Confused Otter",
  "Sock-Eating Pantheroid",
  "WiFi Crab",
];

let questionIndex = 0;
let finalBreathRating = "";

verifyBtn.addEventListener('click', () => {
  result.textContent = "Analyzing your breath...";
  setTimeout(() => {
    finalBreathRating = fakeBreathRatings[Math.floor(Math.random() * fakeBreathRatings.length)];
    result.textContent = `Breath Quality: "${finalBreathRating}"`;

    questionSection.style.display = 'block';
    questionText.textContent = questions[questionIndex];
  }, 2000);
});

nextBtn.addEventListener('click', () => {
  answer.value = '';
  questionIndex++;
  if (questionIndex >= questions.length) {
    questionSection.style.display = 'none';
    certSection.style.display = 'block';
  } else {
    questionText.textContent = questions[questionIndex];
  }
});

generateBtn.addEventListener('click', () => {
  const name = prompt("Enter your name for the certificate:");
  if (!name) return;

  certName.textContent = name;
  certGender.textContent = genders[Math.floor(Math.random() * genders.length)];
  certAnimal.textContent = animals[Math.floor(Math.random() * animals.length)];
  certRating.textContent = finalBreathRating;

  certBox.style.display = 'block';
});
