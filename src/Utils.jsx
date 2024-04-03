export function calculateTotals(data) {
    let total = 0
    let shipping = 50
    let vat = 0
    let grandTotal = 0
    for(let i = 0; i < data.length; i++) {
        total += (data[i].price * data[i].count)
    }
    vat = Math.round((total * .20))
    grandTotal = total + shipping

    return {total, shipping, vat, grandTotal}
}

export function formatCurrency(input) {
    const options = { style: 'currency', currency: 'USD', maximumSignificantDigits: 5  };
    let formatter = new Intl.NumberFormat('en-US', options);
    input = formatter.format(input)
    return input
}