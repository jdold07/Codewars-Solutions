// 6 kyu - Encryption and decryption--Matrix pair  [ ID: 5827ba50c983ca5d8b000a0d  (encryption-and-decryption-matrix-pair) ]
// URL: https://www.codewars.com/kata/5827ba50c983ca5d8b000a0d
// Category: ALGORITHMS  |  Tags: PUZZLES | ALGORITHMS | MATRIX | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
function an(key, str) {
  var mat = key.split("\n").map((x) => x.split(" "))
  return str.replace(/../g, (x) => enc(x[0], x[1]))

  function enc(a, b) {
    var idx1 = key.indexOf(a),
      idx2 = key.indexOf(b),
      i1 = ~~(idx1 / 10),
      j1 = (idx1 % 10) / 2,
      i2 = ~~(idx2 / 10),
      j2 = (idx2 % 10) / 2
    return idx1 == idx2 || idx1 < 0 || idx2 < 0 ? a + b : i1 == i2 || j1 == j2 ? b + a : mat[i1][j2] + mat[i2][j1]
  }
}

function rndc() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rndc1() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length * Math.random())]
}
function rndclo() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())]
}
function rndcn() {
  var allc = "1234567890"
  return allc[~~(allc.length * Math.random())]
}
function rndcl() {
  var allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())]
}
function rndcno() {
  var allc = "1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())]
}
function rndch() {
  var allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rnd9() {
  var allc = "123456789"
  return allc[~~(allc.length * Math.random())]
}
function rnd10() {
  var allc = "0123456789"
  return allc[~~(allc.length * Math.random())]
}
function rnds(n) {
  var len = n || rand(5, 60)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl()
  return rs.join("")
}
function rndss(n) {
  var len = n || rand(3, 7)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rand(0, 1000) % 2 ? rndcl() : rndch()
  return rs.join("")
}
function rndsss(n) {
  var len = n || rand(5, 15)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rnds()
  return rndch() + rs.join(" ")
}
function rndname() {
  return rndch() + rnds()
}
function shuff(arr) {
  for (var i = 0; i < 20; i++) {
    var idx1 = rand(0, arr.length - 1),
      idx2 = rand(0, arr.length - 1)
    var t = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = t
  }
}
function rnds2(n) {
  var len = n || ~~(15 * Math.random()) + 4
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl()
  return rs.join("")
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function rndtest() {
  var all = "abcdefghijklmnopqrstuvwxyz"
    .replace(rndcl(), "")
    .match(/.{5}/g)
    .map((x) => x.split(""))
  shuff(all)
  return all.map((x) => x.join(" ")).join("\n")
}

function rndarr() {
  var len = rand(3, 20),
    r = []
  for (var i = 0; i < len; i++) r[i] = rand(0, 20)
  return r
}

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    var key = `a b c d e
f g h i j
k l m n o
p q r s t
u v w x y`

    Test.assertEquals(encryption(key, "example"), "dyckqke")
    Test.assertEquals(encryption(key, "dyckqke"), "example")

    Test.assertEquals(encryption(key, "codewars"), "emeducsr")
    Test.assertEquals(encryption(key, "emeducsr"), "codewars")

    Test.assertEquals(encryption(key, "zyx"), "zyx")
  })
})
var failed = 0
//wordList=["a","ability","able","about","above","absence","absolutely","academic","accept","access","accident","accompany","according","account","achieve","achievement","acid","acquire","across","act","action","active","activity","actual","actually","add","addition","additional","address","administration","admit","adopt","adult","advance","advantage","advice","advise","affair","affect","afford","afraid","after","afternoon","afterwards","again","against","age","agency","agent","ago","agree","agreement","ahead","aid","aim","air","aircraft","all","allow","almost","alone","along","already","alright","also","alternative","although","always","among","amongst","amount","an","analysis","ancient","and","animal","announce","annual","another","answer","any","anybody","anyone","anything","anyway","apart","apparent","apparently","appeal","appear","appearance","application","apply","appoint","appointment","approach","appropriate","approve","area","argue","argument","arise","arm","army","around","arrange","arrangement","arrive","art","article","artist","as","ask","aspect","assembly","assess","assessment","asset","associate","association","assume","assumption","at","atmosphere","attach","attack","attempt","attend","attention","attitude","attract","attractive","audience","author","authority","available","average","avoid","award","aware","away","aye","baby","back","background","bad","bag","balance","ball","band","bank","bar","base","basic","basis","battle","be","bear","beat","beautiful","because","become","bed","bedroom","before","begin","beginning","behaviour","behind","belief","believe","belong","below","beneath","benefit","beside","best","better","between","beyond","big","bill","bind","bird","birth","bit","black","block","blood","bloody","blow","blue","board","boat","body","bone","book","border","both","bottle","bottom","box","boy","brain","branch","break","breath","bridge","brief","bright","bring","broad","brother","budget","build","building","burn","bus","business","busy","but","buy","by","cabinet","call","campaign","can","candidate","capable","capacity","capital","car","card","care","career","careful","carefully","carry","case","cash","cat","catch","category","cause","cell","central","centre","century","certain","certainly","chain","chair","chairman","challenge","chance","change","channel","chapter","character","characteristic","charge","cheap","check","chemical","chief","child","choice","choose","church","circle","circumstance","citizen","city","civil","claim","class","clean","clear","clearly","client","climb","close","closely","clothes","club","coal","code","coffee","cold","colleague","collect","collection","college","colour","combination","combine","come","comment","commercial","commission","commit","commitment","committee","common","communication","community","company","compare","comparison","competition","complete","completely","complex","component","computer","concentrate","concentration","concept","concern","concerned","conclude","conclusion","condition","conduct","conference","confidence","confirm","conflict","congress","connect","connection","consequence","conservative","consider","considerable","consideration","consist","constant","construction","consumer","contact","contain","content","context","continue","contract","contrast","contribute","contribution","control","convention","conversation","copy","corner","corporate","correct","cos","cost","could","council","count","country","county","couple","course","court","cover","create","creation","credit","crime","criminal","crisis","criterion","critical","criticism","cross","crowd","cry","cultural","culture","cup","current","currently","curriculum","customer","cut","damage","danger","dangerous","dark","data","date","daughter","day","dead","deal","death","debate","debt","decade","decide","decision","declare","deep","defence","defendant","define","definition","degree","deliver","demand","democratic","demonstrate","deny","department","depend","deputy","derive","describe","description","design","desire","desk","despite","destroy","detail","detailed","determine","develop","development","device","die","difference","different","difficult","difficulty","dinner","direct","direction","directly","director","disappear","discipline","discover","discuss","discussion","disease","display","distance","distinction","distribution","district","divide","division","do","doctor","document","dog","domestic","door","double","doubt","down","draw","drawing","dream","dress","drink","drive","driver","drop","drug","dry","due","during","duty","each","ear","early","earn","earth","easily","east","easy","eat","economic","economy","edge","editor","education","educational","effect","effective","effectively","effort","egg","either","elderly","election","element","else","elsewhere","emerge","emphasis","employ","employee","employer","employment","empty","enable","encourage","end","enemy","energy","engine","engineering","enjoy","enough","ensure","enter","enterprise","entire","entirely","entitle","entry","environment","environmental","equal","equally","equipment","error","escape","especially","essential","establish","establishment","estate","estimate","even","evening","event","eventually","ever","every","everybody","everyone","everything","evidence","exactly","examination","examine","example","excellent","except","exchange","executive","exercise","exhibition","exist","existence","existing","expect","expectation","expenditure","expense","expensive","experience","experiment","expert","explain","explanation","explore","express","expression","extend","extent","external","extra","extremely","eye","face","facility","fact","factor","factory","fail","failure","fair","fairly","faith","fall","familiar","family","famous","far","farm","farmer","fashion","fast","father","favour","fear","feature","fee","feel","feeling","female","few","field","fight","figure","file","fill","film","final","finally","finance","financial","find","finding","fine","finger","finish","fire","firm","first","fish","fit","fix","flat","flight","floor","flow","flower","fly","focus","follow","following","food","foot","football","for","force","foreign","forest","forget","form","formal","former","forward","foundation","free","freedom","frequently","fresh","friend","from","front","fruit","fuel","full","fully","function","fund","funny","further","future","gain","game","garden","gas","gate","gather","general","generally","generate","generation","gentleman","get","girl","give","glass","go","goal","god","gold","good","government","grant","great","green","grey","ground","group","grow","growing","growth","guest","guide","gun","hair","half","hall","hand","handle","hang","happen","happy","hard","hardly","hate","have","he","head","health","hear","heart","heat","heavy","hell","help","hence","her","here","herself","hide","high","highly","hill","him","himself","his","historical","history","hit","hold","hole","holiday","home","hope","horse","hospital","hot","hotel","hour","house","household","housing","how","however","huge","human","hurt","husband","i","idea","identify","if","ignore","illustrate","image","imagine","immediate","immediately","impact","implication","imply","importance","important","impose","impossible","impression","improve","improvement","in","incident","include","including","income","increase","increased","increasingly","indeed","independent","index","indicate","individual","industrial","industry","influence","inform","information","initial","initiative","injury","inside","insist","instance","instead","institute","institution","instruction","instrument","insurance","intend","intention","interest","interested","interesting","internal","international","interpretation","interview","into","introduce","introduction","investigate","investigation","investment","invite","involve","iron","is","island","issue","it","item","its","itself","job","join","joint","journey","judge","jump","just","justice","keep","key","kid","kill","kind","king","kitchen","knee","know","knowledge","labour","lack","lady","land","language","large","largely","last","late","later","latter","laugh","launch","law","lawyer","lay","lead","leader","leadership","leading","leaf","league","lean","learn","least","leave","left","leg","legal","legislation","length","less","let","letter","level","liability","liberal","library","lie","life","lift","light","like","likely","limit","limited","line","link","lip","list","listen","literature","little","live","living","loan","local","location","long","look","lord","lose","loss","lot","love","lovely","low","lunch","machine","magazine","main","mainly","maintain","major","majority","make","male","man","manage","management","manager","manner","many","map","mark","market","marriage","married","marry","mass","master","match","material","matter","may","maybe","me","meal","mean","meaning","means","meanwhile","measure","mechanism","media","medical","meet","meeting","member","membership","memory","mental","mention","merely","message","metal","method","middle","might","mile","military","milk","mind","mine","minister","ministry","minute","miss","mistake","model","modern","module","moment","money","month","more","morning","most","mother","motion","motor","mountain","mouth","move","movement","much","murder","museum","music","must","my","myself","name","narrow","nation","national","natural","nature","near","nearly","necessarily","necessary","neck","need","negotiation","neighbour","neither","network","never","nevertheless","new","news","newspaper","next","nice","night","no","nobody","nod","noise","none","nor","normal","normally","north","northern","nose","not","note","nothing","notice","notion","now","nuclear","number","nurse","object","objective","observation","observe","obtain","obvious","obviously","occasion","occur","odd","of","off","offence","offer","office","officer","official","often","oil","okay","old","on","once","one","only","onto","open","operate","operation","opinion","opportunity","opposition","option","or","order","ordinary","organisation","organise","organization","origin","original","other","otherwise","ought","our","ourselves","out","outcome","output","outside","over","overall","own","owner","package","page","pain","paint","painting","pair","panel","paper","parent","park","parliament","part","particular","particularly","partly","partner","party","pass","passage","past","path","patient","pattern","pay","payment","peace","pension","people","per","percent","perfect","perform","performance","perhaps","period","permanent","person","personal","persuade","phase","phone","photograph","physical","pick","picture","piece","place","plan","planning","plant","plastic","plate","play","player","please","pleasure","plenty","plus","pocket","point","police","policy","political","politics","pool","poor","popular","population","position","positive","possibility","possible","possibly","post","potential","pound","power","powerful","practical","practice","prefer","prepare","presence","present","president","press","pressure","pretty","prevent","previous","previously","price","primary","prime","principle","priority","prison","prisoner","private","probably","problem","procedure","process","produce","product","production","professional","profit","program","programme","progress","project","promise","promote","proper","properly","property","proportion","propose","proposal","prospect","protect","protection","prove","provide","provided","provision","pub","public","publication","publish","pull","pupil","purpose","push","put","quality","quarter","question","quick","quickly","quiet","quite","race","radio","railway","rain","raise","range","rapidly","rare","rate","rather","reach","reaction","read","reader","reading","ready","real","realise","reality","realize","really","reason","reasonable","recall","receive","recent","recently","recognise","recognition","recognize","recommend","record","recover","red","reduce","reduction","refer","reference","reflect","reform","refuse","regard","region","regional","regular","regulation","reject","relate","relation","relationship","relative","relatively","release","relevant","relief","religion","religious","rely","remain","remember","remind","remove","repeat","replace","reply","report","represent","representation","representative","request","require","requirement","research","resource","respect","respond","response","responsibility","responsible","rest","restaurant","result","retain","return","reveal","revenue","review","revolution","rich","ride","right","ring","rise","risk","river","road","rock","role","roll","roof","room","round","route","row","royal","rule","run","rural","safe","safety","sale","same","sample","satisfy","save","say","scale","scene","scheme","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secondary","secretary","section","sector","secure","security","see","seek","seem","select","selection","sell","send","senior","sense","sentence","separate","sequence","series","serious","seriously","servant","serve","service","session","set","settle","settlement","several","severe","sex","sexual","shake","shall","shape","share","she","sheet","ship","shoe","shoot","shop","short","shot","should","shoulder","shout","show","shut","side","sight","sign","signal","significance","significant","silence","similar","simple","simply","since","sing","single","sir","sister","sit","site","situation","size","skill","skin","sky","sleep","slightly","slip","slow","slowly","small","smile","so","social","society","soft","software","soil","soldier","solicitor","solution","some","somebody","someone","something","sometimes","somewhat","somewhere","son","song","soon","sorry","sort","sound","source","south","southern","space","speak","speaker","special","species","specific","speech","speed","spend","spirit","sport","spot","spread","spring","staff","stage","stand","standard","star","start","state","statement","station","status","stay","steal","step","stick","still","stock","stone","stop","store","story","straight","strange","strategy","street","strength","strike","strong","strongly","structure","student","studio","study","stuff","style","subject","substantial","succeed","success","successful","such","suddenly","suffer","sufficient","suggest","suggestion","suitable","sum","summer","sun","supply","support","suppose","sure","surely","surface","surprise","surround","survey","survive","switch","system","table","take","talk","tall","tape","target","task","tax","tea","teach","teacher","teaching","team","tear","technical","technique","technology","telephone","television","tell","temperature","tend","term","terms","terrible","test","text","than","thank","thanks","that","the","theatre","their","them","theme","themselves","then","theory","there","therefore","these","they","thin","thing","think","this","those","though","thought","threat","threaten","through","throughout","throw","thus","ticket","time","tiny","title","to","today","together","tomorrow","tone","tonight","too","tool","tooth","top","total","totally","touch","tour","towards","town","track","trade","tradition","traditional","traffic","train","training","transfer","transport","travel","treat","treatment","treaty","tree","trend","trial","trip","troop","trouble","true","trust","truth","try","turn","twice","type","typical","unable","under","understand","understanding","undertake","unemployment","unfortunately","union","unit","united","university","unless","unlikely","until","up","upon","upper","urban","us","use","used","useful","user","usual","usually","value","variation","variety","various","vary","vast","vehicle","version","very","via","victim","victory","video","view","village","violence","vision","visit","visitor","vital","voice","volume","vote","wage","wait","walk","wall","want","war","warm","warn","wash","watch","water","wave","way","we","weak","weapon","wear","weather","week","weekend","weight","welcome","welfare","well","west","western","what","whatever","when","where","whereas","whether","which","while","whilst","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","win","wind","window","wine","wing","winner","winter","wish","with","withdraw","within","without","woman","wonder","wonderful","wood","word","work","worker","working","works","world","worry","worth","would","write","writer","writing","wrong","yard","yeah","year","yes","yesterday","yet","you","young","your","yourself","youth"]
describe("100 Random Tests", function () {
  it("It should works for random tests too.", function () {
    for (var iii = 0; iii < 100; iii++) {
      var eee = rndtest(),
        fff = rnds(),
        ans = an(eee, fff)
      console.log(
        "<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#cccc00' size=3>" +
          "\nkey = \n" +
          eee +
          "\nstr = " +
          JSON.stringify(fff) +
          "</font>",
        ""
      )
      var useran = encryption(eee, fff)
      if (ans != useran) failed++
      Test.assertEquals(useran, ans)
    }
  })
})

if (!failed) {
  /*describe("Congratulations! You have passed all the tests!", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
}
