import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";

interface IProduct {
  id: string;
  title: string;
  price: number;
}

export default function Home() {
  const [recommendedProducts, setRecomendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/recommended").then((response) => {
      response.json().then((data) => {
        setRecomendedProducts(data);
      });
    });
  }, []);

  return (
    <div>
      <Title>Hello world</Title>
      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map((product) => (
            <li key={product.id}>
              {product.title} | {product.price}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
