/* Mixed Messages */

const firstVerses = [
    "Bom e recto é o Senhor",
    "Ele lidera os humildes no que é certo",
    "Oh, agradeça ao Senhor porque ele é bom",
    "Mas Deus mostra seu amor por nós enquanto ainda somos pecadores"
];

const secondVerses = [
    "portanto, ele instrui os pecadores no caminho",
    "e ensina o humilde o Seu caminho",
    "pois seu amor inabalável dura para sempre",
    "Jesus morreu por nós"
];

const thirdVerses = [
    "dê Graças ao Senhor o teu Deus.",
    "pois Deus amou tanto o mundo que deu seu único filho.",
    "que quem crê nele não deve perecer, mas terá a vida eterna.",
    "você amará o Senhor, seu Deus, com todo o teu coração e com toda a sua alma."
];
const verses = {firstVerses, secondVerses, thirdVerses};

const getRandom = (array) => array [Math.floor(Math.random()*array.length)]; 

let buttonClick = document.getElementsById('button');

const verseGenerator = () => {
    document.getElementById('verse').innerHTML =`"${getRandom(verses.firstVerses)}, ${getRandom(verses.secondVerses)}, ${getRandom(verses.thirdVerses)}"`;
};

buttonClick.onclick = verseGenerator;