import { Link } from 'react-router-dom'
import '@/assets/List.scss'

function List() {
  return (
    // 外側を空のタグで囲む必要があります
    <>
      {/* クラスの指定は → className="xx" です */}
      <h1 className="title">List</h1>
      <Link to="/" >Topへ遷移</Link>
    </>
  )
}

export default List
