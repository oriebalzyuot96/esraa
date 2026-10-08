/* All content for Esraa Nasser's portfolio, in English and Arabic.
   Facts come from her resume and LinkedIn; company notes from public sources. */
import type { Lang } from '../i18n';
type T = Record<Lang, string>;
const t = (en: string, ar: string): T => ({ en, ar });

export const PERSON = {
  name: t('Esraa Nasser', 'إسراء ناصر'),
  short: t('Esraa', 'إسراء'),
  role: t('Senior Software Engineer · .NET · Blazor · Angular', 'Senior Software Engineer · .NET · Blazor · Angular'),
  email: 'esraa.nasser033@gmail.com',
  phone: '+20 120 353 9732',
  linkedin: 'https://www.linkedin.com/in/esraa-nasser-435432131/',
  github: 'https://github.com/esraa-nasser',
  location: t('Giza, Egypt', 'الجيزة، مصر'),
};

export const META = {
  title: t('Esraa Nasser · Senior Software Engineer (.NET, Blazor, Integrations)', 'إسراء ناصر · Senior Software Engineer (.NET و Blazor والتكاملات)'),
  desc: t('Esraa Nasser, Senior Software Engineer with 6+ years in .NET Core, Blazor, SignalR and third-party integrations. Building Contracts, a Saudi e-signature platform integrated with Emdha, plus Noug and Whis Book apps at Saudi Azm.',
          'إسراء ناصر، Senior Software Engineer بخبرة تتجاوز 6 سنوات في .NET Core و Blazor و SignalR وتكاملات الأنظمة الخارجية. تعمل على منصة عقود للتوقيع الإلكتروني المتكاملة مع إمضاء، وتطبيقي نوق و Whis Book في عزم السعودية.'),
};

export const NAV = {
  about: t('About', 'عنّي'), skills: t('Skills', 'المهارات'), projects: t('Work', 'الأعمال'),
  career: t('Career', 'المسيرة'), contact: t('Contact', 'تواصل'),
};

export const HERO = {
  hello: t("Hi, I'm Esraa", 'مرحبًا، أنا إسراء'), open: t('Senior Engineer at Saudi Azm', 'Senior Engineer في عزم السعودية'),
  l1: t('I connect systems into', 'أربط الأنظمة لتصبح'), l2a: t('', ''), words: t('seamless|secure|scalable', 'سلسة|آمنة|قابلة للتوسع'), l2b: t(' products,', ''),
  l2pre: t('', 'منتجات '), l3: t('with .NET, Blazor and SignalR.', 'بـ .NET و Blazor و SignalR.'),
  lede: t('Senior Software Engineer with <b>6+ years</b> of full-stack work in the <b>.NET ecosystem</b>, specialised in <b>system design and third-party integrations</b>. At <b>Saudi Azm</b> I build <b>Contracts</b>, an e-signature platform integrated with <b>Emdha</b>, plus the <b>Noug</b> and <b>Whis Book</b> apps.',
          'Senior Software Engineer بخبرة <b>تتجاوز 6 سنوات</b> في التطوير الكامل ضمن <b>منظومة .NET</b>، متخصصة في <b>تصميم الأنظمة وتكاملات الأنظمة الخارجية</b>. أعمل في <b>عزم السعودية</b> على منصة <b>عقود</b> للتوقيع الإلكتروني المتكاملة مع <b>إمضاء</b>، وتطبيقي <b>نوق</b> و <b>Whis Book</b>.'),
  cta1: t('See my work', 'شاهد أعمالي'), cta2: t('Download CV', 'تحميل السيرة الذاتية'), cta3: t('Email me', 'راسليني'),
};

export const BENTO = {
  hand: t('hello! 🌍', 'مرحبًا! 🌍'), avail: t('Senior Engineer', 'Senior Engineer'),
  exp: t('Experience', 'الخبرة'), years: t('years in .NET, from chatbots and e-learning to e-signature', 'سنوات في .NET، من روبوتات المحادثة والتعليم الإلكتروني إلى التوقيع الإلكتروني'),
  nowk: t('Now · Saudi Azm', 'حاليًا · عزم السعودية'),
  now: t('Building integrations for a Saudi e-signature platform and consumer apps', 'أبني التكاملات لمنصة توقيع إلكتروني سعودية وتطبيقات للمستخدمين'),
  chips: [t('.NET Core', '.NET Core'), t('Blazor', 'Blazor'), t('SignalR', 'SignalR'), t('Integrations', 'التكاملات')],
  clock: t('Local time · Cairo', 'الوقت المحلي · القاهرة'), tz: t('GMT+2/+3 · remote', 'GMT+2/+3 · عن بُعد'),
  stack: t('Daily stack', 'أدواتي اليومية'),
  certk: t('Education', 'التعليم'), cert: t('B.Sc. Computer Science', 'بكالوريوس علوم الحاسوب'), certs: t('Suez Canal University · ITI diploma', 'جامعة قناة السويس · دبلوم ITI'),
  a11yk: t('Accessibility', 'إمكانية الوصول'), a11y: t('Try this site your way', 'جرّب الموقع على طريقتك'), a11ySub: t('Contrast, text size, motion, Arabic RTL.', 'التباين وحجم النص والحركة والعربية.'), a11yGo: t('Open settings →', 'فتح الإعدادات ←'),
};

export const VIDEO = {
  k: t('in 40 seconds', 'في 40 ثانية'), t: t('Meet me', 'تعرّف عليّ'),
  p: t('A short motion intro: who I am, the companies and products I have built for, and how I work.', 'مقدمة متحركة قصيرة: من أنا، والشركات والمنتجات التي عملت عليها، وطريقتي في العمل.'),
};

export const ABOUT = {
  k: t('who am I?', 'من أنا؟'), t: t('About Me', 'نبذة عنّي'),
  badge: t('📍 Giza · remote', '📍 الجيزة · عن بُعد'),
  h: t('I make systems talk to each other 🔗', 'أجعل الأنظمة تتحدث مع بعضها 🔗'),
  p1: t('For 6+ years I have built .NET back ends that plug into other systems: IBM Watson chatbots, Microsoft 365 and SharePoint, e-learning apps used by schools, and today Emdha digital signatures and DMS integrations for Saudi Contracts.',
        'أبني منذ أكثر من 6 سنوات خوادم .NET تتكامل مع أنظمة أخرى: روبوتات محادثة IBM Watson، و Microsoft 365 و SharePoint، وتطبيقات تعليم إلكتروني تستخدمها المدارس، واليوم التوقيع الرقمي عبر إمضاء وتكاملات أنظمة إدارة الوثائق لمنصة عقود السعودية.'),
  p2: t('I love tech that helps people, from my graduation project “Hear”, a sign-language-to-speech translator, to Whis Book, which translates sign languages today. I mentor juniors, run POCs and bring new tools to the team.',
        'أحب التقنية التي تساعد الناس، من مشروع تخرجي «Hear» لترجمة لغة الإشارة إلى كلام، إلى تطبيق Whis Book الذي يترجم لغات الإشارة اليوم. أوجّه المطورين الجدد، وأجري إثباتات المفهوم، وأقدّم أدوات حديثة للفريق.'),
  name: t('Name', 'الاسم'), loc: t('Location', 'الموقع'), locs: t('Remote · open to relocation', 'عن بُعد · منفتحة على الانتقال'),
  email: t('Email', 'البريد الإلكتروني'), li: t('LinkedIn', 'LinkedIn'),
  edu: t('Education', 'التعليم'), eduv: t('B.Sc. Computer Science', 'بكالوريوس علوم الحاسوب'), edus: t('Suez Canal University · 2014–2018', 'جامعة قناة السويس · 2014–2018'),
  lang: t('Languages', 'اللغات'), langv: t('Arabic · English', 'العربية · الإنجليزية'), langs: t('Arabic native · English professional', 'العربية لغة أم · الإنجليزية بمستوى مهني'),
  quote: t('Mentored 3 junior developers, raising team velocity by 20% and cutting code-review iterations.', 'وجّهت 3 مطورين جدد، فارتفعت سرعة الفريق 20% وقلّت جولات مراجعة الكود.'),
  quoteBy: t('Impact at Saudi Azm', 'أثر في عزم السعودية'),
  principles: [
    { t: t('Integrate cleanly', 'تكامل نظيف'), p: t('Clear contracts between systems, retries and background jobs that never lose data.', 'عقود واضحة بين الأنظمة، وإعادة محاولة ومهام خلفية لا تُضيّع البيانات.') },
    { t: t('Prove it first', 'إثبات المفهوم أولًا'), p: t('POCs and tech talks before big decisions.', 'إثباتات مفهوم وجلسات تقنية قبل القرارات الكبيرة.') },
    { t: t('Grow the team', 'تطوير الفريق'), p: t('Code review and mentoring that make juniors confident.', 'مراجعة كود وتوجيه يمنحان المطورين الجدد الثقة.') },
  ],
};

export const SKILLS = {
  k: t('what I use', 'ما أستخدمه'), t: t('Skills', 'المهارات'), p: t('Back end and integrations first, with the front ends to match.', 'الخوادم والتكاملات أولًا، مع الواجهات المناسبة لها.'),
  groups: [
    { icon: '⚙️', t: t('Back end', 'الخوادم'), items: [['dotnet', 'C# · .NET Core · .NET Framework'], ['dotnet', 'ASP.NET Core · MVC · Web API'], ['', 'SignalR · WCF'], ['', 'ABP Framework'], ['', 'Entity Framework']] },
    { icon: '🔗', t: t('Integrations', 'التكاملات'), items: [['', 'Emdha e-signature · DMS'], ['ibm', 'IBM Watson chatbots'], ['rabbitmq', 'RabbitMQ'], ['', 'Hangfire background jobs'], ['microsoft', 'SharePoint · Microsoft 365']] },
    { icon: '🎨', t: t('Front end', 'الواجهات الأمامية'), items: [['blazor', 'Blazor'], ['angular', 'Angular · AngularJS'], ['typescript', 'TypeScript'], ['javascript', 'JavaScript · jQuery'], ['bootstrap', 'HTML · CSS · Bootstrap']] },
    { icon: '🗄️', t: t('Data', 'البيانات'), items: [['', 'SQL Server'], ['mongodb', 'MongoDB'], ['mysql', 'MySQL']] },
    { icon: '🧭', t: t('Ways of working', 'طريقة العمل'), items: [['', 'Design patterns · OOP'], ['', 'POCs & tech talks'], ['', 'Mentoring & code review'], ['', 'API test planning with QA']] },
    { icon: '🛠️', t: t('Tools', 'الأدوات'), items: [['git', 'Git · TFS'], ['', 'Agile'], ['', 'Visual Studio']] },
  ],
};

export const PROJECTS = {
  k: t("what I've built", 'ما بنيته'), t: t('Work', 'الأعمال'),
  p: t('Highlights from each role. Private systems are shown as labelled illustrations.', 'أبرز ما في كل دور. الأنظمة الخاصة تظهر كرسوم توضيحية مُعلَّمة.'),
  illus: t('Illustration', 'رسم توضيحي'),
  items: [
    { id: 'p-contracts', mock: 'shot', img: 'contracts.jpg', url: 'contracts.com.sa', org: t('Saudi Azm · Contracts (CSP)', 'عزم السعودية · عقود (CSP)'), status: t('2023 – now', '2023 – الآن'),
      title: t('Contracts · Contract Signature Platform', 'عقود · منصة توقيع العقود'),
      p: t('Helps firms get legally signed documents by integrating their own systems with the DMS/CSP and Emdha, Saudi Arabia’s first commercial trust-service provider for digital signatures.',
           'تساعد الشركات على الحصول على مستندات موقّعة نظاميًا عبر ربط أنظمتها بنظام إدارة الوثائق و CSP وبـ «إمضاء»، أول مزوّد تجاري لخدمات الثقة والتوقيع الرقمي في السعودية.'),
      hl: [t('Emdha digital-signature and DMS integrations', 'تكاملات التوقيع الرقمي عبر إمضاء وأنظمة إدارة الوثائق'), t('Blazor and ASP.NET Core with SignalR and Hangfire', 'Blazor و ASP.NET Core مع SignalR و Hangfire'), t('POCs and product upgrades across web services', 'إثباتات مفهوم وترقيات للمنتج عبر خدمات الويب')],
      tags: ['Blazor', 'ASP.NET Core', 'Emdha', 'SignalR'], link: 'https://contracts.com.sa' },
    { id: 'p-whis', mock: 'translate', org: t('Saudi Azm · Whis Book', 'عزم السعودية · Whis Book'), status: t('2024 – now', '2024 – الآن'),
      title: t('Whis Book · translation for everyone', 'Whis Book · ترجمة للجميع'),
      p: t('A mobile app for translation across languages and disciplines, including world sign languages for the deaf, conference and video translation, and certified-office translation of contracts.',
           'تطبيق جوال للترجمة بين اللغات والتخصصات، يشمل لغات الإشارة العالمية للصم، وترجمة المؤتمرات والفيديو، وترجمة العقود عبر مكاتب معتمدة.'),
      hl: [t('Back end on ABP Framework and ASP.NET Core', 'خوادم مبنية على ABP Framework و ASP.NET Core'), t('Sign-language and online video translation flows', 'مسارات ترجمة لغة الإشارة والفيديو المباشر')],
      tags: ['ABP Framework', 'ASP.NET Core', 'SignalR'] },
    { id: 'p-noug', mock: 'order', org: t('Saudi Azm · Noug نوق', 'عزم السعودية · نوق'), status: t('2023 – now', '2023 – الآن'),
      title: t('Noug · fresh camel milk, ordered in a tap', 'نوق · حليب الإبل الطازج بلمسة'),
      p: t('The back end of a mobile app to order, track and pay for fresh camel milk from Noug, Saudi Arabia’s first camel-milk brand.',
           'خوادم تطبيق جوال لطلب حليب الإبل الطازج وتتبعه والدفع له من نوق، أول علامة سعودية لحليب الإبل.'),
      hl: [t('Ordering, tracking and payment APIs', 'واجهات برمجية للطلب والتتبع والدفع'), t('ASP.NET Core Web API', 'ASP.NET Core Web API')],
      tags: ['Web API', 'ASP.NET Core', 'SQL Server'] },
    { id: 'p-winjigo', mock: 'learn', org: t('ITWorx Education', 'ITWorx Education'), status: t('2020 – 2021', '2020 – 2021'),
      title: t('winjiGo & TeacherKit e-learning', 'التعليم الإلكتروني winjiGo و TeacherKit'),
      p: t('winjiGo is an award-winning social learning platform (distance learning, assessment, analytics, gamification, Microsoft integration). TeacherKit handles attendance, grades and behaviour on iOS, Android and Windows.',
           'winjiGo منصة تعلّم اجتماعي حائزة على جوائز (تعلّم عن بُعد وتقييم وتحليلات وتلعيب وتكامل مع Microsoft)، و TeacherKit يدير الحضور والدرجات والسلوك على iOS و Android و Windows.'),
      hl: [t('New modules and web services for web and mobile apps', 'وحدات وخدمات ويب جديدة لتطبيقات الويب والجوال'), t('Parent and Student apps', 'تطبيقا ولي الأمر والطالب'), t('Tech talks and cross-team architecture planning', 'جلسات تقنية وتخطيط معماري بين الفرق')],
      tags: ['ASP.NET Core', 'MongoDB', 'SignalR', 'AngularJS'] },
    { id: 'p-linkdev', mock: 'lowcode', org: t('Link Development', 'Link Development'), status: t('2021 – 2023', '2021 – 2023'),
      title: t('Project-management tools on Microsoft 365', 'أدوات إدارة المشاريع على Microsoft 365'),
      p: t('Link Development is a Cairo Microsoft partner (since 1996). I delivered project-management tools on SharePoint and Microsoft 365 and led API test planning with QA.',
           'Link Development شريك لمايكروسوفت في القاهرة (منذ 1996). قدّمت أدوات لإدارة المشاريع على SharePoint و Microsoft 365 وقدت تخطيط اختبارات الواجهات البرمجية مع فريق الجودة.'),
      hl: [t('SharePoint, MVC and Web API solutions', 'حلول SharePoint و MVC و Web API'), t('Code review and mentoring juniors', 'مراجعة الكود وتوجيه المطورين الجدد')],
      tags: ['SharePoint', 'Microsoft 365', 'MVC', 'Web API'] },
    { id: 'p-chatbot', mock: 'chat', org: t('INTDV', 'INTDV'), status: t('2019 – 2020', '2019 – 2020'),
      title: t('Arabic chatbot back ends', 'خوادم روبوتات المحادثة العربية'),
      p: t('INTDV builds Arabic conversational AI: chatbots, digital avatars and robots. I built the .NET Core 3 back end of its chatbots with IBM Watson integrations for cross-platform channels.',
           'تبني INTDV ذكاءً اصطناعيًا محادثيًا بالعربية: روبوتات محادثة وأفاتارات رقمية وروبوتات. بنيت خوادم .NET Core 3 لروبوتات المحادثة مع تكاملات IBM Watson لقنوات متعددة.'),
      hl: [t('IBM Watson integration and RabbitMQ messaging', 'تكامل IBM Watson ورسائل RabbitMQ'), t('Design patterns and best practices', 'أنماط التصميم وأفضل الممارسات')],
      tags: ['.NET Core', 'IBM Watson', 'RabbitMQ'] },
  ],
};

export const CAREER = {
  k: t("where I've been", 'أين عملت'), t: t('Career', 'المسيرة المهنية'), now: t('Current', 'الحالي'),
  jobs: [
    { dot: 'AZM', when: t('Jan 2023 – Present · Remote', 'يناير 2023 – حتى الآن · عن بُعد'), co: 'Saudi Azm · AZM Digital', role: t('Senior Software Engineer', 'Senior Software Engineer'), current: true,
      about: t('A Riyadh digital-transformation company building platforms for government and fintech. Joined through Tech Process Solutions (Amman, 2023–2026).', 'شركة تحول رقمي في الرياض تبني منصات للحكومة والتقنية المالية. انضممت عبر Tech Process Solutions (عمّان، 2023–2026).'),
      b: [t('Mentored 3 junior developers, raising team velocity by 20% and reducing code-review iterations.', 'توجيه 3 مطورين جدد، ورفع سرعة الفريق 20% وتقليل جولات مراجعة الكود.'),
          t('Drive third-party integrations (Emdha, DMS) for Contracts with .NET Core, SignalR, Hangfire, Blazor and Angular.', 'قيادة تكاملات الأنظمة الخارجية (إمضاء وإدارة الوثائق) لمنصة عقود بـ .NET Core و SignalR و Hangfire و Blazor و Angular.'),
          t('Run POCs, introduce modern tools and present findings; build Noug and Whis Book back ends.', 'إجراء إثباتات المفهوم وتقديم أدوات حديثة وعرض النتائج، وبناء خوادم نوق و Whis Book.')],
      tags: ['.NET Core', 'Blazor', 'SignalR', 'Hangfire', 'MongoDB'] },
    { dot: 'LD', when: t('Nov 2021 – Jan 2023 · Cairo · Remote', 'نوفمبر 2021 – يناير 2023 · القاهرة · عن بُعد'), co: 'Link Development', role: t('Senior Solutions Developer', 'Senior Solutions Developer'),
      about: t('A Cairo software company and long-time Microsoft partner (since 1996), part of OTVentures.', 'شركة برمجيات في القاهرة وشريك قديم لمايكروسوفت (منذ 1996)، ضمن OTVentures.'),
      b: [t('Spearheaded API test planning and execution with the QA team.', 'قيادة تخطيط وتنفيذ اختبارات الواجهات البرمجية مع فريق الجودة.'),
          t('Delivered project-management tools on SharePoint, MVC, Web API and Microsoft 365; reviewed code and mentored juniors.', 'تقديم أدوات إدارة مشاريع على SharePoint و MVC و Web API و Microsoft 365، ومراجعة الكود وتوجيه المطورين الجدد.')],
      tags: ['SharePoint', 'MVC', 'Web API', 'Microsoft 365'] },
    { dot: 'ITX', when: t('Jun 2020 – Nov 2021 · Cairo', 'يونيو 2020 – نوفمبر 2021 · القاهرة'), co: 'ITWorx Education', role: t('Software Engineer', 'Software Engineer'),
      about: t('The edtech division of ITWorx (Cairo, 1994), maker of winjiGo and TeacherKit.', 'قسم التقنية التعليمية في ITWorx (القاهرة، 1994)، صاحب winjiGo و TeacherKit.'),
      b: [t('Built new modules and web services for winjiGo, TeacherKit and the Parent and Student apps.', 'بناء وحدات وخدمات ويب جديدة لـ winjiGo و TeacherKit وتطبيقي ولي الأمر والطالب.'),
          t('Delivered tech talks and contributed to cross-team architecture planning.', 'تقديم جلسات تقنية والمشاركة في التخطيط المعماري بين الفرق.')],
      tags: ['ASP.NET Core', 'SignalR', 'MongoDB', 'MySQL', 'AngularJS'] },
    { dot: 'INT', when: t('Sep 2019 – Jun 2020 · Cairo', 'سبتمبر 2019 – يونيو 2020 · القاهرة'), co: 'INTDV', role: t('Software Engineer', 'Software Engineer'),
      about: t('Arabic conversational-AI company: chatbots, digital avatars and humanoid robots.', 'شركة ذكاء اصطناعي محادثي بالعربية: روبوتات محادثة وأفاتارات رقمية وروبوتات.'),
      b: [t('Built chatbot back ends and IBM Watson integrations on .NET Core 3 with RabbitMQ.', 'بناء خوادم روبوتات المحادثة وتكاملات IBM Watson على .NET Core 3 مع RabbitMQ.')],
      tags: ['.NET Core', 'IBM Watson', 'RabbitMQ'] },
  ],
  edu: [
    { t: t('🎓 B.Sc. Computer Science', '🎓 بكالوريوس علوم الحاسوب'), s: t('Suez Canal University · 2014–2018 · graduation project “Hear” (Excellent)', 'جامعة قناة السويس · 2014–2018 · مشروع التخرج «Hear» (ممتاز)') },
    { t: t('📜 9-month diploma · Professional Web Development & BI', '📜 دبلوم 9 أشهر · تطوير الويب الاحترافي وذكاء الأعمال'), s: t('Information Technology Institute (ITI), MCIT · 2018–2019', 'معهد تكنولوجيا المعلومات (ITI) · 2018–2019') },
  ],
};

export const CONTACT = {
  t: t("Let's connect your systems", 'لنربط أنظمتك معًا'),
  p: t('Open to senior .NET and integration roles, remote or on-site.', 'أرحّب بأدوار .NET والتكاملات بمستوى Senior، عن بُعد أو حضوريًا.'),
  copy: t('Copy', 'نسخ'),
  avail: [t('🔗 Integrations', '🔗 التكاملات'), t('🌍 Remote', '🌍 عن بُعد'), t('✈️ Relocation', '✈️ الانتقال'), t('⏱ Full-time', '⏱ دوام كامل')],
};

export const FOOTER = {
  tag: t('Senior Software Engineer · .NET, Blazor, Integrations', 'Senior Software Engineer · .NET و Blazor والتكاملات'),
  avail: t('Open to new opportunities', 'أرحّب بالفرص الجديدة'), email: t('Email me', 'راسليني'), cv: t('Download CV', 'تحميل السيرة الذاتية'),
  explore: t('Explore', 'استكشف'), connect: t('Connect', 'تواصل'), rights: t('All rights reserved.', 'جميع الحقوق محفوظة.'),
  local: t('Cairo', 'القاهرة'), other: t('العربية', 'English'),
};

/** Runtime config for public/app.js (palette commands, links, code tile, storage keys). */
export const siteCfg = (base: string) => ({
  key: 'es',
  cv: base + 'Esraa-Nasser-CV.pdf',
  email: PERSON.email,
  linkedin: PERSON.linkedin,
  github: PERSON.github,
  sections: [
    { id: 'home', e: '🏠', en: 'Home', ar: 'الرئيسية' },
    { id: 'about', e: '👋', en: 'About me', ar: 'عنّي' },
    { id: 'intro', e: '🎬', en: 'Intro video', ar: 'فيديو تعريفي' },
    { id: 'skills', e: '🧰', en: 'Skills', ar: 'المهارات' },
    { id: 'projects', e: '🚀', en: 'Work', ar: 'الأعمال' },
    { id: 'career', e: '🧭', en: 'Career', ar: 'المسيرة المهنية' },
    { id: 'contact', e: '✉️', en: 'Contact', ar: 'تواصل' },
  ],
  projects: [
    { id: 'p-contracts', e: '📝', en: 'Contracts e-signature (Emdha)', ar: 'منصة عقود (إمضاء)' },
    { id: 'p-whis', e: '🤟', en: 'Whis Book translation', ar: 'Whis Book للترجمة' },
    { id: 'p-noug', e: '🥛', en: 'Noug camel milk app', ar: 'تطبيق نوق' },
    { id: 'p-winjigo', e: '🎓', en: 'winjiGo & TeacherKit', ar: 'winjiGo و TeacherKit' },
  ],
  code: [
    ['c', '// sign once, verify anywhere'],
    ['', `<span class="c-k">public async</span> Task&lt;<span class="c-f">SignResult</span>&gt; <span class="c-f">SignAsync</span>(<span class="c-f">Contract</span> c) {`],
    ['', `  <span class="c-k">var</span> doc = <span class="c-k">await</span> _dms.<span class="c-f">UploadAsync</span>(c);`],
    ['', `  <span class="c-k">var</span> sig = <span class="c-k">await</span> _emdha.<span class="c-f">RequestSignatureAsync</span>(doc.Id);`],
    ['', `  BackgroundJob.<span class="c-f">Enqueue</span>(() =&gt; _hub.<span class="c-f">NotifySigned</span>(c.Id));`],
    ['', `  <span class="c-k">return</span> sig; <span class="c-k">// years: </span><span class="c-n">6</span>+`],
    ['', '}'],
  ],
});
