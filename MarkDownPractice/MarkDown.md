# 제목 (header)

# 제목 1 
## 제목 2 
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

<br>

# 문장(Parapraph)
마크다운도 html과 마찬가지로 #6까지 제목의 중요도를 낮춰가며 설정할 수 있다.  '#' 과 작성하려는 제목 사이에는 ' '띄어쓰기를 작성하는 것이 원칙. 

<br>

# 줄바꿈 (line Breaks)
<br>
원하는 부분 뒤에 띄어쓰기를 2번 입력하게 되면 줄바꿈 처리가 된다.
<br>
만약 환경에 따라 줄바꿈 처리가 되지 않는 경우, 
<br>html과 마찬가지로 br태그를 통하여 줄바꿈 처리를 할 수 있다. 

<br>

# 강조 (empasize)
1. _언더바_ 를 이용하면 기울임  
2. **별두개로 묶음**으로써 굵게
3. **_언더바 + 두껍게_**
4. ~~취소선~~  
5. <u>밑줄 마크다운 할 때에만 u태그를 사용하여 밑줄을 긋고, 웹표준에 맞추어 개발하고자 할때에는 CSS를 사용하여 꾸며주는 것이 좋다.</u>

<br>

# 목록(list)
1. 순서가 필요한 목록 
1. 순서가 필요한 목록 
        1. 순서가 필요한 목록의 순서가 필요한 하위목록을 작성하고자 할때**__들여쓰기 2번__** )
        1. 순서가 필요한 목록의 순서가 필요한 하위목록을 작성하고자 할때**__들여쓰기 2번__** )
1. 숫자 1로만 넣어도 순서가 자동으로 입력된다. 

- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록 
- 순서가 필요하지 않은 목록 
        - 순서가 필요하지 않은 하위 목록 
        - 순서가 필요하지 않은 하위 목록 
- 순서가 필요하지 않은 목록 
  
<br>

# 링크(links)
[GOOGLE](http://google.com)     

[보여지고자 하는부분](실제 링크가 들어가는 부분)
  
[NAVER](http://naver.com "hover시 설명란 추가 ")  
  
<br>

# 이미지(images)
![대체텍스트](https://github.githubassets.com/images/modules/notifications/inbox-zero.svg)

만약 대체 택스트 자리([])안에 이미지 경로를 지정해준다면,  
이미지를 클릭할 시, 그 주소로 이동하게 된다. 

[![대체텍스트](https://github.githubassets.com/images/modules/notifications/inbox-zero.svg)](http://naver.com "hover시 설명란 추가 ")    

<br>
<br>
<br>

# 인용문 
> 문장 맨 앞에 '>'를 넣게 되면, 인용문을 추가할 수 있다.  
>>인용문은 꺽쇠의 수가 늘 때마다, 중첩된다. 
>>> 이런식으로! 

<br>

# 인라인 코드 강조
`백틱기호를 사용하면` 인라인 코드 강조를 사용할 수 있다.

<br>

# 블록 코드 강조 
```html
 <a href = "http://www.google.com" target="_blank">Google</a>
```
백틱 기호 3회 후, 언어명시   -> 코드삽입 -> 백틱 3회로 닫아준다.

<br>

- JS 

```javascript
    function func(){
        let a = "aaa";
        return a 
    }
```
<br>

- bash

```bash
 $ git commit -m 'study Markdown'
```
<br>

- 개발코드가 아닐경우 

```plaintext
 이것은 개발보다는 그냥 평서문을 강조할고자 할 때 사용합니다.  
 언어 입력 구간에 'plaintext'를 작성하면 됩니다.
```

<br>

# 표(table)

position 속성 

값 | 의미 | 기본값 
--:|:--:|:--
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰 포트 | X

- '--|--|--' 표의 머리부분과 몸통 부분을 구분  
- '--:|--|--' 처럼 콜론 기호를 통해 삽입 배치에 따라 오른쪽, 왼쪽 , 가운데 정렬을 수행할 수 있다.

<br>

# 원시 HTML(Raw HTML)

마크다운 문법 안에서 실제 html문법을 사용하는 것 

예를 들어서 `<u>` 태그 대신 `<span style = "text-decoration: underline;">이렇게</span>` <span style = "text-decoration: underline;">이렇게</span> 사용해 줄 수도 있다.

<br>

# 수평선 

---
***
___

`---`  
`***`  
`___`