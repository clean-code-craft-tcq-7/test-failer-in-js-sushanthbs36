import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js", "**/*.mjs"], languageOptions: {sourceType: "module"}},
  {languageOptions: { globals: globals.node }},
  {
  
    files: ["test_*.mjs"],
    languageOptions: {
      globals: {
        ...globals.mocha, 
        ...globals.chai  
      }
    }
  },
  
  pluginJs.configs.recommended,
];
