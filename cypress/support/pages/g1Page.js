// Arquivo com a implementação dos métodos da página do G1
const url = 'https://g1.globo.com/';
const permitir = "#cookie-banner-lgpd > div > div.cookie-banner-lgpd_button-box";
const menu = '#header-produto > div.gui-color-primary-bg.header-principal.header-navegacao-color > div > div > div.menu-area > div';
const menuJogos = '#menu-1-jogos > a > span.menu-item-title';
const menuTodosJogos = "#menu-2-todos-os-jogos > a > span.menu-item-title";
const labelPageJogos = "#header-produto > div.gui-color-primary-bg.header-principal.header-navegacao-color > div > div > span.header-title > div > a";


class G1Page {

    static acessarPagina() {
        cy.visit(url);
        //cy.reload();
    }

    static acessaMenuTodosJogos() {
        //cy.pause();
        cy.wait(2000);
        cy.get(permitir).click();
        cy.get(menu).click();
        cy.wait(1000);
        cy.get(menuJogos).click();
        cy.wait(1000);
        cy.get(menuTodosJogos).click();
        cy.get(labelPageJogos).should('have.text', 'Jogos');   
    }
}
  
  export default G1Page;
  