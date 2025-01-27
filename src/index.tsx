export const layout = "layouts/common.tsx";
export const title = "Kot C.";

export default ({ comp }: Lume.Data) => (
  <article class="mx-auto sm:mt-10 sm:w-3/4 2xl:w-4/10 text-xl">
    <main class="sm:shadow-xl sm:shadow-pink-500/20 sm:border sm:border-pink-950 bg-black p-4 sm:p-8 sm:rounded-lg">
      <header class="mb-4">
        <a
          href="https://github.com/kotx"
          target="_blank"
          rel="noreferrer"
          class=""
        >
          <picture>
            <source srcset="/img/avatar.webp" type="image/webp" />
            <img
              src="/img/avatar.jpg"
              alt="profile picture, illustration of a blonde witch winking and holding a finger up"
              class="mx-auto sm:mx-inherit sm:float-right border-4 hover:border-pink-600 border-pink-500 transition-colors rounded-full w-32 sm:w-40"
            />
          </picture>
        </a>
        <h1 class="font-bold text-4xl text-pink-500">Kot C.</h1>
        <p>Comp sci student, software engineer and creator of things.</p>
        <hr class="border-pink-500 mt-4" />
      </header>

      <h2 class="font-bold text-xl">About me</h2>
      <section class="mb-4 pl-2">
        <p>
          Full-stack software engineer, sysadmin, wears many hats.
        </p>
        <p>Proficient in Python, TypeScript, Rust, and Go.</p>
      </section>

      <h2 class="font-bold text-xl">Projects</h2>
      <section class="mb-4 pl-2 mt-2 grid lg:grid-cols-2 gap-3">
        {[{
          github: "kotx/render",
          desc: "caching layer for Cloudflare's R2 object storage.",
        }, {
          github: "kotx/aster",
          desc: "a Cloudflare R2 interface for multipart file uploads.",
        }, {
          github: "kotx/dex-tailscale",
          desc: "a proxy to allow OIDC authentication by Tailscale access.",
        }, {
          github: "kotx/laplace",
          desc:
            "a program to use a Raspberry Pi Pico microcontroller for motion controls in games.",
        }].map(({ github, desc }) => (
          <comp.projectCard key={github} github={github}>
            {desc}
          </comp.projectCard>
        ))}
      </section>

      <h2 class="font-bold text-xl">Sponsors</h2>
      <section class="mb-4 pl-2">
        <p class="mb-1">
          Thanks to these people for{" "}
          <a
            class="text-pink-500 underline"
            href="https://github.com/sponsors/kotx"
            target="_blank"
            rel="noreferrer"
          >
            sponsoring me
          </a>!
        </p>
        <comp.sponsorList />
      </section>
    </main>
    <footer class="mx-auto mt-2 text-neutral-300 text-right">
      <p>
        icon source:{" "}
        <a
          class="text-pink-500 underline"
          href="https://commons.wikimedia.org/wiki/File:Link-external-small-ltr-progressive.svg"
          target="_blank"
          rel="noreferrer"
        >
          wikimedia commons
        </a>
      </p>
      <a
        class="text-pink-500 underline"
        href="https://github.com/kotx/kot.pink"
        target="_blank"
        rel="noreferrer"
      >
        repo
      </a>
      <a
        class="text-pink-500 underline"
        href="https://status.kot.pink"
        target="_blank"
        rel="noreferrer"
      >
        status
      </a>
    </footer>
  </article>
);
