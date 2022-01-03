class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="skip" class="content">
      <div class="latest mb-5">
        <h2 class="latest_headline">Look for Our Beloved Restaurants</h2>
        <div class="container-btn">
          <button class="btn text-white">Restaurant</button>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('skip-content', SkipContent);
