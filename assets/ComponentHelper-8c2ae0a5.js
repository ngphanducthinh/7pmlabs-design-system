const p=(e,t,n)=>{r(e,t,n),h(e,t,n),document.body.append(t)},r=(e,t,n)=>{const d=window.innerWidth,o=n?0:window.scrollX,i=e.getBoundingClientRect().left+o,c=e.getBoundingClientRect().width,l=t.getBoundingClientRect().left+o,s=t.getBoundingClientRect().width;l+s<=d+o?t.style.left=`${i}px`:t.style.left=`${i-s+c}px`},h=(e,t,n)=>{const d=window.innerHeight,o=n?0:window.scrollY,i=e.getBoundingClientRect().top+o,c=e.getBoundingClientRect().height,l=t.getBoundingClientRect().top+o,s=t.getBoundingClientRect().height;l+s<=d+o?t.style.top=`${i+c}px`:t.style.top=`${i-s}px`},u=(e,t)=>{t.style.top="",t.style.right="",t.style.bottom="",t.style.left="",e.append(t)},b=()=>{setTimeout(()=>{document.body.dataset.scrollLocked="";const e=y();e&&(document.body.style.paddingRight=`${e}px`),document.body.style.overflow="hidden"},100)},w=()=>{document.body.removeAttribute("data-scroll-locked"),document.body.style.paddingRight="",document.body.style.overflow=""},y=()=>window.innerWidth-document.documentElement.clientWidth;export{h as a,p as e,b as l,u as r,w as u};
