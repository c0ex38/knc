import type { Service, ContactInfo } from '../types';

export const servicesData = [
    {
        number: '01',
        title: 'grafik tasarım',
        description:
            'logo, broşür, afiş, katalog gibi tüm basılı ve dijital materyallerle kurumsal kimliğinizi profesyonelce yansıtırız.',
        desc1: 'logo, broşür, afiş, katalog gibi tüm basılı ve dijital',
        desc2: 'materyallerle kurumsal kimliğinizi profesyonelce yansıtırız.',
        x: 700,
        y: -1400,
        align: 'right',
    },
    {
        number: '02',
        title: 'video prodüksiyon',
        description:
            'reklam filmleri, tanıtım videoları, backstage çekimleri ve etkileyici kurgular ile markanızı dinamik anlatıyoruz.',
        desc1: 'reklam filmleri, tanıtım videoları, backstage çekimleri ve',
        desc2: 'etkileyici kurgular ile markanızı dinamik anlatıyoruz.',
        x: 500,
        y: -1000,
        align: 'left',
    },
    {
        number: '03',
        title: 'kurumsal kimlik',
        description:
            'markanızın temel değerleriyle uyumlu, renk paletinizden yazı karakterlerinize kadar bütüncül bir kurumsal kimlik oluşturuyoruz.',
        desc1: 'markanızın temek değerleriyle uyumlu, renk paletinizden',
        desc2: 'yazı karakterlerinize kadar bütüncül bir kurumsal kimlik oluşturuyoruz.',
        x: 700,
        y: -600,
        align: 'right',
    },
    {
        number: '04',
        title: 'sosyal medya',
        description:
            'instagram, linkedin ve diğer platformlara özel stratejik içerikler, gönderiler, reels videoları ve sayfa yönetimiyle görünürlüğünüzü güçlendiriyoruz.',
        desc1: 'oluşturduğumuz kimliği dijital dünyada da taşıyarak, instagram,',
        desc2: 'linkedin ve diper platformlara özel stratejik içerikler, gönderiler,',
        desc3: 'reels videoları ve sayfa yönetimiyle görünürlüğünüzü güçlendiriyoruz.',
        x: 500,
        y: -200,
        align: 'left',
    },
    {
        number: '05',
        title: 'web tasarım',
        description:
            'benzersiz ve akılda kalıcı web siteleri oluşturuyoruz. kalıplaşmış şablon web siteleri değil, yalnızca markanıza uygun, özel tasarımlar.',
        desc1: 'benzersiz ve akılda kalıcı bir web sitesi oluşturuyoruz. kalıplaşmış',
        desc2: 'şablon web siteleri değil, yalnızca markanıza uygun, özel web siteleri oluşturuyoruz.',
        x: 700,
        y: 200,
        align: 'right',
    },
    {
        number: '06',
        title: 'promosyon ve iş elbiseleri',
        description:
            'Flaş Reklam ortaklığıyla, 40 yıllık deneyimi markanıza yansıtıyoruz. Tasarım ve baskı süreci tek elden yönetilen profesyonel çözümler.',
        desc1: 'Flaş reklam ortaklığıyla, 40 yıllık deneyimi markanıza yansıtıyoruz.',
        desc2: 'tasarım ve baskı süreci tek elden yönetilen iş elbiseleri ve promosyon',
        desc3: 'ürünleriyle, markanızı sahada da tutarlı ve profesyonel şekilde temsil ediyoruz.',
        x: 500,
        y: 600,
        align: 'left',
    },
] satisfies Service[];

export const contactInfo = {
    email: 'info@kncdesign.com.tr',
    phone: '+90 552 636 01 42',
    instagram: 'https://instagram.com/knccreative_',
    whatsappLink: 'https://wa.me/905526360142',
    address: 'Fevziçakmak, 10453. Sk. No:16/B, 42050 Karatay/Konya',
    googleVerification: 'bhMnSGeLMs67W4MjvxywgSiKnvotKDok85iSF4iRP4k',
} satisfies ContactInfo;

export const heroText = {
    title: 'Bakan değil, ',
    highlight: 'gören',
    suffix: ' bir ajans.',
    description: 'Görselliği vizyona dönüştüren yaratıcı fikirlerle markanızı büyütüyoruz.',
} as const;

export const SOCIAL_LINKS = [
    {
        href: contactInfo.instagram,
        label: 'Instagram',
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ),
    },
    {
        href: 'https://x.com/knccreative',
        label: 'X',
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        ),
    },
    {
        href: 'https://www.linkedin.com/in/knc-creative',
        label: 'LinkedIn',
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        ),
    },
];

export const NAV_LINKS = [
    { to: '/', label: 'ana sayfa' },
    { to: '/hakkimizda', label: 'hakkımızda' },
    { to: '/referanslar', label: 'referanslar' },
    { to: '/iletisim', label: 'iletişim' },
    { href: 'https://www.flasreklam.com', label: 'flaş reklam' }, // External link
];
