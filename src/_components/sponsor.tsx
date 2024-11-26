const imageProviders: Record<string, (meta: string) => string> = {
  github: (username: string) =>
    `https://avatars.githubusercontent.com/${username}`,
};

export default (
  { url, image, name }: { url: string; image: string; name: string },
) => {
  let imageUrl = image;
  if (image.startsWith("@")) {
    const [tag, meta] = image.split(":");
    imageUrl = imageProviders[tag.slice(1)](meta);
  }

  return (
    <li class="inline-block border-3 transition-colors border-pink-950 hover:border-pink-900">
      <a
        href={url}
        class="text-pink-500 underline"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={imageUrl}
          alt={name}
          title={name}
          class="inline-block h-16 w-16"
        />
      </a>
    </li>
  );
};
