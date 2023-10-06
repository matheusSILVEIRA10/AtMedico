const medicos = [
    {
        nome: 'James',
        sobrenome: 'Raimudo',
        genero: 'masculino',
        generoDR: "DR",
        imagemPerfil: 'https://placekitten.com/200/286'

    },
    {
        nome: 'Matheus',
        sobrenome: 'nunes',
        genero: 'Masculino',
        generoDR: "DR",
        imagemPerfil: 'https://placekitten.com/96/139'

    },
    {
        nome: 'Leonardo',
        sobrenome: 'Santos',
        genero: 'Nao-binario',
        generoDR: "Dr(e)",
        imagemPerfil: 'https://placekitten.com/200/138'

    },
];
const htmlList = document.querySelector('#medicos');

for (let medico of medicos) {

    
    let apresentacao = "";

    switch (medico.genero) {
        case 'Nao-binario':
            apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'Masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'Feminino':
            apresentacao = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
            break;
        default:
            apresentacao = `Dr(a) não informou o genero`;


    }
     const p = document.createElement('p');
     p.textContent = `${apresentacao}`;
    htmlList.appendChild(p);

    const img = document.createElement('img')
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img)

}