import path from "path";
import fs from "fs/promises";

import Link from "next/link";
import Head from "next/head";

function HomePage(props: any) {
  const { products } = props;

  return (
    <ul>
      <Head>
        <title>나의 Next</title>
        <meta name="description" content="FIND EVENT" />
      </Head>
      {products.map((product: any) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context: any) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
