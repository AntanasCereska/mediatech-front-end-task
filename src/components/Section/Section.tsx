import Image from "next/image";
import s from "./Section.module.css";
import type { Section } from "types";

type Props = Section & {
  textRight?: boolean;
};

export default function Section({ textRight = true, title, content, image }: Props) {
  const paragraps = content.map((c, i) => <p key={i}>{c}</p>);
  return (
    <section className={`${s.section} ${!textRight ? s.section_reversed : ""}`}>
      {textRight && (
        <Image priority={true} width={225} height={225} src={image.src} alt={image.alt} />
      )}
      <div className={s.content}>
        <h2>{title}</h2>
        {paragraps}
      </div>
      {!textRight && (
        <Image priority={true} width={225} height={225} src={image.src} alt={image.alt} />
      )}
    </section>
  );
}
