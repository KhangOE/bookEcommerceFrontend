import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducByIdtApi } from "../api/productsApi";
import { Items } from "../page/admin/tablepagin";

const CartThemeContext = React.createContext();

export function useCart() {
  return useContext(CartThemeContext);
}

export function ThemeContext({ children }) {
  const [cart2, setCart] = useState([]);
  const [user, setUser] = useState();
  const { currentUser } = useSelector((state) => state.auth);
  const [lengthCart, setLenghtCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const [oderItem, setOderItem] = useState([]);
  const clearCart = () => {
    setCart([]);
    setTotalCart(0);
  };
  useEffect(() => {
    setLenghtCart(
      cart2
        .map((i) => {
          return i.sl;
        })
        .reduce((a, b) => a + b, 0)
    );
    // console.log(lengthCart);
  }, [cart2]);

  const addCartItem = (props) => {
    const check = cart2.map((i) => {
      return i.id;
    });
    if (check.includes(props.id)) {
      plustItem(props.id);
    } else {
      setCart((state) => [...state, { id: props.id, sl: props.sl }]);
    }
    //  console.log(cart2);
  };

  const plustItem = (id) => {
    setCart((state) =>
      state.map((element) => {
        if (element.id == id) {
          return {
            id: element.id,
            sl: element.sl + 1,
          };
        } else {
          return element;
        }
      })
    );
  };
  useEffect(
    () => {
      const get = async () => {
        const price = await [];
        await cart2.forEach(async (Item) => {
          await getProducByIdtApi(Item.id).then((res) => {
            price.push({
              price: res.data.product.price * Item.sl,
              quantity: Item.sl,
              productId: Item.id,
            });
            //   console.log(res?.data.product.price);
          });
          console.log(price);
          setOderItem(price);
        });
      };
      get();
    },
    [cart2],
    []
  );

  useEffect(() => {
    const getTotal = async () => {
      const price = await [];
      await cart2.forEach(async (Item) => {
        await getProducByIdtApi(Item.id).then((res) => {
          price.push(res.data.product.price * Item.sl);
          //   console.log(res?.data.product.price);
        });

        setTotalCart(price.reduce((a, b) => a + b, 0));
      });
    };
    getTotal();
    // console.log(cart2);

    //console.log(totalCart);
  }, [cart2]);

  const reduceItem = (id) => {
    setCart((state) =>
      state.map((element) => {
        if (element.id == id) {
          return {
            id: element.id,
            sl: element.sl - 1,
          };
        } else {
          return element;
        }
      })
    );
  };

  const deleteCartItem = (id) => {
    setCart((state) =>
      state.filter((i) => {
        return i.id !== id;
      })
    );
  };

  useEffect(() => {
    user && localStorage.setItem(user._id, JSON.stringify(cart2));
  }, [cart2]);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  useEffect(() => {
    setUser(currentUser);
  }, []);

  return (
    <CartThemeContext.Provider
      value={{
        cart2,
        deleteCartItem,
        addCartItem,
        plustItem,
        reduceItem,
        lengthCart,
        setCart,
        totalCart,
        oderItem,
        clearCart,
      }}
    >
      {children}
    </CartThemeContext.Provider>
  );
}
