class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <h1 class="logo"><a href="/" style="text-decoration:none; color:#367e66;">Esploor Apps</a></h1>
      <button class="icon-toggler" aria-label="button toggler navigation">&#9776</button>
      <ul class="navbar-nav">
        <li><a href="/" aria-label="Home Menu">Home</a></li>
        <li><a href="#/favorite" aria-label="Favorite Menu" id="favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/rizqifauzulfitria/" aria-label="About Us Menu" target="_blank"
            rel="noopener">About
            Us</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define('app-bar', AppBar);
