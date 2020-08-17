// create a texture from an image path

var coords, coords2, coords3, coords4, coords5, coords6, coords7, coords8, coords9, coords10 , coords11 , coords12 , coords13 , coords14 , coords15 , coords16 , coords17 , coords18 , coords19 , coords20 , coords21 , coords22 , coords23 , coords24 , coords25 , coords26 , coords27 , coords28 , coords29 , coords30 , coords31 , coords32 , coords33 , coords34 , coords35 , coords36 , coords37 , coords38 , coords39 , coords40 , coords41 , coords42 , coords43 , coords44 , coords45 , coords46 , coords47 , coords48 , coords49 , coords50 , coords51 , coords52 , coords53 , coords54 , coords55 , coords56 , coords57 , coords58 , coords59 , coords60 , coords61 , coords62 , coords63 , coords64 , coords65 , coords66 , coords67 , coords68 , coords69 , coords70 , coords71 , coords72 , coords73 , coords74 , coords75 , coords76 , coords77 , coords78 , coords79 , coords80 , coords81 , coords82 , coords83 , coords84 , coords85 , coords86 , coords87 , coords88 , coords89 , coords90 , coords91 , coords92 , coords93 , coords94 , coords95 , coords96 , coords97 , coords98 , coords99 , coords100 , coords101 , coords102 , coords103 , coords104 , coords105 , coords106 , coords107 , coords108 , coords109 , coords110 , coords111 , coords112 , coords113 , coords114 , coords115 , coords116 , coords117 , coords118 , coords119 , coords120 , coords121 , coords122 , coords123 , coords124 , coords125 , coords126 , coords127 , coords128 , coords129 , coords130 , coords131 , coords132 , coords133 , coords134 , coords135 , coords136 , coords137 , coords138 , coords139 , coords140 , coords141 , coords142 , coords143 , coords144 ;


//place all cards in one array
var imgHolder = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10 , card11 , card12 , card13 , card14 , card15 , card16 , card17 , card18 , card19 , card20 , card21 , card22 , card23 , card24 , card25 , card26 , card27 , card28 , card29 , card30 , card31 , card32 , card33 , card34 , card35 , card36 , card37 , card38 , card39 , card40 , card41 , card42 , card43 , card44 , card45 , card46 , card47 , card48 , card49 , card50 , card51 , card52 , card53 , card54 , card55 , card56 , card57 , card58 , card59 , card60 , card61 , card62 , card63 , card64 , card65 , card66 , card67 , card68 , card69 , card70 , card71 , card72 , card73 , card74 , card75 , card76 , card77 , card78 , card79 , card80 , card81 , card82 , card83 , card84 , card85 , card86 , card87 , card88 , card89 , card90 , card91 , card92 , card93 , card94 , card95 , card96 , card97 , card98 , card99 , card100 , card101 , card102 , card103 , card104 , card105 , card106 , card107 , card108 , card109 , card110 , card111 , card112 , card113 , card114 , card115 , card116 , card117 , card118 , card119 , card120 , card121 , card122 , card123 , card124 , card125 , card126 , card127 , card128 , card129 , card130 , card131 , card132 , card133 , card134 , card135 , card136 , card137 , card138 , card139 , card140 , card141 , card142 , card143 , card144 ];
//reversed for layering purposes 
imgHolder.reverse();

console.log(app);
var tweenDuration = 2000
var tweenDelay = 3000
var destX = app.screen.width / 1.8;
var rNum = 0;

//tween code
function init() {
console.log(card23);
coords = { x: card1.x, y: card1.y };
tween = new TWEEN.Tween(coords)
  .to({ x: destX, y: posY }, tweenDuration)
  .onUpdate(function() {
    card1.position.set(coords.x, coords.y);
  }).start();
tween.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card2), 1)[0]);
});
coords2 = { x: card2.x, y: card2.y };
tween2 = new TWEEN.Tween(coords2)
  .to({ x: destX + rngPos[rNum], y: card2.y }, tweenDuration)
  .onUpdate(function() {
    card2.position.set(coords2.x, coords2.y);
  }).delay(tweenDelay);
  tween2.start();
tween2.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card3), 1)[0]);
    rNum++;
});
coords3 = { x: card3.x, y: card3.y };
tween3 = new TWEEN.Tween(coords3)
  .to({ x: destX + rngPos[rNum], y: card3.y }, tweenDuration)
  .onUpdate(function() {
    card3.position.set(coords3.x, coords3.y);
  }).delay(tweenDelay*2);
  tween3.start();
tween3.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card4), 1)[0]);
    rNum++;
});
coords4 = { x: card4.x, y: card4.y };
tween4 = new TWEEN.Tween(coords4)
  .to({ x: destX + rngPos[rNum], y: card4.y }, tweenDuration)
  .onUpdate(function() {
    card4.position.set(coords4.x, coords4.y);
  }).delay(tweenDelay*3);
  tween4.start();
tween4.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card5), 1)[0]);
    rNum++;
});
coords5 = { x: card5.x, y: card5.y };
tween5 = new TWEEN.Tween(coords5)
  .to({ x: destX + rngPos[rNum], y: card5.y }, tweenDuration)
  .onUpdate(function() {
    card5.position.set(coords5.x, coords5.y);
  }).delay(tweenDelay*4);
  tween5.start();
tween5.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card6), 1)[0]);
    rNum++;
});
coords6 = { x: card6.x, y: card6.y };
tween6 = new TWEEN.Tween(coords6)
  .to({ x: destX + rngPos[rNum], y: card6.y }, tweenDuration)
  .onUpdate(function() {
    card6.position.set(coords6.x, coords6.y);
  }).delay(tweenDelay*5);
  tween6.start();
tween6.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card7), 1)[0]);
    rNum++;
});

coords7 = { x: card7.x, y: card7.y };
tween7 = new TWEEN.Tween(coords7)
  .to({ x: destX + rngPos[rNum], y: card7.y }, tweenDuration)
  .onUpdate(function() {
    card7.position.set(coords7.x, coords7.y);
  }).delay(tweenDelay*6);
  tween7.start();
tween7.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card8), 1)[0]);
    rNum++;
});
coords8 = { x: card8.x, y: card8.y };
tween8 = new TWEEN.Tween(coords8)
  .to({ x: destX + rngPos[rNum], y: card8.y }, tweenDuration)
  .onUpdate(function() {
    card8.position.set(coords8.x, coords8.y);
  }).delay(tweenDelay*7);
  tween8.start();
tween8.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card9), 1)[0]);
    rNum++;
});
coords9 = { x: card9.x, y: card9.y };
tween9 = new TWEEN.Tween(coords9)
  .to({ x: destX + rngPos[rNum], y: card9.y }, tweenDuration)
  .onUpdate(function() {
    card9.position.set(coords9.x, coords9.y);
  }).delay(tweenDelay*8);
  tween9.start();
tween9.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card10), 1)[0]);
    rNum++;
});
coords10 = { x: card10.x, y: card10.y };
tween10 = new TWEEN.Tween(coords10)
 .to({ x: destX + rngPos[rNum], y: card10.y }, tweenDuration)
 .onUpdate(function() {
     card10.position.set(coords10.x, coords10.y);
 }).delay(tweenDelay * (10-1));
tween10.start();
tween10.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card11), 1)[0]);
    rNum++;
});
coords11 = { x: card11.x, y: card11.y };
tween11 = new TWEEN.Tween(coords11)
 .to({ x: destX + rngPos[rNum], y: card11.y }, tweenDuration)
 .onUpdate(function() {
     card11.position.set(coords11.x, coords11.y);
 }).delay(tweenDelay * (11-1));
tween11.start();
tween11.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card12), 1)[0]);
    rNum++;
});
coords12 = { x: card12.x, y: card12.y };
tween12 = new TWEEN.Tween(coords12)
 .to({ x: destX + rngPos[rNum], y: card12.y }, tweenDuration)
 .onUpdate(function() {
     card12.position.set(coords12.x, coords12.y);
 }).delay(tweenDelay * (12-1));
tween12.start();
tween12.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card13), 1)[0]);
    rNum++;
});

coords13 = { x: card13.x, y: card13.y };
tween13 = new TWEEN.Tween(coords13)
 .to({ x: destX + rngPos[rNum], y: card13.y }, tweenDuration)
 .onUpdate(function() {
     card13.position.set(coords13.x, coords13.y);
 }).delay(tweenDelay * (13-1));
tween13.start();
tween13.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card14), 1)[0]);
    rNum++;
});


coords14 = { x: card14.x, y: card14.y };
tween14 = new TWEEN.Tween(coords14)
 .to({ x: destX + rngPos[rNum], y: card14.y }, tweenDuration)
 .onUpdate(function() {
     card14.position.set(coords14.x, coords14.y);
 }).delay(tweenDelay * (14-1));
tween14.start();
tween14.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card15), 1)[0]);
    rNum++;
});


coords15 = { x: card15.x, y: card15.y };
tween15 = new TWEEN.Tween(coords15)
 .to({ x: destX + rngPos[rNum], y: card15.y }, tweenDuration)
 .onUpdate(function() {
     card15.position.set(coords15.x, coords15.y);
 }).delay(tweenDelay * (15-1));
tween15.start();
tween15.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card16), 1)[0]);
    rNum++;
});


coords16 = { x: card16.x, y: card16.y };
tween16 = new TWEEN.Tween(coords16)
 .to({ x: destX + rngPos[rNum], y: card16.y }, tweenDuration)
 .onUpdate(function() {
     card16.position.set(coords16.x, coords16.y);
 }).delay(tweenDelay * (16-1));
tween16.start();
tween16.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card17), 1)[0]);
    rNum++;
});


coords17 = { x: card17.x, y: card17.y };
tween17 = new TWEEN.Tween(coords17)
 .to({ x: destX + rngPos[rNum], y: card17.y }, tweenDuration)
 .onUpdate(function() {
     card17.position.set(coords17.x, coords17.y);
 }).delay(tweenDelay * (17-1));
tween17.start();
tween17.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card18), 1)[0]);
    rNum++;
});


coords18 = { x: card18.x, y: card18.y };
tween18 = new TWEEN.Tween(coords18)
 .to({ x: destX + rngPos[rNum], y: card18.y }, tweenDuration)
 .onUpdate(function() {
     card18.position.set(coords18.x, coords18.y);
 }).delay(tweenDelay * (18-1));
tween18.start();
tween18.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card19), 1)[0]);
    rNum++;
});


coords19 = { x: card19.x, y: card19.y };
tween19 = new TWEEN.Tween(coords19)
 .to({ x: destX + rngPos[rNum], y: card19.y }, tweenDuration)
 .onUpdate(function() {
     card19.position.set(coords19.x, coords19.y);
 }).delay(tweenDelay * (19-1));
tween19.start();
tween19.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card20), 1)[0]);
    rNum++;
});


coords20 = { x: card20.x, y: card20.y };
tween20 = new TWEEN.Tween(coords20)
 .to({ x: destX + rngPos[rNum], y: card20.y }, tweenDuration)
 .onUpdate(function() {
     card20.position.set(coords20.x, coords20.y);
 }).delay(tweenDelay * (20-1));
tween20.start();
tween20.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card21), 1)[0]);
    rNum++;
});


coords21 = { x: card21.x, y: card21.y };
tween21 = new TWEEN.Tween(coords21)
 .to({ x: destX + rngPos[rNum], y: card21.y }, tweenDuration)
 .onUpdate(function() {
     card21.position.set(coords21.x, coords21.y);
 }).delay(tweenDelay * (21-1));
tween21.start();
tween21.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card22), 1)[0]);
    rNum++;
});


coords22 = { x: card22.x, y: card22.y };
tween22 = new TWEEN.Tween(coords22)
 .to({ x: destX + rngPos[rNum], y: card22.y }, tweenDuration)
 .onUpdate(function() {
     card22.position.set(coords22.x, coords22.y);
 }).delay(tweenDelay * (22-1));
tween22.start();
tween22.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card23), 1)[0]);
    rNum++;
});


coords23 = { x: card23.x, y: card23.y };
tween23 = new TWEEN.Tween(coords23)
 .to({ x: destX + rngPos[rNum], y: card23.y }, tweenDuration)
 .onUpdate(function() {
     card23.position.set(coords23.x, coords23.y);
 }).delay(tweenDelay * (23-1));
tween23.start();
tween23.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card24), 1)[0]);
    rNum++;
});


coords24 = { x: card24.x, y: card24.y };
tween24 = new TWEEN.Tween(coords24)
 .to({ x: destX + rngPos[rNum], y: card24.y }, tweenDuration)
 .onUpdate(function() {
     card24.position.set(coords24.x, coords24.y);
 }).delay(tweenDelay * (24-1));
tween24.start();
tween24.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card25), 1)[0]);
    rNum++;
});


coords25 = { x: card25.x, y: card25.y };
tween25 = new TWEEN.Tween(coords25)
 .to({ x: destX + rngPos[rNum], y: card25.y }, tweenDuration)
 .onUpdate(function() {
     card25.position.set(coords25.x, coords25.y);
 }).delay(tweenDelay * (25-1));
tween25.start();
tween25.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card26), 1)[0]);
    rNum++;
});


coords26 = { x: card26.x, y: card26.y };
tween26 = new TWEEN.Tween(coords26)
 .to({ x: destX + rngPos[rNum], y: card26.y }, tweenDuration)
 .onUpdate(function() {
     card26.position.set(coords26.x, coords26.y);
 }).delay(tweenDelay * (26-1));
tween26.start();
tween26.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card27), 1)[0]);
    rNum++;
});


coords27 = { x: card27.x, y: card27.y };
tween27 = new TWEEN.Tween(coords27)
 .to({ x: destX + rngPos[rNum], y: card27.y }, tweenDuration)
 .onUpdate(function() {
     card27.position.set(coords27.x, coords27.y);
 }).delay(tweenDelay * (27-1));
tween27.start();
tween27.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card28), 1)[0]);
    rNum++;
});


coords28 = { x: card28.x, y: card28.y };
tween28 = new TWEEN.Tween(coords28)
 .to({ x: destX + rngPos[rNum], y: card28.y }, tweenDuration)
 .onUpdate(function() {
     card28.position.set(coords28.x, coords28.y);
 }).delay(tweenDelay * (28-1));
tween28.start();
tween28.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card29), 1)[0]);
    rNum++;
});


coords29 = { x: card29.x, y: card29.y };
tween29 = new TWEEN.Tween(coords29)
 .to({ x: destX + rngPos[rNum], y: card29.y }, tweenDuration)
 .onUpdate(function() {
     card29.position.set(coords29.x, coords29.y);
 }).delay(tweenDelay * (29-1));
tween29.start();
tween29.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card30), 1)[0]);
    rNum++;
});


coords30 = { x: card30.x, y: card30.y };
tween30 = new TWEEN.Tween(coords30)
 .to({ x: destX + rngPos[rNum], y: card30.y }, tweenDuration)
 .onUpdate(function() {
     card30.position.set(coords30.x, coords30.y);
 }).delay(tweenDelay * (30-1));
tween30.start();
tween30.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card31), 1)[0]);
    rNum++;
});


coords31 = { x: card31.x, y: card31.y };
tween31 = new TWEEN.Tween(coords31)
 .to({ x: destX + rngPos[rNum], y: card31.y }, tweenDuration)
 .onUpdate(function() {
     card31.position.set(coords31.x, coords31.y);
 }).delay(tweenDelay * (31-1));
tween31.start();
tween31.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card32), 1)[0]);
    rNum++;
});


coords32 = { x: card32.x, y: card32.y };
tween32 = new TWEEN.Tween(coords32)
 .to({ x: destX + rngPos[rNum], y: card32.y }, tweenDuration)
 .onUpdate(function() {
     card32.position.set(coords32.x, coords32.y);
 }).delay(tweenDelay * (32-1));
tween32.start();
tween32.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card33), 1)[0]);
    rNum++;
});


coords33 = { x: card33.x, y: card33.y };
tween33 = new TWEEN.Tween(coords33)
 .to({ x: destX + rngPos[rNum], y: card33.y }, tweenDuration)
 .onUpdate(function() {
     card33.position.set(coords33.x, coords33.y);
 }).delay(tweenDelay * (33-1));
tween33.start();
tween33.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card34), 1)[0]);
    rNum++;
});


coords34 = { x: card34.x, y: card34.y };
tween34 = new TWEEN.Tween(coords34)
 .to({ x: destX + rngPos[rNum], y: card34.y }, tweenDuration)
 .onUpdate(function() {
     card34.position.set(coords34.x, coords34.y);
 }).delay(tweenDelay * (34-1));
tween34.start();
tween34.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card35), 1)[0]);
    rNum++;
});


coords35 = { x: card35.x, y: card35.y };
tween35 = new TWEEN.Tween(coords35)
 .to({ x: destX + rngPos[rNum], y: card35.y }, tweenDuration)
 .onUpdate(function() {
     card35.position.set(coords35.x, coords35.y);
 }).delay(tweenDelay * (35-1));
tween35.start();
tween35.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card36), 1)[0]);
    rNum++;
});


coords36 = { x: card36.x, y: card36.y };
tween36 = new TWEEN.Tween(coords36)
 .to({ x: destX + rngPos[rNum], y: card36.y }, tweenDuration)
 .onUpdate(function() {
     card36.position.set(coords36.x, coords36.y);
 }).delay(tweenDelay * (36-1));
tween36.start();
tween36.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card37), 1)[0]);
    rNum++;
});


coords37 = { x: card37.x, y: card37.y };
tween37 = new TWEEN.Tween(coords37)
 .to({ x: destX + rngPos[rNum], y: card37.y }, tweenDuration)
 .onUpdate(function() {
     card37.position.set(coords37.x, coords37.y);
 }).delay(tweenDelay * (37-1));
tween37.start();
tween37.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card38), 1)[0]);
    rNum++;
});


coords38 = { x: card38.x, y: card38.y };
tween38 = new TWEEN.Tween(coords38)
 .to({ x: destX + rngPos[rNum], y: card38.y }, tweenDuration)
 .onUpdate(function() {
     card38.position.set(coords38.x, coords38.y);
 }).delay(tweenDelay * (38-1));
tween38.start();
tween38.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card39), 1)[0]);
    rNum++;
});


coords39 = { x: card39.x, y: card39.y };
tween39 = new TWEEN.Tween(coords39)
 .to({ x: destX + rngPos[rNum], y: card39.y }, tweenDuration)
 .onUpdate(function() {
     card39.position.set(coords39.x, coords39.y);
 }).delay(tweenDelay * (39-1));
tween39.start();
tween39.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card40), 1)[0]);
    rNum++;
});


coords40 = { x: card40.x, y: card40.y };
tween40 = new TWEEN.Tween(coords40)
 .to({ x: destX + rngPos[rNum], y: card40.y }, tweenDuration)
 .onUpdate(function() {
     card40.position.set(coords40.x, coords40.y);
 }).delay(tweenDelay * (40-1));
tween40.start();
tween40.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card41), 1)[0]);
    rNum++;
});


coords41 = { x: card41.x, y: card41.y };
tween41 = new TWEEN.Tween(coords41)
 .to({ x: destX + rngPos[rNum], y: card41.y }, tweenDuration)
 .onUpdate(function() {
     card41.position.set(coords41.x, coords41.y);
 }).delay(tweenDelay * (41-1));
tween41.start();
tween41.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card42), 1)[0]);
    rNum++;
});


coords42 = { x: card42.x, y: card42.y };
tween42 = new TWEEN.Tween(coords42)
 .to({ x: destX + rngPos[rNum], y: card42.y }, tweenDuration)
 .onUpdate(function() {
     card42.position.set(coords42.x, coords42.y);
 }).delay(tweenDelay * (42-1));
tween42.start();
tween42.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card43), 1)[0]);
    rNum++;
});


coords43 = { x: card43.x, y: card43.y };
tween43 = new TWEEN.Tween(coords43)
 .to({ x: destX + rngPos[rNum], y: card43.y }, tweenDuration)
 .onUpdate(function() {
     card43.position.set(coords43.x, coords43.y);
 }).delay(tweenDelay * (43-1));
tween43.start();
tween43.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card44), 1)[0]);
    rNum++;
});


coords44 = { x: card44.x, y: card44.y };
tween44 = new TWEEN.Tween(coords44)
 .to({ x: destX + rngPos[rNum], y: card44.y }, tweenDuration)
 .onUpdate(function() {
     card44.position.set(coords44.x, coords44.y);
 }).delay(tweenDelay * (44-1));
tween44.start();
tween44.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card45), 1)[0]);
    rNum++;
});


coords45 = { x: card45.x, y: card45.y };
tween45 = new TWEEN.Tween(coords45)
 .to({ x: destX + rngPos[rNum], y: card45.y }, tweenDuration)
 .onUpdate(function() {
     card45.position.set(coords45.x, coords45.y);
 }).delay(tweenDelay * (45-1));
tween45.start();
tween45.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card46), 1)[0]);
    rNum++;
});


coords46 = { x: card46.x, y: card46.y };
tween46 = new TWEEN.Tween(coords46)
 .to({ x: destX + rngPos[rNum], y: card46.y }, tweenDuration)
 .onUpdate(function() {
     card46.position.set(coords46.x, coords46.y);
 }).delay(tweenDelay * (46-1));
tween46.start();
tween46.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card47), 1)[0]);
    rNum++;
});


coords47 = { x: card47.x, y: card47.y };
tween47 = new TWEEN.Tween(coords47)
 .to({ x: destX + rngPos[rNum], y: card47.y }, tweenDuration)
 .onUpdate(function() {
     card47.position.set(coords47.x, coords47.y);
 }).delay(tweenDelay * (47-1));
tween47.start();
tween47.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card48), 1)[0]);
    rNum++;
});


coords48 = { x: card48.x, y: card48.y };
tween48 = new TWEEN.Tween(coords48)
 .to({ x: destX + rngPos[rNum], y: card48.y }, tweenDuration)
 .onUpdate(function() {
     card48.position.set(coords48.x, coords48.y);
 }).delay(tweenDelay * (48-1));
tween48.start();
tween48.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card49), 1)[0]);
    rNum++;
});


coords49 = { x: card49.x, y: card49.y };
tween49 = new TWEEN.Tween(coords49)
 .to({ x: destX + rngPos[rNum], y: card49.y }, tweenDuration)
 .onUpdate(function() {
     card49.position.set(coords49.x, coords49.y);
 }).delay(tweenDelay * (49-1));
tween49.start();
tween49.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card50), 1)[0]);
    rNum++;
});


coords50 = { x: card50.x, y: card50.y };
tween50 = new TWEEN.Tween(coords50)
 .to({ x: destX + rngPos[rNum], y: card50.y }, tweenDuration)
 .onUpdate(function() {
     card50.position.set(coords50.x, coords50.y);
 }).delay(tweenDelay * (50-1));
tween50.start();
tween50.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card51), 1)[0]);
    rNum++;
});


coords51 = { x: card51.x, y: card51.y };
tween51 = new TWEEN.Tween(coords51)
 .to({ x: destX + rngPos[rNum], y: card51.y }, tweenDuration)
 .onUpdate(function() {
     card51.position.set(coords51.x, coords51.y);
 }).delay(tweenDelay * (51-1));
tween51.start();
tween51.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card52), 1)[0]);
    rNum++;
});


coords52 = { x: card52.x, y: card52.y };
tween52 = new TWEEN.Tween(coords52)
 .to({ x: destX + rngPos[rNum], y: card52.y }, tweenDuration)
 .onUpdate(function() {
     card52.position.set(coords52.x, coords52.y);
 }).delay(tweenDelay * (52-1));
tween52.start();
tween52.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card53), 1)[0]);
    rNum++;
});


coords53 = { x: card53.x, y: card53.y };
tween53 = new TWEEN.Tween(coords53)
 .to({ x: destX + rngPos[rNum], y: card53.y }, tweenDuration)
 .onUpdate(function() {
     card53.position.set(coords53.x, coords53.y);
 }).delay(tweenDelay * (53-1));
tween53.start();
tween53.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card54), 1)[0]);
    rNum++;
});


coords54 = { x: card54.x, y: card54.y };
tween54 = new TWEEN.Tween(coords54)
 .to({ x: destX + rngPos[rNum], y: card54.y }, tweenDuration)
 .onUpdate(function() {
     card54.position.set(coords54.x, coords54.y);
 }).delay(tweenDelay * (54-1));
tween54.start();
tween54.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card55), 1)[0]);
    rNum++;
});


coords55 = { x: card55.x, y: card55.y };
tween55 = new TWEEN.Tween(coords55)
 .to({ x: destX + rngPos[rNum], y: card55.y }, tweenDuration)
 .onUpdate(function() {
     card55.position.set(coords55.x, coords55.y);
 }).delay(tweenDelay * (55-1));
tween55.start();
tween55.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card56), 1)[0]);
    rNum++;
});


coords56 = { x: card56.x, y: card56.y };
tween56 = new TWEEN.Tween(coords56)
 .to({ x: destX + rngPos[rNum], y: card56.y }, tweenDuration)
 .onUpdate(function() {
     card56.position.set(coords56.x, coords56.y);
 }).delay(tweenDelay * (56-1));
tween56.start();
tween56.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card57), 1)[0]);
    rNum++;
});


coords57 = { x: card57.x, y: card57.y };
tween57 = new TWEEN.Tween(coords57)
 .to({ x: destX + rngPos[rNum], y: card57.y }, tweenDuration)
 .onUpdate(function() {
     card57.position.set(coords57.x, coords57.y);
 }).delay(tweenDelay * (57-1));
tween57.start();
tween57.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card58), 1)[0]);
    rNum++;
});


coords58 = { x: card58.x, y: card58.y };
tween58 = new TWEEN.Tween(coords58)
 .to({ x: destX + rngPos[rNum], y: card58.y }, tweenDuration)
 .onUpdate(function() {
     card58.position.set(coords58.x, coords58.y);
 }).delay(tweenDelay * (58-1));
tween58.start();
tween58.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card59), 1)[0]);
    rNum++;
});


coords59 = { x: card59.x, y: card59.y };
tween59 = new TWEEN.Tween(coords59)
 .to({ x: destX + rngPos[rNum], y: card59.y }, tweenDuration)
 .onUpdate(function() {
     card59.position.set(coords59.x, coords59.y);
 }).delay(tweenDelay * (59-1));
tween59.start();
tween59.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card60), 1)[0]);
    rNum++;
});


coords60 = { x: card60.x, y: card60.y };
tween60 = new TWEEN.Tween(coords60)
 .to({ x: destX + rngPos[rNum], y: card60.y }, tweenDuration)
 .onUpdate(function() {
     card60.position.set(coords60.x, coords60.y);
 }).delay(tweenDelay * (60-1));
tween60.start();
tween60.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card61), 1)[0]);
    rNum++;
});


coords61 = { x: card61.x, y: card61.y };
tween61 = new TWEEN.Tween(coords61)
 .to({ x: destX + rngPos[rNum], y: card61.y }, tweenDuration)
 .onUpdate(function() {
     card61.position.set(coords61.x, coords61.y);
 }).delay(tweenDelay * (61-1));
tween61.start();
tween61.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card62), 1)[0]);
    rNum++;
});


coords62 = { x: card62.x, y: card62.y };
tween62 = new TWEEN.Tween(coords62)
 .to({ x: destX + rngPos[rNum], y: card62.y }, tweenDuration)
 .onUpdate(function() {
     card62.position.set(coords62.x, coords62.y);
 }).delay(tweenDelay * (62-1));
tween62.start();
tween62.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card63), 1)[0]);
    rNum++;
});


coords63 = { x: card63.x, y: card63.y };
tween63 = new TWEEN.Tween(coords63)
 .to({ x: destX + rngPos[rNum], y: card63.y }, tweenDuration)
 .onUpdate(function() {
     card63.position.set(coords63.x, coords63.y);
 }).delay(tweenDelay * (63-1));
tween63.start();
tween63.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card64), 1)[0]);
    rNum++;
});


coords64 = { x: card64.x, y: card64.y };
tween64 = new TWEEN.Tween(coords64)
 .to({ x: destX + rngPos[rNum], y: card64.y }, tweenDuration)
 .onUpdate(function() {
     card64.position.set(coords64.x, coords64.y);
 }).delay(tweenDelay * (64-1));
tween64.start();
tween64.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card65), 1)[0]);
    rNum++;
});


coords65 = { x: card65.x, y: card65.y };
tween65 = new TWEEN.Tween(coords65)
 .to({ x: destX + rngPos[rNum], y: card65.y }, tweenDuration)
 .onUpdate(function() {
     card65.position.set(coords65.x, coords65.y);
 }).delay(tweenDelay * (65-1));
tween65.start();
tween65.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card66), 1)[0]);
    rNum++;
});


coords66 = { x: card66.x, y: card66.y };
tween66 = new TWEEN.Tween(coords66)
 .to({ x: destX + rngPos[rNum], y: card66.y }, tweenDuration)
 .onUpdate(function() {
     card66.position.set(coords66.x, coords66.y);
 }).delay(tweenDelay * (66-1));
tween66.start();
tween66.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card67), 1)[0]);
    rNum++;
});


coords67 = { x: card67.x, y: card67.y };
tween67 = new TWEEN.Tween(coords67)
 .to({ x: destX + rngPos[rNum], y: card67.y }, tweenDuration)
 .onUpdate(function() {
     card67.position.set(coords67.x, coords67.y);
 }).delay(tweenDelay * (67-1));
tween67.start();
tween67.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card68), 1)[0]);
    rNum++;
});


coords68 = { x: card68.x, y: card68.y };
tween68 = new TWEEN.Tween(coords68)
 .to({ x: destX + rngPos[rNum], y: card68.y }, tweenDuration)
 .onUpdate(function() {
     card68.position.set(coords68.x, coords68.y);
 }).delay(tweenDelay * (68-1));
tween68.start();
tween68.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card69), 1)[0]);
    rNum++;
});


coords69 = { x: card69.x, y: card69.y };
tween69 = new TWEEN.Tween(coords69)
 .to({ x: destX + rngPos[rNum], y: card69.y }, tweenDuration)
 .onUpdate(function() {
     card69.position.set(coords69.x, coords69.y);
 }).delay(tweenDelay * (69-1));
tween69.start();
tween69.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card70), 1)[0]);
    rNum++;
});


coords70 = { x: card70.x, y: card70.y };
tween70 = new TWEEN.Tween(coords70)
 .to({ x: destX + rngPos[rNum], y: card70.y }, tweenDuration)
 .onUpdate(function() {
     card70.position.set(coords70.x, coords70.y);
 }).delay(tweenDelay * (70-1));
tween70.start();
tween70.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card71), 1)[0]);
    rNum++;
});


coords71 = { x: card71.x, y: card71.y };
tween71 = new TWEEN.Tween(coords71)
 .to({ x: destX + rngPos[rNum], y: card71.y }, tweenDuration)
 .onUpdate(function() {
     card71.position.set(coords71.x, coords71.y);
 }).delay(tweenDelay * (71-1));
tween71.start();
tween71.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card72), 1)[0]);
    rNum++;
});


coords72 = { x: card72.x, y: card72.y };
tween72 = new TWEEN.Tween(coords72)
 .to({ x: destX + rngPos[rNum], y: card72.y }, tweenDuration)
 .onUpdate(function() {
     card72.position.set(coords72.x, coords72.y);
 }).delay(tweenDelay * (72-1));
tween72.start();
tween72.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card73), 1)[0]);
    rNum++;
});


coords73 = { x: card73.x, y: card73.y };
tween73 = new TWEEN.Tween(coords73)
 .to({ x: destX + rngPos[rNum], y: card73.y }, tweenDuration)
 .onUpdate(function() {
     card73.position.set(coords73.x, coords73.y);
 }).delay(tweenDelay * (73-1));
tween73.start();
tween73.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card74), 1)[0]);
    rNum++;
});


coords74 = { x: card74.x, y: card74.y };
tween74 = new TWEEN.Tween(coords74)
 .to({ x: destX + rngPos[rNum], y: card74.y }, tweenDuration)
 .onUpdate(function() {
     card74.position.set(coords74.x, coords74.y);
 }).delay(tweenDelay * (74-1));
tween74.start();
tween74.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card75), 1)[0]);
    rNum++;
});


coords75 = { x: card75.x, y: card75.y };
tween75 = new TWEEN.Tween(coords75)
 .to({ x: destX + rngPos[rNum], y: card75.y }, tweenDuration)
 .onUpdate(function() {
     card75.position.set(coords75.x, coords75.y);
 }).delay(tweenDelay * (75-1));
tween75.start();
tween75.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card76), 1)[0]);
    rNum++;
});


coords76 = { x: card76.x, y: card76.y };
tween76 = new TWEEN.Tween(coords76)
 .to({ x: destX + rngPos[rNum], y: card76.y }, tweenDuration)
 .onUpdate(function() {
     card76.position.set(coords76.x, coords76.y);
 }).delay(tweenDelay * (76-1));
tween76.start();
tween76.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card77), 1)[0]);
    rNum++;
});


coords77 = { x: card77.x, y: card77.y };
tween77 = new TWEEN.Tween(coords77)
 .to({ x: destX + rngPos[rNum], y: card77.y }, tweenDuration)
 .onUpdate(function() {
     card77.position.set(coords77.x, coords77.y);
 }).delay(tweenDelay * (77-1));
tween77.start();
tween77.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card78), 1)[0]);
    rNum++;
});


coords78 = { x: card78.x, y: card78.y };
tween78 = new TWEEN.Tween(coords78)
 .to({ x: destX + rngPos[rNum], y: card78.y }, tweenDuration)
 .onUpdate(function() {
     card78.position.set(coords78.x, coords78.y);
 }).delay(tweenDelay * (78-1));
tween78.start();
tween78.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card79), 1)[0]);
    rNum++;
});


coords79 = { x: card79.x, y: card79.y };
tween79 = new TWEEN.Tween(coords79)
 .to({ x: destX + rngPos[rNum], y: card79.y }, tweenDuration)
 .onUpdate(function() {
     card79.position.set(coords79.x, coords79.y);
 }).delay(tweenDelay * (79-1));
tween79.start();
tween79.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card80), 1)[0]);
    rNum++;
});


coords80 = { x: card80.x, y: card80.y };
tween80 = new TWEEN.Tween(coords80)
 .to({ x: destX + rngPos[rNum], y: card80.y }, tweenDuration)
 .onUpdate(function() {
     card80.position.set(coords80.x, coords80.y);
 }).delay(tweenDelay * (80-1));
tween80.start();
tween80.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card81), 1)[0]);
    rNum++;
});


coords81 = { x: card81.x, y: card81.y };
tween81 = new TWEEN.Tween(coords81)
 .to({ x: destX + rngPos[rNum], y: card81.y }, tweenDuration)
 .onUpdate(function() {
     card81.position.set(coords81.x, coords81.y);
 }).delay(tweenDelay * (81-1));
tween81.start();
tween81.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card82), 1)[0]);
    rNum++;
});


coords82 = { x: card82.x, y: card82.y };
tween82 = new TWEEN.Tween(coords82)
 .to({ x: destX + rngPos[rNum], y: card82.y }, tweenDuration)
 .onUpdate(function() {
     card82.position.set(coords82.x, coords82.y);
 }).delay(tweenDelay * (82-1));
tween82.start();
tween82.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card83), 1)[0]);
    rNum++;
});


coords83 = { x: card83.x, y: card83.y };
tween83 = new TWEEN.Tween(coords83)
 .to({ x: destX + rngPos[rNum], y: card83.y }, tweenDuration)
 .onUpdate(function() {
     card83.position.set(coords83.x, coords83.y);
 }).delay(tweenDelay * (83-1));
tween83.start();
tween83.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card84), 1)[0]);
    rNum++;
});


coords84 = { x: card84.x, y: card84.y };
tween84 = new TWEEN.Tween(coords84)
 .to({ x: destX + rngPos[rNum], y: card84.y }, tweenDuration)
 .onUpdate(function() {
     card84.position.set(coords84.x, coords84.y);
 }).delay(tweenDelay * (84-1));
tween84.start();
tween84.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card85), 1)[0]);
    rNum++;
});


coords85 = { x: card85.x, y: card85.y };
tween85 = new TWEEN.Tween(coords85)
 .to({ x: destX + rngPos[rNum], y: card85.y }, tweenDuration)
 .onUpdate(function() {
     card85.position.set(coords85.x, coords85.y);
 }).delay(tweenDelay * (85-1));
tween85.start();
tween85.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card86), 1)[0]);
    rNum++;
});


coords86 = { x: card86.x, y: card86.y };
tween86 = new TWEEN.Tween(coords86)
 .to({ x: destX + rngPos[rNum], y: card86.y }, tweenDuration)
 .onUpdate(function() {
     card86.position.set(coords86.x, coords86.y);
 }).delay(tweenDelay * (86-1));
tween86.start();
tween86.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card87), 1)[0]);
    rNum++;
});


coords87 = { x: card87.x, y: card87.y };
tween87 = new TWEEN.Tween(coords87)
 .to({ x: destX + rngPos[rNum], y: card87.y }, tweenDuration)
 .onUpdate(function() {
     card87.position.set(coords87.x, coords87.y);
 }).delay(tweenDelay * (87-1));
tween87.start();
tween87.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card88), 1)[0]);
    rNum++;
});


coords88 = { x: card88.x, y: card88.y };
tween88 = new TWEEN.Tween(coords88)
 .to({ x: destX + rngPos[rNum], y: card88.y }, tweenDuration)
 .onUpdate(function() {
     card88.position.set(coords88.x, coords88.y);
 }).delay(tweenDelay * (88-1));
tween88.start();
tween88.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card89), 1)[0]);
    rNum++;
});


coords89 = { x: card89.x, y: card89.y };
tween89 = new TWEEN.Tween(coords89)
 .to({ x: destX + rngPos[rNum], y: card89.y }, tweenDuration)
 .onUpdate(function() {
     card89.position.set(coords89.x, coords89.y);
 }).delay(tweenDelay * (89-1));
tween89.start();
tween89.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card90), 1)[0]);
    rNum++;
});


coords90 = { x: card90.x, y: card90.y };
tween90 = new TWEEN.Tween(coords90)
 .to({ x: destX + rngPos[rNum], y: card90.y }, tweenDuration)
 .onUpdate(function() {
     card90.position.set(coords90.x, coords90.y);
 }).delay(tweenDelay * (90-1));
tween90.start();
tween90.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card91), 1)[0]);
    rNum++;
});


coords91 = { x: card91.x, y: card91.y };
tween91 = new TWEEN.Tween(coords91)
 .to({ x: destX + rngPos[rNum], y: card91.y }, tweenDuration)
 .onUpdate(function() {
     card91.position.set(coords91.x, coords91.y);
 }).delay(tweenDelay * (91-1));
tween91.start();
tween91.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card92), 1)[0]);
    rNum++;
});


coords92 = { x: card92.x, y: card92.y };
tween92 = new TWEEN.Tween(coords92)
 .to({ x: destX + rngPos[rNum], y: card92.y }, tweenDuration)
 .onUpdate(function() {
     card92.position.set(coords92.x, coords92.y);
 }).delay(tweenDelay * (92-1));
tween92.start();
tween92.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card93), 1)[0]);
    rNum++;
});


coords93 = { x: card93.x, y: card93.y };
tween93 = new TWEEN.Tween(coords93)
 .to({ x: destX + rngPos[rNum], y: card93.y }, tweenDuration)
 .onUpdate(function() {
     card93.position.set(coords93.x, coords93.y);
 }).delay(tweenDelay * (93-1));
tween93.start();
tween93.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card94), 1)[0]);
    rNum++;
});


coords94 = { x: card94.x, y: card94.y };
tween94 = new TWEEN.Tween(coords94)
 .to({ x: destX + rngPos[rNum], y: card94.y }, tweenDuration)
 .onUpdate(function() {
     card94.position.set(coords94.x, coords94.y);
 }).delay(tweenDelay * (94-1));
tween94.start();
tween94.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card95), 1)[0]);
    rNum++;
});


coords95 = { x: card95.x, y: card95.y };
tween95 = new TWEEN.Tween(coords95)
 .to({ x: destX + rngPos[rNum], y: card95.y }, tweenDuration)
 .onUpdate(function() {
     card95.position.set(coords95.x, coords95.y);
 }).delay(tweenDelay * (95-1));
tween95.start();
tween95.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card96), 1)[0]);
    rNum++;
});


coords96 = { x: card96.x, y: card96.y };
tween96 = new TWEEN.Tween(coords96)
 .to({ x: destX + rngPos[rNum], y: card96.y }, tweenDuration)
 .onUpdate(function() {
     card96.position.set(coords96.x, coords96.y);
 }).delay(tweenDelay * (96-1));
tween96.start();
tween96.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card97), 1)[0]);
    rNum++;
});


coords97 = { x: card97.x, y: card97.y };
tween97 = new TWEEN.Tween(coords97)
 .to({ x: destX + rngPos[rNum], y: card97.y }, tweenDuration)
 .onUpdate(function() {
     card97.position.set(coords97.x, coords97.y);
 }).delay(tweenDelay * (97-1));
tween97.start();
tween97.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card98), 1)[0]);
    rNum++;
});


coords98 = { x: card98.x, y: card98.y };
tween98 = new TWEEN.Tween(coords98)
 .to({ x: destX + rngPos[rNum], y: card98.y }, tweenDuration)
 .onUpdate(function() {
     card98.position.set(coords98.x, coords98.y);
 }).delay(tweenDelay * (98-1));
tween98.start();
tween98.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card99), 1)[0]);
    rNum++;
});


coords99 = { x: card99.x, y: card99.y };
tween99 = new TWEEN.Tween(coords99)
 .to({ x: destX + rngPos[rNum], y: card99.y }, tweenDuration)
 .onUpdate(function() {
     card99.position.set(coords99.x, coords99.y);
 }).delay(tweenDelay * (99-1));
tween99.start();
tween99.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card100), 1)[0]);
    rNum++;
});


coords100 = { x: card100.x, y: card100.y };
tween100 = new TWEEN.Tween(coords100)
 .to({ x: destX + rngPos[rNum], y: card100.y }, tweenDuration)
 .onUpdate(function() {
     card100.position.set(coords100.x, coords100.y);
 }).delay(tweenDelay * (100-1));
tween100.start();
tween100.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card101), 1)[0]);
    rNum++;
});


coords101 = { x: card101.x, y: card101.y };
tween101 = new TWEEN.Tween(coords101)
 .to({ x: destX + rngPos[rNum], y: card101.y }, tweenDuration)
 .onUpdate(function() {
     card101.position.set(coords101.x, coords101.y);
 }).delay(tweenDelay * (101-1));
tween101.start();
tween101.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card102), 1)[0]);
    rNum++;
});


coords102 = { x: card102.x, y: card102.y };
tween102 = new TWEEN.Tween(coords102)
 .to({ x: destX + rngPos[rNum], y: card102.y }, tweenDuration)
 .onUpdate(function() {
     card102.position.set(coords102.x, coords102.y);
 }).delay(tweenDelay * (102-1));
tween102.start();
tween102.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card103), 1)[0]);
    rNum++;
});


coords103 = { x: card103.x, y: card103.y };
tween103 = new TWEEN.Tween(coords103)
 .to({ x: destX + rngPos[rNum], y: card103.y }, tweenDuration)
 .onUpdate(function() {
     card103.position.set(coords103.x, coords103.y);
 }).delay(tweenDelay * (103-1));
tween103.start();
tween103.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card104), 1)[0]);
    rNum++;
});


coords104 = { x: card104.x, y: card104.y };
tween104 = new TWEEN.Tween(coords104)
 .to({ x: destX + rngPos[rNum], y: card104.y }, tweenDuration)
 .onUpdate(function() {
     card104.position.set(coords104.x, coords104.y);
 }).delay(tweenDelay * (104-1));
tween104.start();
tween104.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card105), 1)[0]);
    rNum++;
});


coords105 = { x: card105.x, y: card105.y };
tween105 = new TWEEN.Tween(coords105)
 .to({ x: destX + rngPos[rNum], y: card105.y }, tweenDuration)
 .onUpdate(function() {
     card105.position.set(coords105.x, coords105.y);
 }).delay(tweenDelay * (105-1));
tween105.start();
tween105.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card106), 1)[0]);
    rNum++;
});


coords106 = { x: card106.x, y: card106.y };
tween106 = new TWEEN.Tween(coords106)
 .to({ x: destX + rngPos[rNum], y: card106.y }, tweenDuration)
 .onUpdate(function() {
     card106.position.set(coords106.x, coords106.y);
 }).delay(tweenDelay * (106-1));
tween106.start();
tween106.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card107), 1)[0]);
    rNum++;
});


coords107 = { x: card107.x, y: card107.y };
tween107 = new TWEEN.Tween(coords107)
 .to({ x: destX + rngPos[rNum], y: card107.y }, tweenDuration)
 .onUpdate(function() {
     card107.position.set(coords107.x, coords107.y);
 }).delay(tweenDelay * (107-1));
tween107.start();
tween107.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card108), 1)[0]);
    rNum++;
});


coords108 = { x: card108.x, y: card108.y };
tween108 = new TWEEN.Tween(coords108)
 .to({ x: destX + rngPos[rNum], y: card108.y }, tweenDuration)
 .onUpdate(function() {
     card108.position.set(coords108.x, coords108.y);
 }).delay(tweenDelay * (108-1));
tween108.start();
tween108.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card109), 1)[0]);
    rNum++;
});


coords109 = { x: card109.x, y: card109.y };
tween109 = new TWEEN.Tween(coords109)
 .to({ x: destX + rngPos[rNum], y: card109.y }, tweenDuration)
 .onUpdate(function() {
     card109.position.set(coords109.x, coords109.y);
 }).delay(tweenDelay * (109-1));
tween109.start();
tween109.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card110), 1)[0]);
    rNum++;
});


coords110 = { x: card110.x, y: card110.y };
tween110 = new TWEEN.Tween(coords110)
 .to({ x: destX + rngPos[rNum], y: card110.y }, tweenDuration)
 .onUpdate(function() {
     card110.position.set(coords110.x, coords110.y);
 }).delay(tweenDelay * (110-1));
tween110.start();
tween110.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card111), 1)[0]);
    rNum++;
});


coords111 = { x: card111.x, y: card111.y };
tween111 = new TWEEN.Tween(coords111)
 .to({ x: destX + rngPos[rNum], y: card111.y }, tweenDuration)
 .onUpdate(function() {
     card111.position.set(coords111.x, coords111.y);
 }).delay(tweenDelay * (111-1));
tween111.start();
tween111.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card112), 1)[0]);
    rNum++;
});


coords112 = { x: card112.x, y: card112.y };
tween112 = new TWEEN.Tween(coords112)
 .to({ x: destX + rngPos[rNum], y: card112.y }, tweenDuration)
 .onUpdate(function() {
     card112.position.set(coords112.x, coords112.y);
 }).delay(tweenDelay * (112-1));
tween112.start();
tween112.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card113), 1)[0]);
    rNum++;
});


coords113 = { x: card113.x, y: card113.y };
tween113 = new TWEEN.Tween(coords113)
 .to({ x: destX + rngPos[rNum], y: card113.y }, tweenDuration)
 .onUpdate(function() {
     card113.position.set(coords113.x, coords113.y);
 }).delay(tweenDelay * (113-1));
tween113.start();
tween113.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card114), 1)[0]);
    rNum++;
});


coords114 = { x: card114.x, y: card114.y };
tween114 = new TWEEN.Tween(coords114)
 .to({ x: destX + rngPos[rNum], y: card114.y }, tweenDuration)
 .onUpdate(function() {
     card114.position.set(coords114.x, coords114.y);
 }).delay(tweenDelay * (114-1));
tween114.start();
tween114.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card115), 1)[0]);
    rNum++;
});


coords115 = { x: card115.x, y: card115.y };
tween115 = new TWEEN.Tween(coords115)
 .to({ x: destX + rngPos[rNum], y: card115.y }, tweenDuration)
 .onUpdate(function() {
     card115.position.set(coords115.x, coords115.y);
 }).delay(tweenDelay * (115-1));
tween115.start();
tween115.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card116), 1)[0]);
    rNum++;
});


coords116 = { x: card116.x, y: card116.y };
tween116 = new TWEEN.Tween(coords116)
 .to({ x: destX + rngPos[rNum], y: card116.y }, tweenDuration)
 .onUpdate(function() {
     card116.position.set(coords116.x, coords116.y);
 }).delay(tweenDelay * (116-1));
tween116.start();
tween116.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card117), 1)[0]);
    rNum++;
});


coords117 = { x: card117.x, y: card117.y };
tween117 = new TWEEN.Tween(coords117)
 .to({ x: destX + rngPos[rNum], y: card117.y }, tweenDuration)
 .onUpdate(function() {
     card117.position.set(coords117.x, coords117.y);
 }).delay(tweenDelay * (117-1));
tween117.start();
tween117.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card118), 1)[0]);
    rNum++;
});


coords118 = { x: card118.x, y: card118.y };
tween118 = new TWEEN.Tween(coords118)
 .to({ x: destX + rngPos[rNum], y: card118.y }, tweenDuration)
 .onUpdate(function() {
     card118.position.set(coords118.x, coords118.y);
 }).delay(tweenDelay * (118-1));
tween118.start();
tween118.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card119), 1)[0]);
    rNum++;
});


coords119 = { x: card119.x, y: card119.y };
tween119 = new TWEEN.Tween(coords119)
 .to({ x: destX + rngPos[rNum], y: card119.y }, tweenDuration)
 .onUpdate(function() {
     card119.position.set(coords119.x, coords119.y);
 }).delay(tweenDelay * (119-1));
tween119.start();
tween119.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card120), 1)[0]);
    rNum++;
});


coords120 = { x: card120.x, y: card120.y };
tween120 = new TWEEN.Tween(coords120)
 .to({ x: destX + rngPos[rNum], y: card120.y }, tweenDuration)
 .onUpdate(function() {
     card120.position.set(coords120.x, coords120.y);
 }).delay(tweenDelay * (120-1));
tween120.start();
tween120.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card121), 1)[0]);
    rNum++;
});


coords121 = { x: card121.x, y: card121.y };
tween121 = new TWEEN.Tween(coords121)
 .to({ x: destX + rngPos[rNum], y: card121.y }, tweenDuration)
 .onUpdate(function() {
     card121.position.set(coords121.x, coords121.y);
 }).delay(tweenDelay * (121-1));
tween121.start();
tween121.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card122), 1)[0]);
    rNum++;
});


coords122 = { x: card122.x, y: card122.y };
tween122 = new TWEEN.Tween(coords122)
 .to({ x: destX + rngPos[rNum], y: card122.y }, tweenDuration)
 .onUpdate(function() {
     card122.position.set(coords122.x, coords122.y);
 }).delay(tweenDelay * (122-1));
tween122.start();
tween122.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card123), 1)[0]);
    rNum++;
});


coords123 = { x: card123.x, y: card123.y };
tween123 = new TWEEN.Tween(coords123)
 .to({ x: destX + rngPos[rNum], y: card123.y }, tweenDuration)
 .onUpdate(function() {
     card123.position.set(coords123.x, coords123.y);
 }).delay(tweenDelay * (123-1));
tween123.start();
tween123.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card124), 1)[0]);
    rNum++;
});


coords124 = { x: card124.x, y: card124.y };
tween124 = new TWEEN.Tween(coords124)
 .to({ x: destX + rngPos[rNum], y: card124.y }, tweenDuration)
 .onUpdate(function() {
     card124.position.set(coords124.x, coords124.y);
 }).delay(tweenDelay * (124-1));
tween124.start();
tween124.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card125), 1)[0]);
    rNum++;
});


coords125 = { x: card125.x, y: card125.y };
tween125 = new TWEEN.Tween(coords125)
 .to({ x: destX + rngPos[rNum], y: card125.y }, tweenDuration)
 .onUpdate(function() {
     card125.position.set(coords125.x, coords125.y);
 }).delay(tweenDelay * (125-1));
tween125.start();
tween125.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card126), 1)[0]);
    rNum++;
});


coords126 = { x: card126.x, y: card126.y };
tween126 = new TWEEN.Tween(coords126)
 .to({ x: destX + rngPos[rNum], y: card126.y }, tweenDuration)
 .onUpdate(function() {
     card126.position.set(coords126.x, coords126.y);
 }).delay(tweenDelay * (126-1));
tween126.start();
tween126.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card127), 1)[0]);
    rNum++;
});


coords127 = { x: card127.x, y: card127.y };
tween127 = new TWEEN.Tween(coords127)
 .to({ x: destX + rngPos[rNum], y: card127.y }, tweenDuration)
 .onUpdate(function() {
     card127.position.set(coords127.x, coords127.y);
 }).delay(tweenDelay * (127-1));
tween127.start();
tween127.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card128), 1)[0]);
    rNum++;
});


coords128 = { x: card128.x, y: card128.y };
tween128 = new TWEEN.Tween(coords128)
 .to({ x: destX + rngPos[rNum], y: card128.y }, tweenDuration)
 .onUpdate(function() {
     card128.position.set(coords128.x, coords128.y);
 }).delay(tweenDelay * (128-1));
tween128.start();
tween128.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card129), 1)[0]);
    rNum++;
});


coords129 = { x: card129.x, y: card129.y };
tween129 = new TWEEN.Tween(coords129)
 .to({ x: destX + rngPos[rNum], y: card129.y }, tweenDuration)
 .onUpdate(function() {
     card129.position.set(coords129.x, coords129.y);
 }).delay(tweenDelay * (129-1));
tween129.start();
tween129.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card130), 1)[0]);
    rNum++;
});


coords130 = { x: card130.x, y: card130.y };
tween130 = new TWEEN.Tween(coords130)
 .to({ x: destX + rngPos[rNum], y: card130.y }, tweenDuration)
 .onUpdate(function() {
     card130.position.set(coords130.x, coords130.y);
 }).delay(tweenDelay * (130-1));
tween130.start();
tween130.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card131), 1)[0]);
    rNum++;
});


coords131 = { x: card131.x, y: card131.y };
tween131 = new TWEEN.Tween(coords131)
 .to({ x: destX + rngPos[rNum], y: card131.y }, tweenDuration)
 .onUpdate(function() {
     card131.position.set(coords131.x, coords131.y);
 }).delay(tweenDelay * (131-1));
tween131.start();
tween131.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card132), 1)[0]);
    rNum++;
});


coords132 = { x: card132.x, y: card132.y };
tween132 = new TWEEN.Tween(coords132)
 .to({ x: destX + rngPos[rNum], y: card132.y }, tweenDuration)
 .onUpdate(function() {
     card132.position.set(coords132.x, coords132.y);
 }).delay(tweenDelay * (132-1));
tween132.start();
tween132.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card133), 1)[0]);
    rNum++;
});


coords133 = { x: card133.x, y: card133.y };
tween133 = new TWEEN.Tween(coords133)
 .to({ x: destX + rngPos[rNum], y: card133.y }, tweenDuration)
 .onUpdate(function() {
     card133.position.set(coords133.x, coords133.y);
 }).delay(tweenDelay * (133-1));
tween133.start();
tween133.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card134), 1)[0]);
    rNum++;
});


coords134 = { x: card134.x, y: card134.y };
tween134 = new TWEEN.Tween(coords134)
 .to({ x: destX + rngPos[rNum], y: card134.y }, tweenDuration)
 .onUpdate(function() {
     card134.position.set(coords134.x, coords134.y);
 }).delay(tweenDelay * (134-1));
tween134.start();
tween134.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card135), 1)[0]);
    rNum++;
});


coords135 = { x: card135.x, y: card135.y };
tween135 = new TWEEN.Tween(coords135)
 .to({ x: destX + rngPos[rNum], y: card135.y }, tweenDuration)
 .onUpdate(function() {
     card135.position.set(coords135.x, coords135.y);
 }).delay(tweenDelay * (135-1));
tween135.start();
tween135.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card136), 1)[0]);
    rNum++;
});


coords136 = { x: card136.x, y: card136.y };
tween136 = new TWEEN.Tween(coords136)
 .to({ x: destX + rngPos[rNum], y: card136.y }, tweenDuration)
 .onUpdate(function() {
     card136.position.set(coords136.x, coords136.y);
 }).delay(tweenDelay * (136-1));
tween136.start();
tween136.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card137), 1)[0]);
    rNum++;
});


coords137 = { x: card137.x, y: card137.y };
tween137 = new TWEEN.Tween(coords137)
 .to({ x: destX + rngPos[rNum], y: card137.y }, tweenDuration)
 .onUpdate(function() {
     card137.position.set(coords137.x, coords137.y);
 }).delay(tweenDelay * (137-1));
tween137.start();
tween137.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card138), 1)[0]);
    rNum++;
});


coords138 = { x: card138.x, y: card138.y };
tween138 = new TWEEN.Tween(coords138)
 .to({ x: destX + rngPos[rNum], y: card138.y }, tweenDuration)
 .onUpdate(function() {
     card138.position.set(coords138.x, coords138.y);
 }).delay(tweenDelay * (138-1));
tween138.start();
tween138.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card139), 1)[0]);
    rNum++;
});


coords139 = { x: card139.x, y: card139.y };
tween139 = new TWEEN.Tween(coords139)
 .to({ x: destX + rngPos[rNum], y: card139.y }, tweenDuration)
 .onUpdate(function() {
     card139.position.set(coords139.x, coords139.y);
 }).delay(tweenDelay * (139-1));
tween139.start();
tween139.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card140), 1)[0]);
    rNum++;
});


coords140 = { x: card140.x, y: card140.y };
tween140 = new TWEEN.Tween(coords140)
 .to({ x: destX + rngPos[rNum], y: card140.y }, tweenDuration)
 .onUpdate(function() {
     card140.position.set(coords140.x, coords140.y);
 }).delay(tweenDelay * (140-1));
tween140.start();
tween140.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card141), 1)[0]);
    rNum++;
});


coords141 = { x: card141.x, y: card141.y };
tween141 = new TWEEN.Tween(coords141)
 .to({ x: destX + rngPos[rNum], y: card141.y }, tweenDuration)
 .onUpdate(function() {
     card141.position.set(coords141.x, coords141.y);
 }).delay(tweenDelay * (141-1));
tween141.start();
tween141.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card142), 1)[0]);
    rNum++;
});


coords142 = { x: card142.x, y: card142.y };
tween142 = new TWEEN.Tween(coords142)
 .to({ x: destX + rngPos[rNum], y: card142.y }, tweenDuration)
 .onUpdate(function() {
     card142.position.set(coords142.x, coords142.y);
 }).delay(tweenDelay * (142-1));
tween142.start();
tween142.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card143), 1)[0]);
    rNum++;
});


coords143 = { x: card143.x, y: card143.y };
tween143 = new TWEEN.Tween(coords143)
 .to({ x: destX + rngPos[rNum], y: card143.y }, tweenDuration)
 .onUpdate(function() {
     card143.position.set(coords143.x, coords143.y);
 }).delay(tweenDelay * (143-1));
tween143.start();
tween143.onComplete(function() {
    app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card144), 1)[0]);
    rNum++;
});


coords144 = { x: card144.x, y: card144.y };
tween144 = new TWEEN.Tween(coords144)
 .to({ x: destX + rngPos[rNum], y: card144.y }, tweenDuration)
 .onUpdate(function() {
     card144.position.set(coords144.x, coords144.y);
 }).delay(tweenDelay * (144-1));
tween144.start();
tween144.onComplete(function() {
    // app.stage.children.push(app.stage.children.splice(app.stage.children.indexOf(card145), 1)[0]);
    // rNum++;
});



app.ticker.add(dt => gameLoop(dt));
}
var framerate = document.getElementById("framerate");

// Calculate the current time
var elapsed = Date.now();

var updateId;


function gameLoop() {
var dt = app.ticker.elapsedMS / 1000;

TWEEN.update(app.ticker.lastTime);
// Update function every frame
var update = function(){

    // Update the next frame
    updateId = requestAnimationFrame(update);

    var now = Date.now();

    framerate.innerHTML = (1000 / (now - elapsed)).toFixed(2);

    elapsed = now;

    // render the stage
    renderer.render(stage);
};
}


