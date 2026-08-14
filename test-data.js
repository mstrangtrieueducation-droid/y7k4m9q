const IMG = "assets/test-images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const pictureChoice = (id, prompt, pictures, answer, explanation) => ({ id, type: "pictureChoice", prompt, pictures, answers: [answer], explanation, points: 1 });
const labelledPictures = (prefix, labels) => labels.map((label) => ({ value: label, image: `${IMG}${prefix}-${label}.png` }));

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Listen to each statement and choose True or False.", points: 3, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "T", "Statement 1 is true according to the recording."),
    choice("A2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("A3", "3.", ["T", "F"], "F", "Statement 3 is false according to the recording.")
  ]},
  { key: "B", label: "B", title: "Match the sentences to the pictures.", note: "Choose the picture label that matches each sentence. The letters a-c are picture labels only.", points: 3, questions: [
    pictureChoice("B1", "1. Make sure you put the jar lid back on, so the food inside won't go bad.", labelledPictures("b", ["a", "b", "c"]), "a", "Picture a shows a jar lid."),
    pictureChoice("B2", "2. When Mrs. Hall broke her leg, she couldn't walk, so she used a wheelchair for several weeks.", labelledPictures("b", ["a", "b", "c"]), "b", "Picture b shows a wheelchair."),
    pictureChoice("B3", "3. Pete used an axe to chop wood for the fire.", labelledPictures("b", ["a", "b", "c"]), "c", "Picture c shows an axe.")
  ]},
  { key: "C", label: "C", title: "Unscramble the words and match.", note: "Write each word, then choose its definition label. The letters a-c are definition labels only.", points: 6, wordBank: ["a. This helps you move something heavy.", "b. This helps people in a wheelchair enter a building.", "c. You use a hammer with these."], questions: [
    { id: "C1", type: "paired", prompt: "1. l r v e e", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["lever"], explanation: "Lever is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "A lever helps you move something heavy, so the definition label is a." }
    ]},
    { id: "C2", type: "paired", prompt: "2. n l s a i", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["nails"], explanation: "Nails is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "You use a hammer with nails, so the definition label is c." }
    ]},
    { id: "C3", type: "paired", prompt: "3. r p m a", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["ramp"], explanation: "Ramp is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "A ramp helps a person in a wheelchair enter a building, so the definition label is b." }
    ]}
  ]},
  { key: "D", label: "D", title: "Check the correct answer.", note: "Use too after an affirmative statement and either after a negative statement.", points: 4, questions: [
    choice("D1", "1. Thomas Edison was an inventor. Alexander Graham Bell was, ___.", ["too", "either"], "too", "Both statements are affirmative, so use too."),
    choice("D2", "2. The hardware store sells hammers. It sells nails, ___.", ["too", "either"], "too", "Both statements are affirmative, so use too."),
    choice("D3", "3. This computer isn't difficult to use. The DVD player isn't, ___.", ["too", "either"], "either", "Both statements are negative, so use either."),
    choice("D4", "4. I don't have homework tonight. My brother doesn't, ___.", ["too", "either"], "either", "Both statements are negative, so use either.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences. Use too or either.", note: "Read whether each pair of statements is affirmative or negative.", points: 3, questions: [
    input("E1", "1. This lamp doesn't have a light bulb. The closet lamp doesn't, ___.", ["either"], "The two statements are negative, so use either."),
    input("E2", "2. Jessica loves the seesaw. Mimi loves it, ___.", ["too"], "The two statements are affirmative, so use too."),
    input("E3", "3. Mitsuko has a red bicycle. Kim has a red bicycle, ___.", ["too"], "The two statements are affirmative, so use too.")
  ]},
  { key: "F", label: "F", title: "Look and circle the correct words. Then complete the sentences using too or either.", note: "Choose the object in the picture, then complete the second sentence.", points: 6, questions: [
    { id: "F1", type: "paired", prompt: "1. The glasses / seesaw isn't a new invention. The ramp ___.", image: IMG + "f-1.png", points: 2, parts: [
      { key: "word", label: "Correct picture word", type: "choice", options: ["glasses", "seesaw"], answers: ["seesaw"], explanation: "The picture shows a seesaw." },
      { key: "ending", label: "Complete the second sentence", type: "input", answers: ["isn't either", "is not either"], explanation: "The first sentence is negative, so the matching ending is isn't either." }
    ]},
    { id: "F2", type: "paired", prompt: "2. A garbage bag / jar lid isn't expensive. Nails ___.", image: IMG + "f-2.png", points: 2, parts: [
      { key: "word", label: "Correct picture word", type: "choice", options: ["garbage bag", "jar lid"], answers: ["garbage bag"], explanation: "The picture shows a garbage bag." },
      { key: "ending", label: "Complete the second sentence", type: "input", answers: ["aren't either", "are not either"], explanation: "Nails is plural and the idea is negative, so use aren't either." }
    ]},
    { id: "F3", type: "paired", prompt: "3. A hammer / wedge is useful. An axe ___.", image: IMG + "f-3.png", points: 2, parts: [
      { key: "word", label: "Correct picture word", type: "choice", options: ["hammer", "wedge"], answers: ["hammer"], explanation: "The picture shows a hammer." },
      { key: "ending", label: "Complete the second sentence", type: "input", answers: ["is too"], explanation: "The first sentence is affirmative, so use is too." }
    ]}
  ]},
  { key: "G", label: "G", title: "Listen and circle the correct answer.", note: "Listen to each statement and choose True or False.", points: 3, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["T", "F"], "T", "Statement 1 is true according to the recording."),
    choice("G2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("G3", "3.", ["T", "F"], "F", "Statement 3 is false according to the recording.")
  ]},
  { key: "H", label: "H", title: "Look and complete the sentences.", note: "Use each clean source picture to identify the correct word.", points: 4, questions: [
    input("H1", "1. I need to use this ___.", ["wire"], "The picture shows a coil of wire.", IMG + "h-1.png"),
    input("H2", "2. A ___ works with hot glass.", ["glassblower", "glass blower"], "The picture shows a glassblower shaping hot glass.", IMG + "h-2.png"),
    input("H3", "3. This is her ___.", ["workshop"], "The picture shows the place where she works with her tools: her workshop.", IMG + "h-3.png"),
    input("H4", "4. The ___ is very hot.", ["furnace"], "The picture shows a furnace used to heat glass.", IMG + "h-4.png")
  ]},
  { key: "I", label: "I", title: "Unscramble the words and match.", note: "Write each word, then choose its definition label. The letters a-d are definition labels only.", points: 8, wordBank: ["a. a sound of someone walking", "b. hit something", "c. a container that holds water", "d. a clear material used to make things"], questions: [
    { id: "I1", type: "paired", prompt: "1. l s g a s", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["glass"], explanation: "Glass is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Glass is a clear material used to make things, so the label is d." }
    ]},
    { id: "I2", type: "paired", prompt: "2. b m p u", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["bump"], explanation: "Bump is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "To bump means to hit something, so the label is b." }
    ]},
    { id: "I3", type: "paired", prompt: "3. p i h e r t c", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["pitcher"], explanation: "Pitcher is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "A pitcher is a container that holds and pours water, so the label is c." }
    ]},
    { id: "I4", type: "paired", prompt: "4. f o s t e p s o t", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["footsteps"], explanation: "Footsteps is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Footsteps are the sounds made by someone walking, so the label is a." }
    ]}
  ]},
  { key: "J", label: "J", title: "Circle the correct words.", note: "Choose a comparative form for two people and a superlative form for one person in a whole group.", points: 3, questions: [
    choice("J1", "1. This glassblower works ___ the other one.", ["more cheerfully than", "the most cheerfully"], "more cheerfully than", "Two glassblowers are being compared, so use the comparative form more cheerfully than."),
    choice("J2", "2. Nancy works ___ Caroline.", ["more quietly than", "the most quietly"], "more quietly than", "Nancy and Caroline are two people, so use the comparative form more quietly than."),
    choice("J3", "3. Sachiko works ___ of all the students.", ["harder than", "the hardest"], "the hardest", "Of all the students requires the superlative form the hardest.")
  ]},
  { key: "K", label: "K", title: "Look and complete the sentences.", note: "Use the best phrase from the box. One phrase is not needed.", points: 4, wordBank: ["more easily", "the most beautifully", "more skillfully", "the loudest", "the fastest"], questions: [
    input("K1", "1. Harriet ice skates ___.", ["the most beautifully"], "Harriet is compared with the whole group, so use the most beautifully.", IMG + "k-1.png"),
    input("K2", "2. Zack lifts the chair ___ than Joe.", ["more easily"], "The picture compares how easily Zack and Joe lift a chair, so use more easily.", IMG + "k-2.png"),
    input("K3", "3. Ken rides ___.", ["the fastest"], "Ken is ahead of the whole group, so use the fastest.", IMG + "k-3.png"),
    input("K4", "4. Janette blows glass ___ than Andrea.", ["more skillfully"], "The picture compares Janette with Andrea, so use more skillfully than.", IMG + "k-4.png")
  ]},
  { key: "L", label: "L", title: "Combine the sentences using comparative or superlative adverbs.", note: "Use the word in parentheses and keep the original meaning.", points: 3, questions: [
    input("L1", "1. Jana can jump 1 meter. Nina can jump 1.5 meters. (high)", ["Nina jumps higher than Jana", "Nina jumps higher than Jana."], "Nina reaches a greater height, so Nina jumps higher than Jana."),
    input("L2", "2. Nick arrived at 3:15. The other students arrived at 3:00. (late)", ["Nick arrived later than the other students", "Nick arrived later than the other students."], "3:15 is later than 3:00, so Nick arrived later than the other students."),
    input("L3", "3. Violet finished her homework in five minutes. Yolanda finished her homework in ten minutes. (quickly)", ["Violet finished her homework more quickly than Yolanda", "Violet finished her homework more quickly than Yolanda."], "Five minutes is less time than ten minutes, so Violet finished more quickly than Yolanda.")
  ]}
];
