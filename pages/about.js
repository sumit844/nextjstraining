import React, { useEffect } from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  useEffect(() => {
    let loginStatus = localStorage.getItem("loginStatus");
    if (!loginStatus) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" value="This is our about us page" />
        <meta name="title" value="About us" />
      </Head>
      <p className={styles.myclass}> This is About page</p>
      <h1 className="aboutNew">I am testing Shared component features</h1>
      <img src="/nextimage.jpg" />
      <br />
      <Image src="/nextimage.jpg" width={350} height={200} />
    </>
  );
};

export default About;
