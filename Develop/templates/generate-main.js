function generateHTML() {
  
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Main</title>
    </head>
    <body>
        <div style="display: block; justify-content: center">
            <h1>These are the employees</h1>
            <h3>employee 1</h3>
            <h3>employee 2</h3>
        </div>
        <div style = "display: flex; justify-content: center; text-align: center; flex-wrap: wrap;" id = "card">
            `

}

module.exports = generateHTML;