const gallery = document.getElementById('gallery');

const listings = [
  { name: "A1.jpg", url: "listings/A1.jpg" },
  { name: "B2.pdf", url: "listings/B2.pdf" },
  { name: "C3.pdf", url: "listings/C3.pdf" }
];

listings.forEach(listing => {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  if (listing.url.endsWith('.jpg') || listing.url.endsWith('.jpeg')) {
    item.innerHTML = `
      <img src="${listing.url}" alt="${listing.name}" style="width:100%; border-radius:6px;">
      <p>${listing.name}</p>
    `;
  } else {
    item.innerHTML = `
      <a href="${listing.url}" target="_blank">${listing.name}</a>
    `;
  }

  gallery.appendChild(item);
});
