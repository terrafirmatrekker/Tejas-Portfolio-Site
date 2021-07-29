// Allows users to choose future dates
(function () {
    let today = new Date();
    document.getElementById("birthday").max = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() < 10 ? ("0" + (today.getDate()-1)) : (today.getDate()-1));
  })();
  
  function calculateDays() {
    let today = new Date();
    let bday = new Date(document.getElementById("birthday").value); 
    let age = today.getFullYear() - bday.getFullYear();
    
    let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
    
    if(today > upcomingBday) {
      upcomingBday.setFullYear(today.getFullYear() + 1);
    }
    
    var one_day = 24 * 60 * 60 * 1000;
    
    let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
    
    if (daysLeft && age < 200) {
      document.getElementById("result").innerText = `Your birthday is in ${daysLeft} days, let's party then!`;  
    } else {
      document.getElementById("result").innerText = "Please enter a valid birtday.";
    }
    
  }