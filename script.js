const gallery = document.getElementById('gallery');

// Simulated listing files (replace with actual file fetch if needed)
const listings = [
  { name: "Cozy Cottage.pdf", url: "listings/Cozy Cottage.pdf" },
  { name: "Sunny Bungalow.jpg", url: "listings/Sunny Bungalow.jpg" },
  { name: "Modern Nest.pdf", url: "listings/Modern Nest.pdf" }
];

listings.forEach(listing => {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  if (listing.url.endsWith('.jpg') || listing.url.endsWith('.jpeg')) {
    item.innerHTML = `<img src="${listing.url}" alt="${listing.name}" style="width:100%; border-radius:6px;"><p>${listing.name}</p>`;
  } else {
    item.innerHTML = `<a href="${listing.url}" target="_blank">${listing.name}</a>`;
  }

  gallery.appendChild(item);
});
