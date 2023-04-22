function setup() {
  createCanvas(800, 800);
}

function draw() {
  h=hour();
  m=minute();
  s=second();
  print(h,m,s);
  
  background(0);
my_rect(400,400,200,5,s*6-90,color(0,0,255));
my_rect(400,400,200,20,m*6-90,color(255,0,0));
my_rect(400,400,100,15,h*30-90,color(0,255,0));
  ellipse(400,400,30,30)
}

function my_rect(x,y,w,h,d,c){
push();
  fill(c);
translate(x,y);
  rotate(radians(d));
rect(0,-h/2,w,h);
pop();
}