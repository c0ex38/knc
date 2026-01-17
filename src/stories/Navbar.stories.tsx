import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const meta = {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
