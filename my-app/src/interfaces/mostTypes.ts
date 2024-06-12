// Универсальный тип для JSON 
export type TJSONValue = 
    | string 
    | number 
    | boolean 
    | null 
    | JSONObject 
    | JSONArray

// универсальный тип для объекта
export interface JSONObject {
    [key: string]: TJSONValue
}

// универсальный тип для массива
interface JSONArray extends Array<TJSONValue> {}

export type TcssObject = string | { [key: string]: boolean }