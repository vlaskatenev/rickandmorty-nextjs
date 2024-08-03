import type { Meta, StoryObj } from '@storybook/react'
import { EpisodeList } from './EpisodeList'
import { mockDataCartoonCharacter } from '../../../mockData/CartoonCharacter.mockData'

const meta = {
    title: 'component/EpisodeList',
    component: EpisodeList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        episodes: mockDataCartoonCharacter.episode,
        title: `Серии с ${mockDataCartoonCharacter.name}`,
    },
} satisfies Meta<typeof EpisodeList>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryEpisodeList: Story = {
    args: {
        episodes: mockDataCartoonCharacter.episode,
        title: `Серии с ${mockDataCartoonCharacter.name}`,
    },
}
