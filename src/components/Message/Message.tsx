import React from "react";
import Link from "next/link";
import s from "./Message.module.css";
import type { Message } from "types";

export default function Message({ content }: { content: Message[] }) {
  return (
    <p className={s.message}>
      {content.map((item, index) => (
        <React.Fragment key={index}>
          {" "}
          {/* Add a key to the fragment */}
          {index > 0 && " "} {/* Adds space (gap) before each item except first */}
          {item.url ? <Link href={item.url}>{item.text}</Link> : <span>{item.text}</span>}
        </React.Fragment>
      ))}
    </p>
  );
}
