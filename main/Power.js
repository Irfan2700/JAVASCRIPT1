//var readline = require('readline');
var utility = require('../Utility/utility.js');



/*var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});*/
'use strict';
const args = require('yargs').argv;

function power(){
   // read.question("Enter the Number: ", function(userinput) {
   n = args.number;    
   utility.power(n);
        //read.close();
    
}
power();