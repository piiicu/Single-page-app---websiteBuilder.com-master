import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact");
  }


  async getHtml() {
    return `
    <div class="overlap">
    <h2 class="content-title">Contact</h2>
    <div class="line"></div>
  </div>
  <div class="content-main">
    <div class="row contact-reverse">
      <div class="article-contact">
        <p class="content">
          Daca doriti sa ne contacti o puteti face prin intermediul
          formularului sau a datelor de contact.
        </p>
        <p id="phone"><b>Telefon:</b> +(40) 722 590 167</p>
        <p id="email"><b>Email:</b> websitebuilder37@gmail.com</p>
      </div>
      <div class="image-contact">
        <img src="static/images/contact4.jpg" alt="contact" />
      </div>
    </div>
    <div class="contact-map-form">
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5416527949897!2d26.16168733089055!3d44.4220503328886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1feba46301ccb%3A0x5b533d5c82e80fca!2sBloc%20B3%20Bis%2C%20Bulevardul%20Nicolae%20Grigorescu%2018%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1664792999519!5m2!1sen!2sro"
            width="500"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="contact-form">
          <form id="form">
            <div class="form-control">
              <label for="username" name="username">Nume:</label>
              <input type="text" name="username" id="username" />
              <small></small>
            </div>
            <div class="form-control">
              <label for="telefon" name="telefon">Telefon:</label>
              <input type="tel" name="telefon" id="telefon" />
              <small></small>
            </div>
            <div class="form-control">
              <label for="email">Email:</label>
              <input type="text" name="email" id="txtEmail" />
              <small></small>
            </div>
            <div class="form-control">
              <label for="textarea">Mesajul tau:</label><br />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
              ></textarea>
              <small></small>
            </div>
            <button type="button" onclick="onSubmitClick()" class="contact-btn">Trimite mesajul</button>
          </form>
        </div>
      </div>
  </div>
        `;
  }
}


