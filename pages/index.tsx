import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";
import CountButton from "./components/sumButton";

interface IProduct {
  id: string;
  title: string;
  price: number;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  const [count, setCount] = useState(0);
  // const [dots, setDots] = useState([])

  const sum = () => setCount(count + 1);

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
      <section>
        <br />
        <h1>{count}</h1>
        <br />
        <CountButton action={sum} number={count} />
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch("http://localhost:3333/recommended");
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts,
    },
  };
};
