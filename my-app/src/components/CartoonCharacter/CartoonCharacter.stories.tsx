import type { Meta, StoryObj } from '@storybook/react'
import { CartoonCharacter } from './CartoonCharacter'
import { mockDataCartoonCharacter } from '../../../mockData/CartoonCharacter.mockData'

const meta = {
    title: 'component/CartoonCharacter',
    component: CartoonCharacter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        character: mockDataCartoonCharacter,
        isSmallDescription: true,
        width: 200,
        height: 200,
    },
} satisfies Meta<typeof CartoonCharacter>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryCartoonCharacter: Story = {
    args: {
        character: mockDataCartoonCharacter,
        isSmallDescription: false,
        width: 250,
        height: 250,
    },
}

export const SmallCartoonCharacter: Story = {
    args: {
        character: mockDataCartoonCharacter,
        isSmallDescription: true,
        width: 200,
        height: 200,
    },
}
