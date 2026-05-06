import { binotype } from "@binotype/model"
import { VNode } from "@stencil/core"
import { parser } from "../src/components/binotype/parser"
import abstractions from "./abstractions.tup"
import cssBroken from "./css-broken.tup"
import naming from "./naming.tup"
import optimizingDatabases from "./optimizing-databases.tup"
import optimizingExecutionSpeed from "./optimizing-execution-speed.tup"
import optimizingSoftware from "./optimizing-software.tup"
import programmingInterview from "./programming-interview.tup"
import recruitingProcess from "./recruiting-process.tup"
import rockStarProgrammers from "./rock-star-programmers.tup"
import takingRiskWhenDying from "./taking-risk-when-dying.tup"
import toLive from "./to-live.tup"

export async function article(): Promise<binotype.Page<VNode> | undefined> {
	return {
		title: "Articles",
		pages: {
			abstractions: await parser.parse(abstractions, "article/abstractions"),
			cssBroken: await parser.parse(cssBroken, "article/cssBroken"),
			naming: await parser.parse(naming, "article/naming"),
			optimizingDatabases: await parser.parse(optimizingDatabases, "article/optimizingDatabases"),
			optimizingExecutionSpeed: await parser.parse(optimizingExecutionSpeed, "article/optimizingExecutionSpeed"),
			optimizingSoftware: await parser.parse(optimizingSoftware, "article/optimizingSoftware"),
			programmingInterview: await parser.parse(programmingInterview, "article/programmingInterview"),
			recruitingProcess: await parser.parse(recruitingProcess, "article/recruitingProcess"),
			rockStarProgrammers: await parser.parse(rockStarProgrammers, "article/rockStarProgrammers"),
			takingRiskWhenDying: await parser.parse(takingRiskWhenDying, "article/takingRiskWhenDying"),
			toLive: await parser.parse(toLive, "article/toLive")
		}
	} satisfies binotype.Page<VNode>
}
