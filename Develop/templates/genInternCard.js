function generateInternCard(employee){
    return      `<div style = "width: 45vw; background-color: rgb(133, 187, 145);">
            <h1>${employee.name}</h1>
            <h2>Role: Intern</h2>
            <h2>${employee.email}</h2>
            <h2>Attending: ${employee.school}</h2>
            <h2>Employee id: ${employee.id}</h2>
        </div>`
}

module.exports = generateInternCard;