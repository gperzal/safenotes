const { getWelcomeMessage } = require('./utils');

test('Mensaje de bienvenida correcto', () => {
    expect(getWelcomeMessage()).toBe('Notas seguras (o no tan seguras)');
});
