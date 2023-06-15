import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { apiService } from "~/api/api-fetch";
import { type CharacterI } from "~/models/character.interface";
import { Character } from "../charcaters/Character";
// import { Spinner } from "../spinner/Spinner";

export const Home = component$(() => {
  const resources = useResource$(() => apiService());
  return (
  <>
  <h1>Rick and Morthy Api</h1>
  <Resource
      value={resources}
      onPending={() => <p>Cargando</p> }
      onResolved={({ results }) => {
        return (
          <>
            <ul class="grid-container">
              {results.map((character: CharacterI) => {
                return (
                  <li key={character.id}>
                    <Character {...character} />
                  </li>
                );
              })}
            </ul>
          </>
        );
      }}
    />
  </>
  );
});
