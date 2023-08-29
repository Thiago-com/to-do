export default class DisplayToday {
    constructor(element) {
        this.element = document.querySelector(element);
        this.date = new Date();
        this.options = { day: "numeric", month: "numeric" };
    }

    updateElement() {
        this.element.innerText = new Intl.DateTimeFormat(
            "en-us",
            this.options,
        ).format(this.date);
    }

    init() {
        if (this.element) this.updateElement();
        return this;
    }
}