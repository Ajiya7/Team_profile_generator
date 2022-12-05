const HTML = function(htmldata) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./dist/css/style.css" />
    </head>
    <body>
        <header>
            <nav class="navbar ">
             <h1 class="navbar-brand mb-0  text-center w-100 ">Team Profile</h1>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${htmldata}
                </div>
            </div>
        </main>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </html>`
}

const generateManagercard = function (Manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Manager.id}</p>
                <p class="email">Email: ${Manager.email}
                <p class="office">Office Number: ${Manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineercard = function (Engineer) {
    return `
<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${Engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${Engineer.id}</p>
            <p class="email">Email: ${Engineer.email}
            <p class="github">Github: ${Manager.github}</p>
        </div>
    </div>
</div>`;
}

const generateInterncard = function (Intern) {
    return `
<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${Intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${Intern.id}</p>
            <p class="email">Email: ${Intern.email}
            <p class="school">School: ${Intern.school}</p>
        </div>
    </div>
</div>`;
}

generateHTML = (data) => {

    cardsArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManagercard(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineercard(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateInterncard(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const generateTeam = HTML(employeeCards); 
    return generateTeam;
}

module.exports = generateHTML; 