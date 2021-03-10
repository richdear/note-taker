import Link from 'next/link';
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post title</title>
            </Head>
            <h1>
                First Post chnaged
            </h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Layout>
    )
}