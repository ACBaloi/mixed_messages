/* Mixed Messages */

const firstVerses = [
    "good and upright is the Lord;",
    "he leads the humble in what is right",
    "oh give thanks to the Lord, for he is good",
    "but God shows his love for us in that while we were still sinners,"
];

const secondVerses = [
    "therefore he instructs sinners in the way",
    "and teaches the humble his way",
    "for his steadfast love endures forever",
    "Christ died for us"
];

const thirdVerses = [
    "give thanks to the God of Heaven",
    "for God loved the world so much that he gave his only Son",
    "that whoever believes in him should not perish but have eternal life",
    "you shall love the Lord your God with all your heart and with all your soul"
];
const verses = {firstVerses, secondVerses, thirdVerses};

const randomNumber = Math.floor(Math.random()* verses.firstVerses[i]); 

let buttonClick = document.getElementById('button');

const verseGenerator = () => {
    return `Today's Bible quote is: ${randomNumber}`;
};

buttonClick.addEventListener('click', verseGenerator);

