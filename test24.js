let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
//let removedAnimal = animals.pop();
//console.log(removedAnimal); // Output: Zebra
let total = animals.splice(-1);
console.log(total); // Output: ["Zebra"]

console.log(animals);
animals.push("Dog");
console.log(animals);

animals.push("Mosquito", "Mouse", "Mule");
console.log(animals);

//해당 어레이에는 "Human"이 있는가?
let isHumanPresent = animals.includes("Human");
console.log(isHumanPresent); // Output: false

let isCatPresent = animals.includes("Cat");
console.log(isCatPresent); 

let animal = "Red deer";
let updatedAnimal = animal.replace("Red deer", "Deer");

console.log(updatedAnimal);
// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
let indexToRemove = animals.indexOf("Spider");
animals.splice(indexToRemove, 3);
console.log(animals);

//
let selectedAnimals = animals.filter(animal => animal.startsWith("B") && animal >= "Baboon" && animal <= "Bison");

console.log(selectedAnimals);