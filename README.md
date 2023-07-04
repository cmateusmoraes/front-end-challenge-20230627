# Desafio Front-End Leadster | Mateus Moraes

 Meu portfolio: [http://mateus-moraes.vercel.app/](http://mateus-moraes.vercel.app/)

 Linkedin: [https://www.linkedin.com/in/cmateusmoraes/](https://www.linkedin.com/in/cmateusmoraes/)

<div align="center"><img src="https://front-end-challenge-20230627.vercel.app/image/mateusmoraes-leadster.gif" alt="Cereja do bolo."></div>

<br/>

Acesse: [https://front-end-challenge-20230627.vercel.app/](https://front-end-challenge-20230627.vercel.app/)

### Início do desenvolvimento 28/06/2023

## 🧑‍💻 Sobre o Projeto
Projeto desenvolvido seguindo o briefing da empresa, layout recebido em JPG. Alguns pontos a destacar:

<ul>
<li>SEO: Utilização de <strong>tags semânticas</strong> para o conteúdo, h1 para o texto principal, card com button > picture > img > figcaption, main, section, header, footer entre outras.</li>
<li><strong>Title e descriptions</strong> adequados, que mais relevância ao posicionamento do site em robôes de busca.</li>
<li>Implementação de <strong>Schema JSON-LD</strong> adequado para um Produto SaaS.</li>
<li>Preparação do site para compartilhamento amigável com inserção de <strong>medatados</strong> para Whatsapp, Facebook e Twitter com imagem de compartilhamento para ficar amigável.</li>
<li>Preocupação máxima com <strong>responsividade</strong>, o site tem que estar perfeito em dispositivos móveis, que são a grande maioria dos acessos.</li>
<li>Otimização de imagens, <strong>código limpo</strong> e de fácil entendimento, estrutura de pastas organizadas.</li>
<li>Preocupação com viewport inicial, adaptando o tamanho do Hero para que sempre deixe mostrando um pouco do conteúdo abaixo indicando a navegação.</li>
<li><strong>Página 404 customizada</strong> em caso de necessidades Veja: https://front-end-challenge-20230627.vercel.app/404)</li>
</ul>

## 🎨 Atenção aos detalhes e animações
As animações são muito importantes, com elas podemos direcionar 100% da atenção do usuário para o que importa.

Na animação que desenvolvi para o gráfico, segui uma história:

<ol>
<li>Inicialmente mostro a primeira barra com os leads de formulário.</li>
<li>Com um pouco de atraso subo a barra dos leads de Whatsapp, os smiles vão surgindo sem muito destaque.</li>
<li>A barra da Leadster é carregada com mais duração que as outras para dar mais evidência e o smile vem com mais força.</li>
<li>Só então, apresento a informação de 14 dias de gratuidade para destacá-la e forçar a leitura.</li>
<li>Por último o botão do CTA pulsa para convidar o usuário a ver a demonstração.</li>
</ol>

***

## 📱 Testes em dispositivos móveis.

Além de testar em diversos tipos de telas menores, também precisamos analisar em telas para tablets na vertical, celular na horizontal e em monitores widescreen com tamanho de tela reduzido (Notebooks).

<img src="https://front-end-challenge-20230627.vercel.app/image/teste-responsivo.jpg" alt="Testes mobile.">


## 📚 Stack de desenvolvimento e decisões

Segui a stack solicitada:

<ol>
<li>Next.js, última versão usando App router (experimental), ainda não usaria em um projeto em produção.</li>
<li>Styled Components, algumas incompatibilidades com a pasta app router, em breve devemos ter soluções.</li>
<li>Typescript, Eslint com rotina automatizada usando Husky para otimizar código antes do commit.</li>
<li>Dados extraídos do Canal da empresa, utilizando API do Youtube, adicionei um campo para categoria.</li>
<li>Axios e React Query para encapsular os dados, dados mockados em https://mocki.io/.</li>
<li>GSAP e CSS para animações.</li>
</ol>

## ⌚️ O Tempo
Infelizmente o tempo é nosso inimigo, descobri a vaga tarde e só consegui iniciar no dia 28/06, dividindo tempo com uma outra entrega (real) feita no dia 30/06, foi corrido. Tomei a decisão de focar mais nas animações e na fidelidadae do layout, não consegui finalizar o modal e testar a filtragem no limite mas seguirei fazendo pois quero deixar o teste disponível no meu Github.
Também não consegui implementar os testes automatizados com Cypress mas podem ver no meu portfolio pessoal, também aberto no Github.

## 💼 Agradecimento

Agradeço a oportunidade de participar do processo. Espero que gostem. 

<br/>

***

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Node.js 18.15.0+

* Projeto desenvolvido no Windows

<br/>

## 👇 Instalando Desafio Front-End Leadster

Para instalar o Desafio Front-End Leadster, siga estas etapas:

Linux e macOS:
```
npm install
npm run prepare
```

Windows:
```
npm install
npm run prepare
```

<br/>

## ☕ Usando Desafio Front-End Leadster

Para usar Desafio Front-End Leadster, siga estas etapas:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.

<br/>

Para compilar Desafio Front-End Leadster, siga estas etapas:

```
npm run build
```

<br/>

Esse é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).