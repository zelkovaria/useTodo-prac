아래의 조건을 만족하는 useTodo() 를 작성하고, 해당 hook 을 사용하는 페이지를 만들어보시오

1. 아래와 같은 페이지를 만드시오.
주소: /todos/:id 
기능: id 에 맞는 https://jsonplaceholder.typicode.com/todos/:id 에서 데이터를 가져와서 화면에 그리는 페이지. 데이터는 2번 조건에서 서술하는 hook 을 통해 가져올 것

2. 해당 페이지에서 const { data, isLoading, error } = useTodo(id); 의 형태로 호출할 수 있는 useTodo 를 생성할 것

3. 데이터를 fetching 하는 도중에는 data 는 undefind, isLoading 은 true, error 는 undefind

4. 데이터를 가져온 후 200번대 응답이면 data 는 가져온 data 자체 (즉 객체), isLoading 은 false, error 는 undefind

5. 데이터를 가져온 후 400번대 혹은 500번대 응답이면 data 는 undefind, isLoading 은 false, error 는 에러 객체 그 자체

API 사용법 참고: https://jsonplaceholder.typicode.com/

참고1. axios 를 사용해도 되고 fetch api 를 사용해도 됨

참고2. JS를 써도 되고 TS 를 써도 됨. 자신있는 것으로 사용하길

그 외 조건은 눈치껏 알아서
