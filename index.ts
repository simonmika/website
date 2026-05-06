import { binotype } from "@binotype/model"
import { VNode } from "@stencil/core"
import about from "./about.tup"
import { article } from "./article"
import contact from "./contact.tup"
import description from "./description.tup"
import { design } from "./design"
import { parser } from "./src/components/binotype/parser"
import subscribe from "./subscribe.tup"
import { talk } from "./talk"

export async function site(): Promise<binotype.Site<VNode> | undefined> {
	return {
		url: "https://simonmika.com",
		language: "en-US",
		title: "Simon Says",
		tagline: "truths, opinions and preconceptions",
		description:
			"Simon says contains opinionated articles on subjects such as software development, software startups and engineering recruitment.\nThe articles convey lessons learned during work as software engineer, engineering manager and a consultant.",
		keywords: ["simon mika", "blog", "personal", "tech", "programming"],
		author: "Simon Mika",
		design,
		page: {
			mode: "none",
			list: "header",
			pages: {
				article: await article(),
				talk: await talk(),
				about: await parser.parse(about, "about"),
				contact: await parser.parse(contact, "contact"),
				description: await parser.parse(description, "description"),
				subscribe: await parser.parse(subscribe, "subscribe")
			}
		} satisfies binotype.Page<VNode>
	}
}
