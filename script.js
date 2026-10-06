

// Smooth Scroll Implementation
(function () {
  function initSmoothScroll() {
    var btn = document.getElementById('irScrollBtn') || document.querySelector('.ir-scroll-btn');
    if (!btn) return;
    btn.onclick = function (e) {
      e.preventDefault();
      var target = document.getElementById('next-section');
      if (!target) return;
      var targetY = target.getBoundingClientRect().top + window.pageYOffset;
      var startY = window.pageYOffset;
      var distance = targetY - startY;
      var duration = 1250;
      var startTime = null;
      function step(now) {
        if (!startTime) startTime = now;
        var elapsed = now - startTime;
        var t = Math.min(elapsed / duration, 1);
        var ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        window.scrollTo(0, startY + (distance * ease));
        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetY);
        }
      }
      window.requestAnimationFrame(step);
    };
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const mobileBtn = document.querySelector('.ir-mobile-btn');
  const header = document.querySelector('.ir-header');

  if (mobileBtn && header) {
    mobileBtn.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
  }

  // Mobile Dropdown Accordion Toggle
  const dropdownToggles = document.querySelectorAll('.ir-dropdown-toggle');
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = this.closest('.ir-dropdown');
        if (parent) parent.classList.toggle('dropdown-open');
      }
    });
  });
});


// Unified Sticky Section Logic (V4)
function initStickySection(secId,stateIds,bulletIdsByState){var sec=document.getElementById(secId);if(!sec)return;var states=stateIds.map(function(id){return document.getElementById(id);});var bulletEls=bulletIdsByState.map(function(bList){return bList.map(function(id){return document.getElementById(id);});});var N=states.length;if(N<2)return;var slot=1.0/N;var trans=slot*0.25;function onScroll(){var header=document.querySelector('.ir-header');var stickyTop=header?header.offsetHeight:76;var r=sec.getBoundingClientRect();var h=sec.offsetHeight-(window.innerHeight-stickyTop);if(h<=0)return;var p=Math.max(0,Math.min(1,(stickyTop-r.top)/h));var topHeader=sec.querySelector('.ir-sec-top-header');if(topHeader){var distToPin=r.top-stickyTop;var titleProg=1.0;if(distToPin>0){titleProg=Math.max(0.0,1.0-(distToPin/(window.innerHeight*0.25)));}topHeader.style.opacity=titleProg;topHeader.style.transform='translateY('+(16*(1.0-titleProg))+'px)';}for(var i=0;i<N;i++){var start_slot=i*slot;var end_slot=(i+1)*slot;var fade_in=1.0;var in_trans=0.0;if(i>0){var in_start=start_slot-trans*0.5;var in_end=start_slot+trans*0.5;if(p<=in_start){fade_in=0.0;}else if(p>=in_end){fade_in=1.0;}else{fade_in=(p-in_start)/(in_end-in_start);}in_trans=20*(1.0-fade_in);}var fade_out=1.0;var out_trans=0.0;if(i<N-1){var out_start=end_slot-trans*0.5;var out_end=end_slot+trans*0.5;if(p<=out_start){fade_out=1.0;}else if(p>=out_end){fade_out=0.0;}else{fade_out=1.0-(p-out_start)/(out_end-out_start);}out_trans=-20*(1.0-fade_out);}var op=Math.min(fade_in,fade_out);var ty=fade_in<1.0?in_trans:(fade_out<1.0?out_trans:0.0);var sc=(i===N-1)?(0.97+0.03*fade_in):1.0;if(states[i]){states[i].style.opacity=op;states[i].style.transform='translateY('+ty+'px) scale('+sc+')';states[i].style.pointerEvents=op>0.1?'auto':'none';}var bEls=bulletEls[i];if(bEls&&bEls.length>0){var totalB=bEls.length;for(var b=0;b<totalB;b++){var bStart=(i===0?0.02:i*slot)+b*(slot*0.35/totalB);var bProg=Math.max(0,Math.min(1,(p-bStart)/(slot*0.2)));if(bEls[b]){bEls[b].style.opacity=bProg;bEls[b].style.transform='translateY('+(16*(1.0-bProg))+'px)';}}}}}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll,{passive:true});onScroll();}

function initV4Logic() {
  initStickySection('what-we-offer',['wwo_s1','wwo_s2','wwo_s3','wwo_s4'],[['wwo_l0','wwo_l1','wwo_l2','wwo_l3','wwo_l4','wwo_c1','wwo_c2','wwo_c3'],['wwo_s2_c','wwo_s2_hd','wwo_s2_ln','wwo_b2_1','wwo_b2_2','wwo_b2_3','wwo_b2_4'],['wwo_s3_c','wwo_s3_hd','wwo_s3_ln','wwo_b3_1','wwo_b3_2','wwo_b3_3','wwo_b3_4'],['wwo_s4_c','wwo_s4_hd','wwo_s4_ln','wwo_b4_1','wwo_b4_2','wwo_b4_3']]);
  initStickySection('our-team',['team_s1','team_s2','team_s3'],[['team_s1_c','team_s1_hd','team_s1_ln','team_b1_1','team_b1_2','team_b1_3','team_b1_4','team_b1_5','team_b1_6'],['team_s2_c','team_s2_hd','team_s2_ln','team_b2_1','team_b2_2','team_b2_3','team_b2_4'],[]]);
  initStickySection('investment-methodology',['meth_s1','meth_s2','meth_s3','meth_s4'],[['meth_s1_c','meth_s1_hd','meth_s1_ln','meth_b1_1','meth_b1_2','meth_b1_3','meth_b1_4'],['meth_s2_c','meth_s2_hd','meth_s2_ln','meth_b2_1','meth_b2_2','meth_b2_3','meth_b2_4'],['meth_s3_c','meth_s3_hd','meth_s3_ln','meth_b3_1','meth_b3_2','meth_b3_3','meth_b3_4'],[]]);
  
  var connectBtn=document.getElementById('irConnectBtn');
  var modal=document.getElementById('irContactModal');
  var closeBtn=document.getElementById('irModalClose');
  if(connectBtn&&modal){connectBtn.addEventListener('click',function(e){e.preventDefault();modal.classList.add('is-open');});}
  if(closeBtn&&modal){closeBtn.addEventListener('click',function(){modal.classList.remove('is-open');});}
  if(modal){modal.addEventListener('click',function(e){if(e.target===modal){modal.classList.remove('is-open');}});}
  
  var form=document.getElementById('irLeadForm');
  var successBox=document.getElementById('irFormSuccess');
  var successClose=document.getElementById('irSuccessCloseBtn');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();if(successBox){successBox.style.display='block';}form.style.display='none';});}
  if(successClose&&modal){successClose.addEventListener('click',function(){modal.classList.remove('is-open');});}
}

initV4Logic();