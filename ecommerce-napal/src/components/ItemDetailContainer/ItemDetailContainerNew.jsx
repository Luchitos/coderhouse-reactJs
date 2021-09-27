import ItemDetailNew from "./ItemDetail/ItemDetailNew";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { itemOnly } from "../../firebase";

const ItemDetailContainerNew = () => {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const item = itemOnly(id);
    item.then((data) => {
      const itemAux = [];
      data.forEach((item) => {
        itemAux.push({
          id: item.id,
          title: item.data().titulo,
          precio: item.data().Precio,
          categoria: item.data().categoria,
          Descripcion: item.data().Descripcion,
          stock: item.data().Stock,
          pictureUrl: item.data().UrlPicture,
        });
      });
      setProducto(itemAux);
      setCargando(false);
    });
  }, [id]);

  return (
    <>
      {cargando ? (
        <h4>LOADING PRODUCTO...</h4>
      ) : (
        <ItemDetailNew
          key={producto.id}
          id={producto.id}
          titulo={producto.titulo}
          Descripcion={producto.Descripcion}
          Precio={producto.Precio}
          UrlPicture={producto.UrlPicture}
          Stock={parseInt(producto.Stock)}
        />
      )}
    </>
  );
};

export default ItemDetailContainerNew;
