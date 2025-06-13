document.addEventListener('DOMContentLoaded', () => {  
  let i = 0;
  const txt = 'Stesha Simon'; // The text to display
  const speed = 150; // Speed of typing

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});