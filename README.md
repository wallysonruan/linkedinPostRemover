### ROTEIRO

#### PRODUTO MÍNIMO VIÁVEL (MVP)
- [X] Criar o manifesto e adicionar as configurações básicas (versão, nome, descrição, ...)
- [X] Adicionar um pop up
- [X] Adicionar o campo de input e botão de submit
- [X] Adicionar elemento para conter a lista das palavras
- [ ] Adicionar gatilho que mapeia as páginas e avisa quando o usuário acessar o LinkedIn
  - [ ] Adicionar mapeador
  - [ ] Adicionar mensagem a ser enviada quando a escuta for ativada
- [ ] Adicionar receptor de mensagem vinda do `Background.js`
- [ ] Adicionar lógica ligada ao botão de adição de palavras que quando apertado irá adicionar a palavra à lista de palavras
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