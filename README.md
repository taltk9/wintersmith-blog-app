# Wintersmith Blog App

Esta é uma estrutura pré-configurada de blog, construida com o gerador de conteúdo estático [wintersmith](https://github.com/jnordberg/wintersmith), utilizando o layout padrão da ferramenta.

As páginas são construidas em HTML, aplicando a <em>templating engine</em> [Nunjucks](http://jlongster.github.io/nunjucks/). O Nunjucks é uma linguagem de template para Javascript.

A idéia desta aplicação é facilitar a vida do desenvolvedor. Apesar do Wintersmith ser extremamente simples de configurar, ainda possui algumas barreiras que podem tornar massante a customização para alguns desenvolvedores.

Uma das barreiras poderá ser a utlização da linguagem de template [Jade](http://jade-lang.com/). Jade é a liguagem padrão dos templates de blog do Wintersmith. Para simplificar e permitir escrever templates em HTML puro, optou-se por reescrever os templates utilizando o plugin [wintesmith-nunjucks](https://github.com/jbuck/wintersmith-nunjucks).

Antes de instalar a aplicação, é aconselhável entender o funcionamento do [wintersmith](https://github.com/jnordberg/wintersmith).

## Instalando

Primeiramente instale o Wintersmith usando [npm](http://npmjs.org/):

```bash
$ npm install wintersmith -g
```

Depois crie um diretório para o seu blog e acesse o diretório:

```bash
$ mkdir MEU_DIRETORIO
$ cd MEU_DIRETORIO
```

Faça o download e copie os arquivos para o diretório criado ou utilize o [git](http://git-scm.com/), caso o tenha instalado.

```bash
$ git clone https://github.com/taltk9/wintersmith-blog-app.git .
```

Depois de concluído estes passos, configure utilizando a documentação do [Wintersmith](https://github.com/jnordberg/).

Já é possível visualizar a aplicação rodando:

```bash
$ wintersmith preview
```

##Referências

Wintersmith - [https://github.com/jnordberg/wintersmith](https://github.com/jnordberg/wintersmith)
Nunjucks - [http://jlongster.github.io/nunjucks/](http://jlongster.github.io/nunjucks/)
wintesmith-nunjucks - [https://github.com/jbuck/wintersmith-nunjucks](https://github.com/jbuck/wintersmith-nunjucks)

