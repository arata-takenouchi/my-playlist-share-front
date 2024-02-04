import Header from '@/Header'

function List() {
  return (
    // 外側を空のタグで囲む必要があります
    <>
      <Header />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>プレイリスト名</th>
              <th>URL</th>
              <th>ユーザー</th>
              <th>説明</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                <a className="link link-primary">プレイリストURL</a>
              </td>
              <td>Purple</td>
              <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-ghost btn-xs" onClick={()=>(document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}>details</button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                    <h3 className="font-bold text-lg">プレイリスト名</h3>
                    <p className="py-4">プレイリストの説明</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </th>
              <th>
                <details className="dropdown">
                  <summary className="m-1 btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                    <li><a>編集</a></li>
                    <li><a>削除</a></li>
                  </ul>
                </details>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                <a className="link link-primary">プレイリストURL</a>
              </td>
              <td>Red</td>
              <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-ghost btn-xs" onClick={()=>(document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}>details</button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                    <h3 className="font-bold text-lg">プレイリスト名</h3>
                    <p className="py-4">プレイリストの説明</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </th>
              {/* リスト要素の高さが足りなくて、最後の行のdropdownが見えなくなる */}
              <th>
                <details className="dropdown">
                  <summary className="m-1 btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                    <li><a>編集</a></li>
                    <li><a>削除</a></li>
                  </ul>
                </details>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default List
