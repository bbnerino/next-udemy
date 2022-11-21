import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "./components/event/event-list";
import { useEffect, useState } from "react";
export default function Home() {
  const [featuredEvents, setFeaturedEvents] = useState(getFeaturedEvents());
  return (
    <div className={styles.container}>
      <h1>home</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
