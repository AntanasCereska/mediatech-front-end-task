export type Message = { text: string; url?: string };

export type Section = {
  title: string;
  content: string[];
  image: { src: string; alt: string };
};

export type Rule = {
  api: string;
  name: string;
  checked: boolean;
  chars: string;
};
