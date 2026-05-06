import { Config } from "@stencil/core"
import { sass } from "@stencil/sass"
import { inlineSvg } from "stencil-inline-svg"
import { importAsString } from "rollup-plugin-string-import"

const dev = process.argv.includes("--dev")

export const config: Config = {
	taskQueue: "async",
	namespace: "website",
	autoprefixCss: false,
	buildEs5: "prod",
	devServer: { port: 3333, reloadStrategy: "pageReload" },
	extras: { enableImportInjection: true },
	globalStyle: "design/style/index.scss",
	hashFileNames: !dev,
	hydratedFlag: { selector: "attribute" },
	outputTargets: [
		{
			type: "www",
			// comment the following line to disable service workers in production
			serviceWorker: null,
			baseUrl: "https://simonmika.com/",
			prerenderConfig: "./prerender.config.ts",
			copy: [
				{ src: "../design/icon/*", dest: "icon/" },
				{ src: "../design/assets/*", dest: "assets/" },
				{ src: "../talk/slides", dest: "talk/" }
			]
		}
	],
	plugins: [inlineSvg(), sass(), importAsString({ include: "**/*.tup" })],
	testing: { browserHeadless: "shell" }
}
