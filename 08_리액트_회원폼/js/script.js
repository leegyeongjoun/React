

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",//초기값
            name:" ",
            password: " ",
            member:[]
        }
    }
    // 이벤트를 만들어준다
    // class와 render사이에은 arrow 함수
    onChangeName = (e) => {
        //console.log(e.target.value)
        this.setState({ // 바뀌는 값을 받아오려면 setState
            name: e.target.value // 내가 선택한 (입력한) 값을 name에 넣는다
        });
    }

    onChangeId = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    onClickSubmit = (e) => {
        e.preventDefault();
        this.setState({
            member: [
                ...this.state.member,
                {
                    id:this.state.id,
                    name:this.state.name,
                    password:this.state.password
                }
            ]
        })
    }
    onSubmitForm= (e) => {

    }
    render() {
        return (
            <div id="app">
                <h1>회원가입 입력 폼</h1>
                <form action='member.php' method='post' name='member' id='member'>
                    <div>
                        <input type="text" placeholder="아이디를 입력하세요" value={this.state.id} onChange={this.onChangeId} />
                    </div>
                    <div>
                        <input type="text" placeholder="이름을 입력하세요" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
                    <div>
                        <input type="password" placeholder="비밀번호를 입력하세요" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div>
                        <button onClick={this.onClickSubmit}>전송</button>
                    </div>
                </form>
            </div>
            
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
