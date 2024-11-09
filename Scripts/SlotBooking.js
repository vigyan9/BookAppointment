
const availability = {
    "09:00": true,
    "10:00": true,
    "11:00": false,
    "12:00": true,
    "13:00": false,
    "14:00": true,
    "15:00": true,
    "16:00": false,
    "17:00": true
};

let selectedDate = null;
let selectedTime = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
    const calendarGrid = document.getElementById("calendar-grid");
    const calendarMonth = document.getElementById("calendar-month");

    calendarGrid.innerHTML = ""; // Clear previous days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarMonth.textContent = `${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarGrid.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;
        dayDiv.onclick = () => selectDate(day);
        
        if (selectedDate === day) {
            dayDiv.classList.add("selected");
        }

        calendarGrid.appendChild(dayDiv);
    }
}

function selectDate(day) {
    selectedDate = day;
    selectedTime = null;
    renderCalendar();
    document.getElementById("time-slots").style.display = "block";
    document.getElementById("submit-button").disabled = true;
    showAvailableSlots();
}

function showAvailableSlots() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // Clear previous slots

    for (const time in availability) {
        const slot = document.createElement("div");
        slot.classList.add("time-slot");

        if (availability[time]) {
            slot.classList.add("available");
            slot.textContent = `${time} - Available`;
            slot.onclick = () => selectTime(time);
        } else {
            slot.classList.add("unavailable");
            slot.textContent = `${time} - Unavailable`;
        }

        calendar.appendChild(slot);
    }
}

function selectTime(time) {
    selectedTime = time;
    document.getElementById("submit-button").disabled = false; // Enable submit button
    alert(`Selected time slot: ${time}`);
}

function submitBooking() {
   
    alert("Please SignUp/SignIN TO Book Your Slot");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    location.reload(); // Refresh the page after booking confirmation
}

// Make the time slot slider draggable
const timeSlots = document.getElementById("time-slots");
let isDown = false;
let startX;
let scrollLeft;

timeSlots.addEventListener("mousedown", (e) => {
    isDown = true;
    timeSlots.classList.add("active");
    startX = e.pageX - timeSlots.offsetLeft;
    scrollLeft = timeSlots.scrollLeft;
});

timeSlots.addEventListener("mouseleave", () => {
    isDown = false;
    timeSlots.classList.remove("active");
});

timeSlots.addEventListener("mouseup", () => {
    isDown = false;
    timeSlots.classList.remove("active");
});

timeSlots.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timeSlots.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    timeSlots.scrollLeft = scrollLeft - walk;
});

function prevMonth() {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
    renderCalendar();
}

function nextMonth() {
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
    renderCalendar();
}

renderCalendar(); // Initialize the calendar
