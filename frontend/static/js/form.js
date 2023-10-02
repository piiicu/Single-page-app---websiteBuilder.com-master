export class form {
  static submitBtn;
  static username;
  static phone;
  static email;
  static textarea;

  constructor() {
    form.username = document.getElementById("username");
    form.phone = document.getElementById("telefon");
    form.email = document.getElementById("txtEmail");
    form.textarea = document.getElementById("textarea");
  }

  validateInput() {
    const usernameValue = form.username.value?.trim() ?? "";
    const phoneValue = form.phone.value?.trim() ?? "";
    const emailValue = form.email.value?.trim() ?? "";
    const textareaValue = form.textarea.value?.trim() ?? "";

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var valid = true;
    // validate name
    if (usernameValue === "") {
      this.onError(form.username, "numele este obligatoriu");
      valid = false;
    } else {
      this.onSuccess(form.username);
    }

    // validate phone
    if (phoneValue == "") {
      this.onError(form.phone, "numarul de telefon este obligatoriu");
      valid = false;
    } else if (isNaN(phoneValue)) {
      this.onError(form.phone, "doar numere fara caractere");
      valid = false;
    } else if (!phoneValue.match(phoneRegex)) {
      this.onError(form.phone, "numarul de telefon nu este valid");
      valid = false;
    } else {
      this.onSuccess(form.phone);
    }

    // validate email
    if (emailValue === "") {
      this.onError(form.email, "email-ul este obligatoriu");
      valid = false;
    } else if (!emailValue.match(emailRegex)) {
      this.onError(form.email, "email-ul nu este valid");
      valid = false;
    } else {
      this.onSuccess(form.email);
    }

    // validate message
    if (textareaValue === "") {
      this.onError(form.textarea, "va rog lasati un mesaj");
      valid = false;
    } else {
      this.onSuccess(form.textarea);
    }

    return valid;
  }

  onSuccess(element) {
    let parent = element.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
  }

  onError(element, message) {
    let parent = element.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
  }

  sendEmail() {
    let params = {
      name: document.getElementById("username").value,
      email: document.getElementById("txtEmail").value,
      phone: document.getElementById("telefon").value,
      message: document.getElementById("textarea").value,
    };

    const serviceID = "service_2ocx2nw";
    const templateID = "template_17brr5u";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("username").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("telefon").value = "";
        document.getElementById("textarea").value = "";
        console.log(res);
        alert("Your message sent successfuly");
      })
      .catch((err) => console.log(err));
  }
}
