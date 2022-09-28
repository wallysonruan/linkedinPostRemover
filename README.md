# linkedinPostRemover

Usarei este projeto para aprender a desenvolver extensões para o navegador Google Chrome, bem como para sanar uma necessidade de algumas das minhas coneções no LinkedIn.

## PROJETOS ALHEIOS SIMILARES

Procurei por extensões que resolvessem o mesmo problema ou similares, e encontrei os listados abaixo.

- [LinkOff - Filter and Customizer for LinkedIn™](https://chrome.google.com/webstore/detail/linkoff-filter-and-custom/maanaljajdhhnllllmhmiiboodmoffon?hl=pt-BR)
- [Feedblocker](https://chrome.google.com/webstore/detail/feedblocker/obehkecmojmkiikdffbmnobnnmgikkfa?hl=pt-BR)
- [SimplyFeed - LinkedIn Feed Filter](https://chrome.google.com/webstore/detail/simplyfeed-linkedin-feed/hpjgkdecioodgjhhdoagefbbdlljkpic?hl=pt-BR)

### COMPORTAMENTOS A ADICIONAR

- [X] 1

**Dado** que abro uma página do LinkedIn <br>
**Quando** eu clicar no ícone de uma peça de quebra-cabeça <br>
**Então** eu consigo ver o ícone do LPR

- [X] 2

**Dado** que eu fixei o ícone do LPR à minha barra de tarefas <br>
**E** estou na página Feed do LinkedIn 
**Quando** eu clicar nele <br>
**Então** eu consigo ver uma janelinha com um campo para escrever as palavras
**Mas** se eu abrir outra página que não seja a Feed do LinkedIn
**Então** eu vejo apenas uma mensagem dizendo que não estou na página Feed do LinkedIn

- [X] 3

**Dado** que eu abri a janelinha do LPR <br>
**Quando** eu escrever uma palavra e apertar `ENTER` <br>
**Ou** clicar no botão `+` <br>
**Então** eu consigo ver a palavra escolhida listada abaixo

- [ ] 4

**Dado** que eu abri a janelinha do LPR <br>
**Quando** olhar para o rodapé <br>
**Então** eu consigo ver os ícones do Github e Linkedin

- [ ] 5

**Dado** que eu cliquei no ícone do GitHub <br>
**Então** eu sou redirecionado para a página do repositório da extensão

- [ ] 6

**Dado** que eu cliquei no ícone do LinkedIn <br>
**Então** eu sou redirecionado para a página do perfil do desenvolvedor

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