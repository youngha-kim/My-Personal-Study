# git 
- Git은 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전관리 시스템.  

- 우리는 깃을 통해 프로젝트를 좀 더 효율적으로 관리할 수 있다. 

# git init 
- 현재 프로젝트에서 변경사항 추적을 시작할 준비를 하겠다 라는 뜻. 
- 변경사항을 버전화 시키겠다라는 뜻과 같음.

# git add 
- 변경사항을 추적할 특정 파일을 지정한다. 
- stage에 원하는 파일을 올림으로써, 변경사항 추적을 시작한다.
- .를 통해 프로젝트 내부의 모든 파일들을 스테이지에 업로드 한다.


# git commit 
- git commit은, 버전을 생성하는 메소드 이이다.
- 메세지(-m)과 함꼐 버전을 생성한다.

```bash
    $git commit -m "start project"
```

와 같은 형식으로 쓴다.   
- git log를 통해 생성한 버전의 경로를 알아볼 수 있다. 


# git push 
git init 완료하였다면,  
git add .  -> git commit -> git push를 통해 원하는  데이터를 git에 등록할 수 있다.


# git remote
git hub 저장소의 원격 저장소에 대한 명령어 이다.
```bash
    $git remote add origin "경로이름"
``` 
원격저장소가 추가 된다 .

- origin 은, URI를 편의상 도메인으로 지칭하듯이, 원격저장소 주소 자체를 origin이란 이름으로 지칭한다.



# 사용자 정보 

```bash
    $git config --global user.name 'your_name'
    $git config --global user.email 'your_email' 
``` 

