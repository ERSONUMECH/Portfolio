export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**/*.css", "node_modules/**/*.css"],
  rules: {
    "selector-class-pattern": null,
    "declaration-block-single-line-max-declarations": null,
    "color-function-alias-notation": null,
    "color-function-notation": null,
    "alpha-value-notation": null,
    "no-descending-specificity": null,
    "at-rule-empty-line-before": null,
    "keyframes-name-pattern": null,
    "media-feature-range-notation": null,
    "no-duplicate-selectors": null
  }
};
