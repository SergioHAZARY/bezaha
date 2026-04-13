const ROUTES = /** @type {const} */ ({
  HOME: "home",
  SPOTS: "spots",
  TODO: "todo",
  MORE: "more",
});

const STORAGE_KEY = "bezaha:favorites:v1";

/** @typedef {{id:string,title:string,subtitle:string,km:number,image:string,category:string,mapsQuery?:string,map?:{x:number,y:number,label?:string}}} Spot */

/** @type {Spot[]} */
const SPOTS = [
  {
    id: "tsakotsako",
    title: "Tsakotsako",
    subtitle: "FFXX+8H4 Bezaha Betioky Atsimo",
    km: 14057,
    image: "./img/tsakotsako.jpg",
    category: "eat",
  },
  {
    id: "fary",
    title: "Fary",
    subtitle: "Bezaha Betioky Andrefana",
    km: 14057,
    image: "./img/fary.jpg",
    category: "eat",
  },
  {
    id: "mabibo",
    title: "Mabibo",
    subtitle: "FFXX+8H4 Bezaha Betioky Atsimo",
    km: 14057,
    image: "./img/mabibo.jpg",
    category: "eat",
  },
  {
    id: "mahogo",
    title: "Mahogo",
    subtitle: "Bezaha Betioky Andrefana",
    km: 14057,
    image: "./img/mahogo.jpg",
    category: "eat",
  },
  {
    id: "mahogo manta",
    title: "Mahogo manta",
    subtitle: "FFXX+8H4 Bezaha Betioky Atsimo",
    km: 14057,
    image: "./img/mahogo manta.jpg",
    category: "eat",
  },
  {
    id: "fonesy",
    title: "Fonesy",
    subtitle: "Bezaha Betioky Andrefana",
    km: 14057,
    image: "./img/fonesy.jpg",
    category: "eat",
  },
  {
    id: "route toléar",
    title: "Route toléar",
    subtitle: "3QJV+2Q6 Begara Antsalova",
    km: 13785,
    image: "./img/route toleara.jpg",
    category: "goingout",
  },
  {
    id: "morondava",
    title: "Morondava",
    subtitle: "Morondava District de Morondava Menabe",
    km: 13833,
    image: "./img/morondava.jpg",
    category: "goingout",
  },
  {
    id: "tortu",
    title: "Tortu",
    subtitle: "3QJV+2Q6 Begara Antsalova",
    km: 13785,
    image: "./img/tortu.jpg",
    category: "goingout",
  },
  {
    id: "maki1",
    title: "Maki",
    subtitle: "Morondava District de Morondava Menabe",
    km: 13833,
    image: "./img/maki1.jpg",
    category: "goingout",
  },
  {
    id: "vorogno",
    title: "Vorogno",
    subtitle: "Bezaha Betioky Andrefana",
    km: 13785,
    image: "./img/vorogno.jpg",
    category: "goingout",
  },
  {
    id: "ala",
    title: "Ala",
    subtitle: "Bezaha Betioky Andrefana",
    km: 13833,
    image: "./img/bezaha ala.jpg",
    category: "goingout",
  },
  {
    id: "omby",
    title: "Omby",
    subtitle: "Morondava District de Morondava Menabe",
    km: 13833,
    image: "./img/omby.jpg",
    category: "mustsee",
  },
  {
    id: "tortue",
    title: "Tortu de mer Madagascar",
    subtitle: "Tuléar District de Toliara Atsimo-Andrefana",
    km: 13978,
    image: "./img/tortu de mer.jpg",
    category: "mustsee",
  },
  {
    id: "lako",
    title: "Lako",
    subtitle: "Tuléar District de Toliara Atsimo-Andrefana",
    km: 13978,
    image: "./img/lako.jpg",
    category: "mustsee",
  },
  {
    id: "reserves-bezaha",
    title: "Réserves Spéciales de Bezaha Mahafaly",
    subtitle: "Bezaha — Madagascar",
    km: 0,
    image: "./img/maki2.jpg",
    category: "mustsee",
  },
  {
    id: "kilandy",
    title: "Kilandy",
    subtitle: "Bezaha — Madagascar",
    km: 0,
    image: "./img/kilandy.jpg",
    category: "mustsee",
  },
  {
    id: "route-bezaha",
    title: "Route Bezaha",
    subtitle: "Sud-Ouest — Madagascar",
    km: 0,
    image: "./img/route bezaha.jpg",
    category: "mustsee",
  },
];

const ICONS = {
  pin: () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Zm0-9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z"></path>
    </svg>
  `,
  bookmark: (active) => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h10a2 2 0 0 1 2 2v16l-7-3-7 3V5a2 2 0 0 1 2-2Z" ${
        active ? "" : 'fill="rgba(255,255,255,.92)"'
      }></path>
    </svg>
  `,
  heart: () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-7-4.4-9.5-8.7C.7 8.9 2.2 5.7 5.5 5c1.9-.4 3.7.4 4.8 1.8C11.4 5.4 13.2 4.6 15.1 5c3.3.7 4.8 3.9 3 7.3C19 16.6 12 21 12 21Z"></path>
    </svg>
  `,
  checkPin: () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Zm3.6-12.1-4.1 4.2-2-2 1.3-1.3.7.7 2.8-2.9 1.3 1.3Z"></path>
    </svg>
  `,
  cocktail: () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h16v2l-6 6v5h3v2h-3v3H10v-3H7v-2h3v-5L4 5V3Zm3.4 2 4.6 4.6L16.6 5H7.4Z"></path>
    </svg>
  `,
  pizza: () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c-3.4 0-6.5 1.2-8.9 3.2l9 18.1 9-18.1A14.1 14.1 0 0 0 12 2Zm0 3c2.4 0 4.7.7 6.6 1.9l-1.1 2.2a10.7 10.7 0 0 0-11 0L5.4 6.9A11.1 11.1 0 0 1 12 5Zm-3 6a1.2 1.2 0 1 1 0 2.4A1.2 1.2 0 0 1 9 11Zm6 1.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"></path>
    </svg>
  `,
  share: () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3 21 10l-7 7v-4H9a6 6 0 0 0-6 6v-1a10 10 0 0 1 10-10h1V3Z"></path>
    </svg>
  `,
};

const $ = (sel) => /** @type {HTMLElement} */ (document.querySelector(sel));

const elScreen = $("#screen");
const elBrandTitle = $("#brandTitle");
const elBtnBack = $("#btnBack");
const elBtnFavorites = $("#btnFavorites");
const elSheet = $("#sheet");
const elSheetContent = $("#sheetContent");
const elSheetBackdrop = $("#sheetBackdrop");
const elMapModal = /** @type {HTMLElement} */ (document.querySelector("#mapModal"));
const elMapModalContent = /** @type {HTMLElement} */ (document.querySelector("#mapModalContent"));
const elMapBackdrop = /** @type {HTMLElement} */ (document.querySelector("#mapBackdrop"));
const elBtnCloseMap = /** @type {HTMLButtonElement} */ (document.querySelector("#btnCloseMap"));

/** @type {Set<string>} */
let favorites = new Set(loadFavorites());

/** @type {{route:string, detailId?:string, listCategory?:string}} */
let state = { route: ROUTES.HOME };

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
}

function setRoute(route, extra = {}) {
  state = { ...state, route, ...extra };
  const hash = new URLSearchParams();
  hash.set("r", route);
  if (state.detailId) hash.set("id", state.detailId);
  if (state.listCategory) hash.set("cat", state.listCategory);
  location.hash = hash.toString();
  render();
}

function readRouteFromHash() {
  const raw = location.hash.replace(/^#/, "");
  const p = new URLSearchParams(raw);
  const route = p.get("r") || ROUTES.HOME;
  const id = p.get("id") || undefined;
  const cat = p.get("cat") || undefined;
  state = { route, detailId: id, listCategory: cat };
}

function formatKm(km) {
  if (!km) return "";
  return `${Math.round(km)} km`;
}

function spotById(id) {
  return SPOTS.find((s) => s.id === id);
}

function buildCard(spot, { wide = false } = {}) {
  const active = favorites.has(spot.id);
  const km = formatKm(spot.km);
  return `
    <article class="card ${wide ? "card--wide" : ""}" data-open-map="${spot.id}" role="button" tabindex="0" aria-label="${escapeHtml(
    spot.title
  )}">
      <div class="card__img" style="background-image:url('${encodeURI(spot.image)}')">
        ${km ? `<div class="badge">${escapeHtml(km)}</div>` : ""}
        <button class="save ${active ? "is-active" : ""}" data-fav="${spot.id}" aria-label="${
    active ? "Retirer des favoris" : "Ajouter aux favoris"
  }">
          ${ICONS.bookmark(active)}
        </button>
      </div>
      <div class="card__body">
        <h3 class="card__title">${escapeHtml(spot.title)}</h3>
        <div class="meta">${ICONS.pin()}<span>${escapeHtml(spot.subtitle)}</span></div>
      </div>
    </article>
  `;
}

function renderHome() {
  const eat = SPOTS.filter((s) => s.category === "eat");
  const out = SPOTS.filter((s) => s.category === "goingout");
  const must = SPOTS.filter((s) => s.category === "mustsee");

  elBrandTitle.textContent = "Bezaha";
  elBtnBack.classList.add("is-hidden");

  return `
    <section class="hero">
      <div class="hero__media" style="background-image:url('${encodeURI("./img/valle toleara.jpg")}')">
        <div class="hero__content">
          <h2 class="hero__title">Bienvenu à BEZAHA</h2>
        </div>
      </div>
    </section>

    ${sectionRow("Sakafogasy", "eat", eat)}
    ${sectionRow("Visite", "goingout", out)}
    ${sectionRow("Paysage", "mustsee", must, { wide: true })}

    <div class="footer-links" aria-label="Réseaux sociaux">
      ${socialButton("Facebook")}
      ${socialButton("X")}
      ${socialButton("Instagram")}
    </div>

    <div class="legal">
      <button data-action="legal" data-legal="cgs">Conditions générales de service</button>
      <button data-action="legal" data-legal="privacy">Politique de confidentialité</button>
    </div>
  `;
}

function sectionRow(title, category, spots, { wide = false } = {}) {
  const carouselId = `car-${category}`;
  return `
    <section class="section">
      <div class="section__head">
        <h3 class="section__title">${escapeHtml(title)}</h3>
        <button class="section__link" data-action="seeall" data-category="${escapeHtml(category)}">Voir tout</button>
      </div>
      <div class="carousel" data-carousel="${escapeHtml(carouselId)}">
        <button class="carousel__btn carousel__btn--prev" data-carousel-btn="prev" aria-label="Précédent">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 5.3a1 1 0 0 1 0 1.4L10.41 11l4.29 4.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0Z"/></svg>
        </button>
        <button class="carousel__btn carousel__btn--next" data-carousel-btn="next" aria-label="Suivant">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.3 18.7a1 1 0 0 1 0-1.4L13.59 13 9.3 8.7a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0Z"/></svg>
        </button>
        <div class="carousel__track" data-carousel-track>
          ${spots.map((s) => buildCard(s, { wide })).join("")}
        </div>
        <div class="carousel__dots" data-carousel-dots aria-label="Pagination"></div>
      </div>
    </section>
  `;
}

function buildGoogleMapsEmbedUrl(spot) {
  // Sans clé API: on utilise le mode "q=...&output=embed"
  // Pour une précision parfaite: ajoutez `spot.mapsQuery` ou `spot.latLng`.
  const q =
    (spot.mapsQuery && String(spot.mapsQuery).trim()) ||
    `${spot.title} ${spot.subtitle} Madagascar`;
  const url = new URL("https://www.google.com/maps");
  url.searchParams.set("q", q);
  url.searchParams.set("z", "6");
  url.searchParams.set("output", "embed");
  return url.toString();
}

function openMapModal(spot) {
  const embedUrl = buildGoogleMapsEmbedUrl(spot);
  elMapModalContent.innerHTML = `
    <div class="map-layout">
      <div class="map-panel">
        <div class="map-panel__head">
          <h3 class="map-panel__title">Google Maps</h3>
          <p class="map-panel__sub">Recherche: <strong>${escapeHtml(spot.title)}</strong></p>
        </div>
        <iframe
          class="map-embed"
          src="${escapeHtml(embedUrl)}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          title="Google Maps"
        ></iframe>
      </div>
      <div class="preview">
        <div class="preview__img" style="background-image:url('${encodeURI(spot.image)}')"></div>
        <div class="preview__body">
          <h3 class="preview__title">${escapeHtml(spot.title)}</h3>
          <div class="preview__meta">${ICONS.pin()}<span>${escapeHtml(spot.subtitle)}</span></div>
        </div>
      </div>
    </div>
  `;
  elMapBackdrop.classList.remove("is-hidden");
  elMapModal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeMapModal() {
  elMapBackdrop.classList.add("is-hidden");
  elMapModal.classList.add("is-hidden");
  elMapModalContent.innerHTML = "";
  document.body.style.overflow = "";
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function socialButton(name) {
  const icon = name === "Facebook"
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1Z"/></svg>`
    : name === "X"
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 3H21l-6.6 7.5L22 21h-6.2l-4.8-6-5.3 6H3.6l7.1-8.1L2.6 3H9l4.4 5.5L18.9 3Zm-2.2 16h1.7L7.9 4.9H6.1L16.7 19Z"/></svg>`
      : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.8 6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>`;

  return `<button class="social" data-action="social" data-social="${escapeHtml(name)}" aria-label="${escapeHtml(
    name
  )}">${icon}</button>`;
}

function renderFavorites() {
  elBrandTitle.textContent = "Bezaha";
  elBtnBack.classList.add("is-hidden");

  const favSpots = SPOTS.filter((s) => favorites.has(s.id));
  if (favSpots.length === 0) {
    return `
      <div class="empty">
        ${ICONS.heart()}
        <div class="empty__hint">Vous n'avez ajouté aucun contenu en favori</div>
      </div>
    `;
  }

  return `
    <section class="section">
      <div class="section__head">
        <h3 class="section__title">Mes favoris</h3>
      </div>
      <div class="grid">
        ${favSpots.map((s) => buildCard(s, { wide: true })).join("")}
      </div>
    </section>
  `;
}

function renderThingsToDo() {
  elBrandTitle.textContent = "Bezaha";
  elBtnBack.classList.add("is-hidden");

  const tiles = [
    { id: "visite", label: "Visite", icon: ICONS.checkPin },
    { id: "paysage", label: "Paysage", icon: ICONS.cocktail },
    { id: "sakafogasy", label: "Sakafo Gasy", icon: ICONS.pizza },
  ];

  return `
    <section class="section">
      <div class="grid">
        ${tiles
          .map(
            (t) => `
              <button class="tile" data-action="tile" data-tile="${escapeHtml(t.id)}" aria-label="${escapeHtml(
              t.label
            )}">
                ${t.icon()}
                <div class="tile__label">${escapeHtml(t.label)}</div>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCategoryList(category) {
  const label =
    category === "eat"
      ? "Sakafogasy"
      : category === "goingout"
        ? "Visite"
        : "Paysage";

  const list = SPOTS.filter((s) => s.category === category);
  elBrandTitle.textContent = "Bezaha";
  elBtnBack.classList.remove("is-hidden");

  return `
    <section class="section">
      <div class="section__head">
        <h3 class="section__title">${escapeHtml(label)}</h3>
      </div>
      <div class="grid">
        ${list.map((s) => buildCard(s, { wide: true })).join("")}
      </div>
    </section>
  `;
}

function renderDetail(id) {
  const spot = spotById(id);
  if (!spot) return renderHome();

  elBrandTitle.textContent = "Bezaha";
  elBtnBack.classList.remove("is-hidden");

  const active = favorites.has(spot.id);
  return `
    <section class="hero">
      <div class="hero__media" style="background-image:url('${encodeURI(spot.image)}'); height: 320px;">
        <div class="hero__content" style="justify-content:flex-end; align-items:flex-start; text-align:left;">
          <div class="pill">${ICONS.pin()}<span>${escapeHtml(spot.subtitle)}</span></div>
          <h2 class="hero__title" style="font-size:26px; margin-top:10px;">${escapeHtml(spot.title)}</h2>
          <div style="display:flex; gap:10px; margin-top:8px;">
            <button class="cta" data-action="share" data-id="${escapeHtml(spot.id)}" style="padding:10px 16px;">${
    ICONS.share()
  } Partager</button>
            <button class="cta" data-action="togglefav" data-id="${escapeHtml(
              spot.id
            )}" style="padding:10px 16px; background:rgba(255,255,255,.12); box-shadow:none;">${
    active ? "Retirer favori" : "Ajouter favori"
  }</button>
          </div>
        </div>
      </div>
    </section>

    <div class="modal">
      <h2>À propos</h2>
      <p>
        Ceci est une version web du design de votre application Bezaha. Vous pouvez remplacer ces informations
        par une description détaillée (horaires, prix, contact, localisation Google Maps, etc.).
      </p>
    </div>
  `;
}

function openMoreSheet() {
  const html = `
    <button class="sheet-item" data-action="closeSheet">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 0 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z"/></svg>
      <span class="sheet-item__label">Fermer</span>
    </button>
    <button class="sheet-item" data-action="post">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H5.2L4 17.2V4Zm4 16h12v2H8v-2Z"/></svg>
      <span class="sheet-item__label">Poster</span>
    </button>
    <button class="sheet-item" data-action="tips" data-tip="your">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-4 12.7V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.3A7 7 0 0 0 12 2Zm3 11.6-1 .7V18h-4v-3.7l-1-.7A5 5 0 1 1 15 13.6ZM9 22v-2h6v2H9Z"/></svg>
      <span class="sheet-item__label">Your tips</span>
    </button>
    <button class="sheet-item" data-action="tips" data-tip="local">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-4 12.7V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.3A7 7 0 0 0 12 2Zm-2 9 4-2-2 4-4 2 2-4Z"/></svg>
      <span class="sheet-item__label">Local tips</span>
    </button>
    <button class="sheet-item" data-action="legal" data-legal="cgs">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 6h8v2H8V8Zm0 4h8v2H8v-2Zm0 4h6v2H8v-2Z"/></svg>
      <span class="sheet-item__label">Conditions générales de service</span>
    </button>
    <button class="sheet-item" data-action="legal" data-legal="privacy">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 18c-3.2-1.2-6-4.8-6-9V6.3l6-2.3 6 2.3V11c0 4.2-2.8 7.8-6 9Zm-1-10h2v6h-2v-6Zm0-4h2v2h-2V6Z"/></svg>
      <span class="sheet-item__label">Politique de confidentialité</span>
    </button>
  `;
  showSheet(html);
}

function showSheet(html) {
  elSheetContent.innerHTML = html;
  elSheet.classList.remove("is-hidden");
  elSheetBackdrop.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeSheet() {
  elSheet.classList.add("is-hidden");
  elSheetBackdrop.classList.add("is-hidden");
  elSheetContent.innerHTML = "";
  document.body.style.overflow = "";
}

function openPostSheet() {
  const html = `
    <button class="sheet-item" data-action="closeSheet">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 0 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z"/></svg>
      <span class="sheet-item__label">Fermer</span>
    </button>
    <div class="modal">
      <h2>Poster</h2>
      <p>Cette démo web reproduit l’interface. Pour une vraie publication, on branchera un backend (API) et une authentification.</p>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top: 10px;">
        <div class="pill">${cameraIcon()}<span><strong>Poster une photo</strong> — utilisez l’appareil photo ou choisissez dans la librairie</span></div>
        <div class="pill">${videoIcon()}<span><strong>Poster une vidéo</strong> — prenez une vidéo ou choisissez dans la librairie</span></div>
        <div class="pill">${textIcon()}<span><strong>Poster un texte</strong> — saisissez votre texte directement</span></div>
      </div>
    </div>
  `;
  showSheet(html);
}

function cameraIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4 7.8 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.8L15 4H9Zm3 14a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"/></svg>`;
}
function videoIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm14 3 4-2v10l-4-2V9Z"/></svg>`;
}
function textIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v3h-6v13h-4V7H4V4Z"/></svg>`;
}

function openLegal(type) {
  const title = type === "cgs" ? "Conditions générales de service" : "Politique de confidentialité";
  const body =
    type === "cgs"
      ? "Définissez ici les conditions d’utilisation (publication de contenus, responsabilités, droits d’auteur, etc.)."
      : "Définissez ici les informations de confidentialité (données collectées, cookies, stockage local, contact).";
  const html = `
    <button class="sheet-item" data-action="closeSheet">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 0 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z"/></svg>
      <span class="sheet-item__label">Fermer</span>
    </button>
    <div class="modal">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
      <p>Contact: <strong>contact@bezaha.mg</strong> (à personnaliser)</p>
    </div>
  `;
  showSheet(html);
}

function renderMore() {
  // Sur le web, cet écran ouvre un panneau comme sur vos captures.
  elBrandTitle.textContent = "Bezaha";
  elBtnBack.classList.add("is-hidden");
  openMoreSheet();
  return renderHome();
}

function syncBottomNav(route) {
  const items = /** @type {NodeListOf<HTMLButtonElement>} */ (
    document.querySelectorAll(".bottom-nav__item")
  );
  items.forEach((btn) => {
    const isActive = btn.dataset.route === route;
    btn.classList.toggle("is-active", isActive);
    if (isActive) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
}

function render() {
  closeSheet();
  syncBottomNav(state.route);
  closeMapModal();

  let html = "";
  if (state.detailId) {
    html = renderDetail(state.detailId);
  } else if (state.route === ROUTES.HOME) {
    html = renderHome();
  } else if (state.route === ROUTES.SPOTS) {
    html = renderFavorites();
  } else if (state.route === ROUTES.TODO) {
    html = state.listCategory ? renderCategoryList(state.listCategory) : renderThingsToDo();
  } else if (state.route === ROUTES.MORE) {
    html = renderMore();
  } else {
    html = renderHome();
  }

  elScreen.innerHTML = html;
  wireScreenHandlers();
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveFavorites();
}

function wireScreenHandlers() {
  elScreen.querySelectorAll("[data-fav]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = /** @type {HTMLElement} */ (e.currentTarget).dataset.fav;
      if (!id) return;
      toggleFavorite(id);
      render();
    });
  });

  elScreen.querySelectorAll("[data-open-map]").forEach((card) => {
    card.addEventListener("click", (e) => {
      const id = /** @type {HTMLElement} */ (e.currentTarget).dataset.openMap;
      if (!id) return;
      const spot = spotById(id);
      if (spot) openMapModal(spot);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      const id = /** @type {HTMLElement} */ (e.currentTarget).dataset.openMap;
      if (!id) return;
      const spot = spotById(id);
      if (spot) openMapModal(spot);
    });
  });

  elScreen.querySelectorAll("[data-action='seeall']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cat = /** @type {HTMLElement} */ (e.currentTarget).dataset.category;
      if (!cat) return;
      setRoute(ROUTES.TODO, { listCategory: cat, detailId: undefined });
    });
  });

  elScreen.querySelectorAll("[data-action='visit']").forEach((btn) => {
    btn.addEventListener("click", () => openLegal("cgs"));
  });

  elScreen.querySelectorAll("[data-action='legal']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const type = /** @type {HTMLElement} */ (e.currentTarget).dataset.legal;
      if (!type) return;
      openLegal(type);
    });
  });

  elScreen.querySelectorAll("[data-action='tile']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tile = /** @type {HTMLElement} */ (e.currentTarget).dataset.tile;
      if (!tile) return;
      const category =
        tile === "sakafogasy" ? "eat" : tile === "visite" ? "goingout" : "mustsee";
      setRoute(ROUTES.TODO, { listCategory: category, detailId: undefined });
    });
  });

  elScreen.querySelectorAll("[data-action='share']").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = /** @type {HTMLElement} */ (e.currentTarget).dataset.id;
      if (!id) return;
      const spot = spotById(id);
      if (!spot) return;
      const shareText = `${spot.title} — ${spot.subtitle}`;
      try {
        if (navigator.share) {
          await navigator.share({ title: "Bezaha", text: shareText, url: location.href });
        } else {
          await navigator.clipboard.writeText(shareText);
          openToast("Copié dans le presse-papiers");
        }
      } catch {
        openToast("Partage annulé");
      }
    });
  });

  elScreen.querySelectorAll("[data-action='togglefav']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = /** @type {HTMLElement} */ (e.currentTarget).dataset.id;
      if (!id) return;
      toggleFavorite(id);
      render();
    });
  });

  elScreen.querySelectorAll("[data-action='social']").forEach((btn) => {
    btn.addEventListener("click", () => openToast("À connecter à vos pages"));
  });

  initCarousels();
}

function initCarousels() {
  const carousels = /** @type {NodeListOf<HTMLElement>} */ (elScreen.querySelectorAll("[data-carousel]"));
  carousels.forEach((root) => {
    const track = /** @type {HTMLElement | null} */ (root.querySelector("[data-carousel-track]"));
    const dots = /** @type {HTMLElement | null} */ (root.querySelector("[data-carousel-dots]"));
    const btnPrev = /** @type {HTMLButtonElement | null} */ (root.querySelector("[data-carousel-btn='prev']"));
    const btnNext = /** @type {HTMLButtonElement | null} */ (root.querySelector("[data-carousel-btn='next']"));
    if (!track || !dots || !btnPrev || !btnNext) return;

    const slides = /** @type {HTMLElement[]} */ (Array.from(track.children));
    if (slides.length <= 1) {
      btnPrev.classList.add("is-hidden");
      btnNext.classList.add("is-hidden");
      dots.innerHTML = "";
      return;
    }

    dots.innerHTML = slides
      .map(
        (_, i) =>
          `<span class="dot ${i === 0 ? "is-active" : ""}" data-dot="${i}" role="button" tabindex="0" aria-label="Aller à ${i + 1}"></span>`
      )
      .join("");

    const goTo = (idx) => {
      const i = clamp(idx, 0, slides.length - 1);
      const slide = slides[i];
      const left = slide.offsetLeft - 2;
      track.scrollTo({ left, behavior: "smooth" });
    };

    btnPrev.addEventListener("click", () => goTo(getActiveIndex(track, slides) - 1));
    btnNext.addEventListener("click", () => goTo(getActiveIndex(track, slides) + 1));

    dots.querySelectorAll("[data-dot]").forEach((d) => {
      d.addEventListener("click", (e) => {
        const idx = Number(/** @type {HTMLElement} */ (e.currentTarget).dataset.dot || "0");
        goTo(idx);
      });
      d.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        const idx = Number(/** @type {HTMLElement} */ (e.currentTarget).dataset.dot || "0");
        goTo(idx);
      });
    });

    const update = () => {
      const idx = getActiveIndex(track, slides);
      dots.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("is-active", i === idx));
      btnPrev.classList.toggle("is-hidden", idx <= 0);
      btnNext.classList.toggle("is-hidden", idx >= slides.length - 1);
    };

    track.addEventListener("scroll", throttle(update, 80), { passive: true });
    update();
  });
}

function getActiveIndex(track, slides) {
  const x = track.scrollLeft + track.clientWidth * 0.35;
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < slides.length; i++) {
    const d = Math.abs(slides[i].offsetLeft - x);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

function throttle(fn, waitMs) {
  let last = 0;
  let t = /** @type {number | undefined} */ (undefined);
  return () => {
    const now = Date.now();
    const remaining = waitMs - (now - last);
    if (remaining <= 0) {
      last = now;
      fn();
      return;
    }
    if (t) return;
    t = window.setTimeout(() => {
      t = undefined;
      last = Date.now();
      fn();
    }, remaining);
  };
}

function wireGlobalHandlers() {
  document.querySelectorAll(".bottom-nav__item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const route = /** @type {HTMLElement} */ (e.currentTarget).dataset.route;
      if (!route) return;
      if (route === ROUTES.MORE) {
        setRoute(route, { detailId: undefined, listCategory: undefined });
        openMoreSheet();
      } else {
        setRoute(route, { detailId: undefined, listCategory: undefined });
      }
    });
  });

  elBtnBack.addEventListener("click", () => {
    if (state.detailId) {
      setRoute(state.route, { detailId: undefined });
      return;
    }
    if (state.listCategory) {
      setRoute(ROUTES.HOME, { listCategory: undefined });
      return;
    }
    setRoute(ROUTES.HOME, {});
  });

  elBtnFavorites.addEventListener("click", () => setRoute(ROUTES.SPOTS, { detailId: undefined }));

  elSheetBackdrop.addEventListener("click", closeSheet);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSheet();
      closeMapModal();
    }
  });

  elSheet.addEventListener("click", (e) => {
    const target = /** @type {HTMLElement} */ (e.target);
    const btn = target.closest("[data-action]");
    if (!btn) return;
    const action = /** @type {HTMLElement} */ (btn).dataset.action;
    if (!action) return;
    if (action === "closeSheet") closeSheet();
    if (action === "post") openPostSheet();
    if (action === "tips") openToast("Bientôt disponible");
    if (action === "legal") {
      const type = /** @type {HTMLElement} */ (btn).dataset.legal;
      if (type) openLegal(type);
    }
  });

  elBtnCloseMap.addEventListener("click", closeMapModal);
  elMapBackdrop.addEventListener("click", closeMapModal);
}

function openToast(message) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.id = "toast";
  el.textContent = message;
  el.style.position = "fixed";
  el.style.left = "50%";
  el.style.transform = "translateX(-50%)";
  el.style.bottom = "110px";
  el.style.padding = "10px 14px";
  el.style.borderRadius = "999px";
  el.style.border = "1px solid rgba(255,255,255,.12)";
  el.style.background = "rgba(0,0,0,.65)";
  el.style.backdropFilter = "blur(10px)";
  el.style.color = "rgba(255,255,255,.92)";
  el.style.zIndex = "200";
  el.style.fontWeight = "800";
  el.style.boxShadow = "0 18px 40px rgba(0,0,0,.6)";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1700);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function boot() {
  readRouteFromHash();
  wireGlobalHandlers();
  render();
}

window.addEventListener("hashchange", () => {
  readRouteFromHash();
  render();
});

boot();

