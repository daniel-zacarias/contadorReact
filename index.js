var container = document.getElementById("app");
// var titulo = document.createElement("h1");

// titulo.innerHTML = "Título inserido por JavaScripto :O \\O/";
// container.appendChild(titulo);

function Titulo() {


    return (
        <div class="titulo">
            <h1>Escolha o seu lado da força</h1>
        </div>
    );

}

function Contador(props) {

    let [numero, setNumero] = React.useState(0);

    return (
        <div class="opcoes">
            <p>{props.titulo}</p>
            <h2>{numero}</h2>
            <button onClick={() => setNumero(++numero)}>+</button>
            <button onClick={() => setNumero(--numero)}>-</button>
        </div>
    );

}

function App() {

    return (
        <React.Fragment>
            <Titulo/>
            <Contador titulo="Lado sombrio" />
            <Contador titulo="Lado da Luz" />
        </React.Fragment>
    )
}


ReactDOM.render(React.createElement(App, null, null), container);
