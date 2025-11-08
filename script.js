/* FICHIER: script.js */
// Small interactivity: hamburger, theme toggle, form handling, copy email
document.addEventListener('DOMContentLoaded', function(){
    // year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // hamburger
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    hamburger.addEventListener('click', function(){
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  
    // theme
    var themeToggle = document.getElementById('themeToggle');
    var current = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', current);
    themeToggle.textContent = current === 'dark' ? '🌙' : '☀️';
    themeToggle.addEventListener('click', function(){
      var t = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', t);
      themeToggle.textContent = t === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('theme', t);
    });
  
    // copy email
    var copyBtn = document.getElementById('copyEmail');
    var emailText = document.getElementById('emailText');
    copyBtn && copyBtn.addEventListener('click', function(){
      var email = emailText.textContent || copyBtn.textContent;
      navigator.clipboard && navigator.clipboard.writeText(email).then(function(){
        copyBtn.textContent = 'copié ✓';
        setTimeout(function(){ copyBtn.textContent = email }, 1600);
      }).catch(function(){
        alert('Copie impossible — sélectionne manuellement: ' + email);
      });
    });
  
    // form (client-side only)
    var form = document.getElementById('contactForm');
    form && form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = new FormData(form);
      // Here you would send the form to a server. We'll simulate success.
      alert('Merci ' + (data.get('name') || '') + '! Ton message a été reçu (simulation).');
      form.reset();
    });
  });