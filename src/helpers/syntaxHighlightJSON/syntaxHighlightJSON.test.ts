import { syntaxHighlightJSON } from './syntaxHighlightJSON'

describe('shared/lib/syntaxHighlightJSON', () => {
    test('contains expected highlighted JSON string', () => {
        const result = syntaxHighlightJSON({ param1: 'param1' })
        const expectedSubstring = '<span style="color: #ff6347;">"param1":</span> <span style="color: #ffa500;">"param1"</span>'

        expect(result).toContain(expectedSubstring)
    })
})
