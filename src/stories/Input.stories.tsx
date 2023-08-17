import type { Meta, StoryObj } from "storybook-solidjs";
import { Input } from "~/components/input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
    title: 'Component/input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        variant:{
            control:"radio",
            options:["outline","filled"]
        }
    },
    args:{
        placeholder:"placeholder",
        error:false
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Outline: Story = {
    args: {
        variant:"outline"
    },
};

export const Filled: Story = {
    args: {
        variant:"filled"
    },
};
export const Error: Story = {
    args: {
        error:true,
    },
};