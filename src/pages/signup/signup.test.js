const validaCadastro = require('./function');

test('Teste Cadastro', () => {
    expect(validaCadastro('Deidson@gmail.com', 'Senha')).toBe(true);
});