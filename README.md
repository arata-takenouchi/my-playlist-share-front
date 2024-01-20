# MyPlaylistShareFront

## 環境

* Node.js v18.18.2
* vite v4.5.0
* typescript v5.0.2
* react v18.2.0

## cssについて

* tailwindcssを使用(↓ドキュメント)

* <https://tailwindcss.com/docs/installation>

## 初回起動

* githubからclone
* packageのインストールと起動

```sh
docker compose build
docker compose up
```

## パッケージを追加するとき

* コンテナ内で下記コマンドを実行

```sh
npm install -D xxx
```

## localにもpackageをinstallしたい場合

* ホスト側にて「packageが無い」とerrorになっているのを消したい場合
* 初回起動の手順を行えばコンテナ内にはpackageがインストールされているので、動作上は問題ないが、ホスト側ではpackageが存在しない扱いになってしまうため
* プロジェクトフォルダ直下で下記コマンドを実行

```sh
npm --prefix ./app ci ./app
```

## プロジェクト作成時のコマンド

```sh
npm create vite@latest my-playlist-share-front  -- --template react-ts
```

※メモ書きのため起動時は無視して大丈夫です(「初回起動」に記載の通り進めてください)
