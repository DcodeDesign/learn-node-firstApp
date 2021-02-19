const header = require('../templates/header');
const footer = require('../templates/footer');

let body = `<h1 class="text-4xl font-medium self-center" >Home</h1>`;

exports.page = (
    `${header.template} 
     ${body} 
     ${footer.template}`
);

