"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const icons = {
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
  pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  wheel:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v7m9 2h-7m-2 9v-7m-9-2h7m8.4-6.4-5 5m-2.8 2.8-5 5m0-12.8 5 5m2.8 2.8 5 5"/>',
  down:'<path d="M12 4v16m-6-6 6 6 6-6"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  external:'<path d="M6 18 18 6M7 6h11v11"/>', rotate:'<path d="M20 8a8 8 0 1 0 0 8M20 3v5h-5"/>',
  list:'<rect x="5" y="4" width="15" height="17" rx="2"/><path d="m8 10 1 1 2-3m2 2h4m-9 6 1 1 2-3m2 2h4"/>',
  print:'<path d="M7 8V3h10v5M7 17H4V9h16v8h-3"/><path d="M7 14h10v7H7z"/>',
  copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v14h5"/>',
  phone:'<path d="m7 3 3 5-3 2c2 4 4 6 8 7l2-3 4 3c-1 4-3 5-6 4C8 19 3 13 2 7c0-2 2-4 5-4Z"/>',
  chat:'<path d="M20 13a3 3 0 0 1-3 3h-6l-5 4v-4H4V5h16Z"/><path d="M7 9h10m-10 3h6"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  key:'<circle cx="8" cy="8" r="5"/><path d="m12 12 8 8m-4-4 3-3m-1 5 3-3"/>',
  qr:'<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h4v4h-4m-3-4v4"/>',
  shield:'<path d="m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5Z"/><path d="m8 12 3 3 5-6"/>'
};
function icon(name) {
  return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+icons[name]+'</svg>';
}
document.querySelectorAll("[data-i]").forEach(el => el.outerHTML = icon(el.dataset.i));

const practice = {
  phone: {
    sender: "Incoming video call", preview: "Stay on camera until you pay.",
    prompt: "Which part gives the caller away?",
    clues: ["The caller wears a uniform", "They demand payment to end the call"],
    key: 1, hint: "A uniform can be copied. Look for the pressure tactic.",
    why: "The demand for money to avoid arrest is the clue. End the call and check with the agency yourself."
  },
  chat: {
    sender: "Bank fraud desk · incoming call", preview: "Read me the code to cancel this transfer.",
    prompt: "Tap the detail that puts the account at risk.",
    clues: ["They ask for a one-time code", "They know your first name"],
    key: 0, hint: "A name is easy to obtain. What are they asking you to give away?",
    why: "That code could approve a sign-in or transfer. Keep it private and call the number on your bank card."
  },
  lock: {
    sender: "Credit bureau · service menu", preview: "Which service do you want?",
    prompt: "Tap the service that restricts new credit checks for free.",
    clues: ["Monthly credit monitoring", "Place a security freeze"],
    key: 1, hint: "Monitoring can alert you to changes. Look for the service that restricts access.",
    why: "Choose a security freeze separately at Equifax, Experian, and TransUnion. Their official links are below."
  },
  key: {
    sender: "Email app · security settings", preview: "Choose a sign-in method.",
    prompt: "Which choice helps protect you from a lookalike sign-in page?",
    clues: ["Create a passkey", "Reuse your bank password"],
    key: 0, hint: "Reusing a password puts both accounts at risk. Try the other sign-in method.",
    why: "A passkey is tied to the real service. Create it from the account settings you opened yourself."
  },
  qr: {
    sender: "Parking meter · payment notice", preview: "Scan here to pay for parking.",
    prompt: "What would make you check another way to pay?",
    clues: ["A city logo is on the meter", "A sticker covers the original QR code"],
    key: 1, hint: "The meter can be genuine even if someone has changed the payment instructions.",
    why: "An extra sticker could send you to a different site. Use the city's official app or the meter's built-in payment option."
  },
  shield: {
    sender: "Family chat · unknown number", preview: "Hi Mom, I’m using a friend’s phone. Can you send money?",
    prompt: "Choose the best way to check who sent this.",
    clues: ["Call their previously saved number", "Ask this account for a photo"],
    key: 0, hint: "A stranger might already have a family photo. Try a separate contact route.",
    why: "A call to the number you already trust lets you check the story with your relative before sending money."
  }
};
const guideDialog = $("#topic-dialog");
topics.forEach(topic => {
  const example = practice[topic.icon];
  const button = document.createElement("button");
  button.className = "topic";
  button.setAttribute("aria-haspopup","dialog");
  button.innerHTML = '<span class="tile-icon '+topic.color+'">'+icon(topic.icon)+'</span><strong>'+topic.title+'</strong><span class="snippet '+topic.color+'">“'+example.preview+'”</span><span class="try-clue">Try the scenario '+icon("arrow")+'</span>';
  button.onclick = () => {
    $("#topic-content").innerHTML = '<h2 id="topic-title">'+topic.title+'</h2><div class="practice-card"><p class="kicker">PRACTICE EXAMPLE</p><div class="sample '+topic.color+'"><small>'+icon(topic.icon)+' '+example.sender+'</small><blockquote>'+example.preview+'</blockquote></div><h3>'+example.prompt+'</h3><div id="clue-choices"></div><p id="clue-feedback" role="status"></p></div><details class="detail-body"><summary>Safety steps and official links</summary>'+topic.html+'</details>';
    example.clues.forEach((clue,index) => {
      const answer = document.createElement("button");
      answer.className = "clue";
      answer.textContent = clue;
      answer.onclick = () => {
        const correct = index === example.key;
        for (const item of $("#clue-choices").children) item.classList.remove("try-again","found");
        answer.classList.add(correct ? "found" : "try-again");
        $("#clue-feedback").textContent = correct ? "You found it. "+example.why : example.hint;
        if (correct) $(".detail-body",guideDialog).open = true;
      };
      $("#clue-choices").append(answer);
    });
    guideDialog.showModal();
    guideDialog.scrollTop = 0;
  };
  $("#topics").append(button);
});
document.querySelectorAll("dialog").forEach(dialog => {
  $(".close",dialog).onclick = () => dialog.close();
  dialog.addEventListener("click",event => {
    if(event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close();
  });
});
guideDialog.addEventListener("click",event => {if(event.target.closest('a[href^="#"]')) guideDialog.close();});

const scenarios = [
  ["Calls","phone","A video caller in a police uniform says you’re under “digital arrest.” You must stay on camera and pay a deposit.","Scam","End the call. Tell a trusted person and verify independently. A uniform or badge on screen cannot prove who’s calling."],
  ["Codes","chat","A caller who knows your bank balance asks you to read out a one-time code to cancel a transfer.","Scam","Keep the code private. Hang up and call the fraud number printed on your card."],
  ["Credit","lock","You type the official credit bureau’s address yourself and request a free security freeze.","Safe","Repeat this at all three bureaus. Keep your login details secure so you can lift the freeze for a credit application."],
  ["Sign-in","key","You open your email provider’s real app yourself and use a passkey to sign in.","Safe","A passkey is tied to the real service. Keep your device locked and check your account recovery options."],
  ["QR codes","qr","A QR sticker on a parking meter opens a payment page. You notice another code underneath it.","Scam warning","Skip the sticker. Find the city’s official parking app or use the meter’s built-in payment method."],
  ["Family","shield","Someone claiming to be your grandchild messages on WhatsApp asking for money. You pause and call the number you already have saved.","Safe","Confirm the request through a route you already trust. If you cannot reach them, wait before sending money."]
];
const wheel = $("#wheel");
scenarios.forEach(([name,glyph],i) => {
  const label = document.createElement("span");
  label.className="segment";
  label.style.setProperty("--angle",i*60+"deg");
  label.innerHTML=icon(glyph)+name;
  wheel.append(label);
});
let angle = 0;
let remaining = [];
let spinning = false;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const spinButton = $("#spin");
const hub = $("#hub");
const pointer = $(".pointer");
const result = $("#wheel-result");

function marigoldBurst() {
  const petals = Array.from({length: 10}, (_,i) =>
    '<i style="--direction:'+i*36+'deg;--reach:'+(i%2 ? 52 : 40)+'px"></i>'
  ).join("");
  return '<span class="marigold-burst" aria-hidden="true"><b>✿</b>'+petals+'</span>';
}

function landOn(index) {
  const [name,,situation,verdict,why] = scenarios[index];
  spinning = false;
  spinButton.disabled = hub.disabled = false;
  spinButton.innerHTML = icon("rotate")+" Spin again";
  $("#round-label").textContent = name.toUpperCase()+" · SCENARIO "+(scenarios.length-remaining.length)+" OF "+scenarios.length;
  result.innerHTML = '<div class="round-in"><h3>Scam or safe?</h3><p class="situation">'+situation+'</p><div class="vote-row" aria-label="Room vote"></div><div class="vote-note" role="status"></div></div>';
  for (const vote of ["Scam","Safe"]) {
    const choice = document.createElement("button");
    choice.className = "vote";
    choice.textContent = vote;
    choice.onclick = () => {
      const correct = vote === (verdict === "Safe" ? "Safe" : "Scam");
      $(".vote-note",result).innerHTML = '<div class="verdict round-in">'+marigoldBurst()+'<strong>'+(correct ? "Good call! " : "Let’s look closer. ")+verdict+'.</strong><p>'+why+'</p></div>';
      for (const item of $(".vote-row",result).children) {
        item.disabled = true;
        item.setAttribute("aria-pressed",String(item === choice));
      }
    };
    $(".vote-row",result).append(choice);
  }
}
function spinWheel() {
  if (spinning) return;
  spinning = true;
  if (!remaining.length) remaining = scenarios.map((_,i) => i);
  const index = remaining.splice(Math.floor(Math.random()*remaining.length),1)[0];
  const target = (360-index*60)%360;
  const from = angle;
  angle += 1440+(target-angle%360+360)%360;
  spinButton.disabled = hub.disabled = true;
  spinButton.textContent = "Spinning…";
  $("#round-label").textContent = "SCENARIO WHEEL";
  result.innerHTML = '<h3>Round and round…</h3><p>Watch the pointer to see which topic lands.</p>';
  const start = performance.now();
  let lastPeg = Math.floor((from+30)/60);
  function frame(now) {
    const progress = reducedMotion.matches ? 1 : Math.min(1,(now-start)/3200);
    const current = from+(angle-from)*(1-Math.pow(1-progress,3.15));
    wheel.style.transform = "rotate("+current+"deg)";
    const peg = Math.floor((current+30)/60);
    if (peg !== lastPeg && !reducedMotion.matches && pointer.animate) {
      pointer.getAnimations().forEach(animation => animation.cancel());
      pointer.animate([{transform:"rotate(-17deg)"},{transform:"rotate(4deg)"},{transform:"rotate(0)"}],{duration:115});
    }
    lastPeg = peg;
    if (progress < 1) requestAnimationFrame(frame);
    else landOn(index);
  }
  frame(start);
}
spinButton.onclick = hub.onclick = spinWheel;

const questions = [
  {q:"“cops from a different country” demand a video-call deposit to clear your name. What do you do?",a:["Stay on camera","Pay the deposit","Hang up and verify independently","Send your passport photo"],key:2,why:"End the call and talk to someone you trust. Use an official number you find yourself."},
  {q:"A bank caller asks for a one-time code to stop fraud. What is the safest response?",a:["Read them the code","Hang up and call the number on your card","Share just the last digits","Approve the sign-in alert"],key:1,why:"A code can authorize access or a payment. Keep it private, even when the caller knows your name."},
  {q:"Which action freezes your US credit at all three major bureaus for free?",a:["Call your bank","Buy credit monitoring","Freeze only at Experian","Request a freeze separately at each bureau"],key:3,why:"Contact Equifax, Experian, and TransUnion. Placing or lifting a security freeze is free."},
  {q:"Which sign-in method is designed to resist fake login pages?",a:["A passkey","A reused password","A text code read to a caller","A security question"],key:0,why:"A passkey works with the site or app it was created for. A lookalike site cannot use it to sign you in."},
  {q:"A text says “Pay your toll today” and includes a link. How do you check?",a:["Pay the small fee","Reply with your plate number","Visit the toll agency’s official site yourself","Forward the link to family"],key:2,why:"Look up the toll agency independently. Use its real website or customer service number to check your balance."},
  {q:"Someone claiming to be your grandchild reaches out on WhatsApp for urgent money. What should you do first?",a:["Send a small test payment","Call your grandchild using a number you already trust","Ask for a profile photo","Forward the request"],key:1,why:"Someone else may control the account or be pretending to be your grandchild. Confirm the request in a separate call before sending money."}
];
const letters="ABCD";
const quizDialog=$("#quiz-dialog"), quizBody=$("#quiz-content");
quizDialog.classList.add("quiz-board");
let step=0, picked=null, score=0, revealed=false;
function showQuestion(focus=false) {
  if(step===questions.length) {
    quizBody.innerHTML='<div class="score-flower" aria-hidden="true">'+marigoldBurst()+'</div><p class="quiz-meta">QUIZ COMPLETE</p><h2 id="quiz-title" tabindex="-1">Your room scored '+score+' out of 6.</h2><p>Before you go, name one safety habit you’ll share with your family.</p><div class="actions" style="margin-top:1rem"><button class="button primary" id="again">Play again</button><button class="button secondary" id="finish">Finish quiz</button></div>';
    $("#again").onclick=beginQuiz;
    $("#finish").onclick=()=>quizDialog.close();
  } else {
    const current=questions[step];
    const meter = '<div class="round-meter" aria-hidden="true">'+questions.map((_,i)=>'<span class="'+(i<step ? 'done' : i===step ? 'current' : '')+'"></span>').join('')+'</div>';
    quizBody.innerHTML=meter+'<p class="quiz-meta">Question '+(step+1)+' of 6 · Score '+score+'</p><h2 id="quiz-title" tabindex="-1">'+current.q+'</h2><div class="choices" role="group" aria-label="Choose the room’s answer"></div><p class="answer-note" aria-live="polite">Choose the room’s answer.</p><button class="button primary" id="reveal" disabled>Reveal answer</button>';
    current.a.forEach((answer,i)=>{
      const choice=document.createElement("button");
      choice.className="choice";
      choice.style.setProperty("--delay",i*55+"ms");
      choice.setAttribute("aria-pressed","false");
      choice.innerHTML="<span>"+letters[i]+"</span>"+answer;
      choice.onclick=()=>{
        picked=i;
        [...$(".choices").children].forEach((el,j)=>el.setAttribute("aria-pressed",String(i===j)));
        $("#reveal").disabled=false;
        $(".answer-note").textContent="Choice "+letters[i]+" selected.";
      };
      $(".choices").append(choice);
    });
    $("#reveal").onclick=()=>{
      if(revealed){step++;picked=null;revealed=false;showQuestion(true);return;}
      if(picked===null)return;
      revealed=true;
      if(picked===current.key) score++;
      $(".quiz-meta").textContent="Question "+(step+1)+" of 6 · Score "+score;
      [...$(".choices").children].forEach((el,i)=>{el.disabled=true;el.classList.toggle("correct",i===current.key)});
      $(".answer-note").classList.add("verdict","round-in");
      $(".answer-note").textContent=(picked===current.key?"Correct! ":"Correct answer: ")+letters[current.key]+". "+current.a[current.key]+". "+current.why;
      $("#reveal").textContent=step===questions.length-1?"See final score":"Next question";
    };
  }
  if(focus)$("#quiz-title").focus();
}
function beginQuiz(){
  step=0;picked=null;score=0;revealed=false;
  showQuestion();
  if(!quizDialog.open)quizDialog.showModal();
  $("#quiz-title").focus();
}
$("#start-quiz").onclick=beginQuiz;


// Fictional domains are displayed as text, never opened.
const peek = $("#peek-link");
function revealDestination() {
  $("#link-destination").textContent = "https://parcel.example.delivery-help.example/track";
  $("#link-destination").classList.add("destination-visible");
}
peek.onmouseenter = revealDestination;
peek.onfocus = revealDestination;
peek.onclick = event => { event.preventDefault(); revealDestination(); };
const domains = [
  ["https://parcel.example/track", "The domain is parcel.example, matching the known carrier address in this exercise. Still confirm the request independently before sharing payment details."],
  ["https://parcel.example.delivery-help.example/track", "The domain is delivery-help.example. The words parcel.example at the start are a subdomain controlled by that other site."],
  ["https://delivery-help.example/parcel.example", "The domain is delivery-help.example. The carrier’s name appears only in the path after the slash."]
];
domains.forEach(([address,explanation],index) => {
  const option = document.createElement("button");
  option.className = "clue domain-option";
  option.textContent = address;
  option.onclick = () => {
    $("#domain-feedback").textContent = explanation;
    for (const item of $("#domain-options").children) item.classList.remove("found","try-again");
    option.classList.add(index === 0 ? "found" : "try-again");
  };
  $("#domain-options").append(option);
});
let originalSite = true;
function chooseDemoSite(original) {
  originalSite = original;
  $("#original-site").setAttribute("aria-pressed",String(original));
  $("#lookalike-site").setAttribute("aria-pressed",String(!original));
  $("#passkey-address").textContent = original ? "https://parcel.example/sign-in" : "https://parcel-login.example/sign-in";
  $("#passkey-feedback").textContent = "";
  $("#passkey-feedback").classList.remove("verdict","round-in");
}
$("#original-site").onclick = () => chooseDemoSite(true);
$("#lookalike-site").onclick = () => chooseDemoSite(false);
$("#try-passkey").onclick = () => {
  $("#passkey-feedback").textContent = originalSite ?
    "Domain matches → unlock with your device PIN, face, or fingerprint → the service verifies the signed proof. You’re signed in to the original service in this simulation." :
    "Domain mismatch → the saved passkey is unavailable for this lookalike. Copying the logo or page design cannot make the original passkey work here.";
  $("#passkey-feedback").classList.add("verdict","round-in");
};
