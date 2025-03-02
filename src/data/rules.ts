import type { Rule } from "types"

export const rules: Rule[] = [
    { api: "lowerCase", name: "lower case", checked: true, chars: "abcdefghijklmnopqrstuvwxyz" },
    { api: "upperCase", name: "upper case", checked: true, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { api: "specialSymbols", name: "special symbols", checked: true, chars: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" },
    { api: "numbers", name: "numbers", checked: true, chars: "0123456789" },
]