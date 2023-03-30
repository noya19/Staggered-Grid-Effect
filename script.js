const wrapper = document.getElementById('tiles');

let columns = Math.floor(document.body.clientWidth / 50);
let rows = Math.floor(document.body.clientHeight / 50);

const colors = [
  'rgb(229,57,53)',
  'rgb(253,216,53)',
  'rgb(244,81,30)',
  'rgb(76, 175, 80)',
  'rgb(156,39,176)',
];

let count = -1;

const handleOnClick = (index) => {
  count += 1;
  anime({
    targets: '.tile',
    backgroundColor: colors[(count % colors.length) - 1],
    delay: anime.stagger(30, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

// createa tile
const createTile = (index) => {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quantity) => {
  for (let i = 0; i < quantity; i++) {
    wrapper.appendChild(createTile(i));
  }
};

const createGrid = () => {
  wrapper.innerHTML = '';

  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);

  wrapper.style.setProperty('--columns', columns);
  wrapper.style.setProperty('--rows', rows);

  createTiles(columns * rows);
};

createGrid();
window.onresize = () => createGrid();

console.log(columns, rows);
