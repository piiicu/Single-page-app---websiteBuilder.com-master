import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Despre")
    }

    async getHtml() {
        return `
        <div class="overlap">
        <h2 class="content-title">Despre Website Builder ...</h2>
        <div class="line"></div>
      </div>
      <div class="content-main">
        <div class="row">
          <div class="large-content">
            <p class="content">
              Fiind o companie tanara, incercam sa ne dezvoltam rapid acoperind
              arii noi de activitate. "Echipa noastra", daca putem spune asa,
              este formata dintr-un singur membru.
            </p>
            <p class="content">
              Scopul nostru nu este a produce bani, ci doar de a acumula cat mai
              multa experienta in acest domeniu. Iar acest lucru il putem
              realiza doar cu ajutorul clientilor nostri.
            </p>
            <p class="content">
              Dorim sa realizam pagini web pentru clientii care vor sa se
              promoveze si sa isi atinga potentialul maxim, creare site-urilor
              fiind <b>gratuita</b>.
            </p>
          </div>
          <div class="small-content">
            <img src="/static/images/despre5.jpg" alt="" />
          </div>
        </div>
        <div class="row padding">
          <div class="small-content name">
            <img src="static/images/SavuMarius.jfif" alt="" />
          </div>
          <div class="large-content">
            <p class="content">
              Sunt un web designer, frontend developer la inceput de cariera si am
              absolvit cursul de Frontend JavaScript Development
            </p>
          </div>
        </div> 
        <div class="images-gallery">
          <img src="static/images/despre2.jpg" alt="">
          <img src="static/images/despre1.jpg" alt="">
          <img src="static/images/despre3.jpg" alt="">
          <img src="static/images/despre4.jpg" alt="">
        </div>
      </div>
        `
    }
}