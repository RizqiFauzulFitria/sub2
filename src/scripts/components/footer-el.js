class FooterEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright © 2021 - Esploor Apps</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ECB365" fill-opacity="1"
          d="M1,128L34.1,122.7C60.6,117,137,107,206,85.3C274.3,64,343,32,411,37.3C480,43,549,85,617,112C685.7,139,754,149,823,138.7C891.4,128,960,96,1029,80C1097.1,64,1166,64,1234,69.3C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
        </path>
      </svg>
    </footer>
    `;
  }
}

customElements.define('footer-el', FooterEl);
