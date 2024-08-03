// Универсальный тип для JSON
export type TJSONValue =
| string
| number
| boolean
| null
| { [key: string]: TJSONValue }
| TJSONValue[];

// универсальный тип для объекта
export interface JSONObject {
    [key: string]: TJSONValue
}

export type TcssObject = string | { [key: string]: boolean }
