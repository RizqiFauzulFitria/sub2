import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button,
    drawer,
    navbar,
    jumbo,
    content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._navbar = navbar;
    this._jumbo = jumbo;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      navbar: this._navbar,
      jumbo: this._jumbo,
      content: this._content,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
