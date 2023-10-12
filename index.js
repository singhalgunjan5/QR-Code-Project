/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'userText',
      message: "Please enter some text:",
    }
  ])
  .then((answers) => {
    const userText = answers.userText;
    
    
    var qr_png = qr.image(userText, { type: 'png' });
    // eslint-disable-next-line no-unused-vars
//     const createWriteStream = require('fs').createWriteStream;

    qr_png.pipe(createWriteStream('i_love_qr.png'))
   
  
    var png_string = qr.imageSync(userText, { type: 'png' }); 
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
        console.log(error);
      console.error("Something else went wrong");
    }
  });

