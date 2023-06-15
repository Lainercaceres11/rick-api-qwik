import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Home } from '~/components/home/Home';

export default component$(() => {
  return (
    <>
    <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Rick api',
  meta: [
    {
      name: 'description',
      content: 'Haciendo feching de datos a Api de rick and Morthy',
    },
  ],
};
