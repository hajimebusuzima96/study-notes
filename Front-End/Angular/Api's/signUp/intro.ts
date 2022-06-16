/*
Sistema de cadastro de lembretes com Angular
Aqui apresentamos um aplicação em Angular que se conecta à um banco de dados
relacional através de uma API RESTful. Um Sistema de Cadastro utilizando Angular!

Aqui apresentamos um aplicação em Angular que se conecta à um banco de 
dados relacional através de uma API RESTful. Como entidade a ser persistida,
ou seja, os dados que serão gravados no banco, usaremos um Lembrete composto
por uma mensagem de texto, bem como um nível de prioridade, com valores 
pré-definidos (alta, média ou baixa). Para criar esse aplicativo utilizamos
o Angular em sua versão 7.

Use a aplicação no Heroku


Destaques do projeto
Angular 7
TypeScript
Cliente SPA em Angular
HttpClientModule
Tipos customizados
Observables
Interfaces
Dependências da aplicação
Como estamos utilzando o NPM, podemos encontrar todas as dependências 
da nossa aplicação no arquivo package.json. Essa informação é crucial pois,
caso instalemos os pacotes nas versões erradas, podemos ter sérios problemas 
de incompatibilidade. Nesse projeto temos como dependências os seguintes pacotes:

"@angular/animations": "~7.0.0",
"@angular/common": "~7.0.0",
"@angular/compiler": "~7.0.0",
"@angular/core": "~7.0.0",
"@angular/forms": "~7.0.0",
"@angular/http": "~7.0.0",
"@angular/platform-browser": "~7.0.0",
"@angular/platform-browser-dynamic": "~7.0.0",
"@angular/router": "~7.0.0",
"core-js": "^2.5.4",
"express": "^4.16.4",
"rxjs": "~6.3.3",
"zone.js": "~0.8.26"
Temos, também, pacotes que são necessários para o desenvolvimento da aplicação mas, após a construção da mesma, não serão utilizados:

"@angular-devkit/build-angular": "~0.10.0",
"@angular/cli": "~7.0.4",
"@angular/compiler-cli": "~7.0.0",
"@angular/language-service": "~7.0.0",
"@types/node": "~8.9.4",
"@types/jasmine": "~2.8.8",
"@types/jasminewd2": "~2.0.3",
"codelyzer": "~4.5.0",
"jasmine-core": "~2.99.1",
"jasmine-spec-reporter": "~4.2.1",
"karma": "~3.0.0",
"karma-chrome-launcher": "~2.2.0",
"karma-coverage-istanbul-reporter": "~2.0.1",
"karma-jasmine": "~1.1.2",
"karma-jasmine-html-reporter": "^0.2.2",
"protractor": "~5.4.0",
"ts-node": "~7.0.0",
"tslint": "~5.11.0",
"typescript": "~3.1.1"
*/