export default {
  title: 'UI Components/Buttons/Text no MDX',
  argTypes: {
    label: { control: 'text' },
    buttonType: { control: {
      type: 'select',
      options: ['primary', 'secondary'],
    }},
    buttonSize: { control: {
      type: 'select',
      options: ['small'],
    }},
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => `
  <button
    type="button"
    class="button button--text button--${args.buttonType} button--${args.buttonSize}"
    ${args.disabled === true ? 'disabled' : ''}
  >
    ${args.label}
  </button>
`;

export const TextButtonNoMDX = Template.bind({});
TextButtonNoMDX.args = {
  label: 'Text button',
};
