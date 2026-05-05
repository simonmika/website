import { Component, ComponentWillLoad, h, Host, Prop, State, VNode } from "@stencil/core"
import { site } from "../../../index"
import { binotype } from "@binotype/model"
import * as components from "../binotype"
import { Footer } from "../Footer"

components.Footer.override = Footer
@Component({ tag: "simonmika-site", styleUrl: "style.css" })
export class SimonmikaSite implements ComponentWillLoad {
	@State() site?: binotype.Site<VNode>
	@Prop() debug?: boolean | "context" | "site"
	async componentWillLoad() {
		this.site = await site()
	}
	render() {
		return (
			<Host>
				<binotype-site site={this.site} debug></binotype-site>
			</Host>
		)
	}
}
