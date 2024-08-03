import type { Meta, StoryObj } from '@storybook/react'
import { CharacterInformation } from './CharacterInformation'
import { mockDataCartoonCharacter } from '../../../mockData/CartoonCharacter.mockData'

const meta = {
    title: 'component/CharacterInformation',
    component: CharacterInformation,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        character: mockDataCartoonCharacter,
    },
} satisfies Meta<typeof CharacterInformation>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryCharacterInformation: Story = {
    args: {
        character: mockDataCartoonCharacter,
    },
}
