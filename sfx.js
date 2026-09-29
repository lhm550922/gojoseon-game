/* Sound effects: real audio clips (provided by the user) with a synthesized Web Audio
   fallback for anything that has no clip yet. Also handles looping background music. */
const SFX=(()=>{
 let ctx=null,muted=false;
 function getCtx(){if(!ctx){try{ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}if(ctx.state==='suspended')ctx.resume().catch(()=>{});return ctx}
 function tone(freq,dur,{type='sine',gain=.16,delay=0,slideTo=null,attack=.008}={}){
  const c=getCtx();if(!c||muted)return;
  const t0=c.currentTime+delay;
  const osc=c.createOscillator(),g=c.createGain();
  osc.type=type;osc.frequency.setValueAtTime(freq,t0);
  if(slideTo)osc.frequency.exponentialRampToValueAtTime(Math.max(1,slideTo),t0+dur);
  g.gain.setValueAtTime(0,t0);
  g.gain.linearRampToValueAtTime(gain,t0+attack);
  g.gain.exponentialRampToValueAtTime(.001,t0+dur);
  osc.connect(g);g.connect(c.destination);
  osc.start(t0);osc.stop(t0+dur+.02);
 }
 function chord(freqs,dur,opts){freqs.forEach((f,i)=>tone(f,dur,{...opts,delay:(opts?.delay||0)+i*.015}))}
 function arp(freqs,step,dur,opts){freqs.forEach((f,i)=>tone(f,dur,{...opts,delay:(opts?.delay||0)+i*step}))}

 // Real audio clips. Each entry preloads one Audio element used as a template;
 // playback clones it so overlapping calls (e.g. rapid clicks) don't cut each other off.
 const clips={};
 function loadClip(name,src,volume){
  const a=new Audio(src);a.preload='auto';a.volume=volume;
  clips[name]={base:a,volume,ok:true};
  a.addEventListener('error',()=>{clips[name].ok=false},{once:true});
 }
 loadClip('click','sfx/click.mp3',.5);
 loadClip('star','sfx/star.mp3',.6);
 loadClip('success','sfx/success.mp3',.6);
 function playClip(name){
  const c=clips[name];if(!c||!c.ok||muted)return false;
  try{const n=c.base.cloneNode();n.volume=c.volume;n.play().catch(()=>{});return true}catch(e){return false}
 }

 // Background music
 const bgm=new Audio('sfx/bgm.mp3');bgm.loop=true;bgm.volume=0;bgm.preload='auto';
 let bgmStarted=false,bgmTargetVolume=.35;
 function fadeBgm(to,dur=1200){
  const from=bgm.volume,t0=performance.now();
  function step(now){const p=Math.max(0,Math.min(1,(now-t0)/dur));bgm.volume=Math.max(0,Math.min(1,from+(to-from)*p));if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step);
 }
 function startBgm(){
  if(bgmStarted||muted)return;bgmStarted=true;
  bgm.play().then(()=>fadeBgm(bgmTargetVolume)).catch(()=>{bgmStarted=false});
 }

 return{
  setMuted(v){
   muted=v;
   if(muted){bgm.pause()}
   else if(bgmStarted){bgm.play().catch(()=>{});fadeBgm(bgmTargetVolume,400)}
   else startBgm();
  },
  isMuted(){return muted},
  unlock(){getCtx();startBgm()},
  click(){if(!playClip('click'))tone(880,.065,{type:'sine',gain:.13,slideTo:540,attack:.002})},
  build(){chord([523.25,659.25,784],.5,{type:'triangle',gain:.14})},
  star(){if(!playClip('star')){arp([523.25,659.25,784,1046.5],.09,.22,{type:'triangle',gain:.15,attack:.004});setTimeout(()=>chord([784,1046.5,1318.5],.5,{type:'sine',gain:.12,attack:.01}),320)}},
  correct(){if(!playClip('success'))chord([659.25,830.61,987.77],.55,{type:'sine',gain:.16})},
  wrong(){tone(180,.32,{type:'sawtooth',gain:.12,slideTo:110})},
  arrive(){tone(392,.5,{type:'sine',gain:.12,slideTo:523.25,attack:.05})},
  weather(){chord([440,554.37,659.25,880],.7,{type:'sine',gain:.13})},
  share(){chord([587.33,739.99,880],.6,{type:'triangle',gain:.14})},
  advance(){chord([392,523.25,659.25,784],1,{type:'sine',gain:.15,attack:.03})}
 };
})();
document.addEventListener('pointerdown',()=>SFX.unlock(),{once:true});
document.addEventListener('keydown',()=>SFX.unlock(),{once:true});
document.addEventListener('touchend',()=>SFX.unlock(),{once:true});
document.addEventListener('click',()=>SFX.unlock(),{once:true});
