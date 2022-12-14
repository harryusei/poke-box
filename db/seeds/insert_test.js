/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("poke_box").del();
  await knex("poke_box").insert([
    {
      id: 1,
      species: "サンダー",
      species_en: "Zapdos",
      nickname: "さんだあ",
      ability: "せいでんき",
      nature: "おくびょう",
      item: "いのちのたま",
      eff_h: 0,
      eff_a: 0,
      eff_b: 4,
      eff_c: 252,
      eff_d: 0,
      eff_s: 252,
      move_1: "ボルトチェンジ",
      move_2: "ぼうふう",
      move_3: "ねっぷう",
      move_4: "はねやすめ",
      description: "A個体値0",
    },
    {
      id: 2,
      species: "サンダー",
      species_en: "Zapdos",
      nickname: "さんだ〜",
      ability: "せいでんき",
      nature: "ずぶとい",
      item: "あつぞこブーツ",
      eff_h: 252,
      eff_a: 0,
      eff_b: 252,
      eff_c: 0,
      eff_d: 0,
      eff_s: 4,
      move_1: "ほうでん",
      move_2: "ぼうふう",
      move_3: "かいでんぱ",
      move_4: "はねやすめ",
      description: "物理受け、A個体値0",
    },
    {
      id: 3,
      species: "ラッキー",
      species_en: "Chansey",
      nickname: "らっきい",
      ability: "しぜんかいふく",
      nature: "ずぶとい",
      item: "しんかのきせき",
      eff_h: 4,
      eff_a: 0,
      eff_b: 252,
      eff_c: 0,
      eff_d: 252,
      eff_s: 0,
      move_1: "ちきゅうなげ",
      move_2: "タマゴうみ",
      move_3: "ステルスロック",
      move_4: "うたう",
      description: "A個体値0",
    },
  ]);
};
