//Ici : juste faire un : npm run myBuild
//Puis incrémenter le numéro de version dans ./_build/package.json
//Puis depuis le dossier ./_build :  npm publish --access public
//
//Le code client, lui, fera (après npm i @rick.info.dev/console-tools ), un : 
//   const MyConsoleToolsZZZZ = require('@rick.info.dev/console-tools');
//   mais bien sûr MyConsoleToolsZZZZ y sera un espace de noms, 
//   de nom donc arbitraire dans le code client.
//   Donc pour utiliser ma librairie dans le code client, 
//   on préfixera par cet espace de nom, ex. :
//    console.log(MyConsoleToolsZZZZ.Console);
//    console.log(MyConsoleToolsZZZZ.ConsoleCssStyledMessage);
//    console.log(MyConsoleToolsZZZZ.ConsoleCssStyledMessages);
//
export * from './myLib'; //Pour faire propre, j'ai mis aussi un index.ts dans le dossier ./myLib