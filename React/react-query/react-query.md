# React-query

- React Query는 React Application에서 서버의 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트 하는 작업을 도와주는 라이브러리

- 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.

- 더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 "핵심 로직"에 집중할 수 있다.  
  
<br>

# 장점 

- 캐싱
- get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다. (예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행 )
	
- 데이터가 오래 되었다고 판단되면 다시 get (invalidateQueries)
- 동일 데이터 여러번 요청하면 한번만 요청한다. (옵션에 따라 중복 호출 허용 시간 조절 가능)
- 무한 스크롤 (Infinite Queries (opens new window))
- 비동기 과정을 선언적으로 관리할 수 있다.
- react hook과 사용하는 구조가 비슷하다



<br>

React-query 는 API요청을 query 그리고 mutation 이라는 두 가지 유형으로 나누어 생각함.

<br>
# React query의 query 요청 


	1. useQuery Hook으로 수행되는 Query 요청은 HTTP METHOD GET 요청과 같이 서버에 저장되어 있는 "상태"를 불러와 사용할 때 사용
	
	2. React Query는 다양한 UI에 유연하게 적용할 수 있도록 useQueries, useInfiniteQuery 같은 Hook들도 제공
	
	3. React Query의 useQuery Hook은 요청마다 (API마다) 구분되는 Unique Key (aka. Query Key)를 필요로 합니다. React Query는 이 Unique Key로 서버 상태 (aka. API Response)를 로컬에 캐시하고 관리

 <br>

# React query의 Mutation 요청
	1. useMutation Hook으로 수행되는 Mutation 요청은 HTTP METHOD POST, PUT, DELETE 요청과 같이 서버에 Side Effect를 발생시켜 서버의 상태를 변경시킬 때 사용

	2. useMutation Hook의 첫번째 파라미터는 이 Mutation 요청을 수행하기 위한 Promise를 Return 하는 함수이며, useMutation의 return 값 중 mutate(또는 mutateAsync) 함수를 호출하여 서버에 Side Effect를 발생시킬 수 있음.
