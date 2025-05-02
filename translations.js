// אובייקט התרגומים
const translations = {
  he: {
    title: "77 שנות תחייה – הרב משה לאון יעקובוב",
    subtitle: "מסע רוחני ומיסטי ביום העצמאות – תפילה, שירה, חזון ועוצמה",
    aboutTitle: "✨ על הפרויקט",
    aboutText:
      "פרויקט '77 שנות תחייה' הוא יצירה משולבת של שירה, חזון, תפילה וגרפיקה מיסטית, המובלת על ידי הרב משה לאון יעקובוב. הפרויקט נולד מתוך רצון לקדש את חג העצמאות באור של קדושה, זוהר וחזון רוחני עמוק.",
    prayersTitle: "📖 מזמורי תפילה ליום העצמאות",
    prayersText:
      "שלושה מזמורים מיוחדים שנכתבו לכבוד יום העצמאות ה-77, משלבים בתוכם שירה, תפילה וחזון לעתיד האומה.",
    galleryTitle: "🖼️ רקעים ותמונות להדפסה",
    galleryText:
      "אוסף רקעים מיסטיים, הולוגרפיים ועתירי השראה לציון 77 שנות עצמאות. כל תמונה משדרת עומק, זוהר, ותחושת ייעוד לאומי.",
    joinTitle: "📥 הצטרפות ומשוב",
    joinText:
      "רוצים להוריד את הקבצים, להצטרף לשיעור מיוחד של הרב ביום העצמאות, או לשתף אותנו בהשראה שקיבלתם? לחצו כאן.",
    footer: "© כל הזכויות שמורות לרב משה לאון יעקובוב | 5786",
  },
  en: {
    title: "77 Years of Revival – Rabbi Moshe Leon Yakovov",
    subtitle:
      "A spiritual and mystical journey on Independence Day – prayer, poetry, vision and power",
    aboutTitle: "✨ About the Project",
    aboutText:
      "The '77 Years of Revival' project is a combined creation of poetry, vision, prayer and mystical graphics, led by Rabbi Moshe Leon Yakovov. The project was born from a desire to sanctify Independence Day in the light of holiness, radiance and deep spiritual vision.",
    prayersTitle: "📖 Independence Day Prayer Psalms",
    prayersText:
      "Three special psalms written in honor of the 77th Independence Day, combining poetry, prayer and vision for the future of the nation.",
    galleryTitle: "🖼️ Backgrounds and Images for Printing",
    galleryText:
      "A collection of mystical, holographic and inspiring backgrounds marking 77 years of independence. Each image conveys depth, radiance, and a sense of national purpose.",
    joinTitle: "📥 Join and Feedback",
    joinText:
      "Want to download the files, join a special class by the Rabbi on Independence Day, or share the inspiration you received? Click here.",
    footer: "© All rights reserved to Rabbi Moshe Leon Yakovov | 5786",
  },
  ru: {
    title: "77 лет возрождения – Раввин Моше Леон Яковов",
    subtitle:
      "Духовное и мистическое путешествие в День независимости – молитва, поэзия, видение и сила",
    aboutTitle: "✨ О проекте",
    aboutText:
      "Проект '77 лет возрождения' – это объединенное творение поэзии, видения, молитвы и мистической графики под руководством раввина Моше Леона Яковова. Проект родился из желания освятить День независимости в свете святости, сияния и глубокого духовного видения.",
    prayersTitle: "📖 Псалмы молитвы на День независимости",
    prayersText:
      "Три специальных псалма, написанных в честь 77-го Дня независимости, сочетающих поэзию, молитву и видение будущего нации.",
    galleryTitle: "🖼️ Фоны и изображения для печати",
    galleryText:
      "Коллекция мистических, голографических и вдохновляющих фонов, отмечающих 77 лет независимости. Каждое изображение передает глубину, сияние и чувство национального предназначения.",
    joinTitle: "📥 Присоединиться и отзывы",
    joinText:
      "Хотите скачать файлы, присоединиться к специальному занятию раввина в День независимости или поделиться полученным вдохновением? Нажмите здесь.",
    footer: "© Все права защищены Раввином Моше Леоном Якововым | 5786",
  },
  ar: {
    title: "77 عامًا من النهضة – الحاخام موشيه ليون يعقوبوف",
    subtitle: "رحلة روحية وصوفية في يوم الاستقلال – صلاة، شعر، رؤية وقوة",
    aboutTitle: "✨ عن المشروع",
    aboutText:
      "مشروع '77 عامًا من النهضة' هو إبداع يجمع بين الشعر، الرؤية، الصلاة والرسومات الصوفية، بقيادة الحاخام موشيه ليون يعقوبوف. ولد المشروع من رغبة في تقديس عيد الاستقلال بنور القداسة، البهاء والرؤية الروحية العميقة.",
    prayersTitle: "📖 مزامير الصلاة ليوم الاستقلال",
    prayersText:
      "ثلاثة مزامير خاصة كُتبت تكريماً للذكرى السابعة والسبعين للاستقلال، تجمع بين الشعر، الصلاة والرؤية لمستقبل الأمة.",
    galleryTitle: "🖼️ خلفيات وصور للطباعة",
    galleryText:
      "مجموعة من الخلفيات الصوفية، الهولوغرامية والملهمة للاحتفال بمرور 77 عامًا على الاستقلال. كل صورة تنقل العمق، البهاء وشعورًا بالهدف الوطني.",
    joinTitle: "📥 الانضمام وملاحظات",
    joinText:
      "هل تريد تحميل الملفات، الانضمام إلى درس خاص مع الحاخام في يوم الاستقلال، أو مشاركة الإلهام الذي تلقيته؟ انقر هنا.",
    footer: "© جميع الحقوق محفوظة للحاخام موشيه ليون يعقوبوف | 5786",
  },
  zh: {
    title: "77年复兴 – 拉比摩西·利昂·雅各布夫",
    subtitle: "独立日的精神与神秘之旅 – 祈祷、诗歌、愿景与力量",
    aboutTitle: "✨ 关于项目",
    aboutText:
      "'77年复兴'项目是由拉比摩西·利昂·雅各布夫领导的诗歌、愿景、祈祷和神秘图形的综合创作。该项目源于希望在圣洁、光辉和深刻精神愿景的光中圣化独立日。",
    prayersTitle: "📖 独立日祈祷诗篇",
    prayersText:
      "为纪念第77个独立日而写的三首特殊诗篇，结合了诗歌、祈祷和对国家未来的愿景。",
    galleryTitle: "🖼️ 打印背景和图片",
    galleryText:
      "纪念独立77周年的神秘、全息和鼓舞人心的背景图片集。每张图片都传达深度、光辉和民族使命感。",
    joinTitle: "📥 加入和反馈",
    joinText:
      "想要下载文件、参加拉比在独立日的特别课程，或分享您获得的灵感？点击这里。",
    footer: "© 版权所有 拉比摩西·利昂·雅各布夫 | 5786",
  },
  hi: {
    title: "77 वर्षों का पुनरुत्थान – रब्बी मोशे लियोन याकोबोव",
    subtitle:
      "स्वतंत्रता दिवस पर आध्यात्मिक और रहस्यमय यात्रा – प्रार्थना, कविता, दृष्टि और शक्ति",
    aboutTitle: "✨ परियोजना के बारे में",
    aboutText:
      "'77 वर्षों का पुनरुत्थान' परियोजना रब्बी मोशे लियोन याकोबोव के नेतृत्व में कविता, दृष्टि, प्रार्थना और रहस्यमय ग्राफिक्स का एक संयुक्त सृजन है। यह परियोजना स्वतंत्रता दिवस को पवित्रता, प्रकाश और गहन आध्यात्मिक दृष्टि के प्रकाश में पवित्र करने की इच्छा से जन्मी है।",
    prayersTitle: "📖 स्वतंत्रता दिवस प्रार्थना भजन",
    prayersText:
      "स्वतंत्रता के 77वें वर्ष के सम्मान में लिखे गए तीन विशेष भजन, जो कविता, प्रार्थना और राष्ट्र के भविष्य की दृष्टि को जोड़ते हैं।",
    galleryTitle: "🖼️ मुद्रण के लिए पृष्ठभूमि और छवियाँ",
    galleryText:
      "स्वतंत्रता के 77 वर्षों को चिह्नित करने वाली रहस्यमय, होलोग्राफिक और प्रेरक पृष्ठभूमियों का संग्रह। प्रत्येक छवि गहराई, प्रकाश और राष्ट्रीय उद्देश्य की भावना को व्यक्त करती है।",
    joinTitle: "📥 शामिल हों और प्रतिक्रिया दें",
    joinText:
      "फ़ाइलें डाउनलोड करना चाहते हैं, स्वतंत्रता दिवस पर रब्बी के विशेष पाठ में शामिल होना चाहते हैं, या आपके द्वारा प्राप्त प्रेरणा को साझा करना चाहते हैं? यहाँ क्लिक करें।",
    footer: "© सर्वाधिकार सुरक्षित रब्बी मोशे लियोन याकोबोव | 5786",
  },
};

// פונקציה לשינוי שפה
function changeLanguage(lang) {
  const elements = {
    title: document.querySelector("header h1"),
    subtitle: document.querySelector("header p"),
    aboutTitle: document.querySelector(".section:nth-child(2) h2"),
    aboutText: document.querySelector(".section:nth-child(2) p"),
    prayersTitle: document.querySelector(".section:nth-child(3) h2"),
    prayersText: document.querySelector(".section:nth-child(3) p"),
    galleryTitle: document.querySelector(".section:nth-child(4) h2"),
    galleryText: document.querySelector(".section:nth-child(4) p"),
    joinTitle: document.querySelector(".section:nth-child(5) h2"),
    joinText: document.querySelector(".section:nth-child(5) p"),
    footer: document.querySelector("footer"),
  };

  const translation = translations[lang];

  // שינוי כיוון הטקסט בהתאם לשפה
  document.body.dir = lang === "he" || lang === "ar" ? "rtl" : "ltr";

  // עדכון הטקסטים
  for (const [key, element] of Object.entries(elements)) {
    if (element && translation[key]) {
      element.textContent = translation[key];
    }
  }
}

// יצירת תפריט שפות
function createLanguageMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "language-menu";
  menuContainer.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(0, 0, 0, 0.8);
        padding: 15px;
        border-radius: 10px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: fadeIn 0.5s ease-in;
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
  document.head.appendChild(styleSheet);

  const title = document.createElement("h3");
  title.textContent = "בחר שפה";
  title.style.cssText = `
        color: white;
        margin: 0 0 10px 0;
        font-size: 1.2rem;
    `;
  menuContainer.appendChild(title);

  const languages = {
    he: "עברית",
    en: "English",
    ru: "Русский",
    ar: "العربية",
    zh: "中文",
    hi: "हिन्दी",
  };

  for (const [code, name] of Object.entries(languages)) {
    const button = document.createElement("button");
    button.textContent = name;
    button.style.cssText = `
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            background: #005cbf;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
        `;
    button.onmouseover = () => {
      button.style.background = "#002e7a";
      button.style.transform = "scale(1.05)";
    };
    button.onmouseout = () => {
      button.style.background = "#005cbf";
      button.style.transform = "scale(1)";
    };
    button.onclick = () => changeLanguage(code);
    menuContainer.appendChild(button);
  }

  document.body.appendChild(menuContainer);
}

// הפעלת התפריט כאשר הדף נטען
document.addEventListener("DOMContentLoaded", createLanguageMenu);
