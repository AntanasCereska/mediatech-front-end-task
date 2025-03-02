import type { Section } from "types";

export const sections: Section[] = [
    {
        title: "What is a password generator?",
        content: [
            "A password generator is a tool that automatically generates strong, secure passwords. With its help, you don’t need to come up with your own passwords ever again.",
            "A single mouse click will generate you a sequence of random symbols. Copy and use it as a password for your device, email, social media account, or anything else that requires restricted access.",
            "Also, don’t use the same password for more than one account. Each time you need to sign up, create a new password using this free password generator. In this way, your data will be safer than ever before.",
        ],
        image: { src: "/images/protection.png", alt: "protection shield lock" },
    },
    {
        title: "How does our password generator tool work?",
        content: [
            "To create a truly unique character combination, this online password generator tool goes through random sequences of 26 uppercase letters, 26 lowercase letters, 10 numeric digits, and 32 special symbols.The result is a unique 12 - character sequence.This number of characters makes your future password downright unbreakable, taking 1.4 billion years for a brute- force attack to crack it.",
            "This free password generator is compatible with Windows, Linux, and Mac operating systems, as well as with Android and iOS devices."
        ],
        image: { src: "/images/password-length.png", alt: "password strength meter" },
    },
];