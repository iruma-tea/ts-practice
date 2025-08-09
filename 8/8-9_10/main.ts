import _ from "lodash";

const list = [1, 2, 3, 4, 5];

const shuffled = _.shuffle(list);
console.log(shuffled);
// ログ出力
//  [ 2, 5, 3, 1, 4 ] ※ 実行するたびに変わる。
