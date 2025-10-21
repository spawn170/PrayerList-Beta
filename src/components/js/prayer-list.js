// Common verse topics
const verseMap = {
  sin: "1 John 1:9 — If we confess our sins, He is faithful and just to forgive us our sins and cleanse us from all unrighteousness.",
  lust: "1 Thessalonians 4:3–4 — For this is the will of God, your sanctification: that you abstain from sexual immorality.",
  envy: "James 3:16 — For where you have envy and selfish ambition, there you find disorder and every evil practice.",
  healing: "James 5:14 — Is anyone among you sick? Let them call the elders of the church to pray over them.",
  anxiety: "1 Peter 5:7 — Cast all your anxiety on Him because He cares for you.",
  fear: "Isaiah 41:10 — Fear not, for I am with you; be not dismayed, for I am your God.",
  peace: "Philippians 4:7 — And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
  strength: "Isaiah 40:31 — But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.",
  faith: "Hebrews 11:1 — Now faith is the assurance of things hoped for, the conviction of things not seen.",
  guidance: "Proverbs 3:5–6 — Trust in the Lord with all your heart and lean not on your own understanding.",
  patience: "Romans 12:12 — Be joyful in hope, patient in affliction, faithful in prayer.",
  forgiveness: "Ephesians 4:32 — Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
  love: "1 Corinthians 13:4 — Love is patient, love is kind; it does not envy, it does not boast, it is not proud.",
  hope: "Romans 15:13 — May the God of hope fill you with all joy and peace as you trust in Him.",
  temptation: "1 Corinthians 10:13 — No temptation has overtaken you except what is common to mankind. And God is faithful; He will not let you be tempted beyond what you can bear.",
  wisdom: "James 1:5 — If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
  courage: "Joshua 1:9 — Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
  provision: "Philippians 4:19 — And my God will supply every need of yours according to His riches in glory in Christ Jesus.",
  joy: "Psalm 16:11 — You make known to me the path of life; in Your presence there is fullness of joy.",
  humility: "Philippians 2:3 — Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.",
  obedience: "John 14:15 — If you love Me, keep My commandments.",
  perseverance: "Galatians 6:9 — Let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
  service: "Mark 10:45 — For even the Son of Man came not to be served but to serve, and to give His life as a ransom for many.",
  salvation: "Romans 10:9 — If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised Him from the dead, you will be saved.",
  comfort: "2 Corinthians 1:3–4 — The God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble.",
  gratitude: "1 Thessalonians 5:18 — Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
  unity: "Ephesians 4:3 — Make every effort to keep the unity of the Spirit through the bond of peace.",
  purpose: "Jeremiah 29:11 — For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",
  trust: "Psalm 56:3 — When I am afraid, I put my trust in You.",
  deliverance: "Psalm 34:17 — The righteous cry out, and the Lord hears them; He delivers them from all their troubles.",
  repentance: "Acts 3:19 — Repent, then, and turn to God, so that your sins may be wiped out.",
  renewal: "Romans 12:2 — Do not be conformed to this world, but be transformed by the renewal of your mind.",
  spiritual_warfare: "Ephesians 6:11 — Put on the full armor of God, so that you can take your stand against the devil’s schemes.",
  blessings: "Numbers 6:24–26 — The Lord bless you and keep you; the Lord make His face shine on you and be gracious to you.",
  friendship: "Proverbs 27:17 — As iron sharpens iron, so one person sharpens another.",
  marriage: "Ephesians 5:25 — Husbands, love your wives, just as Christ loved the church and gave Himself up for her.",
  family: "Joshua 24:15 — As for me and my house, we will serve the Lord.",
  parenting: "Proverbs 22:6 — Train up a child in the way he should go; even when he is old he will not depart from it.",
  integrity: "Proverbs 10:9 — Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out.",
  generosity: "2 Corinthians 9:7 — Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
  mercy: "Micah 6:8 — What does the Lord require of you but to act justly, to love mercy, and to walk humbly with your God?",
  faithfulness: "Lamentations 3:22–23 — The steadfast love of the Lord never ceases; His mercies never come to an end; they are new every morning.",
  revival: "2 Chronicles 7:14 — If My people, who are called by My name, will humble themselves and pray and seek My face and turn from their wicked ways, then I will hear from heaven.",
  redemption: "Ephesians 1:7 — In Him we have redemption through His blood, the forgiveness of sins, in accordance with the riches of God’s grace.",
  creation: "Genesis 1:31 — God saw all that He had made, and it was very good.",
  justice: "Isaiah 1:17 — Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.",
  compassion: "Colossians 3:12 — Clothe yourselves with compassion, kindness, humility, gentleness, and patience.",
  perseverance: "James 1:12 — Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life.",
  worship: "Psalm 95:6 — Come, let us bow down in worship, let us kneel before the Lord our Maker.",
  discernment: "Hebrews 5:14 — But solid food is for the mature, who by constant use have trained themselves to distinguish good from evil.",
  evangelism: "Matthew 28:19 — Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
  fear: "Psalm 27:1 — The Lord is my light and my salvation; whom shall I fear?",
  endurance: "Romans 5:3–4 — We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character.",
  stewardship: "1 Peter 4:10 — Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace.",
  honesty: "Proverbs 12:22 — The Lord detests lying lips, but He delights in people who are trustworthy."
};

// Get DOM elements
const prayerText = document.getElementById("prayerText");
const prayerTitle = document.getElementById("prayerTitle");
const prayerTopic = document.getElementById("prayerTopic");
const suggestedVerseBox = document.getElementById("suggestedVerseBox");
const prayersList = document.getElementById("prayersList");
const archivedPrayers = document.getElementById("archivedPrayers");
const addPrayerBtn = document.getElementById("addPrayerBtn");
const commonTopicsDiv = document.getElementById("commonTopics");

// Initialize common topics buttons
for (const topic in verseMap) {
  const btn = document.createElement("button");
  btn.textContent = topic;
  btn.type = "button";
  btn.onclick = () => {
    prayerTopic.value = topic;
    suggestedVerseBox.textContent = verseMap[topic];
  };
  commonTopicsDiv.appendChild(btn);
}

// Update suggested verse based on topic input
prayerTopic.addEventListener("input", () => {
  const topic = prayerTopic.value.toLowerCase().trim();
  suggestedVerseBox.textContent = verseMap[topic] || "";
});

// Auto-detect topic from text
prayerText.addEventListener("input", () => {
  const text = prayerText.value.toLowerCase();
  if (!prayerTopic.value) {
    for (const key in verseMap) {
      const pattern = new RegExp(`\\b${key}\\b`, "i");
      if (pattern.test(text)) {
        prayerTopic.value = key;
        suggestedVerseBox.textContent = verseMap[key];
        break;
      }
    }
  }
});

// Add prayer
addPrayerBtn.addEventListener("click", () => {
  if (!prayerText.value.trim()) {
    alert("Please enter a prayer before adding.");
    return;
  }

  const dateAdded = new Date().toLocaleString();
  const prayer = createPrayerEntry(
    prayerTitle.value || "Untitled Prayer",
    prayerText.value,
    prayerTopic.value,
    suggestedVerseBox.textContent,
    dateAdded
  );
  prayersList.appendChild(prayer);

  // Reset form
  prayerTitle.value = "";
  prayerText.value = "";
  prayerTopic.value = "";
  suggestedVerseBox.textContent = "";
});

// Create prayer entry
function createPrayerEntry(title, text, topic, verse, dateAdded) {
  const entry = document.createElement("div");
  entry.className = "prayer-entry";

  const h3 = document.createElement("h3");
  h3.textContent = title;
  entry.appendChild(h3);

  const date = document.createElement("small");
  date.textContent = `Added on: ${dateAdded}`;
  date.className = "date-added";
  entry.appendChild(date);

  const p = document.createElement("p");
  p.textContent = text;
  entry.appendChild(p);

  if (topic) {
    const topicBtn = document.createElement("button");
    topicBtn.textContent = `Topic: ${topic}`;
    topicBtn.className = "topic-btn";
    topicBtn.onclick = () => {
      prayerTopic.value = topic;
      suggestedVerseBox.textContent = verseMap[topic] || "";
      window.scrollTo({ top: 0, behavior: "smooth" }); // optional: scroll back to form
    };
    entry.appendChild(topicBtn);
  }

  if (verse) {
    const v = document.createElement("p");
    v.textContent = verse;
    v.className = "verse";
    entry.appendChild(v);
  }

  // Answered checkbox
  const answeredBtn = document.createElement("button");
  answeredBtn.textContent = "Mark as Answered";
  answeredBtn.onclick = () => {
    entry.classList.add("answered");
    alert(`🙏 Prayer "${title}" marked as answered!`);
  };
  entry.appendChild(answeredBtn);

  // Archive button
  const archiveBtn = document.createElement("button");
  archiveBtn.textContent = "Archive";
  archiveBtn.onclick = () => {
    archivedPrayers.appendChild(entry);
  };
  entry.appendChild(archiveBtn);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => entry.remove();
  entry.appendChild(deleteBtn);

  return entry;
}
