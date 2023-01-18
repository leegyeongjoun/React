//함수영 컴포넌트
function App(){
    return(
        <div id="app" style={appStyle.init.mainStyle}>
            <h1>App 컴포넌트</h1>
            <MainComponent title="메인컴포넌트" />
        </div>
    );
}

class MainComponent extends React.Component {
    //부모App와 자식관계MainComponent이면 constructor
    constructor(props){
        //this를 쓰기위해서는 super가 있어야함
        super(props);
        this.state={//함수형과 클래스는 상태를 만드는게 다름
            cnt:0
        }
    }
    // render밖에서 사용할 땐 화살표 함수 const 사용 불가능 class와 render사이
    countEvent1 = () => {
        alert('countEvent1 클릭 테스트');
    }

    // 더하는 함수
    countAddEvent = () => {
        // state를 움직이는건 setstate
        this.setState({
            cnt: this.state.cnt+1 //바뀌는 값을 setstate에 작성
        })
    }
    // 빼는 함수
    countSubtractEvent = () => {
        this.setState({
            cnt: this.state.cnt-1 //바뀌는 값을 setstate에 작성
        })
    }
    render() {
        // 구조분할 할당
        const {cnt} = this.state
        const {title} = this.props
        const {mainStyle, h1Style,h2Style,countStyle,btnStyle} = appStyle.init
        // render안에서 함수를 사용할 때는 무조건 const나 let이 있어야한다.
        const countEvent2 = () => {
            alert('countEvent2 클릭 테스트')
        }
        return (
            <div id="main">
                {/* props가 있으면 this.props 작성가능 내려받고 싶을 때 */}
                {/* <h1>{this.props.title}</h1> */}
                <h1 style={h1Style}>{title}</h1>

                <h2 style={countStyle}>{cnt}</h2>
                {/* render 밖에서의  함수를 불러오는 방법은 {this.함수명}*/}
                {/* <button onClick={this.countEvent1} style={btnStyle}>버튼</button> */}
                {/* render안에 함수를 불러오는 방법은 이름만 불러오면 된다.{함수명} */}
                {/* <button onClick={countEvent2} style={btnStyle}>버튼</button> */}

                {/* 버튼을 누르면 증가 감소 하는 버튼 */}
                <button onClick={this.countAddEvent} style={btnStyle}>1증가</button>
                <button onClick={this.countSubtractEvent} style={btnStyle}>1감소</button>
                {/* cnt는 이름을 지어준것 {cnt}는 위에서 정한 값 */}
                <ViewComponent cnt={cnt} /> {/* state 값을 하위 컴포넌트에 내려보낼 때 */}
            </div>
        );
    }
}

class ViewComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>ViewComponent 하위컴포넌트</h1>
                {/* 내려받기 위해서는 위에서 정한 이름과 같게 해야한다. */}
                <h2>{this.props.cnt}</h2>
            </div>
        );
    }
}


// const mainStyle={
//     textAlign:"center"
// }
// const mainStyleh1={
//     fontSize:'40px',
//     color:'#f00',
//     padding:'20px 0'
// }

//스타일을 한곳에 몰아적기
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