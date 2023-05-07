


const replyBtns = document.querySelectorAll('.reply-btn');



// Loop through the reply buttons and add a click event listener to each one

  
replyBtns.forEach(function(replyBtn) {
  replyBtn.addEventListener('click', function(){
    const replyForm = replyBtn.nextElementSibling;
    
    // Toggle the display of the reply form
    replyForm.style.display = replyForm.style.display === 'none' ? 'block' : 'none';
   
    const title = this.parentNode.childNodes[1].innerText
    const date = this.parentNode.childNodes[3].innerText
    const time = this.parentNode.childNodes[5].innerText
    const replies = this.parentNode.childNodes[9].value
   
   
    fetch('/replies', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'title': title,
        'date': date,
        'time': time,
        'replies': replies
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});






var trash = document.querySelectorAll(".fa-trash");

trash.forEach(function(trash) {
  trash.addEventListener('click', function() {

    
    const _id =  this.parentNode.parentNode.childNodes[13].innerText;
   
    fetch('/reminders', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messageID: _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
})








function createReminderAlert() {
  // Get the values from the form
  const title = document.querySelector('input[name="title"]').value;
  const date = document.querySelector('input[name="date"]').value;
  const time = document.querySelector('input[name="time"]').value;

  // Create the alert message
  const alertMessage = `You just created a reminder for "${title}" on ${date} at ${time}.`;

  // Display the alert message
  alert(alertMessage);
}
function updateCurrentTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  document.getElementById('current-time').textContent = formattedTime;
}
setInterval(updateCurrentTime, 1000);

 