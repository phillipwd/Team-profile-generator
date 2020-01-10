function generateEngineerCard(employee){
    return `<div style = "width: 45vw; background-color: rgb(102, 129, 173);">
    <h1>${employee.name}</h1>
    <h2>Role: Engineer</h2>
    <h2>${employee.email}</h2>
    <h2>github id: ${employee.github}</h2>
    <h2>Employee id: ${employee.id}</h2>
</div>`
}

module.exports = generateEngineerCard;