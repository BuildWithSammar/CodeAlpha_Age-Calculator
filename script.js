document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    document.getElementById("result").innerHTML = "❌ Please select a valid date!";
    return;
  }

  let dob = new Date(dobInput);
  let today = new Date();

  if (dob > today) {
    document.getElementById("result").innerHTML = "❌ Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerHTML =
    `🎉 Your Age is <span style="color:#ffcc70">${years}</span> Years, 
     <span style="color:#ffcc70">${months}</span> Months, 
     and <span style="color:#ffcc70">${days}</span> Days.`;
});
