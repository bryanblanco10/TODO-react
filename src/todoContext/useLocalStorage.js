import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [item, setItem] = React.useState(initialValue);


  // useEffect para determinar cuándo ejecutamos o no el código de nuestro efecto.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;

        if (localStorage.getItem(itemName)) {
          parsedItem = JSON.parse(localStorage.getItem(itemName));
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  })

  const saveUpdateItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  // Cuando se retornan mas de 2 variables es recomendable usar Object
  return {
    item,
    saveUpdateItem,
    loading,
    error,
  }
}

export { useLocalStorage };