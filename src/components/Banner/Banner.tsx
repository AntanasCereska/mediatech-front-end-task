"use client";
import ArrowRound from "@/svg/ArrowRepeat";
import { useState, useMemo, useEffect } from "react"; // probably useCallback would be good for some functions too
import { rules } from "@/data";
import s from "./banner.module.css";

export default function Banner() {
  const [passwordRules, setPasswordRules] = useState(rules);

  const [password, setPassword] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const charsToUse = useMemo(() => {
    return passwordRules.reduce((acc, rule) => {
      if (rule.checked) acc += rule.chars;
      return acc;
    }, "");
  }, [passwordRules]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const toggleRule = (index: number) => {
    // prevent from disabling all password rules
    if (passwordRules.filter((x) => x.checked).length <= 1 && passwordRules[index].checked) {
      return setPasswordRules(passwordRules);
    }
    const newPasswordRules = [...passwordRules];
    newPasswordRules[index].checked = !newPasswordRules[index].checked;
    setPasswordRules(newPasswordRules);
  };

  const generateNumber = (from: number, to: number) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };

  const generatePassword = (length: number = 20): string => {
    // return empty string if there are no chars to use for generation
    // won't happens since toggleRule won't let to uncheck all rules
    if (!charsToUse) return "";
    const generatedPassword = Array.from({ length }).reduce((password: string) => {
      const randomChar = charsToUse[generateNumber(0, charsToUse.length - 1)];
      return password + randomChar;
    }, "");
    return generatedPassword;
  };

  useEffect(() => {
    setPassword(generatePassword());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.banner}>
      <div className={s.banner__text}>
        <h1>Generate strong password</h1>
        <p>Upgrade the security of your online accounts.</p>
        <p>Create strong passwords that are completely random and impossible to guess.</p>
      </div>
      <div className={s.banner__psw_gen}>
        <div>
          <p>{password}</p>
        </div>
        <button className={s.banner__btn_generate} onClick={() => setPassword(generatePassword())}>
          <ArrowRound />
        </button>
        <button onClick={handleCopy} className={s.banner__btn_copy}>
          {copied && <span className={s.banner__btn_copy_tooltip}>Copied!</span>}
          Copy password
        </button>
      </div>
      <div className={s.banner__checkboxes}>
        {passwordRules.map((rule, index) => (
          <div key={index}>
            <input
              id={rule.api}
              type="checkbox"
              checked={rule.checked}
              onChange={() => toggleRule(index)}
            />
            <label htmlFor={rule.api}>{rule.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
