import Home from "../views/Home.js";
import Contact from "../views/Contact.js";
import Despre from "../views/Despre.js";
import Proiecte from "../views/Proiecte.js";
import ErrorPage from "../views/ErrorPage.js";
import politcaDeConfid from "../views/politcaDeConfid.js";
import { form } from "./form.js";

// to navigate throw arrows: <-, ->
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: 404, view: ErrorPage },
    { path: "/", view: Home },
    { path: "/despre", view: Despre },
    { path: "/proiecte", view: Proiecte },
    { path: "/contact", view: Contact },
    { path: "/politica-de-confidentialitate", view: politcaDeConfid },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true, 
    };
  }

  
  const view = new match.route.view();

  document.querySelector("#main-container").innerHTML = await view.getHtml();
  view.setHeaderVisibility()


  // console.log(match.route.view())
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  // we can access a link from page
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

window.onSubmitClick = () => {
  var formhandler = new form();
  var isOK = formhandler.validateInput();
  if (isOK) {
    formhandler.sendEmail();
  }
};




