class JumboEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron">
      <div class="caption-text">
        <h1 class="hero_tittle">Esploor Apps</h1>
        <p class="hero_tagline">Esploor food for pleasure</p>
      </div>
    </section>`;
  }
}

customElements.define('jumbo-el', JumboEl);
