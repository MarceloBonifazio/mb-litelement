import { LitElement, html, css } from 'lit-element';

class App extends LitElement {
  static get styles() {
    return css`div {color: blue}`;
  }

  render() {
    return html`<div>Teste</div>`;
  }
}

customElements.define('my-app', App);
