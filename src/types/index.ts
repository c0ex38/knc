/**
 * Merkezi Tip Tanımları
 * Uygulama genelinde kullanılan tip tanımları
 */

/**
 * Servis veri yapısı
 */
export interface Service {
    readonly number: string;
    readonly title: string;
    readonly description: string;
    readonly desc1: string;
    readonly desc2: string;
    readonly desc3?: string;
    readonly x: number;
    readonly y: number;
    readonly align: 'left' | 'right';
}

/**
 * İletişim bilgileri yapısı
 */
export interface ContactInfo {
    readonly email: string;
    readonly phone: string;
    readonly instagram: string;
    readonly whatsappLink: string;
    readonly address: string;
    readonly googleVerification?: string;
}

/**
 * Navigasyon öğesi yapısı
 */
export interface NavItem {
    readonly label: string;
    readonly path: string;
}

/**
 * Preloader bileşeni props
 */
export interface PreloaderProps {
    onComplete: () => void;
}

/**
 * ServiceItem bileşeni props
 */
export interface ServiceItemProps {
    number: string;
    title: string;
    desc1: string;
    desc2: string;
    desc3?: string;
    x: number;
    y: number;
    align?: 'left' | 'right';
}
