const validaLogin = require('./function');

test('Teste LOGIN', () => {
    expect(validaLogin('Deidson', 'Senha')).toBe(true);
});