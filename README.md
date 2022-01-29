# 모달 컴포넌트

모달은 createPortal을 사용해서 만들어 주었습니다.

createPortal의 경우 공식문서를 보게 된다면 ```부모 컴포넌트의 DOM계층 구조 바깥에 있는 DOM노드로 자식을 렌더링하는 최고의 방법을 제공해 줍니다.``` 라고 되어있습니다.

그렇다면 왜 createPortal을 사용해서 modal을 사용해야 할까요?

모달을 클릭하게 된다면 모달은 사용자의 입장에서 가장 위쪽에서 보이게 됩니다. 

즉, 이전의 화면들은 다 fadeout되어 보입니다. 하지만 실제의 portal을 사용하지 않는다면 모달은 화면들의 제일 안쪽에 마크업이 됩니다. 

이러한 이유로 모달을 body아래로 렌더링 해주기 위해 creaetePortal을 사용합니다.

이때 주의할 점은 버블링입니다.

개발자도구로 리엑트 트리를 본다면 아래와 같이 확인이 되는데요, 비로 마크업은 root와 형제로 보이지만 버블링은 root를 향해 잘 전파되는것을 확인할 수 있습니다.

<img width="272" alt="image" src="https://user-images.githubusercontent.com/70435257/151651283-2d15c78f-31fe-4847-bcfe-6a2fb3042dec.png">


## 에러가 났던 부분

에러가 났던 부분은  ReactDOM.createPortal의 두번째 인자인 container부분에 querySelector를 사용하면서 발생했습니다.

첫번째로, 저는 아래와 같은 방법으로 만들었습니다.

```jsx
return ReactDOM.createPortal(
    <ModalBase setIsModalOpen={setIsModalOpen}>{children}</ModalBase>,
    document.querySelector('.modal-root')
  );
```

하지만 ```Target container is not a DOM Element``` 라는 에러가 나오게 되었습니다.

분명히 예상대로라면 body에 appendChild를 한 후 createProtal이 잘 실행되는것이었는데 잘 되지 않았습니다.

따라서 실행시점에 대해 고민을 해 보았습니다.

저는 body에 진입점을 삽입하는 시점을 useEffect를 통해 하였습니다. useEffect의 경우 실행 시점은 컴포넌트들이 layout과 paint가 전부 끝난 시점에 실행이됩니다. 즉, 애초에 layout단계에서 DOM에 .modal-root를 찾을 수  없기 떄문에 에러가 났었던 것입니다.

따라서 다음 방법으로 useLayoutEffect를 생각해보았습니다.

useLayoutEffect의 경우 layout은 되었지만 Paint되기전에 실행이 됩니다. 하지만 이 또한 layout되는 시점에 .modal-root를 찾을 수 없기 때문에 에러가 납니다.

## 결론

 저는 createElement한 결과를 즉 노드를 가지고 있는 방법을 생각했습니다. 애초에 index.html에 div를 미리 선언해준다면 해결될 문제였지만, 불필요한 마크업을 남겨두고 싶지 않았고, 모달이 생길때 div가 생겼다가 cleanUp을 통해서 삭제하고 싶었습니다.

 때문에 useMemo를 사용해 값을 메모이제이션해주었고, 그 결과를 el이라는 변수에 저장해두었습니다.

그 el을 createPortal의 container에 인수로 전달한다면 에러는 해결이됩니다. 애초에 dom을 직접 검색할 필요가 없고, createElement를 한 결과를 직접 두번째 인자로 넘겨 준 것입니다.

## 사용방법
모달은 state가 true일 때 렌더링이 됩니다. 따라서 모달을 끄기 위해서는 모달의 state를 변경하는 setState를 ```setIsModalOpen```prop으로 전달하여야 합니다. 또한 모달 내부는 children으로 꾸밀 수 있습니다.
