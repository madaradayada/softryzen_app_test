const theme = Object.freeze({
  colors: {
    // global
    background: "#FEFCFF",
    backgroundWhite: "#FFFFFF",
    text: "#49454F",
    textTitle: "#1C1B1F",
    categoryTitle: "#3F3F3F",
    accent: "#7B61FF",
    high: "#FF2B77",
    medium: "#E2A300",
    low: "#6BD475",

    button: {
      default: "#7B61FF",
      hover: "#6243FF",
      disable: "#ACA7C3",
      title: "#FFFFFF",
      buttonShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
    },

    pagination: {
      text: "#ACA7C3",
      textActive: "#7B61FF",
      bg: "#FFFFFF",
      icon: "#BCBCBC",
      iconActive: "#7B61FF",
    },

    card: {
      bg: "#ffffff",
      bgSecondary: "rgba(255, 255, 255, 0.8)",
      textTitle: "#1C1B1F",
      textDesc: "#49454F",
      textDate: "#7B61FF",
      textCategory: "#7B61FF",
      textPriorityLow: "#7B61FF",
      textPriorityMedium: "#E2A300",
      textPriorityHigh: "#FF2B77",
      cardShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
      iconActive: "#7B61FF",
    },

    input: {
      bg: "#FFFFFF",
      sortInputText: "#3F3F3F",
      sortInputTextInactive: "#aca7c3",
      placeholderColor: "#888888",
      inputShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28);",
    },
  },

  spacing: (value) => `${4 * value}px`,
  borders: {
    none: "none",
    normal: "1px solid",
  },

  radii: {
    none: "none",
    normal: "8px",
    inputNormal: "10px",
    cardNormal: "12px",
    circle: "50%",
  },
  fontSizes: {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "24px",
    xxl: "32px",
    sectionTitleTablet: "32px",
    generalTitle: "100px",
  },
  fontWeight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
});

export default theme;