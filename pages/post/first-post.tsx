import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a className="text-blue-500 no-underline hover:underline">Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
};

export default FirstPost;