const navigation = require('./navigation');


exports.template = (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link href="./assets/css/style.css" rel="stylesheet">
        <title> Node that's good </title>
    </head>
    <body class="bg-gradient-to-r from-indigo-50 to-indigo-100 pt-6"> 
    <div class="container mx-auto">
    ${navigation.template}`
);