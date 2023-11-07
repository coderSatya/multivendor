import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
   <div>
    Homepage123
    <div>
    <Link href='/products'>Blog</Link>
    </div>
   
   </div>
  )
}
