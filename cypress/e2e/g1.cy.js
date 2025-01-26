// cypress/integration/teste.spec.js
import G1Page from "../support/pages/g1Page";

describe('G1', () => {  
  it('Acessar o G1', () => {
    G1Page.acessarPagina();
    G1Page.acessaMenuTodosJogos();
  });

});
