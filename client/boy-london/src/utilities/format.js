export const formatMoney = (price) => {
  if (!price) return ''
  return `${price.toLocaleString()} đ`;
};


export const checkPhone = (phone) => {
  return String(phone).match(/^[0-9]+$/) !== null;
}

export const checkEmail = (email) => {
  return String(email).includes('@');
}