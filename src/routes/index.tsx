import { A } from "solid-start";
import Counter from "~/components/Counter";
import Logo from "~/components/Logo";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 ">
      <section class="w-screen h-screen flex justify-center gap-4 items-center flex-col bg-gradient-to-br from-indigo-400">
        <div>
          <Logo />
          {/* <h1 class="text-6xl text-sky-700 font-thin uppercase">Codesparks</h1> */}
          <p class="text-2xl text-violet-700">Deine Zukunft gestalten</p>
        </div>
        <button class="bg-sky-600 text-white px-3 py-2 rounded">Mehr erfahren</button>
      </section>
      <div class="mt-8 flex flex-col items-center gap-10">
        <section class="max-w-3xl px-4 text-left">
          <h3 class="text-3xl">Infos zum Studium</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, optio illum? Maxime, magnam temporibus? Rem quae, exercitationem dolore velit autem nobis assumenda commodi officia dignissimos. Dicta, molestias ratione? Dolores, et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia nulla delectus culpa eligendi cumque deserunt voluptatem, illo rem unde exercitationem suscipit facere vel ut? Reprehenderit optio earum vero libero!</p>
        </section>
        <section class="max-w-3xl px-4 text-left">
          <h3 class="text-3xl">Beispiel Vier-Gewinnt</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, optio illum? Maxime, magnam temporibus? Rem quae, exercitationem dolore velit autem nobis assumenda commodi officia dignissimos. Dicta, molestias ratione? Dolores, et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia nulla delectus culpa eligendi cumque deserunt voluptatem, illo rem unde exercitationem suscipit facere vel ut? Reprehenderit optio earum vero libero!</p>
        </section>
        <section class="max-w-3xl px-4 text-left">
          <h3 class="text-3xl">Melde dich für Support!</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, optio illum? Maxime, magnam temporibus? Rem quae, exercitationem dolore velit autem nobis assumenda commodi officia dignissimos. Dicta, molestias ratione? Dolores, et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia nulla delectus culpa eligendi cumque deserunt voluptatem, illo rem unde exercitationem suscipit facere vel ut? Reprehenderit optio earum vero libero!</p>
        </section>
      </div>
      
    </main>
  );
}
