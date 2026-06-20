class Footer extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
    <!-- Footer -->
  <footer>
    <div id="more-links">
      <div id="about-section">
        <h3> About </h3>
        <a href="https://cmcb.org/about/" target="_blank"> About CMCB </a>
        <a href="https://cmcb.org/student-pathways/" target="_blank"> Pathways </a>
        <a href="https://cmcb.org/about/accessibility/" target="_blank"> Accessibility </a>
        <a href="https://cmcb.org/about/faculty-staff/" target="_blank"> Faculty </a>
        <a href="https://cmcb.org/about/staff/" target="_blank"> Staff </a>
        <a href="https://cmcb.org/about/board-and-corporation/" target="_blank"> Board and Corporation </a>
      </div>
      <div id="programs-section">
        <h3> Programs </h3>
        <a href="https://cmcb.org/community-music-school/" target="_blank"> Community Music School </a>
        <a href="https://cmcb.org/programs/music-therapy/" target="_blank"> Music Therapy </a>
        <a href="https://cmcb.org/community-engagement-programs/" target="_blank"> Community Engagement Programs </a>
        <a href="https://cmcb.org/about/youth-employment-program/" target="_blank"> Youth Employment Program </a>

      </div>
      <div id="resources-section">
        <h3> Resources </h3>
        <a href="https://cmcb.org/how-to-register/" target="_blank"> Registration & Financial Aid </a>
        <a href="https://cmcb.org/student-resources/" target="_blank"> Student & Family Resources </a>
        <a href="https://cmcb.org/employee-resources/" target="_blank"> Employee Resources </a>
        <a href="https://cmcb.org/about/employment-opportunities/" target="_blank"> Employment Opportunities </a>

      </div>
      <div id="connect-section">
        <h3> Connect </h3>
        <a href="https://cmcb.org/donate/" target="_blank"> Donate </a>
        <a href="https://cmcb.org/sign-up-for-updates/" target="_blank"> Newsletter Sign-Up </a>
        <a href="https://cmcb.org/events/" target="_blank"> Events </a>
        <a href="#"> Contact Us </a>

      </div>
    </div>

    <div id="credits">

      <a href="index.html"><img src="https://cmcb.org/wp-content/uploads/2020/04/cmcb-logo-small.svg"
          alt="The CMCB Logo">
      </a>
      <small> Community Music Center of Boston is accredited by the Accrediting Commission for <br>
        Community and Precollegiate Arts Schools. We are also an accredited institutional member<br>
        of the National Association of Schools of Music and a full member of the National Guild <br>
        for Community Arts Education. <br><br>Copyright ©2019 Community Music Center of Boston.
        All Rights Reserved. 501(c)(3) non-profit organization.
      </small>

      <div id="socials">
        <a href="https://www.instagram.com/communitymusiccenterofboston/" target="_blank"><img id="social-img"
            src="media/instagram.png"></a>
        <a href="https://twitter.com/cmcbdotorg" target="_blank">
    <img id="social-img" src="media/twitter.png">
</a>
        <a href="https://www.facebook.com/communitymusiccenter/" target="_blank">
    <img id="social-img" src="media/facebook.png">
</a> 
        <a href="https://www.youtube.com/channel/UCOcVkq0OgqxA2od_qHH-iSg" target="_blank"><img id="social-img"
            src="media/youtube.png"></a>
      </div>
    </div>
  </footer>
    `
  }
}

customElements.define('footer-component', Footer)
