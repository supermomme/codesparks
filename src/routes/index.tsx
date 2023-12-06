import CircleCheck from "~/components/Icons/CircleCheck";
import CirclePlus from "~/components/Icons/CirclePlus";
import Logo from "~/components/Logo";

export default function Home() {
  const scrollMore = () => {
    const el = document.querySelector("#more");
    if (el == null) return console.log('no el')
    el.scrollIntoView({block: "start", behavior: "smooth"});
  }

  return (
    <main class="text-center mx-auto text-gray-700 ">
      <section class="w-screen h-screen flex justify-center gap-4 items-center flex-col bg-gradient-to-br from-indigo-400">
        <div class="max-w-[30rem] w-full px-8">
          <Logo />
          {/* <h1 class="text-6xl text-sky-700 font-thin uppercase">Codesparks</h1> */}
          <p class="text-2xl text-violet-700">Deine Zukunft gestalten</p>
        </div>
        <button onclick={scrollMore} class="bg-sky-600 text-white px-3 py-2 rounded">Mehr erfahren</button>
      </section>
      <div class="mt-8 flex flex-col items-center gap-10">
        <section>
          <video width="320" height="240" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section id="more" class="max-w-3xl w-full px-4 text-left">
          <h3 class="text-3xl">Infos zum Studium an der HS-Flensburg</h3>
          <p>Die vielleicht wichtigste Info vorweg: Du benötigst keine Programmier-Vorkenntnisse! Alles was du an Wissen benötigst, lernst du im Studium.</p>
        </section>
        <section class="max-w-3xl w-full px-4 text-left grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <h4 class="text-xl" >5 Gründe</h4>
            <ul>
              <li class="flex items-start gap-1"><CirclePlus class="flex-none w-6 h-6 text-orange-500" />Gestalte Zukunfstrends aktiv mit</li>
              <li class="flex items-start gap-1"><CirclePlus class="flex-none w-6 h-6 text-orange-500" />Studiere mit Praxisbezug und viel Raum zum Anwenden und Üben</li>
              <li class="flex items-start gap-1"><CirclePlus class="flex-none w-6 h-6 text-orange-500" />Wähle aus drei spannenden Schwerpunkten</li>
              <li class="flex items-start gap-1"><CirclePlus class="flex-none w-6 h-6 text-orange-500" />Deine Lehrenden haben Praxiserfahrung & forschen aktiv</li>
              <li class="flex items-start gap-1"><CirclePlus class="flex-none w-6 h-6 text-orange-500" />Lerne in kleinen Gruppen</li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl" >Das bringst Du mit</h4>
            <ul>
              <li class="flex items-start gap-1"><CircleCheck class="flex-none w-6 h-6 text-orange-500" />Du hast Spaß daran, logisch zu denken</li>
              <li class="flex items-start gap-1"><CircleCheck class="flex-none w-6 h-6 text-orange-500" />Du tüftelst gern an Problemen</li>
              <li class="flex items-start gap-1"><CircleCheck class="flex-none w-6 h-6 text-orange-500" />Du hast keine Angst vor Mathe (auch wenn es nicht dein Lieblingsfach ist)</li>
              <li class="flex items-start gap-1"><CircleCheck class="flex-none w-6 h-6 text-orange-500" />Du findest Computer spannend</li>
              <li class="flex items-start gap-1"><CircleCheck class="flex-none w-6 h-6 text-orange-500" />Du willst selber programmieren</li>
            </ul>
          </div>
        </section>
        <section class="max-w-3xl w-full divide-y px-4 text-left flex flex-col gap-2">
          <div class="grid grid-cols-2">
            <div class="font-semibold">Studiengang</div>
            <div>Angewandte Informatik</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">Fachbereich</div>
            <div>3</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">Start</div>
            <div>Wintersemester</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">Dauer</div>
            <div>7 Semster</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">Abschluss</div>
            <div>Bachlor of Science</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">Unterrichtssprache</div>
            <div>Deutsch</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">NC</div>
            <div>ohne NC</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-semibold">Akkreditierung</div>
            <div>durch die ASIIN</div>
          </div>
        </section>
        <section class="max-w-3xl w-full px-4 text-left">
          <h4 class="text-xl" >Schwerpunkte</h4>
          <ul class="list-disc pl-5 mb-2">
            <li>IT-Sicherheit</li>
            <li>Mensch-Computer-Interaktion</li>
            <li>Web- und Software-Technologien</li>
          </ul>
        </section>
        <section class="max-w-3xl w-full px-4 text-left">
          <p>An der Hochschule Flensburg hast du den großen Vorteil, dass es in der Regel zu jeder Vorlesung ein praxisorientiertes Labor gibt, in dem du den gelernten Stoff anhand von Übungsaufgaben direkt anwenden kannst.</p>
        </section>
        <section class="max-w-3xl w-full px-4 text-left">
          <h2 class="text-xl" >Du willst wissen, was dich nach dem Studium erwartet?</h2>
          <p>Vom Projektmanagement über die Softwareentwicklung bis hin zur Netzwerkadministration stehen dir alle Türen offen.</p>
          <h2 class="text-xl">Du interessiert dich z.B. für Spiele?</h2>
          <p>Vielleicht ist der Beruf Game Developer etwas für dich.</p>
          <h2 class="text-xl">Du liebst es Projekte zu planen?</h2>
          <p>Wie wäre es als Projektmanager für IT-Projekte.</p>
          <h2 class="text-xl">Du bist fasziniert von ChatGPT?</h2>
          <p>Als KI-Entwickler bist du an der Schaffung künstlicher Intelligenzen beteiligt.</p>
        </section>
        <section class="max-w-3xl w-full px-4 text-left">
          <h3 class="text-3xl">Entwickle ein Vier-Gewinnt-Spiel!</h3>
          <p>Das ist eine Beispielaufgabe aus dem 2. Semester. Auf <a href="https://viergewinnt.codesparks.de" class="underline hover:text-blue-800" target="_blank">viergewinnt.codesparks.de</a> findest Du eine Lösung zu der Aufgabe.</p>
          <p>Schreibe deinen eigenen Code, erstelle eine HTML-Website und gestalte sie mit CSS. Du hast noch nie etwas von HTML gehört? Keine Sorge, das lernst du im ersten Semester.</p>
          <img src="/viergewinnt.png" alt="Bilder-Collage von Viergewinnt"/>
        </section>
        <section class="max-w-3xl w-full px-4 text-left">
          <h3 class="text-3xl">Wir haben dein Interesse geweckt?</h3>
          <p><a href="https://hs-flensburg.de/studieninteressierte/angebot/bachelor/AI" target="_blank" class="underline hover:text-blue-800 cursor-pointer">Klicke hier für mehr Informationen</a></p>
        </section>
        <section class="max-w-3xl w-full px-4 text-left">
          <h3 class="text-3xl">Du möchtest direkt ins Studium starten?</h3>
          <p>Dann bewirb dich jetzt an der Hochschule Flensburg.</p>
          <p><a href="https://hs-flensburg.de/studieninteressierte/bewerbung" target="_blank" class="underline hover:text-blue-800 cursor-pointer">Link zu HS-Flensburg Bewerbung</a></p>
        </section>
      </div>
    </main>
  );
}
