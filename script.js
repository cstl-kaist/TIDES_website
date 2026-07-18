const cases = {
  team2: {
    title: 'Team 2 · Meeting 8', language: 'Korean-source', date: 'Nov 18, 2025', stage: 'Performing', note: 'English translations with Korean source text',
    participants: [
      ['Casey','Coordinator','#2878ad'],
      ['Bailey','Problem Solver','#d46755'],
      ['Morgan','Critic','#7f8c4d'],
      ['Taylor','Problem Solver','#8a67a4']
    ],
    rows: [
      ['Casey','06:09–06:12',"Since this probably won't be visible anyway, I think it's okay to set it aside",'이것도 안 보일 것 같아서 제껴도 될 것 같고','Linking Solutions'],
      ['Morgan','06:12–06:13','It emerges from the image','이미지로부터 드러나죠','Giving Information'],
      ['Taylor','06:13–06:16','That will probably depend on exactly what is extracted.','그건 이제 정확히 뭘 뽑냐에 따라 달라질 것 같은 게','Linking Solutions'],
      ['Taylor','06:16–06:19','If it feels like the house is appearing together with it','만약 집이 같이 나오는 그런 느낌이라면','Linking Solutions'],
      ['Taylor','06:19–06:21','For example, photos inside a house','예를 들어 집 안에 있는 사진이라든가','Giving Information'],
      ['Morgan','06:21–06:25',"Then creating a prompt that can reveal such elements wouldn't be a problem",'그런 걸 그럼 드러낼 수 있는 프롬프트를 만들어가지고 한다면 문제는 없을 것 같은데','Linking Solutions'],
      ['Casey','06:25–06:28',"But since we're not going in that direction, I set it aside",'근데 그쪽으로 갈 건 아니니까 제꼈고','Linking Solutions'],
      ['Casey','06:28–06:32','Next, the location? The location seems important too','그 다음에 로케이션? 로케이션도 중요한 것 같던데','Structuring'],
      ['Casey','06:32–06:34',"I've already scraped everything there",'일단 거기 있는 거 싹 다 긁어 보긴 했는데','Giving Information']
    ]
  },
  team4: {
    title: 'Team 4 · Meeting 2', language: 'English-source', date: 'Oct 16, 2025', stage: 'Norming', note: 'Original English transcript',
    participants: [
      ['Jordan','Negative','#2878ad'],
      ['Riley','Coordinator','#bf7b41'],
      ['Morgan','Negative','#7f8c4d'],
      ['Quinn','Power Seeker','#8a67a4']
    ],
    rows: [
      ['Quinn','19:40–19:47','So do we want the user to modify the picture or we want a system to automatically modify the picture?','','Giving Information'],
      ['Riley','19:47–19:48','Ah, I see.','','Active listening'],
      ['Jordan','19:48–20:03',"But if the system is the one doing the modification then the user's study part could be problematic.",'','Linking Problems'],
      ['Riley','20:03–20:13','I think giving control to the user could be important.','','Naming Solutions'],
      ['Riley','20:13–20:24','Like, even if system rendered it, users should edit it after?','','Linking Solutions'],
      ['Quinn','20:27–20:34',"Because I thought that if I have to do it, I wouldn't do it.",'','Task/Process Negative'],
      ['Quinn','20:34–20:46',"This could also be a condition like to study whether it's user would do it or not do it?",'','Linking Solutions'],
      ['Jordan','20:46–20:58',"Yeah I have read some papers on privacy before and then a lot of them they talk about like they don't really go into the settings to adjust the privacy settings because it's like way too granular and feels very fatigue to do that",'','Giving Information']
    ]
  },
  team5: {
    title: 'Team 5 · Meeting 5', language: 'English-source', date: 'Dec 02, 2025', stage: 'Performing', note: 'Original transcript · includes a code-switched utterance',
    participants: [
      ['Morgan','Negative','#2878ad'],
      ['Casey','Problem Solver','#bf7b41'],
      ['Jordan','Critic','#7f8c4d'],
      ['Dakota','Critic','#8a67a4'],
      ['Riley','Task Completer','#d46755']
    ],
    rows: [
      ['Casey','01:46–01:48','Make it produce sound.','','Giving Information'],
      ['Dakota','01:48–01:49','Yeah.','','Active listening'],
      ['Casey','01:49–01:53','Will we have it until then?','','Giving Information'],
      ['Casey','01:53–02:00','Or will we have like that, like press and then it speaks out loud or make it automatically speak?','','Giving Information'],
      ['Dakota','01:59–02:04','어... 네 뭐라고요?','','Active listening'],
      ['Casey','02:04–02:09','So right now we have to click for it to produce sound, right?','','Giving Information'],
      ['Casey','02:10–02:19','Will we happen like that in the final demo or will we code to make it all automatically speak out loud.','','Giving Information'],
      ['Riley','02:20–02:30','Yeah but then the problem is that like when is the user allowed to speak?','','Naming Problems'],
      ['Casey','02:30–02:44',"The user speaks when you press a button, but then what right now we're talking about when the LLM is giving an answer, the output should be spoken out loud but right now it's pressing a button.",'','Giving Information'],
      ['Riley','02:44–02:47','Oh okay, yeah.','','Active listening']
    ]
  }
};

const transcript = document.querySelector('#transcript');
const overview = document.querySelector('#meetingOverview');
const caseButtons = [...document.querySelectorAll('.case-tabs button')];

function renderCase(key) {
  const item = cases[key];
  const colorFor = name => item.participants.find(participant => participant[0] === name)?.[2] || '#667386';
  overview.innerHTML = `<div class="meeting-summary"><h3>${item.title}</h3><div class="meeting-facts"><span>${item.date}</span><span>${item.language}</span><span>Stage · ${item.stage}</span><span>${item.rows.length} excerpted utterances</span></div></div><div class="participant-list">${item.participants.map(([name,role,color]) => `<div class="participant" style="--participant-color:${color}"><b>${name}</b><span>${role}</span></div>`).join('')}</div>`;
  transcript.innerHTML = item.rows.map(([speaker,time,text,korean,type]) => `<article class="utterance"><div class="speaker"><i style="background:${colorFor(speaker)}"></i>${speaker}<small style="display:block;margin:6px 0 0 14px;color:#849597">${time}</small></div><div class="message"><p>${text}</p>${korean ? `<small>${korean}</small>` : ''}</div><span class="type-tag">${type}</span></article>`).join('');
  document.querySelector('#sourceNote').textContent = item.note;
  document.querySelector('#rowCount').textContent = `${item.rows.length} utterances`;
}

caseButtons.forEach(button => button.addEventListener('click', () => {
  caseButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  renderCase(button.dataset.case);
}));
renderCase('team2');

document.querySelector('#copyCitation').addEventListener('click', async event => {
  const text = document.querySelector('.code-block code').innerText;
  try {
    await navigator.clipboard.writeText(text);
    event.currentTarget.textContent = 'Copied!';
    setTimeout(() => event.currentTarget.textContent = 'Copy', 1500);
  } catch {
    event.currentTarget.textContent = 'Select text';
  }
});
