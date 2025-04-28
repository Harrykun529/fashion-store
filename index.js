document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You selected: ${card.dataset.service}`);
        });
    });
});
const specialists = {
    generalCheckup: {
        name: "Dr. Adrian Cruz",
        role: "General Physician",
        info: "Our general physician offers comprehensive checkups to assess your overall health and identify any potential issues early."
    },
    dentalCare: {
        name: "Dr. Elena Rivera",
        role: "Dentist",
        info: "Our dental care specialists offer routine cleanings, fillings, and advanced procedures to maintain your oral health."
    },
    pediatrics: {
        name: "Dr. Sophia Morales",
        role: "Children's Specialist",
        info: "Our pediatric specialists provide care for infants, children, and adolescents, focusing on their growth and development."
    },
    cardiology: {
        name: "Dr. Samuel Reyes",
        role: "Heart Specialist",
        info: "Our cardiologists specialize in diagnosing and treating heart conditions to ensure your cardiovascular health."
    },
    radiology: {
        name: "Dr. Marco Diaz",
        role: "X-ray & Imaging",
        info: "Our radiologists use advanced imaging technologies to diagnose and monitor a wide range of medical conditions."
    },
    physicalTherapy: {
        name: "Dr. Maya Santos",
        role: "Rehabilitation Specialist",
        info: "Our physical therapists help patients recover from injuries and manage chronic conditions to improve their quality of life."
    },
    maternityCare: {
        name: "Dr. Isabella Vargas",
        role: "Obstetrician",
        info: "Our maternity care specialists provide prenatal and postnatal care, supporting mothers and their babies throughout the pregnancy journey."
    }
};
function showSpecialistInfo(specialistId) {
    const modal = document.getElementById('specialist-modal');
    const details = document.getElementById('specialist-details');
    const specialist = specialists[specialistId];

    details.innerHTML = `
        <h3>${specialist.name}</h3>
        <p><strong>${specialist.role}</strong></p>
        <p>${specialist.info}</p>
    `;
    modal.style.display = 'flex';
}
function closeModal() {
    document.getElementById('specialist-modal').style.display = 'none';
}
document.getElementById("appointment-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const doctor = document.getElementById("doctor").value;
    const messageDiv = document.getElementById("doctor-message");
    const availableDoctors = ["generalCheckup", "dentalCare", "pediatrics", "cardiology", "radiology", "physicalTherapy", "maternityCare"];

    if (doctor && availableDoctors.includes(doctor)) {
        messageDiv.innerHTML = ""; 
        alert("Your appointment has been scheduled with the selected doctor.");
    } else {
        messageDiv.innerHTML = "<p style='color: red;'>Sorry, the selected doctor is unavailable. Please choose another doctor.</p>";
    }
});
function searchPage() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var pages = {
        'doctor': 'doctor.html',
        'about': 'index.html#about-us',
        'home': 'index.html',
        'services': 'ourservices.html',
        'appointment': 'Appointment.html',
        'contact': 'contact.html',
        'health': 'HealthConditions.html'
    };
    if (pages[searchTerm]) {
        window.location.href = pages[searchTerm];
    } else {
        alert('Page not found!');
    }
}
function showTips(illness) {
    let tipsDisplay = document.getElementById("tips-display");
    tipsDisplay.innerHTML = "";
    let tipsContent = "";
    switch (illness) {
      case "Cold":
        tipsContent = `
          <h3>Cold and Flu</h3>
          <p><strong>Symptoms:</strong> Runny nose, sore throat, cough, fever.</p>
          <p><strong>Tips to Avoid:</strong> Wash your hands frequently, avoid close contact with infected people, and get vaccinated.</p>
          <p><strong>Prevention:</strong> Drink plenty of fluids, rest, and eat healthy to strengthen your immune system.</p>
        `;
        break;
      case "Diabetes":
        tipsContent = `
          <h3>Diabetes</h3>
          <p><strong>Symptoms:</strong> Increased thirst, frequent urination, extreme hunger, and blurry vision.</p>
          <p><strong>Tips to Avoid:</strong> Maintain a healthy diet, exercise regularly, and monitor blood sugar levels.</p>
          <p><strong>Prevention:</strong> Maintain a healthy weight, avoid sugary foods, and stay physically active.</p>
        `;
        break;
      case "Hypertension":
        tipsContent = `
          <h3>Hypertension</h3>
          <p><strong>Symptoms:</strong> Often has no symptoms, but can cause headaches, dizziness, and shortness of breath.</p>
          <p><strong>Tips to Avoid:</strong> Reduce salt intake, manage stress, and maintain a healthy weight.</p>
          <p><strong>Prevention:</strong> Eat a balanced diet, exercise, and monitor blood pressure regularly.</p>
        `;
        break;
      case "Obesity":
        tipsContent = `
          <h3>Obesity</h3>
          <p><strong>Symptoms:</strong> Excessive body fat that affects overall health.</p>
          <p><strong>Tips to Avoid:</strong> Eat balanced meals, avoid overeating, and stay active.</p>
          <p><strong>Prevention:</strong> Regular physical activity and a balanced diet are key to maintaining a healthy weight.</p>
        `;
        break;
      case "Heart Disease":
        tipsContent = `
          <h3>Heart Disease</h3>
          <p><strong>Symptoms:</strong> Chest pain, shortness of breath, fatigue.</p>
          <p><strong>Tips to Avoid:</strong> Exercise, eat heart-healthy foods, and avoid smoking.</p>
          <p><strong>Prevention:</strong> Maintain a healthy diet, control cholesterol, and exercise regularly.</p>
        `;
        break;
      case "Asthma":
        tipsContent = `
          <h3>Asthma</h3>
          <p><strong>Symptoms:</strong> Wheezing, coughing, shortness of breath.</p>
          <p><strong>Tips to Avoid:</strong> Avoid allergens, maintain a clean home, and manage stress.</p>
          <p><strong>Prevention:</strong> Use inhalers as prescribed, monitor breathing regularly, and avoid triggers.</p>
        `;
        break;
      case "Kidney Disease":
        tipsContent = `
          <h3>Kidney Disease</h3>
          <p><strong>Symptoms:</strong> Swelling, frequent urination, and fatigue.</p>
          <p><strong>Tips to Avoid:</strong> Stay hydrated, avoid excessive salt, and get regular check-ups.</p>
          <p><strong>Prevention:</strong> Manage blood sugar, maintain a healthy weight, and avoid smoking.</p>
        `;
        break;
      case "Cancer Prevention":
        tipsContent = `
          <h3>Cancer Prevention</h3>
          <p><strong>Tips to Avoid:</strong> Avoid smoking, limit alcohol intake, and protect skin from excessive sun exposure.</p>
          <p><strong>Prevention:</strong> Regular screenings, a healthy diet, and staying active can help reduce risk.</p>
        `;
        break;
      case "Mental Health":
        tipsContent = `
          <h3>Mental Health</h3>
          <p><strong>Tips to Avoid:</strong> Manage stress, get enough sleep, and talk to someone if you feel overwhelmed.</p>
          <p><strong>Prevention:</strong> Regular physical activity, a healthy social life, and mindfulness practices help maintain mental wellness.</p>
        `;
        break;
      default:
        tipsContent = "<p>Please select an illness to learn more.</p>";
        break;
    }
    tipsDisplay.innerHTML = tipsContent;
  }
  function trackHabits() {
    let water = document.getElementById("water-intake").value;
    let exercise = document.getElementById("exercise-time").value;
    let sleep = document.getElementById("sleep-hours").value;
    let waterMessage = '';
    let exerciseMessage = '';
    let sleepMessage = '';
    if (water >= 8) {
      waterMessage = 'Good habit: You are staying hydrated!';
    } else {
      waterMessage = 'Bad habit: Try to drink more water.';
    }
    if (exercise >= 30) {
      exerciseMessage = 'Good habit: Keep up the great work with exercise!';
    } else {
      exerciseMessage = 'Bad habit: Try to exercise more often.';
    }
    if (sleep >= 7) {
      sleepMessage = 'Good habit: You are getting enough sleep!';
    } else {
      sleepMessage = 'Bad habit: Try to sleep more for better health.';
    }
    alert(`You tracked: ${water} glasses of water, ${exercise} minutes of exercise, ${sleep} hours of sleep.\n\n${waterMessage}\n${exerciseMessage}\n${sleepMessage}`);
  }