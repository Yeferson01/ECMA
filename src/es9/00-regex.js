//Se adaptan y mejoran las expresiones regulares con el lenguaje
const words = [
    'Lorem ipsum, dolor sit 1234-432-32 amet consectetur 234-124-123 adipisicing elit.',
    '1998-10-22 Voluptatem amet exercitationem 1997-07-30 architecto debitis vitae.', 
    '1234-12-124- Sapiente reiciendis sunt deserunt 123-23-1245 laudantium corporis eius neque.', 
    'Nulla, voluptas beatae. Minima eligendi cum iusto architecto. Lorem ipsum dolor sit amet,', 
    'consectetur adipisicing elit. Molestias ut ullam tempora quisquam iure voluptas expedita',  
    'voluptatibus adipisci quos. Harum inventore consequatur corporis deleniti, sed rerum eveniet veritatis',
    'aliquid molestiae!'
];
const lorem = `Lorem ipsum, dolor sit 1234-432-32 amet consectetur 234-124-123 adipisicing elit. 1998-10-22 
Voluptatem amet exercitationem 1997-07-30 architecto debitis vitae. 1234-12-124- Sapiente reiciendis sunt deserunt 
123-23-1245 laudantium corporis eius neque. Nulla, voluptas beatae. Minima eligendi cum iusto architecto. Lorem 
ipsum dolor sit amet, consectetur adipisicing elit. Molestias ut ullam tempora quisquam iure voluptas expedita 
voluptatibus adipisci quos. Harum inventore consequatur corporis deleniti, sed rerum eveniet veritatis aliquid!`

const regexDate = /(\d{4})-(\d{2})-(\d{2})/;
const regexN = /\*?n\*?/;
let matchers;
let match = regexDate.exec(lorem);
for (const values of words) {
    matchers = regexN.exec(values);
    console.table(matchers);
}

console.log(match);