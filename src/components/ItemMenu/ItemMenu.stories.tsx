import type { Meta, StoryObj } from '@storybook/react'
import ItemMenu from './ItemMenu'
import { mockDataCartoonCharacter } from '../../../mockData/CartoonCharacter.mockData'
import categories from '@/db/itemsMenu'

const meta = {
    title: 'component/ItemMenu',
    component: ItemMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        id: 1,
        name: 'Episodes',
        slug: 'episodes',
        type: '',
        icon: '/assets/svgfoemenu.svg',
        hover: '#84EC53',
        altText: 'Описание',
    },
} satisfies Meta<typeof ItemMenu>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryItemMenu: Story = {
    args: {
        id: 1,
        name: 'Episodes',
        slug: 'episodes',
        type: '',
        icon: '/assets/svgfoemenu.svg',
        hover: '#84EC53',
        altText: 'Описание',
    },
}
