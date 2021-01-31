class CodePen extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.load();

    // React is bollocks
    setTimeout(() => {
      this.render();
    }, 10);
  }

  load() {
    if (window.CODEPEN_LOADED) {
      return;
    }

    window.CODEPEN_LOADED = true;

    setTimeout(() => {
      const scriptElement = document.createElement('script');

      scriptElement.src = 'https://static.codepen.io/assets/embed/ei.js';
      document.head.appendChild(scriptElement);
    }, 1000);
  }

  render() {
    this.innerHTML = `
      <p data-height="600" data-theme-id="38982" data-slug-hash="${this.getAttribute(
        'id'
      )}" data-default-tab="${this.getAttribute(
      'view'
    )}" data-user="piccalilli" data-pen-title="${this.getAttribute(
      'title'
    )}" class="codepen">See the Pen <a href="https://codepen.io/piccalilli/pen/${this.getAttribute(
      'id'
    )}/">${this.getAttribute(
      'title'
    )}</a> by Andy Bell (<a href="https://codepen.io/piccalilli">@piccalilli</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    `;
  }
}

if ('customElements' in window) {
  customElements.define('code-pen', CodePen);
}

export default CodePen;
