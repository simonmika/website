import { binotype } from "@binotype/model"
import { describe, expect, it } from "vitest"
import { site } from "./index"

describe("simonmika-com", () => {
	it.each([
		// "/",
		"/articles",
		"/articles/abstractions",
		"/articles/naming",
		"/articles/to-live",
		//		"/about",
		//		"/talks",
		"/non-existent"
	] as const)("binotype.Context.create(%s)", async path =>
		expect(binotype.Context.create(await site(), path)).toMatchSnapshot())
})
