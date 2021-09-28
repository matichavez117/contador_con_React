//FUNCION CONTADOR
const Contador = () => {
    //iniciamos un estado const [state, setState] = React.useState(inicializacion)
    //ESTO NOS VA A RETORNAR UN ARRAY QUE PODEMOS MANIPULAR POR MEDIO DEL setState
    const [contador, setContador] = React.useState(0);

    const aumentar = () => setContador(contador +1);
    const disminuir = () => setContador (contador -1);

    return (
        <div>
            <h1 className="text-primary">Contador: {contador}</h1>
            <hr />
            <button onClick={aumentar}>aumentar</button>
            <button onClick={disminuir}>disminuir</button>
        </div>
    );
    //EN EL RETURN PODEMOS LLAMAR A TODOS LOS EVENTOS DE HTML, PERO USANDO CAMELCASE "onEvento"
};
