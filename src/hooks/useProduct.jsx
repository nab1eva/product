import { useCallback, useMemo, useState } from "react";
import { types } from "../data/types";
import { v4 as uuidv4 } from "uuid";

export const useProduct = () => {
  const [validated, setValidated] = useState(false);
  const [product, setproduct] = useState({
    name: "",
    lastName: "",
    age: "",
    type: types[0],
  });
  const productsJson = localStorage.getItem("products");
  const [products, setProducts] = useState(JSON.parse(productsJson) || []);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handleChange = useCallback(
    (e) => {
      setproduct({ ...product, [e.target.name]: e.target.value });
    },
    [product]
  );

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      setValidated(true);
      const form = e.currentTarget;
      if (form.checkValidity()) {
        let newproducts;
        if (selected === null) {
          newproducts = [...products, product];
        } else {
          newproducts = products.map((el) => {
            if (el.id === selected) {
              return product;
            } else {
              return el;
            }
          });
          setSelected(null);
        }
        setProducts(newproducts);
        localStorage.setItem("products", JSON.stringify(newproducts));
        setproduct({
          name: "",
          lastName: "",
          price: "",
          type: types[0],
          id: uuidv4(),
        });
        setValidated(false);
      }
    },
    [product, products, selected]
  );

  const editproduct = useCallback(
    (id) => {
      let product = products.find((product) => product.id === id);
      setSelected(id);
      setproduct(product);
    },
    [products]
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }, []);

  const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) 
  );

  const getAveragePrice = (products) => {
    console.log("getAveragePrice");
    return (
      products.reduce((acc, product) => acc + +product.price, 0) / products.length
    );
  };

  const averagePrice = useMemo(() => getAveragePrice(products), [products]);

  return {
    validated,
    product,
    results,
    search,
    averagePrice,
    selected,
    handleSearch,
    handleChange,
    submit,
    editproduct,
  };
};
