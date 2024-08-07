const codes = [
    `
        <div class="nav-bar">
            <div class="nav-items">Home</div>
            <div class="nav-items">About</div>
            <div class="nav-items">Contact Us</div>
            <div class="nav-items">Retail</div>
            <div class="nav-items">Detail</div>
            <div class="nav-items">Login</div>
        </div>
    `,
    `

    `
];

const common = `
    .nav-bar{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-items{
        padding: .5rem;
    }
`;

const css = [
`   

`,
];

export const createNavBar = (heading,output) => 
{
    const head = document.createElement('p');
    head.innerText = heading;


    const navDisplayDiv = document.createElement('div');
    navDisplayDiv.classList.add('nav-bar-display');
    navDisplayDiv.appendChild(head);

    const navOutputDiv = document.createElement('div');
    navOutputDiv.classList.add('nav-bar-output');
    navOutputDiv.innerHTML = output;
    navDisplayDiv.appendChild(navOutputDiv);


    const navCodeDiv = document.createElement('div');
    navCodeDiv.classList.add('nav-bar-code');
    const code = document.createElement('code');
    code.innerText = output;
    navCodeDiv.appendChild(code);
    navDisplayDiv.appendChild(navCodeDiv);

}

const displayNavBar = () => 
{

}