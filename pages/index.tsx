import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Chandershehkhar Luhaniwal, working as UI developer in eminds.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3 mt-3'>Blog</h2>
        <ul>
          {
            allPostsData.map(({ id, date, title }: any) => (
              <li key={id} className="mb-3 p-3 rounded-lg shadow-lg shadow-gray-300">
                <Link href={`/post/${id}`}>
                  <a className='font-normal'>{title}</a>
                </Link>
                <div className='text-xs'>
                  <Date dateString={date} />
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}