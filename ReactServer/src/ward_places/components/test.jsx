
//내부모듈
import {postMinOutput} from "../api"


const Test = () => {
    
    const onClick = e =>{
        e.preventDefault()
        postMinOutput()
        .then((res)=>{
            console.log(`Response is ${res.config.data}`)
            localStorage.setItem('token', JSON.stringify(res.config.data))
            alert(`response : ${JSON.stringify(res.data.목록)}`)
            
        })
        .catch((err)=>{
            console.log(err)
            alert('다시 입력하세요.')
        })
    }

    return(
        <>
    <form method="POST">
        시야장악분석
        <button onClick={onClick} >
          입력 
        </button>
    </form>
        </>
    )
}

export default Test




