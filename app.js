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
rectangle.beginFill(0xDE3249);
rectangle.lineStyle(4, 0xFFFFFF, 1);
rectangle.drawRect(50, 50, 100, 100);
rectangle.endFill();

app.stage.addChild(rectangle);