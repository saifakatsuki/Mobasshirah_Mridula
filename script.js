// Scroll reveal for gallery items
const gridItems = document.querySelectorAll('.grid-item');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  gridItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < trigger){ 
      item.style.opacity = 1; 
      item.style.transform = 'translateY(0)'; 
    }
  });
});

// Particle Background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle{
  constructor(){
    this.x=Math.random()*canvas.width;
    this.y=Math.random()*canvas.height;
    this.radius=Math.random()*3+1;
    this.speedX=(Math.random()-0.5)*1;
    this.speedY=(Math.random()-0.5)*1;
    this.color=`rgba(255,255,255,${Math.random()})`;
  }
  update(){
    this.x+=this.speedX; this.y+=this.speedY;
    if(this.x<0||this.x>canvas.width) this.speedX*=-1;
    if(this.y<0||this.y>canvas.height) this.speedY*=-1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
}

let particles=[];
for(let i=0;i<150;i++) particles.push(new Particle());
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update(); p.draw();});
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize',()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
