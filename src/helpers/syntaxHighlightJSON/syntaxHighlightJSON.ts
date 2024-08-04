import { TJSONValue } from '@/interfaces/mostTypes'

export function syntaxHighlightJSON(json: TJSONValue): string {
    if (typeof json !== 'string') {
        json = JSON.stringify(json, undefined, 2)
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    return json.replace(
        /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\b\d+(\.\d+)?\b)/g,
        (match) => {
            let style = 'color: #1e90ff;' // default to number color
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    style = 'color: #ff6347;' // key color
                } else {
                    style = 'color: #ffa500;' // string color
                }
            } else if (/true|false/.test(match)) {
                style = 'color: #32cd32;' // boolean color
            } else if (/null/.test(match)) {
                style = 'color: #8a2be2;' // null color
            }
            return `<span style="${style}">${match}</span>`
        },
    )
}
