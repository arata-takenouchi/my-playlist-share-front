import { useState } from 'react'
import { Link } from 'react-router-dom'
import '@/assets/Top.scss'
import List from '@/List'

function Top() {
  const [count, setCount] = useState(0)

  return (
    // 外側を空のタグで囲む必要があります
    <>
      {/* クラスの指定は → className="xx" です */}
      <h1 className="title">Top</h1>
      <div className="card">
        <button style={{ color: 'red' }} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <List /> */}
      <Link to="/list" >Listへ遷移</Link>
    </>
  )
}

export default Top
