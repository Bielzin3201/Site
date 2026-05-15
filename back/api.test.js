const validaApi = require('./function');

test('Teste Cadastro', () => {
    expect(validaApi('Deidson@gmail.com', 'Senha')).toBe(true);
});