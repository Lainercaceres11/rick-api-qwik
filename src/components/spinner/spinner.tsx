import { component$ } from "@builder.io/qwik";

import "./spinner.css"

export const Spinner = component$(() => {
  return (
    <div class="loader">Loading...</div>
  );
});