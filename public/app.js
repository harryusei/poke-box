window.addEventListener("load", async () => {
  const res = await fetch("http://localhost:3000/api/pokebox");
  const pokeBoxData = await res.json();

  const table = document.getElementById("pokeDataTable");
  pokeBoxData.forEach((poke) => {
    let row = table.insertRow();

    // id
    let cell_id = row.insertCell(0);
    cell_id.innerText = poke.id;

    // 種族
    let cell_species = row.insertCell(1);
    cell_species.innerText = poke.species;

    // ニックネーム
    let cell_nn = row.insertCell(2);
    cell_nn.innerText = poke.nickname;

    // 特性
    let cell_ability = row.insertCell(3);
    cell_ability.innerText = poke.ability;

    // 性格
    let cell_nature = row.insertCell(4);
    cell_nature.innerText = poke.nature;

    // 持ち物
    let cell_item = row.insertCell(5);
    cell_item.innerText = poke.item;

    // HP努力値
    let cell_eff_h = row.insertCell(6);
    cell_eff_h.innerText = poke.eff_h;

    // 攻撃努力値
    let cell_eff_a = row.insertCell(7);
    cell_eff_a.innerText = poke.eff_a;

    // 防御種族値
    let cell_eff_b = row.insertCell(8);
    cell_eff_b.innerText = poke.eff_b;

    // 特攻種族値
    let cell_eff_c = row.insertCell(9);
    cell_eff_c.innerText = poke.eff_c;

    // 特防種族値
    let cell_eff_d = row.insertCell(10);
    cell_eff_d.innerText = poke.eff_d;

    // 素早さ種族値
    let cell_eff_s = row.insertCell(11);
    cell_eff_s.innerText = poke.eff_s;

    // 技1
    let cell_move_1 = row.insertCell(12);
    cell_move_1.innerText = poke.move_1;

    // 技2
    let cell_move_2 = row.insertCell(13);
    cell_move_2.innerText = poke.move_2;

    // 技3
    let cell_move_3 = row.insertCell(14);
    cell_move_3.innerText = poke.move_3;

    // 技4
    let cell_move_4 = row.insertCell(15);
    cell_move_4.innerText = poke.move_4;

    // 備考欄
    let cell_desc = row.insertCell(16);
    cell_desc.innerText = poke.description;
  });
});
