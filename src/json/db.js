const main = require('./main.json');

const invoice = require('./invoice/invoice.json');
const conventionalInvoice = require('./invoice/conventional_invoice.json');
const productiveInvoice = require('./invoice/productive_invoice.json');

const osf = require('./osf/osf.json');
const conventionalOsf = require('./osf/conventional_osf.json');
const productiveOsf = require('./osf/productive_osf.json');

const reksadana = require('./reksadana/reksadana.json');
const sbn = require('./sbn/sbn.json');

module.exports = () => {
    return {
        main,
        invoice: {
            ...invoice,
            conventional: conventionalInvoice,
            productive: productiveInvoice,
        },
        osf: {
            ...osf,
            convetional: conventionalOsf,
            productive: productiveOsf,
        },
        reksadana,
        sbn,
    };
};
