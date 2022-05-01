import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first post!</title>
        <meta name="description" content="First post by user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>First Post</h1>
    </Layout>
  );
}
