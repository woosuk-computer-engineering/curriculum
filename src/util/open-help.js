import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}
				
				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}
				
				p {
					margin: 0 0 var(--spacing-m);
				}
				
				a {
					color: var(--link);
				}
				
				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}
				
				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}
				
			</style>
			
			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>
			
			<h2>우석대학교</h2>

			<h3><img src="assets/logo/우석대학교.png" width="18" height="18"> 우석대학교 컴퓨터공학과</h3>
			<p></p>
			<p>컴퓨터공학은 컴퓨터시스템의 원리와 응용에 관한 지식을 연구하는 학문으로서 정보기술(IT) 분야의 기본이며 중심이다. 따라서, 컴퓨터시스템 기초 이론 및 기술 전반에 걸친 지식을 바탕으로 멀티미디어, 인터넷, 모바일, 임베디드 시스템 등에 관한 응용 기술을 익힐 수 있도록 교과 과정을 운영하고 있으며 충분한 실습을 위해 각종 첨단 시설을 활용함으로써 컴퓨터가 이용되는 관련 분야에 진출할 수 있는 정보기술 전문인을 양성하고 있다.</p>
			<p></p>
			<p><img src="assets/logo/홈페이지.png" width="15" height="15"> 홈페이지 : <a target="_blank" href="https://ce.woosuk.ac.kr/2015/inner.php?sMenu=main" rel="noopener" aria-label="Open get involved">우석대학교 컴퓨터공학과</a></p>
			<p></p>
			<p></p>
			<p></p>
			<p>문의 : yunhes45@gmail.com</p>
			
			
			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}