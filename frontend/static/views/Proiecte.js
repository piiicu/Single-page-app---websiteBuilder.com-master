import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Proiecte");
  }

  async getHtml() {
    return `
  <div class="overlap">
    <h2 class="content-title">
          Portofoliul nostru ...
    </h2>
    <div class="line"></div>
  </div>
  <div class="content-main">
    <div class="article">
      <p class="content">
        Proiecte realizate de mine in <b>Wordpress</b>.
      </p>
      <div class="images-project">
        <a href="https://asociatiastefanrazvan.ro/" target="_blank"><img src="static/images/cropped-Logo-Asociatie-SR.png" alt="Asociatia Stefan si Razvan"></a>
        <a href="https://centru-echitatie.ro/" target="_blank"><img src="static/images/Centru-echitatie-Naum.jpg" alt="Centru Echitatie Naum"></a>
        <a href="https://maral.createdesign.ro/" target="_blank"><img src="static/images/Maral.png" alt="Maral"></a>
        <a href="https://ebook.libermundi.ro/" target="_blank"><img src="static/images/Ebook-Libermundi.jpg" alt="Ebook-Libermundi"></a>
      </div>
      <p class="content">
        Proiecte viitoare.
      </p>
      <div class="images-project">
        <img src="static/images/proiecte5.jpg" alt="">
        <img src="static/images/proiecte10.jpg" alt="">
        <img src="static/images/proiecte3.jpg" alt="">
        <img src="static/images/proiecte4.jpg" alt="">
        <img src="static/images/proiecte1.jpg" alt="">
        <img src="static/images/proiecte6.jpg" alt="">
        <img src="static/images/proiecte7.jpg" alt="">
        <img src="static/images/proiecte8.jpg" alt="">
        <img src="static/images/proiecte9.jpg" alt="">
        <img src="static/images/proiecte2.jpg" alt="">
        <img src="static/images/proiecte11.jpg" alt="">
        <img src="static/images/proiecte12.jpg" alt="">
      </div>
      <p class="content content-style">
        Fa parte din portofoliul nostru, va asteptam!
      </p>
    </div>
  </div>
        `;
  }
}
