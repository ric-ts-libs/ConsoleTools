const path = require('path');

  const oConfig = {
    //
    //Penser aussi à ajouter dans package.json,
    //   Qqch comme : "myBuild": "webpack --progress --profile --watch"
    //   dans la rubrique "scripts" (lançable donc par : npm run myBuild).
    //
    
    entry: [
        "./_src/ts/index.ts" //index.ts devra alors exporter sous la forme (export * from "...")
                             //tous les fichiers (contenant classes exportées et autres) 
                             //que l'on souhaite exporter pour le monde extérieur.
    ]
    ,output: {
        path: path.resolve(__dirname, "_build")        
        ,filename: "consoleTools.js"
        ,library: {
          name: 'consoleTools',  //<<<<<< C'EST CECI QUI NOUS PERMET DE BUNDLER UNE LIBRARY SANS AVOIR BESOIN DE FAIRE UN QUELCONQUE import de tel ou tel classe, dans le code .ts.
                                 // ATTENTION : pas de "-" dans le nom de la library, et de préférence lui donner le même nom que fileName.  
          type: 'umd'
      },                                 
    }    

    ,mode: "production"
    // ,mode: "development"

   //,devtool: 'inline-source-map'  //Doit également être mis dans le tsconfig.json ("sourceMap":true)
   
   //--------------------------------------

    , module: {
      
      //Pour gestion des fichiers .ts :
      // BESOIN de : (npm install -D ts-loader typescript) + (nécessité d'un tsconfig.json même vide mais vaut mieux y préciser la "target" !)
      rules: [
        {
          test: /\.ts$/  //Extension des fichiers à traiter (ne pas mettre entre guillemets !)
          ,use: "ts-loader"
          // , exclude : /node_modules/
        }
      ]
    }
    ,resolve: {
      extensions: [ ".ts", ".js"/*, ".d.ts"*/ ], // ".js" juste rajouté pour pouvoir traiter AUSSI en entrée des .js.
    }

    //--------------------------------------

  };

  module.exports = oConfig;