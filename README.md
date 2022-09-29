# linkedinPostRemover

Usarei este projeto para aprender a desenvolver extensões para o navegador Google Chrome, bem como para sanar uma necessidade de algumas das minhas coneções no LinkedIn.

Usarei a metodologia *Behavior Driven Development (BDD)*, Desenvolvimento Guiado por Comportamento em Português. Listarei os comportamentos desejados [neste arquivo](/Comportamentos.md).

## PROJETOS ALHEIOS SIMILARES

Procurei por extensões que resolvessem o mesmo problema ou similares, e encontrei os listados abaixo.

- [LinkOff - Filter and Customizer for LinkedIn™](https://chrome.google.com/webstore/detail/linkoff-filter-and-custom/maanaljajdhhnllllmhmiiboodmoffon?hl=pt-BR)
- [Feedblocker](https://chrome.google.com/webstore/detail/feedblocker/obehkecmojmkiikdffbmnobnnmgikkfa?hl=pt-BR)
- [SimplyFeed - LinkedIn Feed Filter](https://chrome.google.com/webstore/detail/simplyfeed-linkedin-feed/hpjgkdecioodgjhhdoagefbbdlljkpic?hl=pt-BR)

### ROTEIRO

#### PRODUTO MÍNIMO VIÁVEL (MVP)
- [X] Criar o manifesto e adicionar as configurações básicas (versão, nome, descrição, ...)
- [X] Adicionar um pop up
- [X] Adicionar o campo de input e botão de submit
- [X] Adicionar elemento para conter a lista das palavras
- [X] Adicionar função que mapeia as páginas
- [X] Adicionar UI para quando estiver na página "Feed" do LinkedIn
- [X] Adicionar UI para quando não estiver na página "Feed" no LinkedIn
- [X] Adicionar lógica ligada ao botão de adição de palavras que quando apertado irá adicionar a palavra à lista de palavras
  - [ ] Adicionar lista de palavras no STORAGE do Chrome
  - [ ] Adicionar coletador da lista do STORAGE
- [ ] Adicionar um iterador que, quando uma página do LinkedIn for aberta, irá percorrer a lista de posts carregados e verificar se contêm alguma das palavras da lista de palavras escolhidas
  - [ ] Adicionar cenário TRUE, que removerá o post da lista 

#### PÓS MVP
- [ ] Adicionar o ícone da extensão
- [ ] Criar formatação que transformará as palavras em tags
- [ ] Adicionar opção de edição de palavra escolhida
- [ ] Adicionar opção de exclusão de palavra escolhida
- [X] Adicionar um rodapé contendo links para o repositório da extensão e para o perfil do LinkedIn do desenvolvedor
- [ ] Adicionar redirecionador para reagir aos cliques nos ícones do GitHub e do LinkedIn
  - [ ] Verificar quais permissões são necessárias para abrir uma nova página
- [ ] Adicionar Toggler para ativar e desativar a extensão