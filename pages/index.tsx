import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";

interface IProduct {
  id: string;
  title: string;
  price: number;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch("http://localhost:3333/recommended");
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts,
    },
  };
};
