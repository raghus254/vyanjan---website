# Vyanjan वेबसाइट

यह एक मुफ्त static वेबसाइट है। इसमें आपकी भेजी हुई सभी 19 भोजन की तस्वीरें शामिल हैं। वेबसाइट देखने के लिए `index.html` खोलें।

## नाम, मेन्यू और कीमत बदलना

`menu.js` खोलें:

- `SITE_CONFIG.name` में दुकान/ब्रांड का नाम लिखें।
- `SITE_CONFIG.whatsapp` में देश कोड समेत नंबर लिखें, जैसे `919876543210`।
- `SITE_CONFIG.location` में शहर या इलाका लिखें।
- `MENU_ITEMS` में हर व्यंजन का `name`, `category` और `description` बदलें। कीमतें अभी पूछने के लिए दिखाई जाती हैं; मेन्यू आइटम में `price: "₹150"` जोड़कर दिखा सकते हैं—या मुझसे कीमतें जोड़ने को कहें।
- तस्वीर का नाम बदलना हो तो `image` में `images` फ़ोल्डर की फ़ाइल का नाम लिखें।

## मुफ्त में ऑनलाइन प्रकाशित करना

1. GitHub पर मुफ्त खाता बनाकर नया repository बनाएँ, उदाहरण के लिए `vyanjan-website`।
2. इस फ़ोल्डर की सभी फ़ाइलें और `images` फ़ोल्डर repository में अपलोड करें।
3. GitHub repository में **Settings → Pages** खोलें।
4. **Deploy from a branch** चुनें, branch `main` और folder `/ (root)` चुनकर **Save** करें।
5. GitHub कुछ देर में वेबसाइट का पता देगा। आगे बदलाव करने पर वही फ़ाइलें repository में अपडेट करें।

GitHub Pages पर वेबसाइट और उसका `github.io` पता मुफ्त है। अलग `.com` डोमेन आमतौर पर सशुल्क होता है।


Hindi/English toggle is included. The location, phone number and WhatsApp order link are already set in menu.js; edit them there whenever needed.
