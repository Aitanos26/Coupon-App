// ============= DOM Elements =============

const modeSelect = document.getElementById("modeSelect");
const randomMode = document.getElementById("randomMode");
const manualMode = document.getElementById("manualMode");

const modeRandomBtn = document.getElementById("modeRandom");
const modeManualBtn = document.getElementById("modeManual");
const backToModeSelect = document.getElementById("backToModeSelect");
const backToModeSelectManual = document.getElementById("backToModeSelectManual");

const randomResult = document.getElementById("randomResult");
const noCouponRandom = document.getElementById("noCouponRandom");
const couponTitle = document.getElementById("couponTitle");
const couponDesc = document.getElementById("couponDesc");
const retryBtn = document.getElementById("retryRandom");
const retryCountEl = document.getElementById("retryCount");
const confirmCouponBtn = document.getElementById("confirmCoupon");

const couponList = document.getElementById("couponList");
const noCouponManual = document.getElementById("noCouponManual");

// ============= 1. Lista Coupon =============

const coupons = [
  {
    id: 1,
    title: "Cena in casa da star",
    desc: "Tu scegli il giorno, io preparo una cena speciale a casa, solo per noi.",
    category: "Date e momenti insieme",
  },
  {
    id: 2,
    title: "Passeggiata stellata in spiaggia",
    desc: "Passeggiata seriale in spiaggia sotto le stelle, mano nella mano, senza orari.",
    category: "Date e momenti insieme",
  },
  {
    id: 3,
    title: "Giornata senza orologi",
    desc: "Un intero giorno senza pensare all’ora: facciamo quello che ci viene in mente.",
    category: "Date e momenti insieme",
  },
  {
    id: 4,
    title: "Film‑festa a tema tuo",
    desc: "Tu scegli il film, io preparo la serata: coperta, luci soffuse, popcorn.",
    category: "Date e momenti insieme",
  },
  {
    id: 5,
    title: "Giornata‑mamma (senza impegni)",
    desc: "In questa giornata, per te non c’è niente da fare: io penso a tutto, tu ti rilassi.",
    category: "Gesti quotidiani teneri",
  },
  {
    id: 6,
    title: "Abbraccio da record",
    desc: "Abbraccio lunghissimo, senza parlare, senza correre, solo contatto e calma.",
    category: "Gesti quotidiani teneri",
  },
  {
    id: 7,
    title: "Colonna sonora della giornata",
    desc: "Mandami una canzone o una playlist che ti rappresenta, la rendo la tua colonna sonora del giorno.",
    category: "Gesti quotidiani teneri",
  },
  {
    id: 8,
    title: "Momento coccole senza stop",
    desc: "Ti dedico coccole pure: carezze, abbracci, parole dolci, finché non ti senti piena.",
    category: "Gesti quotidiani teneri",
  },
  {
    id: 9,
    title: "Sfida‑complimenti",
    desc: "Ci scambiamo complimenti veri, uno dopo l’altro, senza ridere e senza imbarazzo.",
    category: "Sfide e giochi leggeri",
  },
  {
    id: 10,
    title: "20 minuti senza schermi",
    desc: "Stop a telefoni, TV, tablet: solo noi, parole, giochi o semplice silenzio.",
    category: "Sfide e giochi leggeri",
  },
  {
    id: 11,
    title: "Gioco‑ruolo leggero",
    desc: "Inventiamo insieme una piccola scena romantica o buffa e la interpretiamo.",
    category: "Sfide e giochi leggeri",
  },
  {
    id: 12,
    title: "Momento puzzle",
    desc: "Una serata in cui ci mettiamo seduti a finire un puzzle insieme, ridendo e chiacchierando.",
    category: "Sfide e giochi leggeri",
  },
  {
    id: 13,
    title: "Massaggio da 20 minuti",
    desc: "20 minuti di massaggio rilassante, concentrato sulle parti del corpo che ti fanno stare meglio.",
    category: "Destinazioni di cura e relax",
  },
  {
    id: 14,
    title: "Colazione a letto",
    desc: "Ti porto la colazione direttamente a letto, con caffè, qualcosa di dolce e tempo lento.",
    category: "Destinazioni di cura e relax",
  },
  {
    id: 15,
    title: "Percorso Spa casalingo",
    desc: "30 minuti fuori a camminare lentamente, seguiti da 30 minuti in casa con maschera, tè e musica soft.",
    category: "Destinazioni di cura e relax",
  },
  {
    id: 16,
    title: "Silenzio detossinante",
    desc: "30 minuti in cui non parliamo, non guardiamo schermi, non facciamo nulla di urgente: solo respiro e contatto.",
    category: "Destinazioni di cura e relax",
  },
  {
    id: 17,
    title: "Cinema: serata grande schermo",
    desc: "Scegli insieme il film e il giorno del cinema: popcorn, sedili vicini e il mio braccio come poggiapoggiate.",
    category: "Attività fuori casa",
  },
  {
    id: 18,
    title: "Cena fuori speciale",
    desc: "Ti porto fuori a cena in un posto che ti piace, con tempo lento e niente da pensare.",
    category: "Attività fuori casa",
  },
  {
    id: 19,
    title: "Giornata al mare",
    desc: "Una giornata in spiaggia o in riva al mare: sole, acqua, sabbia e noi, senza fretta.",
    category: "Attività fuori casa",
  },
  {
    id: 20,
    title: "Serata sensoriale",
    desc: "Luce soffusa, musica morbida e tocqui lenti e attenti, solo ciò che ti fa sentire a tuo agio.",
    category: "Esperienze di intimità",
  },
  {
    id: 21,
    title: "Doccia romantica e sensuale",
    desc: "Una doccia per due con acqua calda, carezze leggere e la possibilità di fermarsi o andare oltre a tuo piacimento.",
    category: "Esperienze di intimità",
  },
  {
    id: 22,
    title: "Gioco dita",
    desc: "Un momento in cui ti lasci guidare dalle mie mani: tocqui lenti e crescenti, sempre entro i tuoi limiti.",
    category: "Esperienze di intimità",
  },
  {
    id: 23,
    title: "Kiss moment",
    desc: "Dieci minuti dedicati solo ai baci, ovunque tu senta di volerli, senza fretta.",
    category: "Esperienze di intimità",
  },
  {
    id: 24,
    title: "Notte atmosfera",
    desc: "Tu decidi l’atmosfera: candele, musica, profumo, pigiama o meno, io mi adatto al tuo ritmo.",
    category: "Esperienze di intimità",
  },
  {
    id: 25,
    title: "Gioco di ruolo hot",
    desc: "Un gioco di ruoli più audace, da concordare prima: tu scegli il tema, io seguo le tue indicazioni, sempre entro i confini condivisi.",
    category: "Esperienze di intimità",
  },
];

// Mappatura categorie → variabile CSS (per colore di sfondo/badge)
const categoryColors = {
  "Date e momenti insieme": "1",
  "Gesti quotidiani teneri": "2",
  "Sfide e giochi leggeri": "3",
  "Destinazioni di cura e relax": "4",
  "Attività fuori casa": "5",
  "Esperienze di intimità": "6",
};

// ============= 2. Gestione localStorage ==============

const STORAGE_KEY = "couponHistory";

function getHistory() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function markCouponAsRedeemed(id, date = new Date()) {
  const history = getHistory();
  history[id] = date.toISOString();
  saveHistory(history);
}

function wasRedeemedThisMonth(id) {
  const history = getHistory();
  const last = history[id];
  if (!last) return false;

  const lastDate = new Date(last);
  const now = new Date();
  const monthsDiff =
    (now.getFullYear() - lastDate.getFullYear()) * 12 + (now.getMonth() - lastDate.getMonth());
  return monthsDiff < 1;
}

// ============= 3. Logica: coupon disponibili ==============

function getCouponsAvailable() {
  return coupons.filter((c) => !wasRedeemedThisMonth(c.id));
}

// ============= 4. Modo CASUALE (lasciato identico) ==============

let currentRandomCoupon = null;
let randomAttempts = 0;

function pickRandomAvailable() {
  const available = getCouponsAvailable();
  if (available.length === 0) return null;

  const index = Math.floor(Math.random() * available.length);
  return available[index];
}

function tryPickAndShow() {
  const coupon = pickRandomAvailable();

  if (!coupon) {
    randomResult.classList.add("hidden");
    randomResult.classList.remove("shown");
    noCouponRandom.classList.remove("hidden");
    noCouponRandom.classList.add("shown");
    return;
  }

  currentRandomCoupon = coupon;
  couponTitle.textContent = coupon.title;
  couponDesc.textContent = coupon.desc;

  retryCountEl.textContent = 2 - randomAttempts;

  randomResult.classList.remove("hidden");
  randomResult.classList.add("shown");
  noCouponRandom.classList.add("hidden");
  noCouponRandom.classList.remove("shown");
}

function setupRandomMode() {
  if (noCouponRandom.classList.contains("hidden")) {
    noCouponRandom.classList.remove("hidden");
    noCouponRandom.classList.add("shown");
  }

  randomAttempts = 0;
  tryPickAndShow();
}

// Bottone “Ritenta”
retryBtn.addEventListener("click", () => {
  if (!currentRandomCoupon) return;
  if (randomAttempts >= 2) return;

  randomAttempts++;
  tryPickAndShow();
});

// Bottone “Conferma scelta”
confirmCouponBtn.addEventListener("click", () => {
  if (!currentRandomCoupon) return;
  markCouponAsRedeemed(currentRandomCoupon.id);

  // Feedback visivo sul coupon
  couponTitle.classList.add("coupon-tested");
  couponDesc.style.opacity = "0.85";
  confirmCouponBtn.disabled = true;
  retryBtn.disabled = true;
});

// Torna indietro a schermata iniziale
backToModeSelect.addEventListener("click", () => {
  randomMode.classList.add("hidden");
  randomMode.classList.remove("shown");
  modeSelect.classList.remove("hidden");
  modeSelect.classList.add("shown");
});

// ============= 5. Modo MANUALE — LISTA COMPLETA DI COUPON  ==============

function renderCouponList() {
  const available = getCouponsAvailable();
  const history = getHistory();

  // Pulisci lista
  couponList.innerHTML = "";

  // Raggruppa per categoria se vuoi, o metti in ordine lineare
  available.forEach((coupon) => {
    const item = document.createElement("div");
    item.className = "coupon-item";
    item.dataset.couponId = coupon.id;

    const isUsed = !!history[coupon.id];
    const hasBeenUsedThisMonth = isUsed && wasRedeemedThisMonth(coupon.id);

    if (hasBeenUsedThisMonth) {
      item.classList.add("used");
    } else {
      item.classList.add("clickable");
    }

    const colorKey = categoryColors[coupon.category] || "1";
    const bg = `var(--cat-${colorKey}-bg)`;
    const border = `var(--cat-${colorKey})`;
    item.style.setProperty("--card-bg", bg);
    item.style.setProperty("--card-border", border);

    const inner = `
      <h3>${coupon.title}</h3>
      <p>${coupon.desc}</p>
      <span class="category-badge" style="background: var(--cat-${colorKey}); color: #fff;">
        ${coupon.category}
      </span>
    `;
    item.innerHTML = inner;

    couponList.appendChild(item);
  });

  // Se non ci sono coupon disponibili
  if (available.length === 0) {
    noCouponManual.classList.remove("hidden");
    noCouponManual.classList.add("shown");
  } else {
    noCouponManual.classList.add("hidden");
    noCouponManual.classList.remove("shown");
  }
}

// Gestisci il clic su un coupon nella lista
couponList.addEventListener("click", (ev) => {
  const item = ev.target.closest(".coupon-item");
  if (!item || item.classList.contains("used")) return;

  const id = parseInt(item.dataset.couponId, 10);
  const coupon = coupons.find((c) => c.id === id);
  if (!coupon) return;

  // Conferma il coupon
  markCouponAsRedeemed(id);

  // Stato visivo
  item.classList.add("used");
  item.classList.add("confirmed");
  const elems = item.querySelectorAll("*");
  elems.forEach((el) => {
    if (el !== item.querySelector(".coupon-confirmation")) {
      el.style.opacity = "0.65";
    }
  });

  // Aggiungi feedback di conferma
  const confirmation = document.createElement("div");
  confirmation.className = "coupon-confirmation";
  confirmation.textContent = "Coupon scelto! ✨";
  item.appendChild(confirmation);

  // Rimuovi feedback dopo 2 secondi
  setTimeout(() => {
    if (item.contains(confirmation)) {
      item.removeChild(confirmation);
    }
  }, 2000);
});

// ============= 6. Inizializzazione e gestione modalità ==============

// Nascondi le sezioni “secondarie” all’avvio
randomMode.classList.add("hidden");
manualMode.classList.add("hidden");

// Scegli modalità “casuale”
modeRandomBtn.addEventListener("click", () => {
  modeSelect.classList.add("hidden");
  modeSelect.classList.remove("shown");
  randomMode.classList.remove("hidden");
  randomMode.classList.add("shown");
  setupRandomMode();
});

// Scegli modalità “manuale” (lista completa)
modeManualBtn.addEventListener("click", () => {
  modeSelect.classList.add("hidden");
  modeSelect.classList.remove("shown");
  manualMode.classList.remove("hidden");
  manualMode.classList.add("shown");
  renderCouponList();
});

// Torna indietro a schermata iniziale da modo manuale
backToModeSelectManual.addEventListener("click", () => {
  manualMode.classList.add("hidden");
  manualMode.classList.remove("shown");
  modeSelect.classList.remove("hidden");
  modeSelect.classList.add("shown");
});
