class HeaderComponent extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
            <header>
                <nav class="nav" id="nav">
                    <a href="index.html"> <img id="logo" src="https://cmcb.org/wp-content/uploads/2020/09/cmcb-logo-black.svg" /></a>

                    <div id="nav-btns">
                        <a href="about.html" target="_blank">About</a>
                        <a href="programs.html" target="_blank">Programs</a>
                        <a href="contact.html" target="_blank">Contact Us</a>

                        <button id="desktop-menu-toggle" class="desktop-menu-btn">Menu</button>

                        <button id="mobile-menu-toggle" class="hamburger">
                            <div class="menu-toggle__bar1"></div>
                            <div class="menu-toggle__bar2"></div>
                            <div class="menu-toggle__bar3"></div>
                        </button>
                    </div>
                </nav>

                <div id="pop-up-menu">

                    <details class="menu-group">
                        <summary>About</summary>
                        <a href="https://cmcb.org/about/">About CMCB</a>
                        <a href="https://cmcb.org/student-pathways/">Pathways</a>
                        <a href="https://cmcb.org/about/accessibility/">Accessibility</a>
                        <a href="https://cmcb.org/about/faculty-staff/">Faculty</a>
                        <a href="https://cmcb.org/about/staff/">Staff</a>
                    </details>

                    <details class="menu-group">
                        <summary>Programs</summary>
                        <a href="https://cmcb.org/community-music-school/">Community Music School</a>
                        <a href="https://cmcb.org/programs/music-therapy/">Music Therapy</a>
                        <a href="https://cmcb.org/community-engagement-programs/">Community Engagement</a>
                        <a href="https://cmcb.org/about/youth-employment-program/">Youth Employment</a>
                    </details>

                    <details class="menu-group">
                        <summary>Resources</summary>
                        <a href="https://cmcb.org/how-to-register/">Registration & Financial Aid</a>
                        <a href="https://cmcb.org/student-resources/">Student Resources</a>
                        <a href="https://cmcb.org/employee-resources/">Employee Resources</a>
                        <a href="https://cmcb.org/about/employment-opportunities/">Employment</a>
                    </details>

                    <details class="menu-group">
                        <summary>Events</summary>
                        <a href="https://cmcb.org/events/">Upcoming Events</a>
                        <a href="https://cmcb.org/sign-up-for-updates/">Newsletter</a>
                    </details>

                    <details class="menu-group">
                        <summary>Connect</summary>
                        <a href="contact.html">Contact Us</a>
                        <a href="https://cmcb.org/donate/">Donate</a>
                    </details>
                </div>
            </header>
            `

    const desktopMenuBtn = document.getElementById('desktop-menu-toggle')
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle')
    const popUpMenu = document.getElementById('pop-up-menu')

    function toggleMenu () {
      popUpMenu.classList.toggle('open')
    }

    if (desktopMenuBtn) {
      desktopMenuBtn.addEventListener('click', toggleMenu)
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMenu)
    }

    document.addEventListener('click', event => {
      if (
        !popUpMenu.contains(event.target) &&
                !desktopMenuBtn.contains(event.target) &&
                !mobileMenuBtn.contains(event.target)
      ) {
        popUpMenu.classList.remove('open')
      }
    })
  }
}

customElements.define('header-component', HeaderComponent)
