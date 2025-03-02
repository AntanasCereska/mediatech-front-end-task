import Banner from "@/components/Banner/Banner";
import Message from "@/components/Message/Message";
import Section from "@/components/Section/Section";
import s from "./page.module.css";
import { sections, messages } from "@/data";

export default function Home() {
  const sectionsEl = sections.map((s, i) => (
    <Section textRight={i % 2 === 0} key={i} title={s.title} content={s.content} image={s.image} />
  ));

  return (
    <main className={s.main}>
      <div className={s.message}>
        <Message content={messages} />
      </div>
      <Banner />
      <div className={s.sections}>{sectionsEl}</div>
    </main>
  );
}
