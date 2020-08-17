var posX = app.screen.width / 3;
var posY = app.screen.height / 3;
var rngPos = [];
for (i = 0; i < 144; i++) { 
    rngPos[i] = Math.floor(Math.random() * 10);
  }
var card1 = PIXI.Sprite.fromImage('Cards/cardBack_blue1.png');
var card2 = PIXI.Sprite.fromImage('Cards/cardBack_blue2.png');
var card3 = PIXI.Sprite.fromImage('Cards/cardBack_blue3.png');
var card4 = PIXI.Sprite.fromImage('Cards/cardBack_blue4.png');
var card5 = PIXI.Sprite.fromImage('Cards/cardBack_blue5.png');
var card6 = PIXI.Sprite.fromImage('Cards/cardBack_green1.png');
var card7 = PIXI.Sprite.fromImage('Cards/cardBack_green2.png');
var card8 = PIXI.Sprite.fromImage('Cards/cardBack_green3.png');
var card9 = PIXI.Sprite.fromImage('Cards/cardBack_green4.png');
var card10 = PIXI.Sprite.fromImage('Cards/cardBack_green5.png');
var card11 = PIXI.Sprite.fromImage('Cards/cardBack_red1.png');
var card12 = PIXI.Sprite.fromImage('Cards/cardBack_red2.png');
var card13 = PIXI.Sprite.fromImage('Cards/cardBack_red3.png');
var card14 = PIXI.Sprite.fromImage('Cards/cardBack_red4.png');
var card15 = PIXI.Sprite.fromImage('Cards/cardBack_red5.png');
var card16 = PIXI.Sprite.fromImage('Cards/cardClubs2.png');
var card17 = PIXI.Sprite.fromImage('Cards/cardClubs3.png');
var card18 = PIXI.Sprite.fromImage('Cards/cardClubs4.png');
var card19 = PIXI.Sprite.fromImage('Cards/cardClubs5.png');
var card20 = PIXI.Sprite.fromImage('Cards/cardClubs6.png');
var card21 = PIXI.Sprite.fromImage('Cards/cardClubs7.png');
var card22 = PIXI.Sprite.fromImage('Cards/cardClubs8.png');
var card23 = PIXI.Sprite.fromImage('Cards/cardClubs9.png');
var card24 = PIXI.Sprite.fromImage('Cards/cardClubs10.png');
var card25 = PIXI.Sprite.fromImage('Cards/cardClubsA.png');
var card26 = PIXI.Sprite.fromImage('Cards/cardClubsJ.png');
var card27 = PIXI.Sprite.fromImage('Cards/cardClubsQ.png');
var card28 = PIXI.Sprite.fromImage('Cards/cardClubsK.png');
var card29 = PIXI.Sprite.fromImage('Cards/cardDiamonds2.png');
var card30 = PIXI.Sprite.fromImage('Cards/cardDiamonds3.png');
var card31 = PIXI.Sprite.fromImage('Cards/cardDiamonds4.png');
var card32 = PIXI.Sprite.fromImage('Cards/cardDiamonds5.png');
var card33 = PIXI.Sprite.fromImage('Cards/cardDiamonds6.png');
var card34 = PIXI.Sprite.fromImage('Cards/cardDiamonds7.png');
var card35 = PIXI.Sprite.fromImage('Cards/cardDiamonds8.png');
var card36 = PIXI.Sprite.fromImage('Cards/cardDiamonds9.png');
var card37 = PIXI.Sprite.fromImage('Cards/cardDiamonds10.png');
var card38 = PIXI.Sprite.fromImage('Cards/cardDiamondsA.png');
var card39 = PIXI.Sprite.fromImage('Cards/cardDiamondsJ.png');
var card40 = PIXI.Sprite.fromImage('Cards/cardDiamondsQ.png');
var card41 = PIXI.Sprite.fromImage('Cards/cardDiamondsK.png');
var card42 = PIXI.Sprite.fromImage('Cards/cardHearts2.png');
var card43 = PIXI.Sprite.fromImage('Cards/cardHearts3.png');
var card44 = PIXI.Sprite.fromImage('Cards/cardHearts4.png');
var card45 = PIXI.Sprite.fromImage('Cards/cardHearts5.png');
var card46 = PIXI.Sprite.fromImage('Cards/cardHearts6.png');
var card47 = PIXI.Sprite.fromImage('Cards/cardHearts7.png');
var card48 = PIXI.Sprite.fromImage('Cards/cardHearts8.png');
var card49 = PIXI.Sprite.fromImage('Cards/cardHearts9.png');
var card50 = PIXI.Sprite.fromImage('Cards/cardHearts10.png');
var card51 = PIXI.Sprite.fromImage('Cards/cardHeartsA.png');
var card52 = PIXI.Sprite.fromImage('Cards/cardHeartsJ.png');
var card53 = PIXI.Sprite.fromImage('Cards/cardHeartsQ.png');
var card54 = PIXI.Sprite.fromImage('Cards/cardHeartsK.png');
var card55 = PIXI.Sprite.fromImage('Cards/cardSpades2.png');
var card56 = PIXI.Sprite.fromImage('Cards/cardSpades3.png');
var card57 = PIXI.Sprite.fromImage('Cards/cardSpades4.png');
var card58 = PIXI.Sprite.fromImage('Cards/cardSpades5.png');
var card59 = PIXI.Sprite.fromImage('Cards/cardSpades6.png');
var card60 = PIXI.Sprite.fromImage('Cards/cardSpades7.png');
var card61 = PIXI.Sprite.fromImage('Cards/cardSpades8.png');
var card62 = PIXI.Sprite.fromImage('Cards/cardSpades9.png');
var card63 = PIXI.Sprite.fromImage('Cards/cardSpades10.png');
var card64 = PIXI.Sprite.fromImage('Cards/cardSpadesA.png');
var card65 = PIXI.Sprite.fromImage('Cards/cardSpadesJ.png');
var card66 = PIXI.Sprite.fromImage('Cards/cardSpadesQ.png');
var card67 = PIXI.Sprite.fromImage('Cards/cardSpadesK.png');
var card68 = PIXI.Sprite.fromImage('Cards/cardJoker.png');

var card69 = PIXI.Sprite.fromImage('Cards/cardBack_blue1.png');
var card70 = PIXI.Sprite.fromImage('Cards/cardBack_blue2.png');
var card71 = PIXI.Sprite.fromImage('Cards/cardBack_blue3.png');
var card72 = PIXI.Sprite.fromImage('Cards/cardBack_blue4.png');
var card73 = PIXI.Sprite.fromImage('Cards/cardBack_blue5.png');
var card74 = PIXI.Sprite.fromImage('Cards/cardBack_green1.png');
var card75 = PIXI.Sprite.fromImage('Cards/cardBack_green2.png');
var card76 = PIXI.Sprite.fromImage('Cards/cardBack_green3.png');
var card77 = PIXI.Sprite.fromImage('Cards/cardBack_green4.png');
var card78 = PIXI.Sprite.fromImage('Cards/cardBack_green5.png');
var card79 = PIXI.Sprite.fromImage('Cards/cardBack_red1.png');
var card80 = PIXI.Sprite.fromImage('Cards/cardBack_red2.png');
var card81 = PIXI.Sprite.fromImage('Cards/cardBack_red3.png');
var card82 = PIXI.Sprite.fromImage('Cards/cardBack_red4.png');
var card83 = PIXI.Sprite.fromImage('Cards/cardBack_red5.png');
var card84 = PIXI.Sprite.fromImage('Cards/cardClubs2.png');
var card85 = PIXI.Sprite.fromImage('Cards/cardClubs3.png');
var card86 = PIXI.Sprite.fromImage('Cards/cardClubs4.png');
var card87 = PIXI.Sprite.fromImage('Cards/cardClubs5.png');
var card88 = PIXI.Sprite.fromImage('Cards/cardClubs6.png');
var card89 = PIXI.Sprite.fromImage('Cards/cardClubs7.png');
var card90 = PIXI.Sprite.fromImage('Cards/cardClubs8.png');
var card91 = PIXI.Sprite.fromImage('Cards/cardClubs9.png');
var card92 = PIXI.Sprite.fromImage('Cards/cardClubs10.png');
var card93 = PIXI.Sprite.fromImage('Cards/cardClubsA.png');
var card94 = PIXI.Sprite.fromImage('Cards/cardClubsJ.png');
var card95 = PIXI.Sprite.fromImage('Cards/cardClubsQ.png');
var card96 = PIXI.Sprite.fromImage('Cards/cardClubsK.png');
var card97 = PIXI.Sprite.fromImage('Cards/cardDiamonds2.png');
var card98 = PIXI.Sprite.fromImage('Cards/cardDiamonds3.png');
var card99 = PIXI.Sprite.fromImage('Cards/cardDiamonds4.png');
var card100 = PIXI.Sprite.fromImage('Cards/cardDiamonds5.png');
var card101 = PIXI.Sprite.fromImage('Cards/cardDiamonds6.png');
var card102 = PIXI.Sprite.fromImage('Cards/cardDiamonds7.png');
var card103 = PIXI.Sprite.fromImage('Cards/cardDiamonds8.png');
var card104 = PIXI.Sprite.fromImage('Cards/cardDiamonds9.png');
var card105 = PIXI.Sprite.fromImage('Cards/cardDiamonds10.png');
var card106 = PIXI.Sprite.fromImage('Cards/cardDiamondsA.png');
var card107 = PIXI.Sprite.fromImage('Cards/cardDiamondsJ.png');
var card108 = PIXI.Sprite.fromImage('Cards/cardDiamondsQ.png');
var card109 = PIXI.Sprite.fromImage('Cards/cardDiamondsK.png');
var card110 = PIXI.Sprite.fromImage('Cards/cardHearts2.png');
var card111 = PIXI.Sprite.fromImage('Cards/cardHearts3.png');
var card112 = PIXI.Sprite.fromImage('Cards/cardHearts4.png');
var card113 = PIXI.Sprite.fromImage('Cards/cardHearts5.png');
var card114 = PIXI.Sprite.fromImage('Cards/cardHearts6.png');
var card115 = PIXI.Sprite.fromImage('Cards/cardHearts7.png');
var card116 = PIXI.Sprite.fromImage('Cards/cardHearts8.png');
var card117 = PIXI.Sprite.fromImage('Cards/cardHearts9.png');
var card118 = PIXI.Sprite.fromImage('Cards/cardHearts10.png');
var card119 = PIXI.Sprite.fromImage('Cards/cardHeartsA.png');
var card120 = PIXI.Sprite.fromImage('Cards/cardHeartsJ.png');
var card121 = PIXI.Sprite.fromImage('Cards/cardHeartsQ.png');
var card122 = PIXI.Sprite.fromImage('Cards/cardHeartsK.png');
var card123 = PIXI.Sprite.fromImage('Cards/cardSpades2.png');
var card124 = PIXI.Sprite.fromImage('Cards/cardSpades3.png');
var card125 = PIXI.Sprite.fromImage('Cards/cardSpades4.png');
var card126 = PIXI.Sprite.fromImage('Cards/cardSpades5.png');
var card127 = PIXI.Sprite.fromImage('Cards/cardSpades6.png');
var card128 = PIXI.Sprite.fromImage('Cards/cardSpades7.png');
var card129 = PIXI.Sprite.fromImage('Cards/cardSpades8.png');
var card130 = PIXI.Sprite.fromImage('Cards/cardSpades9.png');
var card131 = PIXI.Sprite.fromImage('Cards/cardSpades10.png');
var card132 = PIXI.Sprite.fromImage('Cards/cardSpadesA.png');
var card133 = PIXI.Sprite.fromImage('Cards/cardSpadesJ.png');
var card134 = PIXI.Sprite.fromImage('Cards/cardSpadesQ.png');
var card135 = PIXI.Sprite.fromImage('Cards/cardSpadesK.png');
var card136 = PIXI.Sprite.fromImage('Cards/cardJoker.png');
var card137 = PIXI.Sprite.fromImage('Cards/cardBack_blue1.png');
var card138 = PIXI.Sprite.fromImage('Cards/cardBack_blue2.png');
var card139 = PIXI.Sprite.fromImage('Cards/cardBack_blue3.png');
var card140 = PIXI.Sprite.fromImage('Cards/cardBack_blue4.png');
var card141 = PIXI.Sprite.fromImage('Cards/cardBack_blue5.png');
var card142 = PIXI.Sprite.fromImage('Cards/cardBack_green1.png');
var card143 = PIXI.Sprite.fromImage('Cards/cardBack_green2.png');
var card144 = PIXI.Sprite.fromImage('Cards/cardBack_green3.png');



card1.x = posX;
card1.y = posY; 
card2.x = posX + rngPos[0];
card2.y = posY + rngPos[0];
card3.x = posX + rngPos[1];
card3.y = posY + rngPos[1];
card4.x = posX + rngPos[2];
card4.y = posY + rngPos[2];
card5.x = posX + rngPos[3];
card5.y = posY + rngPos[3];
card6.x = posX + rngPos[4];
card6.y = posY + rngPos[4];
card7.x = posX + rngPos[5];
card7.y = posY + rngPos[5];
card8.x = posX + rngPos[6];
card8.y = posY + rngPos[6];
card9.x = posX + rngPos[7];
card9.y = posY + rngPos[7];
card10.x = posX + rngPos[8];
card10.y = posY + rngPos[8];
card11.x = posX + rngPos[9];
card11.y = posY + rngPos[9];
card12.x = posX + rngPos[10];
card12.y = posY + rngPos[10];


card13.x = posX + rngPos[11];
card13.y = posY + rngPos[11];


card14.x = posX + rngPos[12];
card14.y = posY + rngPos[12];


card15.x = posX + rngPos[13];
card15.y = posY + rngPos[13];


card16.x = posX + rngPos[14];
card16.y = posY + rngPos[14];


card17.x = posX + rngPos[15];
card17.y = posY + rngPos[15];


card18.x = posX + rngPos[16];
card18.y = posY + rngPos[16];


card19.x = posX + rngPos[17];
card19.y = posY + rngPos[17];


card20.x = posX + rngPos[18];
card20.y = posY + rngPos[18];


card21.x = posX + rngPos[19];
card21.y = posY + rngPos[19];


card22.x = posX + rngPos[20];
card22.y = posY + rngPos[20];


card23.x = posX + rngPos[21];
card23.y = posY + rngPos[21];


card24.x = posX + rngPos[22];
card24.y = posY + rngPos[22];


card25.x = posX + rngPos[23];
card25.y = posY + rngPos[23];


card26.x = posX + rngPos[24];
card26.y = posY + rngPos[24];


card27.x = posX + rngPos[25];
card27.y = posY + rngPos[25];


card28.x = posX + rngPos[26];
card28.y = posY + rngPos[26];


card29.x = posX + rngPos[27];
card29.y = posY + rngPos[27];


card30.x = posX + rngPos[28];
card30.y = posY + rngPos[28];


card31.x = posX + rngPos[29];
card31.y = posY + rngPos[29];


card32.x = posX + rngPos[30];
card32.y = posY + rngPos[30];


card33.x = posX + rngPos[31];
card33.y = posY + rngPos[31];


card34.x = posX + rngPos[32];
card34.y = posY + rngPos[32];


card35.x = posX + rngPos[33];
card35.y = posY + rngPos[33];


card36.x = posX + rngPos[34];
card36.y = posY + rngPos[34];


card37.x = posX + rngPos[35];
card37.y = posY + rngPos[35];


card38.x = posX + rngPos[36];
card38.y = posY + rngPos[36];


card39.x = posX + rngPos[37];
card39.y = posY + rngPos[37];


card40.x = posX + rngPos[38];
card40.y = posY + rngPos[38];


card41.x = posX + rngPos[39];
card41.y = posY + rngPos[39];


card42.x = posX + rngPos[40];
card42.y = posY + rngPos[40];


card43.x = posX + rngPos[41];
card43.y = posY + rngPos[41];


card44.x = posX + rngPos[42];
card44.y = posY + rngPos[42];


card45.x = posX + rngPos[43];
card45.y = posY + rngPos[43];


card46.x = posX + rngPos[44];
card46.y = posY + rngPos[44];


card47.x = posX + rngPos[45];
card47.y = posY + rngPos[45];


card48.x = posX + rngPos[46];
card48.y = posY + rngPos[46];


card49.x = posX + rngPos[47];
card49.y = posY + rngPos[47];


card50.x = posX + rngPos[48];
card50.y = posY + rngPos[48];


card51.x = posX + rngPos[49];
card51.y = posY + rngPos[49];


card52.x = posX + rngPos[50];
card52.y = posY + rngPos[50];


card53.x = posX + rngPos[51];
card53.y = posY + rngPos[51];


card54.x = posX + rngPos[52];
card54.y = posY + rngPos[52];


card55.x = posX + rngPos[53];
card55.y = posY + rngPos[53];


card56.x = posX + rngPos[54];
card56.y = posY + rngPos[54];


card57.x = posX + rngPos[55];
card57.y = posY + rngPos[55];


card58.x = posX + rngPos[56];
card58.y = posY + rngPos[56];


card59.x = posX + rngPos[57];
card59.y = posY + rngPos[57];


card60.x = posX + rngPos[58];
card60.y = posY + rngPos[58];


card61.x = posX + rngPos[59];
card61.y = posY + rngPos[59];


card62.x = posX + rngPos[60];
card62.y = posY + rngPos[60];


card63.x = posX + rngPos[61];
card63.y = posY + rngPos[61];


card64.x = posX + rngPos[62];
card64.y = posY + rngPos[62];


card65.x = posX + rngPos[63];
card65.y = posY + rngPos[63];


card66.x = posX + rngPos[64];
card66.y = posY + rngPos[64];


card67.x = posX + rngPos[65];
card67.y = posY + rngPos[65];


card68.x = posX + rngPos[66];
card68.y = posY + rngPos[66];


card69.x = posX + rngPos[67];
card69.y = posY + rngPos[67];


card70.x = posX + rngPos[68];
card70.y = posY + rngPos[68];


card71.x = posX + rngPos[69];
card71.y = posY + rngPos[69];


card72.x = posX + rngPos[70];
card72.y = posY + rngPos[70];


card73.x = posX + rngPos[71];
card73.y = posY + rngPos[71];


card74.x = posX + rngPos[72];
card74.y = posY + rngPos[72];


card75.x = posX + rngPos[73];
card75.y = posY + rngPos[73];


card76.x = posX + rngPos[74];
card76.y = posY + rngPos[74];


card77.x = posX + rngPos[75];
card77.y = posY + rngPos[75];


card78.x = posX + rngPos[76];
card78.y = posY + rngPos[76];


card79.x = posX + rngPos[77];
card79.y = posY + rngPos[77];


card80.x = posX + rngPos[78];
card80.y = posY + rngPos[78];


card81.x = posX + rngPos[79];
card81.y = posY + rngPos[79];


card82.x = posX + rngPos[80];
card82.y = posY + rngPos[80];


card83.x = posX + rngPos[81];
card83.y = posY + rngPos[81];


card84.x = posX + rngPos[82];
card84.y = posY + rngPos[82];


card85.x = posX + rngPos[83];
card85.y = posY + rngPos[83];


card86.x = posX + rngPos[84];
card86.y = posY + rngPos[84];


card87.x = posX + rngPos[85];
card87.y = posY + rngPos[85];


card88.x = posX + rngPos[86];
card88.y = posY + rngPos[86];


card89.x = posX + rngPos[87];
card89.y = posY + rngPos[87];


card90.x = posX + rngPos[88];
card90.y = posY + rngPos[88];


card91.x = posX + rngPos[89];
card91.y = posY + rngPos[89];


card92.x = posX + rngPos[90];
card92.y = posY + rngPos[90];


card93.x = posX + rngPos[91];
card93.y = posY + rngPos[91];


card94.x = posX + rngPos[92];
card94.y = posY + rngPos[92];


card95.x = posX + rngPos[93];
card95.y = posY + rngPos[93];


card96.x = posX + rngPos[94];
card96.y = posY + rngPos[94];


card97.x = posX + rngPos[95];
card97.y = posY + rngPos[95];


card98.x = posX + rngPos[96];
card98.y = posY + rngPos[96];


card99.x = posX + rngPos[97];
card99.y = posY + rngPos[97];


card100.x = posX + rngPos[98];
card100.y = posY + rngPos[98];


card101.x = posX + rngPos[99];
card101.y = posY + rngPos[99];


card102.x = posX + rngPos[100];
card102.y = posY + rngPos[100];


card103.x = posX + rngPos[101];
card103.y = posY + rngPos[101];


card104.x = posX + rngPos[102];
card104.y = posY + rngPos[102];


card105.x = posX + rngPos[103];
card105.y = posY + rngPos[103];


card106.x = posX + rngPos[104];
card106.y = posY + rngPos[104];


card107.x = posX + rngPos[105];
card107.y = posY + rngPos[105];


card108.x = posX + rngPos[106];
card108.y = posY + rngPos[106];


card109.x = posX + rngPos[107];
card109.y = posY + rngPos[107];


card110.x = posX + rngPos[108];
card110.y = posY + rngPos[108];


card111.x = posX + rngPos[109];
card111.y = posY + rngPos[109];


card112.x = posX + rngPos[110];
card112.y = posY + rngPos[110];


card113.x = posX + rngPos[111];
card113.y = posY + rngPos[111];


card114.x = posX + rngPos[112];
card114.y = posY + rngPos[112];


card115.x = posX + rngPos[113];
card115.y = posY + rngPos[113];


card116.x = posX + rngPos[114];
card116.y = posY + rngPos[114];


card117.x = posX + rngPos[115];
card117.y = posY + rngPos[115];


card118.x = posX + rngPos[116];
card118.y = posY + rngPos[116];


card119.x = posX + rngPos[117];
card119.y = posY + rngPos[117];


card120.x = posX + rngPos[118];
card120.y = posY + rngPos[118];


card121.x = posX + rngPos[119];
card121.y = posY + rngPos[119];


card122.x = posX + rngPos[120];
card122.y = posY + rngPos[120];


card123.x = posX + rngPos[121];
card123.y = posY + rngPos[121];


card124.x = posX + rngPos[122];
card124.y = posY + rngPos[122];


card125.x = posX + rngPos[123];
card125.y = posY + rngPos[123];


card126.x = posX + rngPos[124];
card126.y = posY + rngPos[124];


card127.x = posX + rngPos[125];
card127.y = posY + rngPos[125];


card128.x = posX + rngPos[126];
card128.y = posY + rngPos[126];


card129.x = posX + rngPos[127];
card129.y = posY + rngPos[127];


card130.x = posX + rngPos[128];
card130.y = posY + rngPos[128];


card131.x = posX + rngPos[129];
card131.y = posY + rngPos[129];


card132.x = posX + rngPos[130];
card132.y = posY + rngPos[130];


card133.x = posX + rngPos[131];
card133.y = posY + rngPos[131];


card134.x = posX + rngPos[132];
card134.y = posY + rngPos[132];


card135.x = posX + rngPos[133];
card135.y = posY + rngPos[133];


card136.x = posX + rngPos[134];
card136.y = posY + rngPos[134];


card137.x = posX + rngPos[135];
card137.y = posY + rngPos[135];


card138.x = posX + rngPos[136];
card138.y = posY + rngPos[136];


card139.x = posX + rngPos[137];
card139.y = posY + rngPos[137];


card140.x = posX + rngPos[138];
card140.y = posY + rngPos[138];


card141.x = posX + rngPos[139];
card141.y = posY + rngPos[139];


card142.x = posX + rngPos[140];
card142.y = posY + rngPos[140];


card143.x = posX + rngPos[141];
card143.y = posY + rngPos[141];


card144.x = posX + rngPos[142];
card144.y = posY + rngPos[142];

