(()=>{
    //props를 선택해주고 불러줘야함
    const MemberComponent = (props) => {
        return (
            <div id="wrap">
                <h1 style={style.h1}>{props.title}</h1>
                {/* <h2 style={style.h2}>{props.title2}</h2> */}
                {/* 하위컴포넌트에 props 내려주기 */}
                <AddressComponent title2={props.title2} addr={props.addr}/>
            </div>
        );
    };

    const AddressComponent = (props) => {
        // react는 map 함수 자주 씀
        // props뒤에 이름은 지어준 이름으로
        const result=props.addr.map(function(item, index){
            // console.log(item) object나오는지 확인
            return(
                // Warning: Each child in a list should have a unique "key" prop. 는 반복되는 친구들에게 키값을 줘야한다.
                <tr>
                    <td>{index+1}</td>
                    <td>{item.이름}</td>
                    <td>{item.거주지}</td>
                    <td>{
                        // 취미안에 또 배열이 있음으로 map함수 사용
                        item.취미.map(function(item2, index2){
                            console.log(item2)//안에 들어있는 내용들
                            console.log(index2)//안에 들어있는 내용들의 순번
                            return(
                                <span>
                                    <a href="#" title={item2}>{item2}</a>
                                    {/* 아이템의 취미에 -1한 값이 index2와 같지 않으면 '' 맞으면 , */}
                                    {(item.취미.length-1) == index2 ? '':','}
                                </span>
                            );
                        })
                    }</td>
                </tr>
            );
        });
        return (
            <div id="address">
                {/* 정해준 이름을 적어줘야한다 */}
                <h2 style={style.h2}>{props.title2}</h2>
                <table>
                    <thead>
                        <tr>
                            {/* 반복적으로 들어가는것은 key값을 넣어줘야함 */}
                            <th>번호</th>
                            <th>이름</th>
                            <th>거주지</th>
                            <th>취미</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result}
                    </tbody>
                </table>
            </div>
        );
    };
    
    const style = {
        h1:{
            fontSize:'36px',
            color:'#c66',
            textAlign:'center',
            padding:'50px 0'
        },
        h2:{
            fontSize:'30px',
            color:'#66c',
            textAlign:'center',
            padding:'30px 0'
        }
    }

    MemberComponent.defaultProps={
        title:'회원관리',
        title2:'ADDRESS',
        section1(){
            return (
                console.log('메서드 리턴값!!')
            );
        },
        addr:[
            {이름: '조지현', 거주지: '종로', 취미:['잠자기','먹기']},
            {이름: '유준우', 거주지: '평택', 취미:['스키','로또']},
            {이름: '이경준', 거주지: '시흥', 취미:['영화보기','맛집가기']},
            {이름: '고가연', 거주지: '시흥', 취미:['등산','영화보기']},
            {이름: '양온유', 거주지: '화성', 취미:['수영','독서','등산']},
            {이름: '강승현', 거주지: '오산', 취미:['등산','맛집가기']},
            {이름: '주세현', 거주지: '화성', 취미:['사진','음악']}
        ]
    }

ReactDOM.render(
    <MemberComponent />,
    document.getElementById('root')
)
})()