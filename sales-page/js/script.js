const targetDate = new Date('2024-06-10T09:00:00-05:00').getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysString = days.toString().padStart(2, '0');
  const hoursString = hours.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');
  const secondsString = seconds.toString().padStart(2, '0');
  const secondsPuluhan = Math.floor(seconds / 10);
  const secondsSatuan = seconds % 10;

  document.querySelector(".days").innerHTML = daysString;
  document.querySelector(".hours").innerHTML = hoursString;
  document.querySelector(".minutes").innerHTML = minutesString;
  document.querySelector(".seconds-puluhan").innerHTML = secondsPuluhan;
  document.querySelector(".seconds-satuan").innerHTML = secondsSatuan;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = `
    <div class="first-item count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="days font-extrabold text-4xl">${daysString}</div>
      <div class="font-bold">Days</div>
    </div>
    <div class="count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="hours font-extrabold text-4xl">${hoursString}</div>
      <div class="font-bold">Hours</div>
    </div>
    <div class="count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="minutes font-extrabold text-4xl">${minutesString}</div>
      <div class="font-bold">Minutes</div>
    </div>
    <div class="last-item count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="seconds font-extrabold text-4xl">${secondsString}</div>
      <div class="font-bold">Seconds</div>
    </div>
    `;
    document.querySelector(".result-container").style.display = "flex";
  }
}, 1000);

const names = [
  "Alice", "Bob", "Charlie", "Diana", "Eve",
  "Frank", "Grace", "Henry", "Isabella", "Jack",
  "Katherine", "Leo", "Mia", "Nathan", "Olivia",
  "Patrick", "Quinn", "Rachel", "Samuel", "Tina",
  "Ulysses", "Victoria", "Walter", "Xavier", "Yvonne", "Zane",
  "Aaron", "Bella", "Caleb", "David", "Emily",
  "Fiona", "George", "Hannah", "Ian", "Julia",
  "Kevin", "Lily", "Michael", "Natalie", "Oscar",
  "Penelope", "Quentin", "Rebecca", "Samantha", "Theo",
  "Uma", "Vincent", "Wendy", "Xander", "Yasmine", "Zara",
  "Adam", "Benjamin", "Chloe", "Daniel", "Emma",
  "Faith", "Gabriel", "Holly", "Ivy", "Jacob",
  "Kate", "Liam", "Molly", "Noah", "Oliver",
  "Paige", "Quincy", "Rose", "Sophia", "Thomas",
  "Una", "Violet", "William", "Xena", "Yolanda", "Zack"
];

const toastContainer = document.getElementById('toast-container');
const toastTemplate = document.getElementById('toast-template');

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function showToast() {
  const newToast = toastTemplate.cloneNode(true);
  newToast.style.display = 'flex';
  newToast.querySelector('.toast-message').textContent = `Terima Kasih ${getRandomName()} !`;

  toastContainer.appendChild(newToast);

  setTimeout(() => {
    if (newToast) {
      toastContainer.removeChild(newToast);
    }
  }, 5000);
}

function closeToast(button) {
  const toast = button.parentElement;
  toastContainer.removeChild(toast);
}

setInterval(showToast, 30000);

showToast();