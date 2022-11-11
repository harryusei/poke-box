/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('poke_box').del();
  await knex('poke_box').insert([
    {
      id: 1,
      species: 'サンダー',
      nickname: 'Zapdos',
      ability: 'せいでんき',
      nature: 'おくびょう',
      item: 'いのちのたま',
      eff_h: 0,
      eff_a: 0,
      eff_b: 4,
      eff_c: 252,
      eff_d: 0,
      eff_s: 252,
      move_1: 'ボルトチェンジ',
      move_2: 'ぼうふう',
      move_3: 'ねっぷう',
      move_4: 'はねやすめ',
      description: 'CS珠、A個体値0',
    },
    {
      id: 2,
      species: 'ラッキー',
      nickname: 'Chansey',
      ability: 'しぜんかいふく',
      nature: 'ずぶとい',
      item: 'しんかのきせき',
      eff_h: 4,
      eff_a: 0,
      eff_b: 252,
      eff_c: 0,
      eff_d: 252,
      eff_s: 0,
      move_1: 'ちきゅうなげ',
      move_2: 'タマゴうみ',
      move_3: 'ステルスロック',
      move_4: 'うたう',
      description: '',
    },
  ]);
};
