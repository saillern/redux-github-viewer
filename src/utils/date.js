//Fixed: ファイルをsrc/utils/などに移動(前回レビュー箇所)
//Fixed: ファイル変更する(前回レビュー箇所)
export function getDate(d = new Date()) {
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = String(d.getFullYear());
  const date = month + "-" + day + "-" + year;
  return date;
}
