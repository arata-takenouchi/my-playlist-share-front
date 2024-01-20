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
# ホスト側のプロジェクト直下で下記コマンドを実行
docker compose build
docker compose up
cd app
#  tailwindcssを起動
#  configで設定したファイルを監視し、自動で必要なcssを出力する仕組みのため、watchが必要
npx tailwindcss -i ./src/assets/input.css -o ./src/assets/output.css --watch
```

## 2回目以降の起動
```sh
# 
docker compose up
npx tailwindcss -i ./src/assets/input.css -o ./src/assets/output.css --watch
```

## パッケージを追加するとき

* ホスト側でもpackageをinstallする
* ホスト側にて「packageが無い」とerrorになっているのを消すため(気にならなければホスト側のinstallは省いてもOK)
* 初回起動の手順を行えばコンテナ内にはpackageがインストールされているので、動作上は問題ないが、ホスト側ではpackageが存在しない扱いになってしまうため

```sh
#  コンテナ内で下記コマンドを実行
npm install -D xxx
#  ホスト側のプロジェクトフォルダ直下で下記コマンドを実行
npm --prefix ./app ci ./app
```



```sh
#  ホスト側のプロジェクトフォルダ直下で下記コマンドを実行
npm --prefix ./app ci ./app
```

## プロジェクト作成時のコマンド

```sh
npm create vite@latest my-playlist-share-front  -- --template react-ts
```

※メモ書きのため起動時は無視して大丈夫です(「初回起動」に記載の通り進めてください)
