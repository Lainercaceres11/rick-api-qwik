import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { type CharacterI } from "~/models/character.interface";

export const Character = component$(
  ({ name, image, id }: Pick<CharacterI, "name" | "image" | "id">) => {
    return (
      <div class="card">
        <img src={image} alt={name} class="image-character" />
        <div>
          <div class="text-center">
            <Link href={`character/${id}`}>{name}</Link>
          </div>
        </div>
      </div>
    );
  }
);
