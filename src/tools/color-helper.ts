export const COLOR_MAP = {
  red: {
    bg: "bg-rose-500",
    fg: "text-white",
    border: "border-rose-500",
    toggle: {
      on: "text-rose-800",
      off: "text-white",
    },
  },
  green: {
    bg: "bg-emerald-500",
    fg: "text-white",
    border: "border-emerald-500",
    toggle: {
      on: "text-emerald-950",
      off: "text-white",
    },
  },
  blue: {
    bg: "bg-blue-500",
    fg: "text-white",
    border: "border-blue-500",
    toggle: {
      on: "text-blue-800",
      off: "text-white",
    },
  },
  sky: {
    bg: "bg-sky-500",
    fg: "text-white",
    border: "border-sky-500",
    toggle: {
      on: "text-sky-900",
      off: "text-white",
    },
  },
  orange: {
    bg: "bg-orange-500",
    fg: "text-white",
    border: "border-orange-500",
    toggle: {
      on: "text-orange-800",
      off: "text-white",
    },
  },
  pink: {
    bg: "bg-pink-500",
    fg: "text-white",
    border: "border-pink-500",
    toggle: {
      on: "text-pink-800",
      off: "text-white",
    },
  },
  lime: {
    bg: "bg-lime-500",
    fg: "text-white",
    border: "border-lime-500",
    toggle: {
      on: "text-lime-800",
      off: "text-white",
    },
  },
  teal: {
    bg: "bg-teal-500",
    fg: "text-white",
    border: "border-teal-500",
    toggle: {
      on: "text-teal-800",
      off: "text-white",
    },
  },
  cyan: {
    bg: "bg-cyan-500",
    fg: "text-white",
    border: "border-cyan-500",
    toggle: {
      on: "text-cyan-800",
      off: "text-white",
    },
  },
  gray: {
    bg: "bg-gray-800",
    fg: "text-white",
    border: "border-gray-800",
    toggle: {
      on: "text-blue-500",
      off: "text-white",
    },
  },
  violet: {
    bg: "bg-violet-500",
    fg: "text-white",
    border: "border-violet-500",
    toggle: {
      on: "text-violet-800",
      off: "text-white",
    },
  },
  indigo: {
    bg: "bg-indigo-500",
    fg: "text-white",
    border: "border-indigo-500",
    toggle: {
      on: "text-indigo-800",
      off: "text-white",
    },
  },
  purple: {
    bg: "bg-purple-500",
    fg: "text-white",
    border: "border-purple-500",
    toggle: {
      on: "text-purple-800",
      off: "text-white",
    },
  },
};

class ColorHelper {
  public static getOptions(): string[] {
    return Object.keys(COLOR_MAP);
  }

  public static getBg(color: keyof typeof COLOR_MAP | undefined): string {
    if (!color) return "";
    return COLOR_MAP[color].bg;
  }

  public static getForeground(
    color: keyof typeof COLOR_MAP | undefined,
  ): string {
    if (!color) return "";
    return COLOR_MAP[color].fg;
  }

  public static getBorder(color: keyof typeof COLOR_MAP | undefined): string {
    if (!color) return "";
    return COLOR_MAP[color].border;
  }

  public static getToggle(
    color: keyof typeof COLOR_MAP | undefined,
    state: "on" | "off",
  ): string {
    if (!color) return "";
    return COLOR_MAP[color].toggle[state];
  }
}

export default ColorHelper;
