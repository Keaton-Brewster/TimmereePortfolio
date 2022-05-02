import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

// For loading the data specific to the dynamic loaded page
import { getAllPostIds, getPostData } from "../../lib/posts";
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// For setting up dynamic paths with this static page
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
