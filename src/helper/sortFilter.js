const sortFilter = (type) => {
    switch (type) {
        case 'sbn':
            return ['SBR', 'ST'];
        case 'reksadana':
            return ['> = 0', '< 0'];
        case 'conventional_invoice':
            return ['A', 'B', 'B +'];
        case 'productive_invoice':
            return ['A', 'B', 'B+'];
        case 'conventional_osf':
            return ['A', 'B', 'B+'];
        case 'productive_osf':
            return ['A', 'B', 'B+'];
        default:
            return [];
    }
};

export default sortFilter;
