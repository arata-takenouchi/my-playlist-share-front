import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"
import Header from '@/Header'
import axios from 'axios'

type Inputs = {
  playlistName: string;
  playlistUrl: string;
  // playlistImage: Blob[];
  comment: string;
};

function CreatePlaylist() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
  axios.post('http://localhost:8000/playlist', {
      playlist_name: data.playlistName,
      playlist_link: data.playlistUrl,
      comment: data.comment
    }).then((d) => console.log('post', d))
    // TODO: 余裕があればplaylistの画像も保存できるようにしたい
    // let imageUrl: string | ArrayBuffer | null = ''
    // const blob = new Blob([data.playlistImage[0]], {type: 'image.png'})
    // const text = (async () => {
    //   return await blob.text()
    // })()
    // console.log(text)
    // const reader = new FileReader()
    // reader.readAsDataURL(blob)
    // reader.onload = () => {
    //   console.log(reader.result)
    //   imageUrl = reader.result
    //   console.log(reader.result)
    //   const a = document.createElement('a')
    //   a.setAttribute('download', 'sample.png')
    //   // a.href = URL.createObjectURL(blob)
    //   console.log(imageUrl)
    //   a.href = imageUrl as string
    //   a.click()
    //   axios.post('http://localhost:8000/playlist', {
    //     playlist_name: data.playlistName,
    //     playlist_link: data.playlistUrl,
    //     playlist_image: imageUrl,
    //     comment: data.comment
    //   }).then((d) => console.log('post', d))
    // }
    // console.log(data)
    // console.log(blob)
    // // console.log(reader.readAsDataURL(blob))
    // console.log(new File([blob], 'スクリーンショット 2024-02-03 17.31.48.png', { type: 'image/png' }))
    // const blob2 = new File([blob], 'スクリーンショット 2024-02-03 17.31.48.png', { type: 'image/png' })
    // const a2 = document.createElement('a')
    // a2.setAttribute('download', 'sample.png')
    // a2.href = URL.createObjectURL(blob2)
    // a2.click()
  }

  // watch
  // const lastName = watch("lastName")

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">プレイリスト作成</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">プレイリストの内容を設定してください</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="playlist-name" className="block text-sm font-medium leading-6 text-gray-900">Playlist Name</label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      id="playlist-name"
                      autoComplete="playlist-name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="playlist name"
                      {...register("playlistName", {
                        required: true
                      })} />
                  </div>
                  {errors.playlistName?.type === "required" && <p className="error-message">プレイリスト名を入力してください</p>}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="playlist-url" className="block text-sm font-medium leading-6 text-gray-900">Playlist URL</label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      id="playlist-url"
                      autoComplete="playlist-url"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="playlist url"
                      {...register("playlistUrl", {
                        required: true
                      })} />
                  </div>
                  {errors.playlistUrl?.type === "required" && <p className="error-message">プレイリストのURLを入力してください</p>}
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">Detail</label>
                <div className="mt-2">
                  <textarea
                    id="comment"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="comment"
                    {...register("comment", {
                      maxLength: {
                        value: 100,
                        message: "100文字以下で入力してください",
                      },
                    })}>
                    </textarea>
                </div>
                {errors.comment?.type === "maxLength" && <p className="error-message">100文字以内で入力してください</p>}
              </div>

              {/* <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-image" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input
                          id="file-image"
                          className="sr-only"
                          type="file"
                          accept="image/*"
                          {...register("playlistImage", {
                            required: false
                          })} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <Link to="/">
            <button className="btn btn-gray">プレイリスト一覧に戻る</button>
          </Link>
          <button type="submit" className="btn btn-success">プレイリストを作成する</button>
        </div>
      </form>
    </>
  )
}

export default CreatePlaylist
