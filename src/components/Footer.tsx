import { FunctionalComponent, h } from "@stencil/core"
import * as binotype from "./binotype"

export const Footer: FunctionalComponent<binotype.Footer.Properties> = ({ context }) => {
	const articles = context.load(context.design.home ?? "", { mode: "none", list: { mode: "header", limit: 5 } })
	console.log("footer articles", articles)
	return (
		<footer>
			<binotype.Navigation {...context.menu} depth={1} />
			<main>
				{context.path.empty ? (
					<binotype.Article {...context.load("/description", { mode: "body" })!}></binotype.Article>
				) : (
					<binotype.Article {...articles!}></binotype.Article>
				)}
			</main>
		</footer>
	)
}
export namespace Footer {}
