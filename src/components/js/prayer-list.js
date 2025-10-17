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
  love: "1 Corinthians 13:4 — Love is patient, love is kind..."
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

  const prayer = createPrayerEntry(prayerTitle.value || "Untitled Prayer", prayerText.value, prayerTopic.value, suggestedVerseBox.textContent);
  prayersList.appendChild(prayer);

  // Reset form
  prayerTitle.value = "";
  prayerText.value = "";
  prayerTopic.value = "";
  suggestedVerseBox.textContent = "";
});

// Create prayer entry
function createPrayerEntry(title, text, topic, verse) {
  const entry = document.createElement("div");
  entry.className = "prayer-entry";

  const h3 = document.createElement("h3");
  h3.textContent = title;
  entry.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = text;
  entry.appendChild(p);

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
