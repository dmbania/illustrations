'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SummaryUpdater = exports.SummaryUpdater = function SummaryUpdater(summary) {
    _classCallCheck(this, SummaryUpdater);

    for (var detail in summary) {
        var summaryDetail = document.querySelector('.summary-' + detail);

        if (summaryDetail) {

            var detailValue = summary[detail];

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
};