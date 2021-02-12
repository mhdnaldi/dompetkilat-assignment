const main = require('./main.json');

const invoice = require('./invoice/invoice.json');
const conventionalInvoice = require('./invoice/conventional_invoice.json');
const productiveInvoice = require('./invoice/productive_invoice.json');

const osf = require('./osf/osf.json');
const conventionalOsf = require('./osf/conventional_osf.json');
const productiveOsf = require('./osf/productive_osf.json');

const reksadana = require('./reksadana/reksadana.json');
const sbn = require('./sbn/sbn.json');

console.log(sbn);
console.log(sbn.contents);

module.exports = () => {
    return {
        main: main.contents,
        invoice: invoice.contents,
        conventional_invoice: conventionalInvoice.contents,
        productive_invoice: productiveInvoice.contents,
        osf: osf.contents,
        conventional_osf: conventionalOsf.contents,
        productive_osf: productiveOsf.contents,
        reksadana: reksadana.contents,
        sbn: sbn.contents,
    };
};
