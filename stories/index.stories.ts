import { html, TemplateResult } from 'lit';
import '../src/poc-webcomponents.js';

export default {
  title: 'PocWebcomponents',
  component: 'poc-webcomponents',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
  decorators: [
    (story: () => TemplateResult) =>
      html`<div style="background-color: #061824; width: 100vw; height: 100vh;">
        ${story()}
      </div>`,
  ],
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  counter = 0,
  textColor,
  slot,
}: ArgTypes) => html`
  <poc-webcomponents
    style="--poc-webcomponents-text-color: ${textColor || 'black'}"
    .counter=${counter}
  >
    ${slot}
  </poc-webcomponents>
`;

export const Regular = Template.bind({});
