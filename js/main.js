const packaging = document.querySelector('.product__packaging');
const priceElement = document.querySelector('.product__price');
const oldPriceElement = document.querySelector('.product__old-price-value');
const skuElement = document.querySelector('.product__sku-value');
const oldPriceBlock = document.querySelector('.product__old-price');
const badgeElement = document.querySelector('.product__badge');

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);
}

function updateProduct(radio) {
  const { sku, price, oldPrice } = radio.dataset;
  const hasDiscount = Boolean(oldPrice);

  priceElement.textContent = formatPrice(Number(price));
  skuElement.textContent = sku;

  oldPriceBlock.hidden = !hasDiscount;
  badgeElement.hidden = !hasDiscount;

  if (hasDiscount) {
    oldPriceElement.textContent = formatPrice(Number(oldPrice));
  }
}

packaging.addEventListener('change', (event) => {
  updateProduct(event.target);
});

updateProduct(packaging.querySelector('.product__radio:checked'));
