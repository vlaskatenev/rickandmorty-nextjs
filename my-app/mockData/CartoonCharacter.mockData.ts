import { IGetCharacter } from '@/interfaces/interfaces'
import { JSONObject } from '@/interfaces/mostTypes'

export const mockDataCartoonCharacter: IGetCharacter & JSONObject = {
    id: 258,
    name: 'Pawnshop Clerk',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: {
        name: 'unknown',
        url: '',
    },
    location: {
        name: 'Pawn Shop Planet',
        url: '/',
    },
    image: '',
    episode: ['https://rickandmortyapi.com/api/testData'],
    url: '/',
    created: '2017-12-31T13:30:33.611Z',
}
