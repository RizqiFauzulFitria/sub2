const DrawerInitiator = {
  init({
    button,
    drawer,
    navbar,
    jumbo,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, navbar);
    });

    jumbo.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, navbar);
    });
  },

  _toggleDrawer(event, drawer, navbar) {
    event.stopPropagation();
    drawer.classList.toggle('nav-active');
    navbar.classList.toggle('active');
  },

  _closeDrawer(event, drawer, navbar) {
    event.stopPropagation();
    drawer.classList.remove('nav-active');
    navbar.classList.remove('active');
  },
};

export default DrawerInitiator;
