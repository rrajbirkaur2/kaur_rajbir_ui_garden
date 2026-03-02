import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    disabled: false, // default props for all stories
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }, // ✅ log clicks automatically
  },
};

// Default button story
export const Default = {
  args: {
    label: 'Click Me',
  },
};

// Disabled button story
export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};