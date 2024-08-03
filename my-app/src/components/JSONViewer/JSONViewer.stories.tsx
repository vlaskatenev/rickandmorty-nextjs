import type { Meta, StoryObj } from '@storybook/react'
import { JSONViewer } from './JSONViewer'
import { mockDataCartoonCharacter } from '../../../mockData/CartoonCharacter.mockData'

const meta = {
    title: 'component/JSONViewer',
    component: JSONViewer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        json: mockDataCartoonCharacter,
    },
} satisfies Meta<typeof JSONViewer>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryJSONViewer: Story = {
    args: {
        json: mockDataCartoonCharacter,
    },
}
