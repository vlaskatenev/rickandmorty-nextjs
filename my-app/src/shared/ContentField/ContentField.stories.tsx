import type { Meta, StoryObj } from '@storybook/react'
import { ContentField } from './ContentField'
import categories from '@/db/itemsMenu'

const meta = {
    title: 'component/ContentField',
    component: ContentField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        title: 'Rick and Morty',
        children: <p>Rick and Morty content</p>,
    },
} satisfies Meta<typeof ContentField>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryContentField: Story = {
    args: {
        title: 'Rick and Morty',
        children: <p>Rick and Morty content</p>,
    },
}
