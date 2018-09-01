module.exports = {
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-indent": [2, 2],
    "react/no-array-index-key": false,
    "react/forbid-prop-types": false,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "linebreak-style": ["error", "windows"],
    "comma-dangle": ["error", "never"]
  }
};
