import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class PocWebcomponents extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--poc-webcomponents-text-color, #000);
    }

    .contador {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: #071f30;
      width: 120px;
      border-radius: 5px;
    }

    button {
      padding: 5px 10px;
      color: #1b75d6;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #071f30;
      font-size: 30px;
    }

    button:hover {
      background-color: #103153;
    }

    .button-disabled {
      color: #3e546d;
      cursor: default;
    }

    span {
      color: white;
      font-size: 20px;
      font-weight: lighter;
    }
  `;

  @property({ type: Number }) counter = 0;

  __increment() {
    this.counter += 1;
  }

  __decrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

  render() {
    const isCounterZero = this.counter === 0;
    return html`
      <div class="contador">
        <button
          @click=${this.__decrement}
          ?disabled=${isCounterZero}
          class=${isCounterZero ? 'button-disabled' : ''}
        ></button>
        <span>${this.counter}</span>
        <button @click=${this.__increment}>+</button>
      </div>
    `;
  }
}
