import {getMonth} from "../getmonth.js"

describe ('Тестирование функции getMonth', () => {
    it ('Если введено не число', () => {
        expect(getMonth("string")).toBe('Not Month')
    })
    it ('Если введено число болюше 12', () => {
        expect(getMonth(22)).toBe('Not Month')
    })
    it ('Если введено число в нужном диапазоне', () => {
        expect(getMonth(4)).toBe('April')
    })
})
