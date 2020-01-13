function generateManagerCard(employee){
    return `<div style = "width: 45vw; background-color: red;">
        <h1>${employee.name}</h1>
        <h2>Role: Manager</h2>
        <h2>${employee.email}</h2>
        <h2>office number: ${employee.officeNumber}</h2>
        <h2>Employee id: ${employee.id}</h2>
    </div>`
}

module.exports = generateManagerCard;