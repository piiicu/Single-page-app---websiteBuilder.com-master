export default class {

    headerIsVisible = true;
    constructor() {

    }

    setTitle(title) {
        document.title = title
    }

    async getHtml() {
        return ""
    }

    setHeaderVisibility() {
        document.getElementById('header').style.display = this.headerIsVisible ? 'block' : 'none';
    }
}