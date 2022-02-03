export function getDifferenceYears(year) {
    return new Date().getFullYear() - year;
}

export function getPercentBranding(marca) {
    let incremento;

    switch(marca) {
        case 'seat':
            incremento = 1.30;
            break;
        case 'bmw':
            incremento = 1.15;
            break;
        case 'honda':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function getPolicyType(tipo) {
    let incremento;
    
    switch(tipo) {
        case 'basico':
            incremento = 1.2;
            break;
        case 'completo':
            incremento = 1.5;
            break;
        default:
            break;
    }
    return incremento;
}

export function transformUppercase(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}