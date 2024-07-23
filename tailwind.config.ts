import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        hover: {
          DEFAULT: "hsl(var(--hover))",
          2: "hsl(var(--hover-level-2))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground:
            "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground:
            "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground:
            "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground:
            "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground:
            "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground:
            "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground:
            "hsl(var(--card-foreground))",
        },        
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground:
            "hsl(var(--sidebar-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height:
              "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height:
              "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down":
          "accordion-down 0.2s ease-out",
        "accordion-up":
          "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        "light": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#E2FDEA",
              100: "#DAFBD6",
              200: "#B0F7AE",
              300: "#81E888",
              400: "#5DD171",
              500: "#2FB352",
              600: "#22994D",
              700: "#178047",
              800: "#0E6740",
              900: "#09553B",
              DEFAULT: "#2FB352",
              foreground: "#ffffff",
            },
            focus: "#DAFBD6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "dark": { // <- Tên theme mới
          extend: "dark", // <- Kế thừa giá trị mặc định từ theme tối
          colors: {
            background: "#121212",
            foreground: "#E0E0E0",
            primary: {
              50: "#5A5A5A",
              100: "#525252",
              200: "#4A4A4A",
              300: "#424242",
              400: "#3A3A3A",
              500: "#323232",
              600: "#2A2A2A",
              700: "#222222",
              800: "#1A1A1A",
              900: "#121212",
              DEFAULT: "#323232",
              foreground: "#E0E0E0",
            },
            focus: "#525252",
          },
          layout: {
            disabledOpacity: "0.5",
            radius: {
              small: "5px",
              medium: "7px",
              large: "9px",
            },
            borderWidth: {
              small: "2px",
              medium: "3px",
              large: "4px",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
