export const informationCommunicationCollection = {
	name: "충북대학교 정보통신공학부 커리큘럼",
	img:"assets/logo/충북대학교.png",
	areas: [
		{
			name: "1학년",
			skills: [
				{
					name: "전공입문세미나",
					grade: 1,
					description: {
						text: "공학 교육의 기본적인 과정을 이해하고, 정보통신을 전공하는 공학도가 갖추어야 할 기본적인 소양을 배양한다."
					}
				},
				{
					name: "창의공학설계",
					grade: 2,
					description: {
						text: "공학에 대한 경험, 이해 창의성 고취, 협동심 배양 등을 위한 팀별 실험 및 프로젝트를 수행한다."
					},
					skills: [
						{
							name: "미래설계1",
							grade: 1,
							description: {
								text: "정보통신공학 분야에 관련된 전공 및 직무 적합성을 파악하고, 졸업 후의 진로를 고려하여 졸업할 때까지의 설계 작품에 관련된 전반적인 소개를 초급 수준에서 다룬다."						
							},
							skills: [
								{
									name: "종합설계1",
									necessary: true,
									grade: 1,
									description: {
										text: "공학적 주제 아래, 결과물의 사양 도출, 설계 및 분석, 관련 문헌 조사 등을 수행한다."
									}
								}
							]				
						}
					]
				}		
			]
		},
		{
			name: "2학년",
			skills: [
				{
					name: "정보통신개론",
					necessary: true,
					grade: 3,
					description: {
						text: "정보통신의 기초에서부터 응용에 이르는 전반적인 정보통신의 기술과 응용 서비스를 다룬다.",
					}
				},
				{
					name: "전자기학",
					necessary: true,
					grade: 3,
					description: {
						text: "정전기장, 정자기장, 전자기장, 평면파, 전송선의 기본원리를 학습한다. (전공필수(3학점))"
					}
				},
				{
					name: "회로이론1",
					necessary: true,
					grade: 3,
					description: {
						text: "기초적인 전기회로에 대한 해석을 배운다."
					},
					skills: [
						{
							name: "전자회로1",
							necessary: true,
							grade: 3,
							description: {
								text: "능동소자들이 포함된 전기회로의 해석 및 설계 방법에 대하여 배운다."
							}
						}
					]
				},
				{
					name: "공학수학1",
					necessary: true,
					grade: 3,
					description: {
						text: "벡터, 라플라스 변환, 적분 및 미분방정식 등을 다루는 전공을 공부할 때 만나는 복잡한 문제들을 해결하는 능력을 신장한다."
					}
				},
				{
					name: "회로실험1",
					necessary: true,

					grade: 2,
					description: {
						text: "전자부품의 동작원리 및 회로의 이론을 설명하고, 개별부품의 특성실험을 진행한 후 이를 바탕으로 응용회로를 설계한다."						
					}
				},
				{
					name: "디지털공학",
					grade: 3,
					description: {
						text: "2진법을 위시한 각종 진법의 계산과 부호, 부울대수 등의 이론과 논리게이트를 이용한 조합논리회로의 간략화 및 플립플롭 등을 이용한 순서논리회로에 대하여 배운다."						
					}
				},
				{
					name: "cpp언어",
					grade: 3,
               		description: {
                  		text: "c++언어의 객체 지향적 성격과 제반문법, 프로그래밍 기법 등을 심도 있게 이해하고 활용능력을 갖추도록 지도한다."						
					}
				},
				{
					name: "정보보호개론",
					grade: 3,
					description: {
						text: "정보보호의 기본 개념을 수립하고, 외부 위협요소를 막는 기술적인 방법을 알아본다."						
					}
				},
				{
					name: "임베디드소프트웨어실습",
					necessary: true,
					grade: 3,
					description: {
						text: "임베디드소프트웨어 및 마이크로프로세서의 개념, 구조, 응용사례들을 살펴보고, ARM Cortex M3 기반 실습을 통하여 각종 디지털 회로의 제어방법을 학습한다."						
					}
				},
				{
					name: "컴퓨터네트워크",
					necessary: true,
					grade: 3,
					description: {
						text: "컴퓨터 네트워크의 근본적인 작동원리를 배움으로써 네트워크 혹은 인터넷 등에 대한 교과교육 지식을 습득할 수 있게 한다."
					}
				},
				{
					name: "회로실험2",
					grade: 2,
					description: {
						text: "디지털 논리소자를 이용한 게이트 및 산술회로 등의 조합논리회로와 플립플롭과 이들을 응용한 레지스터와 계수기 등에 관한 순서논리회로 등을 실험한다."
					}
				},
				{
					name: "확률및통계",
					grade: 3,
					description: {
						text: "불확실한 사건들에 대한 불규칙 변수의 정의, 확률분포, 표본분포이론 등을 고찰하고 이들을 응용한 확률사건의 추정치 및 통계적 추정 등을 배운다."

					}
				},
				{
					name: "회로이론2",
					grade: 3,
					description: {
						text: "회로의 기초적인 분석 방법으로 퓨리에 변환과 Z-변환을 배우고, 고속 계산방법인 FFT를 이용한 디지털 필터의 성능 분석 및 설계 방법 등을 배운다."
					}
				},
				{
					name: "공학수학2",
					grade: 3,
					description: {
						text: "미분방정식과 연립방정식을 라플라스 변환 후, 벡터와 행렬을 사용하여 해석하는 방법을 학습한다."
					}
				},
				{
					name: "미래설계2",
					grade: 1,
					description: {
						text: "정보통신공학 분야에 관련된 전공 및 직무 적합성을 지속적으로 파악하고, 졸업 후의 진로를 고려하여 졸업할 때까지의 설계 작품에 관련된 전반적인 내용을 지속적으로 다룬다."
					},
					skills: [
						{
							name: "미래설계3",
							grade: 1,
							description: {
								text: "보통신공학 분야에 관련된 전공 및 직무 적합성을 지속적으로 파악하고, 졸업 후의 진로를 고려하여 졸업할 때까지의 설계 작품에 관련된 전반적인 내용을 지속적으로 다룬다."						
							},
							skills: [
								{
									name: "종합설계2",
									necessary: true,
									grade: 1,
									description: {
										text: "전공과정을 통해 습득한 이론을 바탕으로 실제적인 결과물을 도출하고 이를 논문으로 정리하는 과정을 익힌다."
									}
								}
							]					
						}
					]					
				}
			]
		},
		{
			name: "3학년",
			skills: [
				{
					name: "통신공학",
					necessary: true,
					grade: 3,
					description: {
						text: "아날로그 통신 및 디지털 통신의 기본이 되는 개념을 다룬다."
					}
				},
				{
					name: "자료구조",
					necessary: true,
					grade: 3,
					description: {
						text: "소프트웨어로 구현할 수 있는 자료구조를 연구하여 스트링구조, 리스트구조, 큐, 스테 Tree, 그래프, 정렬, 탐색기법 등을 다룬다."						
					}
				},
				{
					name: "운영체제",
					grade: 3,
					description: {
						text: "운영체제, 다중프로그래밍, 시분할시스템, 비동기병행 프로세서의 기본개념을 다룬다."
					}
				},
				{
					name: "초고주파공학",
					grade: 3,
					description: {
						text: "파동 및 전송선, 안테나, 초고주파 부품, 수신기, 송신기, 레이더, 무선통신, 변조 및 복조, 다중접속, 무선 시스템 등에 다룬다."						
					}
				},
				{
					name: "신호및시스템",
					grade: 3,
					description: {
						text: "퓨리에 변환 등 아날로그 및 디지털 신호의 분석방법과 아날로그 및 디지털 신호처리 시스템을 배우고, 샘플링 이론을 통해 아날로그와 디지털 신호의 변환과정을 배운다."						
					}
				},
				{
					name: "객체지향프로그래밍",
					grade: 3,
					description: {
						text: "플랫폼에 무관한 프로그램 언어의 기초적인 문법을 익히고, GUI 인터페이스, 그래픽, 네트워킹, 데이터베이스 관련 프로그래밍을 실습한다."						
					},
					skills: [
						{
							name: "모바일프로그래밍및실습",
							grade: 3,
							description: {
								text: "모바일 장치의 구조 및 기능을 이해하고, 각종 부속장치를 이용한 응용 프로그램을 작성한다."
							}
						}
					]
				},					
				{
					name: "데이터통신설계",
					grade: 3,
					description: {
						text: "다양한 통신 계층에 대한 기초 개념, 인터넷 통신의 기본이 되는 패킷통신 내용, 이동통신의 기초 개념, 기존 통신망의 기초 개념 등을 다룬다."						
					}
				},
				{
					name: "정보통신실험",
					necessary: true,
					grade: 2,
					description: {
						text: "기초적인 전자회로의 실험과 이를 응용한 통신회로의 설계를 다룬다."						
					}
				},
				{
					name: "전자회로2",
					grade: 3,
					description: {
						text: "능동 소자들의 기초적인 이해를 바탕으로 능동회로에 대한 보다 심도 있는 내용을 다룬다."						
					},
				},
				{
					name: "디지털통신",
					grade: 3,
					description: {
						text: "디지털 통신의 변복조 방식, 이동통신 시스템의 원리를 강의한다."						
					}
				},
				{
					name: "데이터베이스시스템설계",
					grade: 3,
					description: {
						text: "데이터베이스의 기본 개념 및 설계에 대해 이해하고, 논리적 데이터베이스 및 물리적인 데이터베이스 설계에 대해 학습한다."
					}
				},
				{
					name: "인터넷통신설계",
					grade: 3,
					description: {
						text: "인터넷통신의 기본이 되는 통신 계층, 패킷통신 내용, 네트워크를 통한 통신의 기초 개념 등을 다룬다."
					}
				},
				{
					name: "기술작문및발표",
					grade: 3,
					description: {
						text: "4차산업혁명과 관련된 IT기술을 대상으로 공학기술 문서를 작성하고 발표 능력을 기른다."
					}
				},
				{
					name: "디지털신호처리설계",
					grade: 3,
					description: {
						text: "Discrete-Time System의 주요 이론을 학습하며, 실제 신호처리 분야에서 사용되는 DFT 및 FFT 알고리즘과 신호해석 기법을 다룬다."					}
				},
				{
					name: "영상처리",
					grade: 3,
					description: {
						text: " 영상에 대한 화소처리, 영역처리 등을 통해 원하는 형태로 영상을 변경하고 특징을 추출하는 방법과 이를 구현하는 알고리즘에 대해 공부한다."
					}
				},
				{
					name: "안테나설계",
					grade: 3,
					description: {
						text: "전파방사와 안테나 성능변수를 다루고, 다이폴 안테나, 루프 안테나, 모노폴 안테나와 같은 단순한 기초 안테나를 다룬다."
					}
				}
			]
		},
		{
			name: "4학년",
			skills: [
				{
					name: "정보응용실험",
					grade: 2,
					description: {
						text: "자바와 데이터베이스시스템을 이용하여 응용소프트웨어를 개발하고 보안체계에 대해서 실험을 수행한다."						
					}
				},
				{
					name: "광통신",
					grade: 3,
					description: {
						text: "광통신의 개요, 광도회로의 성질과 레이저 공작의 기초, 광변조․복조 및 광섬유 전송로의 기본원리를 이해하고 시스템과 그의 응용을 다룬다."						
					}
				},
				{
					name: "이동통신공학",
					grade: 3,
					description: {
						text: "우리나라에서 세계최초로 상용화에 성공한 CDMA 시스템의 표준인 IS-95를 중심으로 이동통신 시스템을 이해한다."						
					}
				},
				{
					name: "멀티미디어정보처리및실습",
					grade: 3,
					description: {
						text: "디지털 형태의 음성정보처리와 영상정보처리의 방법을 익히고 프로그래밍으로 실습한다."					
					}
				},
				{
					name: "정보및부호이론",
					grade: 3,
					description: {
						text: "소스코딩과 채널코딩의 부호화와 복호화를 배운다."						
					}
				},
				{
					name: "산학초청세미나1",
					grade: 1,
					description: {
						text: "산업체와 학교의 교류를 통한 기업가정신, 최신 IT기술 동향 및 산업체의 경영철학과 경영방법을 습득한다."
					}
				},
				{
					name: "초고속통신망기초",
					grade: 3,
					description: {
						text: "차세대 네트워크 연구 분야의 최신 동향과 기술적 흐름을 파악하여 네트워크 분야 연구를 위한 기본 개념 정립과 관련 기술에 대한 기반 지식 확보를 목표로 한다.",
					}
				},
				{
					name: "공업교육론",
					grade: 3,
					description: {
						text: "공업교육의 역사적 배경, 공업교육의 목표 등 공업교육전반에 관하여 연구한다."
					}
				},
				{
					name: "전파광파소자",
					grade: 3,
					description: {
						text: "전자회로의 기본이 되는 반도체 소자의 공정, 설꼐 및 이론을 개괄적으로 소개하고, 우리나라 반도체 산업의 관련 현황 및 발전 방향을 기업의 시점에서 강의한다."
					}
				},
				{
					name: "무선통신망공학",
					grade: 3,
					description: {
						text: "무선 네트워크의 기본적인 개념, 구조, 및 이동성 제공과 관련된 기능 지원 방식에 대해 소개한다."
					}
				},
				{
					name: "산학초청세미나2",
					grade: 1,
					description: {
						text: "산업체와 학교의 교류를 통한 기업가정신, 최신 IT기술 동향 및 산업체의 경영철학과 경영방법을 습득한다."
					}
				},
				{
					name: "종합설계3",
					grade: 1,
					description: {
						text: "전공과정을 통해 습득한 이론을 바탕으로 실제적인 결과물을 도출하고 이를 논문으로 정리하는 과정을 익힌다."
					}
				},
				{
					name: "공업논리및논술",
					grade: 3,
					description: {
						text: "공업교과의 특성에 부합되는 논리적 사고의 근본 법칙 및 논술에 관한 교육에 역점을 둔다."
					}
				}
			]
		}
	]
}