module.exports = {
    root: true,
    extends: "next/core-web-vitals",
    rules: {
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "import/no-anonymous-default-export": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@next/next/no-img-element": "off",
        "no-console": "off", // Ignore console logs
        "no-debugger": "off", // Ignore debugger usage
        "no-undef": "off", // Ignore undefined variables
        "no-unused-vars": "off",
        "react/jsx-no-undef": "off"
    }
};