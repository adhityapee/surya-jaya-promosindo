// New photos go at the beginning. Keep each id unique and provide both WebP sizes.
const directory = "/assets/images/gallery/";
export const galleryPhotos = [
  { id: "pouch-navy-custom", alt: "Pouch navy dengan cetakan logo putih MSIG", width: 1280, height: 720 },
  { id: "tumbler-krem-logo-hijau", alt: "Deretan tumbler krem dengan cetakan logo Grab berwarna hijau", width: 1280, height: 720 },
  { id: "tumbler-merah-full-color", alt: "Lima tumbler merah dengan hasil cetak ilustrasi TokiNori full color", width: 1280, height: 720 },
  { id: "tumbler-krem-ilustrasi", alt: "Tumbler krem berpegangan dengan cetakan ilustrasi berwarna", width: 720, height: 1280 },
].map((photo) => ({ ...photo, src: `${directory}${photo.id}.webp`, thumbnail: `${directory}${photo.id}-thumb.webp` }));
