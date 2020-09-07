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
			
			<h2>학과 소개</h2>

			<h3><img src="assets/logo/우석대학교.png" width="18" height="18"> 우석대학교 컴퓨터공학과</h3>
			<p>컴퓨터공학은 컴퓨터시스템의 원리와 응용에 관한 지식을 연구하는 학문으로서 정보기술(IT) 분야의 기본이며 중심이다. 따라서, 컴퓨터시스템 기초 이론 및 기술 전반에 걸친 지식을 바탕으로 멀티미디어, 인터넷, 모바일, 임베디드 시스템 등에 관한 응용 기술을 익힐 수 있도록 교과 과정을 운영하고 있으며 충분한 실습을 위해 각종 첨단 시설을 활용함으로써 컴퓨터가 이용되는 관련 분야에 진출할 수 있는 정보기술 전문인을 양성하고 있다.</p>
			<p></p>
			<p><img src="assets/logo/홈페이지.png" width="15" height="15"> 홈페이지 : <a target="_blank" href="https://ce.woosuk.ac.kr/2015/inner.php?sMenu=main" rel="noopener" aria-label="Open get involved">우석대학교 컴퓨터공학과</a></p>
			<p></p>
			
			<h3><img src="assets/logo/충북대학교.png" width="20" height="20"> 충북대학교 소프트웨어학과</h3>
			<p>충북대학교 전자정보대학 소프트웨어학과는 컴퓨터 산업의 인재를 양성하는 학과로서, 정보기술(IT) 분야에서 정보보안, 스마트폰, 게임, 인공지능, 데이터베이스, 언어개발, 과학 응용프로그램 등 첨단 산업에 필요한 각종 소프트웨어 연구개발을 담당할 수 있는 전문인력 필요성이 급증함에 따라 2011년 기존의 컴퓨터공학부에서 소프트웨어 분야를 분리하여 설립하였다.</p>
			<p></p>
			<p> <img src="assets/logo/홈페이지.png" width="15" height="15"> 홈페이지 : <a target="_blank" href="https://software.cbnu.ac.kr/" rel="noopener" aria-label="Open get involved">충북대학교 소프트웨어학과</a></p>
			<p></p>
			
			<h3><img src="assets/logo/충북대학교.png" width="20" height="20"> 충북대학교 정보통신공학부</h3>
			<p>정보통신공학부는 정보통신 분야에서 기술적 가치와 사회적 가치를 동시에 겸비한 전문 기술 인력 양성이라는 비전 아래, 정보처리/SW분야, 통신시스템 분야, 통신망 분야, 전파분야의 전문 교과과정을 제공하고 있습니다.</p>
			<p></p>
			<p><img src="assets/logo/홈페이지.png" width="15" height="15"> 홈페이지 : <a target="_blank" href="http://inform.chungbuk.ac.kr/" rel="noopener" aria-label="Open get involved">충북대학교 정보통신공학부</a></p>
			<p></p>

			<h3><img src="assets/logo/sw중심대학사업단.png" width="18" height="18"> SW중심대학사업단</h3>
			<p>SW 비전공자를 대상으로 SW 핵심 역량을 교육하기 위해 개설하는 학과로, 소프트웨어에 대한 이해와 소프트웨어의 활용을 위한 핵심 개발역량을 갖추기 위한 교육과정을 제공한다.
			   EASY코스란 SW비전공자를 대상으로 SW핵심역량을 교육하기 위해 개설하는 교과목으로, SW비전공자의 눈높이에 맞게 '쉬운' 강의와 SW융합전공 이수학생의 수강신청 편의를 위하여 '저녁시간강의'를 제공하는 교과목입니다.</p>
			<p></p>
			<p><img src="assets/logo/홈페이지.png" width="15" height="15"> 홈페이지 : <a target="_blank" href="http://sw7up.cbnu.ac.kr/home" rel="noopener" aria-label="Open get involved">SW중심대학사업단</a></p>
			<p></p>
			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}