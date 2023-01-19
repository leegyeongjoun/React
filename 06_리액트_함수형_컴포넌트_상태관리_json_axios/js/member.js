(()=>{
  

    // 상태관리만 전문으로 관리하는 라이브러리: 리덕스


    // 3. 컴포넌트 만들기
    const MemberComponent = (props) => {
        //엑시오스(AXIOS)   
        //외부테이터 DATA 폴더안에 저장된 member.json 데이터를 
        //AXIOS 라이브러리 프로그램을 이용하여
        //배열에 저장하고(상태관리) 저장된 데이터를 하위 컴포넌트에 PROPS 내려보내다.
        //1-상태 관리(useState() 훅(HOOK)))할 배열 선언
        const [addr, setAddr] = React.useState([]);  //배열초기화

        //2-AXIOS 외부데이터 가져오기
        //비동기처리방식 사용
        //반드시 화살표 함수 사용
        //반복실행 계속된다.
        React.useEffect(()=>{
            async function fetchData(){
            const axiosResult =  await axios.get('./data/member.json')
                                    .then((Response)=>{
                                        return(  setAddr( [...Response.data.addr] )  );
                                    })
                                    .catch((Error)=>{
                                        return( console.log(`AXIOS 실패! :  ${Error}`) );
                                    });
                                }
                                fetchData()

           
       }, []);  //배열초기화   

       console.log( addr );  //상태관리 확인                   
       const result = addr.map(function(item, idx){
        // console.log(  item  );
         return(
              <tr key={idx+1}>
                  <td>{idx+1}</td>
                  <td>{item.이름}</td>
                  <td>{item.거주지}</td>
                  <td>{
                  
                          item.취미.map(function(item2, idx2){
                              return(
                                  <span>
                                      <a href='#' title={item2}>{item2}</a>
                                      { (item.취미.length-1) == idx2 ? '' : ',' }
                                  </span>
                              );
                          })

                  }</td>
              </tr>
         );});                          
        return(
            <div id='wrap'>
                <h1 style={style.h1}>{ props.title }</h1>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>거주지</th>
                            <th>취미</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                           result
                        } 
                       
                    </tbody>

                </table>
            </div>
        );
    }

    const AddressComponent = (props) => {
        //겍채 데이터를 반복문(map()함수)을 사용 돌리고
        //리턴문으로 테이블 tbody 에 태그요소(JSX)를 마운트
        // const result = 객체배열이름.map();
        /* const result = props.address.map(function(item, idx, array){
              // console.log(  item  );
               return(
                    <tr key={idx+1}>
                        <td>{idx+1}</td>
                        <td>{item.이름}</td>
                        <td>{item.거주지}</td>
                        <td>{
                        
                                item.취미.map(function(item2, idx2){
                                    return(
                                        <span>
                                            <a href='#' title={item2}>{item2}</a>
                                            { (item.취미.length-1) == idx2 ? '' : ',' }
                                        </span>
                                    );
                                })

                        }</td>
                    </tr>
               );
        }); */


        return(
            <div id='address'>
                <h2 style={style.h2}>{props.addressTitle}</h2>

              
                

            </div>
        );
    }



    const style = {
        h1: {
            fontSize:'36px',
            color:'#c66',
            textAlign:'center',
            padding:'50px 0'
        },
        h2: {
            fontSize:'30px',
            color:'#66c',
            textAlign:'center',
            padding:'30px 0'
        }

    }

    MemberComponent.defaultProps = { //Object(객체)
        title:'회원관리',  //Properties 프로퍼티이스(속성).
        title2:'ADDRESS',
        section1(){  //Properties 프로퍼티이스(속성) + function()  키워드 = 메서드(Method)
            return (
                console.log('메서드 리턴값!!')
            );
        }

        // 정형화된 데이터         
        // 공공데이터
        // JSON 데이터 
        // XML 데이터
        // CSV 데이터

        /* addr: [
            {이름:'이순신', 거주지:'충무', 취미:['독서', '낚시']},
            {이름:'김유신', 거주지:'광주', 취미:['독서', '요가', '등산']},
            {이름:'이진수', 거주지:'대구', 취미:['수영', '등산']},
            {이름:'조지현', 거주지:'서울', 취미:['잠자기', '먹기', '놀기']},
            {이름:'홍우현', 거주지:'서울', 취미:['영화', '놀기']},
            {이름:'김차순', 거주지:'인천', 취미:['영화', '등산']},
            {이름:'차분희', 거주지:'속초', 취미:['음악']}
        ] */
    }



    // 4. 컴포넌트와 돔컨테이너 연동하기
    ReactDOM.render(
        <MemberComponent />,
        document.getElementById('root')
    );    



})();