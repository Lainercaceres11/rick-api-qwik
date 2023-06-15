import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { DocumentHead, Link, useLocation } from '@builder.io/qwik-city';
import { apiService } from '~/api/api-fetch';
import { Spinner } from '~/components/spinner/Spinner';
import { type CharacterI } from '~/models/character.interface';

export default component$(() => {

    //Recibimos el id como parametro
    const location = useLocation()
    const id = location.params.id

    const character = useResource$(()=> apiService(id))

    return (
        <Resource value={character} onPending={()=> <Spinner />} onResolved={(data: CharacterI)=>{
            return (
              <div class="card-details">
                <img src={data.image} alt={data.name} class="image-character" />
                <div class="details">
                 <div class="container-details">
                 <h2>{data.name}</h2>
                  <p>{data.status}</p>
                  <p>{data.gender}</p>
                  <p>{data.species}</p>
                 </div>
                 <Link href='/'><button class="btn-back">Volver</button></Link>
                </div>
                
              </div>
            );
        }} />
    )
});

export const head: DocumentHead = {
  title: 'Character details',
  meta: [
    {
      name: 'description',
      content: 'Informacion del Character',
    },
  ],
};