import type { Service, ContactInfo } from '../types';

export const servicesData = [
    {
        number: '01',
        title: 'Grafik Tasarım',
        description:
            'Logo, broşür, afiş, katalog gibi tüm basılı ve dijital materyallerle kurumsal kimliğinizi profesyonelce yansıtırız.',
        desc1: 'Logo, broşür, afiş, katalog gibi tüm basılı ve dijital',
        desc2: 'materyallerle kurumsal kimliğinizi profesyonelce yansıtırız.',
        x: 700,
        y: -1400,
        align: 'right',
    },
    {
        number: '02',
        title: 'Video Prodüksiyon',
        description:
            'Reklam filmleri, tanıtım videoları, backstage çekimleri ve etkileyici kurgular ile markanızı dinamik anlatıyoruz.',
        desc1: 'Reklam filmleri, tanıtım videoları, backstage çekimleri ve',
        desc2: 'etkileyici kurgular ile markanızı dinamik anlatıyoruz.',
        x: 500,
        y: -1000,
        align: 'left',
    },
    {
        number: '03',
        title: 'Kurumsal Kimlik',
        description:
            'Markanızın temel değerleriyle uyumlu, renk paletinizden yazı karakterlerinize kadar bütüncül bir kurumsal kimlik oluşturuyoruz.',
        desc1: 'Markanızın temek değerleriyle uyumlu, renk paletinizden',
        desc2: 'yazı karakterlerinize kadar bütüncül bir kurumsal kimlik oluşturuyoruz.',
        x: 700,
        y: -600,
        align: 'right',
    },
    {
        number: '04',
        title: 'Sosyal Medya',
        description:
            'Instagram, LinkedIn ve diğer platformlara özel stratejik içerikler, gönderiler, reels videoları ve sayfa yönetimiyle görünürlüğünüzü güçlendiriyoruz.',
        desc1: 'Oluşturduğumuz kimliği dijital dünyada da taşıyarak, Instagram,',
        desc2: 'Linkedin ve diper platformlara özel stratejik içerikler, gönderiler,',
        desc3: 'reels videoları ve sayfa yönetimiyle görünürlüğünüzü güçlendiriyoruz.',
        x: 500,
        y: -200,
        align: 'left',
    },
    {
        number: '05',
        title: 'Web Tasarım',
        description:
            'Benzersiz ve akılda kalıcı web siteleri oluşturuyoruz. Kalıplaşmış şablon web siteleri değil, yalnızca markanıza uygun, özel tasarımlar.',
        desc1: 'Benzersiz ve akılda kalıcı bir web sitesi oluşturuyoruz. Kalıplaşmış',
        desc2: 'şablon web siteleri değil, yalnızca markanıza uygun, özel web siteleri oluşturuyoruz.',
        x: 700,
        y: 200,
        align: 'right',
    },
    {
        number: '06',
        title: 'Promosyon ve İş Elbiseleri',
        description:
            'Flaş Reklam ortaklığıyla, 40 yıllık deneyimi markanıza yansıtıyoruz. Tasarım ve baskı süreci tek elden yönetilen profesyonel çözümler.',
        desc1: 'Flaş reklam ortaklığıyla, 40 yıllık deneyimi markanıza yansıtıyoruz.',
        desc2: 'Tasarım ve baskı süreci tek elden yönetilen iş elbiseleri ve promosyon',
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
} satisfies ContactInfo;

export const heroText = {
    title: 'Bakan değil, ',
    highlight: 'gören',
    suffix: ' bir ajans.',
    description: 'Görselliği vizyona dönüştüren yaratıcı fikirlerle markanızı büyütüyoruz.',
} as const;
