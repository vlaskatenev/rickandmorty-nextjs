import { TEpisode, IGetCharacter, IEpisodes } from '@/interfaces/interfaces'
import { MAIN_URL_RICK_AND_MORTY } from './variables'
import { requestBuilder } from './requestBuilder'
import { JSONObject } from '@/interfaces/mostTypes'
import { initialDataGetEpisodes } from './initialData'

// добавил JSONObject так как использую этот объект в функции для преобразования
export type TGetCharacter = IGetCharacter & JSONObject

export const getCharacter = (id: string): Promise<TGetCharacter> => requestBuilder({
    url: `${MAIN_URL_RICK_AND_MORTY}/character/${id}`,
})

export const getMultipleCharacters = (nums: number[]): Promise<TGetCharacter[]> => requestBuilder({
    url: `${MAIN_URL_RICK_AND_MORTY}/character/${nums}`,
})

export const getEpisodeCharacters = (id: string): Promise<TEpisode> => requestBuilder({
    url: `${MAIN_URL_RICK_AND_MORTY}/episode/${id}`,
})

type TGetEpisodes = IEpisodes & JSONObject
export const getEpisodes = (): Promise<TGetEpisodes> => requestBuilder(
    { url: `${MAIN_URL_RICK_AND_MORTY}/episode`, initialData: initialDataGetEpisodes },
)
