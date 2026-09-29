/* Grade-aware stories, the opening scroll, tribal encounter and contextual guidance. */
const originalStages=structuredClone(STAGES),originalLessons=structuredClone(lessons);
const juniorStories=[
['환웅의 첫 마을','집과 밭을 만들어요. 사람들이 먹을 것을 모아요.','아주 오랜 옛날, 환웅이 사람들을 돕고자 하늘에서 땅으로 내려왔다. 신단수 아래 터를 잡으니, 그 마을을 신시라 하였다.'],
['날씨를 다스리는 세 명의 신','밭을 두 곳 만들어요. 비·구름·바람의 도움을 받아요.','환웅에게는 날씨를 다스리는 세 명의 신이 있었다.\n우사는 비를, 운사는 구름을, 풍백은 바람을 맡았으니,\n세 신의 도움으로 마을에 농사가 잘 되었다.'],
['두 부족이 신시를 찾아오다','음식을 나누고 이야기를 들어요. 함께 살 약속을 해요.','어느 날 곰 부족과 호랑이 부족이 신시를 찾아왔다.\n서로 다른 두 부족이었지만, 함께 살아갈 길을 찾아 나섰다.'],
['함께 사는 나라','창고와 모임터를 만들어요. 음식을 두 번 나눠요.','환웅과 웅녀 사이에서 단군왕검이 태어나 자라 나라를 세웠다.\n여러 마을이 힘을 모아 큰 나라가 되었으니, 이를 고조선이라 하였다.'],
['10월 3일을 기억하다','잔치 음식을 모아요. 마지막 이야기를 읽어요.','아주 오랜 옛날 나라가 열린 그 날을 기려, 오늘 우리는 해마다 시월 삼일을 개천절이라 부른다. 서로 돕는 그 마음은 오늘도 이어지고 있다.']];
const juniorLessons=[
{text:'환웅은 사람들이 잘 살기를 바라는 마음으로 하늘에서 신단수 아래로 내려왔어요. 그리고 이곳에 신시라는 마을을 열어 사람들의 삶을 돌보기 시작했답니다.',question:'환웅은 무엇을 하고 싶었나요?',answers:['혼자 부자가 되기','사람들을 돕기','매일 싸우기'],why:'<span style="color:#c0392b;font-weight:700">홍익인간</span>은 사람들을 널리 이롭게 한다는 뜻이에요. 친구를 돕는 것도 좋은 실천이에요.'},
{text:'환웅을 도운 세 명의 신 가운데 우사는 비를 내리고, 운사는 구름을 부르며, 풍백은 바람을 다스렸어요.',question:'단군 신화에서 비, 바람, 구름을 다스리는 신이 나오는 이유는 무엇일까요?',answers:['옛사람들이 농사를 중요하게 여겼기 때문에','신이 심심했기 때문에','호랑이를 놀라게 하려고'],why:'농사를 지으려면 날씨가 중요해요. 날씨를 다스리는 세 신 이야기를 통해 옛사람들이 날씨에 기대어 농사를 지었음을 짐작할 수 있어요.'},
{text:'',question:'신화에는 곰이 사람인 웅녀로 변했다고 나와요. 실제로는 어떤 일을 나타낸 이야기일까요?',answers:['환웅의 부족과 곰 부족이 만난 일','곰이 진짜 사람으로 변한 일','호랑이가 먼저 사람이 된 일'],why:'곰이 웅녀가 되었다는 이야기는, 곰 부족과 환웅의 부족이 만나 함께 살게 된 것을 뜻하는 해석이에요. 실제로 동물이 사람으로 변한 것은 아니에요.'},
{text:'환웅과 웅녀 사이에서 태어난 단군왕검이 자라 고조선을 세웠다고 전해요.',question:'고조선을 세운 사람은 누구라고 전해질까요?',answers:['단군왕검','호랑이','풍백'],correct:0,why:'환웅과 웅녀 사이에서 태어난 단군왕검이 고조선을 세웠다고 전해요.'},
{text:'옛사람들이 남긴 물건과 글을 함께 살펴봐요.',question:'옛날 일을 어떻게 알아볼까요?',answers:['게임만 보고 정해요','신화를 모두 사실로 믿어요','옛 물건과 글을 함께 봐요'],why:'여러 가지 자료를 살펴보면 옛날 일을 더 잘 알 수 있어요.'},
{text:'개천절은 고조선의 건국을 기념하는 날이에요.',question:'개천절은 언제일까요?',answers:['10월 3일','10월 9일','8월 15일'],why:'개천절은 10월 3일이에요.'}];
function configureGrade(grade){
 STAGES.splice(0,STAGES.length,...structuredClone(originalStages));lessons.splice(0,lessons.length,...structuredClone(originalLessons));
 Object.assign(STAGES[2],{title:'두 부족과 맺는 약속',desc:'곰 부족과 호랑이 부족을 맞이하고, 식량 나눔·대화·공동체 약속을 차례로 진행해요.',label:'웅녀 이야기 · 부족의 만남으로 해석하기',story:'어느 날 곰 부족과 호랑이 부족이 신시를 찾아왔다.\n서로 다른 두 부족이었지만, 함께 살아갈 길을 찾아 나섰다.',note:'부족의 만남은 신화를 해석하는 관점이에요. 아래의 만남과 약속 미션은 게임용 창작이에요.',lessons:[2]});
 Object.assign(lessons[2],{title:'신화와 부족 해석',type:'신화와 해석 비교',text:'『삼국유사』의 신화에서는 곰이 쑥과 마늘을 먹고 삼칠일(21일) 만에 웅녀가 되었다고 전해요. 이를 곰을 숭배하던 집단과 환웅 집단의 결합을 상징하는 이야기로 해석하기도 해요. 이 해석은 당시의 구체적인 사건을 모두 확인했다는 뜻은 아니에요.',question:'신화에는 곰이 사람인 웅녀로 변했다고 나와요. 실제로는 어떤 일을 나타낸 이야기일까요?',answers:['환웅의 부족과 곰 부족의 만남','곰이 실제로 사람으로 변신한 사건','단군왕검이 신단수 아래에서 홀로 태어난 사건'],correct:0,why:'곰이 웅녀가 되었다는 이야기는 곰을 믿던 부족과 환웅의 부족이 만나 하나의 공동체를 이루었다는 것을 상징적으로 표현한 해석이에요. 실제로 동물이 사람으로 변한 사건은 아니에요.'});
 if(grade==='junior'){STAGES.forEach((c,i)=>{[c.title,c.desc,c.story]=juniorStories[i]});juniorLessons.forEach((l,i)=>Object.assign(lessons[i],l));STAGES[2].note='부족 이야기는 신화를 풀어 보는 생각이에요. 게임의 약속은 새로 만든 이야기예요.';}
 lessons.push({title:'우리가 만든 만남',type:'게임과 역사 구분',text:grade==='junior'?'음식을 나누고, 대화하고, 약속한 일은 게임을 위해 만든 이야기예요. 실제 기록 그대로가 아니에요.':'두 부족을 맞이하고 음식을 나누거나, 호랑이 부족이 다른 길을 택하고 곰 부족과 공동체 약속을 맺는 과정은 게임을 위해 재구성했어요. 구체적인 대화와 선택을 입증하는 사료는 없어요.',question:grade==='junior'?'게임 속 부족의 약속은 무엇일까요?':'게임 속 부족 회의와 약속에 대한 올바른 설명은?',answers:grade==='junior'?['옛 기록을 그대로 옮긴 일','게임을 위해 새로 만든 이야기','오늘 실제로 일어난 일']:['사료로 확인된 실제 회의의 재현','신화의 해석을 바탕으로 만든 학습용 창작','원래 신화에 대화까지 그대로 적힌 내용'],correct:1,why:grade==='junior'?'신화, 신화를 풀어 보는 생각, 게임에서 만든 이야기를 구분해요.':'신화의 내용, 부족 결합이라는 해석, 구체적인 게임 사건은 서로 달라요. 해석을 확정된 역사적 사실로 바꾸어 기억하지 않도록 해요.'});
}
const baseFresh=fresh;fresh=()=>({...baseFresh(),grade:null,started:false,tribesWelcomed:false,tribeFoodShared:false,bearHeard:false,tigerHeard:false,tribePromise:false,tribeWait:0,stageStart:0,timeUp:false,timeWarned:false});
/* 한 차시(약 40분) 안에 끝나도록 장별 권장 시간(초)을 두고, 시간이 다 되면 다음 이야기 버튼이 활성화돼요. 성장형 버전은 목표가 커진 만큼 이전 버전보다 여유를 조금 더 뒀어요. */
const STAGE_BUDGET=[360,420,480,420,300];
const baseObjectives=objectives;objectives=function(){if(s.stage===2)return [{text:s.grade==='junior'?'두 부족 맞이하기':'곰 부족과 호랑이 부족 맞이하기',now:s.tribesWelcomed?1:0,goal:1},{text:'식량 나누기',now:s.tribeFoodShared?1:0,goal:1},{text:'곰 부족과 이야기 나누기',now:s.bearHeard?1:0,goal:1},{text:'호랑이 부족과 이야기 나누기',now:s.tigerHeard?1:0,goal:1},{text:'함께 살 약속 맺기',now:s.tribePromise?1:0,goal:1}];const o=baseObjectives();if(s.stage===4)o[1].goal=6;return o;};
const leftRail=document.createElement('div');leftRail.className='left-rail';$('.mission').before(leftRail);leftRail.append($('.mission'),$('.build-dock'));
const stageTimer=document.createElement('span');stageTimer.id='stageTimer';stageTimer.className='stage-timer';stageTimer.hidden=true;$('.mission .mini').append(stageTimer);
const intro=document.createElement('section');intro.id='opening';intro.setAttribute('aria-label','신화의 시작');intro.innerHTML='<div class="scroll-sheet"><div class="scroll-top"></div><div class="scroll-body"><p class="opening-kicker">하늘이 열리고, 우리의 이야기가 시작됩니다</p><div class="opening-seal">開天</div><h1>하늘이 열린 날</h1><p class="opening-story">아주 먼 옛날, 환웅이 무리 삼천을 거느리고<br>하늘에서 땅으로 내려왔다.<br>신단수 아래 터를 잡으니, 이곳이 곧 신시더라.<br>이제 그대와 함께 새로운 마을을 열고자 하노라.</p><button data-grade="junior" class="gold start-btn">이야기 시작하기 →</button></div><div class="scroll-bottom"></div></div>';document.body.append(intro);$('#game').style.visibility='visible';
const arrow=document.createElement('div');arrow.id='actionArrow';arrow.innerHTML='<span aria-hidden="true">➜</span><b></b>';arrow.setAttribute('aria-hidden','true');document.body.append(arrow);
const actionText=document.createElement('p');actionText.id='currentAction';actionText.setAttribute('role','status');actionText.setAttribute('aria-live','polite');$('#missionTitle').after(actionText);
let previousTarget=null,lastGuide='';
function nextAction(){
 if(!s.started||s.finished)return null;
 if(s.paused)return ['#pause','▶ 눌러서 계속해요'];
 if(s.event)return ['[data-skill="'+s.event.skill+'"]',s.event.who+'에게 도움을 청해요'];
 if(selected)return ['[data-site="'+s.lots.findIndex(l=>!l)+'"]','이 빈 터를 눌러요'];
 if(objectives().every(o=>o.now>=o.goal))return ['#advance','다음 이야기를 열어요'];
 let wanted=s.stage===0?(!count('home',true)?'home':!count('farm',true)?'farm':null):s.stage===1&&count('farm',true)<2?'farm':s.stage===3?(!count('store',true)?'store':!count('square',true)?'square':null):null;
 if(wanted){let b=TYPES.find(x=>x.id===wanted);if(s.wood<b.wood)return s.grade==='junior'?['#wood','목재를 모으는 중이에요']:null;if(s.food<b.food)return s.grade==='junior'?['#food','식량을 모으는 중이에요']:null;return ['[data-build="'+wanted+'"]',b.name+'을 골라요'];}
 if(s.lots.some(l=>l?.remaining>0))return ['.site.constructing','건물이 완성되기를 기다려요'];
 if(s.stage===2){if(!s.tribesWelcomed)return ['#tribeBubble','두 부족을 맞이해요'];if(!s.tribeFoodShared&&s.food<15)return ['#food','나눌 식량 15개를 모아요'];if(s.tribeWait>0)return null;if(!s.tribeFoodShared)return ['#tribeBubble','식량을 나눠요'];if(!s.bearHeard)return ['[data-tribe-talk="bear"]','곰 부족과 이야기를 나눠요'];if(!s.tigerHeard)return ['[data-tribe-talk="tiger"]','호랑이 부족과 이야기를 나눠요'];if(!s.tribePromise)return ['#tribeBubble','함께 살 약속을 맺어요'];return null;}
 if(s.stage===3&&s.shares<2){if(s.food<20)return ['#food','나눌 식량 20개를 모아요'];return ['#share',s.shareCooldown>0?'다음 나눔을 준비해요':'이웃과 식량을 나눠요'];}
 return s.grade==='junior'?['#food','식량을 모으는 중이에요']:null;
}
function updateGuide(){
 if(previousTarget){previousTarget.classList.remove('guided');previousTarget=null;}
 const next=nextAction();if(!next||$('#modal').open){arrow.hidden=true;return;}let target=$(next[0]);if(!target){arrow.hidden=true;return;}
 if(lastGuide!==next[1]){actionText.textContent='지금 할 일 · '+next[1];lastGuide=next[1];}
 target.classList.add('guided');previousTarget=target;const holder=target.closest('.left-rail, .right-side');if(holder){const tr=target.getBoundingClientRect(),hr=holder.getBoundingClientRect();if(tr.top<hr.top+5||tr.bottom>hr.bottom-5)holder.scrollTop+=tr.top<hr.top+5?tr.top-hr.top-10:tr.bottom-hr.bottom+10;}const r=target.getBoundingClientRect();const clipped=r.bottom>innerHeight-120||r.top<0;if(clipped){arrow.hidden=true;return;}
 arrow.hidden=false;arrow.querySelector('b').textContent=next[1];const hintWidth=innerWidth<=760?40:155;const fromRight=r.right+hintWidth+10<innerWidth;arrow.classList.toggle('from-left',!fromRight);arrow.style.left=(fromRight?r.right+6:Math.max(6,r.left-hintWidth))+'px';arrow.style.top=Math.max(58,Math.min(innerHeight-190,r.top+r.height/2-16))+'px';
}
const baseRender=render;render=function(){baseRender();if(s.stage===2)updateTribeBubbles();
 if(s.started&&!s.finished){
  const budget=STAGE_BUDGET[s.stage]||300,remain=Math.max(0,budget-(s.time-s.stageStart));
  stageTimer.hidden=false;stageTimer.classList.toggle('warn',remain<=30&&remain>0);stageTimer.classList.toggle('up',s.timeUp);
  stageTimer.textContent=s.timeUp?'⏰ 시간이 다 됐어요':'⏳ '+Math.floor(remain/60)+':'+String(Math.floor(remain%60)).padStart(2,'0');
  if(s.timeUp){$('#advance').disabled=false;$('#advance').textContent=s.stage===4?'개천절 잔치 열기 ✦':'시간이 되었어요 · 다음 이야기로 →';$('#advance').classList.add('time-cue');}
  else $('#advance').classList.remove('time-cue');
 }else{stageTimer.hidden=true;$('#advance').classList.remove('time-cue');}
 updateGuide();};
const baseSpecial=renderSpecial;renderSpecial=function(){if(s.stage!==2){baseSpecial();return;}const el=$('#special');el.hidden=false;el.innerHTML='<div class="mini">부족의 만남 · 게임 사건</div><h3>함께 살아갈 이웃</h3>';};
function tribeThinkingHTML(){return '이야기하는 중<span class="dots"><span>.</span><span>.</span><span>.</span></span>';}
function tribeBubbleState(){if(!s.tribesWelcomed)return{text:'두 부족을 맞이해요',active:true};if(s.tribeWait>0)return{text:tribeThinkingHTML(),active:false,thinking:true};if(!s.tribeFoodShared)return s.food<15?{text:'식량 15개가 필요해요',active:false}:{text:'식량을 나눠요',active:true};if(s.bearHeard&&s.tigerHeard&&!s.tribePromise)return{text:'함께 살 약속을 맺어요',active:true};if(s.tribePromise)return{text:'✓ 약속을 마쳤어요',active:false,done:true};return null;}
function updateTribeBubbles(){const container=$('#tribeVisitors');if(!container)return;let bubble=$('#tribeBubble');if(!bubble){bubble=document.createElement('button');bubble.id='tribeBubble';bubble.type='button';container.append(bubble);}const st=tribeBubbleState();bubble.hidden=!st;if(st){bubble.innerHTML=st.text;bubble.classList.toggle('done',!!st.done);bubble.disabled=!st.active;}
 const showTalk=s.tribeFoodShared&&s.tribeWait<=0;
 const bearBtn=$('#bearGroup .tribe-talk-btn');if(bearBtn)bearBtn.hidden=!showTalk||s.bearHeard;
 const tigerBtn=$('#tigerGroup .tribe-talk-btn');if(tigerBtn)tigerBtn.hidden=!showTalk||s.tigerHeard;
}
function tribeArrival(){show('<div class="mini">새로운 이웃 · 부족 해석을 바탕으로 만든 사건</div><h2>곰 부족과 호랑이 부족이 찾아왔다!</h2><div class="tribe-portraits"><div><span class="tribe-portrait-art trbear"></span><b>곰 부족</b><small>곰을 상징으로 삼은 사람들</small></div><div><span class="tribe-portrait-art trtiger"></span><b>호랑이 부족</b><small>호랑이를 상징으로 삼은 사람들</small></div></div><p>'+(s.grade==='junior'?'두 부족이 신시를 찾아왔어요. 먼저 반갑게 맞이하고 음식을 나눠요.':'서로 다른 생활 방식을 가진 두 집단이 신시를 찾아왔어요. 환웅의 마을과 함께 지낼 수 있을지 알아보려 합니다. 먼저 손님들을 맞이해 볼까요?')+'</p><button id="welcomeTribes" class="gold red-cue">두 부족을 반갑게 맞이한다</button>');}
function welcomeTribes(){s.tribesWelcomed=true;close();renderSpecial();render();notify('환영해요! 이제 식량을 나누고 서로의 이야기를 들어요.');}
function foodShower(){const groups=[$('#bearGroup'),$('#tigerGroup')].filter(Boolean);groups.forEach(anchor=>{const rect=anchor.getBoundingClientRect();const cx=rect.left+rect.width/2,cy=rect.top+rect.height*0.5;for(let i=0;i<11;i++){const n=document.createElement('span');n.className='food-fly';n.textContent='🌾';const angle=Math.random()*Math.PI*2,dist=230+Math.random()*260;n.style.left=cx+'px';n.style.top=cy+'px';n.style.animationDuration=(1.05+Math.random()*.35)+'s';n.style.setProperty('--dx',(Math.cos(angle)*dist)+'px');n.style.setProperty('--dy',(Math.sin(angle)*dist)+'px');n.style.animationDelay=(Math.random()*.3)+'s';document.body.append(n);setTimeout(()=>n.remove(),1700);}});}
function foodShareTribes(){if(s.stage!==2||!s.tribesWelcomed||s.tribeFoodShared||s.tribeWait>0||s.food<15)return false;s.food-=15;s.tribeFoodShared=true;s.tribeWait=4;foodShower();updateTribeBubbles();notify('두 부족과 식량을 나눴어요. 잠시 후 각자 이야기를 들어볼 수 있어요.');render();return true;}
function bearDialogue(){if(s.stage!==2||!s.tribeFoodShared||s.tribeWait>0||s.bearHeard)return false;show('<div class="mini">부족의 대화 · 게임용 창작</div><h2>곰 부족의 결심</h2><p>'+(s.grade==='junior'?'곰 부족은 신시가 마음에 들었어요. 이곳에 남아 함께 살기로 했어요.':'곰 부족은 신시의 생활 방식이 마음에 들어, 이곳에 남아 함께 살아가기로 했어요.')+'</p><button id="bearHeardConfirm" class="gold red-cue">곰 부족의 이야기를 들었다</button>');return true;}
function tigerDialogue(){if(s.stage!==2||!s.tribeFoodShared||s.tribeWait>0||s.tigerHeard)return false;show('<div class="mini">부족의 대화 · 게임용 창작</div><h2>호랑이 부족의 결심</h2><p>'+(s.grade==='junior'?'호랑이 부족은 다른 곳에서 살아가기로 했어요. 서로 다른 선택이지만 나쁜 것은 아니에요.':'호랑이 부족은 자신들의 생활 방식을 지키며 다른 곳으로 떠나기로 했어요. 서로 다른 선택을 존중하며 앞으로도 평화롭게 지내기로 해요.')+'</p><button id="tigerHeardConfirm" class="gold red-cue">호랑이 부족의 이야기를 들었다</button>');return true;}
function tribePromiseAction(){if(s.stage!==2||!(s.bearHeard&&s.tigerHeard)||s.tribePromise)return false;s.tribePromise=true;s.heart=Math.min(100,s.heart+10);notify('두 부족과 서로 돕고 함께 살아갈 약속을 맺었어요.');render();return true;}
const baseEnter=enterStage;enterStage=function(){baseEnter();s.stageStart=s.time;s.timeUp=false;s.timeWarned=false;$('#bear')?.remove();if(s.stage===2){const visitors=document.createElement('div');visitors.id='tribeVisitors';visitors.innerHTML='<div class="tribe-group trbear" id="bearGroup"><span class="tribe-member m0 trbear"></span><span class="tribe-member m1 trbear"></span><span class="tribe-member m2 trbear"></span><span class="tribe-member m3 trbear"></span><span class="tribe-member m4 trbear"></span><b>곰 부족</b><button type="button" class="tribe-talk-btn" data-tribe-talk="bear" hidden>곰 부족과 이야기 나누기</button></div><div class="tribe-group trtiger" id="tigerGroup"><span class="tribe-member m0 trtiger"></span><span class="tribe-member m1 trtiger"></span><span class="tribe-member m2 trtiger"></span><span class="tribe-member m3 trtiger"></span><span class="tribe-member m4 trtiger"></span><b>호랑이 부족</b><button type="button" class="tribe-talk-btn" data-tribe-talk="tiger" hidden>호랑이 부족과 이야기 나누기</button></div>';$('#world').append(visitors);updateTribeBubbles();requestAnimationFrame(()=>requestAnimationFrame(()=>{$('#bearGroup')?.classList.add('arrived');$('#tigerGroup')?.classList.add('arrived');SFX?.arrive();}));tribeArrival();}else $('#tribeVisitors')?.remove();};
const baseUpdate=update;update=function(dt){if(!s.started)return;baseUpdate(dt);if(s.stage===2&&s.tribeWait>0&&!s.paused&&!$('#modal').open&&!document.hidden){s.tribeWait=Math.max(0,s.tribeWait-dt);if(s.tribeWait===0){updateTribeBubbles();notify(s.bearHeard&&s.tigerHeard?'함께 살 약속을 맺을 수 있어요.':'이제 각 부족과 따로 이야기를 나눠 보세요.');}}
 if(!s.finished&&!s.paused){
  const budget=STAGE_BUDGET[s.stage]||300,remain=budget-(s.time-s.stageStart);
  if(!s.timeWarned&&remain<=30&&remain>0){s.timeWarned=true;notify('이 장은 곧 시간이 다 돼요. 하던 것을 마무리해 주세요.');}
  if(!s.timeUp&&remain<=0){s.timeUp=true;notify('시간이 다 됐어요. 하던 활동을 마쳤으면 다음 이야기로 넘어가도 좋아요.');}
 }};
const baseShowQuiz=showQuiz;showQuiz=function(){baseShowQuiz();$('.subtle')?.remove();};
const baseEnding=ending;ending=function(){baseEnding();$('.end-score').firstChild.textContent='5 / 5 ';};
const baseJournal=journal;journal=function(){baseJournal();$('#modalBody').innerHTML=$('#modalBody').innerHTML.replaceAll('/6','/5').replace('곰 돌봄','두 부족의 만남');};
const baseAdvance=advance;advance=function(){
 if(s.timeUp&&!s.finished&&!objectives().every(o=>o.now>=o.goal)){
  quizQueue=[...STAGES[s.stage].lessons];quizIndex=0;
  quizDone=()=>{if(s.stage<4){$('#modal').close();enterStage();}else{s.food=Math.max(0,s.food-1000);s.finished=true;render();ending();}};
  showQuiz();return;
 }
 baseAdvance();
};
$('#advance').onclick=advance;
const baseHelp=help;help=function(){baseHelp();$('#modalBody').innerHTML=$('#modalBody').innerHTML.replace('아래 건물을','미션 아래의 건물을')+'<p class="subtle">⏳ 표시는 이 장에 권장하는 시간이에요. 시간이 다 되면 임무를 다 마치지 못했어도 다음 이야기로 넘어갈 수 있어요.</p>';if(s.grade==='junior')$('#modalBody').innerHTML='<div class="mini">놀이 방법</div><h2>빨간 화살표를 따라가요</h2><p>① 집이나 밭을 골라요.<br>② 지도에서 빈 터를 눌러요.<br>③ 사람들이 일하면 자원이 쌓여요.<br>④ 미션을 끝내고 다음 이야기를 읽어요.</p><p>Ⅱ는 잠깐 멈추기, 1×는 속도 바꾸기예요. 다른 창을 읽을 때는 시간이 멈춰요.</p><p class="subtle">⏳ 표시는 이 장에서 쓸 수 있는 시간이에요. 시간이 다 되면 다음 이야기로 넘어갈 수 있어요.</p><button id="reset" class="secondary">새로 시작하기</button>';};
$('#guide').onclick=help;$('#readStory').onclick=()=>{const c=STAGES[s.stage];show(`<div class="mini">제${s.stage+1}장 · ${c.label}</div><h2>${c.title}</h2><p>${c.story}</p><p class="feedback">${c.note}</p>`);};
const baseReset=reset;reset=function(){baseReset();$('#tribeVisitors')?.remove();$('#game').inert=true;intro.hidden=false;intro.classList.remove('opened');void intro.offsetWidth;intro.classList.add('opened');arrow.hidden=true;intro.querySelector('[data-grade]').focus();};
function startGrade(grade){if(!['junior','senior'].includes(grade)||s.started)return false;s.grade=grade;configureGrade(grade);s.started=true;s.stageStart=0;s.timeUp=false;s.timeWarned=false;intro.hidden=true;$('#game').inert=false;renderStatic();notify(grade==='junior'?'빨간 화살표를 따라 움집을 골라요!':'환웅의 신시를 함께 만들어 봅시다. 빨간 화살표가 다음 행동을 알려줘요.');$('[data-build="home"]').focus();return true;}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;if(b.dataset.grade)startGrade(b.dataset.grade);if(b.id==='welcomeTribes')welcomeTribes();if(b.id==='tribeBubble'){if(!s.tribesWelcomed)tribeArrival();else if(!s.tribeFoodShared)foodShareTribes();else if(s.bearHeard&&s.tigerHeard&&!s.tribePromise)tribePromiseAction();}
 if(b.dataset.tribeTalk==='bear')bearDialogue();if(b.dataset.tribeTalk==='tiger')tigerDialogue();
 if(b.id==='bearHeardConfirm'){s.bearHeard=true;close();if(s.bearHeard&&s.tigerHeard)s.tribeWait=4;updateTribeBubbles();render();notify('곰 부족과 이야기를 나눴어요.');}
 if(b.id==='tigerHeardConfirm'){s.tigerHeard=true;close();$('#tigerGroup')?.classList.add('leaving');if(s.bearHeard&&s.tigerHeard)s.tribeWait=4;updateTribeBubbles();render();notify('호랑이 부족의 선택을 존중했어요. 호랑이 부족이 길을 떠나요.');}
});
const desktopPositions=structuredClone(POS);function layoutMap(){POS.splice(0,POS.length,...structuredClone(desktopPositions));renderSites();}layoutMap();window.addEventListener('resize',()=>{layoutMap();updateGuide()});document.addEventListener('scroll',updateGuide,true);
reset();
