<H2> 번들링 </H2>

- 여러 제품이나 코드, 프로그램을 묶어서 패키지로 제공하는 행위 
- 모듈 간의 의존성 관계를 파악해 그룹화 하는 작업 
- 왜?
	- 웹 애플리케이션의 빠른 로딩 속도와 높은 성능을 위해 
	- 변수간 충돌 예방하기 위해 
	- 용량 문제를 줄이기 위해 

---

<H2> 빌드 </H2>

- 개발이 완료된 앱을 배포하기 위해 하나의 디렉토리로 구성하는 작업 
	- `npm run build` 를 통해 빌드한다.

--- 

<H2> 웹팩 </H2>

<P>웹팩은 기본적으로 필요한 자원은 미리 로딩하는게 아니라 그 때 그 때 요청하자는 철학을 갖고  있다</P>

- 번들링의 한 방법으로, 여러 개의 파일을 각각의 모듈로, 모듈들을 조합해 하나의 묶음으로 빌드하는 도구- 변수들의 스코프 문제, 네트워크의 코스트를 해결하기 위해 등장 함- HTML, CSS, 혹은 .jpg나 .png 같은 이미지 파일들도 전부 포함(`Asset`)

<H3>Entry</H3>

- 내부의 디펜던시 그래프를 생성하기 위해 사용.
- 코드의 시작점으로, webpack은 `entry point`를 기반으로 직간접적으로 의존하는 다른 모듈과 라이브러리를 탐색한다.
- entry 파일이 필요한 모든 것을 webpack이 모아서 번들링을 해준다. 

<H3> Output</H3>

- 번들을 위치시킬 경로와 이름을 지정함.
- Path 속성을 사용할 때에는 path모듈을 사용해야만 함.
	- `path.resolve()` 코드는 인자로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API
- 번들링의 결과물이 `output` 경로로 산출

```javascript 
 output: {
    path: path.resolve(__dirname, "docs"),
    filename: "app.bundle.js",
    clean: true
 }
```

<H3> Loaders </H3>

- Javascript와 Json파일만을 읽는 webpack에게, 다른 유형의 파일들을 webpack에 유효한 모듈로 변환하여 사용 또는 의존성 그래프에 추가.
- 엔트리나 아웃풋 속성과는 다르게 `module`이라는 이름을 사용
    ```javascript
    //webpack.config.js
    module.exports = {
        module: {
            rules: []
        }
    }
    ```
- 관련 속성
	- `test`: 변환이 필요한 파일들을 식별하기 위한 속성
	- `use`: 변환을 수행하는데 사용되는 로더를 가리키는 속성
		- 배열로 설정하면 뒤에서 앞으로 로더가 동작.
	- `exclude`: 바벨로 컴파일하지 않을 파일이나 폴더를 지정.
- Test 와 use는 필수 속성이다.
					
<H3> Plugins </H3>
	
- 번들을 최적화 하거나 asset을 관리등의 여러 기능을 수행 
- 파일을 해석하고 변환하는 과정에 관여하는 loader와 달리 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다.
	1. `Require()`로 플러그인 요청 
	2.  사용하고자 하는 플러그인을 생성자 함수로 생성한 객체 인스턴스 추가. 
    ```javascript
    webpack.config.js
    var webpack = require('webpack');
    var HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        plugins : [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    }
    ```
    - `html-webpack-plugin`
        - 모든 번들을, 생성한 애플리케이션용 HTML파일에 자동삽입

- Mode
	-  기본값으로 `poduction`모드이며, `Develpment`모드 혹은 `production` 모드를 선택할 수 있다.
- Browser Compatibility