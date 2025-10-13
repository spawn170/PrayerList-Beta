// Add new prayer
function addPrayer(event) {
    event.preventDefault();
  
    const prayerText = document.getElementById('prayerText').value.trim();
    const scriptureText = document.getElementById('scriptureText').value.trim();
    const isAnswered = document.getElementById('answeredCheck').checked;
    const answeredNote = document.getElementById('answeredNote').value.trim();
  
    if (!prayerText) return;
  
    const entry = createPrayerEntry(prayerText, scriptureText, isAnswered, answeredNote);
    if (isAnswered) {
      document.getElementById('answeredPrayers').appendChild(entry);
    } else {
      document.getElementById('prayersList').appendChild(entry);
    }
  
    document.getElementById('prayerForm').reset();
    toggleAnsweredNote();
  }
  
  // Create a prayer entry card
  function createPrayerEntry(prayer, scripture, isAnswered = false, answeredNote = '') {
    const entry = document.createElement('div');
    entry.className = 'prayer-entry';
  
    if (isAnswered) entry.classList.add('answered');
  
    // Prayer text element
    const p = document.createElement('p');
    p.textContent = prayer;
    entry.appendChild(p);
  
    if (scripture) {
      const small = document.createElement('small');
      small.className = 'scripture';
      small.textContent = scripture;
      entry.appendChild(small);
    }
  
    if (isAnswered && answeredNote) {
      const noteDiv = document.createElement('div');
      noteDiv.className = 'answered-note';
      noteDiv.textContent = 'Note: ' + answeredNote;
      entry.appendChild(noteDiv);
    }
  
    // Answered checkbox
    const answeredCheckbox = document.createElement('input');
    answeredCheckbox.type = 'checkbox';
    answeredCheckbox.checked = isAnswered;
    answeredCheckbox.id = 'answeredCheck_' + Math.random().toString(36).slice(2);
    answeredCheckbox.onchange = () => toggleAnsweredStatus(entry, answeredCheckbox.checked);
  
    const label = document.createElement('label');
    label.htmlFor = answeredCheckbox.id;
    label.textContent = ' Mark as Answered';
  
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.className = 'answered-checkbox-wrapper';
    checkboxWrapper.appendChild(answeredCheckbox);
    checkboxWrapper.appendChild(label);
    entry.appendChild(checkboxWrapper);
  
    // Buttons container
    const btnContainer = document.createElement('div');
    btnContainer.style.marginTop = '0.5rem';
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '0.5rem';
  
    // Archive button
    const archiveBtn = document.createElement('button');
    archiveBtn.textContent = '📦 Archive';
    archiveBtn.className = 'archive-btn';
    archiveBtn.onclick = () => archivePrayer(entry);
    btnContainer.appendChild(archiveBtn);
  
    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️ Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => toggleEditPrayer(entry);
    btnContainer.appendChild(editBtn);
  
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️ Delete';
    deleteBtn.onclick = () => entry.remove();
    btnContainer.appendChild(deleteBtn);
  
    entry.appendChild(btnContainer);
  
    return entry;
  }
  
  // Toggle edit/save prayer
  function toggleEditPrayer(entry) {
    const isEditing = entry.classList.toggle('editing');
  
    const p = entry.querySelector('p');
    const scriptureSmall = entry.querySelector('small.scripture');
    const noteDiv = entry.querySelector('div.answered-note');
    const editBtn = entry.querySelector('button.edit-btn');
  
    if (isEditing) {
      // Enter edit mode: replace texts with inputs
  
      const prayerInput = document.createElement('textarea');
      prayerInput.className = 'edit-prayer-text';
      prayerInput.value = p.textContent;
      prayerInput.style.width = '100%';
      prayerInput.style.minHeight = '60px';
  
      const scriptureInput = document.createElement('input');
      scriptureInput.type = 'text';
      scriptureInput.className = 'edit-scripture-text';
      scriptureInput.value = scriptureSmall ? scriptureSmall.textContent : '';
      scriptureInput.placeholder = 'Scripture verse (e.g., John 3:16)';
      scriptureInput.style.width = '100%';
      scriptureInput.style.marginTop = '0.5rem';
  
      const answeredNoteInput = document.createElement('textarea');
      answeredNoteInput.className = 'edit-answered-note';
      answeredNoteInput.value = noteDiv ? noteDiv.textContent.replace(/^Note:\s*/, '') : '';
      answeredNoteInput.placeholder = 'Answered prayer note...';
      answeredNoteInput.style.width = '100%';
      answeredNoteInput.style.marginTop = '0.5rem';
      answeredNoteInput.style.display = entry.classList.contains('answered') ? 'block' : 'none';
  
      // Hide original elements
      p.style.display = 'none';
      if (scriptureSmall) scriptureSmall.style.display = 'none';
      if (noteDiv) noteDiv.style.display = 'none';
  
      // Insert inputs after p
      p.after(prayerInput);
      prayerInput.after(scriptureInput);
      scriptureInput.after(answeredNoteInput);
  
      if (editBtn) editBtn.textContent = '💾 Save';
  
    } else {
      // Save mode: update UI from inputs
  
      const prayerInput = entry.querySelector('textarea.edit-prayer-text');
      const scriptureInput = entry.querySelector('input.edit-scripture-text');
      const answeredNoteInput = entry.querySelector('textarea.edit-answered-note');
  
      // Update prayer text
      if (prayerInput.value.trim()) {
        p.textContent = prayerInput.value.trim();
      }
  
      // Update scripture
      if (scriptureInput.value.trim()) {
        if (scriptureSmall) {
          scriptureSmall.textContent = scriptureInput.value.trim();
          scriptureSmall.style.display = 'block';
        } else {
          const newSmall = document.createElement('small');
          newSmall.className = 'scripture';
          newSmall.textContent = scriptureInput.value.trim();
          p.after(newSmall);
        }
      } else if (scriptureSmall) {
        scriptureSmall.remove();
      }
  
      // Update answered note
      if (answeredNoteInput.value.trim()) {
        if (noteDiv) {
          noteDiv.textContent = 'Note: ' + answeredNoteInput.value.trim();
          noteDiv.style.display = 'block';
        } else {
          const newNoteDiv = document.createElement('div');
          newNoteDiv.className = 'answered-note';
          newNoteDiv.textContent = 'Note: ' + answeredNoteInput.value.trim();
          entry.appendChild(newNoteDiv);
        }
      } else if (noteDiv) {
        noteDiv.remove();
      }
  
      // Remove inputs
      prayerInput.remove();
      scriptureInput.remove();
      answeredNoteInput.remove();
  
      // Show original elements
      p.style.display = 'block';
      if (scriptureSmall) scriptureSmall.style.display = 'block';
      if (noteDiv) noteDiv.style.display = 'block';
  
      if (editBtn) editBtn.textContent = '✏️ Edit';
    }
  }
  
  // Archive prayer
  function archivePrayer(entry) {
    removeActionButtons(entry);
  
    const unarchiveBtn = document.createElement('button');
    unarchiveBtn.textContent = '↩️ Unarchive';
    unarchiveBtn.className = 'unarchive-btn';
    unarchiveBtn.onclick = () => unarchivePrayer(entry);
    entry.appendChild(unarchiveBtn);
  
    document.getElementById('archivedPrayers').appendChild(entry);
  }
  
  // Unarchive prayer
  function unarchivePrayer(entry) {
    removeActionButtons(entry);
  
    // Rebuild the answered checkbox
    const answeredCheckbox = document.createElement('input');
    answeredCheckbox.type = 'checkbox';
    answeredCheckbox.id = 'answeredCheck_' + Math.random().toString(36).slice(2);
    const isAnswered = entry.classList.contains('answered');
    answeredCheckbox.checked = isAnswered;
    answeredCheckbox.onchange = () => toggleAnsweredStatus(entry, answeredCheckbox.checked);
  
    const label = document.createElement('label');
    label.htmlFor = answeredCheckbox.id;
    label.textContent = ' Mark as Answered';
  
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.className = 'answered-checkbox-wrapper';
    checkboxWrapper.appendChild(answeredCheckbox);
    checkboxWrapper.appendChild(label);
    entry.appendChild(checkboxWrapper);
  
    const archiveBtn = document.createElement('button');
    archiveBtn.textContent = '📦 Archive';
    archiveBtn.className = 'archive-btn';
    archiveBtn.onclick = () => archivePrayer(entry);
    entry.appendChild(archiveBtn);
  
    if (isAnswered) {
      document.getElementById('answeredPrayers').appendChild(entry);
    } else {
      document.getElementById('prayersList').appendChild(entry);
    }
  }
  
  // Utility: Remove old buttons and checkboxes
  function removeActionButtons(entry) {
    entry.querySelectorAll('button, .answered-checkbox-wrapper').forEach(el => el.remove());
  }
  
  // Toggle archive section visibility
  function toggleArchiveView() {
    const archive = document.getElementById('archivedPrayers');
    archive.style.display = archive.style.display === 'none' ? 'block' : 'none';
  }
  
  // Fill prayer form with a common prayer
  function useCommonPrayer(item) {
    const textArea = document.getElementById('prayerText');
    textArea.value = item.innerText;
    textArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    textArea.focus();
  }
  
  // Show/hide answered note textarea
  function toggleAnsweredNote() {
    const note = document.getElementById('answeredNote');
    const show = document.getElementById('answeredCheck').checked;
    note.style.display = show ? 'block' : 'none';
  }
  
  // Random scripture generator
  const randomRefs = [
    "John 3:16",
    "Romans 8:28",
    "Philippians 4:6",
    "Isaiah 41:10",
    "Matthew 6:33",
    "Psalm 23:1"
  ];
  
  async function getRandomScripture() {
    const reference = randomRefs[Math.floor(Math.random() * randomRefs.length)];
    const scriptureBox = document.getElementById("scriptureBox");
  
    try {
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}`);
      if (!response.ok) throw new Error("Failed to fetch");
  
      const data = await response.json();
      scriptureBox.innerHTML = `
        <p>"${data.text.trim()}"</p>
        <strong>— ${data.reference}</strong>
      `;
    } catch (error) {
      scriptureBox.innerHTML = `<em>Error loading scripture. Please try again.</em>`;
      console.error("Scripture fetch error:", error);
    }
  }
  
  // Toggle answered status between lists
  function toggleAnsweredStatus(entry, isAnswered) {
    const activeList = document.getElementById('prayersList');
    const answeredList = document.getElementById('answeredPrayers');
  
    if (isAnswered) {
      entry.classList.add('answered');
      answeredList.appendChild(entry);
    } else {
      entry.classList.remove('answered');
      activeList.appendChild(entry);
    }
  }
  