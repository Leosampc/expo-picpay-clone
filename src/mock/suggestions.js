import { Images } from '#/constants';

const data = [
  {
    key: String(Math.random()),
    source: Images.phone,
    label: 'Recarga de Celular',
  },
  {
    key: String(Math.random()),
    source: Images.uber,
    label: 'Uber Pré Pago',
  },
  {
    key: String(Math.random()),
    source: Images.bus,
    label: 'Cartão de Transporte',
  },
  {
    key: String(Math.random()),
    source: Images.sky,
    label: 'SKY TV Pré-Pago',
  },
  {
    key: String(Math.random()),
    source: Images.heart,
    label: 'Qualidade de vida',
  },
  {
    key: String(Math.random()),
    source: Images.barCode,
    label: 'Pagar Conta',
  },
  {
    key: String(Math.random()),
    source: Images.moneyMessageBox,
    label: 'Cobrar',
  },
];

export default data;
