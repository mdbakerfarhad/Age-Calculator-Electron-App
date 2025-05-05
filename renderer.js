// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
  
    mobileMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    // Set today's date by default on load
    document.getElementById("targetDate").value = new Date().toISOString().split("T")[0];
  
    // Dark mode toggle
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const themeIcon = document.querySelector('.theme-icon i');
  
    // Check for saved user preference, if any
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      }
    }
  
    // Theme switch event listener
    toggleSwitch.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
      }
    });
  });
  
  // Age calculator functions
  function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const targetInput = document.getElementById("targetDate").value;
    const resultDiv = document.getElementById("result");
  
    if (!dobInput || !targetInput) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = "<span style='color:#e74c3c;'><i class='fas fa-exclamation-circle'></i> Please select both dates.</span>";
      return;
    }
  
    const dob = new Date(dobInput);
    const target = new Date(targetInput);
  
    if (dob > target) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = "<span style='color:#e74c3c;'><i class='fas fa-exclamation-circle'></i> Birth date must be before the target date.</span>";
      return;
    }
  
    let years = target.getFullYear() - dob.getFullYear();
    let months = target.getMonth() - dob.getMonth();
    let days = target.getDate() - dob.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    const diffMs = target - dob;
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const daysTotal = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(daysTotal / 7);
    const monthsTotal = years * 12 + months;
  
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
      <p><i class="fas fa-user"></i> <strong>Age:</strong> ${years} years, ${months} months, ${days} days</p>
      <p><i class="fas fa-calendar-week"></i> <strong>Total Months:</strong> ${monthsTotal}</p>
      <p><i class="fas fa-calendar-day"></i> <strong>Weeks:</strong> ${weeks}</p>
      <p><i class="fas fa-clock"></i> <strong>Days:</strong> ${daysTotal}</p>
      <p><i class="fas fa-hourglass-half"></i> <strong>Hours:</strong> ${hours}</p>
      <p><i class="fas fa-stopwatch"></i> <strong>Minutes:</strong> ${minutes}</p>
      <p><i class="fas fa-history"></i> <strong>Seconds:</strong> ${seconds}</p>
    `;
  }
  
  function resetForm() {
    document.getElementById("dob").value = "";
    document.getElementById("targetDate").value = new Date().toISOString().split("T")[0];
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
  }