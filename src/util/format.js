import numeral from 'numeral';
import 'numeral/locales';

numeral.locale('pt-br');
export default function formatPrice(value) {
  return numeral(value).format('$0,0.00');
}
