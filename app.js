// =========================
    // 1) IMAGENS (troque aqui)
    // =========================
    const ASSETS = {
  logoUrl: "icons/logoea.png",
  placeholderLabel: "https://via.placeholder.com/800x800.png?text=ROTULO",
  placeholderBanner: "https://via.placeholder.com/1600x520.png?text=BANNER",

  // ícones (pode ser link do GitHub Pages também)
  iconWhatsapp: "icons/icon_whatsapp.svg",
  iconInstagram: "icons/icon_instagram.svg"
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
  {
    imageDesktop: "banners/banner1-desktop.png",
    imageMobile: "banners/banner2-mobile.png",
    linkUrl: "#"
  },
  {
    imageDesktop: "banners/banner2-desktop.png",
    imageMobile: "banners/banner3-mobile.png",
    linkUrl: "#"
  },
  {
    imageDesktop: "banners/banner3-desktop.png",
    imageMobile: "banners/banner2-mobile.png",
    linkUrl: "#"
  }
];

    // =========================
    // 3) WhatsApp destino • Atendimento
    // =========================
    const WHATSAPP_NUMBER = "5516992882931";

    // =========================
    // 4) REGRAS DE PREÇO (editáveis)
    //    Global -> Categoria -> Produto
    // =========================
    const PRICE_RULES = {
      global: {
  baseUnit: 0.50,
  sizeMultipliers: { "3x3cm": 1.00, "5x5cm": 1.25, "6x6cm": 1.40, "7x7cm": 1.60 },
  qtyMultipliers:  { "100": 1.35, "500": 1.12, "1000": 1.00 },

/*  materialMultipliers: {
    "Couchê": 1.00,
    "Vinil Brilho": 1.35,
    "Vinil Fosco": 1.35
  } */
},


      // Exemplo: para editar por categoria, basta criar/chutar valores aqui.
      // category: { "PÁSCOA": { baseUnit: 0.55, qtyMultipliers: { "100":1.45, "500":1.18, "1000":1.00 } } }
      category: {},

      // Exemplo: para editar um produto específico:
      // product: { "P001": { baseUnit: 0.65 } }
      product: {}
    };

    const FIXED_TOTAL_TABLE = {
  "3x3cm": { "100": 40.00,  "500": 70.00,  "1000": 90.00  },
  "4x4cm": { "100": 50.00,  "500": 80.00,  "1000": 160.00 },
  "5x5cm": { "100": 55.00,  "500": 125.00, "1000": 225.00 },
  "6x6cm": { "100": 60.00,  "500": 180.00, "1000": 324.00 }
};

    // =========================
    // 5) Opções padrão
    // =========================
    const DEFAULT_SIZES = ["3x3cm","4x4cm","5x5cm","6x6cm"];
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
  name:"Rótulo Páscoa Estrelinhas",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC1",
  image:"labels/RPSC1.png",
},
{
  id:"P002",
  name:"Rótulo Páscoa Balões",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC2",
  image:"labels/RPSC2.png",
},
{
  id:"P003",
  name:"Rótulo Páscoa Encanto",
  format:"Quadrados",
  category:"PÁSCOA",
  ref:"RPSC3",
  image:"labels/RPSC3.png",
},
{
  id:"P004",
  name:"Rótulo Páscoa Delicada",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC4",
  image:"labels/RPSC4.png",
},
{
  id:"P005",
  name:"Rótulo Páscoa Clássica",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC5",
  image:"labels/RPSC5.png",
},
{
  id:"P006",
  name:"Rótulo Páscoa Cestinha",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC6",
  image:"labels/RPSC6.png",
},
{
  id:"P007",
  name:"Rótulo Páscoa Medalhão",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC7",
  image:"labels/RPSC7.png",
},
{
  id:"P008",
  name:"Rótulo Páscoa Fofura",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC8",
  image:"labels/RPSC8.png",
},
{
  id:"P009",
  name:"Rótulo Páscoa Ondinhas",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC9",
  image:"labels/RPSC9.png",
},
{
  id:"P010",
  name:"Rótulo Páscoa Minimal",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC10",
  image:"labels/RPSC10.png",
},

{
  id:"P011",
  name:"Rótulo Páscoa Saltitante",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC11",
  image:"labels/RPSC11.png",
},
{
  id:"P012",
  name:"Rótulo Páscoa Geométrico",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC12",
  image:"labels/RPSC12.png",
},
{
  id:"P013",
  name:"Rótulo Páscoa Floral",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC13",
  image:"labels/RPSC13.png",
},
{
  id:"P014",
  name:"Rótulo Páscoa Espiadinha",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC14",
  image:"labels/RPSC14.png",
},
{
  id:"P015",
  name:"Rótulo Páscoa Ovinhos",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC15",
  image:"labels/RPSC15.png",
},
{
  id:"P016",
  name:"Rótulo Páscoa Moderna",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC16",
  image:"labels/RPSC16.png",
},
{
  id:"P017",
  name:"Rótulo Páscoa Faixinha",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC17",
  image:"labels/RPSC17.png",
},
{
  id:"P018",
  name:"Rótulo Páscoa Jardim",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC18",
  image:"labels/RPSC18.png",
},
{
  id:"P019",
  name:"Rótulo Páscoa Chevron",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC19",
  image:"labels/RPSC19.png",
},
{
  id:"P020",
  name:"Rótulo Páscoa Moldura",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC20",
  image:"labels/RPSC20.png",
},
{
  id:"P021",
  name:"Rótulo Páscoa Orelhinhas",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC21",
  image:"labels/RPSC21.png",
},
{
  id:"P022",
  name:"Rótulo Páscoa Elegância",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC22",
  image:"labels/RPSC22.png",
},
{
  id:"P023",
  name:"Rótulo Páscoa Arabesco",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC23",
  image:"labels/RPSC23.png",
},
{
  id:"P024",
  name:"Rótulo Páscoa Dourado",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC24",
  image:"labels/RPSC24.png",
},
{
  id:"P025",
  name:"Rótulo Páscoa Suave",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC25",
  image:"labels/RPSC25.png",
},
{
  id:"P026",
  name:"Rótulo Páscoa Encantada",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC26",
  image:"labels/RPSC26.png",
},
{
  id:"P027",
  name:"Rótulo Páscoa Nobre",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC27",
  image:"labels/RPSC27.png",
},
{
  id:"P028",
  name:"Rótulo Páscoa Imperial",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC28",
  image:"labels/RPSC28.png",
},
{
  id:"P029",
  name:"Rótulo Páscoa Rústica",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC29",
  image:"labels/RPSC29.png",
},
{
  id:"P030",
  name:"Rótulo Páscoa Refinada",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC30",
  image:"labels/RPSC30.png",
},
{
  id:"P031",
  name:"Rótulo Páscoa Primavera",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC31",
  image:"labels/RPSC31.png",
},
{
  id:"P032",
  name:"Rótulo Páscoa Turquesa",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC32",
  image:"labels/RPSC32.png",
},
{
  id:"P033",
  name:"Rótulo Páscoa Botânica",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC33",
  image:"labels/RPSC33.png",
},
{
  id:"P034",
  name:"Rótulo Páscoa Redonda",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC34",
  image:"labels/RPSC34.png",
},
{
  id:"P035",
  name:"Rótulo Páscoa Arco",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC35",
  image:"labels/RPSC35.png",
},
{
  id:"P036",
  name:"Rótulo Páscoa Abelhinha",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC36",
  image:"labels/RPSC36.png",
},
{
  id:"P037",
  name:"Rótulo Páscoa Terracota",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC37",
  image:"labels/RPSC37.png",
},
{
  id:"P038",
  name:"Rótulo Páscoa Zigzag",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC38",
  image:"labels/RPSC38.png",
},
{
  id:"P039",
  name:"Rótulo Páscoa Listras",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC39",
  image:"labels/RPSC39.png",
},
{
  id:"P040",
  name:"Rótulo Páscoa Creme",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC40",
  image:"labels/RPSC40.png",
},
{
  id:"P041",
  name:"Rótulo Páscoa Provençal",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC41",
  image:"labels/RPSC41.png",
},
{
  id:"P042",
  name:"Rótulo Páscoa Amarelinha",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC42",
  image:"labels/RPSC42.png",
},
{
  id:"P043",
  name:"Rótulo Páscoa Colorida",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC43",
  image:"labels/RPSC43.png",
},
{
  id:"P044",
  name:"Rótulo Páscoa Corações",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC44",
  image:"labels/RPSC44.png",
},
{
  id:"P045",
  name:"Rótulo Páscoa Lavanda",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC45",
  image:"labels/RPSC45.png",
},
{
  id:"P046",
  name:"Rótulo Páscoa Contemporânea",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC46",
  image:"labels/RPSC46.png",
},
{
  id:"P047",
  name:"Rótulo Páscoa Serenidade",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC47",
  image:"labels/RPSC47.png",
},
{
  id:"P048",
  name:"Rótulo Páscoa Pastel",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC48",
  image:"labels/RPSC48.png",
},
{
  id:"P049",
  name:"Rótulo Páscoa Romântica",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC49",
  image:"labels/RPSC49.png",
},
{
  id:"P050",
  name:"Rótulo Páscoa Iluminada",
  format:"Quadrados",
  category:"PÁSCOA",
  ref:"RPSC50",
  image:"labels/RPSC50.png",
},
{
  id:"P051",
  name:"Rótulo Páscoa Clean",
  format:"Quadrados",
  category:"PÁSCOA",
  ref:"RPSC51",
  image:"labels/RPSC51.png",
},
{
  id:"P052",
  name:"Rótulo Páscoa Rosé",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC52",
  image:"labels/RPSC52.png",
},
{
  id:"P053",
  name:"Rótulo Páscoa Doçura",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC53",
  image:"labels/RPSC53.png",
},
{
  id:"P054",
  name:"Rótulo Páscoa Charmosa",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC54",
  image:"labels/RPSC54.png",
},
{
  id:"P055",
  name:"Rótulo Páscoa Candy",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC55",
  image:"labels/RPSC55.png",
},
{
  id:"P056",
  name:"Rótulo Páscoa Criativa",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC56",
  image:"labels/RPSC56.png",
},
{
  id:"P057",
  name:"Rótulo Páscoa Inspiração",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC57",
  image:"labels/RPSC57.png",
},
{
  id:"P058",
  name:"Rótulo Páscoa Vibrante",
  format:"Quadrados",
  category:"PÁSCOA",
  ref:"RPSC58",
  image:"labels/RPSC58.png",
},
{
  id:"P059",
  name:"Rótulo Páscoa Delícia",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC59",
  image:"labels/RPSC59.png",
},
{
  id:"P060",
  name:"Rótulo Páscoa Autoral",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC60",
  image:"labels/RPSC60.png",
},
{
  id:"P061",
  name:"Rótulo Páscoa Elegante",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC61",
  image:"labels/RPSC61.png",
},
{
  id:"P062",
  name:"Rótulo Páscoa Azulada",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC62",
  image:"labels/RPSC62.png",
},
{
  id:"P063",
  name:"Rótulo Páscoa Vintage",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC63",
  image:"labels/RPSC63.png",
},
{
  id:"P064",
  name:"Rótulo Páscoa Verdinha",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC64",
  image:"labels/RPSC64.png",
},
{
  id:"P065",
  name:"Rótulo Páscoa Romântica",
  format:"Redondos",
  category:"PÁSCOA",
  ref:"RPSC65",
  image:"labels/RPSC65.png",
},
{
  id:"P066",
  name:"Rótulo Páscoa Coelhinho",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC66",
  image:"labels/RPSC66.png",
},
{
  id:"P067",
  name:"Rótulo Páscoa Menta",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC67",
  image:"labels/RPSC67.png",
},
{
  id:"P068",
  name:"Rótulo Páscoa Clássico",
  format:"Quadrados",
  category:"PÁSCOA",
  ref:"RPSC68",
  image:"labels/RPSC68.png",
},
{
  id:"P069",
  name:"Rótulo Páscoa Hexágono",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC69",
  image:"labels/RPSC69.png",
},
{
  id:"P070",
  name:"Rótulo Páscoa Escandinava",
  format:"Especiais",
  category:"PÁSCOA",
  ref:"RPSC70",
  image:"labels/RPSC70.png",
}
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

function setBudgetPlaceholder(el){
  el.innerHTML = `<span class="cur">R$</span><span class="num">--</span><span class="dec">,--</span>`;
  el.style.fontSize = ""; // reseta o auto-fit quando volta pro placeholder
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

function getUnitPrice(product, sizeValue, qtyValue){
  const q = parseInt(qtyValue, 10) || 0;

  // 1) Usa tabela fixa
  const fixedTotal = FIXED_TOTAL_TABLE?.[sizeValue]?.[qtyValue];
  if(typeof fixedTotal === "number" && q > 0){
    const disc = getDiscountPercent(product);
    const unit = fixedTotal / q;
    return Math.max(0, unit * (1 - (disc/100)));
  }

  // 2) fallback antigo (caso algum tamanho não esteja na tabela)
  const rule = getMergedRule(product);
  const sizeMul = rule.sizeMultipliers?.[sizeValue] ?? 1.0;
  const qtyMul  = rule.qtyMultipliers?.[qtyValue] ?? 1.0;

  const raw = rule.baseUnit * sizeMul * qtyMul;
  const disc = getDiscountPercent(product);
  const final = raw * (1 - (disc/100));
  return Math.max(0, final);
}

function getTotalPrice(product, sizeValue, qtyValue){
  const q = parseInt(qtyValue, 10) || 0;
  const unit = getUnitPrice(product, sizeValue, qtyValue);
  return Math.max(0, unit * q);
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

const FX_VISIBLE_TIME = 3000;   // tempo do check + texto
const FX_FADE_TIME = 1800;      // tempo da animação de saída
const FX_BUFFER = 300;

setTimeout(() => {
  fx.classList.remove("is-on");
  fx.classList.add("is-off");
}, FX_VISIBLE_TIME);

setTimeout(() => {
  fx.classList.remove("is-off");
  fx.style.removeProperty("--fx-x");
  fx.style.removeProperty("--fx-y");
}, FX_VISIBLE_TIME + FX_FADE_TIME + FX_BUFFER);
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

  const img = el("bannerImg");
  const link = el("bannerLink");

  img.classList.add("is-fading");

  const isMobile = window.innerWidth <= 768;
  const newSrc =
    (isMobile ? b.imageMobile : b.imageDesktop) ||
    b.image ||
    ASSETS.placeholderBanner;

  link.href = b.linkUrl || "#";

  setTimeout(() => {
    img.onload = () => img.classList.remove("is-fading");
    img.src = newSrc;

    // fallback por cache
    setTimeout(() => img.classList.remove("is-fading"), 450);
  }, 60);

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


function initBannerSwipe(){
  const banner = el("banner");
  if(!banner) return;

  let startX = 0;
  let startY = 0;
  let dragging = false;

  const THRESHOLD = 50; // px para considerar swipe

  banner.addEventListener("touchstart", (e) => {
    if(!e.touches || e.touches.length !== 1) return;
    dragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  banner.addEventListener("touchmove", (e) => {
    if(!dragging || !e.touches || e.touches.length !== 1) return;

    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;

    // se o movimento for mais horizontal do que vertical, impede o scroll da página
    if(Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10){
      e.preventDefault();
    }
  }, { passive: false });

  banner.addEventListener("touchend", (e) => {
    if(!dragging) return;
    dragging = false;

    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
    const dx = endX - startX;

    if(Math.abs(dx) < THRESHOLD) return;

    if(dx < 0) nextBanner();
    else prevBanner();

    startBannerAuto(); // reinicia o timer depois do swipe
  }, { passive: true });
}
    

function requirePersonalizationFields(card){
  // topo (existem no layout)
  const wTop = el("pWhatsapp");
  const iTop = el("pInstagram");

  // campos do card clicado
  const wCard = card?.querySelector(".js-pw-input");
  const iCard = card?.querySelector(".js-pi-input");

  // valida pelo topo (ou state, tanto faz porque você sincroniza)
  const whatsappOk = (wTop?.value || "").trim().length >= 14;
  const instaOk = (iTop?.value || "").trim().length > 0;

  if(whatsappOk && instaOk) return true;

  // SEM SCROLL: só foco sem puxar a tela
  const firstMissing =
    !whatsappOk ? (wCard || wTop) :
    !instaOk ? (iCard || iTop) :
    null;

  if(firstMissing){
    try { firstMissing.focus({ preventScroll: true }); }
    catch { firstMissing.focus(); }
  }

  // aplica o brilho azul igual (topo + card do produto)
  const mark = (el) => { if(el) el.classList.add("needAttention"); };
  const unmark = (el) => { if(el) el.classList.remove("needAttention"); };

  if(!whatsappOk){
    mark(wTop);
    mark(wCard);
    mark(wCard?.closest(".pfield"));
  }
  if(!instaOk){
    mark(iTop);
    mark(iCard);
    mark(iCard?.closest(".pfield"));
  }

  setTimeout(() => {
    unmark(wTop); unmark(iTop);
    unmark(wCard); unmark(iCard);
    unmark(wCard?.closest(".pfield"));
    unmark(iCard?.closest(".pfield"));
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

        const PLACEHOLDER_BUDGET_HTML = `<span class="cur">R$</span><span class="num">--</span><span class="dec">,--</span>`;


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
      <div class="budgetLabel js-budget-label">Orçamento:</div>
      <div class="budgetValue js-budget-value">${PLACEHOLDER_BUDGET_HTML}</div>
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

<div class="personalTitle">Deseja personalizar com suas informações?</div>

<div class="personalCard">
  <div class="pfield pfield--mini">
    <img class="pIco" src="${ASSETS.iconWhatsapp}" alt="WhatsApp">
    <input class="js-pw-input"
      inputmode="numeric"
      autocomplete="tel"
      placeholder="(00) 00000-0000"
      maxlength="15" />
  </div>

  <div class="pfield pfield--mini">
    <img class="pIco" src="${ASSETS.iconInstagram}" alt="Instagram">
    <input class="js-pi-input"
      inputmode="text"
      autocomplete="off"
      autocapitalize="none"
      spellcheck="false"
      placeholder="seuinstagram"
      maxlength="30" />
  </div>
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
  <div class="fx-text">Adicionado ao Carrinho</div>
</span>
</div>
`;

        const sizeSel = card.querySelector(".js-size");
        const qtySel  = card.querySelector(".js-qty");
       /* const matSel  = card.querySelector(".js-material"); */
        
        const budgetLabel = card.querySelector(".js-budget-label");
        const budgetValue = card.querySelector(".js-budget-value");
        const budgetHint  = card.querySelector(".js-budget-hint");
        const addBtn      = card.querySelector(".js-add");

        function updateBudget(){
          const s = sizeSel.value;
          const q = qtySel.value;
        /*  const m = matSel.value;*/

          const persSelected = card.querySelector(`input[name="pers_${p.id}"]:checked`)?.value || "";

          // pulsar quando estiver tudo preenchido
          if(s && q && persSelected){ addBtn.classList.add("pulse"); }
          else{ addBtn.classList.remove("pulse"); }
           
          if(persSelected === "Sim"){
            const card = addBtn.closest(".card");
            if(card && !requirePersonalizationFields(card)) return;
          }

          if(!s || !q){
              budgetLabel.textContent = "Orçamento:";
              setBudgetPlaceholder(budgetValue);
              budgetHint.textContent = "";
              return;
            }


          const total = getTotalPrice(p, s, q);
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

/* matSel.onchange = () => {
  if(matSel.value){
    card.dataset.started = "1";
    autoSelectYesIfAllowed();
  } 
  updateBudget();
}; */
card.querySelectorAll(`input[name="pers_${p.id}"]`).forEach(r => {

  // 1) trava o clique no "Sim" antes de mudar
  r.addEventListener("click", (ev) => {
    if(ev.target.value !== "Sim") return;

    if(!requirePersonalizationFields(card)){
      ev.preventDefault();
      ev.stopPropagation();
    }
  });

  // 2) change só para atualizar UI (orçamento)
  r.addEventListener("change", (ev) => {
    if(ev.target.value === "Sim"){
      // só seta started se passou na validação (garantia extra)
      if(!requirePersonalizationFields(card)){
        ev.target.checked = false;
        return;
      }
      card.dataset.started = "1";
    }
    updateBudget();
  });
});

addBtn.onclick = () => {
  const s = sizeSel.value;
  const q = qtySel.value;
/*  const m = matSel.value; */

  if(!s || !q){
    alert("Selecione tamanho e quantidade.");
    return;
  }

  const pers = card.querySelector(`input[name="pers_${p.id}"]:checked`)?.value || "";
  const unit = getUnitPrice(p, s, q);
  const total = getTotalPrice(p, s, q);

  const cartKey = `${p.id}__${s}__${q}__${pers || "NA"}`;

  state.cart[cartKey] = {
    key: cartKey,
    productId: p.id,
    name: p.name,
    format: p.format,
    category: p.category,
    size: s,
    qty: parseInt(q, 10),
  /*  material: m, */
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
  /*  matSel.value = ""; */

    card.querySelectorAll(`input[name="pers_${p.id}"]`).forEach(r => r.checked = false);
    card.dataset.started = "0";

    updateBudget();
    addBtn.classList.remove("pulse");
  }, 1650);
};
        

// ===== Personalização (topo e cards) - sincronização total =====
const pwTop = el("pWhatsapp");
const igTop = el("pInstagram");

function syncAllPersonalFields(){
  // topo
  if (pwTop && pwTop.value !== state.pWhatsapp) pwTop.value = state.pWhatsapp || "";
  if (igTop && igTop.value !== state.pInstagram) igTop.value = state.pInstagram || "";

  // todos os cards
  document.querySelectorAll(".js-pw-input").forEach(inp => {
    if (inp.value !== (state.pWhatsapp || "")) inp.value = state.pWhatsapp || "";
  });
  document.querySelectorAll(".js-pi-input").forEach(inp => {
    if (inp.value !== (state.pInstagram || "")) inp.value = state.pInstagram || "";
  });

  // previews (se você ainda usa em algum lugar)
  document.querySelectorAll(".js-pw").forEach(t => t.textContent = state.pWhatsapp ? state.pWhatsapp : "---");
  document.querySelectorAll(".js-pi").forEach(t => t.textContent = state.pInstagram ? state.pInstagram : "---");
}

function setWhatsappFromAnyInput(raw){
  const v = formatBRPhone(raw);     // <-- FUNÇÃO CERTA no seu app.js
  state.pWhatsapp = v;
  syncAllPersonalFields();
}

function setInstagramFromAnyInput(raw){
  const v = normalizeInstagramId(raw); // já existe no seu app.js
  state.pInstagram = v;
  syncAllPersonalFields();
}

// topo -> todos
if(pwTop && !pwTop.dataset.bound){
  pwTop.dataset.bound = "1";
  pwTop.addEventListener("input", () => setWhatsappFromAnyInput(pwTop.value));
}
if(igTop && !igTop.dataset.bound){
  igTop.dataset.bound = "1";
  igTop.addEventListener("input", () => setInstagramFromAnyInput(igTop.value));
}

// card atual -> todos
const pwCard = card.querySelector(".js-pw-input");
const igCard = card.querySelector(".js-pi-input");

if(pwCard){
  pwCard.addEventListener("input", () => setWhatsappFromAnyInput(pwCard.value));
}
if(igCard){
  igCard.addEventListener("input", () => setInstagramFromAnyInput(igCard.value));
}

// ao criar o card, já puxa o valor atual do estado
syncAllPersonalFields();

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

    // Atualiza total do carrinho (NOVO)
const total = Object.values(state.cart).reduce((acc, item) => acc + (item.totalPrice || 0), 0);
const totalEl = el("cartTotalValue");
if(totalEl) totalEl.textContent = moneyBR(total);

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
            ${String(i.size).toUpperCase()} • ${i.qty} UNID
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

  const lines = [];
  lines.push("Olá! Gostaria de solicitar um orçamento de rótulos:");
  lines.push("");

  items.forEach(i => {
    lines.push(`• ${i.name}`);
    if(i.ref) lines.push(`• REF: ${i.ref}`);
    lines.push(`Tamanho: ${i.size}`);
    lines.push(`Quantidade: ${i.qty}`);
    lines.push(`Valor: ${moneyBR(i.totalPrice)}`);
    if(i.personalize) lines.push(`Personalização: ${i.personalize}`);
    lines.push("");
  });

  // WhatsApp e Instagram sempre no final
  if(state.pWhatsapp) lines.push(`WhatsApp: ${state.pWhatsapp}`);
  if(state.pInstagram) lines.push(`Instagram: ${state.pInstagram}`);

  lines.push("");

  const totals = calcCartTotals();
  lines.push(`Valor total do pedido: ${moneyBR(totals.total)}`);

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

function syncPersonalizationToCards(){
  // Atualiza previews antigos (se ainda existirem)
  document.querySelectorAll(".js-pw").forEach(elm => {
    elm.textContent = state.pWhatsapp ? state.pWhatsapp : "---";
  });
  document.querySelectorAll(".js-pi").forEach(elm => {
    elm.textContent = state.pInstagram ? state.pInstagram : "---";
  });

  // Atualiza inputs dentro dos cards (NOVO)
  document.querySelectorAll(".js-pw-input").forEach(inp => {
    if (document.activeElement !== inp) inp.value = state.pWhatsapp ? state.pWhatsapp : "";
  });
  document.querySelectorAll(".js-pi-input").forEach(inp => {
    if (document.activeElement !== inp) inp.value = state.pInstagram ? state.pInstagram : "";
  });
}

    // Init
    el("logoImg").src = ASSETS.logoUrl;

    renderFormatTabs();
    renderCategorias();

    setBanner(0);
    initBannerSwipe();
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
