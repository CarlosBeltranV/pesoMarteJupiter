import { LitElement, html } from 'lit-element'

export class PesoMarteJupiter extends LitElement {

  static get properties() {
    return {
      usuario: { type: String },
      planeta: { type: Number },
      peso: { type: Number },
      g_tierra: { type: Number },
      g_marte: { type: Number },
      g_tierra: { type: Number },
      g_jupiter: { type: Number },
      peso_final: { type: Number },
      nombre: { type: String }
    }
  }

  constructor() {
    super()
    this.usuario = prompt("Cuál es tu peso?")
    this.planeta = parseInt(prompt("Elige tu planeta\n1 es marte, 2 es jupiter"))
    this.g_tierra = 9.8
    this.g_marte = 3.7
    this.g_jupiter = 24.8
    if (this.planeta == 1) {
      this.peso_final = this.peso * this.g_marte / this.g_tierra
      this.nombre = "Marte"
    } else if(this.planeta == 2) {
      this.peso_final = this.peso * this.g_jupiter / this.g_tierra
      this.nombre = "Jupiter"
    } else {
      this.peso_final = 1000000
      this.nombre = "Krypton"
    }
    this.peso_final = Math.round(this.peso_final)
  }

  render() {
    return html`
      <p>
        Tu peso en ${this.nombre} <strong>${this.peso_final} Kilos</strong>
      </p>
    `
  }

}