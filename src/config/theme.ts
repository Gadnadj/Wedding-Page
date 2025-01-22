export type ThemeConfig = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    title: string;
    body: string;
  };
};

// Exemple de thème par défaut
export const defaultTheme: ThemeConfig = {
  colors: {
    primary: "#D4B996",
    secondary: "#C1666B",
    background: "#FFFFFF",
    text: "#333333",
    accent: "#4A4E69",
  },
  fonts: {
    title: "Playfair Display",
    body: "Raleway",
  },
}; 