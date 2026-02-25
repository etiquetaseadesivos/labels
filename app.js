// =========================
    // 1) IMAGENS (troque aqui)
    // =========================
    const ASSETS = {
  logoUrl: "icons/logoea.png",
  placeholderLabel: "https://via.placeholder.com/800x800.png?text=ROTULO",
  placeholderBanner: "https://via.placeholder.com/1600x520.png?text=BANNER",

  // ícones (pode ser link do GitHub Pages também)
  iconWhatsapp: "imgs/icon-whatsapp.svg",
  iconInstagram: "imgs/icon-instagram.svg"
};

// =========================
// 1.1) DESCONTOS + CUPONS
// =========================
// Desconto padrão (editável):
// - globalPercent: aplica em tudo (0-100)
// - categories: { "PÁSCOA": 10, "VELAS": 5 }  -> % off por categoria
// - products: { "RPSC1": 15 } ou { "id_do_produto": 15 } -> % off por produto
const DISCOUNTS = {
  globalPercent: 0,
  categories: {},
  products: {}
};

// Cupons (editável):
// type: "percent" (porcentagem) | "fixed" (valor fixo em R$)
// value: 10 => 10% | 15 => R$15
// scope opcional: "global" | "category" | "product"
// target opcional: "PÁSCOA" (categoria) | "RPSC1" (ref) | "id"
const COUPONS = {
  "BEMVINDO10": { type: "percent", value: 10, scope: "global" },
  "PASCOA15":   { type: "percent", value: 15, scope: "category", target: "PÁSCOA" }
};


const FORMAT_ICONS = {
  "Redondos": "icons/cat_redondos.svg",
  "Quadrados": "icons/cat_quadrados.svg",
  "Especiais": "icons/cat_especiais.svg",
  "Todos": "icons/cat_todos.svg"
};

function getFormatIcon(format){
  return FORMAT_ICONS[format] || "";
}

    // =========================
    // 2) BANNERS (carrossel)
    //    Troque imageUrl e linkUrl quando quiser
    // =========================
    const BANNERS = [
      { image: "banners/banner1.png", linkUrl: "#" },
      { image: "banners/banner1.png", linkUrl: "#" },
      { image: "banners/banner1.png", linkUrl: "#" },
    ];

    // =========================
    // 3) WhatsApp destino (16) 988350242
    // =========================
    const WHATSAPP_NUMBER = "5516988350242";

    // =========================
    // 4) REGRAS DE PREÇO (editáveis)
    //    Global -> Categoria -> Produto
    // =========================
    const PRICE_RULES = {
      global: {
  baseUnit: 0.50,
  sizeMultipliers: { "3x3cm": 1.00, "5x5cm": 1.25, "6x6cm": 1.40, "7x7cm": 1.60 },
  qtyMultipliers:  { "100": 1.35, "500": 1.12, "1000": 1.00 },

  materialMultipliers: {
    "Couchê": 1.00,
    "Vinil Brilho": 1.35,
    "Vinil Fosco": 1.35
  }
},

      // Exemplo: para editar por categoria, basta criar/chutar valores aqui.
      // category: { "PÁSCOA": { baseUnit: 0.55, qtyMultipliers: { "100":1.45, "500":1.18, "1000":1.00 } } }
      category: {},

      // Exemplo: para editar um produto específico:
      // product: { "P001": { baseUnit: 0.65 } }
      product: {}
    };

    // =========================
    // 5) Opções padrão
    // =========================
    const DEFAULT_SIZES = ["3x3cm","5x5cm","6x6cm","7x7cm"];
    const DEFAULT_QTYS  = ["100","500","1000"];
    const DEFAULT_MATERIALS = ["Couchê", "Vinil Brilho", "Vinil Fosco"];

    // =========================
    // 6) PRODUTOS (cadastro fácil)
    //    Você pode:
    //    - mudar baseUnit por produto
    //    - mudar sizeOptions / qtyOptions por produto
    //    - mudar image
    // =========================
    const PRODUCTS = [
      {
        id:"P001",
        name:"Rótulo Páscoa Flores",
        format:"Especiais",
        category:"PÁSCOA",
        ref: "RPSC1",
        image: "labels/RPSC1.png",

        // opcionais (se não preencher, usa a regra global/categoria)
        // baseUnit: 0.50,
        // sizeOptions: ["3x3cm","5x5cm"],
        // qtyOptions: ["100","500","1000"]
      },
      { id:"P004", name:"Rótulo Páscoa Coelhinho Falante", format:"Especiais", category:"PÁSCOA", ref: "RPSC2", image: "labels/RPSC2.png" },
      { id:"P002", name:"Rótulo Páscoa Arbusto", format:"Quadrados", category:"PÁSCOA", ref: "RPSC3", image: "labels/RPSC3.png" },
      { id:"P004", name:"Rótulo Páscoa Xadrez", format:"Redondos", category:"PÁSCOA", ref: "RPSC4", image: "labels/RPSC4.png" },
      { id:"P005", name:"Rótulo Páscoa Premium", format:"Redondos", category:"PÁSCOA", ref: "RPSC5", image: "labels/RPSC5.png" },
      { id:"P006", name:"Rótulo Páscoa Turquesa", format:"Especiais", category:"PÁSCOA", ref: "RPSC6", image: "labels/RPSC6.png" }
    ];

    // =========================
    // 7) Estado
    // =========================
    const state = {
      format: "Todos",
      category: "TODOS",
      query: "",
      cart: {},  // key: cartItemId
      bannerIndex: 0,
      pWhatsapp: "",
      pInstagram: ""
    ,
      couponCode: "",
      coupon: null
    };

    const el = (id) => document.getElementById(id);

    function moneyBR(v){
      return v.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
    }

    function pricePartsBR(value){
  const v = Number(value) || 0;
  const intPart = Math.floor(v);
  const decPart = Math.round((v - intPart) * 100).toString().padStart(2, "0");

  // milhares pt-BR
  const intBR = intPart.toLocaleString("pt-BR");
  return { intBR, dec: "," + decPart };
}

function setBudgetValue(el, value){
  const { intBR, dec } = pricePartsBR(value);
  el.innerHTML = `<span class="cur">R$</span><span class="num">${intBR}</span><span class="dec">${dec}</span>`;

  // Auto-fit: diminui a fonte se não couber
  const max = 26;   // tamanho “normal”
  const min = 14;   // mínimo pra não ficar ilegível
  let size = max;

  el.style.fontSize = max + "px";
  // garante que está medindo depois de atualizar o HTML
  const maxWidth = el.parentElement.clientWidth;

  while(size > min && el.scrollWidth > maxWidth){
    size -= 1;
    el.style.fontSize = size + "px";
  }
}

    function onlyDigits(s){
  return (s || "").replace(/\D/g, "");
}

function formatBRPhone(digits){
  // 10 ou 11 dígitos (com DDD)
  const d = onlyDigits(digits).slice(0, 11);
  if(d.length === 0) return "";

  const ddd = d.slice(0, 2);
  const rest = d.slice(2);

  if(rest.length <= 4) return `(${ddd}) ${rest}`;

  // 10 dígitos: (DD) 9999-9999
  if(d.length === 10){
    const p1 = rest.slice(0, 4);
    const p2 = rest.slice(4, 8);
    return `(${ddd}) ${p1}-${p2}`;
  }

  // 11 dígitos: (DD) 99999-9999
  const p1 = rest.slice(0, 5);
  const p2 = rest.slice(5, 9);
  return `(${ddd}) ${p1}-${p2}`;
}

function normalizeInstagramId(value){
  let v = (value || "").trim().toLowerCase();

  // se a pessoa digitar @, remove
  v = v.replace(/^@+/, "");

  // remove espaços, acentos, e bloqueia caracteres fora do padrão do insta
  v = v.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  v = v.replace(/[^a-z0-9._]/g, "");
  v = v.slice(0, 30);

  return v;
}

    function cartCount(){
  // quantidade de itens (linhas) no carrinho
  return Object.keys(state.cart).length;
}

    function setCartCount(){
      el("cartCount").textContent = cartCount();
    }

    // =========================
    // 8) Regras de preço: merge
    // =========================
    function getMergedRule(product){
      const g = PRICE_RULES.global || {};
      const c = (PRICE_RULES.category && PRICE_RULES.category[product.category]) || {};
      const p = (PRICE_RULES.product && PRICE_RULES.product[product.id]) || {};
      const out = {
  baseUnit: (product.baseUnit ?? p.baseUnit ?? c.baseUnit ?? g.baseUnit) ?? 0.50,
  sizeMultipliers: { ...(g.sizeMultipliers||{}), ...(c.sizeMultipliers||{}), ...(p.sizeMultipliers||{}) },
  qtyMultipliers:  { ...(g.qtyMultipliers||{}),  ...(c.qtyMultipliers||{}),  ...(p.qtyMultipliers||{}) },
  materialMultipliers: { ...(g.materialMultipliers||{}), ...(c.materialMultipliers||{}), ...(p.materialMultipliers||{}) }
};
      return out;
    }

    
function getDiscountPercent(p){
  // produto ganha prioridade: p.discountPercent, depois DISCOUNTS.products[p.ref/id], depois categoria, depois global
  if(typeof p.discountPercent === "number") return p.discountPercent;
  if(p.ref && typeof DISCOUNTS.products[p.ref] === "number") return DISCOUNTS.products[p.ref];
  if(p.id && typeof DISCOUNTS.products[p.id] === "number") return DISCOUNTS.products[p.id];
  if(p.category && typeof DISCOUNTS.categories[p.category] === "number") return DISCOUNTS.categories[p.category];
  return DISCOUNTS.globalPercent || 0;
}

function getUnitPrice(product, sizeValue, qtyValue, materialValue){
  const rule = getMergedRule(product);
  const sizeMul = rule.sizeMultipliers?.[sizeValue] ?? 1.0;
  const qtyMul  = rule.qtyMultipliers?.[qtyValue] ?? 1.0;
  const matMul  = rule.materialMultipliers?.[materialValue] ?? 1.0;

  const raw = rule.baseUnit * sizeMul * qtyMul * matMul;
  const disc = getDiscountPercent(product);
  const final = raw * (1 - (disc/100));
  return Math.max(0, final);
}

    function getTotalPrice(product, sizeValue, qtyValue, materialValue){
  const unit = getUnitPrice(product, sizeValue, qtyValue, materialValue);
  const q = parseInt(qtyValue, 10) || 0;
  return unit * q;
}

    // =========================
    // 9) Filtros dinâmicos (só o que existe)
    // =========================
    function buildFormatosFromProducts(products){
      const set = new Set(products.map(p => p.format).filter(Boolean));
      const ordered = ["Redondos", "Quadrados", "Especiais"];
      const list = ordered.filter(x => set.has(x))
        .concat([...set].filter(x => !ordered.includes(x)).sort((a,b)=>a.localeCompare(b,"pt-BR")));
      return [{ key:"Todos", label:"TODOS", icon:"cloud" }].concat(
        list.map(f => ({
          key: f,
          label: f.toUpperCase(),
          icon: f === "Redondos" ? "circle" : f === "Quadrados" ? "square" : "heart"
        }))
      );
    }

    function buildCategoriasFromProducts(products){
      const set = new Set(products.map(p => p.category).filter(Boolean));
      const sorted = [...set].sort((a,b)=>a.localeCompare(b, "pt-BR"));
      return ["TODOS", ...sorted];
    }

    const FORMATOS_DIN = buildFormatosFromProducts(PRODUCTS);
    const CATEGORIAS_DIN = buildCategoriasFromProducts(PRODUCTS);

    function matches(p){
      const q = state.query.trim().toLowerCase();
      const matchFormat = state.format === "Todos" || p.format === state.format;
      const matchCat = state.category === "TODOS" || p.category === state.category;
      if(!matchFormat || !matchCat) return false;
      if(!q) return true;
      const hay = `${p.id} ${p.name} ${p.format} ${p.category}`.toLowerCase();
      return hay.includes(q);
    }

    // =========================
    // 10) Ícones simples
    // =========================
    function iconSvg(type){
      if(type === "circle"){
        return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>`;
      }
      if(type === "square"){
        return `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>`;
      }
      if(type === "heart"){
        return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.6-9.5-8.6C.6 9.2 2.3 6 5.8 6c1.8 0 3.2 1 4.2 2.3C11 7 12.4 6 14.2 6c3.5 0 5.2 3.2 3.3 6.4C19 16.4 12 21 12 21z"/></svg>`;
      }
      return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 15h10a4 4 0 0 0 0-8 5 5 0 0 0-9.6 1.6A3.5 3.5 0 0 0 7 15z"/></svg>`;
    }

function playCardAddFx(card, originEl){
  const fx = card.querySelector(".cardFx");
  if(!fx) return;

  // define o ponto de origem (canto do botão)
  const cardRect = card.getBoundingClientRect();
  const oRect = (originEl || card).getBoundingClientRect();

  const x = ((oRect.left + oRect.width*0.75) - cardRect.left) / cardRect.width * 100;
  const y = ((oRect.top + oRect.height*0.35) - cardRect.top) / cardRect.height * 100;

  fx.style.setProperty("--fx-x", Math.max(0, Math.min(100, x)) + "%");
  fx.style.setProperty("--fx-y", Math.max(0, Math.min(100, y)) + "%");

  fx.classList.remove("is-off");
  fx.classList.add("is-on");

  // fase de saída
setTimeout(() => {
  fx.classList.remove("is-on");
  fx.classList.add("is-off");
}, 1400);

setTimeout(() => {
  fx.classList.remove("is-off");
  fx.style.removeProperty("--fx-x");
  fx.style.removeProperty("--fx-y");
}, 1400 + 1800 + 300); // ~3500
}

    // =========================
    // 11) Render: Formatos
    // =========================
    function renderFormatTabs(){
      const wrap = el("formatTabs");
      wrap.innerHTML = "";
      FORMATOS_DIN.forEach(f => {
        const b = document.createElement("div");
        b.className = "tab" + (state.format === f.key ? " active" : "");
        const iconUrl = getFormatIcon(f.key);
b.innerHTML = `
  ${iconUrl ? `<img class="formatIcon" src="${iconUrl}" alt="">` : iconSvg(f.icon)}
  <span>${f.label}</span>
`;
        b.onclick = () => {
          state.format = f.key;
          renderFormatTabs();
          renderGrid();
        };
        wrap.appendChild(b);
      });
    }

    // =========================
    // 12) Render: Categorias
    // =========================
    function renderCategorias(){
      const list = el("catList");
      list.innerHTML = "";
      CATEGORIAS_DIN.forEach(c => {
        const btn = document.createElement("button");
        btn.className = "catBtn" + (state.category === c ? " active" : "");
        btn.textContent = c;
        btn.onclick = () => {
          state.category = c;
          renderCategorias();
          renderGrid();
        };
        list.appendChild(btn);
      });
    }

    // =========================
    // 13) Banner (carrossel)
    // =========================
    function renderBannerDots(){
      const dots = el("bannerDots");
      dots.innerHTML = "";
      BANNERS.forEach((_, idx) => {
        const d = document.createElement("div");
        d.className = "dot" + (idx === state.bannerIndex ? " active" : "");
        d.onclick = () => setBanner(idx);
        dots.appendChild(d);
      });
    }

    function setBanner(idx){
      if(!BANNERS.length) return;
      state.bannerIndex = (idx + BANNERS.length) % BANNERS.length;
      const b = BANNERS[state.bannerIndex];
      el("bannerImg").src = b.image || ASSETS.placeholderBanner;
      el("bannerLink").href = b.linkUrl || "#";
      renderBannerDots();
    }

    function nextBanner(){ setBanner(state.bannerIndex + 1); }
    function prevBanner(){ setBanner(state.bannerIndex - 1); }

    let bannerTimer = null;
    function startBannerAuto(){
      if(bannerTimer) clearInterval(bannerTimer);
      if(BANNERS.length <= 1) return;
      bannerTimer = setInterval(nextBanner, 5000);
    }


    function requirePersonalizationFields(){
  const w = el("pWhatsapp");
  const i = el("pInstagram");

  const whatsappOk = (w.value || "").trim().length >= 14; // (16) 99999-9999 -> 15 chars
  const instaOk = (i.value || "").trim().length > 0;

  if(whatsappOk && instaOk) return true;

  // scroll até os campos (topo)
  w.scrollIntoView({ behavior: "smooth", block: "center" });

  // destaca os que estão faltando
  if(!whatsappOk) w.classList.add("needAttention");
  if(!instaOk) i.classList.add("needAttention");

  // remove destaque depois de um tempo
  setTimeout(() => {
    w.classList.remove("needAttention");
    i.classList.remove("needAttention");
  }, 1800);

  return false;
}

function applyAutoYesToStartedCards(){
  if(!canAutoSelectYes()) return;

  document.querySelectorAll(".card[data-started='1']").forEach(card => {
    // respeita se já marcou NÃO
    const noRadio = card.querySelector(`input[type="radio"][value="Não"]`);
    if(noRadio && noRadio.checked) return;

    const yesRadio = card.querySelector(`input[type="radio"][value="Sim"]`);
    if(yesRadio && !yesRadio.checked){
      yesRadio.checked = true;
    }
  });
}

function canAutoSelectYes(){
  const w = (el("pWhatsapp").value || "").trim();
  const i = (el("pInstagram").value || "").trim();

  const whatsappOk = w.length >= 14; // (16) 99999-9999
  const instaOk = i.length > 0;

  return whatsappOk && instaOk;
}

    // =========================
    // 14) Grid
    // =========================
    function renderGrid(){
      const grid = el("grid");
      const items = PRODUCTS.filter(matches);
      grid.innerHTML = "";

      if(items.length === 0){
        const div = document.createElement("div");
        div.className = "empty";
        div.textContent = "Nenhum rótulo encontrado.";
        grid.appendChild(div);
        return;
      }

      items.forEach(p => {
        const card = document.createElement("article");
        card.className = "card";

        const sizeOptions = p.sizeOptions?.length ? p.sizeOptions : DEFAULT_SIZES;
        const qtyOptions  = p.qtyOptions?.length ? p.qtyOptions : DEFAULT_QTYS;

        const rule = getMergedRule(p);
        const fromText = moneyBR(rule.baseUnit);

        card.innerHTML = `
  <div class="thumb">
    <img src="${p.image || ASSETS.placeholderLabel}" alt="${p.name}">
    <div class="thumbTitle">${p.name}</div>

    <div class="thumbMeta">
      <div class="tag">CATEGORIA: ${p.category}</div>
      <div class="tag">FORMATO: ${p.format}</div>
    </div>
  </div>

  <div class="cardBody">
    <div class="protoRow">
  <div class="controls">
    <select class="select js-size" aria-label="Tamanho">
      <option value="">Tamanho</option>
      ${sizeOptions.map(s => `<option value="${s}">${s}</option>`).join("")}
    </select>

    <select class="select js-qty" aria-label="Quantidade">
      <option value="">Quantidade</option>
      ${qtyOptions.map(q => `<option value="${q}">${q} unid.</option>`).join("")}
    </select>

    <select class="select js-material" aria-label="Material">
      <option value="">Material</option>
      ${ (p.materialOptions?.length ? p.materialOptions : DEFAULT_MATERIALS)
          .map(m => `<option value="${m}">${m}</option>`).join("") }
    </select>
  </div>

  <div class="protoRight">
    <div class="budgetBox">
      <div class="budgetLabel js-budget-label">A partir de:</div>
      <div class="budgetValue js-budget-value">${fromText}</div>
      <div class="budgetHint js-budget-hint"></div>
    </div>

    <button class="addBtn js-add" aria-label="Adicionar ao carrinho" title="Adicionar ao carrinho">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 6h15l-2 9H8L6 6Z"></path>
        <path d="M6 6L5 3H2"></path>
        <circle cx="9" cy="20" r="1"></circle>
        <circle cx="18" cy="20" r="1"></circle>
      </svg>
    </button>
  </div>
</div>

    <div class="personalCard">
      <p class="pTitle">Deseja personalizar com seu:</p>

      <div class="pRow">
        <img class="pIcon" src="${ASSETS.iconWhatsapp}" alt="WhatsApp">
        <input class="pInlineInput js-pw-input" inputmode="numeric" autocomplete="tel" maxlength="15"
               placeholder="(00) 00000-0000" value="${state.pWhatsapp || ""}">
      </div>

      <div class="pRow">
        <img class="pIcon" src="${ASSETS.iconInstagram}" alt="Instagram">
        <input class="pInlineInput js-pi-input" autocapitalize="none" autocomplete="off" spellcheck="false"
               placeholder="seuinstagram" value="${state.pInstagram || ""}">
      </div>

      <div class="pChoice">
        <label class="radio">
          <input type="radio" name="pers_${p.id}" value="Sim" />
          <span>Sim</span>
        </label>
        <label class="radio">
          <input type="radio" name="pers_${p.id}" value="Não" />
          <span>Não</span>
        </label>
      </div>
    </div>
  </div>

  <div class="cardFx" aria-hidden="true">
  <span class="fx-fill"></span>
  <span class="fx-check">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  </span>
</div>
`;

        const sizeSel = card.querySelector(".js-size");
        const qtySel  = card.querySelector(".js-qty");
        const matSel  = card.querySelector(".js-material");
        
        const budgetLabel = card.querySelector(".js-budget-label");
        const budgetValue = card.querySelector(".js-budget-value");
        const budgetHint  = card.querySelector(".js-budget-hint");
        const addBtn      = card.querySelector(".js-add");

        function updateBudget(){
          const s = sizeSel.value;
          const q = qtySel.value;
          const m = matSel.value;

          const persSelected = card.querySelector(`input[name="pers_${p.id}"]:checked`)?.value || "";

          // pulsar quando estiver tudo preenchido
          if(s && q && persSelected){ addBtn.classList.add("pulse"); }
          else{ addBtn.classList.remove("pulse"); }

          if(!s || !q || !m){
            budgetLabel.textContent = "A partir de:";
            setBudgetValue(budgetValue, getMergedRule(p).baseUnit);
            budgetHint.textContent = "";
            return;
          }

          const total = getTotalPrice(p, s, q, m);
          budgetLabel.textContent = "Orçamento:";
          setBudgetValue(budgetValue, total);
          budgetHint.textContent = ""; // reservado se você quiser mostrar unitário depois
        }

        function autoSelectYesIfAllowed(){
  // se ele já escolheu "Não", respeita
  const noRadio = card.querySelector(`input[name="pers_${p.id}"][value="Não"]`);
  if(noRadio && noRadio.checked) return;

  // só marca sim se os campos do topo estiverem OK
  if(!canAutoSelectYes()) return;

  const yesRadio = card.querySelector(`input[name="pers_${p.id}"][value="Sim"]`);
  if(yesRadio && !yesRadio.checked){
    yesRadio.checked = true;
  }
}

sizeSel.onchange = () => {
  if(sizeSel.value){
    card.dataset.started = "1";
    autoSelectYesIfAllowed(); // <-- marca SIM se topo ok
  }
  updateBudget(); // <-- recalcula e atualiza botão pulse
};

qtySel.onchange = () => {
  if(qtySel.value){
    card.dataset.started = "1";
    autoSelectYesIfAllowed(); // <-- marca SIM se topo ok
  }
  updateBudget(); // <-- recalcula e atualiza botão pulse
};

matSel.onchange = () => {
  if(matSel.value){
    card.dataset.started = "1";
    autoSelectYesIfAllowed();
  }
  updateBudget();
};
        card.querySelectorAll(`input[name="pers_${p.id}"]`).forEach(r => {
  r.addEventListener("change", (ev) => {
    if(ev.target.value === "Sim"){
      card.dataset.started = "1"; // <-- adiciona isso aqui

      if(!requirePersonalizationFields()){
        ev.target.checked = false;
        return;
      }
    }
    updateBudget();
  });
});

addBtn.onclick = () => {
  const s = sizeSel.value;
  const q = qtySel.value;
  const m = matSel.value;

  if(!s || !q || !m){
    alert("Selecione tamanho, quantidade e material.");
    return;
  }

  const pers = card.querySelector(`input[name="pers_${p.id}"]:checked`)?.value || "";
  const unit = getUnitPrice(p, s, q, m);
  const total = getTotalPrice(p, s, q, m);

  const cartKey = `${p.id}__${s}__${q}__${m}__${pers || "NA"}`;

  state.cart[cartKey] = {
    key: cartKey,
    productId: p.id,
    name: p.name,
    format: p.format,
    category: p.category,
    size: s,
    qty: parseInt(q, 10),
    material: m,
    personalize: pers, // "Sim" | "Não" | ""
    unitPrice: unit,
    totalPrice: total,
    image: p.image || ASSETS.placeholderLabel,
    ref: p.ref || "",
  };

  setCartCount();
  renderCart();

  // bump no contador do carrinho
  const badge = document.querySelector("#cartCount");
  if(badge){
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }

  // FX no card inteiro (overlay)
  playCardAddFx(card, addBtn);

  // reset do produto após o FX (um único reset, sem duplicar)
  setTimeout(() => {
    sizeSel.value = "";
    qtySel.value = "";
    matSel.value = "";

    card.querySelectorAll(`input[name="pers_${p.id}"]`).forEach(r => r.checked = false);
    card.dataset.started = "0";

    updateBudget();
    addBtn.classList.remove("pulse");
  }, 1650);
};
        

        // Atualiza textos de personalização (topo) dentro do card
        const pwInputInline = card.querySelector(".js-pw-input");
        const piInputInline = card.querySelector(".js-pi-input");
        if(pwInputInline){
          pwInputInline.value = state.pWhatsapp || "";
          pwInputInline.addEventListener("input", (e) => {
            state.pWhatsapp = applyWhatsappMask(e.target.value);
            syncPersonalFields();
            // se o cliente começou a configurar o produto, já marca "Sim"
            if(card.dataset.started === "1") autoMarkSimIfPossible(card, p.id);
          });
        }
        if(piInputInline){
          piInputInline.value = state.pInstagram || "";
          piInputInline.addEventListener("input", (e) => {
            state.pInstagram = normalizeInstagram(e.target.value);
            e.target.value = state.pInstagram;
            syncPersonalFields();
            if(card.dataset.started === "1") autoMarkSimIfPossible(card, p.id);
          });
        }

        grid.appendChild(card);
      });
    }

// =========================
// 15) Carrinho + WhatsApp
// =========================
function renderCart(){

  const body = el("cartBody");
  const items = Object.values(state.cart);

  if(items.length === 0){
    body.innerHTML = `<div class="empty">Seu carrinho está vazio.</div>`;
    return;
  }

  body.innerHTML = items.map(i => {

    const personalize = i.personalize || "Não";

    return `
    <div class="cartItem">
      <div class="cartItemRow">
        
        <div class="cartThumb">
          <img src="${i.image || ASSETS.placeholderLabel}" alt="${i.name}">
        </div>

        <div class="cartItemText">

          <div class="cartProductTitle">
            ${i.name}
          </div>

          <div class="cartLine1">
            ${String(i.size).toUpperCase()} • ${i.qty} UNID • ${i.material}
          </div>

          ${
            personalize === "Sim"
            ? `
              <div class="cartLine2">
                Personalização: (Sim)
                <span class="dot">•</span>
                <img class="miniIcon" src="${ASSETS.iconWhatsapp}" alt="WhatsApp">
                ${state.pWhatsapp || "(00) 00000-0000"}
                <span class="dot">•</span>
                <img class="miniIcon" src="${ASSETS.iconInstagram}" alt="Instagram">
                ${state.pInstagram || "etiquetas.adesivos01"}
              </div>
            `
            : `
              <div class="cartLine2">
                Personalização: (Não)
              </div>
            `
          }

          <div class="cartLine3">
            Categoria: ${i.category} | Formato: ${i.format}${i.ref ? ` | ${i.ref}` : ""}
          </div>

        </div>

        <div class="cartRight">
          <div class="cartPrice">${moneyBR(i.totalPrice)}</div>
          <button class="btnRemove" data-key="${i.key}">Remover</button>
        </div>

      </div>
    </div>
    `;

  }).join("");

  // Remover item
  body.querySelectorAll(".btnRemove").forEach(btn => {
    btn.onclick = () => {
      delete state.cart[btn.dataset.key];
      setCartCount();
      renderCart();
    };
  });

}

function calcCartTotals(){
  const items = Object.values(state.cart);
  const subtotal = items.reduce((acc, it) => acc + (it.totalPrice || 0), 0);

  let discount = 0;
  let code = (state.couponCode || "").trim().toUpperCase();
  const cup = state.coupon;

  if(cup && code){
    // calcula subtotal elegível conforme o escopo
    let eligible = subtotal;
    if(cup.scope === "category"){
      eligible = items
        .filter(it => String(it.category || "").toUpperCase() === String(cup.target || "").toUpperCase())
        .reduce((acc, it) => acc + (it.totalPrice || 0), 0);
    } else if(cup.scope === "product"){
      eligible = items
        .filter(it => (it.ref && String(it.ref).toUpperCase() === String(cup.target || "").toUpperCase())
                   || (it.productId && String(it.productId).toUpperCase() === String(cup.target || "").toUpperCase()))
        .reduce((acc, it) => acc + (it.totalPrice || 0), 0);
    }

    if(cup.type === "percent"){
      discount = eligible * (cup.value/100);
    }else if(cup.type === "fixed"){
      discount = Math.min(eligible, cup.value);
    }
  }

  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total, code };
}

function tryApplyCoupon(rawCode){
  const code = String(rawCode || "").trim().toUpperCase();
  state.couponCode = code;

  if(!code){
    state.coupon = null;
    setCouponHint("");
    renderCart();
    return;
  }

  const c = COUPONS[code];
  if(!c){
    state.coupon = null;
    setCouponHint("Cupom inválido.");
    renderCart();
    return;
  }

  state.coupon = { code, ...c };
  setCouponHint(`Cupom aplicado: ${code}`);
  renderCart();
}

function setCouponHint(msg){
  const hint = document.getElementById("couponHint");
  if(hint) hint.textContent = msg || "";
}





    function buildWhatsAppMessage(){
      const items = Object.values(state.cart);
      const name = el("clientName").value.trim();

      const lines = [];
      lines.push("Olá! Quero fazer um pedido pelo catálogo:");
      if(name) lines.push(`Nome: ${name}`);
      if(state.pWhatsapp) lines.push(`WhatsApp informado: ${state.pWhatsapp}`);
      if(state.pInstagram) lines.push(`Instagram informado: ${state.pInstagram}`);
      lines.push("");

      items.forEach(i => {
        const pers = i.personalize ? ` | Personalização: ${i.personalize}` : "";
        lines.push(`• ${i.name} | ${i.category} / ${i.format} | ${i.size} | ${i.qty} unid.${pers} | Total: ${moneyBR(i.totalPrice)}`);
      });

      const totals = calcCartTotals();
      lines.push("");
      if(totals.code) lines.push(`Cupom: ${totals.code}`);
      lines.push(`Total do pedido: ${moneyBR(totals.total)}`);
      lines.push("");
      lines.push("Pode me orientar sobre o próximo passo?");
      return encodeURIComponent(lines.join("\n"));
    }

    function openWhatsApp(){
      const items = Object.values(state.cart);
      if(items.length === 0){
        alert("Seu carrinho está vazio.");
        return;
      }
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
      window.open(url, "_blank");
    }

    // Modal
    function openModal(){
      el("backdrop").style.display = "flex";
      el("backdrop").setAttribute("aria-hidden", "false");
      renderCart();
    }
    function closeModal(){
      el("backdrop").style.display = "none";
      el("backdrop").setAttribute("aria-hidden", "true");
    }

    // Personalização (topo)
    function syncPersonalizationToCards(){
      document.querySelectorAll(".js-pw").forEach(n => { n.textContent = state.pWhatsapp ? state.pWhatsapp : "( ) ____"; });
      document.querySelectorAll(".js-pi").forEach(n => { n.textContent = state.pInstagram ? state.pInstagram : "@____"; });
    }

    // Init
    el("logoImg").src = ASSETS.logoUrl;

    renderFormatTabs();
    renderCategorias();

    setBanner(0);
    el("bannerPrev").onclick = prevBanner;
    el("bannerNext").onclick = nextBanner;
    startBannerAuto();

    renderGrid();
    setCartCount();
    renderCart();

    el("search").addEventListener("input", (e) => {
      state.query = e.target.value;
      renderGrid();
    });

    el("cartBtn").onclick = openModal;
    el("closeModal").onclick = closeModal;
    el("backdrop").addEventListener("click", (e) => {
      if(e.target === el("backdrop")) closeModal();
    });

    el("checkout").onclick = openWhatsApp;

    // Cupom
    const couponInput = document.getElementById("couponCode");
    const couponBtn = document.getElementById("applyCoupon");
    if(couponInput){
      couponInput.addEventListener("input", (e) => {
        // só guarda, não aplica automaticamente
        state.couponCode = e.target.value;
      });
    }
    if(couponBtn){
      couponBtn.onclick = () => {
        tryApplyCoupon(couponInput ? couponInput.value : state.couponCode);
      };
    }


el("pWhatsapp").addEventListener("input", (e) => {
  const formatted = formatBRPhone(e.target.value);
  e.target.value = formatted;
  state.pWhatsapp = formatted;
  syncPersonalizationToCards();
  applyAutoYesToStartedCards();
});

el("pInstagram").addEventListener("input", (e) => {
  const id = normalizeInstagramId(e.target.value);
  e.target.value = id;
  state.pInstagram = id;
  syncPersonalizationToCards();
  applyAutoYesToStartedCards();
});
