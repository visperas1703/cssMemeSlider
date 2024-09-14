function getFormattedDate() {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const date = new Date();
    return date.toLocaleString('en-EN', options);
}

const DATE_STRING = getFormattedDate();
console.log(DATE_STRING);
