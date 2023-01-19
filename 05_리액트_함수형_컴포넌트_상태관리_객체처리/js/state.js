function App(){
    return (
        <div id="app" style={appStyle.init.mainStyle}>
            <h1 style={appStyle.init.h1Style}>나는 컴포넌트야</h1>
            <CountComponet />
        </div>
    );
};

function CountComponet(){
    // 함수형 컴포넌트 hook은 함수형에 존재하는 특수한 형태의 상태관리이다.
    // [이름과, 바뀔 값] useState(0)이면 0이 초기값
    const [cnt, setCnt]=React.useState(0);

    const countAddEvent = () => {
        setCnt(cnt => cnt+1); // 바뀌어여할 친구 값을 cnt에 +1한 값
    }
    const countSubtractEvent = () => {
        setCnt(cnt => cnt-1)
    }
    const {mainStyle,h1Style,h2Style,countStyle,btnStyle} = appStyle.init;
    return(
        <div id="count">
            <h1 style={h1Style}>카운트 컴포넌트</h1>
            <button style={btnStyle} onClick={countAddEvent}>+</button>
            <button style={btnStyle} onClick={countSubtractEvent}>-</button>
            <ViewComponent cnt={cnt}/>
            {/* 하위로 내려주고 싶을 때  */}
        </div>
    )
}
// 하위 함수형 컴포넌트에 내려보배는 방법으로 반드시 props를 받아야 함 (기본형)
// cnt를 받아오고 싶으면 props를 받아와야함
// function ViewComponent(props){
//     const {mainStyle,h1Style,h2Style,countStyle,btnStyle} = appStyle.init;
//     return(
//         <div id="view">
//             <h1 style={countStyle}>{props.cnt}</h1>
//         </div>
//     )
// }

// 비구조화(구조분해할당)
// function ViewComponent(props){
//     const {mainStyle,h1Style,h2Style,countStyle,btnStyle} = appStyle.init;
//     const {cnt}=props; //구조분해할당
//     return(
//         <div id="view">
//             <h1 style={countStyle}>{cnt}</h1>
//         </div>
//     )
// }

// ()안에 {cnt}를 적어주는 방법
function ViewComponent({cnt}){
    const {mainStyle,h1Style,h2Style,countStyle,btnStyle} = appStyle.init;
    return(
        <div id="view">
            <h1 style={countStyle}>{cnt}</h1>
        </div>
    )
}

const appStyle={
    init: {
        mainStyle : {
            textAlign:"center"
        },
        h1Style : {
            fontSize:'40px',
            color:'#f00',
            padding:'20px 0'
        },
        h2Style : {
            fontSize:'30px',
            color:'#ff0',
            padding:'20px 0'  
        },
        countStyle : {
            fontSize:'100px',
            color:'#39c',
            padding:'0 0 30px 0'
        },
        btnStyle : {
            fontSize:'20px',
            color:'#fff',
            padding:'10px 20px',
            cursor: 'pointer',
            background: '#000',
            margin:'0 10px'
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);