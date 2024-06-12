import { IGetCharacter } from "@/interfaces/interfaces"
import { MAIN_URL_RICK_AND_MORTY } from "./variables"
import { requestBuilder } from "./requestBuilder"
import { JSONObject } from "@/interfaces/mostTypes"

// Функция запрос на сервер от куда приходят неизвестные данные.
// Можно передавать дженерики <Req, Res> как аргументы и переиспользовать
// Насколько понял главное условие - они не были в функции определены явно 
// и не было какогото значения по которому можно было бы понять к какому типу относятся данные
// Идеальный пример с промисом:
// export const getCharacter = async <Req, Res>(id: Req): Promise<Res> => {
//     const character: Res = await fetch(`${MAIN_URL_RICK_AND_MORTY}/character/${id}`)
//     .then((res) => res.json())
//     return character
// } 

// добавил JSONObject так как использую этот объект в функции для преобразования
export type TGetCharacter = IGetCharacter & JSONObject

export const getCharacter = (id: string): Promise<TGetCharacter> => requestBuilder({
    url: `${MAIN_URL_RICK_AND_MORTY}/character/${id}`
})

export const getMultipleCharacters = (nums: number[]): Promise<TGetCharacter[]> => requestBuilder({
    url: `${MAIN_URL_RICK_AND_MORTY}/character/1,${nums}`
})