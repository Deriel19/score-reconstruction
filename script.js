(function(){
  let total = 13*60+15;
  const m=document.getElementById('minutes');
  const s=document.getElementById('seconds');
  function tick(){
    const mm=Math.floor(total/60), ss=total%60;
    if(m) m.textContent=String(mm).padStart(2,'0');
    if(s) s.textContent=String(ss).padStart(2,'0');
    total--;
    if(total<0) total=15*60;
  }
  tick();
  setInterval(tick,1000);
})();
