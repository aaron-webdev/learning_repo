




export default function WordPicker()
{
const wordBankMain = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "watermelon",
  "apricot", "blackberry", "coconut", "durian", "gooseberry", "jackfruit", "kumquat", "lime", "lychee", "melon",
  "olive", "peach", "pear", "persimmon", "plum", "pomegranate", "rambutan", "soursop", "tamarind", "yuzu",
  "avocado", "blueberry", "cantaloupe", "dragonfruit", "guava", "loquat", "mandarin", "mulberry", "passionfruit", "pineapple",
  "artichoke", "asparagus", "broccoli", "cabbage", "carrot", "cauliflower", "celery", "corn", "cucumber", "eggplant",
  "fennel", "garlic", "ginger", "kale", "lettuce", "mushroom", "onion", "parsnip", "potato", "pumpkin",
  "radish", "spinach", "squash", "tomato", "turnip", "zucchini", "beet", "bokchoy", "brusselsprout", "chive",
  "collard", "endive", "leek", "okra", "shallot", "sweetpotato", "yam", "arugula", "butternut", "chayote",
  "daikon", "jicama", "kohlrabi", "rutabaga", "scallion", "snowpea", "watercress", "acorn", "bamboo", "cassava",
  "chair", "table", "desk", "sofa", "bookshelf", "lamp", "mirror", "rug", "cabinet", "bed",
  "pillow", "blanket", "curtain", "clock", "vase", "chandelier", "shelf", "dresser", "ottoman", "recliner",
  "computer", "keyboard", "monitor", "printer", "scanner", "router", "speaker", "headphone", "laptop", "tablet",
  "smartphone", "camera", "television", "radio", "projector", "console", "drone", "microphone", "webcam", "charger",
  "bicycle", "car", "truck", "motorcycle", "scooter", "train", "bus", "airplane", "helicopter", "subway",
  "tram", "ferry", "yacht", "kayak", "canoe", "skateboard", "rollerblade", "snowboard", "surfboard", "jetski",
  "guitar", "piano", "violin", "drums", "flute", "trumpet", "saxophone", "clarinet", "harp", "banjo",
  "accordion", "cello", "trombone", "ukulele", "mandolin", "harmonica", "bagpipe", "xylophone", "synthesizer", "tambourine",
  "dog", "cat", "bird", "fish", "rabbit", "hamster", "turtle", "snake", "lizard", "parrot",
  "horse", "cow", "sheep", "goat", "pig", "chicken", "duck", "goose", "turkey", "deer",
  "elephant", "lion", "tiger", "bear", "wolf", "fox", "zebra", "giraffe", "rhino", "hippo",
  "monkey", "gorilla", "chimpanzee", "lemur", "kangaroo", "koala", "panda", "sloth", "cheetah", "leopard",
  "antelope", "buffalo", "camel", "llama", "alpaca", "ostrich", "emu", "peacock", "flamingo", "penguin",
  "dolphin", "whale", "shark", "jellyfish", "octopus", "squid", "crab", "lobster", "shrimp", "seahorse",
  "starfish", "coral", "anemone", "clam", "oyster", "mussel", "barnacle", "urchin", "sponge", "walrus",
  "seal", "otter", "manatee", "crocodile", "alligator", "python", "cobra", "rattlesnake", "viper", "gecko",
  "chameleon", "iguana", "skink", "toad", "frog", "salamander", "newt", "axolotl", "tadpole", "dragonfly",
  "butterfly", "moth", "bee", "wasp", "ant", "beetle", "ladybug", "firefly", "grasshopper", "cricket",
  "abacus", "anchor", "badge", "balloon", "barrel", "basket", "beacon", "binder", "blazer", "bottle",
  "bracelet", "bridge", "bucket", "bullet", "button", "candle", "canvas", "carpet", "cereal", "chain",
  "chalk", "compass", "crayon", "crown", "dagger", "diary", "dolphin", "emerald", "envelope", "eraser",
  "feather", "filter", "flag", "flannel", "folder", "fountain", "fridge", "gadget", "glasses", "glove",
  "hammer", "headset", "hook", "jacket", "jar", "jewel", "kettle", "key", "lantern", "ledger",
  "magnet", "marker", "mask", "medal", "mitten", "napkin", "needle", "notepad", "paddle", "paint",
  "paper", "pen", "pencil", "phone", "photo", "pillowcase", "pin", "plate", "plug", "poster",
  "purse", "quilt", "ribbon", "ring", "ruler", "saddle", "sandals", "scarf", "screw", "shirt",
  "shoe", "skirt", "sock", "spoon", "stamp", "sticker", "suitcase", "sunglasses", "sweater", "tape",
  "teacup", "thread", "ticket", "tie", "towel", "tray", "umbrella", "wallet", "watch", "zipper",
  "almond", "barley", "basil", "bean", "biscuit", "bread", "butter", "cake", "cheese", "chili",
  "cider", "cocoa", "coffee", "cookie", "cream", "donut", "gravy", "honey", "jam", "juice",
  "mint", "noodle", "nutmeg", "oatmeal", "pasta", "pepper", "pickle", "pizza", "pretzel", "rice",
  "salad", "salsa", "sauce", "soup", "spice", "sugar", "syrup", "toast", "vinegar", "waffle",
  "ant", "badger", "bat", "beaver", "buffalo", "camel", "cougar", "coyote", "crane", "crow",
  "deer", "eagle", "elk", "falcon", "ferret", "finch", "gazelle", "gopher", "hawk", "hyena",
  "ibex", "jackal", "jaguar", "kestrel", "lemur", "lynx", "mole", "moose", "mouse", "otter",
  "owl", "panther", "pelican", "porcupine", "raccoon", "raven", "skunk", "sparrow", "swan", "vulture",
  "weasel", "wombat", "woodpecker", "zebu", "albatross", "bison", "boar", "caribou", "dove", "emu",
  "heron", "meerkat", "oryx", "ostrich", "puma", "quail", "reindeer", "stork", "tapir", "toucan",
  "wallaby", "warthog", "wildebeest", "yak", "badminton", "baseball", "basketball", "bowling", "boxing",
  "cricket", "curling", "fencing", "golf", "hockey", "judo", "karate", "lacrosse", "rugby", "skiing",
  "soccer", "tennis", "volleyball", "wrestling", "archery", "chess", "darts", "polo", "rowing", "sailing",
  "squash", "swimming", "yoga", "anchor", "barometer", "beaker", "bunsen", "compass", "flask", "goggles",
  "microscope", "pipette", "telescope", "thermometer", "tongs", "tripod", "vial", "backpack", "briefcase", "clipboard",
  "highlighter", "laptop", "scanner", "stapler", "tablet", "typewriter", "wheelbarrow", "wrench", "armchair",
  "bench", "bunkbed", "couch", "futon", "hammock", "mattress", "rocker", "stool", "throne", "wardrobe"
];

let randomNumber = Math.floor((Math.random()*wordBankMain.length));


    return(
        <>
            <h1>Word Picker Component</h1>
        </>
    )
}