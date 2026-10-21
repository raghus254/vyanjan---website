const categories = ["सभी", ...new Set(MENU_ITEMS.map(item => item.category))];
const filters = document.querySelector("#filters");
const grid = document.querySelector("#menuGrid");
let activeCategory = "सभी";
let language = "hi";
const englishMenu = [
  ["Stuffed Snack", "A crisp, savoury filling served with chutney"], ["Taco Platter", "Tacos with colourful fillings and sauce"],
  ["Sev Chaat", "A mix of yoghurt, spices and crisp sev"], ["Grilled Chicken", "Spiced grilled chicken with onion and lemon"],
  ["Fruit Raita", "Yoghurt topped with fresh fruit"], ["Dahi Bhalla Chaat", "Soft bhallas with yoghurt, chutneys and spices"],
  ["Chef's Special Sandwich", "A hearty sandwich served with sides"], ["Yoghurt Chaat", "Yoghurt chaat with sweet and tangy chutneys"],
  ["Creamy Chicken", "Chicken in a creamy sauce with fresh herbs"], ["Fresh Salad Platter", "Fresh vegetables with lemon and green chilli"],
  ["Paneer Curry", "Paneer in a smooth tomato gravy"], ["Dahi Vada", "Dahi vada topped with yoghurt and sweet chutney"],
  ["Snack Platter", "A sharing platter of kebabs and chicken"], ["Grilled Chicken Bites", "Spiced grilled bites served with chutney"],
  ["Seekh Kebab Platter", "Kebabs served with chutney and sides"], ["Kebab Bites", "Crisp kebab bites with green chutney"],
  ["Crispy Stuffed Snack", "Golden, crisp and served with green chutney"], ["Masala Prawns", "Prawns tossed with herbs and spices"],
  ["Dal Makhani", "Creamy lentils finished with butter and cream"]
];
MENU_ITEMS.forEach((item, index) => { [item.enName, item.enDescription] = englishMenu[index]; });

const words = {
  hi: { navMenu:"मेन्यू", navAbout:"हमारे बारे में", navGallery:"तस्वीरें", navOrder:"ऑर्डर करें ↗", heroEyebrow:"ताज़ा बना • दिल से परोसा", heroTitle:"हर निवाले में<br><em>कुछ खास।</em>", heroText:"चटपटे स्वाद से लेकर पसंदीदा क्लासिक्स तक—आपके लिए प्यार से तैयार किए गए व्यंजन।", heroButton:"मेन्यू देखें <b>↓</b>", storyLink:"हमारी कहानी <span>↗</span>", note:"आपका अगला पसंदीदा स्वाद<br><strong>यहीं मिल सकता है।</strong>", tagSmall:"आज का स्वाद", tagBig:"शेफ स्पेशल", heroBottom1:"अच्छा खाना, अच्छा मूड", heroBottom2:"↓ स्क्रोल करके मेन्यू देखें", heroBottom3:"ताज़गी • स्वाद • अपनापन", menuEyebrow:"हमारा मेन्यू", menuTitle:"कुछ स्वादिष्ट<br><em>चुनिए।</em>", menuIntro:"हमारे पुराने पसंदीदा व्यंजनों की तस्वीरें। आइटम के नाम और कीमत आप <code>menu.js</code> फ़ाइल में बदल सकते हैं।", aboutEyebrow:"हमारी छोटी सी कहानी", aboutTitle:"खाने में स्वाद,<br><em>परोसने में प्यार।</em>", aboutText:"Vyanjan में हर प्लेट को खास बनाने की कोशिश है। यहाँ आपको चटपटे स्नैक्स, चाट, ग्रिल्ड स्वाद और मनपसंद करी—सब एक ही जगह मिलेंगे।", aboutNote:"यह परिचय नमूना है—इसे अपनी दुकान, शहर और खासियत के हिसाब से बदलें।", contactLink:"हमसे बात करें <span>↗</span>", galleryEyebrow:"स्वाद की झलक", galleryTitle:"पहले <em>देखिए।</em>", galleryIntro:"आपकी भेजी हुई सभी 19 तस्वीरें इस वेबसाइट में शामिल हैं।", contactEyebrow:"ऑर्डर और संपर्क", contactTitle:"भूख लगी है?<br><em>बात करते हैं।</em>", contactText:"अपना WhatsApp नंबर और शहर नीचे दिए गए निर्देशों के अनुसार जोड़ें, फिर ग्राहक सीधे आपसे संपर्क कर पाएँगे।", orderButton:"WhatsApp पर ऑर्डर करें <b>↗</b>", footerTagline:"अच्छे स्वाद की अपनी कहानी।", backTop:"ऊपर जाएँ ↑", price:"कीमत<br><b>पूछें</b>", ask:"नमस्ते! मुझे मेन्यू से ऑर्डर करना है।", askItem:name=>`नमस्ते! ${name} की कीमत और उपलब्धता बताएं।`, categories:{"सभी":"सभी","स्नैक्स":"स्नैक्स","चाट":"चाट","नॉन-वेज":"नॉन-वेज","साइड्स":"साइड्स","वेज":"वेज"} },
  en: { navMenu:"Menu", navAbout:"About us", navGallery:"Gallery", navOrder:"Order now ↗", heroEyebrow:"FRESHLY MADE • SERVED WITH HEART", heroTitle:"A little joy<br><em>in every bite.</em>", heroText:"From zesty bites to much-loved classics, every dish is made with care for you.", heroButton:"Explore the menu <b>↓</b>", storyLink:"Our story <span>↗</span>", note:"Your next favourite flavour<br><strong>could be right here.</strong>", tagSmall:"TODAY'S PICK", tagBig:"Chef special", heroBottom1:"Good food, good mood", heroBottom2:"↓ SCROLL TO EXPLORE", heroBottom3:"FRESHNESS • FLAVOUR • CARE", menuEyebrow:"OUR MENU", menuTitle:"Find something<br><em>delicious.</em>", menuIntro:"A look at your favourite dishes. Edit item names and prices in the <code>menu.js</code> file.", aboutEyebrow:"A LITTLE ABOUT US", aboutTitle:"Made with flavour,<br><em>served with love.</em>", aboutText:"At Vyanjan, we want every plate to feel special. Find zesty snacks, chaat, grilled favourites and comforting curries—all in one place.", aboutNote:"Sample introduction—personalise it with your restaurant, city and specialties.", contactLink:"Talk to us <span>↗</span>", galleryEyebrow:"A TASTE OF WHAT'S HERE", galleryTitle:"A little <em>preview.</em>", galleryIntro:"All 19 photos you shared are included on this website.", contactEyebrow:"ORDERS & CONTACT", contactTitle:"Feeling hungry?<br><em>Let's talk.</em>", contactText:"Add your WhatsApp number and city in the settings below so customers can contact you directly.", orderButton:"Order on WhatsApp <b>↗</b>", footerTagline:"Your story, served with good taste.", backTop:"Back to top ↑", price:"Price<br><b>Ask us</b>", ask:"Hello! I would like to order from your menu.", askItem:name=>`Hello! Could you share the price and availability of ${name}?`, categories:{"सभी":"All","स्नैक्स":"Snacks","चाट":"Chaat","नॉन-वेज":"Non-veg","साइड्स":"Sides","वेज":"Vegetarian"} }
};

words.hi.contactText = "WhatsApp पर ऑर्डर करें या हमें कॉल करें।";
words.en.contactText = "Place an order on WhatsApp or give us a call.";
words.hi.phone = "कॉल करें";
words.en.phone = "Call us";
words.hi.priceNote = "कीमत और उपलब्धता की जानकारी के लिए सीधे संपर्क करें।";
words.en.priceNote = "Contact us for current prices and availability.";
words.hi.contactTagline = "ताज़ा • स्वादिष्ट • दिल से";
words.en.contactTagline = "Fresh • flavourful • made with care";

const staticText = {
  ".hero .eyebrow":"heroEyebrow", ".hero h1":"heroTitle", ".hero-copy>p":"heroText", ".hero-actions .button":"heroButton", ".hero-actions .text-link":"storyLink", ".hero-note>span:last-child":"note", ".photo-tag span":"tagSmall", ".photo-tag strong":"tagBig", ".hero-bottom span:nth-child(1)":"heroBottom1", ".hero-bottom span:nth-child(2)":"heroBottom2", ".hero-bottom span:nth-child(3)":"heroBottom3", ".menu-section .eyebrow":"menuEyebrow", ".menu-section h2":"menuTitle", ".menu-section .section-heading>p":"menuIntro", ".price-note":"priceNote", ".about-copy .eyebrow":"aboutEyebrow", ".about-copy h2":"aboutTitle", ".about-copy p:not(.muted)":"aboutText", ".about-copy .muted":"aboutNote", ".about-copy .text-link":"contactLink", ".gallery-section .eyebrow":"galleryEyebrow", ".gallery-section h2":"galleryTitle", ".gallery-section .section-heading>p":"galleryIntro", ".contact-card .eyebrow":"contactEyebrow", ".contact-card h2":"contactTitle", ".contact-card>p":"contactText", ".contact-card .button":"orderButton", ".contact-meta span:first-child":"contactTagline", "footer>span":"footerTagline", "footer>a:last-child":"backTop"
};

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  for (const [selector, key] of Object.entries(staticText)) document.querySelector(selector).innerHTML = words[language][key];
  document.querySelectorAll("[data-i18n]").forEach(el => el.innerHTML = words[language][el.dataset.i18n]);
  document.querySelector("#languageToggle").textContent = language === "hi" ? "English" : "हिन्दी";
  document.querySelector("#languageToggle").setAttribute("aria-label", language === "hi" ? "Switch to English" : "हिंदी में बदलें");
  document.querySelector("#locationText").textContent = language === "hi" ? SITE_CONFIG.location : SITE_CONFIG.locationEn;
  document.querySelector("#phoneLink").innerHTML = `${words[language].phone}: ${SITE_CONFIG.phone}`;
  if (SITE_CONFIG.whatsapp) orderButton.href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(words[language].ask)}`;
  document.querySelector(".hero-visual img").alt = language === "hi" ? "क्रीमी दाल का व्यंजन" : "Creamy lentil dish";
  document.querySelector(".about-art img").alt = language === "hi" ? "चटनी के साथ स्नैक" : "Snack served with chutney";
  renderFilters(); renderMenu();
}

document.querySelector("#locationText").textContent = SITE_CONFIG.location;
const orderButton = document.querySelector("#orderButton");
if (SITE_CONFIG.whatsapp) {
  orderButton.href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("नमस्ते! मुझे मेन्यू से ऑर्डर करना है।")}`;
  orderButton.target = "_blank";
  orderButton.rel = "noopener noreferrer";
} else {
  orderButton.href = "#menu";
  orderButton.title = "WhatsApp नंबर जोड़ने के लिए menu.js संपादित करें";
}

function renderFilters() {
  filters.innerHTML = categories.map(category => `<button class="filter-chip ${category === activeCategory ? "active" : ""}" data-category="${category}">${words[language].categories[category] || category}</button>`).join("");
  filters.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderFilters(); renderMenu();
  }));
}

function renderMenu() {
  const visible = activeCategory === "सभी" ? MENU_ITEMS : MENU_ITEMS.filter(item => item.category === activeCategory);
  grid.innerHTML = visible.map((item, index) => `
    <article class="dish-card" style="--delay:${index * 45}ms">
      <div class="dish-photo"><img src="images/${item.image}" alt="${language === "hi" ? item.name : item.enName}" loading="lazy"><span class="dish-category">${words[language].categories[item.category] || item.category}</span><button class="dish-order" type="button" aria-label="${language === "hi" ? item.name : item.enName}">↗</button></div>
      <div class="dish-info"><div><h3>${language === "hi" ? item.name : item.enName}</h3><p>${language === "hi" ? item.description : item.enDescription}</p></div><span class="dish-price">${words[language].price}</span></div>
    </article>`).join("");
  grid.querySelectorAll(".dish-order").forEach((button, index) => button.addEventListener("click", () => {
    const item = visible[index];
    if (SITE_CONFIG.whatsapp) window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(words[language].askItem(language === "hi" ? item.name : item.enName))}`, "_blank", "noopener");
    else document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  }));
}

document.querySelector("#galleryStrip").innerHTML = MENU_ITEMS.map(item => `<a href="images/${item.image}" target="_blank" rel="noopener" aria-label="${item.name} की बड़ी तस्वीर"><img src="images/${item.image}" alt="${item.name}" loading="lazy"></a>`).join("");
document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector(".nav-links");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open")));
document.querySelector("#languageToggle").addEventListener("click", () => setLanguage(language === "hi" ? "en" : "hi"));
document.querySelector("#orderButton").addEventListener("click", event => {
  if (!SITE_CONFIG.whatsapp) { event.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior:"smooth" }); }
});
renderFilters(); renderMenu();
