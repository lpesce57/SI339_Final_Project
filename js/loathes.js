window.addEventListener("load", function() {
    displayCatFact();
  });

const catFacts = [
    "Dont get a cat-itude, Daily Cat Facts is here!  Did you know humans and cats have brains that can be up to 90% similar?? You have cat to be kitten me!🐈🐈",
    "Have you ever eaten clam chowder? What about cat clowder? I sure hope not because a clowder is a group of cats. A group of cats would be hiss-terical together, mew-sic to my ears! Send your claw-some pictures of your cats to Daily Cat Facts now so they will go down in hiss-tory!🐾🐈",
    "Cats love doing the bare mew-nimum in their paw-jamas. They sleep a-paw-oximately 70% of their lives. Paw-lease can I sleep that much? Time for my cat nap😴🐈",
    "We are meowing to tell you that cats have 30 bones in their tail, all used to balance. I am litter-ally not kitten!",
    "Meow are you today? Dont fur-get to buy your fuzzy fur-iend more cat food because they have 473 taste buds. Meow! Sounds like 473 to enjoy every mew-ment eating. I am no longer purr-plexed as to why my kitten wants to nibble on my copy of The Great Cat-sby!",
    "HISSSS🐍😼 You have cat to be kitten me, was that a cat or a snake?? Purr-haps it is both. Snakes must be copycats because they are litter-ally trying to take cats purr-sonalitys.  First they hiss and then they wrap themselves around their fur-iends!?! Well, snakes wrapping around you would be a cat-astrophe but when cats do it, it is a sign of fur-iendship! Cats show their fur-ever love by purr-lacing their tails on you.",
    "Cat got your tongue? Well if you got their tongue, it is litter-ally so clean because of the papillae, which helps clean dirt and debris out of their fur.  Un-fur-tanate that humans don not have the same o-purr-tunity. We hope you have a furr-nominal day and litter-ally get cleaned by your little fur-iend.",
    "Love is in the hair We are purring over you all. It might come across as a-paw-ling when your furry fur-iend puts their tail in your fur-ace, but cats do this to show their love. Such a cat-astrophe, that is litter-ally so gross. Do not be a copycat, leave the butts in the face to our fur monsters. Otherwise, I would not be feline fine."
  ];
  
  function displayCatFact() {
    var randomIndex = Math.floor(Math.random() * 8);
    var randomFact = catFacts[randomIndex];
  
    var cat_facts = document.getElementById("cat_facts");
    cat_facts.innerHTML = randomFact
  }

