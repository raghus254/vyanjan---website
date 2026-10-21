/* अपनी दुकान के नाम, व्यंजनों, श्रेणियों और कीमतों को यहाँ बदलें।
   WhatsApp नंबर देश कोड सहित लिखें, जैसे भारत के लिए 91XXXXXXXXXX। */
const SITE_CONFIG = {
  name: "Vyanjan",
  phone: "8076629789",
  whatsapp: "918076629789",
  location: "देसू वाली गली, महिपालपुर",
  locationEn: "Desu Wali Gali, Mahipalpur"
};

const MENU_ITEMS = [
  { name: "स्टफ्ड स्नैक", enName: "Stuffed Snack", category: "स्नैक्स", image: "IMG_20240727_151335243_HDR.jpg", description: "चटनी के साथ कुरकुरा और भरवां स्वाद", enDescription: "A crisp, savoury filling served with chutney" },
  { name: "टैको प्लेटर", enName: "Taco Platter", category: "स्नैक्स", image: "IMG_20240721_205456548_HDR.jpg", description: "रंगीन फिलिंग और सॉस के साथ", enDescription: "Tacos with colourful fillings and sauce" },
  { name: "सेव वाली चाट", enName: "Sev Chaat", category: "चाट", image: "IMG_20240810_192923272_HDR.jpg", description: "दही, मसालों और कुरकुरी सेव का मेल", enDescription: "A mix of yoghurt, spices and crisp sev" },
  { name: "ग्रिल्ड चिकन", enName: "Grilled Chicken", category: "नॉन-वेज", image: "IMG_20240810_201459690_HDR.jpg", description: "मसालेदार ग्रिल्ड चिकन, प्याज़ और नींबू", enDescription: "Spiced grilled chicken with onion and lemon" },
  { name: "फ्रूट रायता", enName: "Fruit Raita", category: "चाट", image: "IMG_20240819_140828598_HDR.jpg", description: "दही और ताज़े फलों के साथ", enDescription: "Yoghurt topped with fresh fruit" },
  { name: "दही भल्ला चाट", enName: "Dahi Bhalla Chaat", category: "चाट", image: "IMG_20240819_141747893_HDR.jpg", description: "दही, चटनी और मसालों से सजा", enDescription: "Soft bhallas with yoghurt, chutneys and spices" },
  { name: "शेफ स्पेशल सैंडविच", enName: "Chef's Special Sandwich", category: "स्नैक्स", image: "IMG_20240921_022653247_HDR.jpg", description: "साइड्स के साथ भरपूर प्लेट", enDescription: "A hearty sandwich served with sides" },
  { name: "दही चाट", enName: "Yoghurt Chaat", category: "चाट", image: "IMG_20241012_221237241_HDR.jpg", description: "मीठी और तीखी चटनी के साथ", enDescription: "Yoghurt chaat with sweet and tangy chutneys" },
  { name: "क्रीमी चिकन", enName: "Creamy Chicken", category: "नॉन-वेज", image: "IMG_20241018_223727407_HDR.jpg", description: "क्रीमी सॉस और ताज़े हर्ब्स के साथ", enDescription: "Chicken in a creamy sauce with fresh herbs" },
  { name: "ताज़ा सलाद प्लेट", enName: "Fresh Salad Platter", category: "साइड्स", image: "IMG_20241020_200624189_HDR.jpg", description: "ताज़ी सब्ज़ियाँ, नींबू और हरी मिर्च", enDescription: "Fresh vegetables with lemon and green chilli" },
  { name: "पनीर करी", enName: "Paneer Curry", category: "वेज", image: "IMG_20241025_234837221_HDR.jpg", description: "मख़मली टमाटर वाली ग्रेवी में पनीर", enDescription: "Paneer in a smooth tomato gravy" },
  { name: "दही वड़ा", enName: "Dahi Vada", category: "चाट", image: "IMG_20241025_235057231_HDR.jpg", description: "दही और मीठी चटनी से सजा", enDescription: "Dahi vada topped with yoghurt and sweet chutney" },
  { name: "स्नैक प्लेटर", enName: "Snack Platter", category: "स्नैक्स", image: "IMG_20241026_215232134_HDR.jpg", description: "कबाब और चिकन के साथ साझा करने वाली प्लेट", enDescription: "A sharing platter of kebabs and chicken" },
  { name: "ग्रिल्ड चिकन स्नैक", enName: "Grilled Chicken Bites", category: "नॉन-वेज", image: "IMG_20241026_215344055_HDR.jpg", description: "चटनी के साथ मसालेदार ग्रिल्ड बाइट्स", enDescription: "Spiced grilled bites served with chutney" },
  { name: "सीख कबाब प्लेट", enName: "Seekh Kebab Platter", category: "नॉन-वेज", image: "IMG_20241027_181844519_HDR.jpg", description: "चटनी और साइड्स के साथ कबाब", enDescription: "Kebabs served with chutney and sides" },
  { name: "कबाब बाइट्स", enName: "Kebab Bites", category: "स्नैक्स", image: "IMG_20241027_182249151_HDR.jpg", description: "हरी चटनी के साथ कुरकुरे कबाब", enDescription: "Crisp kebab bites with green chutney" },
  { name: "भरवां क्रिस्पी स्नैक", enName: "Crispy Stuffed Snack", category: "स्नैक्स", image: "IMG_20241027_185101735_HDR.jpg", description: "हरी चटनी के साथ सुनहरा और कुरकुरा", enDescription: "Golden, crisp and served with green chutney" },
  { name: "मसाला प्रॉन", enName: "Masala Prawns", category: "नॉन-वेज", image: "IMG_20241027_195750912_HDR.jpg", description: "हर्ब्स और मसालों में तैयार प्रॉन", enDescription: "Prawns tossed with herbs and spices" },
  { name: "दाल मखनी", enName: "Dal Makhani", category: "वेज", image: "IMG_20241027_221213077_HDR.jpg", description: "क्रीमी दाल, मक्खन और क्रीम के साथ", enDescription: "Creamy lentils finished with butter and cream" }
];
