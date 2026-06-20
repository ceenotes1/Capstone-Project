const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active')

  if (navLinks.classList.contains('active')) {
    hamburger.setAttribute('aria-label', 'Close navigation menu')
  } else {
    hamburger.setAttribute('aria-label', 'Open navigation menu')
  }
})
const registerBtn = document.getElementById('registerBtn')
const donateBtn = document.getElementById('donateBtn')
const inquiryBtn = document.getElementById('inquiryBtn')
const volunteerBtn = document.getElementById('volunteerBtn')
const eventsBtn = document.getElementById('eventsBtn')

if (registerBtn) {
  registerBtn.addEventListener('click', function () {
    alert('Register button works!')
  })
}

if (donateBtn) {
  donateBtn.addEventListener('click', function () {
    alert('Thank you for supporting CMCB! Donation page coming soon.')
  })
}

if (inquiryBtn) {
  inquiryBtn.addEventListener('click', function () {
    window.location.href = 'contact.html'
  })
}

if (volunteerBtn) {
  volunteerBtn.addEventListener('click', function () {
    alert('Volunteer information coming soon.')
  })
}

if (eventsBtn) {
  eventsBtn.addEventListener('click', function () {
    alert('Events page coming soon.')
  })
}

const programButtons = document.querySelectorAll('.program-btn')

programButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    alert('Program details coming soon.')
  })
})

function validateForm () {
  const name = document.forms.contact_form.fname.value
  const email = document.forms.contact_form.email.value
  const reason = document.forms.contact_form.reason.value
  const message = document.forms.contact_form.message.value

  if (name === '') {
    alert('Name must be filled out')
    return false
  }
  if (email === '') {
    alert('Name must be filled out')
    return false
  }
  if (reason === '') {
    alert('Name must be filled out')
    return false
  }
  if (message === '') {
    alert('Name must be filled out')
    return false
  }
}