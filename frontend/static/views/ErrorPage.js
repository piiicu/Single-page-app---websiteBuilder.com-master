import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.headerIsVisible = false;
    this.setTitle("Error Page");

  }

  

  async getHtml() {
    return `
    <div class="error-page"></div>
        `;
  }
}
