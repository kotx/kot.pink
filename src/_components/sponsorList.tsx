export default (
  { sponsors, comp }: Lume.Data,
) => (
  <ul class="list-style-none space-x-2">
    {sponsors.map((sponsor: { name: string; url: string; image: string }) => (
      <comp.sponsor key={sponsor.url} {...sponsor} />
    ))}
  </ul>
);
