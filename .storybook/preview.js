import { addDecorator, addParameters } from '@storybook/html';
const temas = {
  claro: {
    name: 'Claro',
  },
  escuro: {
    name: 'Escuro',
  },
};

addParameters({
  themes: {
    default: 'claro',
    list: Object.entries(temas).map(([id, { name }]) => ({
      id,
      title: name,
      class: id,
    })),
  },
});

addDecorator((storyFn, context) => {
  const story = storyFn();
  const temaSelecionado = temas[context.globals.theme];
  for (const [varName, varValue] of Object.entries(temaSelecionado)) {
    document.documentElement.style.setProperty(varName, varValue);
  }

  return story;
});
