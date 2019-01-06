const leftpad = str => str.length === 2 ? str : `0${str}`;
const convertTime = timestr => {
  if(!timestr) return null;
  const s = timestr.split('.');
  return `00:${leftpad(s[0])}:${leftpad(s[1])},${s[2]}`;
};

// single locale only
// takes .tsv only
export default function convertSrt(content) {
  return content
    .split('\n')
    .map(line => line.split('\t'))
    .filter(line => !!line[0])
    .map((lineElem, idx, arr) => [
      `${convertTime(lineElem[0])} --> ${convertTime(arr[idx+1] && arr[idx+1][0])}`,
      lineElem[1],
      // lineElem[2]
    ])
    .slice(0, -1)
    .reduce((s, t) => s + '\n\n' + t[0] + '\n' + t[1], '');
}
