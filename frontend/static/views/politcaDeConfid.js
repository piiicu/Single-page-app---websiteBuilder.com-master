import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Politica de confidentialitate");
  }

  async getHtml() {
    return `
    <div class="overlap">
        <h2 class="content-title">Politica de confidentialitate</h2>
        <div class="line"></div>
    </div>
    <div class="content-main">
        <div class="article-confidentiality">
        <p class="content-confidentiality">
        <b>WEBSITE BUILDER</b> garanteaza securitatea si confidentialitatea
        datelor gazduite si transmise prin sistemul sau informatic. Aceste
        informatii vor putea fi folosite de catre
        <b>WEBSITE BUILDER</b> pentru a trimite utilizatorului confirmarea
        comenzilor, diverse oferte speciale, promotii, etc. numai in baza
        consimtamantului persoanei vizate.
        </p>
        <p class="content-confidentiality">
        Furnizarea datelor personale catre <b>WEBSITE BUILDER</b> nu implica
        obligativitate din partea utilizatorilor, iar acestia pot refuza
        furnizarea acestor date in orice circumstante si pot solicita in mod
        gratuit stergerea acestora din baza de date.
        </p>
      <p class="content-confidentiality">
        <b>WEBSITE BUILDER</b>, proprietar al si platformei online, nu
        intervine direct sau indirect asupra bazelor de date unde sunt
        stocate informatiile despre clienti.
        </p>
        <p class="content-confidentiality">
        Conform cerintelor Legii nr. 679/2016 (GDPR) pentru protectia
        persoanelor cu privire la prelucrarea datelor cu caracter personal,
        si protectia vietii private in sectorul comunicatiilor electronice,
        <b>WEBSITE BUILDER</b> are obligatia de a administra in conditii de
        siguranta si numai pentru scopurile specificate, datele personale
        furnizate.
        </p>
        <p class="content-confidentiality">
        In acest sens, <b>WEBSITE BUILDER</b> a elaborat o serie de masuri
        tehnice si organizatorice pentru prevenirea riscurilor ce pot aparea
        in cadrul prelucrarii datelor cu caracter personal.
        </p>
        <p class="content-confidentiality">
        Prelucrarea datelor cu caracter personal in interiorul organizatiei
        este conditionata de o serie de masuri tehnice si organizatorice in
        vederea securizarii acestora.
        </p>
        <p class="content-confidentiality">
        Aceste masuri au rolul de a proteja informatiile la nivelul
        organizatiei impotriva incidentelor de securitate.
        </p>
        <p class="content-confidentiality"><b>Masuri organizatorice:</b></p>
        <ul class="list-conf">
            <li>
          Distrugerea documentelor care nu mai sunt necesare (notite,
          facturi eronate, etc) utilizand un distrugator de documente la
          dispozitia responsabilului de proces;
            </li>
            <li>
          Eliminarea riscului generat de factorul uman prin interzicerea
          prelucarii de informatii in afara platformei securizate cu
          exceptia intocmirii notelor de transport in platforma firmei de
          curierat, care, este de asemenea, un mediu securizat;
            </li>
            <li>
          Adoptarea masurilor de securitate fara a face diferentierea intre
          tipurile de clienti (nou/ existent / potential);
            </li>
            <li>
          Adoptarea unei politici interne de verificare a proceselor si al
          prelucrarilor in momentul punerii in livrare a produsului sau
          preluarii informatiilor cu privire la o comanda sau posibila
          oferta;
            </li>
            <li>
          Evitarea diferentierii intre clienti prin mecanisme ce pot profila
          in mod pozitiv sau negativ persoana vizata. Din acest motiv , nu
          solicitam date cu caracter personal orientarea sexuala, interesele
          sexuale, sexul , religia, apartenenta la miscari sau grupari, etc.
          Clientii sunt liberi sa comande si sa aleaga ceea ce isi doresc.
          Prin aceasta masura, consideram ca respectam integritatea
          persoanei si evitam orice urma de analiza/profilare pe baza
          acestor criterii.
            </li>
            <li>
          Instruirea responsabilului de proces cu privire la necesitatea
          notificarii in cazul unui incident de securitate major.
            </li>
            <li>
          Interzicerea prelucrarii datelor in afara platformei prin
          gestionarea comenzilor direct in interfata de utilizare a
          platformei, nefiind necesara prelucrarea datelor in alte medii
          nesecurizate si vulnerabile.
            </li>
        </ul>
        <p class="content-confidentiality">
        Din punct de vedere al prelucrarii, in cadrul <b>WEBSITE BUILDER</b>,
        datele cu caracter personal sunt prelucrate doar pentru scopurile
        pentru care s-a obtinut consimtamantul persoanelor vizate, inclusiv
        pentru scopurile paralele si pentru incheierea unui contract sau
        livrarea unui produs catre client, cerut de acesta.
        </p>
        <p class="content-confidentiality">
        Avand in vedere ca aceasta organizatie isi desfasoara activitatea in
        cea mai mare parte in mediul online, prelucrarea datelor cu caracter
        personal ale clientilor sunt transmise online prin intermediul
        aplicatiilor si al platformei pe care se solicita comenzi si cereri
        de oferta. Datele colectate sunt minimizate si sunt in legatura
        directa cu scopul pentru care s-a obtinut consimtamant si sunt
        necesare pentru a contacta clientul in cazul unei cereri de oferta
        sau pentru a livra si pune la dispozitie produsul/serviciul comandat
        conform cerintelor sau returul acestuia.
        </p>
        <p class="content-confidentiality">
        Prin intermediul platformei online sunt prelucrate urmatoarele date
        cu caracter personal:
        </p>
        <ul class="list-conf">
            <li>nume si prenume</li>
            <li>email</li>
            <li>telefon</li>
        </ul>
        <p class="content-confidentiality">
        Scopul colectarii datelor este de a factura comenzile, de a trimite
        corespondenta si de a onora comenzile. Refuzul dumneavoastra de a
        furniza datele, determina imposibilitatea plasarii pe acest site a
        comenzii dvs. si prelucrarii ei, conform cerintelor, precum si
        imposibilitatea indeplinirii scopului.
        </p>
        </div>
    </div>
        `;
  }
}
