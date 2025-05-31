import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Cake, cakes, CakeSize } from "../data";
import { useState } from "react";
import { setAutoOpenCart } from "../utilities/cartSideBarControl";
import { addItem } from "../features/cart/cartSlice";

export type ItemDetailHook = {
  handleAddtoCart: () => void;
  handleOrderNow: () => void;
  setSelectSize: React.Dispatch<React.SetStateAction<CakeSize | "">>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  cake: Cake;
  quantity: number;
  selectSize: CakeSize | "";
};

export function useItemDetail(): ItemDetailHook | undefined {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const cake = cakes.find((c) => c.id === Number(id));

  const [selectSize, setSelectSize] = useState<CakeSize | "">("");

  const [quantity, setQuantity] = useState<number>(1);

  if (!cake) return;

  const priceMultiplier = selectSize === "8-inch" ? 1.5 : 1;
  const basePrice = cake.unitPrice * priceMultiplier;

  const totalPrice = (quantity ?? 0) * basePrice;

  function handleAddtoCart() {
    if (!selectSize || !quantity) return;
    setAutoOpenCart(true);
    const newItem = {
      cakeId: cake?.id,
      name: cake?.name,
      size: selectSize as CakeSize,
      quantity,
      basePrice,
      totalPrice,
    };
    console.log(newItem);
    dispatch(addItem(newItem));
  }

  function handleOrderNow() {
    if (!selectSize || !quantity) return;
    setAutoOpenCart(false);
    const newItem = {
      cakeId: cake?.id,
      name: cake?.name,
      size: selectSize as CakeSize,
      quantity,
      basePrice,
      totalPrice,
    };

    dispatch(addItem(newItem));
    navigate("/checkout");
  }
  return {
    handleAddtoCart,
    handleOrderNow,
    setSelectSize,
    setQuantity,
    cake,
    quantity,
    selectSize,
  };
}

export default useItemDetail;
