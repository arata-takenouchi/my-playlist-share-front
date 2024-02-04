import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

function Header() {
  const pathname: string = useLocation().pathname
  const path = pathname === "/" ? "/create-playlist" : "/"
  const label = pathname === "/" ? "プレイリストを作成" : "プレイリスト一覧に戻る"
  const labelClass = pathname === "/" ? "btn btn-success" : "btn btn-gray"

  return (
    <>
      <div className="navbar bg-base-100">
        <h1 className="flex-1">
          <a className="btn btn-ghost text-xl">MyPlaylistShare</a>
        </h1>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={`${path}`}>
                <button className={labelClass}>{ label }</button>
              </Link>
            </li>
            <li>
              <details className="w-40">
                <summary>
                  設定
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 2</a></li>
                  <li><a>ログアウト</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
