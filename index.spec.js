

describe('#Prueba', () => {
    describe('suma', () => {
        it('suma 2 numeros', () => {
            const suma = (a, b) => {
                return a + b;
            }

            expect(suma(2,2)).toEqual(4)
        })
    })
})
