import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <div class="overlap">
    <h2 class="content-title">
      Servicii complete de web design si web development
    </h2>
    <div class="line"></div>
  </div>
  <div class="content-main">
    <div class="article">
      <p class="content">
        A venit momentul sa faci pasul cel mare si sa iti cresti afacerea
        cu responsabilitate. Orice afacere necesita o prezenta online
        optimizata adecvat, bazata pe studii de piata si pe un mesaj
        concis transmis potentialilor clienti din piata.
      </p>
      <p class="content">
        Suntem la incepurile noastre in acest domeniu si de aceea vrem sa
        realizam, alaturi de voi, site-uri <b>GRATIS</b>, in vederea obtinerii a
        cat mai multa experienta.
      </p>
      <p class="content">
        Design-ul este cel mai important factor atunci cand un utilizator
        paseste pentru prima oara pe un site web. Alege sa fii unic, alege
        un web site atractiv si modern.
      </p>
      <p class="content">
        Alaturi de noi iti poti duce afacerea la cele mai inalte nivele,
        folosind ultimile tehnologii din domeniu
        <i>(HTML, CSS, JavaScript ...).</i>
      </p>
    </div>
    <div class="icon-content">
      <img src="static/images/html-logo.png" alt="html_logo">
      <img src="static/images/css-logo.png" alt="css_logo">
      <img src="static/images/js-logo.png" alt="js_logo">
      <img src="static/images/mysql-logo.jpg" alt="mysql_logo">
      <img src="static/images/WordPress-logo2.png" alt="wordpress_logo">
    </div>
  </div>
        `;
  }
}
