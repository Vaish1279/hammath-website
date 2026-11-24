const menu=document.getElementById('menu'),nav=document.getElementById('nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
document.getElementById('year').textContent=new Date().getFullYear();
// A gentle feedback reminder appears only when a returning visitor comes back after 30 days.
// It is not a push notification and does not send data anywhere.
const firstVisitKey='hammath_site_first_visit_v1',dismissKey='hammath_feedback_dismissed_v1';
const now=Date.now(),first=Number(localStorage.getItem(firstVisitKey)||0);
if(!first){localStorage.setItem(firstVisitKey,String(now))}
else if(now-first>=30*24*60*60*1000&&!localStorage.getItem(dismissKey)){
  const box=document.getElementById('ratingNote');if(box)box.classList.add('show');
}
document.getElementById('closeRating')?.addEventListener('click',()=>{document.getElementById('ratingNote').classList.remove('show');localStorage.setItem(dismissKey,'1')});
