let hero = [
    ['Iron Man', 'Pinter'],
    ['Hulk', 'Marah dan Berubah'],
    ['Captain America', 'Jago Berantem'],
    ['Loki', 'Niruin Wujud Orang'],
    ['Black Panther', 'Jago Nyakar']
]

let characterHeroA = [];

hero.forEach((data) => {
    if(data[0].includes('a')) characterHeroA.push(data);
});

console.table(characterHeroA);