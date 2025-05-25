let autoOpenCart = true;

export function setAutoOpenCart(isOpen: boolean) {
  autoOpenCart = isOpen;
}

export function shouldAutoOpenCart() {
  return autoOpenCart;
}
