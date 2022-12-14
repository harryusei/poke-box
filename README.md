# POKEBOX

育成したポケモンのデータを登録・編集・削除・検索する API です。

![image](img/top.png?raw=true)

# Motivation

対戦のために大量のポケモンを育成するが、パラメータの詳細や役割などの情報をゲーム内にメモしておくことができないため登録しておく場所がほしかった

# Files

```
.
├── README.md
├── data
│   ├── pokedata.json
│   └── pokename.json
├── db
│   ├── migrations
│   └── seeds
├── knexfile.js
├── node_modules(略)
├── package-lock.json
├── package.json
├── public
│   ├── app.js
│   ├── index.html
│   └── style.css
├── src
│   ├── index.js
│   ├── knex.js
│   ├── model.js
│   └── server.js
└── test
    ├── _pokeBox.js
    └── fixtures.js
```

# API usage

## データ構造

各ポケモンデータの構造は以下の通りです。

```json
{
  "id": "登録ごとに一意に発番されるID(自動採番)",
  "species": "種族名",
  "species_en": "種族名(英語)",
  "nickname": "ニックネーム",
  "ability": "特性",
  "nature": "性格",
  "item": "持ち物",
  "eff_h": "HP努力値",
  "eff_a": "攻撃努力値",
  "eff_b": "防御努力値",
  "eff_c": "特攻努力値",
  "eff_d": "特防努力値",
  "eff_s": "素早さ努力値",
  "move_1": "技1",
  "move_2": "技2",
  "move_3": "技3",
  "move_4": "技4",
  "description": "備考欄"
}
```

- `species_en`プロパティは、`data/pokename.json`を参照して`species`の値をもとに自動で付与されるため指定不要です。
- 努力値(`eff_*`)の値はデフォルトでは 0 が入力されます。

## GET - 登録したポケモンデータ全件取得

- エンドポイント: `/api/pokebox`
- レスポンス

```
[
    {
        ポケモンデータ1
    },
    {
        ポケモンデータ2
    },
    ...
]
```

## GET - 種族名を指定してポケモンデータを取得

- エンドポイント: `/api/pokebox/:species`
- パスパラメータ
  - `species`: 種族名(`ピカチュウ`など)
- レスポンス: 全件取得と同様(該当レコードのみ)

## POST - 新規育成ポケモンの登録

- エンドポイント: `/api/pokebox`
- リクエストボディ(例)

```json
{
  "species": "ピカチュウ",
  "nickname": "ピカ",
  "ability": "ひらいしん",
  "nature": "ようき",
  "item": "でんきだま",
  "eff_h": 4,
  "eff_a": 252,
  "eff_s": 252,
  "move_1": "ボルテッカー",
  "move_2": "アイアンテール",
  "move_3": "10まんボルト",
  "move_4": "でんこうせっか",
  "description": "サトシっぽいやつ"
}
```

- レスポンス
  - 正常時ステータスコード: `201`
  - レスポンスボディ:

```json
{
  "species": "ピカチュウ",
  "species_en": "Pikachu", // 自動付与
  "nickname": "ピカ",
  "ability": "ひらいしん",
  "nature": "ようき",
  "item": "でんきだま",
  "eff_h": 4,
  "eff_a": 252,
  "eff_b": 0, // デフォルト値
  "eff_c": 0, // デフォルト値
  "eff_d": 0, // デフォルト値
  "eff_s": 252,
  "move_1": "ボルテッカー",
  "move_2": "アイアンテール",
  "move_3": "10まんボルト",
  "move_4": "でんこうせっか",
  "description": "サトシっぽいやつ"
}
```

## PATCH - 登録済みポケモンデータの変更

- エンドポイント: `/api/pokebox/:id`
- パスパラメータ
  - `id`: 変更したいポケモンデータの id
    - todo: フロントで出す一覧表にチェックボックスを表示し、チェックが入ったボックスにより id を自動付与する
- リクエストボディ(例):

```json
{
  "move_1": "エレキネット"
}
```

- レスポンスボディ: 変更されたポケモンデータ

## DELETE - 登録済みポケモンデータの削除

- エンドポイント: `/api/pokebox`
- クエリパラメータ
  - `id`: 削除したいポケモンデータの id
- レスポンスボディ: 削除されたポケモンデータ

## Problems

- エンドポイントとして２バイト文字を使いたくない（無用なバグの温床、単純にカッコ悪い）
  - 日本語名 → 英語名の読み替えをしたい
  - 読み替え用の json をローカルに持っているので、これを返すための API エンドポイントを作成した。(`/api/pokebox/pokename`)
- これ、そもそも API 使う必要なくない？
  - 学習のため以下のような処理にしているが、そもそも 1.の値をもとに DB 操作をする function を作るほうが自然だということに途中で気づき、頭を抱えていました
    1. `document.getElementById(...).value`で input された値を取得
    1. 上記をパラメータとして`app.js`上で API を叩く
    1. `server.js`上で DB の処理

## Reference

ポケモンの詳細データとして以下のデータを利用する予定です。
https://github.com/dayu282/pokemon-data.json
