export class SummaryUpdater {
    constructor(summary) {
        for (let detail in summary) {
            let summaryDetail = document.querySelector('.summary-' + detail);

            if (summaryDetail) {

                let detailValue = summary[detail];

                switch (detail) {
                    case 'face-amount':
                    case 'premium':
                        detailValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(detailValue);
                        break;
                    default:
                }

                summaryDetail.innerHTML = detailValue;
            } else {
                console.error("unfound summary detail returned from PHP: " + detail);
            }
        }
    }
}