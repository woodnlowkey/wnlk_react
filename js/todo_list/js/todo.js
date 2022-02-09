// form태그
const toDoForm = document.querySelector('#todo-form');
// ul태그
const toDoList = document.querySelector('#todo-list');
// input태그
const toDoInput = document.querySelector('#todo-form input');
// to-do list
let toDos = [];
// to-do list를 local storage에 저장할 키 값
const TODOS_KEY = 'todos';

// to-do 지우기
function deleteToDo(event) {
    // 해당하는 span태그의 부모 li태그를 찾아서 지움
    const target = event.target.parentElement;
    target.remove();
    // 지운 li태그와 id가 같은 to-do를 지우고 업데이트
    toDos = toDos.filter((item) => item.id !== parseInt(target.id));
    return localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

// to-do list 보여주기
function showToDo(toDoObject) {
    // li, span, button태그 설정
    const li = document.createElement('li');
    li.id = toDoObject.id;
    const span = document.createElement('span');
    span.innerText = toDoObject.text;
    const button = document.createElement('button');
    button.innerText = '✔';
    // 삭제 기능 추가
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    // ul태그에 추가해서 보여줌
    return toDoList.appendChild(li);
};

// to-do list에 추가하기
function submitToDo(event) {
    // 새로고침 방지
    event.preventDefault();
    // 입력값 받아오기
    const toDoValue = toDoInput.value;
    // 입력값 지우기
    toDoInput.value = '';
    // 오브젝트 생성(삭제를 위한 id)
    const toDoObject = {
        text: toDoValue,
        id: Date.now()
    }
    // to-do list에 추가
    toDos.push(toDoObject);
    // local storage 업데이트
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 보여주기
    return showToDo(toDoObject);
};

// 엔터 입력 이벤트
toDoForm.addEventListener('submit', submitToDo);
// local storage 가져오기
const storage = localStorage.getItem(TODOS_KEY);
// local storage가 비어있지 않다면
if (storage) {
    // 가져와서 array로 변환
    const parsedStorage = JSON.parse(storage);
    // to-do list에 적용
    toDos = parsedStorage;
    // 모두 보여주기
    parsedStorage.forEach(showToDo);
};