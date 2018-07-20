/**
 * Number.prototype.format(n, x)
 *
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
export const formatNumberToCurrencyFormat = (d, n, x) => {
	const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return d.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
