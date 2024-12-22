let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let dob = new Date(userInput.value);
    let now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    let month = now.getMonth() - dob.getMonth();
    let day = now.getDate() - dob.getDate();
    
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
        month += 12;
    }
    
    if (day < 0) {
        month--;
        day += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    
    document.getElementById('result').innerHTML = `Your age is <span class="age">${age}</span> years, <span class="month">${month}</span> months, and <span class="day">${day}</span> days old`;
}