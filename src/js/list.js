import listItem from "_src/js/listItem";

export default function list (items, list) {
  let result = '';
  items.forEach(item => {
    list.append(listItem(item));
  });
  return result;
}
