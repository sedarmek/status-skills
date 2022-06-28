const {minutesToHours, puTwoDigits} = require('./prueba')

describe('convierte minutos a horas decimales',()=>{
    test('0 minutos deberia ser "0.00" horas', ()=>{
        expect(minutesToHours(0)).toBe("0.00")
    })
    test('30 minutos deberia ser "0.50" horas', ()=>{
        expect(minutesToHours(30)).toBe("0.50")
    })
    test('60 minutos deberia ser "1.00" horas', ()=>{
        expect(minutesToHours(60)).toBe("1.00")
    })
    test('90 minutos deberia ser "1.50" horas', ()=>{
        expect(minutesToHours(90)).toBe("1.50")
    })
})

describe('convierte digito de entrada a dos digitos',()=>{
    test('1 debe ser 01', ()=>{
        expect(puTwoDigits(1)).toBe('01')
    })
    test('9 debe ser 09', ()=>{
        expect(puTwoDigits(9)).toBe('09')
    })
    test('10 debe ser 10', ()=>{
        expect(puTwoDigits(10)).toBe('10')
    })
    test('19 debe ser 19', ()=>{
        expect(puTwoDigits(19)).toBe('19')
    })
})