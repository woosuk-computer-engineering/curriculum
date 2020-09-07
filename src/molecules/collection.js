import {getId, copyToClipboard} from "../util/util.js";
import {sharedStyles} from "../styles/shared.js";
import {getShareUrl} from "../config.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";
import {repeat} from "../../web_modules/lit-html/directives/repeat.js";
import "./area.js";

/**
 * Element that renders a collection.
 */
export class Collection extends LitElement {
	static get properties () {
		return {
			collection: {
				type: Object
			},
			index: {
				type: Number
			},
			compact: {
				type: Boolean,
				reflect: true
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: inline-block;
					padding: var(--spacing-xxxl);
					border-radius: var(--border-radius-l);
					background: var(--foreground);
					color: var(--background);
				}

				#title {
					font-weight: 100;
    			    letter-spacing: 2px;
					text-transform: uppercase;
					margin: 0 0 40px;
					cursor: pointer;
					position: relative;
					display: inline-block;
				}
				
				#title:hover:before {
					content: "#";
					color: var(--shade-500);
					position: absolute;
					transform: translateX(-110%);
					font-size: 80%;
				}

				#areas {
					display: flex;
				}

				.area {
					position: relative;
					scroll-snap-align: center;
				}

				.area:not(:last-child) {
					margin: 0 80px 0 0;
				}

				.line {
					height: 100%;
    			    border: 1px dashed currentColor;
					position: absolute;
					top: 0;
					left: calc(100% + 40px);
				}
				
				:host([compact]) {
					width: 100%;
				}
				
				:host([compact]) #areas {
					flex-direction: column;
				}
				
				:host([compact]) .area:not(:last-child) {
					margin: 0; 
				}
				
				:host([compact]) .line {
					display: none;
				}
				
				@media (max-width: 800px) {
					:host([compact]) #title {
						font-size: var(--font-size-xl);
						text-align: center;
						display: block;
					}
				}

				.logo{
					width:auto;
					height:48px;
					position:relative;
					margin-right:10px;
					top:12px;
				}
			`
		];
	}

	/**
	 * Copy link to collection.
	 */
	copyLink () {
		location.hash = `#${getId(this.collection)}`;
		copyToClipboard(`${getShareUrl()}${location.hash}`)

		var woosuk="우석대학교-컴퓨터공학과";
		var software = "충북대학교-소프트웨어학과";
		var infor = "충북대학교-정보통신공학부";
		var easycourse = "sw융합전공-easy코스";
		woosuk = encodeURI(woosuk);
		software = encodeURI(software);
		infor = encodeURI(infor);
		easycourse = encodeURI(easycourse);

		if(window.location.href.indexOf(woosuk) > -1){
			window.open('https://ce.woosuk.ac.kr/2015/inner.php?sMenu=C2000');
		}
		else if(window.location.href.indexOf(software) > -1){
			window.open('https://software.cbnu.ac.kr/include/contents.php?pgID=ID12415887531');
		}
		else if(window.location.href.indexOf(infor) > -1){
			window.open('http://inform.chungbuk.ac.kr/include/contents.php?pgID=ID15637656472');
		}
		else if(window.location.href.indexOf(easycourse) > -1){
			window.open('http://sw7up.cbnu.ac.kr/convergence-center/easy');
		}
	}

	/**
	 * Renders the element.
	 */
	render () {
		const {collection, index, compact} = this;

		return html`
			${collection.name != null ? html`<h1 id="title" @click="${this.copyLink}">${collection.img ? html`<img class="logo" src='${collection.img}'/>`:undefined}${collection.name}</h1>` : undefined}
			<div id="areas">
				${repeat(collection.areas || [], area => getId(collection, area), (area, i) => html`
					<div class="area">
						<ws-area .area="${area}" .collection="${collection}" ?compact="${compact}"></ws-area>
						${i < collection.areas.length - 1 ? html`
							<hr class="line" />
						` : undefined}
					</div>
				`)}
			</div>
		`;
	}
}

customElements.define("ws-collection", Collection);