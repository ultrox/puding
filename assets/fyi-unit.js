class FYIUnit extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <aside class="[ fyi-unit ] [ gap-top-800 ]" aria-label="For your information">
        <p aria-hidden="true" class="[ fyi-unit__label ] [ font-serif color-secondary text-700 ]">FYI</p>
        <div class="flow">
          ${this.innerHTML}
        </div>
      </aside>
    `;
  }
}

if ('customElements' in window) {
  customElements.define('fyi-unit', FYIUnit);
}

export default FYIUnit;
