const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: true,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight)

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
    rectangle.beginFill(0xDE3249)
    .lineStyle(4, 0xFFFFFF, 1)
    .drawRect(50, 50, 100, 100)
    .endFill();

const poly = new Graphics();
    poly.beginFill(0x650A5A)
    .drawPolygon([
        600, 50,
        800, 150,
        750, 350,
        450, 350
    ])

const circle = new Graphics();
    circle.beginFill(0xFEEB77)
    .drawCircle(300, 300, 100)
    .endFill();

const style = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 48,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 10,
    dropShadow: true,
    dropShadowDistance: 6,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 6,
    dropShadowColor: '#000000'
})

const myText= new PIXI.Text('Intro to Programming', style);

app.stage.addChild(myText);
app.stage.addChild(circle);
app.stage.addChild(poly);
app.stage.addChild(rectangle);