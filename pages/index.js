import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Link from "next/link";
import axiosInstance from "../axios/axiosInstance";

export default function Home({ contents }) {
  return (
    <div>
      <Head>
        <title>FighteR | List Content</title>
        <meta name="description" content="List Content FighteR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-2">
        {contents.map((content, i) => (
          <Link key={content.id} href={`/detail/${content.id}`} passHref>
            <h3 style={{ cursor: "pointer" }}>
              {i + 1}. {content.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axiosInstance.get("fighter-content");
  return {
    props: { contents: data }, // will be passed to the page component as props
  };
}
