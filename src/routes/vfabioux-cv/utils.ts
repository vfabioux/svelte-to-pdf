export function renderAge(birthDate: Date, locale: "en" | "fr"): string {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return {
        en: `${age} years old - ${birthDate.toLocaleDateString()}`,
        fr: `${age} ans - ${birthDate.toLocaleDateString()}`,
    }[locale];
}
