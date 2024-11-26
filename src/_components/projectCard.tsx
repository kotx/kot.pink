import type { ComponentChildren } from "npm:preact";

export default (
  { github, children }: {
    github: string;
    children: ComponentChildren;
  },
) => (
  <a
    class="float-right"
    href={`https://github.com/${github}`}
    target="_blank"
    rel="noreferrer"
  >
    <div class="p-2 h-full rounded-sm border border-pink-950 hover:border-pink-900 transition-colors">
      <h3 class="text-pink-500 inline-block">{github}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 12 12"
        class="fill-pink-500 float-right"
      >
        <title>
          external link
        </title>
        <path d="M6 1h5v5L8.86 3.85 4.7 8 4 7.3l4.15-4.16zM2 3h2v1H2v6h6V8h1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
      </svg>
      <p>{children}</p>
    </div>
  </a>
);
