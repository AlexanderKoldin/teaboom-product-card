const packaging = document.querySelector('.product__packaging');
const priceElement = document.querySelector('.product__price');
const oldPriceElement = document.querySelector('.product__old-price-value');
const skuElement = document.querySelector('.product__sku-value');

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);
}

function updateProduct(radio) {
  const { sku, price, oldPrice } = radio.dataset;

  priceElement.textContent = formatPrice(Number(price));
  oldPriceElement.textContent = formatPrice(Number(oldPrice));
  skuElement.textContent = sku;
}

packaging.addEventListener('change', (event) => {
  updateProduct(event.target);
});

updateProduct(packaging.querySelector('.product__radio:checked'));
