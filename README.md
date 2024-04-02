아래의 조건을 만족하는 useTodo() 를 작성하고, 해당 hook 을 사용하는 페이지를 만들어보시오

1. 아래와 같은 페이지를 만드시오.
주소: /todos/:id 
기능: id 에 맞는 https://jsonplaceholder.typicode.com/todos/:id 에서 데이터를 가져와서 화면에 그리는 페이지. 데이터는 2번 조건에서 서술하는 hook 을 통해 가져올 것

2. 해당 페이지에서 const { data, isLoading, error } = useTodo(id); 의 형태로 호출할 수 있는 useTodo 를 생성할 것

3. 데이터를 fetching 하는 도중에는 data 는 undefind, isLoading 은 true, error 는 undefind

4. 데이터를 가져온 후 200번대 응답이면 data 는 가져온 data 자체 (즉 객체), isLoading 은 false, error 는 undefind

5. 데이터를 가져온 후 400번대 혹은 500번대 응답이면 data 는 undefind, isLoading 은 false, error 는 에러 객체 그 자체


<hr />
1. 리스트 페이지도 만드시오
주소: /todos
기능: 전체 todo 를 불러와서 화면에 보여주고, 하나를 누르면 해당 todo 페이지로 이동
만들어야 하는 hook: useTodos
