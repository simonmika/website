/// <reference types="vitest/config" />
import { defineConfig } from "vite"
import { importAsString } from "rollup-plugin-string-import"

export default defineConfig({
	plugins: [importAsString({ include: "**/*.tup" })],
	test: {
		typecheck: { tsconfig: "./tsconfig.json" },
		coverage: {
			reporter: ["text", "json", "html"],
			enabled: true,
			cleanOnRerun: true,
			thresholds: { statements: 60, branches: 45, functions: 40, lines: 60 }
		},
		globals: true,
		include: ["**/*.spec.[tj]s"],
		testTimeout: 20000,
		isolate: false,
		exclude: ["node_modules", "dist"],
		server: {
			deps: {
				inline: [
					"mendly",
					"@binotype/model",
					"@typeup/dom",
					"@typeup/parser",
					"authly",
					"isly",
					"typedly",
					"cloudly-analytics",
					"cryptly",
					"isoly",
					"cloudly-http",
					"sessionly",
					"flagly",
					"cloudly-storage",
					"cloudly-rest",
					"tidily",
					"gracely",
					"cloudly-router",
					"selectively",
					"langly"
				]
			}
		}
	}
})
