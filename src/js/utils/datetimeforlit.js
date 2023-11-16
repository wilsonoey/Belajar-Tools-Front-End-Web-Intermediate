import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { LitElement } from "lit";

class DateTimeforLit extends LitElement {
  static get name() {
    return msg(`en`);
  }

  constructor() {
    super();

    // Panggil updateWhenLocaleChanges setiap kali bahasa berubah
    this._unsubscribe = updateWhenLocaleChanges(this, () => {
      this.requestUpdate('name', null);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribe();
  }
}

export default DateTimeforLit;
