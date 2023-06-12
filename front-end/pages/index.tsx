
import { Inter } from 'next/font/google';
import Layout from '../components/Layout';
import Landing from './landing';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Link href="/registration">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/about">About Us</Link>
    </Layout>
  );
}
