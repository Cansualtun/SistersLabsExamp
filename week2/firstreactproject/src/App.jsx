import Pokemons from "./components/Pokemon";
import pokemonsArray from "./data";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {pokemonsArray.map((pokemon, index) => {
          return (
            <Pokemons
              key={index}
              title={pokemon.title}
              text={pokemon.text}
              number={pokemon.number}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
