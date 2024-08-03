import type { Meta, StoryObj } from '@storybook/react'
import SlideMenu from './SlideMenu'
import categories from '@/db/itemsMenu'

const meta = {
    title: 'component/SlideMenu',
    component: SlideMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        categories,
    },
} satisfies Meta<typeof SlideMenu>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimarySlideMenu: Story = {
    args: {
        categories,
    },
}
