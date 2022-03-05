import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import axiosInstance from "../../axios/axiosInstance";
const BUCKET = "https://fighter-files-dev.s3.ap-southeast-1.amazonaws.com";

const myLoader = ({ src }) => {
  return `${BUCKET}/${src}`;
};

export default function Detail({ content }) {
  return (
    <div>
      <Head>
        <title>FighteR | {content.title}</title>
        <meta name="description" content={content?.description} />

        {/* FB */}
        <meta property="og:url" content={`https://fakhrulnugroho.github.io/detail/${content.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content?.title} />
        <meta property="og:description" content={content?.description} />
        {content.contentType === "image" && <meta property="og:image" content={`${BUCKET}/${content.images[0].name}`} />}

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jangan Pernah Menyerah Apapun Yang Terjadi" />
        <meta name="twitter:description" content={content.description} />
        {content.contentType === "image" && <meta property="twitter:image" content={`${BUCKET}/${content.images[0].name}`} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-2">
        <h1>Detail Content</h1>
        <h4>{content.title}</h4>
        <p>{content.description}</p>
        <FacebookShareButton url={`https://fakhrulnugroho.github.io/detail/${content.id}`}>
          <FacebookIcon size={30} /> Share To Facebook
        </FacebookShareButton>
        <TwitterShareButton url={`https://fakhrulnugroho.github.io/detail/${content.id}`}>
          <TwitterIcon size={30} /> Share To Twitter
        </TwitterShareButton>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await axiosInstance.get("fighter-content");
  return {
    paths: data.map((d) => ({ params: { id: d.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axiosInstance.get(`fighter-content/public/${params.id}`);
  return {
    props: { content: data }, // will be passed to the page component as props
  };
}
