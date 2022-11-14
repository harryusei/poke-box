# POKEBOX

育成したポケモンのデータを登録・編集・削除・検索する API です。

![image](img/top.png?raw=true)

# How to use

# API usage

## データ構造

各ポケモンデータの構造は以下の通りです。

```json
{
  "id": "登録ごとに一意に発番されるID(自動採番)",
  "species": "種族名",
  "species_en": "種族名(英語)...自動付与のため指定不要",
  "nickname": "ニックネーム",
  "ability": "特性",
  "nature": "性格",
  "item": "持ち物",
  "eff_h": "HP努力値...指定しない場合は0",
  "eff_a": "攻撃努力値...指定しない場合は0",
  "eff_b": "防御努力値...指定しない場合は0",
  "eff_c": "特攻努力値...指定しない場合は0",
  "eff_d": "特防努力値...指定しない場合は0",
  "eff_s": "素早さ努力値...指定しない場合は0",
  "move_1": "技1",
  "move_2": "技2",
  "move_3": "技3",
  "move_4": "技4",
  "description": "備考欄"
}
```

## GET - 登録したポケモンデータ全件取得

エンドポイント：`/api/pokebox`
レスポンス

```json
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

## Reference

以下のデータを利用しています。
https://github.com/dayu282/pokemon-data.json

### やったことメモ

1. リモートリポジトリ作成、ローカルとの紐つけ
1. `npm init`
1. 必要なライブラリのインストール、package.json の編集
