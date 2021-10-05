const { getUserName } = require('./exercise2');

describe('Testa a função getUserName', () => {
  describe('Para quando o ID é encontrado', () => {
    it('getUserName deve retornar Mark para id 1', async () => {
      await expect(getUserName(1)).resolves.toMatch('Mark');
    });

    it('getUserName deve retornar Paul para id 2', async () => {
      await expect(getUserName(2)).resolves.toMatch('Paul');
    });
  });

  describe('Para quando o ID não é encontrado', () => {
    it('getUserName deve retornar um erro para IDs diferentes de 1 ou 2', async () => {
      await expect(getUserName(3)).rejects.toThrow();
    });

    it('getUserName deve retornar a seguinte mensagem de erro: "User with 3 not found."', async () => {
      await expect(getUserName(3)).rejects.toThrowError(
        new Error('User with 3 not found.')
      );
    });
  });
});
