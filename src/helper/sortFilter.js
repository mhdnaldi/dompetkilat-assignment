const sortFilter = (type) => {
    switch (type) {
        case 'sbn':
            return ['ALL', 'SBR', 'ST'];
        case 'reksadana':
            return ['ALL', '> = 0', '< 0'];
        case 'conventional_invoice':
            return ['ALL', 'A', 'B', 'B+'];
        case 'productive_invoice':
            return ['ALL', 'A', 'B', 'B+'];
        case 'conventional_osf':
            return ['ALL', 'A', 'B', 'B+'];
        case 'productive_osf':
            return ['ALL', 'A', 'B', 'B+'];
        default:
            return [];
    }
};

export default sortFilter;
