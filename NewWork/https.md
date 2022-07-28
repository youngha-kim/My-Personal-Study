# 학습 목표
- 왜 HTTPS가 HTTP보다 안전한 지 이해한다.
	- HTTPS는 hyper Text Transger Protocol Secure Socket Layer의 약자
	- HTTPS는 HTTP와 달리, 요청에 암호를 걸어서, 정확한 키가 없으면 열람하지 못함
	- SSL 혹은 TLS라는 알고리즘을 이용해, HTTP 통신을 하는 과정에서 데이터를 암호화하여 전송함  
---
- HTTPS의 암호화 방식에 대해 이해한다.
	- 제 3자가 서버와 클라이언트가 주고받는 정보를 탈취 할 수 없도록 하기 위함.
		- 대칭키와 비대칭키 
		- 인증서 방식 
---
- HTTPS에서 사용하는 대칭키, 비대칭키 방식에 대해 이해한다.
	- 대칭키
		- 서버와 클라이언트 양쪽이 공통의 비밀키를 공유하여 데이터를 암호화 및 복호화 하는 방식
		- 데이터를 주고 받을 때에는 대칭키를 사용 
	- 비대칭키
		- 서버와 클라이언트가 각각 공개키와 비밀키를 가지고 상대가 나의 공개키로 암호화한 데이터를 개인이 가진 비밀키로 복화화하는 방식 
		- 대칭키를 주고 받을 때에는 비대칭 키를 사용 
---
- 직접 로컬에서 HTTPS 인증서를 발급할 수 있다.
	- 인증서 
		- CA에서 발급한 인증서는 같은 발급 기관에서 발급한 비밀키로 암호화 되어 있기 떄문에 CA의 개인키로 복호화 가능 
		- 브라우저는 인증서의 도메인과 데이터를 제공하는 서버의 도메인을 비교하여 중간자 공격을 감지 가능
--- 
- Hashing이 필요한 이유에 대해 이해한다.
	- Hashing 
		- 암호화의 한 방식으로 어떤 문자열에 임의의 연산을 적용하여 다른 문자열을 반환하는 것
		- For loop를 돌지 않아도, 한번에 index를 찾을 수 있기 때문에  O(1)의 시간복잡도를 가져 빠른 암호화와 복호화가 가능하다. 
---
- 데이터베이스에 유저의 비밀번호와 같이 민감한 정보를 평문으로 저장하지 않는 이유에 대해 이해한다.
	- 만약 패스워드가 노출된다 하더라도, 평문으로 작성하지 않고 알고리즘을 통해 암호화를 시킨다면, 데이터 베이스에 접근할 수 없기 때문.
---
- Salt가 필요한 이유에 대해 이해한다.
	- 암호화만 해놓는다면 해시된 결과가 늘 동일하기 떄문에 원본값에 임의로 약속된 별도의 문자열을 추가하여 해시를 진행한다면 기존 해시값이 반환된어 알고리즘이 노출되더라도 원본값을 보호할 수 있도록 하기 위함.
		- Salt 유저와 패스워드 별로 유일한 값을 가져야 함.
		- 계정의 생성과 비밀번호의 변경시마다 새로운 salt를 사용해야 함.
		- Salt는 재사용하지 않고, DB의 유제 테이블에 같이 저장되어야 함.