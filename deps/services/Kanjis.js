class Kanji {
  constructor(kanji, meanings) {
    this.kanji = kanji;
    this.meanings = meanings;
  }
}

export class Kanjis {
  constructor() {
    // List of Grade 1 Joyo Kanji
    var list = JSON.parse('[["六",["six"]],["力",["power","strong","strain","bear up","exert"]],["林",["grove","forest"]],["立",["stand up"]],["夕",["evening"]],["木",["tree","wood"]],["目",["eye","class","look","insight","experience","care","favor"]],["名",["name","noted","distinguished","reputation"]],["本",["book","present","main","true","real","counter for long cylindrical things"]],["文",["sentence","literature","style","art","decoration","figures","plan","literary radical (no. 67)"]],["八",["eight","eight radical (no. 12)"]],["百",["hundred"]],["白",["white"]],["二",["two","two radical (no.2)"]],["日",["day","sun","Japan","counter for days"]],["入",["enter","insert"]],["年",["year","counter for years"]],["土",["soil","earth","ground","Turkey"]],["町",["town","village","block","street"]],["天",["heavens","sky","imperial"]],[" 田",["rice field","rice paddy"]],["虫",["insect","bug","temper"]],["男",["male"]],["竹",["bamboo"]],["中",["in","inside","middle","mean","center"]],["大",["large","big"]],["早",["early","fast"]],["草",["grass","weeds","herbs","pasture","write","draft"]],["足",["leg","foot","be sufficient","counter for pairs of footwear"]],["村",["village","town"]],["石",["stone"]],["赤",["red"]],["先",["before","ahead","previous","future","precedence"]],["千",["thousand"]],["川",["stream","river","river or 3-stroke river radical (no. 47)"]],["正",["correct","justice","righteous","10**40"]],["生",["life","genuine","birth"]],["青",["blue","green"]],["水",["water"]],["森",["forest","woods"]],["人",["person"]],["女",["woman","female"]],["小",["little","small"]],["上",["above","up"]],["出",["exit","leave"]],["十",["ten"]],["手",["hand"]],["車",["car"]],["耳",["ear"]],["七",["seven"]],["字",["character","letter","word","section of village"]],["糸",["thread"]],["四",["four"]],["子",["child","sign of the rat","11PM-1AM","first sign of Chinese zodiac"]],["三",["three"]],["山",["mountain"]],["左",["left"]],["校",["exam","school","printing","proof","correction"]],["口",["mouth"]],["五",["five"]],["月",["month","moon"]],["犬",["dog"]],["見",["see","hopes","chances","idea","opinion","look at","visible"]],["金",["gold"]],["九",["nine"]],["空",["empty","sky","void","vacant","vacuum"]],["玉",["jewel","ball"]],["気",["spirit","mind","air","atmosphere","mood"]],["休",["rest","day off","retire","sleep"]],["貝",["shellfish"]],["学",["study","learning","science"]],["右",["right"]],["雨",["rain"]],["円",["circle","yen","round"]],["王",["king","rule","magnate"]],["音",["sound","noise"]],["下",["below","down","descend","give","low","inferior"]],["火",["fire"]],["花",["flower"]],["一",["one","one radical (no.1)"]]]');

    this.kanjis = {};
    for (var i = 0, l = list.length; i < l; i ++) {
      var kanji = list[i];
      this.kanjis[kanji[0]] = new Kanji(kanji[0], kanji[1]);
    }
  }

  getRandomKanjis(n) {
    var characters = Object.keys(this.kanjis);
    characters.sort(function() { return 0.5 - Math.random() });

    return characters.slice(0, n).map(function (character) {
      return this.kanjis[character];
    }.bind(this));
  }
}
