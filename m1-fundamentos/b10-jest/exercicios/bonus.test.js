const searchEmployee = require('./bonus.js');

describe('Testa a função searchEmployee', () => {
  test('Verifica se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  });

  describe('Testa as chaves do objeto', () => {
    test('Verifica se, passados parâmetros válidos (firstName), a função retorna o resultado esperado', () => {
      expect(searchEmployee('4678-2', 'firstName')).toMatch('Paul');
    });

    test('Verifica se, passados parâmetros válidos (lastName), a função retorna o resultado esperado', () => {
      expect(searchEmployee('4678-2', 'lastName')).toMatch('Dodds');
    });

    test('Verifica se, passados parâmetros válidos (specialities), a função retorna o resultado esperado', () => {
      expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
    });
  });

  describe('Testa ID válido + detail inválido', () => {
    test('Verifica se passado um ID válido e um detail inválido a função retorna um erro', () => {
      expect(() => {
        searchEmployee('4678-2', 'invalid detail');
      }).toThrow();
    });

    test('Verifica se passado um ID válido e um detail inválido, a função retorna o erro "Informação indisponível"', () => {
      expect(() => {
        searchEmployee('4678-2', 'invalid detail');
      }).toThrowError('Informação indisponível');
    });
  });

  describe('Testa ID inválido + detail válido', () => {
    test('Verifica se passado um ID inválido e um detail válido (firstName), a função retorna um erro', () => {
      expect(() => {
        searchEmployee('invalid id', 'firstName');
      }).toThrow();
    });

    test('Verifica se passado um ID inválido e um detail válido (lastName), a função retorna um erro', () => {
      expect(() => {
        searchEmployee('invalid id', 'lastName');
      }).toThrow();
    });

    test('Verifica se passado um ID inválido e um detail válido (specialities), a função retorna um erro', () => {
      expect(() => {
        searchEmployee('invalid id', 'specialities');
      }).toThrow();
    });

    test('Verifica se passado um ID inválido e um detail válido (firstName), a função retorna o erro "ID não identificada"', () => {
      expect(() => {
        searchEmployee('invalid id', 'firstName');
      }).toThrowError('ID não identificada');
    });

    test('Verifica se passado um ID inválido e um detail válido (lastName), a função retorna o erro "ID não identificada"', () => {
      expect(() => {
        searchEmployee('invalid id', 'lastName');
      }).toThrowError('ID não identificada');
    });

    test('Verifica se passado um ID inválido e um detail válido (specialities), a função retorna o erro "ID não identificada"', () => {
      expect(() => {
        searchEmployee('invalid id', 'specialities');
      }).toThrowError('ID não identificada');
    });
  });
});
