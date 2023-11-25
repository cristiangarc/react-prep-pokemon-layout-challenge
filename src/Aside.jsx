import "./Aside.css"

const pokemons = ["Bulbasaur", "Charmander", "Squirtle", "Pickachu", "Jigglypuff", "Meowth", "Eevee", "Snorlax"];

const Aside = () => {
    return <div className="aside">
        <h2><strong>Characters</strong></h2>
        <ul>
            {
                pokemons.map((pokemon) => <li key={pokemon}><a href="">{pokemon}</a></li>)
            }
        </ul>
    </div>
}

export default Aside;