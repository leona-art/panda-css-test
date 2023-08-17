import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from '~/components/button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant:{
      control:"select",
      options:["solid","outline"]
    },
    styleColor:{
      control:"select",
      options:["sky","red","violet","rose","pink","yellow","slate","teal","emerald"]
    },
    disabled:{
      control:"boolean"
    }
  },
  args:{
    disabled:false
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Solid: Story = {
  args: {
    variant:"solid",
    children:<>button</>
  },
};

export const Outline: Story = {
  args: {
    variant:"outline",
    children:<>button</>
  },
};


