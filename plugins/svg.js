import { readFileSync } from "fs";
import { extname } from "path";

export default function svg() {
  return {
    name: "svg",

    load(id) {
      if (extname(id) !== ".svg") {
        return null;
      }

      const content = readFileSync(id, "utf-8")
        .replace(/<\?xml[\s\S]*?\?>\s*/g, "")
        .replace(/<!doctype[\s\S]*?>\s*/gi, "");

      return `export default ${JSON.stringify(content)};`;
    },
  };
}
