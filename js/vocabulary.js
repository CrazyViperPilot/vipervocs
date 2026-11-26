// Supported target languages
const supportedLanguages = { pl: "Polnisch" };

// Vocabulary dataset
const lessons = {
  seasons_months_weekdays: {
    labelDe: "Jahreszeiten, Monate & Wochentage",
    pairs: [
      // === Jahreszeiten (4 Paare) ===
      { de: "Frühling", pl: "wiosna" },
      { de: "Sommer",   pl: "lato"   },
      { de: "Herbst",   pl: "jesień" },
      { de: "Winter",   pl: "zima"   },
      
      // === Monate (12 Paare) ===
      { de: "Januar",    pl: "styczeń"    },
      { de: "Februar",   pl: "luty"       },
      { de: "März",      pl: "marzec"     },
      { de: "April",     pl: "kwiecień"   },
      { de: "Mai",       pl: "maj"        },
      { de: "Juni",      pl: "czerwiec"   },
      { de: "Juli",      pl: "lipiec"     },
      { de: "August",    pl: "sierpień"   },
      { de: "September", pl: "wrzesień"   },
      { de: "Oktober",   pl: "październik"},
      { de: "November",  pl: "listopad"   },
      { de: "Dezember",  pl: "grudzień"   },

      // === Wochentage (7 Paare) ===
      { de: "Montag",     pl: "poniedziałek" },
      { de: "Dienstag",   pl: "wtorek"       },
      { de: "Mittwoch",   pl: "środa"        },
      { de: "Donnerstag", pl: "czwartek"     },
      { de: "Freitag",    pl: "piątek"       },
      { de: "Samstag",    pl: "sobota"       },
      { de: "Sonntag",    pl: "niedziela"    }
    ]
  },
  numbers_up_to_20: {
    labelDe: "Zahlen bis 20",
    rules:
      "Grundzahlen 1–20\n" +
      "• 1 richtet sich nach dem Geschlecht: jeden (m), jedna (f), jedno (n): jeden dom, jedna kawa, jedno okno.\n" +
      "• 2: dwa (m, n), dwie (f): dwa domy, dwie kawy; männliche Personen: dwaj panowie oder dwóch panów.\n" +
      "• 3, 4: trzy, cztery für alle Geschlechter; männliche Personen: trzej/czterej oder trzech/czterech.\n" +
      "• 11–19 enden auf -naście: jedenaście … dziewiętnaście. Schreibung beachten: pięć → piętnaście, sześć → szesnaście, dziewięć → dziewiętnaście.\n" +
      "Zahl + Nomen:\n" +
      "• 1 + Nominativ Singular, 2–4 + Nominativ Plural, 5–20 + Genitiv Plural: jeden kot, dwa koty, pięć kotów, dwanaście kotów.\n" +
      "• Verb: bei 2–4 im Plural (Są trzy koty.), ab 5 in der 3. Person Singular, Vergangenheit sächlich (Jest pięć kotów. Było pięć kotów.).\n" +
      "• Männliche Personen ab 5: Zahl auf -u + Genitiv Plural: pięciu studentów, dziesięciu panów.\n" +
      "• Zahlen werden selbst gebeugt: od pięciu lat (seit fünf Jahren), z dwoma kolegami (mit zwei Kollegen), dla trzech osób (für drei Personen).\n" +
      "• Alter: 1 rok, 2–4 lata, ab 5 lat: Mam dwanaście lat.",
    pairs: [
      { de: "eins", pl: "jeden" },
      { de: "zwei", pl: "dwa" },
      { de: "drei", pl: "trzy" },
      { de: "vier", pl: "cztery" },
      { de: "fünf", pl: "pięć" },
      { de: "sechs", pl: "sześć" },
      { de: "sieben", pl: "siedem" },
      { de: "acht", pl: "osiem" },
      { de: "neun", pl: "dziewięć" },
      { de: "zehn", pl: "dziesięć" },
      { de: "elf", pl: "jedenaście" },
      { de: "zwölf", pl: "dwanaście" },
      { de: "dreizehn", pl: "trzynaście" },
      { de: "vierzehn", pl: "czternaście" },
      { de: "fünfzehn", pl: "piętnaście" },
      { de: "sechzehn", pl: "szesnaście" },
      { de: "siebzehn", pl: "siedemnaście" },
      { de: "achtzehn", pl: "osiemnaście" },
      { de: "neunzehn", pl: "dziewiętnaście" },
      { de: "zwanzig", pl: "dwadzieścia" }
    ]
  },
  adjectives_opposites: {
    labelDe: "Eigenschaften & Gegensätze",
    pairs: [
      { de: "groß", pl: "duży" },
      { de: "klein", pl: "mały" },
      { de: "schnell", pl: "szybki" },
      { de: "langsam", pl: "wolny" },
      { de: "gut", pl: "dobry" },
      { de: "schlecht", pl: "zły" },
      { de: "neu", pl: "nowy" },
      { de: "alt", pl: "stary" },
      { de: "jung", pl: "młody" },
      { de: "schön", pl: "ładny" },
      { de: "hässlich", pl: "brzydki" },
      { de: "heiß", pl: "gorący" },
      { de: "kalt", pl: "zimny" },
      { de: "warm", pl: "ciepły" },
      { de: "nah", pl: "bliski" },
      { de: "weit", pl: "daleki" },
      { de: "lang", pl: "długi" },
      { de: "kurz", pl: "krótki" },
      { de: "hoch", pl: "wysoki" },
      { de: "niedrig", pl: "niski" },
      { de: "teuer", pl: "drogi" },
      { de: "billig", pl: "tani" },
      { de: "schwer (Gewicht)", pl: "ciężki" },
      { de: "leicht (Gewicht)", pl: "lekki" },
      { de: "schwierig", pl: "trudny" },
      { de: "einfach", pl: "łatwy" },
      { de: "sauber", pl: "czysty" },
      { de: "schmutzig", pl: "brudny" },
      { de: "voll", pl: "pełny" },
      { de: "leer", pl: "pusty" }
    ]
  },
  possessive_pronouns: {
    labelDe: "Possessivpronomen",
    rules:
      "Possessivpronomen (zaimki dzierżawcze)\n" +
      "• mój, twój, nasz, wasz, swój richten sich – wie im Deutschen – nach dem Besessenen und werden wie Adjektive gebeugt: mój dom, moja kawa, moje okno.\n" +
      "• Plural: moi, twoi, nasi, wasi, swoi bei männlichen Personen (moi bracia), sonst moje, twoje, nasze, wasze, swoje (moje książki).\n" +
      "• jego (sein), jej (ihr), ich (ihr, Plural) richten sich nur nach dem Besitzer und bleiben immer gleich: jego dom, jego kawa, z jego bratem.\n" +
      "• jego gilt für Besitzer „er“ und „es“: dziecko i jego zabawka = das Kind und sein Spielzeug.\n" +
      "• Höflich „Ihr“: Pana (Herr), Pani (Frau), Państwa (mehrere / gemischt) – ebenfalls unveränderlich: Pana paszport, Pani torba, Państwa pokój.\n" +
      "• swój (der eigene) bezieht sich auf das Subjekt desselben Satzes, in jeder Person.\n" +
      "• In der 3. Person ist swój Pflicht, sonst ändert sich der Sinn: Marek kocha swoją żonę (seine eigene) – Marek kocha jego żonę (die Frau eines anderen Mannes).\n" +
      "• In der 1. und 2. Person ist swój möglich, aber nicht nötig: Mam swój / mój pokój.\n" +
      "• swój steht nie im Subjekt selbst: Jego (nicht: swój) brat mieszka w Krakowie.\n" +
      "• In den Fällen wie Adjektive: z moim bratem (Instr.), do mojej mamy (Gen.), w naszym domu (Lok.).",
    pairs: [
      { de: "mein (m)", pl: "mój" },
      { de: "meine (f)", pl: "moja" },
      { de: "mein (n)", pl: "moje" },
      { de: "dein (m)", pl: "twój" },
      { de: "deine (f)", pl: "twoja" },
      { de: "dein (n)", pl: "twoje" },
      { de: "sein (Besitzer: er/es)", pl: "jego" },
      { de: "ihr (Besitzerin: sie)", pl: "jej" },
      { de: "unser (m)", pl: "nasz" },
      { de: "unsere (f)", pl: "nasza" },
      { de: "unser (n)", pl: "nasze" },
      { de: "euer (m)", pl: "wasz" },
      { de: "eure (f)", pl: "wasza" },
      { de: "euer (n)", pl: "wasze" },
      { de: "ihr (Besitzer: sie Pl.)", pl: "ich" },
      { de: "Ihr (formell, Herr)", pl: "Pana" },
      { de: "Ihr (formell, Frau)", pl: "Pani" },
      { de: "Ihr (formell, Plural)", pl: "Państwa" },
      { de: "sein/ihr eigener (m)", pl: "swój" },
      { de: "seine/ihre eigene (f)", pl: "swoja" },
      { de: "sein/ihr eigenes (n)", pl: "swoje" }
    ]
  },
  basic_verbs_1: {
    labelDe: "Grundverben I (Konjugationen)",
    rules:
      "Präsens (czas teraźniejszy)\n" +
      "• Das Verb zeigt Person und Zahl durch die Endung; das Pronomen (ja, ty, on …) lässt man meist weg: Mam czas. = Ich habe Zeit.\n" +
      "• Es gibt nur eine Gegenwartsform: robię = ich mache / ich mache gerade.\n" +
      "• Ein Präsens haben nur unvollendete Verben (→ Lektion Verbaspekt).\n" +
      "Vier Endungsmuster (ich, du, er/sie/es, wir, ihr, sie):\n" +
      "• -ę, -esz: -ę, -esz, -e, -emy, -ecie, -ą – piję, pijesz, pije, pijemy, pijecie, piją; ebenso idę, idziesz (iść), chcę, chcesz (chcieć).\n" +
      "• -ę, -isz: -ę, -isz, -i, -imy, -icie, -ą – robię, robisz, robi, robimy, robicie, robią; ebenso mówię, mówisz; widzę, widzisz. Nach cz, sz, ż, rz steht y statt i: słyszę, słyszysz.\n" +
      "• -am, -asz: -am, -asz, -a, -amy, -acie, -ają – mam, masz, ma, mamy, macie, mają (mieć).\n" +
      "• -em, -esz: -em, -esz, -e, -emy, -ecie, -eją/-ą – rozumiem … rozumieją; unregelmäßig in der 3. Person Plural: jem … jedzą (jeść), wiem … wiedzą (wiedzieć).\n" +
      "• Der Infinitiv verrät das Muster nicht sicher: Verben immer mit ich- und du-Form lernen (piję, pijesz).\n" +
      "• Stammwechsel: ich- und sie-Plural-Form haben oft einen anderen Endkonsonanten als die übrigen Formen: idę/idą – idziesz, idzie; widzę/widzą – widzisz, widzi.\n" +
      "• być ist unregelmäßig: jestem, jesteś, jest, jesteśmy, jesteście, są.\n" +
      "Personen & Verneinung:\n" +
      "• oni = Gruppe mit mindestens einem Mann, one = nur Frauen, Kinder, Tiere oder Dinge; die Präsensform ist dieselbe.\n" +
      "• Höfliches „Sie“: Pan (Herr) / Pani (Frau) + 3. Person Singular, Państwo + 3. Person Plural: Czy Pan ma czas? = Haben Sie Zeit?\n" +
      "• Verneinung: nie direkt vor das Verb: nie mam, nie wiem.\n" +
      "• Ja/Nein-Frage: Czy + Aussagesatz (Czy masz czas?) oder nur durch die Satzmelodie.",
    pairs: [
      { de: "ich bin (sein)", pl: "ja jestem" },
      { de: "du bist", pl: "ty jesteś" },
      { de: "er/sie/es ist", pl: "on/ona/ono jest" },
      { de: "wir sind", pl: "my jesteśmy" },
      { de: "ihr seid", pl: "wy jesteście" },
      { de: "sie sind", pl: "oni/one są" },
      
      { de: "ich habe (haben)", pl: "ja mam" },
      { de: "du hast", pl: "ty masz" },
      { de: "er/sie/es hat", pl: "on/ona/ono ma" },
      { de: "wir haben", pl: "my mamy" },
      { de: "ihr habt", pl: "wy macie" },
      { de: "sie haben", pl: "oni/one mają" },
      
      { de: "ich mache (machen)", pl: "ja robię" },
      { de: "du machst", pl: "ty robisz" },
      { de: "er/sie/es macht", pl: "on/ona/ono robi" },
      { de: "wir machen", pl: "my robimy" },
      { de: "ihr macht", pl: "wy robicie" },
      { de: "sie machen", pl: "oni/one robią" },
      
      { de: "ich gehe (gehen)", pl: "ja idę" },
      { de: "du gehst", pl: "ty idziesz" },
      { de: "er/sie/es geht", pl: "on/ona/ono idzie" },
      { de: "wir gehen", pl: "my idziemy" },
      { de: "ihr geht", pl: "wy idziecie" },
      { de: "sie gehen", pl: "oni/one idą" },
      
      { de: "ich esse (essen)", pl: "ja jem" },
      { de: "du isst", pl: "ty jesz" },
      { de: "er/sie/es isst", pl: "on/ona/ono je" },
      { de: "wir essen", pl: "my jemy" },
      { de: "ihr esst", pl: "wy jecie" },
      { de: "sie essen", pl: "oni/one jedzą" },
      
      { de: "ich trinke (trinken)", pl: "ja piję" },
      { de: "du trinkst", pl: "ty pijesz" },
      { de: "er/sie/es trinkt", pl: "on/ona/ono pije" },
      { de: "wir trinken", pl: "my pijemy" },
      { de: "ihr trinkt", pl: "wy pijecie" },
      { de: "sie trinken", pl: "oni/one piją" },
      
      { de: "ich spreche (sprechen)", pl: "ja mówię" },
      { de: "du sprichst", pl: "ty mówisz" },
      { de: "er/sie/es spricht", pl: "on/ona/ono mówi" },
      { de: "wir sprechen", pl: "my mówimy" },
      { de: "ihr sprecht", pl: "wy mówicie" },
      { de: "sie sprechen", pl: "oni/one mówią" },
      
      { de: "ich weiß (wissen)", pl: "ja wiem" },
      { de: "du weißt", pl: "ty wiesz" },
      { de: "er/sie/es weiß", pl: "on/ona/ono wie" },
      { de: "wir wissen", pl: "my wiemy" },
      { de: "ihr wisst", pl: "wy wiecie" },
      { de: "sie wissen", pl: "oni/one wiedzą" },
      
      { de: "ich sehe (sehen)", pl: "ja widzę" },
      { de: "du siehst", pl: "ty widzisz" },
      { de: "er/sie/es sieht", pl: "on/ona/ono widzi" },
      { de: "wir sehen", pl: "my widzimy" },
      { de: "ihr seht", pl: "wy widzicie" },
      { de: "sie sehen", pl: "oni/one widzą" },
      
      { de: "ich will (wollen)", pl: "ja chcę" },
      { de: "du willst", pl: "ty chcesz" },
      { de: "er/sie/es will", pl: "on/ona/ono chce" },
      { de: "wir wollen", pl: "my chcemy" },
      { de: "ihr wollt", pl: "wy chcecie" },
      { de: "sie wollen", pl: "oni/one chcą" }
    ]
  },
  basic_verbs_2: {
    labelDe: "Grundverben II (Konjugationen)",
    rules:
      "Präsens (czas teraźniejszy)\n" +
      "• Das Verb zeigt Person und Zahl durch die Endung; das Pronomen (ja, ty, on …) lässt man meist weg: Mam czas. = Ich habe Zeit.\n" +
      "• Es gibt nur eine Gegenwartsform: robię = ich mache / ich mache gerade.\n" +
      "• Ein Präsens haben nur unvollendete Verben (→ Lektion Verbaspekt).\n" +
      "Vier Endungsmuster (ich, du, er/sie/es, wir, ihr, sie):\n" +
      "• -ę, -esz: -ę, -esz, -e, -emy, -ecie, -ą – mogę, możesz, może, możemy, możecie, mogą (móc); ebenso biorę, bierzesz (brać), piszę, piszesz (pisać), daję, dajesz (dawać).\n" +
      "• -ę, -isz: -ę, -isz, -i, -imy, -icie, -ą – lubię, lubisz, lubi …; ebenso myślę, myślisz; śpię, śpisz (spać). Ebenso muszę, musisz (musieć). Nach cz, sz, ż, rz steht y statt i: słyszę, słyszysz.\n" +
      "• -am, -asz: -am, -asz, -a, -amy, -acie, -ają – czytam, czytasz, czyta, czytamy, czytacie, czytają.\n" +
      "• -em, -esz: -em, -esz, -e, -emy, -ecie, -eją – rozumiem, rozumiesz, rozumie, rozumiemy, rozumiecie, rozumieją.\n" +
      "• Der Infinitiv verrät das Muster nicht sicher (pisać → piszę, aber czytać → czytam; dawać → daję; spać → śpię): Verben immer mit ich- und du-Form lernen.\n" +
      "• Stammwechsel: ich- und sie-Plural-Form haben oft einen anderen Stamm als die übrigen Formen: mogę/mogą – możesz; biorę/biorą – bierzesz.\n" +
      "Modalverben:\n" +
      "• móc (können, dürfen), musieć (müssen), chcieć (wollen), woleć (lieber wollen) + Infinitiv: Muszę pracować. Mogę wejść? = Darf ich hereinkommen?\n" +
      "• „Können“ als erlernte Fähigkeit = umieć: Umiem pływać. = Ich kann schwimmen. Eine Sprache können: Mówię po polsku.\n" +
      "• „Nicht dürfen“ (Verbot) = nie wolno, unpersönlich: Tu nie wolno palić. – „Nicht müssen“ = nie musieć: Nie musisz czekać.\n" +
      "• lubić + Akkusativ (Lubię kawę) oder + Infinitiv (Lubię czytać). „Ich möchte“ = chciałbym / chciałabym (→ Konditional).\n" +
      "Personen & Verneinung:\n" +
      "• oni = Gruppe mit mindestens einem Mann, one = nur Frauen, Kinder, Tiere oder Dinge; die Präsensform ist dieselbe.\n" +
      "• Höfliches „Sie“: Pan (Herr) / Pani (Frau) + 3. Person Singular, Państwo + 3. Person Plural: Czy Pan ma czas? = Haben Sie Zeit?\n" +
      "• Verneinung: nie direkt vor das Verb: nie mam, nie wiem.\n" +
      "• Ja/Nein-Frage: Czy + Aussagesatz (Czy masz czas?) oder nur durch die Satzmelodie.",
    pairs: [
      { de: "ich kann (können)", pl: "ja mogę" },
      { de: "du kannst", pl: "ty możesz" },
      { de: "er/sie/es kann", pl: "on/ona/ono może" },
      { de: "wir können", pl: "my możemy" },
      { de: "ihr könnt", pl: "wy możecie" },
      { de: "sie können", pl: "oni/one mogą" },
      
      { de: "ich muss (müssen)", pl: "ja muszę" },
      { de: "du musst", pl: "ty musisz" },
      { de: "er/sie/es muss", pl: "on/ona/ono musi" },
      { de: "wir müssen", pl: "my musimy" },
      { de: "ihr müsst", pl: "wy musicie" },
      { de: "sie müssen", pl: "oni/one muszą" },
      
      { de: "ich mag (mögen)", pl: "ja lubię" },
      { de: "du magst", pl: "ty lubisz" },
      { de: "er/sie/es mag", pl: "on/ona/ono lubi" },
      { de: "wir mögen", pl: "my lubimy" },
      { de: "ihr mögt", pl: "wy lubicie" },
      { de: "sie mögen", pl: "oni/one lubią" },
      
      { de: "ich denke (denken)", pl: "ja myślę" },
      { de: "du denkst", pl: "ty myślisz" },
      { de: "er/sie/es denkt", pl: "on/ona/ono myśli" },
      { de: "wir denken", pl: "my myślimy" },
      { de: "ihr denkt", pl: "wy myślicie" },
      { de: "sie denken", pl: "oni/one myślą" },
      
      { de: "ich verstehe (verstehen)", pl: "ja rozumiem" },
      { de: "du verstehst", pl: "ty rozumiesz" },
      { de: "er/sie/es versteht", pl: "on/ona/ono rozumie" },
      { de: "wir verstehen", pl: "my rozumiemy" },
      { de: "ihr versteht", pl: "wy rozumiecie" },
      { de: "sie verstehen", pl: "oni/one rozumieją" },
      
      { de: "ich gebe (geben)", pl: "ja daję" },
      { de: "du gibst", pl: "ty dajesz" },
      { de: "er/sie/es gibt", pl: "on/ona/ono daje" },
      { de: "wir geben", pl: "my dajemy" },
      { de: "ihr gebt", pl: "wy dajecie" },
      { de: "sie geben", pl: "oni/one dają" },
      
      { de: "ich nehme (nehmen)", pl: "ja biorę" },
      { de: "du nimmst", pl: "ty bierzesz" },
      { de: "er/sie/es nimmt", pl: "on/ona/ono bierze" },
      { de: "wir nehmen", pl: "my bierzemy" },
      { de: "ihr nehmt", pl: "wy bierzecie" },
      { de: "sie nehmen", pl: "oni/one biorą" },
      
      { de: "ich lese (lesen)", pl: "ja czytam" },
      { de: "du liest", pl: "ty czytasz" },
      { de: "er/sie/es liest", pl: "on/ona/ono czyta" },
      { de: "wir lesen", pl: "my czytamy" },
      { de: "ihr lest", pl: "wy czytacie" },
      { de: "sie lesen", pl: "oni/one czytają" },
      
      { de: "ich schreibe (schreiben)", pl: "ja piszę" },
      { de: "du schreibst", pl: "ty piszesz" },
      { de: "er/sie/es schreibt", pl: "on/ona/ono pisze" },
      { de: "wir schreiben", pl: "my piszemy" },
      { de: "ihr schreibt", pl: "wy piszecie" },
      { de: "sie schreiben", pl: "oni/one piszą" },
      
      { de: "ich schlafe (schlafen)", pl: "ja śpię" },
      { de: "du schläfst", pl: "ty śpisz" },
      { de: "er/sie/es schläft", pl: "on/ona/ono śpi" },
      { de: "wir schlafen", pl: "my śpimy" },
      { de: "ihr schlaft", pl: "wy śpicie" },
      { de: "sie schlafen", pl: "oni/one śpią" }
    ]
  },
  basic_verbs_1_past: {
    labelDe: "Grundverben I (Vergangenheit)",
    rules:
      "Vergangenheit (czas przeszły)\n" +
      "• Es gibt nur eine Vergangenheitszeit; sie deckt Präteritum und Perfekt ab: robiłem = ich machte / ich habe gemacht.\n" +
      "• Bildung: Infinitiv ohne -ć + ł + Endung; die Endung zeigt Person UND Geschlecht: robi-ć → robi-ł-em.\n" +
      "Singular:\n" +
      "• männlich: -łem (ich), -łeś (du), -ł (er) – robiłem, robiłeś, robił.\n" +
      "• weiblich: -łam (ich), -łaś (du), -ła (sie) – robiłam, robiłaś, robiła.\n" +
      "• sächlich: -ło (es) – robiło (ich-/du-Formen kommen praktisch nicht vor).\n" +
      "Plural:\n" +
      "• männlich-persönlich (Gruppe mit mindestens einem Mann): -liśmy, -liście, -li – robiliśmy, robiliście, robili.\n" +
      "• sonst (nur Frauen, Kinder, Tiere, Dinge): -łyśmy, -łyście, -ły – robiłyśmy, robiłyście, robiły.\n" +
      "• Betonung: -liśmy/-liście auf der drittletzten Silbe: roBIliśmy.\n" +
      "Lautwechsel:\n" +
      "• Verben auf -eć: e wird zu a, außer in der männlich-persönlichen Mehrzahl: mieć → miał, miała, mieli; wiedzieć → wiedział, wiedzieli; widzieć → widział, widzieli; chcieć → chciał, chcieli.\n" +
      "• Unregelmäßig: iść → szedłem/szłam, szedł, szła, szło, szli, szły; jeść → jadłem/jadłam, jadł, jadła, jedli, jadły.\n" +
      "• Aspekt: Die Verben dieser Lektion sind unvollendet (Vorgang, Gewohnheit). „Erledigt“ drückt der vollendete Partner aus: zrobiłem = ich habe (fertig) gemacht, zjadłam = ich habe aufgegessen, powiedziałem = ich habe gesagt.\n" +
      "Weiteres:\n" +
      "• Verneinung: nie vor das Verb: nie byłem, nie miałam.\n" +
      "• Höflich: Pan był? / Pani była? / Państwo byli?\n" +
      "• Umgangssprachlich kann die Personalendung an ein früheres Wort wandern: Gdzieś był? = Gdzie byłeś?",
    pairs: [
      { de: "ich war (sein)", pl: "ja byłem / byłam" },
      { de: "du warst", pl: "ty byłeś / byłaś" },
      { de: "er war", pl: "on był" },
      { de: "sie war", pl: "ona była" },
      { de: "es war", pl: "ono było" },
      { de: "wir waren", pl: "my byliśmy / byłyśmy" },
      { de: "ihr wart", pl: "wy byliście / byłyście" },
      { de: "sie waren (m)", pl: "oni byli" },
      { de: "sie waren (f/n)", pl: "one były" },
      
      { de: "ich hatte (haben)", pl: "ja miałem / miałam" },
      { de: "du hattest", pl: "ty miałeś / miałaś" },
      { de: "er hatte", pl: "on miał" },
      { de: "sie hatte", pl: "ona miała" },
      { de: "es hatte", pl: "ono miało" },
      { de: "wir hatten", pl: "my mieliśmy / miałyśmy" },
      { de: "ihr hattet", pl: "wy mieliście / miałyście" },
      { de: "sie hatten (m)", pl: "oni mieli" },
      { de: "sie hatten (f/n)", pl: "one miały" },
      
      { de: "ich machte (machen)", pl: "ja robiłem / robiłam" },
      { de: "du machtest", pl: "ty robiłeś / robiłaś" },
      { de: "er machte", pl: "on robił" },
      { de: "sie machte", pl: "ona robiła" },
      { de: "es machte", pl: "ono robiło" },
      { de: "wir machten", pl: "my robiliśmy / robiłyśmy" },
      { de: "ihr machtet", pl: "wy robiliście / robiłyście" },
      { de: "sie machten (m)", pl: "oni robili" },
      { de: "sie machten (f/n)", pl: "one robiły" },
      
      { de: "ich ging (gehen)", pl: "ja szedłem / szłam" },
      { de: "du gingst", pl: "ty szedłeś / szłaś" },
      { de: "er ging", pl: "on szedł" },
      { de: "sie ging", pl: "ona szła" },
      { de: "es ging", pl: "ono szło" },
      { de: "wir gingen", pl: "my szliśmy / szłyśmy" },
      { de: "ihr gingt", pl: "wy szliście / szłyście" },
      { de: "sie gingen (m)", pl: "oni szli" },
      { de: "sie gingen (f/n)", pl: "one szły" },
      
      { de: "ich aß (essen)", pl: "ja jadłem / jadłam" },
      { de: "du aßest", pl: "ty jadłeś / jadłaś" },
      { de: "er aß", pl: "on jadł" },
      { de: "sie aß", pl: "ona jadła" },
      { de: "es aß", pl: "ono jadło" },
      { de: "wir aßen", pl: "my jedliśmy / jadłyśmy" },
      { de: "ihr aßt", pl: "wy jedliście / jadłyście" },
      { de: "sie aßen (m)", pl: "oni jedli" },
      { de: "sie aßen (f/n)", pl: "one jadły" },
      
      { de: "ich trank (trinken)", pl: "ja piłem / piłam" },
      { de: "du trankst", pl: "ty piłeś / piłaś" },
      { de: "er trank", pl: "on pił" },
      { de: "sie trank", pl: "ona piła" },
      { de: "es trank", pl: "ono piło" },
      { de: "wir tranken", pl: "my piliśmy / piłyśmy" },
      { de: "ihr trankt", pl: "wy piliście / piłyście" },
      { de: "sie tranken (m)", pl: "oni pili" },
      { de: "sie tranken (f/n)", pl: "one piły" },
      
      { de: "ich sprach (sprechen)", pl: "ja mówiłem / mówiłam" },
      { de: "du sprachst", pl: "ty mówiłeś / mówiłaś" },
      { de: "er sprach", pl: "on mówił" },
      { de: "sie sprach", pl: "ona mówiła" },
      { de: "es sprach", pl: "ono mówiło" },
      { de: "wir sprachen", pl: "my mówiliśmy / mówiłyśmy" },
      { de: "ihr spracht", pl: "wy mówiliście / mówiłyście" },
      { de: "sie sprachen (m)", pl: "oni mówili" },
      { de: "sie sprachen (f/n)", pl: "one mówiły" },
      
      { de: "ich wusste (wissen)", pl: "ja wiedziałem / wiedziałam" },
      { de: "du wusstest", pl: "ty wiedziałeś / wiedziałaś" },
      { de: "er wusste", pl: "on wiedział" },
      { de: "sie wusste", pl: "ona wiedziała" },
      { de: "es wusste", pl: "ono wiedziało" },
      { de: "wir wussten", pl: "my wiedzieliśmy / wiedziałyśmy" },
      { de: "ihr wusstet", pl: "wy wiedzieliście / wiedziałyście" },
      { de: "sie wussten (m)", pl: "oni wiedzieli" },
      { de: "sie wussten (f/n)", pl: "one wiedziały" },
      
      { de: "ich sah (sehen)", pl: "ja widziałem / widziałam" },
      { de: "du sahst", pl: "ty widziałeś / widziałaś" },
      { de: "er sah", pl: "on widział" },
      { de: "sie sah", pl: "ona widziała" },
      { de: "es sah", pl: "ono widziało" },
      { de: "wir sahen", pl: "my widzieliśmy / widziałyśmy" },
      { de: "ihr saht", pl: "wy widzieliście / widziałyście" },
      { de: "sie sahen (m)", pl: "oni widzieli" },
      { de: "sie sahen (f/n)", pl: "one widziały" },
      
      { de: "ich wollte (wollen)", pl: "ja chciałem / chciałam" },
      { de: "du wolltest", pl: "ty chciałeś / chciałaś" },
      { de: "er wollte", pl: "on chciał" },
      { de: "sie wollte", pl: "ona chciała" },
      { de: "es wollte", pl: "ono chciało" },
      { de: "wir wollten", pl: "my chcieliśmy / chciałyśmy" },
      { de: "ihr wolltet", pl: "wy chcieliście / chciałyście" },
      { de: "sie wollten (m)", pl: "oni chcieli" },
      { de: "sie wollten (f/n)", pl: "one chciały" }
    ]
  },
  basic_verbs_2_past: {
    labelDe: "Grundverben II (Vergangenheit)",
    rules:
      "Vergangenheit (czas przeszły)\n" +
      "• Es gibt nur eine Vergangenheitszeit; sie deckt Präteritum und Perfekt ab: robiłem = ich machte / ich habe gemacht.\n" +
      "• Bildung: Infinitiv ohne -ć + ł + Endung; die Endung zeigt Person UND Geschlecht: robi-ć → robi-ł-em.\n" +
      "Singular:\n" +
      "• männlich: -łem (ich), -łeś (du), -ł (er) – robiłem, robiłeś, robił.\n" +
      "• weiblich: -łam (ich), -łaś (du), -ła (sie) – robiłam, robiłaś, robiła.\n" +
      "• sächlich: -ło (es) – robiło (ich-/du-Formen kommen praktisch nicht vor).\n" +
      "Plural:\n" +
      "• männlich-persönlich (Gruppe mit mindestens einem Mann): -liśmy, -liście, -li – robiliśmy, robiliście, robili.\n" +
      "• sonst (nur Frauen, Kinder, Tiere, Dinge): -łyśmy, -łyście, -ły – robiłyśmy, robiłyście, robiły.\n" +
      "• Betonung: -liśmy/-liście auf der drittletzten Silbe: roBIliśmy.\n" +
      "Lautwechsel:\n" +
      "• Verben auf -eć: e wird zu a, außer in der männlich-persönlichen Mehrzahl: musieć → musiał, musieli; myśleć → myślał, myśleli; rozumieć → rozumiał, rozumieli.\n" +
      "• móc (Infinitiv auf -c): mógł nur in der er-Form, sonst o: mogłem, mogłam, mogła, mogli, mogły.\n" +
      "• Aspekt: dawać und brać sind unvollendet: dawałem = ich gab (öfter) / war beim Geben. Eine einmalige, erledigte Handlung drückt der vollendete Partner aus: dałem (dać), wziąłem/wzięłam (wziąć) = ich habe gegeben/genommen; przeczytałem, napisałem.\n" +
      "Weiteres:\n" +
      "• Verneinung: nie vor das Verb: nie byłem, nie miałam.\n" +
      "• Höflich: Pan był? / Pani była? / Państwo byli?\n" +
      "• Umgangssprachlich kann die Personalendung an ein früheres Wort wandern: Gdzieś był? = Gdzie byłeś?",
    pairs: [
      { de: "ich konnte (können)", pl: "ja mogłem / mogłam" },
      { de: "du konntest", pl: "ty mogłeś / mogłaś" },
      { de: "er konnte", pl: "on mógł" },
      { de: "sie konnte", pl: "ona mogła" },
      { de: "es konnte", pl: "ono mogło" },
      { de: "wir konnten", pl: "my mogliśmy / mogłyśmy" },
      { de: "ihr konntet", pl: "wy mogliście / mogłyście" },
      { de: "sie konnten (m)", pl: "oni mogli" },
      { de: "sie konnten (f/n)", pl: "one mogły" },
      
      { de: "ich musste (müssen)", pl: "ja musiałem / musiałam" },
      { de: "du musstest", pl: "ty musiałeś / musiałaś" },
      { de: "er musste", pl: "on musiał" },
      { de: "sie musste", pl: "ona musiała" },
      { de: "es musste", pl: "ono musiało" },
      { de: "wir mussten", pl: "my musieliśmy / musiałyśmy" },
      { de: "ihr musstet", pl: "wy musieliście / musiałyście" },
      { de: "sie mussten (m)", pl: "oni musieli" },
      { de: "sie mussten (f/n)", pl: "one musiały" },
      
      { de: "ich mochte (mögen)", pl: "ja lubiłem / lubiłam" },
      { de: "du mochtest", pl: "ty lubiłeś / lubiłaś" },
      { de: "er mochte", pl: "on lubił" },
      { de: "sie mochte", pl: "ona lubiła" },
      { de: "es mochte", pl: "ono lubiło" },
      { de: "wir mochten", pl: "my lubiliśmy / lubiłyśmy" },
      { de: "ihr mochtet", pl: "wy lubiliście / lubiłyście" },
      { de: "sie mochten (m)", pl: "oni lubili" },
      { de: "sie mochten (f/n)", pl: "one lubiły" },
      
      { de: "ich dachte (denken)", pl: "ja myślałem / myślałam" },
      { de: "du dachtest", pl: "ty myślałeś / myślałaś" },
      { de: "er dachte", pl: "on myślał" },
      { de: "sie dachte", pl: "ona myślała" },
      { de: "es dachte", pl: "ono myślało" },
      { de: "wir dachten", pl: "my myśleliśmy / myślałyśmy" },
      { de: "ihr dachtet", pl: "wy myśleliście / myślałyście" },
      { de: "sie dachten (m)", pl: "oni myśleli" },
      { de: "sie dachten (f/n)", pl: "one myślały" },
      
      { de: "ich verstand (verstehen)", pl: "ja rozumiałem / rozumiałam" },
      { de: "du verstandst", pl: "ty rozumiałeś / rozumiałaś" },
      { de: "er verstand", pl: "on rozumiał" },
      { de: "sie verstand", pl: "ona rozumiała" },
      { de: "es verstand", pl: "ono rozumiało" },
      { de: "wir verstanden", pl: "my rozumieliśmy / rozumiałyśmy" },
      { de: "ihr verstandet", pl: "wy rozumieliście / rozumiałyście" },
      { de: "sie verstanden (m)", pl: "oni rozumieli" },
      { de: "sie verstanden (f/n)", pl: "one rozumiały" },
      
      { de: "ich gab (geben)", pl: "ja dawałem / dawałam" },
      { de: "du gabst", pl: "ty dawałeś / dawałaś" },
      { de: "er gab", pl: "on dawał" },
      { de: "sie gab", pl: "ona dawała" },
      { de: "es gab", pl: "ono dawało" },
      { de: "wir gaben", pl: "my dawaliśmy / dawałyśmy" },
      { de: "ihr gabt", pl: "wy dawaliście / dawałyście" },
      { de: "sie gaben (m)", pl: "oni dawali" },
      { de: "sie gaben (f/n)", pl: "one dawały" },
      
      { de: "ich nahm (nehmen)", pl: "ja brałem / brałam" },
      { de: "du nahmst", pl: "ty brałeś / brałaś" },
      { de: "er nahm", pl: "on brał" },
      { de: "sie nahm", pl: "ona brała" },
      { de: "es nahm", pl: "ono brało" },
      { de: "wir nahmen", pl: "my braliśmy / brałyśmy" },
      { de: "ihr nahmt", pl: "wy braliście / brałyście" },
      { de: "sie nahmen (m)", pl: "oni brali" },
      { de: "sie nahmen (f/n)", pl: "one brały" },
      
      { de: "ich las (lesen)", pl: "ja czytałem / czytałam" },
      { de: "du last", pl: "ty czytałeś / czytałaś" },
      { de: "er las", pl: "on czytał" },
      { de: "sie las", pl: "ona czytała" },
      { de: "es las", pl: "ono czytało" },
      { de: "wir lasen", pl: "my czytaliśmy / czytałyśmy" },
      { de: "ihr last", pl: "wy czytaliście / czytałyście" },
      { de: "sie lasen (m)", pl: "oni czytali" },
      { de: "sie lasen (f/n)", pl: "one czytały" },
      
      { de: "ich schrieb (schreiben)", pl: "ja pisałem / pisałam" },
      { de: "du schriebst", pl: "ty pisałeś / pisałaś" },
      { de: "er schrieb", pl: "on pisał" },
      { de: "sie schrieb", pl: "ona pisała" },
      { de: "es schrieb", pl: "ono pisało" },
      { de: "wir schrieben", pl: "my pisaliśmy / pisałyśmy" },
      { de: "ihr schriebt", pl: "wy pisaliście / pisałyście" },
      { de: "sie schrieben (m)", pl: "oni pisali" },
      { de: "sie schrieben (f/n)", pl: "one pisały" },
      
      { de: "ich schlief (schlafen)", pl: "ja spałem / spałam" },
      { de: "du schliefst", pl: "ty spałeś / spałaś" },
      { de: "er schlief", pl: "on spał" },
      { de: "sie schlief", pl: "ona spała" },
      { de: "es schlief", pl: "ono spało" },
      { de: "wir schliefen", pl: "my spaliśmy / spałyśmy" },
      { de: "ihr schlieft", pl: "wy spaliście / spałyście" },
      { de: "sie schliefen (m)", pl: "oni spali" },
      { de: "sie schliefen (f/n)", pl: "one spały" }
    ]
  },
  basic_verbs_1_future: {
    labelDe: "Grundverben I (Zukunft)",
    rules:
      "Zukunft (czas przyszły)\n" +
      "Unvollendete Verben – zusammengesetzte Zukunft:\n" +
      "• Zukunft von być + Infinitiv: będę robić = ich werde machen.\n" +
      "• oder być + l-Form (wie Vergangenheit, 3. Person): będę robił (m) / będę robiła (f); Plural: będziemy robili (männlich-persönlich) / będziemy robiły (sonst). Beide Varianten bedeuten dasselbe.\n" +
      "• Formen von być: będę, będziesz, będzie, będziemy, będziecie, będą.\n" +
      "Vollendete Verben – einfache Zukunft:\n" +
      "• Sie haben kein Präsens; ihre Präsens-Endungen ergeben die Zukunft: zrobię = ich werde (fertig) machen, napiszę = ich werde schreiben.\n" +
      "• będę + vollendetes Verb ist falsch (nicht: będę zrobić).\n" +
      "Besonderheiten dieser Lektion:\n" +
      "• być selbst hat nur die einfache Form: będę = ich werde sein (nie będę być).\n" +
      "• mieć und chcieć meist mit l-Form: będę miał(a), będę chciał(a); będę mieć / będę chcieć ist auch richtig.\n" +
      "• „Ich werde (hin)gehen“ sagt man meist vollendet: pójdę; będę iść ist selten. Ebenso: zjem (zjeść), wypiję (wypić), powiem (powiedzieć), zobaczę (zobaczyć).\n" +
      "Weiteres:\n" +
      "• Das Pronomen kann entfallen, weil będę … die Person zeigt.\n" +
      "• Verneinung: nie vor będę: nie będę pić.\n" +
      "• Wie im Deutschen steht für Geplantes oft das Präsens: Jutro idę do kina. = Morgen gehe ich ins Kino.",
    pairs: [
      { de: "ich werde sein (sein)", pl: "ja będę" },
      { de: "du wirst sein", pl: "ty będziesz" },
      { de: "er/sie/es wird sein", pl: "on/ona/ono będzie" },
      { de: "wir werden sein", pl: "my będziemy" },
      { de: "ihr werdet sein", pl: "wy będziecie" },
      { de: "sie werden sein", pl: "oni/one będą" },

      { de: "ich werde haben (haben)", pl: "ja będę mieć" },
      { de: "du wirst haben", pl: "ty będziesz mieć" },
      { de: "er/sie/es wird haben", pl: "on/ona/ono będzie mieć" },
      { de: "wir werden haben", pl: "my będziemy mieć" },
      { de: "ihr werdet haben", pl: "wy będziecie mieć" },
      { de: "sie werden haben", pl: "oni/one będą mieć" },

      { de: "ich werde machen (machen)", pl: "ja będę robić" },
      { de: "du wirst machen", pl: "ty będziesz robić" },
      { de: "er/sie/es wird machen", pl: "on/ona/ono będzie robić" },
      { de: "wir werden machen", pl: "my będziemy robić" },
      { de: "ihr werdet machen", pl: "wy będziecie robić" },
      { de: "sie werden machen", pl: "oni/one będą robić" },

      { de: "ich werde gehen (gehen)", pl: "ja będę iść" },
      { de: "du wirst gehen", pl: "ty będziesz iść" },
      { de: "er/sie/es wird gehen", pl: "on/ona/ono będzie iść" },
      { de: "wir werden gehen", pl: "my będziemy iść" },
      { de: "ihr werdet gehen", pl: "wy będziecie iść" },
      { de: "sie werden gehen", pl: "oni/one będą iść" },

      { de: "ich werde essen (essen)", pl: "ja będę jeść" },
      { de: "du wirst essen", pl: "ty będziesz jeść" },
      { de: "er/sie/es wird essen", pl: "on/ona/ono będzie jeść" },
      { de: "wir werden essen", pl: "my będziemy jeść" },
      { de: "ihr werdet essen", pl: "wy będziecie jeść" },
      { de: "sie werden essen", pl: "oni/one będą jeść" },

      { de: "ich werde trinken (trinken)", pl: "ja będę pić" },
      { de: "du wirst trinken", pl: "ty będziesz pić" },
      { de: "er/sie/es wird trinken", pl: "on/ona/ono będzie pić" },
      { de: "wir werden trinken", pl: "my będziemy pić" },
      { de: "ihr werdet trinken", pl: "wy będziecie pić" },
      { de: "sie werden trinken", pl: "oni/one będą pić" },

      { de: "ich werde sprechen (sprechen)", pl: "ja będę mówić" },
      { de: "du wirst sprechen", pl: "ty będziesz mówić" },
      { de: "er/sie/es wird sprechen", pl: "on/ona/ono będzie mówić" },
      { de: "wir werden sprechen", pl: "my będziemy mówić" },
      { de: "ihr werdet sprechen", pl: "wy będziecie mówić" },
      { de: "sie werden sprechen", pl: "oni/one będą mówić" },

      { de: "ich werde wissen (wissen)", pl: "ja będę wiedzieć" },
      { de: "du wirst wissen", pl: "ty będziesz wiedzieć" },
      { de: "er/sie/es wird wissen", pl: "on/ona/ono będzie wiedzieć" },
      { de: "wir werden wissen", pl: "my będziemy wiedzieć" },
      { de: "ihr werdet wissen", pl: "wy będziecie wiedzieć" },
      { de: "sie werden wissen", pl: "oni/one będą wiedzieć" },

      { de: "ich werde sehen (sehen)", pl: "ja będę widzieć" },
      { de: "du wirst sehen", pl: "ty będziesz widzieć" },
      { de: "er/sie/es wird sehen", pl: "on/ona/ono będzie widzieć" },
      { de: "wir werden sehen", pl: "my będziemy widzieć" },
      { de: "ihr werdet sehen", pl: "wy będziecie widzieć" },
      { de: "sie werden sehen", pl: "oni/one będą widzieć" },

      { de: "ich werde wollen (wollen)", pl: "ja będę chcieć" },
      { de: "du wirst wollen", pl: "ty będziesz chcieć" },
      { de: "er/sie/es wird wollen", pl: "on/ona/ono będzie chcieć" },
      { de: "wir werden wollen", pl: "my będziemy chcieć" },
      { de: "ihr werdet wollen", pl: "wy będziecie chcieć" },
      { de: "sie werden wollen", pl: "oni/one będą chcieć" }
    ]
  },
  basic_verbs_2_future: {
    labelDe: "Grundverben II (Zukunft)",
    rules:
      "Zukunft (czas przyszły)\n" +
      "Unvollendete Verben – zusammengesetzte Zukunft:\n" +
      "• Zukunft von być + Infinitiv: będę robić = ich werde machen.\n" +
      "• oder być + l-Form (wie Vergangenheit, 3. Person): będę robił (m) / będę robiła (f); Plural: będziemy robili (männlich-persönlich) / będziemy robiły (sonst). Beide Varianten bedeuten dasselbe.\n" +
      "• Formen von być: będę, będziesz, będzie, będziemy, będziecie, będą.\n" +
      "Vollendete Verben – einfache Zukunft:\n" +
      "• Sie haben kein Präsens; ihre Präsens-Endungen ergeben die Zukunft: zrobię = ich werde (fertig) machen, napiszę = ich werde schreiben.\n" +
      "• będę + vollendetes Verb ist falsch (nicht: będę zrobić).\n" +
      "Besonderheiten dieser Lektion:\n" +
      "• Modalverben meist mit l-Form: będę mógł/mogła, będę musiał(a); będę móc / będę musieć ist auch richtig.\n" +
      "• Vollendete Partner mit einfacher Zukunft: przeczytam (przeczytać), napiszę (napisać), dam (dać), wezmę (wziąć), zrozumiem (zrozumieć), pomyślę (pomyśleć).\n" +
      "Weiteres:\n" +
      "• Das Pronomen kann entfallen, weil będę … die Person zeigt.\n" +
      "• Verneinung: nie vor będę: nie będę pić.\n" +
      "• Wie im Deutschen steht für Geplantes oft das Präsens: Jutro idę do kina. = Morgen gehe ich ins Kino.",
    pairs: [
      { de: "ich werde können (können)", pl: "ja będę móc" },
      { de: "du wirst können", pl: "ty będziesz móc" },
      { de: "er/sie/es wird können", pl: "on/ona/ono będzie móc" },
      { de: "wir werden können", pl: "my będziemy móc" },
      { de: "ihr werdet können", pl: "wy będziecie móc" },
      { de: "sie werden können", pl: "oni/one będą móc" },

      { de: "ich werde müssen (müssen)", pl: "ja będę musieć" },
      { de: "du wirst müssen", pl: "ty będziesz musieć" },
      { de: "er/sie/es wird müssen", pl: "on/ona/ono będzie musieć" },
      { de: "wir werden müssen", pl: "my będziemy musieć" },
      { de: "ihr werdet müssen", pl: "wy będziecie musieć" },
      { de: "sie werden müssen", pl: "oni/one będą musieć" },

      { de: "ich werde mögen (mögen)", pl: "ja będę lubić" },
      { de: "du wirst mögen", pl: "ty będziesz lubić" },
      { de: "er/sie/es wird mögen", pl: "on/ona/ono będzie lubić" },
      { de: "wir werden mögen", pl: "my będziemy lubić" },
      { de: "ihr werdet mögen", pl: "wy będziecie lubić" },
      { de: "sie werden mögen", pl: "oni/one będą lubić" },

      { de: "ich werde denken (denken)", pl: "ja będę myśleć" },
      { de: "du wirst denken", pl: "ty będziesz myśleć" },
      { de: "er/sie/es wird denken", pl: "on/ona/ono będzie myśleć" },
      { de: "wir werden denken", pl: "my będziemy myśleć" },
      { de: "ihr werdet denken", pl: "wy będziecie myśleć" },
      { de: "sie werden denken", pl: "oni/one będą myśleć" },

      { de: "ich werde verstehen (verstehen)", pl: "ja będę rozumieć" },
      { de: "du wirst verstehen", pl: "ty będziesz rozumieć" },
      { de: "er/sie/es wird verstehen", pl: "on/ona/ono będzie rozumieć" },
      { de: "wir werden verstehen", pl: "my będziemy rozumieć" },
      { de: "ihr werdet verstehen", pl: "wy będziecie rozumieć" },
      { de: "sie werden verstehen", pl: "oni/one będą rozumieć" },

      { de: "ich werde geben (geben)", pl: "ja będę dawać" },
      { de: "du wirst geben", pl: "ty będziesz dawać" },
      { de: "er/sie/es wird geben", pl: "on/ona/ono będzie dawać" },
      { de: "wir werden geben", pl: "my będziemy dawać" },
      { de: "ihr werdet geben", pl: "wy będziecie dawać" },
      { de: "sie werden geben", pl: "oni/one będą dawać" },

      { de: "ich werde nehmen (nehmen)", pl: "ja będę brać" },
      { de: "du wirst nehmen", pl: "ty będziesz brać" },
      { de: "er/sie/es wird nehmen", pl: "on/ona/ono będzie brać" },
      { de: "wir werden nehmen", pl: "my będziemy brać" },
      { de: "ihr werdet nehmen", pl: "wy będziecie brać" },
      { de: "sie werden nehmen", pl: "oni/one będą brać" },

      { de: "ich werde lesen (lesen)", pl: "ja będę czytać" },
      { de: "du wirst lesen", pl: "ty będziesz czytać" },
      { de: "er/sie/es wird lesen", pl: "on/ona/ono będzie czytać" },
      { de: "wir werden lesen", pl: "my będziemy czytać" },
      { de: "ihr werdet lesen", pl: "wy będziecie czytać" },
      { de: "sie werden lesen", pl: "oni/one będą czytać" },

      { de: "ich werde schreiben (schreiben)", pl: "ja będę pisać" },
      { de: "du wirst schreiben", pl: "ty będziesz pisać" },
      { de: "er/sie/es wird schreiben", pl: "on/ona/ono będzie pisać" },
      { de: "wir werden schreiben", pl: "my będziemy pisać" },
      { de: "ihr werdet schreiben", pl: "wy będziecie pisać" },
      { de: "sie werden schreiben", pl: "oni/one będą pisać" },

      { de: "ich werde schlafen (schlafen)", pl: "ja będę spać" },
      { de: "du wirst schlafen", pl: "ty będziesz spać" },
      { de: "er/sie/es wird schlafen", pl: "on/ona/ono będzie spać" },
      { de: "wir werden schlafen", pl: "my będziemy spać" },
      { de: "ihr werdet schlafen", pl: "wy będziecie spać" },
      { de: "sie werden schlafen", pl: "oni/one będą spać" }
    ]
  },

  // ===================================================================
  // A2-Aufbauwortschatz – kurze, thematische Lektionen (max. ~5 Min.)
  // Zusammen mit den Grundlagen-Lektionen wird der A2-Wortschatz erreicht.
  // ===================================================================

  numbers_20_100: {
    labelDe: "Zahlen 20–100 & mehr",
    rules:
      "Zahlen 20–100\n" +
      "• Zehner: dwadzieścia, trzydzieści, czterdzieści (-dzieści bei 20–40), pięćdziesiąt … dziewięćdziesiąt (-dziesiąt ab 50).\n" +
      "• Zusammengesetzt: Zehner zuerst, ohne „und“: dwadzieścia jeden (21), trzydzieści pięć (35).\n" +
      "• Hunderter und Tausender: sto, dwieście, trzysta, pięćset; tysiąc, dwa tysiące, pięć tysięcy (→ Zahlen ab 100).\n" +
      "Zahl + Nomen – die LETZTE Zahl entscheidet:\n" +
      "• endet auf 2, 3, 4 (nicht 12–14): Nominativ Plural: dwadzieścia dwa koty, trzydzieści cztery domy.\n" +
      "• alle übrigen Endungen (0, 1, 5–9 und 11–19): Genitiv Plural: dwadzieścia pięć kotów, trzydzieści kotów, sto dwanaście kotów.\n" +
      "• Endet die Zahl auf jeden (21, 31 …), bleibt jeden unverändert und das Nomen steht im Genitiv Plural: dwadzieścia jeden kotów, trzydzieści jeden lat.\n" +
      "• dwa/dwie auch in zusammengesetzten Zahlen: dwadzieścia dwie kobiety.\n" +
      "• Alter: Mam trzydzieści dwa lata. Mam czterdzieści pięć lat.",
    pairs: [
      { de: "einundzwanzig", pl: "dwadzieścia jeden" },
      { de: "zweiundzwanzig", pl: "dwadzieścia dwa" },
      { de: "fünfundzwanzig", pl: "dwadzieścia pięć" },
      { de: "dreißig", pl: "trzydzieści" },
      { de: "vierzig", pl: "czterdzieści" },
      { de: "fünfzig", pl: "pięćdziesiąt" },
      { de: "sechzig", pl: "sześćdziesiąt" },
      { de: "siebzig", pl: "siedemdziesiąt" },
      { de: "achtzig", pl: "osiemdziesiąt" },
      { de: "neunzig", pl: "dziewięćdziesiąt" },
      { de: "hundert", pl: "sto" },
      { de: "zweihundert", pl: "dwieście" },
      { de: "fünfhundert", pl: "pięćset" },
      { de: "tausend", pl: "tysiąc" },
      { de: "eine Million", pl: "milion" }
    ]
  },
  ordinal_numbers: {
    labelDe: "Ordnungszahlen",
    rules:
      "Ordnungszahlen\n" +
      "• Ordnungszahlen sind Adjektive: pierwszy, pierwsza, pierwsze; Plural pierwsi (männlich-persönlich) / pierwsze – gebeugt wie dobry (→ Adjektive in allen Fällen).\n" +
      "• Unregelmäßig: pierwszy (1.), drugi (2.), trzeci (3.), czwarty (4.); dann piąty, szósty, siódmy, ósmy (mit ó), dziewiąty, dziesiąty.\n" +
      "• 11.–19. auf -nasty: jedenasty, dwunasty, trzynasty … dziewiętnasty; 20. dwudziesty, 30. trzydziesty, 40. czterdziesty, 50. pięćdziesiąty, 100. setny, 1000. tysięczny.\n" +
      "• Zusammengesetzt: Zehner und Einer beide als Ordnungszahl: dwudziesty pierwszy (21.), trzydziesty piąty (35.). Hunderter und Tausender bleiben Grundzahl: rok dwa tysiące dwudziesty szósty.\n" +
      "• Datum: Tag als männliche Ordnungszahl (dzień): pierwszy maja; „am“ im Genitiv: pierwszego maja.\n" +
      "• Uhrzeit: weibliche Ordnungszahl (godzina): pierwsza, o ósmej (→ Uhrzeit & Datum).\n" +
      "• Stockwerk: na pierwszym piętrze = im 1. Stock; parter = Erdgeschoss.\n" +
      "• Jahrhunderte mit römischen Zahlen: XXI wiek = 21. Jahrhundert, w XX wieku.",
    pairs: [
      { de: "erster", pl: "pierwszy" },
      { de: "zweiter", pl: "drugi" },
      { de: "dritter", pl: "trzeci" },
      { de: "vierter", pl: "czwarty" },
      { de: "fünfter", pl: "piąty" },
      { de: "sechster", pl: "szósty" },
      { de: "siebter", pl: "siódmy" },
      { de: "achter", pl: "ósmy" },
      { de: "neunter", pl: "dziewiąty" },
      { de: "zehnter", pl: "dziesiąty" },
      { de: "elfter", pl: "jedenasty" },
      { de: "zwölfter", pl: "dwunasty" }
    ]
  },
  colors: {
    labelDe: "Farben",
    pairs: [
      { de: "die Farbe", pl: "kolor" },
      { de: "rot", pl: "czerwony" },
      { de: "blau", pl: "niebieski" },
      { de: "grün", pl: "zielony" },
      { de: "gelb", pl: "żółty" },
      { de: "schwarz", pl: "czarny" },
      { de: "weiß", pl: "biały" },
      { de: "grau", pl: "szary" },
      { de: "braun", pl: "brązowy" },
      { de: "orange", pl: "pomarańczowy" },
      { de: "rosa", pl: "różowy" },
      { de: "violett / lila", pl: "fioletowy" },
      { de: "dunkel", pl: "ciemny" },
      { de: "hell", pl: "jasny" },
      { de: "bunt", pl: "kolorowy" }
    ]
  },
  family: {
    labelDe: "Familie & Verwandte",
    pairs: [
      { de: "die Familie", pl: "rodzina" },
      { de: "die Mutter", pl: "matka" },
      { de: "der Vater", pl: "ojciec" },
      { de: "die Eltern", pl: "rodzice" },
      { de: "der Sohn", pl: "syn" },
      { de: "die Tochter", pl: "córka" },
      { de: "der Bruder", pl: "brat" },
      { de: "die Schwester", pl: "siostra" },
      { de: "die Oma", pl: "babcia" },
      { de: "der Opa", pl: "dziadek" },
      { de: "der Onkel", pl: "wujek" },
      { de: "die Tante", pl: "ciocia" },
      { de: "der Cousin", pl: "kuzyn" },
      { de: "die Cousine", pl: "kuzynka" },
      { de: "das Kind", pl: "dziecko" },
      { de: "der Ehemann", pl: "mąż" },
      { de: "die Ehefrau", pl: "żona" },
      { de: "der Enkel", pl: "wnuk" }
    ]
  },
  body_parts: {
    labelDe: "Körperteile",
    pairs: [
      { de: "der Körper", pl: "ciało" },
      { de: "der Kopf", pl: "głowa" },
      { de: "das Haar", pl: "włosy" },
      { de: "das Gesicht", pl: "twarz" },
      { de: "das Auge", pl: "oko" },
      { de: "die Nase", pl: "nos" },
      { de: "der Mund", pl: "usta" },
      { de: "das Ohr", pl: "ucho" },
      { de: "der Zahn", pl: "ząb" },
      { de: "der Hals", pl: "szyja" },
      { de: "die Hand", pl: "ręka" },
      { de: "der Finger", pl: "palec" },
      { de: "der Arm", pl: "ramię" },
      { de: "das Bein", pl: "noga" },
      { de: "der Fuß", pl: "stopa" },
      { de: "der Bauch", pl: "brzuch" },
      { de: "der Rücken", pl: "plecy" },
      { de: "das Herz", pl: "serce" }
    ]
  },
  health: {
    labelDe: "Gesundheit & beim Arzt",
    pairs: [
      { de: "die Gesundheit", pl: "zdrowie" },
      { de: "krank", pl: "chory" },
      { de: "gesund", pl: "zdrowy" },
      { de: "der Arzt", pl: "lekarz" },
      { de: "die Krankenschwester", pl: "pielęgniarka" },
      { de: "das Krankenhaus", pl: "szpital" },
      { de: "die Apotheke", pl: "apteka" },
      { de: "das Medikament", pl: "lekarstwo" },
      { de: "die Tablette", pl: "tabletka" },
      { de: "der Schmerz", pl: "ból" },
      { de: "das Fieber", pl: "gorączka" },
      { de: "die Erkältung", pl: "przeziębienie" },
      { de: "der Husten", pl: "kaszel" },
      { de: "die Kopfschmerzen", pl: "ból głowy" },
      { de: "die Krankheit", pl: "choroba" },
      { de: "sich fühlen", pl: "czuć się" },
      { de: "der Termin", pl: "wizyta" }
    ]
  },
  food_drink: {
    labelDe: "Essen & Trinken",
    pairs: [
      { de: "das Essen", pl: "jedzenie" },
      { de: "das Getränk", pl: "napój" },
      { de: "das Wasser", pl: "woda" },
      { de: "das Brot", pl: "chleb" },
      { de: "die Butter", pl: "masło" },
      { de: "der Käse", pl: "ser" },
      { de: "das Ei", pl: "jajko" },
      { de: "die Milch", pl: "mleko" },
      { de: "der Kaffee", pl: "kawa" },
      { de: "der Tee", pl: "herbata" },
      { de: "der Zucker", pl: "cukier" },
      { de: "das Salz", pl: "sól" },
      { de: "der Reis", pl: "ryż" },
      { de: "die Nudeln", pl: "makaron" },
      { de: "das Fleisch", pl: "mięso" },
      { de: "der Fisch", pl: "ryba" },
      { de: "die Suppe", pl: "zupa" },
      { de: "der Saft", pl: "sok" },
      { de: "das Bier", pl: "piwo" },
      { de: "der Wein", pl: "wino" }
    ]
  },
  fruits_vegetables: {
    labelDe: "Obst & Gemüse",
    pairs: [
      { de: "das Obst", pl: "owoce" },
      { de: "das Gemüse", pl: "warzywa" },
      { de: "der Apfel", pl: "jabłko" },
      { de: "die Banane", pl: "banan" },
      { de: "die Orange", pl: "pomarańcza" },
      { de: "die Zitrone", pl: "cytryna" },
      { de: "die Erdbeere", pl: "truskawka" },
      { de: "die Traube", pl: "winogrono" },
      { de: "die Birne", pl: "gruszka" },
      { de: "die Kirsche", pl: "wiśnia" },
      { de: "die Tomate", pl: "pomidor" },
      { de: "die Kartoffel", pl: "ziemniak" },
      { de: "die Zwiebel", pl: "cebula" },
      { de: "die Karotte", pl: "marchewka" },
      { de: "die Gurke", pl: "ogórek" },
      { de: "der Salat", pl: "sałata" },
      { de: "der Knoblauch", pl: "czosnek" },
      { de: "der Pilz", pl: "grzyb" }
    ]
  },
  meals_restaurant: {
    labelDe: "Mahlzeiten & Restaurant",
    pairs: [
      { de: "das Frühstück", pl: "śniadanie" },
      { de: "das Mittagessen", pl: "obiad" },
      { de: "das Abendessen", pl: "kolacja" },
      { de: "das Restaurant", pl: "restauracja" },
      { de: "das Café", pl: "kawiarnia" },
      { de: "die Speisekarte", pl: "menu" },
      { de: "die Rechnung", pl: "rachunek" },
      { de: "der Kellner", pl: "kelner" },
      { de: "das Hauptgericht", pl: "danie główne" },
      { de: "das Dessert", pl: "deser" },
      { de: "der Teller", pl: "talerz" },
      { de: "das Glas", pl: "szklanka" },
      { de: "die Tasse", pl: "filiżanka" },
      { de: "die Gabel", pl: "widelec" },
      { de: "das Messer", pl: "nóż" },
      { de: "der Löffel", pl: "łyżka" },
      { de: "bestellen", pl: "zamawiać" },
      { de: "lecker", pl: "smaczny" }
    ]
  },
  house_home: {
    labelDe: "Haus & Wohnung",
    pairs: [
      { de: "das Haus", pl: "dom" },
      { de: "die Wohnung", pl: "mieszkanie" },
      { de: "das Zimmer", pl: "pokój" },
      { de: "die Küche", pl: "kuchnia" },
      { de: "das Badezimmer", pl: "łazienka" },
      { de: "das Schlafzimmer", pl: "sypialnia" },
      { de: "das Wohnzimmer", pl: "salon" },
      { de: "der Flur", pl: "korytarz" },
      { de: "der Balkon", pl: "balkon" },
      { de: "der Garten", pl: "ogród" },
      { de: "die Tür", pl: "drzwi" },
      { de: "das Fenster", pl: "okno" },
      { de: "die Wand", pl: "ściana" },
      { de: "der Boden", pl: "podłoga" },
      { de: "die Decke (Zimmer)", pl: "sufit" },
      { de: "die Treppe", pl: "schody" },
      { de: "das Dach", pl: "dach" },
      { de: "der Keller", pl: "piwnica" }
    ]
  },
  furniture_household: {
    labelDe: "Möbel & Haushalt",
    pairs: [
      { de: "die Möbel", pl: "meble" },
      { de: "der Tisch", pl: "stół" },
      { de: "der Stuhl", pl: "krzesło" },
      { de: "das Bett", pl: "łóżko" },
      { de: "der Schrank", pl: "szafa" },
      { de: "das Sofa", pl: "kanapa" },
      { de: "der Sessel", pl: "fotel" },
      { de: "das Regal", pl: "półka" },
      { de: "die Lampe", pl: "lampa" },
      { de: "der Spiegel", pl: "lustro" },
      { de: "der Teppich", pl: "dywan" },
      { de: "der Kühlschrank", pl: "lodówka" },
      { de: "der Herd", pl: "kuchenka" },
      { de: "die Waschmaschine", pl: "pralka" },
      { de: "der Fernseher", pl: "telewizor" },
      { de: "das Kissen", pl: "poduszka" },
      { de: "die Decke (Bett)", pl: "koc" },
      { de: "das Handtuch", pl: "ręcznik" }
    ]
  },
  clothing: {
    labelDe: "Kleidung",
    pairs: [
      { de: "die Kleidung", pl: "ubranie" },
      { de: "das Hemd", pl: "koszula" },
      { de: "die Hose", pl: "spodnie" },
      { de: "das T-Shirt", pl: "koszulka" },
      { de: "der Pullover", pl: "sweter" },
      { de: "die Jacke", pl: "kurtka" },
      { de: "der Mantel", pl: "płaszcz" },
      { de: "das Kleid", pl: "sukienka" },
      { de: "der Rock", pl: "spódnica" },
      { de: "die Schuhe", pl: "buty" },
      { de: "die Socken", pl: "skarpetki" },
      { de: "die Mütze", pl: "czapka" },
      { de: "der Schal", pl: "szalik" },
      { de: "die Handschuhe", pl: "rękawiczki" },
      { de: "der Gürtel", pl: "pasek" },
      { de: "die Krawatte", pl: "krawat" },
      { de: "die Brille", pl: "okulary" },
      { de: "der Anzug", pl: "garnitur" }
    ]
  },
  city_places: {
    labelDe: "Stadt & Orte",
    pairs: [
      { de: "die Stadt", pl: "miasto" },
      { de: "das Dorf", pl: "wieś" },
      { de: "die Straße", pl: "ulica" },
      { de: "der Platz", pl: "plac" },
      { de: "das Geschäft", pl: "sklep" },
      { de: "der Markt", pl: "rynek" },
      { de: "die Bank", pl: "bank" },
      { de: "die Post", pl: "poczta" },
      { de: "das Kino", pl: "kino" },
      { de: "das Theater", pl: "teatr" },
      { de: "das Museum", pl: "muzeum" },
      { de: "die Kirche", pl: "kościół" },
      { de: "das Hotel", pl: "hotel" },
      { de: "der Bahnhof", pl: "dworzec" },
      { de: "der Flughafen", pl: "lotnisko" },
      { de: "der Park", pl: "park" },
      { de: "die Bibliothek", pl: "biblioteka" },
      { de: "die Brücke", pl: "most" }
    ]
  },
  directions_prepositions: {
    labelDe: "Wegbeschreibung & Präpositionen",
    rules:
      "Ortsangaben und ihre Fälle\n" +
      "• w (in): wo + Lokativ (w domu); Wochentag + Akkusativ (w piątek).\n" +
      "• na (auf, an): wo + Lokativ (na stole); wohin + Akkusativ (na stół).\n" +
      "• pod (unter), nad (über), przed (vor), za (hinter), między (zwischen): wo + Instrumental (pod stołem); wohin + Akkusativ (pod stół).\n" +
      "• obok (neben): immer Genitiv: obok domu. przy (bei, direkt an): immer Lokativ: przy oknie.\n" +
      "• Ohne Fall: tutaj / tu (hier), tam (dort), prosto (geradeaus).\n" +
      "• links / rechts: na lewo / na prawo oder po lewej / po prawej (stronie); abbiegen: skręcić w lewo / w prawo.\n" +
      "• oben / unten: na górze / na dole (wo) – na górę / na dół (wohin).\n" +
      "• Ecke: na rogu (an der Ecke), za rogiem (um die Ecke).\n" +
      "• Mehr dazu → „Wo? Wohin? Woher?“ und „Präpositionen mit zwei Fällen“.",
    pairs: [
      { de: "links", pl: "na lewo" },
      { de: "rechts", pl: "na prawo" },
      { de: "geradeaus", pl: "prosto" },
      { de: "oben", pl: "na górze" },
      { de: "unten", pl: "na dole" },
      { de: "hier", pl: "tutaj" },
      { de: "dort", pl: "tam" },
      { de: "in", pl: "w" },
      { de: "auf", pl: "na" },
      { de: "unter", pl: "pod" },
      { de: "über", pl: "nad" },
      { de: "neben", pl: "obok" },
      { de: "zwischen", pl: "między" },
      { de: "vor", pl: "przed" },
      { de: "hinter", pl: "za" },
      { de: "die Ecke", pl: "róg" },
      { de: "die Kreuzung", pl: "skrzyżowanie" }
    ]
  },
  transport_travel: {
    labelDe: "Verkehr & Reisen",
    pairs: [
      { de: "das Auto", pl: "samochód" },
      { de: "der Bus", pl: "autobus" },
      { de: "die Straßenbahn", pl: "tramwaj" },
      { de: "der Zug", pl: "pociąg" },
      { de: "das Flugzeug", pl: "samolot" },
      { de: "das Fahrrad", pl: "rower" },
      { de: "das Taxi", pl: "taksówka" },
      { de: "die U-Bahn", pl: "metro" },
      { de: "das Schiff", pl: "statek" },
      { de: "die Reise", pl: "podróż" },
      { de: "die Fahrkarte", pl: "bilet" },
      { de: "die Haltestelle", pl: "przystanek" },
      { de: "die Ankunft", pl: "przyjazd" },
      { de: "die Abfahrt", pl: "odjazd" },
      { de: "der Koffer", pl: "walizka" },
      { de: "der Pass", pl: "paszport" },
      { de: "fahren", pl: "jechać" },
      { de: "fliegen", pl: "lecieć" }
    ]
  },
  shopping_money: {
    labelDe: "Einkaufen & Geld",
    pairs: [
      { de: "das Geld", pl: "pieniądze" },
      { de: "der Preis", pl: "cena" },
      { de: "kaufen", pl: "kupować" },
      { de: "verkaufen", pl: "sprzedawać" },
      { de: "bezahlen", pl: "płacić" },
      { de: "die Kasse", pl: "kasa" },
      { de: "die Kreditkarte", pl: "karta kredytowa" },
      { de: "das Bargeld", pl: "gotówka" },
      { de: "das Wechselgeld", pl: "reszta" },
      { de: "der Kunde", pl: "klient" },
      { de: "der Verkäufer", pl: "sprzedawca" },
      { de: "der Rabatt", pl: "zniżka" },
      { de: "das Angebot", pl: "promocja" },
      { de: "die Quittung", pl: "paragon" },
      { de: "der Einkauf", pl: "zakupy" },
      { de: "die Währung", pl: "waluta" },
      { de: "der Euro", pl: "euro" }
    ]
  },
  professions_work: {
    labelDe: "Berufe & Arbeit",
    pairs: [
      { de: "der Beruf", pl: "zawód" },
      { de: "die Arbeit", pl: "praca" },
      { de: "der Lehrer", pl: "nauczyciel" },
      { de: "der Ingenieur", pl: "inżynier" },
      { de: "der Koch", pl: "kucharz" },
      { de: "der Polizist", pl: "policjant" },
      { de: "der Fahrer", pl: "kierowca" },
      { de: "der Friseur", pl: "fryzjer" },
      { de: "der Anwalt", pl: "prawnik" },
      { de: "der Bauer", pl: "rolnik" },
      { de: "der Programmierer", pl: "programista" },
      { de: "der Chef", pl: "szef" },
      { de: "der Kollege", pl: "kolega" },
      { de: "das Büro", pl: "biuro" },
      { de: "die Firma", pl: "firma" },
      { de: "der Angestellte", pl: "pracownik" },
      { de: "arbeiten", pl: "pracować" }
    ]
  },
  daily_routine: {
    labelDe: "Tagesablauf",
    pairs: [
      { de: "aufstehen", pl: "wstawać" },
      { de: "sich waschen", pl: "myć się" },
      { de: "sich anziehen", pl: "ubierać się" },
      { de: "frühstücken", pl: "jeść śniadanie" },
      { de: "zur Arbeit gehen", pl: "iść do pracy" },
      { de: "Mittag essen", pl: "jeść obiad" },
      { de: "nach Hause kommen", pl: "wracać do domu" },
      { de: "kochen", pl: "gotować" },
      { de: "fernsehen", pl: "oglądać telewizję" },
      { de: "sich ausruhen", pl: "odpoczywać" },
      { de: "duschen", pl: "brać prysznic" },
      { de: "die Zähne putzen", pl: "myć zęby" },
      { de: "schlafen gehen", pl: "iść spać" },
      { de: "einkaufen", pl: "robić zakupy" },
      { de: "aufräumen", pl: "sprzątać" },
      { de: "spazieren gehen", pl: "iść na spacer" }
    ]
  },
  time_expressions: {
    labelDe: "Zeitangaben",
    pairs: [
      { de: "heute", pl: "dzisiaj" },
      { de: "gestern", pl: "wczoraj" },
      { de: "morgen", pl: "jutro" },
      { de: "der Morgen", pl: "rano" },
      { de: "der Mittag", pl: "południe" },
      { de: "der Nachmittag", pl: "popołudnie" },
      { de: "der Abend", pl: "wieczór" },
      { de: "die Nacht", pl: "noc" },
      { de: "jetzt", pl: "teraz" },
      { de: "später", pl: "później" },
      { de: "früh", pl: "wcześnie" },
      { de: "spät", pl: "późno" },
      { de: "immer", pl: "zawsze" },
      { de: "oft", pl: "często" },
      { de: "manchmal", pl: "czasami" },
      { de: "nie", pl: "nigdy" },
      { de: "die Stunde", pl: "godzina" },
      { de: "die Woche", pl: "tydzień" }
    ]
  },
  weather_nature: {
    labelDe: "Wetter & Natur",
    pairs: [
      { de: "das Wetter", pl: "pogoda" },
      { de: "die Sonne", pl: "słońce" },
      { de: "der Regen", pl: "deszcz" },
      { de: "der Schnee", pl: "śnieg" },
      { de: "der Wind", pl: "wiatr" },
      { de: "die Wolke", pl: "chmura" },
      { de: "der Himmel", pl: "niebo" },
      { de: "das Gewitter", pl: "burza" },
      { de: "sonnig", pl: "słoneczny" },
      { de: "die Natur", pl: "przyroda" },
      { de: "der Baum", pl: "drzewo" },
      { de: "die Blume", pl: "kwiat" },
      { de: "der Wald", pl: "las" },
      { de: "der Berg", pl: "góra" },
      { de: "der See", pl: "jezioro" },
      { de: "das Meer", pl: "morze" },
      { de: "der Fluss", pl: "rzeka" }
    ]
  },
  animals: {
    labelDe: "Tiere",
    pairs: [
      { de: "das Tier", pl: "zwierzę" },
      { de: "der Hund", pl: "pies" },
      { de: "die Katze", pl: "kot" },
      { de: "das Pferd", pl: "koń" },
      { de: "die Kuh", pl: "krowa" },
      { de: "das Schwein", pl: "świnia" },
      { de: "das Schaf", pl: "owca" },
      { de: "das Huhn", pl: "kura" },
      { de: "die Ente", pl: "kaczka" },
      { de: "der Vogel", pl: "ptak" },
      { de: "die Maus", pl: "mysz" },
      { de: "das Kaninchen", pl: "królik" },
      { de: "der Bär", pl: "niedźwiedź" },
      { de: "der Wolf", pl: "wilk" },
      { de: "der Fuchs", pl: "lis" },
      { de: "der Löwe", pl: "lew" },
      { de: "der Elefant", pl: "słoń" },
      { de: "die Biene", pl: "pszczoła" }
    ]
  },
  hobbies_freetime: {
    labelDe: "Hobbys & Freizeit",
    pairs: [
      { de: "das Hobby", pl: "hobby" },
      { de: "die Freizeit", pl: "czas wolny" },
      { de: "der Sport", pl: "sport" },
      { de: "der Fußball", pl: "piłka nożna" },
      { de: "das Schwimmen", pl: "pływanie" },
      { de: "das Laufen", pl: "bieganie" },
      { de: "die Musik", pl: "muzyka" },
      { de: "das Buch", pl: "książka" },
      { de: "lesen", pl: "czytać" },
      { de: "der Film", pl: "film" },
      { de: "das Foto", pl: "zdjęcie" },
      { de: "reisen", pl: "podróżować" },
      { de: "tanzen", pl: "tańczyć" },
      { de: "singen", pl: "śpiewać" },
      { de: "malen", pl: "malować" },
      { de: "das Spiel", pl: "gra" },
      { de: "spielen", pl: "grać" }
    ]
  },
  school_education: {
    labelDe: "Schule & Bildung",
    pairs: [
      { de: "die Schule", pl: "szkoła" },
      { de: "die Universität", pl: "uniwersytet" },
      { de: "der Schüler", pl: "uczeń" },
      { de: "der Student", pl: "student" },
      { de: "der Lehrer", pl: "nauczyciel" },
      { de: "die Klasse", pl: "klasa" },
      { de: "das Fach", pl: "przedmiot" },
      { de: "die Prüfung", pl: "egzamin" },
      { de: "die Note", pl: "ocena" },
      { de: "die Hausaufgabe", pl: "zadanie domowe" },
      { de: "das Heft", pl: "zeszyt" },
      { de: "der Bleistift", pl: "ołówek" },
      { de: "die Tafel", pl: "tablica" },
      { de: "studieren", pl: "studiować" },
      { de: "die Frage", pl: "pytanie" },
      { de: "die Antwort", pl: "odpowiedź" }
    ]
  },
  communication_tech: {
    labelDe: "Kommunikation & Technik",
    pairs: [
      { de: "das Telefon", pl: "telefon" },
      { de: "das Handy", pl: "telefon komórkowy" },
      { de: "der Computer", pl: "komputer" },
      { de: "das Internet", pl: "internet" },
      { de: "die E-Mail", pl: "e-mail" },
      { de: "die Nachricht", pl: "wiadomość" },
      { de: "anrufen", pl: "dzwonić" },
      { de: "die Adresse", pl: "adres" },
      { de: "die Nummer", pl: "numer" },
      { de: "der Bildschirm", pl: "ekran" },
      { de: "die Tastatur", pl: "klawiatura" },
      { de: "die Webseite", pl: "strona internetowa" },
      { de: "das Passwort", pl: "hasło" },
      { de: "herunterladen", pl: "pobierać" },
      { de: "die App", pl: "aplikacja" },
      { de: "senden", pl: "wysyłać" }
    ]
  },
  emotions_feelings: {
    labelDe: "Gefühle & Emotionen",
    pairs: [
      { de: "das Gefühl", pl: "uczucie" },
      { de: "glücklich", pl: "szczęśliwy" },
      { de: "traurig", pl: "smutny" },
      { de: "fröhlich", pl: "radosny" },
      { de: "wütend", pl: "wściekły" },
      { de: "müde", pl: "zmęczony" },
      { de: "die Angst", pl: "strach" },
      { de: "die Freude", pl: "radość" },
      { de: "die Liebe", pl: "miłość" },
      { de: "lieben", pl: "kochać" },
      { de: "lachen", pl: "śmiać się" },
      { de: "weinen", pl: "płakać" },
      { de: "die Hoffnung", pl: "nadzieja" },
      { de: "zufrieden", pl: "zadowolony" },
      { de: "nervös", pl: "zdenerwowany" },
      { de: "ruhig", pl: "spokojny" },
      { de: "aufgeregt", pl: "podekscytowany" }
    ]
  },
  countries_nationalities: {
    labelDe: "Länder & Nationalitäten",
    pairs: [
      { de: "das Land", pl: "kraj" },
      { de: "Deutschland", pl: "Niemcy" },
      { de: "Polen", pl: "Polska" },
      { de: "Österreich", pl: "Austria" },
      { de: "die Schweiz", pl: "Szwajcaria" },
      { de: "Frankreich", pl: "Francja" },
      { de: "Italien", pl: "Włochy" },
      { de: "Spanien", pl: "Hiszpania" },
      { de: "England", pl: "Anglia" },
      { de: "die Ukraine", pl: "Ukraina" },
      { de: "Europa", pl: "Europa" },
      { de: "die Sprache", pl: "język" },
      { de: "Deutsch", pl: "niemiecki" },
      { de: "Polnisch", pl: "polski" },
      { de: "Englisch", pl: "angielski" },
      { de: "der Pole", pl: "Polak" },
      { de: "die Polin", pl: "Polka" },
      { de: "die Hauptstadt", pl: "stolica" }
    ]
  },
  question_words: {
    labelDe: "Fragewörter",
    rules:
      "Fragewörter\n" +
      "• kto (wer) und co (was) werden gebeugt: kogo, komu, kim; czego, czemu, czym (→ Fragewörter in den Fällen).\n" +
      "• Nach kto: Verb in der 3. Person Singular (männlich): Kto przyszedł? Nach co: sächlich: Co się stało?\n" +
      "• jaki, jaka, jakie (was für ein, wie), który, która, które (welcher) und czyj, czyja, czyje (wessen) passen sich wie Adjektive an: Jaka jest pogoda? Który autobus? Czyja to torba?\n" +
      "• ile (wie viel, wie viele) + Genitiv: Ile kosztuje? Ile masz lat? – bei männlichen Personen ilu: Ilu was jest?\n" +
      "• gdzie = wo (umgangssprachlich auch wohin), dokąd = wohin, skąd = woher.\n" +
      "• kiedy (wann), jak (wie), dlaczego / czemu (warum), po co (wozu), jak długo (wie lange), od kiedy (seit wann), o której (um wie viel Uhr), jak często (wie oft).\n" +
      "• Ja/Nein-Fragen beginnen mit czy: Czy masz czas? (umgangssprachlich auch nur durch Satzmelodie).\n" +
      "• Das Fragewort steht am Satzanfang, die Wortstellung ändert sich sonst nicht: Gdzie mieszkasz?\n" +
      "• Indirekt mit Komma: Nie wiem, kto to jest. Powiedz, gdzie mieszkasz.",
    pairs: [
      { de: "wer", pl: "kto" },
      { de: "was", pl: "co" },
      { de: "wo", pl: "gdzie" },
      { de: "wann", pl: "kiedy" },
      { de: "warum", pl: "dlaczego" },
      { de: "wie", pl: "jak" },
      { de: "wie viel", pl: "ile" },
      { de: "welcher", pl: "który" },
      { de: "wohin", pl: "dokąd" },
      { de: "woher", pl: "skąd" },
      { de: "wessen", pl: "czyj" },
      { de: "was für ein", pl: "jaki" },
      { de: "wie lange", pl: "jak długo" },
      { de: "wie oft", pl: "jak często" }
    ]
  },
  conjunctions_adverbs: {
    labelDe: "Bindewörter & Adverbien",
    rules:
      "Bindewörter (spójniki) und Adverbien\n" +
      "• i = und (gleichartige Dinge): kawa i herbata. a = und/während (Gegenüberstellung): Ja piję kawę, a ty herbatę. A ty? = Und du?\n" +
      "• ale = aber: Jest drogi, ale dobry. albo / lub = oder; in Fragen czy: Kawa czy herbata?\n" +
      "• ponieważ = weil (auch am Satzanfang); bo = weil, denn (umgangssprachlich, nicht am Satzanfang); dlatego = deshalb; więc = also.\n" +
      "• że = dass; jeśli / jeżeli = wenn, falls; kiedy / gdy = wenn, als.\n" +
      "• Komma: vor ale, a, więc, dlatego und vor jedem Nebensatz (że, bo, ponieważ, jeśli, kiedy); nicht vor einfachem i, albo, lub.\n" +
      "• Keine Umstellung wie im Deutschen: Dlatego nie przyszedłem. = Deshalb bin ich nicht gekommen. Wiem, że on ma czas. = Ich weiß, dass er Zeit hat.\n" +
      "• też = auch, steht nach dem Bezugswort: Ja też. Verneint: Ja też nie. Gehoben: także, również.\n" +
      "• już = schon, verneint nicht mehr (już nie); jeszcze = noch, verneint noch nicht (jeszcze nie).\n" +
      "• sam, sama, samo, sami, same = allein, passt sich an: Mieszkam sama. (Frau)\n" +
      "• tylko = nur; dopiero = erst (zeitlich): Dopiero o ósmej. znowu = wieder; razem = zusammen.",
    pairs: [
      { de: "und", pl: "i" },
      { de: "oder", pl: "albo" },
      { de: "aber", pl: "ale" },
      { de: "weil", pl: "ponieważ" },
      { de: "dass", pl: "że" },
      { de: "wenn", pl: "jeśli" },
      { de: "deshalb", pl: "dlatego" },
      { de: "auch", pl: "też" },
      { de: "nur", pl: "tylko" },
      { de: "schon", pl: "już" },
      { de: "noch", pl: "jeszcze" },
      { de: "vielleicht", pl: "może" },
      { de: "natürlich", pl: "oczywiście" },
      { de: "sehr", pl: "bardzo" },
      { de: "genug", pl: "wystarczająco" },
      { de: "fast", pl: "prawie" },
      { de: "wieder", pl: "znowu" },
      { de: "zusammen", pl: "razem" },
      { de: "allein", pl: "sam" }
    ]
  },
  useful_phrases: {
    labelDe: "Nützliche Redewendungen",
    pairs: [
      { de: "Hallo", pl: "Cześć" },
      { de: "Guten Tag", pl: "Dzień dobry" },
      { de: "Guten Abend", pl: "Dobry wieczór" },
      { de: "Gute Nacht", pl: "Dobranoc" },
      { de: "Auf Wiedersehen", pl: "Do widzenia" },
      { de: "Tschüss", pl: "Na razie" },
      { de: "Danke", pl: "Dziękuję" },
      { de: "Bitte", pl: "Proszę" },
      { de: "Entschuldigung", pl: "Przepraszam" },
      { de: "Ja", pl: "Tak" },
      { de: "Nein", pl: "Nie" },
      { de: "Wie geht es dir?", pl: "Jak się masz?" },
      { de: "Gut, danke", pl: "Dobrze, dziękuję" },
      { de: "Wie heißt du?", pl: "Jak masz na imię?" },
      { de: "Ich verstehe nicht", pl: "Nie rozumiem" },
      { de: "Ich weiß nicht", pl: "Nie wiem" },
      { de: "Kein Problem", pl: "Nie ma problemu" },
      { de: "Guten Appetit", pl: "Smacznego" }
    ]
  },
  verbs_a2: {
    labelDe: "Weitere Verben (A2)",
    pairs: [
      { de: "suchen", pl: "szukać" },
      { de: "finden", pl: "znaleźć" },
      { de: "helfen", pl: "pomagać" },
      { de: "fragen", pl: "pytać" },
      { de: "antworten", pl: "odpowiadać" },
      { de: "warten", pl: "czekać" },
      { de: "öffnen", pl: "otwierać" },
      { de: "schließen", pl: "zamykać" },
      { de: "anfangen", pl: "zaczynać" },
      { de: "beenden", pl: "kończyć" },
      { de: "bringen", pl: "przynosić" },
      { de: "zeigen", pl: "pokazywać" },
      { de: "brauchen", pl: "potrzebować" },
      { de: "vergessen", pl: "zapominać" },
      { de: "sich erinnern", pl: "pamiętać" },
      { de: "treffen", pl: "spotykać" },
      { de: "kommen", pl: "przychodzić" },
      { de: "bleiben", pl: "zostać" }
    ]
  },

  // ===================================================================
  // A2-Grammatik & Situationen – kurze Lektionen mit Regel-Erklärung
  // ===================================================================

  case_nominative: {
    labelDe: "Fall: Nominativ & Plural (mianownik)",
    rules:
      "Nominativ (mianownik) – „wer? was?“\n" +
      "• Polnisch hat 7 Fälle: Nominativ, Genitiv, Dativ, Akkusativ, Instrumental, Lokativ, Vokativ – zu jedem gibt es eine eigene Lektion.\n" +
      "• Der Nominativ ist die Wörterbuchform und steht für das Subjekt (Koty śpią.) und nach to jest / to są (To są moje dzieci.).\n" +
      "• Adjektive nach być stehen im Nominativ (Jestem zmęczony.), Nomen nach być dagegen im Instrumental (Jestem lekarzem.).\n" +
      "Geschlecht an der Endung erkennen:\n" +
      "• männlich: Konsonant (dom, kot, stół); einige Männerwörter auf -a (mężczyzna, kolega, tata).\n" +
      "• weiblich: -a (kawa, mama), -i (pani); manche auf Konsonant, v. a. alle auf -ość (noc, rzecz, miłość).\n" +
      "• sächlich: -o, -e, -ę, -um (okno, morze, imię, muzeum).\n" +
      "Plural:\n" +
      "• männlich (keine Personen) und weiblich mit hartem Stamm: -y (koty, stoły, kawy); nach k, g: -i (parki, książki, nogi).\n" +
      "• weicher Stamm (auf -ć, -ń, -l, -j, -c, -cz, -sz, -rz, -ż …): -e (klucze, hotele, ulice, lekcje, noce); weiblich auf -ość: -i (miłości).\n" +
      "• sächlich: -a (okna, miasta, pytania); -ę → -ona/-ęta (imiona, zwierzęta); -um → -a (muzea).\n" +
      "• männlich-persönlich (Männer, gemischte Gruppen), mit Lautwechsel: -i/-y (student → studenci, Polak → Polacy, chłopiec → chłopcy), -owie (pan → panowie, syn → synowie), -e (nauczyciel → nauczyciele, lekarz → lekarze).\n" +
      "• Unregelmäßig: człowiek → ludzie, dziecko → dzieci, brat → bracia, ręka → ręce, oko → oczy, ucho → uszy, rok → lata, tydzień → tygodnie.\n" +
      "Adjektive & Pronomen:\n" +
      "• Adjektiv Singular: -y/-i (m), -a (f), -e (n): nowy dom, nowa kawa, nowe okno.\n" +
      "• Adjektiv Plural: männlich-persönlich -i/-y mit Lautwechsel (dobry → dobrzy, nowy → nowi, polski → polscy, duży → duzi), sonst -e (nowe domy, dobre koty).\n" +
      "• oni (mit Mann) / one (sonst); ten → ci (männlich-persönlich) / te (sonst): ci panowie, te kobiety.",
    pairs: [
      { de: "Die Katzen schlafen.", pl: "Koty śpią." },
      { de: "die Bücher", pl: "książki" },
      { de: "die Fenster", pl: "okna" },
      { de: "die Straßen", pl: "ulice" },
      { de: "die Namen", pl: "imiona" },
      { de: "die Studenten", pl: "studenci" },
      { de: "die Polen (Personen)", pl: "Polacy" },
      { de: "die Söhne", pl: "synowie" },
      { de: "die Brüder", pl: "bracia" },
      { de: "diese Herren", pl: "ci panowie" },
      { de: "nette Leute", pl: "mili ludzie" },
      { de: "gute Freunde", pl: "dobrzy przyjaciele" },
      { de: "neue Häuser", pl: "nowe domy" },
      { de: "Das sind meine Kinder.", pl: "To są moje dzieci." }
    ]
  },
  case_accusative: {
    labelDe: "Fall: Akkusativ (biernik)",
    rules:
      "Akkusativ (biernik) – „wen? was?“\n" +
      "Wann?\n" +
      "• Direktes Objekt der meisten Verben: mieć, lubić, kochać, znać, widzieć, czytać, jeść, pić, kupować, odwiedzać … – Mam psa. Lubię kawę.\n" +
      "• Nach Präpositionen: na (wohin: na pocztę; für eine Zeit: na tydzień), w (Wochentag: w poniedziałek), przez (durch; Dauer: przez godzinę), za (für: dziękuję za pomoc; in (Zeit): za tydzień), o (bitten um: proszę o pomoc), po (holen: idę po chleb).\n" +
      "• nad, pod, przed, za, między mit Bewegung (wohin?) + Akkusativ: Kot wchodzi pod stół. Ohne Bewegung (wo?) → Instrumental.\n" +
      "• Achtung Verneinung: Das Akkusativ-Objekt wird zum Genitiv: Mam kawę → Nie mam kawy.\n" +
      "• Einige Verben verlangen den Genitiv statt Akkusativ: potrzebować, szukać, słuchać, używać, uczyć się, bać się (Potrzebuję czasu).\n" +
      "Endungen Singular:\n" +
      "• männlich belebt (Personen, Tiere) = Genitiv auf -a: kot → kota, pies → psa, brat → brata. Männerwörter auf -a wie weiblich: kolega → kolegę.\n" +
      "• männlich unbelebt = Nominativ: stół, chleb, list, czas (umgangssprachlich manchmal -a: mam banana, piszę maila).\n" +
      "• weiblich auf -a → -ę: kawa → kawę, książka → książkę; auf -i → -ią: pani → panią; auf Konsonant unverändert: noc, rzecz, miłość.\n" +
      "• sächlich: unverändert: okno, pytanie, miasto.\n" +
      "Endungen Plural:\n" +
      "• männlich-persönlich = Genitiv Plural: Znam tych studentów. Widzę braci.\n" +
      "• alle anderen = Nominativ Plural: Mam koty. Kupuję jabłka.\n" +
      "Adjektive & Pronomen:\n" +
      "• Adjektiv: m belebt -ego (dobrego kolegę), m unbelebt -y/-i (nowy stół), f -ą (dobrą kawę), n -e (nowe okno); Plural männlich-persönlich -ych/-ich, sonst -e.\n" +
      "• ten → tego (belebt) / ten (unbelebt), ta → tę, to → to.\n" +
      "• Personalpronomen: mnie, cię (betont ciebie), go (betont jego, nach Präposition niego), ją (nią), nas, was, ich (männlich-persönlich; nach Präposition nich) / je (sonst; nach Präposition nie).",
    pairs: [
      { de: "Ich habe einen Hund.", pl: "Mam psa." },
      { de: "Ich habe eine Katze.", pl: "Mam kota." },
      { de: "Ich mag Kaffee.", pl: "Lubię kawę." },
      { de: "Ich lese ein Buch.", pl: "Czytam książkę." },
      { de: "Ich sehe einen Freund.", pl: "Widzę kolegę." },
      { de: "Ich esse eine Suppe.", pl: "Jem zupę." },
      { de: "Ich trinke Wasser.", pl: "Piję wodę." },
      { de: "Ich habe eine Frage.", pl: "Mam pytanie." },
      { de: "Ich kaufe Brot.", pl: "Kupuję chleb." },
      { de: "Ich kenne diese Stadt.", pl: "Znam to miasto." },
      { de: "Ich schreibe einen Brief.", pl: "Piszę list." },
      { de: "Ich besuche die Oma.", pl: "Odwiedzam babcię." }
    ]
  },
  case_genitive: {
    labelDe: "Fall: Genitiv (dopełniacz)",
    rules:
      "Genitiv (dopełniacz) – „wessen? wovon? von wem?“\n" +
      "Wann?\n" +
      "• Besitz und Zugehörigkeit, nachgestellt: dom ojca = das Haus des Vaters, filiżanka kawy.\n" +
      "• Verneinung: Ein Akkusativ-Objekt wird zum Genitiv: Mam czas → Nie mam czasu. „Es gibt nicht / ist nicht da“ = nie ma + Genitiv: Nie ma chleba (Vergangenheit nie było, Zukunft nie będzie).\n" +
      "• Mengen: dużo, mało, trochę, wiele, kilka, ile, kilo, butelka … + Genitiv; Zahlen ab 5: pięć kotów (→ Mengen & Verpackungen).\n" +
      "• Präpositionen: bez (ohne), dla (für), do (zu, nach, bis), od (von, seit), u (bei Personen), z (aus, von … herab/weg), obok, koło, niedaleko (neben, nahe), podczas (während), według (laut), oprócz (außer), zamiast (statt), wśród (unter), naprzeciwko (gegenüber), około (etwa).\n" +
      "• Verben: potrzebować, szukać, słuchać, używać, uczyć się, bać się, życzyć (+ Dativ der Person: Życzę ci szczęścia).\n" +
      "• Datum: pierwszego maja = am 1. Mai.\n" +
      "Endungen Singular:\n" +
      "• männlich -a: Personen, Tiere und viele Dinge (kota, lekarza, chleba, noża). männlich -u: viele unbelebte und abstrakte Wörter, Stoffe (czasu, cukru, domu, sklepu). Am besten mitlernen.\n" +
      "• weiblich -y: nach hartem Konsonanten und nach c, cz, sz, rz, ż (kawa → kawy, woda → wody, praca → pracy, noc → nocy).\n" +
      "• weiblich -i: nach k, g, l, j und weichem Konsonanten (książka → książki, Polska → Polski, lekcja → lekcji, babcia → babci, miłość → miłości); pani bleibt pani.\n" +
      "• sächlich -a: mleko → mleka, okno → okna, pytanie → pytania.\n" +
      "Endungen Plural:\n" +
      "• männlich: meist -ów (kotów, domów, studentów); weicher Stamm -i/-y (lekarzy, nauczycieli, pokoi).\n" +
      "• weiblich & sächlich: meist ohne Endung, oft mit eingeschobenem e oder Vokalwechsel: kawa → kaw, książka → książek, okno → okien, jabłko → jabłek, szkoła → szkół, ręka → rąk; auf -anie/-enie: pytanie → pytań.\n" +
      "• weiblich auf -ja/-ia und Konsonant: -i/-y (lekcji, nocy, miłości). pieniądze → pieniędzy.\n" +
      "Adjektive & Pronomen:\n" +
      "• Adjektiv: m/n -ego, f -ej, Plural -ych/-ich: dużo dobrej kawy, nie ma nowego domu, bez nowych książek.\n" +
      "• ten/to → tego, ta → tej, Plural tych.\n" +
      "• Personalpronomen: mnie, cię (ciebie), go (jego), jej, nas, was, ich – nach Präpositionen mit n-: u niego, dla niej, bez nich.",
    pairs: [
      { de: "Ich habe keine Zeit.", pl: "Nie mam czasu." },
      { de: "Ich habe kein Geld.", pl: "Nie mam pieniędzy." },
      { de: "eine Tasse Kaffee", pl: "filiżanka kawy" },
      { de: "eine Flasche Wasser", pl: "butelka wody" },
      { de: "viel Arbeit", pl: "dużo pracy" },
      { de: "ein bisschen Zucker", pl: "trochę cukru" },
      { de: "ohne Milch", pl: "bez mleka" },
      { de: "für den Freund", pl: "dla kolegi" },
      { de: "nach Hause (Ziel)", pl: "do domu" },
      { de: "aus Polen", pl: "z Polski" },
      { de: "vom Arzt (weg)", pl: "od lekarza" },
      { de: "bei der Oma", pl: "u babci" }
    ]
  },
  case_locative: {
    labelDe: "Fall: Lokativ (miejscownik)",
    rules:
      "Lokativ (miejscownik) – „wo? worüber?“\n" +
      "Wann? – NUR nach diesen Präpositionen:\n" +
      "• w (in): w domu, w Polsce.\n" +
      "• na (auf, an; auch bei Plätzen, Veranstaltungen, manchen Institutionen): na stole, na poczcie, na dworcu, na koncercie, na uniwersytecie.\n" +
      "• przy (bei, an, neben): przy stole, przy oknie.\n" +
      "• o (über ein Thema; um + Uhrzeit): mówić o rodzinie, o ósmej.\n" +
      "• po (nach, zeitlich; herum/durch): po obiedzie, spacer po mieście.\n" +
      "• Ort ohne Bewegung (wo?) → Lokativ; Ziel (wohin?) → do + Genitiv oder na/w + Akkusativ: Jestem w szkole. – Idę do szkoły.\n" +
      "Endungen Singular:\n" +
      "• m & n mit hartem Stamm: -e, der letzte Konsonant wird weich: t → cie (kot → kocie), d → dzie (samochód → samochodzie), st → ście (miasto → mieście), r → rze (teatr → teatrze), ł → le (stół → stole), n → nie (kino → kinie), ebenso s → sie, z → zie, m → mie, w → wie, b → bie, p → pie.\n" +
      "• Oft wechselt auch der Vokal: ó → o (stół → stole, samochód → samochodzie), a → e (miasto → mieście).\n" +
      "• m & n auf k, g, ch, auf weichen Konsonanten (l, j, ć, ń, c, cz, sz, rz, ż …) sowie dom, syn, pan: -u: w parku, w pociągu, w hotelu, w pokoju, na dworcu, w domu; sächlich auf -e: w mieszkaniu, na morzu.\n" +
      "• weiblich mit hartem Stamm: -e mit Lautwechsel: szkoła → szkole, rodzina → rodzinie, kawa → kawie; k → c, g → dz, r → rz, ch → sz: Polska → w Polsce, noga → na nodze, siostra → o siostrze.\n" +
      "• weiblich mit weichem Stamm, auf -i/-ia und auf Konsonant: -i/-y (wie Genitiv): praca → w pracy, ulica → na ulicy, babcia → o babci, lekcja → na lekcji, noc → w nocy.\n" +
      "Plural: immer -ach: w miastach, na ulicach, o dzieciach (Ausnahmen: w Niemczech, we Włoszech).\n" +
      "Adjektive & Pronomen:\n" +
      "• Adjektiv: m/n -ym/-im, f -ej, Plural -ych/-ich: w dużym mieście, w małej szkole, w nowych domach.\n" +
      "• Personalpronomen: o mnie, o tobie, o nim (er/es), o niej, o nas, o was, o nich.\n" +
      "• Merke: zu Hause = w domu (Lokativ) – nach Hause = do domu (Genitiv); bei der Oma = u babci (u + Genitiv!).",
    pairs: [
      { de: "in der Stadt", pl: "w mieście" },
      { de: "in Polen", pl: "w Polsce" },
      { de: "in der Schule", pl: "w szkole" },
      { de: "zu Hause (Ort)", pl: "w domu" },
      { de: "bei der Arbeit", pl: "w pracy" },
      { de: "auf dem Tisch", pl: "na stole" },
      { de: "im Auto", pl: "w samochodzie" },
      { de: "über die Familie (sprechen)", pl: "o rodzinie" },
      { de: "um acht Uhr", pl: "o ósmej" },
      { de: "im Kino", pl: "w kinie" },
      { de: "im Zug", pl: "w pociągu" },
      { de: "auf der Post", pl: "na poczcie" }
    ]
  },
  case_instrumental: {
    labelDe: "Fall: Instrumental (narzędnik)",
    rules:
      "Instrumental (narzędnik) – „mit wem? womit?“\n" +
      "Wann?\n" +
      "• Begleitung mit z (vor schwierigen Konsonantengruppen ze): z kolegą, kawa z mlekiem, ze mną.\n" +
      "• Mittel und Werkzeug OHNE Präposition: piszę długopisem, płacę kartą, jadę autobusem.\n" +
      "• Nomen nach być und zostać (werden) – Beruf, Nationalität, Rolle: Jestem nauczycielem. Chcę zostać lekarzem. Aber: nach to steht der Nominativ (To jest nauczyciel.), und Adjektive nach być stehen im Nominativ (Jestem zmęczony.).\n" +
      "• Lage (wo?) nach nad (über), pod (unter), przed (vor), za (hinter), między (zwischen): przed domem, pod stołem. Mit Bewegung (wohin?) dagegen Akkusativ: Kot wchodzi pod stół.\n" +
      "• Verben: interesować się (sich interessieren für), zajmować się (sich beschäftigen mit), opiekować się (sich kümmern um): Interesuję się sportem.\n" +
      "• Weg und Zeit ohne Präposition: iść ulicą (die Straße entlang); latem, zimą, wiosną, jesienią (im Sommer …), wieczorem (am Abend).\n" +
      "Endungen Singular:\n" +
      "• männlich & sächlich: -em, nach k, g: -iem: bratem, oknem, autobusem, cukrem, pociągiem.\n" +
      "• weiblich und Männerwörter auf -a: -ą: koleżanką, kartą, nocą, kolegą, mężczyzną.\n" +
      "Endungen Plural: -ami (kolegami, książkami, oknami); nur wenige -mi: dziećmi, ludźmi, przyjaciółmi, pieniędzmi.\n" +
      "Adjektive & Pronomen:\n" +
      "• Adjektiv: m/n -ym/-im, f -ą, Plural -ymi/-imi: z dobrym kolegą, z miłą koleżanką, z nowymi książkami.\n" +
      "• Personalpronomen: (ze) mną, tobą, nim (er/es), nią, nami, wami, nimi: między nami.",
    pairs: [
      { de: "mit dem Freund", pl: "z kolegą" },
      { de: "mit der Freundin", pl: "z koleżanką" },
      { de: "mit dem Bruder", pl: "z bratem" },
      { de: "mit Zucker", pl: "z cukrem" },
      { de: "mit dem Bus (fahren)", pl: "autobusem" },
      { de: "mit dem Auto (fahren)", pl: "samochodem" },
      { de: "mit dem Zug (fahren)", pl: "pociągiem" },
      { de: "Ich bin Lehrer.", pl: "Jestem nauczycielem." },
      { de: "Ich bin Ärztin.", pl: "Jestem lekarką." },
      { de: "mit Freude", pl: "z radością" },
      { de: "vor dem Haus", pl: "przed domem" },
      { de: "zwischen uns", pl: "między nami" }
    ]
  },
  case_dative: {
    labelDe: "Fall: Dativ (celownik)",
    rules:
      "Dativ (celownik) – „wem?“\n" +
      "Wann?\n" +
      "• Indirektes Objekt (Empfänger): Daję mamie prezent. Kupuję bratu książkę.\n" +
      "• Verben mit Dativ: pomagać (helfen), dziękować (danken), wierzyć (glauben), ufać (vertrauen), przeszkadzać (stören), życzyć (wünschen, Sache im Genitiv), podobać się (gefallen), smakować (schmecken).\n" +
      "• Befinden und Gefühle, unpersönlich: Jest mi zimno / smutno / przykro. Co ci jest? = Was fehlt dir?\n" +
      "• Gefallen: Podoba mi się ten film. = Der Film gefällt mir (der Film ist Subjekt).\n" +
      "• Präpositionen: dzięki (dank), przeciw(ko) (gegen), wbrew (entgegen), ku (auf … zu).\n" +
      "Endungen Singular:\n" +
      "• männlich: meist -owi (nauczycielowi, lekarzowi, Markowi); einige kurze Wörter -u: brat → bratu, ojciec → ojcu, pan → panu, pies → psu, kot → kotu, chłopiec → chłopcu.\n" +
      "• weiblich und Männerwörter auf -a: gleiche Form wie Lokativ: -e mit Lautwechsel (mama → mamie, siostra → siostrze, koleżanka → koleżance, kolega → koledze) bzw. -i/-y bei weichem Stamm (babcia → babci, pani → pani, noc → nocy).\n" +
      "• sächlich: -u: dziecko → dziecku, okno → oknu.\n" +
      "Endungen Plural: immer -om: dzieciom, kolegom, rodzicom.\n" +
      "Adjektive & Pronomen:\n" +
      "• Adjektiv: m/n -emu, f -ej, Plural -ym/-im: mojemu bratu, mojej mamie, moim dzieciom.\n" +
      "• Personalpronomen kurz / betont: mi / mnie, ci / tobie, mu / jemu, jej, nam, wam, im. Nach Präposition mit n-: dzięki niemu, przeciwko nim.\n" +
      "• Kurzform im Normalfall (Daj mi to.), Langform bei Betonung und am Satzanfang (Tobie to daję, nie jemu.).",
    pairs: [
      { de: "Ich gebe der Mutter ein Geschenk.", pl: "Daję mamie prezent." },
      { de: "Ich helfe dem Bruder.", pl: "Pomagam bratu." },
      { de: "Ich danke dem Lehrer.", pl: "Dziękuję nauczycielowi." },
      { de: "Ich schicke dem Freund eine Nachricht.", pl: "Wysyłam koledze wiadomość." },
      { de: "Ich sage der Oma die Wahrheit.", pl: "Mówię babci prawdę." },
      { de: "Ich lese dem Kind ein Märchen vor.", pl: "Czytam dziecku bajkę." },
      { de: "Ich helfe den Kindern.", pl: "Pomagam dzieciom." },
      { de: "Mir ist kalt.", pl: "Jest mi zimno." },
      { de: "Es gefällt mir.", pl: "Podoba mi się." },
      { de: "Was fehlt dir?", pl: "Co ci jest?" },
      { de: "Ich glaube dir.", pl: "Wierzę ci." },
      { de: "Ich wünsche dir Glück.", pl: "Życzę ci szczęścia." },
      { de: "dank der Hilfe", pl: "dzięki pomocy" }
    ]
  },
  case_vocative: {
    labelDe: "Fall: Vokativ (wołacz)",
    rules:
      "Vokativ (wołacz) – Anrede\n" +
      "• Steht, wenn man jemanden direkt anspricht – mündlich und in Briefen/E-Mails: Mamo, chodź! Drogi Piotrze, …\n" +
      "• Pflicht in der höflichen Anrede: Panie Marku! Pani Anno! Panie doktorze! (Pan → Panie, Pani bleibt Pani; Vorname bzw. Titel ebenfalls im Vokativ).\n" +
      "• Unter Freunden ist bei Vornamen auch der Nominativ üblich: Anka, chodź!\n" +
      "Endungen Singular:\n" +
      "• männlich mit hartem Stamm: -e mit Lautwechsel wie im Lokativ: Piotr → Piotrze, Adam → Adamie, pan → panie, doktor → doktorze, Paweł → Pawle.\n" +
      "• männlich auf k, g, ch und mit weichem Stamm: -u: Tomek → Tomku, Marek → Marku, Tomasz → Tomaszu, syn → synu.\n" +
      "• Ausnahmen: Bóg → Boże, ojciec → ojcze, chłopiec → chłopcze.\n" +
      "• Wörter auf -a (weiblich und männlich): -o: mama → mamo, Anna → Anno, tata → tato, kolega → kolego.\n" +
      "• Koseformen und Verwandtschaftswörter auf -sia, -cia, -nia, -dzia: -u: Kasia → Kasiu, Basia → Basiu, babcia → babciu, ciocia → ciociu.\n" +
      "• weiblich auf -i: unverändert: pani → pani.\n" +
      "• sächlich: wie Nominativ: dziecko → dziecko!\n" +
      "Weiteres:\n" +
      "• Plural: immer wie Nominativ Plural: Panie i Panowie! Dzieci, chodźcie!\n" +
      "• Adjektive stehen dabei in der Nominativform: Drogi Piotrze, Kochana Mamo, Szanowny Panie, Szanowni Państwo.\n" +
      "• Achtung: proszę pana / proszę pani (Entschuldigung, mein Herr / meine Dame) ist Genitiv, kein Vokativ.",
    pairs: [
      { de: "Mama! (Anrede)", pl: "Mamo!" },
      { de: "Papa! (Anrede)", pl: "Tato!" },
      { de: "Oma! (Anrede)", pl: "Babciu!" },
      { de: "Mein Sohn! (Anrede)", pl: "Synu!" },
      { de: "Anna! (Anrede)", pl: "Anno!" },
      { de: "Kasia! (Anrede)", pl: "Kasiu!" },
      { de: "Peter! (Anrede)", pl: "Piotrze!" },
      { de: "Tomek! (Anrede)", pl: "Tomku!" },
      { de: "Kollege! (Anrede)", pl: "Kolego!" },
      { de: "Herr Doktor!", pl: "Panie doktorze!" },
      { de: "Sehr geehrter Herr …", pl: "Szanowny Panie …" },
      { de: "Sehr geehrte Damen und Herren!", pl: "Szanowni Państwo!" },
      { de: "Mein Gott!", pl: "Mój Boże!" }
    ]
  },
  pronouns_cases: {
    labelDe: "Personalpronomen in allen Fällen",
    rules:
      "Personalpronomen (zaimki osobowe)\n" +
      "Reihenfolge: Nominativ | Genitiv | Dativ | Akkusativ | Instrumental | Lokativ\n" +
      "• ja: ja | mnie | mi, mnie | mnie | mną | mnie\n" +
      "• ty: ty | cię, ciebie | ci, tobie | cię, ciebie | tobą | tobie\n" +
      "• on: on | go, jego, niego | mu, jemu, niemu | go, jego, niego | nim | nim\n" +
      "• ona: ona | jej, niej | jej, niej | ją, nią | nią | niej\n" +
      "• ono: ono | go, jego, niego | mu, jemu, niemu | je, nie | nim | nim\n" +
      "• my: my | nas | nam | nas | nami | nas\n" +
      "• wy: wy | was | wam | was | wami | was\n" +
      "• oni (mit Mann): oni | ich, nich | im, nim | ich, nich | nimi | nich\n" +
      "• one (sonst): one | ich, nich | im, nim | je, nie | nimi | nich\n" +
      "Kurz, lang oder mit n-?\n" +
      "• Kurzformen (cię, ci, mi, go, mu) sind unbetont: im Normalfall, nie am Satzanfang: Widzę cię. Daj mi to!\n" +
      "• Langformen (ciebie, tobie, mnie, jego, jemu) bei Betonung, Gegensatz und am Satzanfang: Ciebie kocham, nie jego.\n" +
      "• Nach Präpositionen: Langform, und bei on/ona/ono/oni/one die Form mit n-: bez ciebie, dla niego, z nią, o nich, do nich.\n" +
      "• Lokativ steht nur nach Präposition, darum gibt es dort nur n-Formen: o nim, o niej, o nich.\n" +
      "• Vor mnie und mną wird aus der Präposition oft eine Form mit -e: ze mną, beze mnie, ode mnie, przede mną, nade mną, pode mną.\n" +
      "Weiteres:\n" +
      "• Das Subjektpronomen fällt meist weg (Mam czas.), außer bei Betonung (Ja mam czas, a ty nie.).\n" +
      "• Höfliches Sie wird wie ein Nomen gebeugt: Pan – pana, panu, pana, panem, panu; Pani – pani, pani, panią, panią, pani; Państwo – państwa, państwu, państwa, państwem, państwu.\n" +
      "• Reflexiv „sich“ für alle Personen: się / siebie, sobie, sobą (→ Reflexive Verben).",
    pairs: [
      { de: "Ich sehe dich.", pl: "Widzę cię." },
      { de: "Ich kenne ihn.", pl: "Znam go." },
      { de: "Ich liebe sie (Sg.).", pl: "Kocham ją." },
      { de: "Ich sehe sie (Pl., Dinge).", pl: "Widzę je." },
      { de: "Gib mir das!", pl: "Daj mi to!" },
      { de: "Ich helfe ihm.", pl: "Pomagam mu." },
      { de: "Ich danke euch.", pl: "Dziękuję wam." },
      { de: "Komm mit mir!", pl: "Chodź ze mną!" },
      { de: "ohne dich", pl: "bez ciebie" },
      { de: "für ihn", pl: "dla niego" },
      { de: "mit ihr", pl: "z nią" },
      { de: "über sie (Pl.)", pl: "o nich" },
      { de: "bei uns", pl: "u nas" },
      { de: "Ich rufe sie (Pl.) an.", pl: "Dzwonię do nich." }
    ]
  },
  adjective_declension: {
    labelDe: "Adjektive in allen Fällen",
    rules:
      "Adjektivdeklination – Muster dobry (gut)\n" +
      "Singular: männlich | weiblich | sächlich\n" +
      "• Nominativ: dobry | dobra | dobre\n" +
      "• Genitiv: dobrego | dobrej | dobrego\n" +
      "• Dativ: dobremu | dobrej | dobremu\n" +
      "• Akkusativ: dobrego (belebt) / dobry (unbelebt) | dobrą | dobre\n" +
      "• Instrumental: dobrym | dobrą | dobrym\n" +
      "• Lokativ: dobrym | dobrej | dobrym\n" +
      "• Vokativ: wie Nominativ\n" +
      "Plural: männlich-persönlich | alle anderen\n" +
      "• Nominativ: dobrzy | dobre\n" +
      "• Genitiv: dobrych | dobrych\n" +
      "• Dativ: dobrym | dobrym\n" +
      "• Akkusativ: dobrych | dobre\n" +
      "• Instrumental: dobrymi | dobrymi\n" +
      "• Lokativ: dobrych | dobrych\n" +
      "Varianten:\n" +
      "• Nach k, g steht i statt y, und vor e kommt ein i: polski, polskiego, polskim, polskich; drogi, drogiego, drogim.\n" +
      "• Weiche Stämme ebenso mit i: tani, taniego, tanim, tanich; ostatni, ostatniego.\n" +
      "• Männlich-persönlicher Plural mit Lautwechsel: dobry → dobrzy, nowy → nowi, młody → młodzi, miły → mili, duży → duzi, wysoki → wysocy, polski → polscy, drogi → drodzy, zadowolony → zadowoleni.\n" +
      "Merkhilfe:\n" +
      "• -ego/-emu nur männlich und sächlich (Gen./Dat.), -ej nur weiblich (Gen./Dat./Lok.).\n" +
      "• -ym: Instr./Lok. Singular m/n und Dativ Plural; -ych: Gen./Lok. Plural; -ymi: Instrumental Plural.\n" +
      "Genauso gebeugt:\n" +
      "• Ordnungszahlen (pierwszy, drugi), Partizipien (czytający, zrobiony), mój/twój/nasz/wasz/swój, ten/który/jaki (mit kleinen Abweichungen), Komparative (lepszy) und Nomen in Adjektivform: znajomy (Bekannter), narzeczona (Verlobte), Zakopane (w Zakopanem).\n" +
      "Stellung:\n" +
      "• meist vor dem Nomen: nowy dom. Nachgestellt bei festen Begriffen und Einteilungen: język polski, kawa rozpuszczalna, pociąg osobowy.",
    pairs: [
      { de: "ein guter Freund (Nom.)", pl: "dobry kolega" },
      { de: "ohne guten Freund (Gen.)", pl: "bez dobrego kolegi" },
      { de: "dem guten Freund (Dat.)", pl: "dobremu koledze" },
      { de: "mit einem guten Freund (Instr.)", pl: "z dobrym kolegą" },
      { de: "über einen guten Freund (Lok.)", pl: "o dobrym koledze" },
      { de: "die neue Schule (Nom.)", pl: "nowa szkoła" },
      { de: "zur neuen Schule (Gen.)", pl: "do nowej szkoły" },
      { de: "ich sehe die neue Schule (Akk.)", pl: "widzę nową szkołę" },
      { de: "in der neuen Schule (Lok.)", pl: "w nowej szkole" },
      { de: "polnische Studenten (Nom. Pl.)", pl: "polscy studenci" },
      { de: "polnische Bücher (Nom. Pl.)", pl: "polskie książki" },
      { de: "für polnische Studenten (Gen. Pl.)", pl: "dla polskich studentów" },
      { de: "mit polnischen Freunden (Instr. Pl.)", pl: "z polskimi przyjaciółmi" },
      { de: "in polnischen Städten (Lok. Pl.)", pl: "w polskich miastach" },
      { de: "Liebe Freunde! (Vok. Pl.)", pl: "Drodzy przyjaciele!" }
    ]
  },
  noun_declension: {
    labelDe: "Nomen in allen Fällen",
    rules:
      "Nomendeklination – Musterwörter\n" +
      "Reihenfolge: Nom. | Gen. | Dat. | Akk. | Instr. | Lok. | Vok.\n" +
      "Männlich:\n" +
      "• Person: student | studenta | studentowi | studenta | studentem | studencie | studencie\n" +
      "• Tier: kot | kota | kotu | kota | kotem | kocie | kocie\n" +
      "• Ding: stół | stołu | stołowi | stół | stołem | stole | stole\n" +
      "• weicher Stamm: lekarz | lekarza | lekarzowi | lekarza | lekarzem | lekarzu | lekarzu\n" +
      "• auf -a: kolega | kolegi | koledze | kolegę | kolegą | koledze | kolego\n" +
      "Weiblich:\n" +
      "• harter Stamm: kawa | kawy | kawie | kawę | kawą | kawie | kawo\n" +
      "• auf -ka/-ga: książka | książki | książce | książkę | książką | książce | książko\n" +
      "• weicher Stamm: ulica | ulicy | ulicy | ulicę | ulicą | ulicy | ulico\n" +
      "• auf -ja/-ia: lekcja | lekcji | lekcji | lekcję | lekcją | lekcji | lekcjo\n" +
      "• auf Konsonant: noc | nocy | nocy | noc | nocą | nocy | nocy\n" +
      "Sächlich:\n" +
      "• auf -o: okno | okna | oknu | okno | oknem | oknie | okno\n" +
      "• auf -e: pytanie | pytania | pytaniu | pytanie | pytaniem | pytaniu | pytanie\n" +
      "• auf -ę: imię | imienia | imieniowi | imię | imieniem | imieniu | imię\n" +
      "Plural: Nom. | Gen. | Dat. | Akk. | Instr. | Lok. (Vok. = Nom.)\n" +
      "• männlich-persönlich: studenci | studentów | studentom | studentów | studentami | studentach\n" +
      "• männlich sonst: koty | kotów | kotom | koty | kotami | kotach\n" +
      "• weiblich: kawy | kaw | kawom | kawy | kawami | kawach\n" +
      "• sächlich: okna | okien | oknom | okna | oknami | oknach\n" +
      "Faustregeln:\n" +
      "• Plural: Dativ -om, Instrumental -ami, Lokativ -ach – fast ohne Ausnahme.\n" +
      "• Weiblich und männlich auf -a: Dativ = Lokativ.\n" +
      "• Akkusativ = Nominativ bei sächlich, weiblich auf Konsonant und männlich unbelebt; Akkusativ = Genitiv bei männlich belebt (Singular) und männlich-persönlich (Plural).\n" +
      "• Männlicher Vokativ = meist wie Lokativ (Ausnahmen → Vokativ-Lektion).\n" +
      "• Unregelmäßig: człowiek – ludzie (ludzi, ludziom, ludźmi, ludziach); dziecko – dzieci (dzieci, dzieciom, dziećmi, dzieciach); brat – bracia (braci, braciom, braćmi, braciach); ręka – ręce (rąk, rękom, rękami, rękach).",
    pairs: [
      { de: "des Studenten", pl: "studenta" },
      { de: "dem Studenten", pl: "studentowi" },
      { de: "mit dem Studenten", pl: "ze studentem" },
      { de: "über den Studenten", pl: "o studencie" },
      { de: "den Studenten (Dat. Pl.)", pl: "studentom" },
      { de: "auf der Straße", pl: "na ulicy" },
      { de: "die Straße (Akk.)", pl: "ulicę" },
      { de: "in der Unterrichtsstunde", pl: "na lekcji" },
      { de: "des Namens", pl: "imienia" },
      { de: "mit dem Namen", pl: "z imieniem" },
      { de: "ohne Fenster (Pl.)", pl: "bez okien" },
      { de: "mit den Kindern", pl: "z dziećmi" },
      { de: "über Menschen", pl: "o ludziach" }
    ]
  },
  prepositions_cases: {
    labelDe: "Präpositionen mit zwei Fällen",
    rules:
      "Präpositionen mit mehreren Fällen – die Bedeutung entscheidet\n" +
      "• w + Lokativ = in (wo): w domu | + Akkusativ = an (Wochentag), in (Richtung, selten): w piątek, w góry.\n" +
      "• na + Lokativ = auf, an (wo): na stole, na poczcie | + Akkusativ = auf, zu (wohin), für (Zeitraum, Zweck): na stół, na pocztę, na tydzień, na obiad.\n" +
      "• o + Lokativ = über (Thema), um (Uhrzeit): o rodzinie, o ósmej | + Akkusativ = um, nach (bitten, fragen, sich kümmern), gegen (lehnen, stoßen): proszę o pomoc, pytać o drogę, dbać o zdrowie, oprzeć się o ścianę.\n" +
      "• po + Lokativ = nach (zeitlich), herum: po obiedzie, po mieście | + Akkusativ = um zu holen, bis (an): idę po chleb, woda po kolana.\n" +
      "• za + Akkusativ = für (Dank, Preis), in (Zeitspanne), hinter (wohin): dziękuję za pomoc, za dziesięć złotych, za tydzień, za dom | + Instrumental = hinter (wo), für (dafür sein), nach (sich sehnen): za domem, jestem za tym, tęsknię za tobą | + Genitiv (selten) = zur Zeit von: za moich czasów.\n" +
      "• nad, pod, przed, między + Instrumental = wo: pod stołem, nad morzem, przed domem | + Akkusativ = wohin: pod stół, nad morze, przed dom.\n" +
      "• przed + Instrumental auch zeitlich: przed obiadem (vor dem Mittagessen), przed tygodniem (vor einer Woche).\n" +
      "• z + Genitiv = aus, von … herab, seit: z Polski, ze stołu, z rana | + Instrumental = mit: z kolegą, z mlekiem | + Akkusativ (umgangssprachlich) = etwa: z godzinę.\n" +
      "Faustregel:\n" +
      "• Ruhe, Ort (wo?) → Lokativ bzw. Instrumental; Richtung, Ziel (wohin?) → Akkusativ (oder do + Genitiv).\n" +
      "Präpositionen mit nur einem Fall (zum Vergleich):\n" +
      "• Genitiv: bez, dla, do, od, u, obok, koło, podczas, według, oprócz, zamiast, wśród, około, naprzeciwko.\n" +
      "• Dativ: dzięki, przeciw(ko), wbrew, ku.\n" +
      "• Akkusativ: przez (durch, über, wegen, während; beim Passiv „von“).\n" +
      "• Lokativ: przy (bei, an).",
    pairs: [
      { de: "auf die Post (wohin)", pl: "na pocztę" },
      { de: "für eine Woche", pl: "na tydzień" },
      { de: "zum Mittagessen", pl: "na obiad" },
      { de: "nach dem Weg fragen", pl: "pytać o drogę" },
      { de: "nach dem Mittagessen", pl: "po obiedzie" },
      { de: "Brot holen gehen", pl: "iść po chleb" },
      { de: "in einer Woche", pl: "za tydzień" },
      { de: "hinter dem Haus (wo)", pl: "za domem" },
      { de: "hinter das Haus (wohin)", pl: "za dom" },
      { de: "für zehn Złoty", pl: "za dziesięć złotych" },
      { de: "vor dem Mittagessen", pl: "przed obiadem" },
      { de: "vom Tisch (herunter)", pl: "ze stołu" },
      { de: "mit Milch", pl: "z mlekiem" },
      { de: "Ich vermisse dich.", pl: "tęsknię za tobą" },
      { de: "Ich bin dafür.", pl: "jestem za tym" }
    ]
  },
  verb_cases: {
    labelDe: "Verben und ihr Fall",
    rules:
      "Rektion – welcher Fall folgt auf das Verb?\n" +
      "Akkusativ (Normalfall für das direkte Objekt):\n" +
      "• mieć, lubić, kochać, znać, widzieć, czytać, pisać, robić, kupować, jeść, pić, odwiedzać, pytać (kogoś = jemanden fragen): Pytam nauczyciela.\n" +
      "• Bei Verneinung wird daraus der Genitiv: Nie lubię kawy.\n" +
      "Genitiv:\n" +
      "• potrzebować (brauchen), szukać (suchen), słuchać (zuhören), używać (benutzen), uczyć się (lernen), uczyć (kogoś czegoś = jemanden etwas lehren), bać się (Angst haben vor), wstydzić się (sich schämen), spodziewać się (erwarten), pilnować (aufpassen auf), unikać (meiden), próbować (probieren, kosten), dotykać (berühren).\n" +
      "• życzyć: Person im Dativ, Sache im Genitiv: Życzę ci zdrowia.\n" +
      "• chcieć bei Stoffen und Mengen oft mit Genitiv: Chcę wody.\n" +
      "Dativ:\n" +
      "• pomagać (helfen), dziękować (danken), wierzyć (glauben), ufać (vertrauen), przeszkadzać (stören), podobać się (gefallen), smakować (schmecken), wybaczać (verzeihen), towarzyszyć (begleiten), przyglądać się (betrachten).\n" +
      "• Person im Dativ, Sache im Akkusativ: dawać, pokazywać, mówić, kupować, wysyłać, opowiadać: Pokażę ci miasto.\n" +
      "Instrumental:\n" +
      "• być, zostać + Nomen: Jest lekarzem. Został kierowcą.\n" +
      "• interesować się (sich interessieren für), zajmować się (sich beschäftigen mit), opiekować się (sich kümmern um), kierować (leiten, lenken), rządzić (regieren), pachnieć (riechen nach): Pachnie kawą.\n" +
      "Feste Verbindungen mit Präposition:\n" +
      "• czekać na + Akk. (warten auf), patrzeć na + Akk. (schauen auf), liczyć na + Akk. (rechnen mit).\n" +
      "• myśleć o + Lok. (denken an), mówić o + Lok. (sprechen über), marzyć o + Lok. (träumen von).\n" +
      "• prosić o + Akk. (bitten um), pytać o + Akk. (fragen nach), dbać o + Akk. (achten auf), martwić się o + Akk. (sich Sorgen machen um).\n" +
      "• tęsknić za + Instr. (vermissen), rozmawiać z + Instr. (sprechen mit), zgadzać się z + Instr. (einverstanden sein mit).\n" +
      "• zależeć od + Gen. (abhängen von), dzwonić do + Gen. (anrufen), pisać do + Gen. (schreiben an).\n" +
      "Achtung, anders als im Deutschen:\n" +
      "• anrufen = dzwonić DO + Gen.; warten auf = czekać NA + Akk.; sich interessieren für = interesować się + Instr. ohne Präposition; brauchen, suchen, zuhören = Genitiv; jemanden fragen = Akkusativ.",
    pairs: [
      { de: "Ich brauche Hilfe.", pl: "Potrzebuję pomocy." },
      { de: "Ich suche den Schlüssel.", pl: "Szukam klucza." },
      { de: "Ich höre Musik.", pl: "Słucham muzyki." },
      { de: "Ich habe Angst vor dem Hund.", pl: "Boję się psa." },
      { de: "Ich helfe dir.", pl: "Pomagam ci." },
      { de: "Es schmeckt mir.", pl: "Smakuje mi." },
      { de: "Ich warte auf dich.", pl: "Czekam na ciebie." },
      { de: "Ich denke an dich.", pl: "Myślę o tobie." },
      { de: "Ich bitte um Hilfe.", pl: "Proszę o pomoc." },
      { de: "Ich interessiere mich für Musik.", pl: "Interesuję się muzyką." },
      { de: "Ich rufe die Mutter an.", pl: "Dzwonię do mamy." },
      { de: "Es riecht nach Kaffee.", pl: "Pachnie kawą." },
      { de: "Das hängt von dir ab.", pl: "To zależy od ciebie." },
      { de: "Ich frage den Lehrer.", pl: "Pytam nauczyciela." }
    ]
  },
  question_cases: {
    labelDe: "Fragewörter in den Fällen",
    rules:
      "Fragepronomen kto und co in allen Fällen\n" +
      "Reihenfolge: Nom. | Gen. | Dat. | Akk. | Instr. | Lok.\n" +
      "• kto (wer): kto | kogo | komu | kogo | kim | (o) kim\n" +
      "• co (was): co | czego | czemu | co | czym | (o) czym\n" +
      "• Mit Präposition: z kim? (mit wem?), do kogo? (zu wem?), dla kogo? (für wen?), o czym? (worüber?), czym? (womit?).\n" +
      "• Nach kto steht das Verb in der 3. Person Singular, in der Vergangenheit männlich: Kto przyszedł? Nach co sächlich: Co się stało?\n" +
      "• czego? auch nach Verneinung und Genitiv-Verben: Czego szukasz? = Was suchst du?\n" +
      "Fragewörter wie Adjektive:\n" +
      "• jaki, jaka, jakie (was für ein, wie): Jaki to film? Jaka jest pogoda? – jakiego, jakiej, jakim …\n" +
      "• który, która, które (welcher): Który autobus? W którym pokoju?\n" +
      "• czyj, czyja, czyje (wessen): Czyj to długopis? Czyja to torba? Czyje to dziecko?\n" +
      "Mengen:\n" +
      "• ile + Genitiv (wie viel, wie viele): Ile kosztuje? Ile masz lat? Bei männlichen Personen ilu: Ilu było studentów?",
    pairs: [
      { de: "wen?", pl: "kogo?" },
      { de: "wem?", pl: "komu?" },
      { de: "mit wem?", pl: "z kim?" },
      { de: "über wen?", pl: "o kim?" },
      { de: "wessen? / wovon? (Gen.)", pl: "czego?" },
      { de: "womit?", pl: "czym?" },
      { de: "worüber?", pl: "o czym?" },
      { de: "für wen?", pl: "dla kogo?" },
      { de: "zu wem?", pl: "do kogo?" },
      { de: "Wer ist gekommen?", pl: "Kto przyszedł?" },
      { de: "Was ist passiert?", pl: "Co się stało?" },
      { de: "Wessen Tasche ist das?", pl: "Czyja to torba?" },
      { de: "Wie alt bist du?", pl: "Ile masz lat?" },
      { de: "Mit wem sprichst du?", pl: "Z kim rozmawiasz?" },
      { de: "Woran denkst du?", pl: "O czym myślisz?" },
      { de: "wie viele (Männer)?", pl: "ilu?" }
    ]
  },
  demonstratives: {
    labelDe: "ten, ta, to & Co. in allen Fällen",
    rules:
      "Demonstrativpronomen und verwandte Wörter\n" +
      "ten (dieser): männlich | weiblich | sächlich\n" +
      "• Nominativ: ten | ta | to – Plural: ci (männlich-persönlich) | te (sonst)\n" +
      "• Genitiv: tego | tej | tego – Plural: tych\n" +
      "• Dativ: temu | tej | temu – Plural: tym\n" +
      "• Akkusativ: tego (belebt) / ten (unbelebt) | tę (umgangssprachlich tą) | to – Plural: tych (männlich-persönlich) | te\n" +
      "• Instrumental: tym | tą | tym – Plural: tymi\n" +
      "• Lokativ: tym | tej | tym – Plural: tych\n" +
      "• tamten (jener) geht genauso: tamtego, tamtej, tamtym; tamci / tamte.\n" +
      "• to als Satzsubjekt „das“ bleibt unverändert: To jest mój dom. To są moi rodzice.\n" +
      "• ten sam, ta sama, to samo = derselbe; taki, taka, takie = solch, so ein (wie Adjektiv): taki duży dom.\n" +
      "Alle, jeder, kein:\n" +
      "• wszyscy = alle (Personen, männlich-persönlich), wszystkie = alle (sonst), wszystko = alles. Gen./Lok. Plural wszystkich, Instr. wszystkimi; wszystko: wszystkiego, wszystkiemu, wszystkim.\n" +
      "• każdy, każda, każde (jeder) – wie Adjektiv: każdego dnia = jeden Tag.\n" +
      "• żaden, żadna, żadne (kein einziger) – immer mit nie: Nie mam żadnego pytania.\n" +
      "• sam, sama, samo, sami, same = selbst, allein: Zrobiłem to sam. Jestem sama.\n" +
      "• oba/obie/obaj/oboje (beide) → Zahlen ab 100 & Sammelzahlen.",
    pairs: [
      { de: "dieser Mann", pl: "ten mężczyzna" },
      { de: "diese Frau", pl: "ta kobieta" },
      { de: "dieses Kind", pl: "to dziecko" },
      { de: "diese Leute", pl: "ci ludzie" },
      { de: "diese Bücher", pl: "te książki" },
      { de: "Ich kenne diesen Mann.", pl: "znam tego mężczyznę" },
      { de: "Ich sehe diese Frau.", pl: "widzę tę kobietę" },
      { de: "mit diesem Kind", pl: "z tym dzieckiem" },
      { de: "in dieser Stadt", pl: "w tym mieście" },
      { de: "jener Tag", pl: "tamten dzień" },
      { de: "derselbe", pl: "ten sam" },
      { de: "jeden Tag", pl: "każdego dnia" },
      { de: "Ich habe keine einzige Frage.", pl: "nie mam żadnego pytania" },
      { de: "Ich habe es selbst gemacht.", pl: "zrobiłem to sam" },
      { de: "für alle", pl: "dla wszystkich" }
    ]
  },
  indefinite_pronouns: {
    labelDe: "Irgendwer, irgendwo – unbestimmte Pronomen",
    rules:
      "Unbestimmte Pronomen und Adverbien\n" +
      "• -ś = irgend-: ktoś (jemand), coś (etwas), gdzieś (irgendwo), dokądś (irgendwohin), skądś (irgendwoher), kiedyś (irgendwann, einmal; auch: früher), jakiś (irgendein), czyjś (irgendjemandes), jakoś (irgendwie).\n" +
      "• -kolwiek = egal wer/was …, … auch immer: ktokolwiek, cokolwiek, gdziekolwiek, kiedykolwiek, jakikolwiek.\n" +
      "• byle = irgendein, egal (oft abwertend): byle co (irgendwas), byle jak (irgendwie, schlampig), byle kto.\n" +
      "• Verneint mit ni- und immer mit nie: nikt, nic, nigdzie, nigdy, żaden, niczyj (→ Verneinung).\n" +
      "Beugung:\n" +
      "• ktoś, ktokolwiek wie kto: kogoś, komuś, kimś; coś wie co: czegoś, czemuś, czymś.\n" +
      "• jakiś, czyjś, jakikolwiek wie Adjektive: jakiegoś, jakąś, jakimś.\n" +
      "• Adjektiv nach coś, nic, nikt im Genitiv: coś dobrego (etwas Gutes), nic nowego (nichts Neues), nikogo innego.\n" +
      "Weitere:\n" +
      "• kilka (einige) + Gen. Pl., bei männlichen Personen kilku: kilka książek, kilku kolegów; parę (ein paar): parę minut.\n" +
      "• niektórzy (manche Leute), niektóre (manche, sonst); inny (ein anderer).\n" +
      "• In Fragen: Czy ktoś dzwonił? Masz coś do picia?",
    pairs: [
      { de: "Hat jemand angerufen?", pl: "Czy ktoś dzwonił?" },
      { de: "etwas Gutes", pl: "coś dobrego" },
      { de: "nichts Neues", pl: "nic nowego" },
      { de: "irgendwohin", pl: "dokądś" },
      { de: "irgendwoher", pl: "skądś" },
      { de: "irgendein", pl: "jakiś" },
      { de: "irgendwie", pl: "jakoś" },
      { de: "wer auch immer", pl: "ktokolwiek" },
      { de: "was auch immer", pl: "cokolwiek" },
      { de: "egal wo", pl: "gdziekolwiek" },
      { de: "irgendwas, egal was", pl: "byle co" },
      { de: "für jemanden", pl: "dla kogoś" },
      { de: "mit jemandem", pl: "z kimś" },
      { de: "an etwas denken", pl: "myśleć o czymś" },
      { de: "manche (Leute)", pl: "niektórzy" }
    ]
  },
  negation: {
    labelDe: "Verneinung",
    rules:
      "Verneinung (przeczenie)\n" +
      "• nie steht direkt vor dem verneinten Wort, meist vor dem Verb: Nie mam czasu. Nie on, tylko ona.\n" +
      "• Schreibung: beim Verb getrennt (nie wiem), bei Adjektiven, Adverbien und Partizipien in Adjektivform zusammen (niedobry, niedaleko, nieznany) – außer bei Gegensatz und Komparativ: nie dobry, ale zły; nie lepszy.\n" +
      "Doppelte Verneinung (Pflicht):\n" +
      "• nikt, nic, nigdy, nigdzie, żaden, niczyj stehen immer zusammen mit nie: Nikt nie dzwonił. Nic nie wiem. Nigdy nigdzie nie byłem.\n" +
      "Genitiv der Verneinung:\n" +
      "• Ein Akkusativ-Objekt wird zum Genitiv: Mam samochód → Nie mam samochodu. Lubię kawę → Nie lubię kawy.\n" +
      "• Andere Fälle bleiben: Pomagam mu → Nie pomagam mu (Dativ). Interesuję się sportem → Nie interesuję się sportem.\n" +
      "• Nach być bleibt Nominativ/Instrumental: To nie jest mój dom. On nie jest lekarzem.\n" +
      "nie ma = es gibt nicht / ist nicht da:\n" +
      "• nie ma + Genitiv: Nie ma chleba. Nie ma go w domu.\n" +
      "• Vergangenheit nie było, Zukunft nie będzie – immer sächlich Singular: Nie było nikogo. Jutro nie będzie lekcji.\n" +
      "Kurze Wendungen:\n" +
      "• jeszcze nie (noch nicht), już nie (nicht mehr), wcale nie / w ogóle nie (gar nicht), też nie (auch nicht), ani … ani (weder … noch): Nie piję ani kawy, ani herbaty.\n" +
      "• Nein = Nie. Nein, danke. = Nie, dziękuję. Verneinter Imperativ meist unvollendet: Nie rób tego!",
    pairs: [
      { de: "Ich habe kein Auto.", pl: "Nie mam samochodu." },
      { de: "Ich mag keinen Kaffee.", pl: "Nie lubię kawy." },
      { de: "Niemand hat angerufen.", pl: "Nikt nie dzwonił." },
      { de: "Ich weiß nichts.", pl: "Nic nie wiem." },
      { de: "Ich war nie dort.", pl: "Nigdy tam nie byłem." },
      { de: "Er ist nicht zu Hause.", pl: "Nie ma go w domu." },
      { de: "Es war niemand da.", pl: "Nie było nikogo." },
      { de: "Das ist nicht mein Haus.", pl: "To nie jest mój dom." },
      { de: "noch nicht", pl: "jeszcze nie" },
      { de: "nicht mehr", pl: "już nie" },
      { de: "gar nicht", pl: "wcale nie" },
      { de: "auch nicht", pl: "też nie" },
      { de: "weder … noch", pl: "ani … ani" },
      { de: "nicht weit", pl: "niedaleko" },
      { de: "Nein, danke.", pl: "Nie, dziękuję." }
    ]
  },
  verb_aspect: {
    labelDe: "Verbaspekt (unvollendet/vollendet)",
    rules:
      "Verbaspekt (aspekt)\n" +
      "• Fast jedes Verb gibt es als Paar: unvollendet (niedokonany) und vollendet (dokonany). Die Bedeutung ist gleich, der Blick auf die Handlung verschieden.\n" +
      "• Unvollendet = Vorgang, Dauer, Wiederholung, Gewohnheit, allgemeine Aussage: Czytałem książkę. = Ich habe (eine Weile) im Buch gelesen. Codziennie piję kawę.\n" +
      "• Vollendet = einmalige, abgeschlossene Handlung mit Ergebnis: Przeczytałem książkę. = Ich habe das Buch (zu Ende) gelesen.\n" +
      "Zeiten:\n" +
      "• unvollendet: Präsens (czytam), Vergangenheit (czytałem), Zukunft mit będę (będę czytać / będę czytał).\n" +
      "• vollendet: KEIN Präsens. Vergangenheit (przeczytałem); die Präsens-Endungen ergeben die Zukunft (przeczytam = ich werde (zu Ende) lesen).\n" +
      "Bildung der Paare:\n" +
      "• Vorsilbe macht vollendet: robić → zrobić, pisać → napisać, czytać → przeczytać, jeść → zjeść, pić → wypić, uczyć się → nauczyć się. Welche Vorsilbe, muss man mitlernen.\n" +
      "• Wechsel des Suffixes (das unvollendete Verb ist meist länger: -ywać, -iwać, -awać, -ować, -ać): kupować → kupić, dawać → dać, pomagać → pomóc, otwierać → otworzyć, zamykać → zamknąć.\n" +
      "• Ganz verschiedene Wörter: brać → wziąć, mówić → powiedzieć, oglądać → obejrzeć, kłaść → położyć.\n" +
      "Faustregeln:\n" +
      "• Unvollendet bei: często, zawsze, codziennie, zwykle, długo, ciągle; nach zaczynać, kończyć, przestać + Infinitiv (Skończyłem czytać.).\n" +
      "• Vollendet bei: nagle, wreszcie, w końcu, już (mit Ergebnis); bei einmaligen Bitten (Zrób to!).\n" +
      "• Verbote mit nie meist unvollendet: Nie rób tego!\n" +
      "• In den Paaren: (Vorgang) = unvollendet, (fertig/auf) = vollendet.",
    pairs: [
      { de: "machen (Vorgang)", pl: "robić" },
      { de: "machen (fertig)", pl: "zrobić" },
      { de: "schreiben (Vorgang)", pl: "pisać" },
      { de: "schreiben (fertig)", pl: "napisać" },
      { de: "lesen (Vorgang)", pl: "czytać" },
      { de: "lesen (fertig)", pl: "przeczytać" },
      { de: "essen (Vorgang)", pl: "jeść" },
      { de: "essen (auf)", pl: "zjeść" },
      { de: "kaufen (Vorgang)", pl: "kupować" },
      { de: "kaufen (fertig)", pl: "kupić" },
      { de: "lernen (Vorgang)", pl: "uczyć się" },
      { de: "lernen (fertig)", pl: "nauczyć się" }
    ]
  },
  reflexive_verbs: {
    labelDe: "Reflexive Verben (się)",
    rules:
      "Reflexive Verben mit się\n" +
      "• się ist für alle Personen gleich: myję się, myjesz się, myje się … = ich wasche mich, du wäschst dich …\n" +
      "• Stellung: möglichst früh im Satz, oft direkt nach dem ersten betonten Wort, aber nie ganz am Anfang: Jak się nazywasz? Tu się dobrze czuję. Am Satzende ist es erlaubt: Uczę się.\n" +
      "• Verneinung: nie vor das Verb, się bleibt: Nie spieszę się. Vergangenheit: myłem się, spóźniłam się.\n" +
      "Bedeutungen:\n" +
      "• rückbezüglich: myć się (sich waschen), ubierać się (sich anziehen).\n" +
      "• gegenseitig (einander): spotykać się (sich treffen), znać się (sich kennen).\n" +
      "• ohne deutsche Entsprechung: uczyć się (lernen), bać się (Angst haben), śmiać się (lachen).\n" +
      "• unpersönlich „man“: Jak się to mówi? = Wie sagt man das? Tu się nie pali. = Hier raucht man nicht.\n" +
      "• Umgekehrt ist nicht jedes deutsche Reflexivverb polnisch reflexiv: odpoczywać (sich ausruhen), pamiętać (sich erinnern).\n" +
      "Volle Formen:\n" +
      "• siebie (Gen./Akk.), sobie (Dat./Lok.), sobą (Instr.) – bei Betonung und nach Präpositionen: Myślę o sobie. Jest zadowolony z siebie.\n" +
      "• „sich/mir/dir“ im Dativ = sobie: Kupiłem sobie książkę. = Ich habe mir ein Buch gekauft. Wyobrażam sobie … = Ich stelle mir vor …\n" +
      "Rektion (welcher Fall folgt):\n" +
      "• interesować się + Instr. (Interesuję się sportem), bać się + Gen. (Boję się psa), uczyć się + Gen. (Uczę się polskiego), cieszyć się z + Gen. (über Vorhandenes) / na + Akk. (auf Kommendes): Cieszę się z prezentu / na urlop.",
    pairs: [
      { de: "ich heiße", pl: "nazywam się" },
      { de: "wie heißt du?", pl: "jak się nazywasz?" },
      { de: "sich waschen", pl: "myć się" },
      { de: "sich anziehen", pl: "ubierać się" },
      { de: "sich fühlen", pl: "czuć się" },
      { de: "sich freuen", pl: "cieszyć się" },
      { de: "lernen / sich beibringen", pl: "uczyć się" },
      { de: "sich beeilen", pl: "spieszyć się" },
      { de: "sich treffen", pl: "spotykać się" },
      { de: "sich ausruhen", pl: "odpoczywać" },
      { de: "sich interessieren (für)", pl: "interesować się" },
      { de: "sich verspäten", pl: "spóźniać się" }
    ]
  },
  comparison_adjectives: {
    labelDe: "Steigerung von Adjektiven",
    rules:
      "Steigerung der Adjektive (stopniowanie)\n" +
      "Komparativ – Endung -szy oder -ejszy:\n" +
      "• -szy, wenn der Stamm auf einen einzelnen Konsonanten endet: nowy → nowszy, stary → starszy, młody → młodszy, tani → tańszy.\n" +
      "• -ejszy (mit weichem Konsonanten davor), wenn der Stamm auf eine Konsonantengruppe endet: łatwy → łatwiejszy, trudny → trudniejszy, ciepły → cieplejszy, ładny → ładniejszy.\n" +
      "• -ki, -oki, -eki fallen weg, oft mit Lautwechsel: szybki → szybszy, krótki → krótszy, wysoki → wyższy, niski → niższy, daleki → dalszy, bliski → bliższy, lekki → lżejszy.\n" +
      "• g, s, z vor -szy werden zu ż: drogi → droższy, długi → dłuższy, wąski → węższy.\n" +
      "• Der Komparativ wird wie jedes Adjektiv gebeugt: nowszy (m), nowsza (f), nowsze (n); Plural: nowsi (männlich-persönlich), nowsze (sonst).\n" +
      "Superlativ:\n" +
      "• naj- + Komparativ: nowszy → najnowszy, lepszy → najlepszy.\n" +
      "• „von allen / in“: z + Genitiv oder w + Lokativ: najlepszy z nas, najwyższy w klasie.\n" +
      "Umschreibung:\n" +
      "• bardziej / najbardziej + Grundform bei Partizipien und vielen langen Adjektiven: bardziej zmęczony, najbardziej interesujący.\n" +
      "• weniger / am wenigsten: mniej / najmniej + Grundform: mniej drogi.\n" +
      "• Unregelmäßig (auswendig lernen): dobry → lepszy, zły → gorszy, duży → większy, mały → mniejszy.\n" +
      "Vergleichen:\n" +
      "• „als“ = niż + gleicher Fall wie das Verglichene (meist Nominativ): Anna jest starsza niż Piotr.\n" +
      "• oder od + Genitiv: Anna jest starsza od Piotra.\n" +
      "• so … wie = tak … jak: tak duży jak dom. – immer …er = coraz + Komparativ: coraz lepszy. – je … desto = im … tym: im więcej, tym lepiej.\n" +
      "Format der Paare: Grundform – Komparativ bzw. Superlativ.",
    pairs: [
      { de: "gut – besser", pl: "dobry – lepszy" },
      { de: "gut – am besten", pl: "dobry – najlepszy" },
      { de: "schlecht – schlechter", pl: "zły – gorszy" },
      { de: "schlecht – am schlechtesten", pl: "zły – najgorszy" },
      { de: "groß – größer", pl: "duży – większy" },
      { de: "groß – am größten", pl: "duży – największy" },
      { de: "klein – kleiner", pl: "mały – mniejszy" },
      { de: "klein – am kleinsten", pl: "mały – najmniejszy" },
      { de: "neu – neuer", pl: "nowy – nowszy" },
      { de: "alt – älter", pl: "stary – starszy" },
      { de: "teuer – teurer", pl: "drogi – droższy" },
      { de: "als (Vergleich)", pl: "niż" }
    ]
  },
  time_clock: {
    labelDe: "Uhrzeit & Datum",
    rules:
      "Uhrzeit (godzina) – mit weiblichen Ordnungszahlen, weil godzina weiblich ist:\n" +
      "• Wie spät ist es? = Która (jest) godzina? – Jest pierwsza / druga / trzecia … (Nominativ).\n" +
      "• um … Uhr = o + Lokativ: o pierwszej, o drugiej, o ósmej, o dwunastej.\n" +
      "• nach: Minuten + po + Lokativ: pięć po ósmej (8:05), kwadrans po trzeciej (3:15).\n" +
      "• vor: za + Minuten + Nominativ der Stunde: za pięć ósma (7:55), za kwadrans trzecia (2:45).\n" +
      "• halb: wpół do + Genitiv der FOLGENDEN Stunde: wpół do trzeciej = halb drei (2:30).\n" +
      "• Fahrpläne, Termine: Stunde + Minuten als Grundzahl: ósma trzydzieści (8:30), o szesnastej piętnaście (um 16:15).\n" +
      "• von … bis = od … do + Genitiv: od ósmej do szesnastej.\n" +
      "Datum:\n" +
      "• Tag als männliche Ordnungszahl (wegen dzień), Monat im Genitiv: Dzisiaj jest pierwszy maja. = Heute ist der 1. Mai.\n" +
      "• am … = Ordnungszahl im Genitiv: pierwszego maja = am 1. Mai. Frage: Którego dzisiaj jest? – Piątego.\n" +
      "• Monate im Genitiv: stycznia, lutego, marca, kwietnia, maja, czerwca, lipca, sierpnia, września, października, listopada, grudnia.\n" +
      "• im Monat = w + Lokativ: w styczniu, w lutym, w marcu, w kwietniu, w maju, w czerwcu, w lipcu, w sierpniu, we wrześniu, w październiku, w listopadzie, w grudniu.\n" +
      "• am Wochentag = w + Akkusativ: w poniedziałek, we wtorek, w środę, w czwartek, w piątek, w sobotę, w niedzielę.\n" +
      "• im Jahr = w + Lokativ der Ordnungszahl + roku: w 2026 roku (w dwa tysiące dwudziestym szóstym roku).\n" +
      "• Tageszeiten: rano (morgens), w południe (mittags), po południu (nachmittags), wieczorem (abends), w nocy (nachts).",
    pairs: [
      { de: "Wie spät ist es?", pl: "Która godzina?" },
      { de: "Es ist ein Uhr.", pl: "Jest pierwsza." },
      { de: "Es ist zwei Uhr.", pl: "Jest druga." },
      { de: "um acht Uhr", pl: "o ósmej" },
      { de: "um halb drei", pl: "o wpół do trzeciej" },
      { de: "Viertel nach drei", pl: "kwadrans po trzeciej" },
      { de: "am Montag", pl: "w poniedziałek" },
      { de: "am Wochenende", pl: "w weekend" },
      { de: "im Mai", pl: "w maju" },
      { de: "welches Datum ist heute?", pl: "którego dzisiaj jest?" },
      { de: "die Minute", pl: "minuta" },
      { de: "die halbe Stunde", pl: "pół godziny" }
    ]
  },
  quantities_packaging: {
    labelDe: "Mengen & Verpackungen",
    rules:
      "Mengen & Zahlen mit Nomen\n" +
      "• Maß- und Verpackungswörter + Genitiv: kilo cukru, litr mleka, butelka wody, paczka herbaty, kawałek chleba, plasterek sera.\n" +
      "• Unbestimmte Mengen + Genitiv: dużo, mało, trochę, wiele, kilka, ile – zählbar im Genitiv Plural (dużo jabłek), unzählbar im Genitiv Singular (trochę cukru).\n" +
      "• Danach steht das Verb in der 3. Person Singular, in der Vergangenheit sächlich: Jest dużo ludzi. Było trochę wody.\n" +
      "Zahl + Nomen:\n" +
      "• 1: Nominativ Singular, die Zahl passt sich an: jeden dom, jedna butelka, jedno jabłko.\n" +
      "• 2, 3, 4 (auch 22–24, 32–34 …, aber nicht 12–14): Nominativ Plural, Verb im Plural: dwa jabłka, trzy butelki, dwadzieścia dwa domy – Są dwa jabłka.\n" +
      "• 5 bis 21 und alle übrigen Zahlen (25–31 …): Genitiv Plural, Verb in der 3. Person Singular (Vergangenheit sächlich): pięć jabłek, dwanaście butelek – Jest pięć jabłek. Było pięć jabłek.\n" +
      "• dwa für männlich/sächlich, dwie für weiblich: dwa domy, dwa jabłka, dwie butelki.\n" +
      "• Männliche Personen: dwaj/trzej/czterej + Nominativ Plural oder dwóch/trzech/czterech + Genitiv Plural: dwaj panowie = dwóch panów; ab 5: pięciu panów.\n" +
      "• pół (halb) + Genitiv: pół kilo, pół litra, pół godziny; półtora (anderthalb): półtora kilo.\n" +
      "• deko (= 10 g) ist an der Theke üblich: 20 deko sera = 200 g Käse.",
    pairs: [
      { de: "ein Kilo", pl: "kilogram" },
      { de: "ein halbes Kilo", pl: "pół kilo" },
      { de: "ein Deka(gramm)", pl: "deko" },
      { de: "ein Liter", pl: "litr" },
      { de: "eine Flasche", pl: "butelka" },
      { de: "eine Packung", pl: "paczka" },
      { de: "eine Dose", pl: "puszka" },
      { de: "ein Stück", pl: "kawałek" },
      { de: "eine Scheibe", pl: "plasterek" },
      { de: "viel", pl: "dużo" },
      { de: "wenig", pl: "mało" },
      { de: "ein bisschen", pl: "trochę" }
    ]
  },
  phrases_shopping: {
    labelDe: "Sätze: Im Geschäft",
    rules:
      "Im Geschäft\n" +
      "• Poproszę + Akkusativ = Ich hätte gern …: Poproszę kawę / chleb / dwa bilety.\n" +
      "• Mengen mit Genitiv: Poproszę kilo jabłek / butelkę wody.\n" +
      "• Preis: Ile kosztuje + Singular? – Ile kosztują + Plural? (Ile kosztują pomidory?) Ile to kosztuje? = Was kostet das?\n" +
      "• Czy jest … ? (+ Nominativ) = Gibt es … / Haben Sie …? Antwort: Jest. oder Nie ma + Genitiv: Nie ma chleba.\n" +
      "• Direkt an den Verkäufer: Czy ma Pan / Pani …? (+ Akkusativ) = Haben Sie …?\n" +
      "• za + Adjektiv = zu …, das Adjektiv richtet sich nach dem Nomen: za drogi (m), za droga (f), za drogie (n, auch nach to).\n" +
      "• Bezahlen mit Instrumental (womit?): płacić kartą / gotówką.",
    pairs: [
      { de: "Ich hätte gern …", pl: "Poproszę …" },
      { de: "Was kostet das?", pl: "Ile to kosztuje?" },
      { de: "Wie viel macht das?", pl: "Ile płacę?" },
      { de: "Gibt es …? (Haben Sie …?)", pl: "Czy jest …?" },
      { de: "Ich schaue nur.", pl: "Tylko oglądam." },
      { de: "Das ist zu teuer.", pl: "To jest za drogie." },
      { de: "Kann ich mit Karte zahlen?", pl: "Czy mogę zapłacić kartą?" },
      { de: "Ich zahle bar.", pl: "Płacę gotówką." },
      { de: "eine Tüte, bitte", pl: "poproszę reklamówkę" },
      { de: "Das ist alles.", pl: "To wszystko." },
      { de: "Sonst noch etwas?", pl: "Czy coś jeszcze?" },
      { de: "Danke, das war's.", pl: "Dziękuję, to wszystko." }
    ]
  },
  phrases_doctor: {
    labelDe: "Sätze: Beim Arzt",
    rules:
      "Beim Arzt\n" +
      "• Schmerzen: boli mnie + Körperteil im Nominativ (das Körperteil ist Subjekt): Boli mnie głowa. Plural: Bolą mnie plecy / nogi.\n" +
      "• Andere Personen (Akkusativ): boli cię / go / ją / nas / was / ich: Boli go ząb. = Er hat Zahnschmerzen.\n" +
      "• Befinden mit Adverb: Czuję się dobrze / źle. – Jak się czujesz? = Wie fühlst du dich?\n" +
      "• Adjektive nach być richten sich nach dem Geschlecht: Jestem chory (m) / chora (f), przeziębiony / przeziębiona.\n" +
      "• Symptome mit mieć + Akkusativ: Mam gorączkę, katar, kaszel.\n" +
      "• potrzebować + Genitiv: Potrzebuję lekarza / lekarstwa / recepty.\n" +
      "• beim Arzt = u lekarza (u + Genitiv), zum Arzt = do lekarza. Was fehlt Ihnen? = Co Panu / Pani dolega? (Dativ).",
    pairs: [
      { de: "Ich fühle mich schlecht.", pl: "Źle się czuję." },
      { de: "Ich bin krank.", pl: "Jestem chory." },
      { de: "Mein Kopf tut weh.", pl: "Boli mnie głowa." },
      { de: "Mein Hals tut weh.", pl: "Boli mnie gardło." },
      { de: "Ich habe Fieber.", pl: "Mam gorączkę." },
      { de: "Ich habe Husten.", pl: "Mam kaszel." },
      { de: "Ich bin erkältet.", pl: "Jestem przeziębiony." },
      { de: "Ich brauche einen Arzt.", pl: "Potrzebuję lekarza." },
      { de: "Ich brauche ein Medikament.", pl: "Potrzebuję lekarstwa." },
      { de: "Wo ist die Apotheke?", pl: "Gdzie jest apteka?" },
      { de: "Ich habe einen Termin.", pl: "Mam wizytę." },
      { de: "Gute Besserung!", pl: "Zdrowia!" }
    ]
  },
  phrases_directions: {
    labelDe: "Sätze: Nach dem Weg fragen",
    rules:
      "Nach dem Weg fragen\n" +
      "• Höflicher Einstieg: Przepraszam, … = Entschuldigung, …\n" +
      "• Höfliche Aufforderung: Proszę + Infinitiv: Proszę iść prosto / skręcić w lewo.\n" +
      "• Höfliche Frage mit Pan/Pani + 3. Person: Czy może Pan / Pani pokazać?\n" +
      "• zu Fuß: iść / dojść; mit Fahrzeug: jechać / dojechać: Jak dojść / dojechać na dworzec?\n" +
      "• wohin: do + Genitiv (do centrum, do hotelu) oder na + Akkusativ bei Plätzen, Bahnhof, Post, Veranstaltungen (na dworzec, na pocztę, na plac).\n" +
      "• wo: w + Lokativ (w centrum) bzw. na + Lokativ (na dworcu, na poczcie, na skrzyżowaniu).\n" +
      "• Richtung: w lewo / w prawo (nach links / rechts) – Lage: na lewo / po lewej (stronie) = links.\n" +
      "• Zgubiłem się (m) / Zgubiłam się (f) = Ich habe mich verlaufen.",
    pairs: [
      { de: "Entschuldigung, wo ist …?", pl: "Przepraszam, gdzie jest …?" },
      { de: "Wie komme ich zum Bahnhof?", pl: "Jak dojść na dworzec?" },
      { de: "Ist es weit?", pl: "Czy to daleko?" },
      { de: "Es ist in der Nähe.", pl: "To jest blisko." },
      { de: "Gehen Sie geradeaus.", pl: "Proszę iść prosto." },
      { de: "Biegen Sie links ab.", pl: "Proszę skręcić w lewo." },
      { de: "Biegen Sie rechts ab.", pl: "Proszę skręcić w prawo." },
      { de: "an der Kreuzung", pl: "na skrzyżowaniu" },
      { de: "Ich habe mich verlaufen.", pl: "Zgubiłem się." },
      { de: "Können Sie das zeigen?", pl: "Czy może Pan pokazać?" },
      { de: "Wo ist die Haltestelle?", pl: "Gdzie jest przystanek?" },
      { de: "Danke für die Hilfe.", pl: "Dziękuję za pomoc." }
    ]
  },
  phrases_phone: {
    labelDe: "Sätze: Telefonieren",
    rules:
      "Am Telefon\n" +
      "• Słucham? (wörtlich „ich höre“) = Ja, bitte? beim Abheben; auch: Wie bitte?\n" +
      "• Z tej strony + Name im Nominativ: Z tej strony Anna. = Hier spricht Anna.\n" +
      "• rozmawiać z + Instrumental: Czy mogę rozmawiać z panem Nowakiem?\n" +
      "• dzwonić / zadzwonić do + Genitiv: Zadzwonię do ciebie / do pana. (zadzwonić ist vollendet → zadzwonię = Zukunft).\n" +
      "• Jemand ist nicht da: nie ma + Genitiv: Nie ma go (er) / jej (sie) / szefa.\n" +
      "• Höflich mit Pan/Pani: Jaki jest Pana / Pani numer? Nie słyszę Pana / Pani.\n" +
      "• Do usłyszenia! = Auf Wiederhören! (wie Do widzenia!).",
    pairs: [
      { de: "Hallo? (am Telefon)", pl: "Halo?" },
      { de: "Ja bitte? / Ich höre.", pl: "Słucham?" },
      { de: "Hier spricht …", pl: "Z tej strony …" },
      { de: "Kann ich mit … sprechen?", pl: "Czy mogę rozmawiać z …?" },
      { de: "Einen Moment, bitte.", pl: "Chwileczkę, proszę." },
      { de: "Er ist nicht da.", pl: "Nie ma go." },
      { de: "Ich rufe später an.", pl: "Zadzwonię później." },
      { de: "Rufen Sie mich an.", pl: "Proszę do mnie zadzwonić." },
      { de: "Wie ist Ihre Nummer?", pl: "Jaki jest Pana numer?" },
      { de: "Die Verbindung ist schlecht.", pl: "Połączenie jest słabe." },
      { de: "Ich höre Sie nicht.", pl: "Nie słyszę Pana." },
      { de: "Auf Wiederhören.", pl: "Do usłyszenia." }
    ]
  },
  adverbs_frequency: {
    labelDe: "Adverbien: Häufigkeit & Grad",
    rules:
      "Adverbien der Häufigkeit und des Grades\n" +
      "• Stellung: meist direkt vor dem Verb bzw. Adjektiv, das sie bestimmen: Zawsze pracuję. Bardzo dobry.\n" +
      "• nigdy verlangt doppelte Verneinung: Nigdy nie piję kawy. (Objekt nach nie im Genitiv). Ebenso nic, nikt, nigdzie: Nic nie wiem.\n" +
      "• za = zu (zu viel): za drogi, za dużo, za późno.\n" +
      "• dość vor Adjektiv = ziemlich (dość dobry); vor Nomen = genug + Genitiv (dość czasu). wystarczająco = ausreichend (wystarczająco dużo).\n" +
      "• Adverbien aus Adjektiven: -o oder -ie statt -y/-i: szybki → szybko, częsty → często, rzadki → rzadko, ładny → ładnie; unregelmäßig: dobry → dobrze, zły → źle.\n" +
      "• Wie oft? = Jak często? – Antwort auch mit raz: raz w tygodniu (einmal pro Woche), dwa razy dziennie (zweimal täglich).\n" +
      "• Gleichbedeutend: zwykle = zazwyczaj (gewöhnlich, meistens), czasami = czasem (manchmal).",
    pairs: [
      { de: "immer", pl: "zawsze" },
      { de: "meistens", pl: "zazwyczaj" },
      { de: "oft", pl: "często" },
      { de: "manchmal", pl: "czasami" },
      { de: "selten", pl: "rzadko" },
      { de: "nie", pl: "nigdy" },
      { de: "gewöhnlich", pl: "zwykle" },
      { de: "sehr", pl: "bardzo" },
      { de: "ziemlich", pl: "dość" },
      { de: "zu (viel)", pl: "za" },
      { de: "genug", pl: "wystarczająco" },
      { de: "fast", pl: "prawie" }
    ]
  },

  motion_verbs: {
    labelDe: "Verben der Bewegung",
    rules:
      "Verben der Bewegung (czasowniki ruchu)\n" +
      "Zu Fuß oder mit Fahrzeug?\n" +
      "• iść / chodzić = zu Fuß gehen; jechać / jeździć = fahren (Auto, Bus, Zug, Rad, auch Reiten). Für Reisen in andere Orte immer jechać: Jadę do Krakowa.\n" +
      "• Ebenso gepaart: lecieć / latać (fliegen), płynąć / pływać (schwimmen, mit dem Schiff fahren), biec / biegać (laufen), nieść / nosić (tragen), wieźć / wozić (im Fahrzeug bringen).\n" +
      "Bestimmt oder unbestimmt?\n" +
      "• bestimmt (iść, jechać, lecieć …): jetzt gerade, in eine Richtung, ein konkreter Weg: Idę do sklepu. = Ich gehe (gerade) zum Laden.\n" +
      "• unbestimmt (chodzić, jeździć, latać …): regelmäßig, hin und zurück, ohne Richtung oder als Fähigkeit: Codziennie chodzę do pracy. Dziecko już chodzi. = Das Kind kann schon laufen.\n" +
      "• Präsens: idę, idziesz, idą – chodzę, chodzisz, chodzą – jadę, jedziesz, jadą – jeżdżę, jeździsz, jeżdżą – lecę, lecisz, lecą – latam, latasz, latają.\n" +
      "• Vergangenheit: szedłem/szłam, szedł, szła, szli – jechałem/jechałam – chodziłem, jeździłem.\n" +
      "Mit Vorsilben:\n" +
      "• Vorsilbe + bestimmtes Verb = vollendet: pójść, przyjść, wyjść, wejść; pojechać, przyjechać, wyjechać, wjechać. Aus iść wird -jść.\n" +
      "• Vorsilbe + unbestimmtes Verb = unvollendeter Partner: przychodzić, wychodzić, wchodzić; przyjeżdżać, wyjeżdżać, wjeżdżać.\n" +
      "• po- = los-, hin- (pójdę = ich werde hingehen); przy- = an-, her- (+ do: przyjść do domu); wy- = hinaus, weg-, verreisen (+ z: wyjść z domu); w(e)- = hinein (+ do: wejść do sklepu); do- = bis hin, erreichen (+ do: dojść do dworca); prze- = über, durch (+ przez: przejść przez ulicę); od- = weg (+ od: odejść od okna); z(e)- = herunter (+ z: zejść ze schodów); ob- = herum (obejść dom).\n" +
      "• Vergangenheit der Vorsilbenverben: przyszedłem/przyszłam, wyszedł, weszła, poszli; przyjechałem, wyjechała.\n" +
      "Zukunft & Ziel:\n" +
      "• Zukunft meist vollendet: pójdę, pojadę, przyjdę, polecę = ich werde gehen, fahren, kommen, fliegen.\n" +
      "• Ziel: do + Genitiv (do pracy, do Polski) oder na + Akkusativ (na dworzec, na koncert); Verkehrsmittel im Instrumental: jechać autobusem, pociągiem.",
    pairs: [
      { de: "ich gehe (gerade, zu Fuß)", pl: "idę" },
      { de: "ich gehe (regelmäßig)", pl: "chodzę" },
      { de: "ich fahre (gerade)", pl: "jadę" },
      { de: "ich fahre (regelmäßig)", pl: "jeżdżę" },
      { de: "ich fliege (gerade)", pl: "lecę" },
      { de: "ich fliege (oft)", pl: "latam" },
      { de: "losfahren, hinfahren (pf.)", pl: "pojechać" },
      { de: "kommen (zu Fuß, pf.)", pl: "przyjść" },
      { de: "hinausgehen (pf.)", pl: "wyjść" },
      { de: "hineingehen (pf.)", pl: "wejść" },
      { de: "überqueren (pf.)", pl: "przejść" },
      { de: "ankommen (Fahrzeug, pf.)", pl: "przyjechać" },
      { de: "wegfahren, verreisen (pf.)", pl: "wyjechać" },
      { de: "Ich gehe jeden Tag zur Arbeit.", pl: "Codziennie chodzę do pracy." },
      { de: "Morgen fahre ich nach Krakau.", pl: "Jutro jadę do Krakowa." }
    ]
  },
  place_directions: {
    labelDe: "Wo? Wohin? Woher?",
    rules:
      "Wo? Wohin? Woher? (gdzie? dokąd? skąd?)\n" +
      "• Polnisch unterscheidet Ort, Ziel und Herkunft durch Präposition UND Fall. Die Präposition hängt vom Ort ab.\n" +
      "Gebäude, Räume, Städte, die meisten Länder:\n" +
      "• wo: w + Lokativ – wohin: do + Genitiv – woher: z + Genitiv: w szkole – do szkoły – ze szkoły; w Polsce – do Polski – z Polski; w Niemczech – do Niemiec – z Niemiec.\n" +
      "Plätze, offene Flächen, Veranstaltungen, Bahnhof, Post, Uni, Inseln, Himmelsrichtungen:\n" +
      "• wo: na + Lokativ – wohin: na + Akkusativ – woher: z + Genitiv: na dworcu – na dworzec – z dworca; na koncercie – na koncert – z koncertu; na północy – na północ – z północy.\n" +
      "• auch einige Länder: na Węgrzech, na Ukrainie, na Litwie, na Słowacji – na Węgry, na Ukrainę – z Węgier, z Ukrainy.\n" +
      "Personen:\n" +
      "• wo: u + Genitiv – wohin: do + Genitiv – woher: od + Genitiv: u lekarza – do lekarza – od lekarza; u babci – do babci – od babci.\n" +
      "Gewässer und Berge:\n" +
      "• am Wasser: nad + Instrumental – ans Wasser: nad + Akkusativ – vom Wasser: znad + Genitiv: nad morzem – nad morze – znad morza.\n" +
      "• Gebirge: w górach – w góry (Akkusativ!) – z gór.\n" +
      "Lage mit nad, pod, przed, za, między:\n" +
      "• wo: + Instrumental (pod stołem) – wohin: + Akkusativ (pod stół) – woher: spod, znad, sprzed, zza + Genitiv (spod stołu, zza domu).\n" +
      "Merke:\n" +
      "• zu Hause – nach Hause – von zu Hause: w domu – do domu – z domu.\n" +
      "• Herkunft: Jestem z Niemiec. = Ich komme aus Deutschland.\n" +
      "• Fragewörter: gdzie? = wo? (umgangssprachlich auch wohin?), dokąd? = wohin?, skąd? = woher?",
    pairs: [
      { de: "in Deutschland (wo)", pl: "w Niemczech" },
      { de: "nach Deutschland", pl: "do Niemiec" },
      { de: "aus Deutschland", pl: "z Niemiec" },
      { de: "auf dem Bahnhof (wo)", pl: "na dworcu" },
      { de: "zum Bahnhof", pl: "na dworzec" },
      { de: "vom Bahnhof", pl: "z dworca" },
      { de: "beim Arzt (wo)", pl: "u lekarza" },
      { de: "zum Arzt", pl: "do lekarza" },
      { de: "am Meer (wo)", pl: "nad morzem" },
      { de: "ans Meer", pl: "nad morze" },
      { de: "in den Bergen", pl: "w górach" },
      { de: "in die Berge", pl: "w góry" },
      { de: "in Ungarn", pl: "na Węgrzech" },
      { de: "unter dem Tisch (wo)", pl: "pod stołem" },
      { de: "unter den Tisch (wohin)", pl: "pod stół" },
      { de: "unter dem Tisch hervor", pl: "spod stołu" }
    ]
  },
  position_verbs: {
    labelDe: "Stehen, liegen, sitzen – stellen, legen, setzen",
    rules:
      "Lage und Platzieren\n" +
      "Zustand (wo?) – unvollendet, kein Objekt:\n" +
      "• stać (stehen): stoję, stoisz, stoją – leżeć (liegen): leżę, leżysz, leżą – siedzieć (sitzen): siedzę, siedzisz, siedzą – wisieć (hängen): wiszę, wisisz, wiszą.\n" +
      "Etwas irgendwohin bringen (unvollendet / vollendet):\n" +
      "• stellen: stawiać / postawić – legen: kłaść / położyć – setzen (jemanden): sadzać / posadzić – hängen: wieszać / powiesić – hineinstecken, hineinlegen: wkładać / włożyć.\n" +
      "• Präsens kłaść: kładę, kładziesz, kładą; Zukunft położyć: położę, położysz.\n" +
      "Sich hinstellen, hinlegen, hinsetzen (unvollendet / vollendet):\n" +
      "• siadać / usiąść (sich setzen): usiądę, usiądziesz; usiadłem/usiadłam.\n" +
      "• kłaść się / położyć się (sich hinlegen).\n" +
      "• stawać / stanąć (sich hinstellen, stehen bleiben): stanę; stanąłem/stanęłam.\n" +
      "Fälle:\n" +
      "• Anders als im Deutschen steht nach na und w meist auch beim Platzieren der Lokativ: Połóż książkę na stole. Powieś kurtkę na wieszaku. Usiądź na krześle.\n" +
      "• hinein in etwas: do + Genitiv: Włóż to do szafy. Wkładam mleko do lodówki.\n" +
      "• Zustand: Książka leży na stole. Kurtka wisi w szafie. Kot siedzi pod stołem.\n" +
      "• Höflich: Proszę usiąść. = Setzen Sie sich bitte. Imperativ: usiądź!, połóż!, postaw!",
    pairs: [
      { de: "Ich stehe.", pl: "Stoję." },
      { de: "Es liegt dort.", pl: "Leży tam." },
      { de: "Wir sitzen.", pl: "Siedzimy." },
      { de: "hängen (Zustand)", pl: "wisieć" },
      { de: "stellen (ipf.)", pl: "stawiać" },
      { de: "stellen (pf.)", pl: "postawić" },
      { de: "legen (ipf.)", pl: "kłaść" },
      { de: "legen (pf.)", pl: "położyć" },
      { de: "sich setzen (pf.)", pl: "usiąść" },
      { de: "sich hinlegen (pf.)", pl: "położyć się" },
      { de: "aufhängen (pf.)", pl: "powiesić" },
      { de: "hineinlegen (pf.)", pl: "włożyć" },
      { de: "Das Buch liegt auf dem Tisch.", pl: "Książka leży na stole." },
      { de: "Setzen Sie sich bitte.", pl: "Proszę usiąść." }
    ]
  },
  relative_clauses: {
    labelDe: "Nebensätze & który",
    rules:
      "Nebensätze (zdania podrzędne)\n" +
      "Relativpronomen który (der, die, das / welcher):\n" +
      "• Geschlecht und Zahl kommen vom Bezugswort, der Fall von der Rolle im Nebensatz: kobieta, którą znam (Akk., weil: znam ją).\n" +
      "• Gebeugt wie ein Adjektiv (m | f | n):\n" +
      "• Nominativ: który | która | które – Plural: którzy (männlich-persönlich) | które (sonst)\n" +
      "• Genitiv: którego | której | którego – Plural: których\n" +
      "• Dativ: któremu | której | któremu – Plural: którym\n" +
      "• Akkusativ: którego (belebt) / który (unbelebt) | którą | które – Plural: których (männlich-persönlich) | które (sonst)\n" +
      "• Instrumental: którym | którą | którym – Plural: którymi\n" +
      "• Lokativ: (o) którym | której | którym – Plural: których\n" +
      "• Die Präposition steht vor który: dom, w którym mieszkam; kolega, z którym pracuję.\n" +
      "• „dessen/deren“ = Genitiv von który: mężczyzna, którego samochód stoi tu.\n" +
      "Andere Relativwörter:\n" +
      "• co nach wszystko, to, coś, nic: wszystko, co mam; to, co mówisz.\n" +
      "• kto nach ten, każdy, ktoś: Ten, kto pyta, nie błądzi.\n" +
      "• gdzie statt w którym: miasto, gdzie mieszkam.\n" +
      "Konjunktionen:\n" +
      "• że (dass), czy (ob), bo / ponieważ (weil), jeśli / jeżeli (wenn, falls), kiedy / gdy (wenn, als), chociaż (obwohl), zanim (bevor), dopóki (solange), więc (also).\n" +
      "• żeby / aby (damit, dass) + l-Form bei anderem Subjekt: Chcę, żebyś przyszedł; + Infinitiv bei gleichem Subjekt: Uczę się, żeby pracować w Polsce.\n" +
      "• Indirekte Fragen mit czy oder Fragewort: Nie wiem, czy przyjdzie. Powiedz, gdzie mieszkasz.\n" +
      "Wortstellung & Komma:\n" +
      "• Vor jedem Nebensatz steht ein Komma (auch vor że, który, żeby).\n" +
      "• Das Verb wandert NICHT ans Ende – die Wortstellung ist wie im Hauptsatz: Wiem, że on ma czas. = Ich weiß, dass er Zeit hat.",
    pairs: [
      { de: "der Mann, der hier wohnt", pl: "mężczyzna, który tu mieszka" },
      { de: "die Frau, die ich kenne", pl: "kobieta, którą znam" },
      { de: "das Haus, in dem ich wohne", pl: "dom, w którym mieszkam" },
      { de: "der Kollege, mit dem ich arbeite", pl: "kolega, z którym pracuję" },
      { de: "die Leute, die hier arbeiten", pl: "ludzie, którzy tu pracują" },
      { de: "die Bücher, die ich lese", pl: "książki, które czytam" },
      { de: "der Mann, dessen Auto hier steht", pl: "mężczyzna, którego samochód tu stoi" },
      { de: "alles, was ich habe", pl: "wszystko, co mam" },
      { de: "Ich weiß, dass …", pl: "Wiem, że …" },
      { de: "Ich weiß nicht, ob …", pl: "Nie wiem, czy …" },
      { de: "bevor", pl: "zanim" },
      { de: "Ich will, dass du kommst.", pl: "Chcę, żebyś przyszedł." }
    ]
  },
  numbers_large: {
    labelDe: "Zahlen ab 100, Jahre & Sammelzahlen",
    rules:
      "Große Zahlen, Jahreszahlen, Sammelzahlen\n" +
      "Hunderter und Tausender:\n" +
      "• sto, dwieście, trzysta, czterysta, pięćset, sześćset, siedemset, osiemset, dziewięćset.\n" +
      "• tysiąc wird wie ein Nomen gezählt: tysiąc, dwa/trzy/cztery tysiące, pięć tysięcy; ebenso milion: dwa miliony, pięć milionów; miliard.\n" +
      "• Zusammengesetzte Zahlen werden ohne „und“ aneinandergereiht, die Einer kommen zuletzt: 1999 = tysiąc dziewięćset dziewięćdziesiąt dziewięć; 2026 = dwa tysiące dwadzieścia sześć.\n" +
      "Zahl + Nomen (die letzte Zahl entscheidet):\n" +
      "• endet auf 2, 3, 4 (nicht 12–14): Nominativ Plural: dwadzieścia dwa złote, sto trzy domy.\n" +
      "• alle übrigen: Genitiv Plural: sto pięć złotych, tysiąc złotych.\n" +
      "• Achtung: am Ende einer längeren Zahl bleibt jeden unverändert und das Nomen steht im Genitiv Plural: dwadzieścia jeden złotych, sto jeden dni.\n" +
      "• Geld: 1 złoty, 2–4 złote, 5+ złotych; 1 grosz, 2–4 grosze, 5+ groszy.\n" +
      "Jahreszahlen:\n" +
      "• Nur die letzte Stelle ist Ordnungszahl: rok dwa tysiące dwudziesty szósty.\n" +
      "• im Jahr …: w + Lokativ + roku: w tysiąc dziewięćset osiemdziesiątym dziewiątym roku (1989).\n" +
      "• in den 90ern: w latach dziewięćdziesiątych.\n" +
      "• Ordnungszahlen: setny (100.), dwusetny (200.), tysięczny (1000.).\n" +
      "Sammelzahlen (dwoje, troje, czworo, pięcioro …):\n" +
      "• für gemischte Gruppen aus Männern und Frauen, für Kinder und Jungtiere (Wörter auf -ę) und für Wörter, die es nur im Plural gibt: dwoje dzieci, troje studentów (gemischt), czworo drzwi.\n" +
      "• immer + Genitiv Plural, Verb in der 3. Person Singular (Vergangenheit sächlich): Dwoje dzieci bawiło się.\n" +
      "• beide: oboje (gemischt, Paar), obaj (zwei Männer), oba (m/n Dinge), obie (f).\n" +
      "Brüche:\n" +
      "• pół (halb), półtora (anderthalb), ćwierć (Viertel) + Genitiv: pół godziny, półtorej godziny (f!).\n" +
      "• dwa i pół = zweieinhalb; Dezimalzahl: 2,5 = dwa przecinek pięć.",
    pairs: [
      { de: "dreihundert", pl: "trzysta" },
      { de: "vierhundert", pl: "czterysta" },
      { de: "sechshundert", pl: "sześćset" },
      { de: "neunhundert", pl: "dziewięćset" },
      { de: "zweitausend", pl: "dwa tysiące" },
      { de: "fünftausend", pl: "pięć tysięcy" },
      { de: "zwei Millionen", pl: "dwa miliony" },
      { de: "21 Złoty", pl: "dwadzieścia jeden złotych" },
      { de: "22 Złoty", pl: "dwadzieścia dwa złote" },
      { de: "in den 90ern", pl: "w latach dziewięćdziesiątych" },
      { de: "zwei Kinder", pl: "dwoje dzieci" },
      { de: "drei Kinder", pl: "troje dzieci" },
      { de: "anderthalb", pl: "półtora" },
      { de: "zweieinhalb", pl: "dwa i pół" }
    ]
  },
  diminutives: {
    labelDe: "Verkleinerungsformen",
    rules:
      "Verkleinerungsformen (zdrobnienia)\n" +
      "• Sie drücken Kleinheit, Zuneigung oder Höflichkeit aus und sind im Alltag sehr häufig: Poproszę kawkę. Chwileczkę!\n" +
      "• Das Geschlecht bleibt gleich.\n" +
      "Bildung:\n" +
      "• männlich: -ek, -ik/-yk: dom → domek, kot → kotek, nos → nosek, stół → stolik, chłopiec → chłopczyk.\n" +
      "• weiblich: -ka, -ółka/-eczka: kawa → kawka, głowa → główka, noga → nóżka, ręka → rączka, książka → książeczka.\n" +
      "• sächlich: -ko, -eczko, -ątko: piwo → piwko, okno → okienko, słońce → słoneczko, mleko → mleczko.\n" +
      "• Lautwechsel vor -k-: g → ż (noga → nóżka), k → cz (ręka → rączka), ch → sz (mucha → muszka); o → ó (noga → nóżka, głowa → główka).\n" +
      "• Zweite Stufe, noch zärtlicher: kot → kotek → koteczek; ręka → rączka → rączeczka.\n" +
      "Vornamen:\n" +
      "• Koseformen sind die normale Anrede unter Freunden: Katarzyna → Kasia, Małgorzata → Gosia, Anna → Ania, Barbara → Basia, Piotr → Piotrek, Tomasz → Tomek, Jakub → Kuba, Stanisław → Staszek.\n" +
      "• Vokativ: Kasiu! Gosiu! Piotrku! Tomku!\n" +
      "Weiteres:\n" +
      "• Gebeugt wie normale Nomen: z kotkiem, do domku, w okienku.\n" +
      "• Manche haben eine eigene Bedeutung: łyżka → łyżeczka (Teelöffel), wódka (ursprünglich „Wässerchen“ von woda).\n" +
      "• Mama/Papa zärtlich: mamusia, tatuś.",
    pairs: [
      { de: "das Häuschen", pl: "domek" },
      { de: "das Kätzchen", pl: "kotek" },
      { de: "das Tischchen", pl: "stolik" },
      { de: "ein kleiner Kaffee", pl: "kawka" },
      { de: "das Händchen", pl: "rączka" },
      { de: "das Füßchen", pl: "nóżka" },
      { de: "das Fensterchen", pl: "okienko" },
      { de: "das Bierchen", pl: "piwko" },
      { de: "das Sönnchen", pl: "słoneczko" },
      { de: "der Teelöffel", pl: "łyżeczka" },
      { de: "ein Momentchen", pl: "chwileczka" },
      { de: "das Büchlein", pl: "książeczka" },
      { de: "Jakob (Koseform)", pl: "Kuba" },
      { de: "Mutti", pl: "mamusia" }
    ]
  },
  b1_participles: {
    labelDe: "B1: Partizipien & unpersönliche Formen",
    rules:
      "Partizipien und unpersönliche Formen (B1)\n" +
      "Aktivpartizip (-ący) – „lesend“:\n" +
      "• Nur von unvollendeten Verben: 3. Person Plural Präsens + -cy, -ca, -ce: czytają → czytający, pracują → pracujący, idą → idący.\n" +
      "• Wird wie ein Adjektiv gebeugt: pracująca kobieta, z czytającym dzieckiem.\n" +
      "Passivpartizip (-ny, -ony, -ty) – „geschrieben“:\n" +
      "• -ać → -any: napisać → napisany, czytać → czytany.\n" +
      "• -ić, -yć, -eć → -ony, mit Lautwechsel: zrobić → zrobiony, zapłacić → zapłacony, zaprosić → zaproszony, widzieć → widziany.\n" +
      "• -nąć → -nięty: zamknąć → zamknięty; viele kurze Verben → -ty: otworzyć → otwarty, umyć → umyty, wziąć → wzięty, zacząć → zaczęty.\n" +
      "• Wie ein Adjektiv gebeugt; männlich-persönlich Plural mit Lautwechsel: zaproszeni goście.\n" +
      "Passiv:\n" +
      "• Zustand: być + Passivpartizip: Sklep jest zamknięty.\n" +
      "• Vorgang: zostać (vollendet) / być (unvollendet) + Passivpartizip: Dom został zbudowany w 1990 roku.\n" +
      "• Der Handelnde: przez + Akkusativ: zbudowany przez mojego dziadka.\n" +
      "Adverbialpartizipien (unveränderlich):\n" +
      "• gleichzeitig, nur unvollendet: 3. Person Plural + -c: czytają → czytając, idą → idąc = beim Lesen, im Gehen. Czytając, piję kawę.\n" +
      "• vorzeitig, nur vollendet: -wszy / -łszy: zrobiwszy, przeczytawszy, wszedłszy = nachdem … (gehoben, schriftlich).\n" +
      "• Das Subjekt beider Satzteile muss dasselbe sein.\n" +
      "Unpersönliche Formen:\n" +
      "• -no / -to = „man hat …“ (nur Vergangenheit, kein Subjekt, Objekt im Akkusativ): zrobiono, otwarto, zbudowano: Zbudowano nowy most.\n" +
      "• się + 3. Person Singular = man (alle Zeiten): Tu się nie pali. Jak się to pisze?\n" +
      "• można (man kann), trzeba (man muss), wolno / nie wolno (man darf / nicht), warto (es lohnt sich) + Infinitiv: Warto to zobaczyć.",
    pairs: [
      { de: "lesend", pl: "czytający" },
      { de: "arbeitend", pl: "pracujący" },
      { de: "geschrieben", pl: "napisany" },
      { de: "gemacht", pl: "zrobiony" },
      { de: "bezahlt", pl: "zapłacony" },
      { de: "eingeladen", pl: "zaproszony" },
      { de: "beim Lesen (während)", pl: "czytając" },
      { de: "im Gehen, unterwegs", pl: "idąc" },
      { de: "man hat gemacht", pl: "zrobiono" },
      { de: "Man hat eine Brücke gebaut.", pl: "Zbudowano most." },
      { de: "Das Haus wurde gebaut.", pl: "Dom został zbudowany." },
      { de: "Der Laden ist geschlossen.", pl: "Sklep jest zamknięty." },
      { de: "es lohnt sich", pl: "warto" }
    ]
  },
  verbal_nouns: {
    labelDe: "Verbalsubstantive (-nie, -cie)",
    rules:
      "Verbalsubstantive – „das Lesen“, „das Trinken“\n" +
      "• Aus fast jedem Verb entsteht ein sächliches Nomen auf -nie oder -cie: czytać → czytanie (das Lesen), pić → picie (das Trinken).\n" +
      "• Es entspricht dem Passivpartizip mit -ie statt -y: czytany → czytanie, zrobiony → zrobienie, zamknięty → zamknięcie, myty → mycie.\n" +
      "Bildung:\n" +
      "• -ać → -anie: czekać → czekanie, śpiewać → śpiewanie, sprzątać → sprzątanie.\n" +
      "• -ić, -yć, -eć → -enie, oft mit Lautwechsel: mówić → mówienie, palić → palenie, płacić → płacenie, widzieć → widzenie (Do widzenia!).\n" +
      "• -ować → -owanie: gotować → gotowanie, podróżować → podróżowanie.\n" +
      "• kurze Verben und -nąć → -cie, -ięcie: pić → picie, myć → mycie, żyć → życie, zamknąć → zamknięcie.\n" +
      "• się bleibt erhalten: uczenie się (das Lernen), mycie się.\n" +
      "• Beide Aspekte möglich: pisanie (das Schreiben) – napisanie (das Fertigschreiben).\n" +
      "Gebrauch:\n" +
      "• Gebeugt wie sächliche Nomen auf -e: bez czekania, przed jedzeniem, o pływaniu, ze spaniem.\n" +
      "• Pływanie jest zdrowe. Palenie wzbronione. Mam problem ze spaniem.\n" +
      "• Viele haben eine feste, konkrete Bedeutung: jedzenie (Essen), mieszkanie (Wohnung), zdanie (Satz, Meinung), danie (Gericht), spotkanie (Treffen), zadanie (Aufgabe), pytanie (Frage), zaproszenie (Einladung).",
    pairs: [
      { de: "das Rauchen", pl: "palenie" },
      { de: "das Waschen", pl: "mycie" },
      { de: "das Schließen", pl: "zamknięcie" },
      { de: "das Lernen", pl: "uczenie się" },
      { de: "das Singen", pl: "śpiewanie" },
      { de: "das Bezahlen", pl: "płacenie" },
      { de: "das Aufräumen", pl: "sprzątanie" },
      { de: "das Schlafen", pl: "spanie" },
      { de: "das Schreiben", pl: "pisanie" },
      { de: "Rauchen verboten.", pl: "Palenie wzbronione." },
      { de: "Schwimmen ist gesund.", pl: "Pływanie jest zdrowe." },
      { de: "vor dem Essen", pl: "przed jedzeniem" },
      { de: "ohne Warten", pl: "bez czekania" },
      { de: "die Einladung", pl: "zaproszenie" }
    ]
  },
  a2_review_mixed: {
    labelDe: "A2 Wiederholung (gemischt)",
    pairs: [
      { de: "die Familie", pl: "rodzina" },
      { de: "das Kind", pl: "dziecko" },
      { de: "das Wasser", pl: "woda" },
      { de: "das Brot", pl: "chleb" },
      { de: "das Haus", pl: "dom" },
      { de: "die Wohnung", pl: "mieszkanie" },
      { de: "die Stadt", pl: "miasto" },
      { de: "die Straße", pl: "ulica" },
      { de: "das Geschäft", pl: "sklep" },
      { de: "das Geld", pl: "pieniądze" },
      { de: "kaufen", pl: "kupować" },
      { de: "bezahlen", pl: "płacić" },
      { de: "die Arbeit", pl: "praca" },
      { de: "arbeiten", pl: "pracować" },
      { de: "das Auto", pl: "samochód" },
      { de: "der Zug", pl: "pociąg" },
      { de: "die Reise", pl: "podróż" },
      { de: "das Wetter", pl: "pogoda" },
      { de: "die Sonne", pl: "słońce" },
      { de: "der Regen", pl: "deszcz" },
      { de: "krank", pl: "chory" },
      { de: "gesund", pl: "zdrowy" },
      { de: "der Arzt", pl: "lekarz" },
      { de: "glücklich", pl: "szczęśliwy" },
      { de: "müde", pl: "zmęczony" },
      { de: "die Kleidung", pl: "ubranie" },
      { de: "die Schuhe", pl: "buty" },
      { de: "heute", pl: "dzisiaj" },
      { de: "morgen", pl: "jutro" },
      { de: "immer", pl: "zawsze" },
      { de: "manchmal", pl: "czasami" },
      { de: "helfen", pl: "pomagać" },
      { de: "brauchen", pl: "potrzebować" },
      { de: "warum", pl: "dlaczego" },
      { de: "weil", pl: "ponieważ" },
      { de: "vielleicht", pl: "może" }
    ]
  },
  // ===================================================================
  // Duolingo-Wortschatz (Import 21.10.2026) – Wörter aus dem Duolingo-Kurs,
  // die oben noch fehlten. Grundformen, thematisch gruppiert.
  // ===================================================================

  duo_people_family_1: {
    labelDe: "Personen & Familie I",
    pairs: [
      { de: "der Mann", pl: "mężczyzna" },
      { de: "der Junge", pl: "chłopiec" },
      { de: "die Frau", pl: "kobieta" },
      { de: "das Mädchen", pl: "dziewczynka" },
      { de: "der Mensch", pl: "człowiek" },
      { de: "der Papa", pl: "tata" },
      { de: "die Mama", pl: "mama" },
      { de: "die Ehe", pl: "małżeństwo" },
      { de: "der Elternteil", pl: "rodzic" },
      { de: "die Geschwister (Pl.)", pl: "rodzeństwo" },
      { de: "der Freund (romantisch)", pl: "chłopak" },
      { de: "die Freundin", pl: "dziewczyna" },
      { de: "der Bekannte", pl: "znajomy" }
    ]
  },

  duo_people_family_2: {
    labelDe: "Personen, Namen & Grüße",
    pairs: [
      { de: "der Freund", pl: "przyjaciel" },
      { de: "die Person", pl: "osoba" },
      { de: "der Nachbar", pl: "sąsiad" },
      { de: "der Partner", pl: "partner" },
      { de: "der Gast", pl: "gość" },
      { de: "der Bürger", pl: "obywatel" },
      { de: "der Nachname", pl: "nazwisko" },
      { de: "der Vorname", pl: "imię" },
      { de: "danke", pl: "dzięki" },
      { de: "tschüss", pl: "pa" },
      { de: "willkommen", pl: "witaj" },
      { de: "auf Polnisch", pl: "po polsku" },
      { de: "auf Englisch", pl: "po angielsku" }
    ]
  },

  duo_people_groups: {
    labelDe: "Gruppen & Mehrzahl",
    pairs: [
      { de: "die Mädchen (Pl.)", pl: "dziewczynki" },
      { de: "die Jungen (Pl.)", pl: "chłopcy" },
      { de: "die Frauen (Pl.)", pl: "kobiety" },
      { de: "die Männer (Pl.)", pl: "mężczyźni" },
      { de: "die Kinder (Pl.)", pl: "dzieci" },
      { de: "die Leute (Pl.)", pl: "ludzie" },
      { de: "die Damen (Pl.)", pl: "panie" },
      { de: "die Herren (Pl.)", pl: "panowie" },
      { de: "der Feind", pl: "wróg" },
      { de: "die Gruppe", pl: "grupa" },
      { de: "die Gesellschaft", pl: "społeczeństwo" },
      { de: "das Opfer", pl: "ofiara" },
      { de: "die Beziehung", pl: "związek" },
      { de: "die Kultur", pl: "kultura" },
      { de: "die Nation", pl: "naród" },
      { de: "die Jugend", pl: "młodzież" },
      { de: "das Paar", pl: "para" }
    ]
  },

  duo_animals: {
    labelDe: "Tiere II",
    pairs: [
      { de: "der Tiger", pl: "tygrys" },
      { de: "die Krabbe", pl: "krab" },
      { de: "die Spinne", pl: "pająk" },
      { de: "der Pinguin", pl: "pingwin" },
      { de: "die Schlange", pl: "wąż" },
      { de: "die Schildkröte", pl: "żółw" },
      { de: "die Fliege", pl: "mucha" },
      { de: "der Delfin", pl: "delfin" },
      { de: "der Affe", pl: "małpa" },
      { de: "der Stier", pl: "byk" },
      { de: "die Gans", pl: "gęś" },
      { de: "der Schmetterling", pl: "motyl" },
      { de: "die Hunde (Pl.)", pl: "psy" },
      { de: "die Pferde (Pl.)", pl: "konie" },
      { de: "die Katzen (Pl.)", pl: "koty" },
      { de: "die Enten (Pl.)", pl: "kaczki" },
      { de: "die Tiere (Pl.)", pl: "zwierzęta" }
    ]
  },

  duo_food: {
    labelDe: "Essen & Trinken II",
    pairs: [
      { de: "die Kekse (Pl.)", pl: "ciasteczka" },
      { de: "die Mahlzeit", pl: "posiłek" },
      { de: "das belegte Brot", pl: "kanapka" },
      { de: "das Gemüse", pl: "warzywo" },
      { de: "die Äpfel (Pl.)", pl: "jabłka" },
      { de: "die belegten Brote (Pl.)", pl: "kanapki" },
      { de: "der Keks", pl: "ciasteczko" },
      { de: "die Fische (Pl.)", pl: "ryby" },
      { de: "die Tomaten (Pl.)", pl: "pomidory" },
      { de: "der Pfeffer", pl: "pieprz" },
      { de: "die Paprika", pl: "papryka" },
      { de: "der Kuchen", pl: "ciasto" },
      { de: "der Joghurt", pl: "jogurt" },
      { de: "das Eis (Speiseeis)", pl: "lody" },
      { de: "der Geschmack", pl: "smak" },
      { de: "die Schokolade", pl: "czekolada" },
      { de: "das Bonbon", pl: "cukierek" },
      { de: "die Pommes frites (Pl.)", pl: "frytka" },
      { de: "die Frucht", pl: "owoc" },
      { de: "der Alkohol", pl: "alkohol" },
      { de: "das Öl", pl: "olej" },
      { de: "das Schweinefleisch", pl: "wieprzowina" },
      { de: "das Rindfleisch", pl: "wołowina" },
      { de: "das Hähnchen", pl: "kurczak" },
      { de: "der Vegetarier", pl: "wegetarianin" }
    ]
  },

  duo_home_clothes_1: {
    labelDe: "Haushalt & Kleidung I",
    pairs: [
      { de: "der Pulli", pl: "bluza" },
      { de: "der Schuh", pl: "but" },
      { de: "der Hut", pl: "kapelusz" },
      { de: "die Kleidung", pl: "ubrania" },
      { de: "die Unterhosen (Pl.)", pl: "majtki" },
      { de: "die Schüssel", pl: "miska" },
      { de: "das Radio", pl: "radio" },
      { de: "die Uhr", pl: "zegar" },
      { de: "das Handy", pl: "komórka" },
      { de: "die Armbanduhr", pl: "zegarek" },
      { de: "die Batterie", pl: "bateria" },
      { de: "das Bettlaken", pl: "prześcieradło" },
      { de: "der Schreibtisch", pl: "biurko" },
      { de: "das Sofa", pl: "sofa" },
      { de: "die Zahnpasta", pl: "pasta do zębów" },
      { de: "die Badewanne", pl: "wanna" },
      { de: "der Rasierer", pl: "golarka" },
      { de: "die Seife", pl: "mydło" },
      { de: "die Zahnbürste", pl: "szczoteczka do zębów" }
    ]
  },

  duo_home_clothes_2: {
    labelDe: "Haushalt & Kleidung II",
    pairs: [
      { de: "der Schwamm", pl: "gąbka" },
      { de: "der Korb", pl: "kosz" },
      { de: "der Regenschirm", pl: "parasol" },
      { de: "die Geldbörse", pl: "portfel" },
      { de: "die Tasche", pl: "torba" },
      { de: "die Schachtel", pl: "pudełko" },
      { de: "der Schlüssel", pl: "klucz" },
      { de: "das Ding", pl: "rzecz" },
      { de: "der Becher", pl: "kubek" },
      { de: "die Pfanne", pl: "patelnia" },
      { de: "die Zeitung", pl: "gazeta" },
      { de: "die Zeitschrift", pl: "czasopismo" },
      { de: "die Karte", pl: "kartka" },
      { de: "die Schere", pl: "nożyczki" },
      { de: "das Papier", pl: "papier" },
      { de: "die Maschine", pl: "maszyna" },
      { de: "die Flagge", pl: "flaga" },
      { de: "die Klingel", pl: "dzwonek" }
    ]
  },

  duo_time: {
    labelDe: "Zeit & Kalender",
    pairs: [
      { de: "abends", pl: "wieczorem" },
      { de: "heute", pl: "dziś" },
      { de: "nachmittags", pl: "po południu" },
      { de: "der Kalender", pl: "kalendarz" },
      { de: "der Monat", pl: "miesiąc" },
      { de: "das Jahr", pl: "rok" },
      { de: "das Jahrhundert", pl: "wiek" },
      { de: "das Datum", pl: "data" },
      { de: "der Zeitraum", pl: "okres" },
      { de: "die Jahreszeit", pl: "pora roku" },
      { de: "die Sekunde", pl: "sekunda" },
      { de: "der Geburtstag", pl: "urodziny" },
      { de: "die Generation", pl: "pokolenie" },
      { de: "das Jahrzehnt", pl: "dekada" },
      { de: "die Party", pl: "impreza" },
      { de: "der Moment", pl: "chwila" },
      { de: "täglich", pl: "codziennie" },
      { de: "die Jahre (Pl.)", pl: "lat" },
      { de: "einmal", pl: "raz" },
      { de: "damals", pl: "wtedy" },
      { de: "gleich", pl: "zaraz" },
      { de: "früher", pl: "kiedyś" }
    ]
  },

  duo_quantities: {
    labelDe: "Mengen & Pronomen",
    pairs: [
      { de: "dieser", pl: "ten" },
      { de: "jener", pl: "tamten" },
      { de: "kein", pl: "żaden" },
      { de: "alle (Personen)", pl: "wszyscy" },
      { de: "nichts", pl: "nic" },
      { de: "alles", pl: "wszystko" },
      { de: "niemand", pl: "nikt" },
      { de: "jemand", pl: "ktoś" },
      { de: "beide (Dinge)", pl: "oba" },
      { de: "beide (gemischt)", pl: "oboje" },
      { de: "beide (Männer)", pl: "obaj" },
      { de: "jeder", pl: "każdy" },
      { de: "weniger", pl: "mniej" },
      { de: "mehr", pl: "więcej" },
      { de: "die Summe", pl: "suma" },
      { de: "die Zahl", pl: "liczba" },
      { de: "viele", pl: "wiele" },
      { de: "letzter", pl: "ostatni" },
      { de: "die Minderheit", pl: "mniejszość" },
      { de: "die Mehrheit", pl: "większość" },
      { de: "die Hälfte", pl: "połowa" }
    ]
  },

  duo_directions: {
    labelDe: "Richtungen & Präpositionen",
    pairs: [
      { de: "zwischen", pl: "pomiędzy" },
      { de: "außer", pl: "oprócz" },
      { de: "bei", pl: "przy" },
      { de: "gegenüber", pl: "naprzeciwko" },
      { de: "inmitten", pl: "wśród" },
      { de: "durch", pl: "przez" },
      { de: "nah", pl: "blisko" },
      { de: "gemäß", pl: "według" },
      { de: "während", pl: "podczas" },
      { de: "linker", pl: "lewy" },
      { de: "unten", pl: "dół" },
      { de: "rechter", pl: "prawy" },
      { de: "der Westen", pl: "zachód" },
      { de: "der Norden", pl: "północ" },
      { de: "der Osten", pl: "wschód" }
    ]
  },

  duo_places: {
    labelDe: "Orte & Gebäude",
    pairs: [
      { de: "das Schwimmbad", pl: "basen" },
      { de: "der Strand", pl: "plaża" },
      { de: "das Zentrum", pl: "centrum" },
      { de: "die Bar", pl: "bar" },
      { de: "das Schloss", pl: "zamek" },
      { de: "das Gebäude", pl: "budynek" },
      { de: "die Region", pl: "region" },
      { de: "der Ort", pl: "miejsce" },
      { de: "die Bank (Sitz)", pl: "ławka" },
      { de: "die Station", pl: "stacja" },
      { de: "die Umgebung", pl: "okolica" },
      { de: "der Weg", pl: "droga" },
      { de: "die Vorderseite", pl: "przód" },
      { de: "die Grenze", pl: "granica" },
      { de: "die Allee", pl: "aleja" },
      { de: "der Stadtteil", pl: "dzielnica" },
      { de: "die Rückseite", pl: "tył" },
      { de: "der Turm", pl: "wieża" },
      { de: "das Gefängnis", pl: "więzienie" },
      { de: "der Palast", pl: "pałac" },
      { de: "der Hafen", pl: "port" },
      { de: "das Gebiet", pl: "obszar" },
      { de: "der Bauernhof", pl: "farma" },
      { de: "der Zoo", pl: "zoo" }
    ]
  },

  duo_countries: {
    labelDe: "Länder & Nationalitäten II",
    pairs: [
      { de: "ins Ausland", pl: "za granicę" },
      { de: "die Vereinigten Staaten (Pl.)", pl: "stany zjednoczone" },
      { de: "Warschau", pl: "warszawa" },
      { de: "Großbritannien", pl: "wielka brytania" },
      { de: "amerikanisch", pl: "amerykański" },
      { de: "französisch", pl: "francuski" },
      { de: "international", pl: "międzynarodowy" },
      { de: "britisch", pl: "brytyjski" },
      { de: "europäisch", pl: "europejski" },
      { de: "italienisch", pl: "włoski" },
      { de: "der Deutsche", pl: "niemiec" },
      { de: "der Franzose", pl: "francuz" },
      { de: "der Amerikaner", pl: "amerykanin" },
      { de: "der Italiener", pl: "włoch" }
    ]
  },

  duo_travel: {
    labelDe: "Reisen & Gepäck",
    pairs: [
      { de: "das Motorrad", pl: "motor" },
      { de: "der Transport", pl: "transport" },
      { de: "der Passagier", pl: "pasażer" },
      { de: "der Flug", pl: "lot" },
      { de: "die Ferien (Pl.)", pl: "wakacje" },
      { de: "das Fahrzeug", pl: "pojazd" },
      { de: "die Landkarte", pl: "mapa" },
      { de: "der Reiseführer", pl: "przewodnik" },
      { de: "der Rucksack", pl: "plecak" },
      { de: "besichtigen", pl: "zwiedzać" },
      { de: "der Tourist", pl: "turysta" },
      { de: "das Ziel", pl: "cel" },
      { de: "das Abenteuer", pl: "przygoda" },
      { de: "der Ausflug", pl: "wycieczka" },
      { de: "das Gepäck", pl: "bagaż" }
    ]
  },

  duo_movement: {
    labelDe: "Bewegung & Fortbewegung",
    pairs: [
      { de: "tragen (einmalig)", pl: "nieść" },
      { de: "liegen", pl: "leżeć" },
      { de: "stehen", pl: "stać" },
      { de: "heben", pl: "podnosić" },
      { de: "sitzen", pl: "siedzieć" },
      { de: "fahren (lenken)", pl: "prowadzić" },
      { de: "schwimmen (regelmäßig)", pl: "pływać" },
      { de: "tragen (regelmäßig)", pl: "nosić" },
      { de: "(hin)gehen", pl: "pójść" },
      { de: "laufen (regelmäßig)", pl: "biegać" },
      { de: "rennen", pl: "biec" },
      { de: "gehen (regelmäßig)", pl: "chodzić" },
      { de: "fahren (regelmäßig)", pl: "jeździć" },
      { de: "fliegen (regelmäßig)", pl: "latać" },
      { de: "fließen", pl: "płynąć" },
      { de: "(hin)fahren", pl: "pojechać" }
    ]
  },

  duo_professions: {
    labelDe: "Berufe",
    pairs: [
      { de: "das Personal", pl: "personel" },
      { de: "das Modell", pl: "model" },
      { de: "der Direktor", pl: "dyrektor" },
      { de: "der Arbeiter", pl: "robotnik" },
      { de: "die Polizei", pl: "policja" },
      { de: "der Künstler", pl: "artysta" },
      { de: "die Sekretärin", pl: "sekretarka" },
      { de: "der Soldat", pl: "żołnierz" },
      { de: "der Schriftsteller", pl: "pisarz" },
      { de: "der Kapitän", pl: "kapitan" },
      { de: "der Richter", pl: "sędzia" },
      { de: "der Schauspieler", pl: "aktor" },
      { de: "der Wachmann", pl: "ochroniarz" },
      { de: "der Architekt", pl: "architekt" }
    ]
  },

  duo_body_health: {
    labelDe: "Körper & Gesundheit",
    pairs: [
      { de: "der Patient", pl: "pacjent" },
      { de: "die Hilfe", pl: "pomoc" },
      { de: "die Behandlung", pl: "leczenie" },
      { de: "die Pflege", pl: "opieka" },
      { de: "die Operation", pl: "operacja" },
      { de: "der Krankenwagen", pl: "karetka" },
      { de: "das Gehirn", pl: "mózg" },
      { de: "die Diät", pl: "dieta" },
      { de: "das Blut", pl: "krew" },
      { de: "der Unfall", pl: "wypadek" },
      { de: "das Medikament", pl: "lek" },
      { de: "das Virus", pl: "wirus" },
      { de: "der Zustand", pl: "stan" },
      { de: "die Haut", pl: "skóra" }
    ]
  },

  duo_nature: {
    labelDe: "Natur & Umwelt",
    pairs: [
      { de: "das Gras", pl: "trawa" },
      { de: "die Welt", pl: "świat" },
      { de: "der Regenbogen", pl: "tęcza" },
      { de: "das Feuer", pl: "ogień" },
      { de: "der Stern", pl: "gwiazda" },
      { de: "der Mond", pl: "księżyc" },
      { de: "der Planet", pl: "planeta" },
      { de: "die Erde", pl: "ziemia" },
      { de: "die Küste", pl: "wybrzeże" },
      { de: "die Insel", pl: "wyspa" },
      { de: "das Universum", pl: "wszechświat" },
      { de: "das Licht", pl: "światło" },
      { de: "das Feld", pl: "pole" },
      { de: "die Luft", pl: "powietrze" },
      { de: "das Klima", pl: "klimat" },
      { de: "die Pflanze", pl: "roślina" },
      { de: "das Blatt", pl: "liść" },
      { de: "das Getreide", pl: "zboże" },
      { de: "der Rauch", pl: "dym" },
      { de: "die Wüste", pl: "pustynia" },
      { de: "der Stein", pl: "kamień" },
      { de: "die Umwelt", pl: "środowisko" },
      { de: "der Horizont", pl: "horyzont" },
      { de: "die Landschaft", pl: "krajobraz" },
      { de: "der Sand", pl: "piasek" }
    ]
  },

  duo_emotions: {
    labelDe: "Gefühle & Charakter",
    pairs: [
      { de: "der Hass", pl: "nienawiść" },
      { de: "die Wut", pl: "złość" },
      { de: "die Scham", pl: "wstyd" },
      { de: "die Traurigkeit", pl: "smutek" },
      { de: "die Erinnerung", pl: "wspomnienie" },
      { de: "der Geruch", pl: "zapach" },
      { de: "der Mut", pl: "odwaga" },
      { de: "der Respekt", pl: "szacunek" },
      { de: "der Humor", pl: "humor" },
      { de: "das Lächeln", pl: "uśmiech" },
      { de: "die Freundschaft", pl: "przyjaźń" },
      { de: "die Lust", pl: "ochota" },
      { de: "der Stress", pl: "stres" },
      { de: "die Persönlichkeit", pl: "osobowość" },
      { de: "das Bedürfnis", pl: "potrzeba" },
      { de: "die Ruhe", pl: "spokój" },
      { de: "der Eindruck", pl: "wrażenie" },
      { de: "die Überraschung", pl: "niespodzianka" }
    ]
  },

  duo_verbs_daily_1: {
    labelDe: "Alltagsverben I",
    pairs: [
      { de: "schneiden", pl: "kroić" },
      { de: "berühren (ipf.)", pl: "dotykać" },
      { de: "besuchen (ipf.)", pl: "odwiedzać" },
      { de: "unterstützen", pl: "wspierać" },
      { de: "produzieren", pl: "produkować" },
      { de: "respektieren", pl: "szanować" },
      { de: "erziehen (ipf.)", pl: "wychowywać" },
      { de: "liefern", pl: "dostarczać" },
      { de: "bekommen", pl: "dostać" },
      { de: "einstellen", pl: "zatrudniać" },
      { de: "vermissen", pl: "tęsknić" },
      { de: "schauen", pl: "patrzeć" },
      { de: "ändern (ipf.)", pl: "zmieniać" },
      { de: "vertrauen", pl: "ufać" },
      { de: "anbieten", pl: "oferować" },
      { de: "glauben (ipf.)", pl: "wierzyć" },
      { de: "leihen", pl: "pożyczać" },
      { de: "reichen", pl: "podawać" },
      { de: "zurücklassen", pl: "zostawiać" },
      { de: "danken", pl: "dziękować" }
    ]
  },

  duo_verbs_daily_2: {
    labelDe: "Alltagsverben II",
    pairs: [
      { de: "wohnen", pl: "mieszkać" },
      { de: "bitten", pl: "prosić" },
      { de: "zählen", pl: "liczyć" },
      { de: "benutzen (ipf.)", pl: "używać" },
      { de: "leben", pl: "żyć" },
      { de: "reparieren (ipf.)", pl: "naprawiać" },
      { de: "erklären (ipf.)", pl: "wyjaśniać" },
      { de: "aufpassen", pl: "uważać" },
      { de: "zeichnen (ipf.)", pl: "rysować" },
      { de: "das Kochen", pl: "gotowanie" },
      { de: "das Lesen", pl: "czytanie" },
      { de: "das Gehen", pl: "chodzenie" },
      { de: "das Schreiben", pl: "pisanie" },
      { de: "das Machen", pl: "robienie" },
      { de: "das Helfen", pl: "pomaganie" },
      { de: "das Sitzen", pl: "siedzenie" },
      { de: "das Reisen", pl: "podróżowanie" },
      { de: "das Trinken", pl: "picie" },
      { de: "das Warten", pl: "czekanie" },
      { de: "das Sprechen", pl: "mówienie" }
    ]
  },

  duo_grammar_imperative: {
    labelDe: "Grammatik: Imperativ",
    rules:
      "Imperativ (tryb rozkazujący)\n" +
      "du-Form – aus der 3. Person Plural Präsens (oni), Endung -ą weg:\n" +
      "• robią → rób, mówią → mów, piszą → pisz, patrzą → patrz, idą → idź (Konsonant wird weich).\n" +
      "• -ają → -aj: czytają → czytaj, słuchają → słuchaj, czekają → czekaj; -eją → -ej: rozumieją → rozumiej; -ują → -uj: kupują → kupuj, dziękują → dziękuj.\n" +
      "• Bleibt eine schwer sprechbare Konsonantengruppe übrig, kommt -ij/-yj dazu: zamkną → zamknij, śpią → śpij.\n" +
      "• Vor dem Endkonsonanten wird o oft zu ó: robią → rób, otworzą → otwórz, pomogą → pomóż.\n" +
      "Weitere Personen:\n" +
      "• wir („lass uns“): du-Form + -my: róbmy, czytajmy, chodźmy.\n" +
      "• ihr: du-Form + -cie: róbcie, czytajcie, idźcie.\n" +
      "• er/sie, sie (Pl.) und höfliches Sie: niech + 3. Person Präsens: Niech on zadzwoni. Niech Pan wejdzie. = Kommen Sie herein.\n" +
      "• Höfliche Bitte: Proszę + Infinitiv: Proszę usiąść. = Setzen Sie sich bitte.\n" +
      "Unregelmäßig:\n" +
      "• być → bądź, mieć → miej, jeść → jedz, wiedzieć → wiedz, dać → daj, wziąć → weź, iść → idź, przyjść → przyjdź, powiedzieć → powiedz, przynieść → przynieś, stać → stój.\n" +
      "Aspekt:\n" +
      "• Konkrete, einmalige Aufforderung: meist vollendet: Zrób to! Zamknij okno!\n" +
      "• Allgemein, wiederholt, „fang an / mach weiter“: unvollendet: Rób, co chcesz! Słuchaj!\n" +
      "• Verbote fast immer unvollendet: Nie rób tego! Nie zamykaj okna! Vollendet verneint ist eine Warnung: Nie zgub kluczy! = Verlier bloß nicht die Schlüssel!\n" +
      "• In den Paaren: (ipf.) = unvollendet, (pf.) = vollendet.",
    pairs: [
      { de: "sag!", pl: "powiedz" },
      { de: "geh!", pl: "idź" },
      { de: "schließ!", pl: "zamknij" },
      { de: "iss!", pl: "jedz" },
      { de: "mach! (ipf.)", pl: "rób" },
      { de: "sprich!", pl: "mów" },
      { de: "mach! (pf.)", pl: "zrób" },
      { de: "zeig!", pl: "pokaż" },
      { de: "kauf!", pl: "kup" },
      { de: "sei!", pl: "bądź" },
      { de: "trink!", pl: "pij" },
      { de: "pass auf!", pl: "uważaj" },
      { de: "hör zu!", pl: "słuchaj" },
      { de: "öffne!", pl: "otwórz" },
      { de: "denk daran!", pl: "pamiętaj" },
      { de: "bring!", pl: "przynieś" },
      { de: "nimm! (ipf.)", pl: "bierz" },
      { de: "schau!", pl: "patrz" },
      { de: "hilf!", pl: "pomóż" },
      { de: "nimm! (pf.)", pl: "weź" },
      { de: "reich mir!", pl: "podaj" },
      { de: "warte!", pl: "czekaj" }
    ]
  },

  duo_verbs_comm_1: {
    labelDe: "Verben: Handeln & Sagen I",
    pairs: [
      { de: "sein", pl: "być" },
      { de: "versuchen (ipf.)", pl: "próbować" },
      { de: "er sollte", pl: "powinien" },
      { de: "zuhören", pl: "słuchać" },
      { de: "hassen", pl: "nienawidzić" },
      { de: "können", pl: "umieć" },
      { de: "erlauben", pl: "pozwalać" },
      { de: "sagen", pl: "powiedzieć" },
      { de: "besuchen (pf.)", pl: "odwiedzić" },
      { de: "helfen", pl: "pomóc" },
      { de: "sich unterhalten", pl: "porozmawiać" },
      { de: "aufräumen", pl: "posprzątać" },
      { de: "kochen", pl: "ugotować" },
      { de: "verkaufen", pl: "sprzedać" },
      { de: "bringen", pl: "przynieść" },
      { de: "zeigen", pl: "pokazać" },
      { de: "nehmen", pl: "wziąć" },
      { de: "schicken", pl: "wysłać" },
      { de: "öffnen", pl: "otworzyć" },
      { de: "schließen", pl: "zamknąć" },
      { de: "ändern (pf.)", pl: "zmienić" },
      { de: "sehen", pl: "zobaczyć" }
    ]
  },

  duo_verbs_comm_2: {
    labelDe: "Verben: Handeln & Sagen II",
    pairs: [
      { de: "zurückkehren", pl: "wrócić" },
      { de: "hören", pl: "usłyszeć" },
      { de: "anrufen", pl: "zadzwonić" },
      { de: "nachdenken", pl: "pomyśleć" },
      { de: "blicken", pl: "spojrzeć" },
      { de: "anfangen", pl: "zacząć" },
      { de: "geben", pl: "dać" },
      { de: "gewinnen", pl: "wygrać" },
      { de: "glauben (pf.)", pl: "uwierzyć" },
      { de: "vorstellen", pl: "przedstawić" },
      { de: "erklären (pf.)", pl: "wyjaśnić" },
      { de: "ankommen", pl: "dotrzeć" },
      { de: "berühren (pf.)", pl: "dotknąć" },
      { de: "erziehen (pf.)", pl: "wychować" },
      { de: "verlieren", pl: "zgubić" },
      { de: "austrinken", pl: "wypić" },
      { de: "antworten", pl: "odpowiedzieć" },
      { de: "zeichnen (pf.)", pl: "narysować" },
      { de: "benutzen (pf.)", pl: "użyć" },
      { de: "reparieren (pf.)", pl: "naprawić" },
      { de: "fragen", pl: "zapytać" },
      { de: "versuchen (pf.)", pl: "spróbować" }
    ]
  },

  duo_adjectives_1: {
    labelDe: "Adjektive I",
    pairs: [
      { de: "anderer", pl: "inny" },
      { de: "vorheriger", pl: "poprzedni" },
      { de: "wichtig", pl: "ważny" },
      { de: "arm", pl: "biedny" },
      { de: "reich", pl: "bogaty" },
      { de: "nächster", pl: "następny" },
      { de: "normal", pl: "normalny" },
      { de: "perfekt", pl: "idealny" },
      { de: "ganz", pl: "cały" },
      { de: "nett", pl: "miły" },
      { de: "beliebt", pl: "popularny" },
      { de: "wunderbar", pl: "wspaniały" },
      { de: "schön", pl: "piękny" },
      { de: "bequem", pl: "wygodny" },
      { de: "langweilig", pl: "nudny" }
    ]
  },

  duo_adjectives_2: {
    labelDe: "Adjektive II",
    pairs: [
      { de: "kostenlos", pl: "darmowy" },
      { de: "interessant", pl: "ciekawy" },
      { de: "stark", pl: "silny" },
      { de: "schwach", pl: "słaby" },
      { de: "nass", pl: "mokry" },
      { de: "trocken", pl: "suchy" },
      { de: "fröhlich", pl: "wesoły" },
      { de: "hölzern", pl: "drewniany" },
      { de: "breit", pl: "szeroki" },
      { de: "aus Metall", pl: "metalowy" },
      { de: "schmal", pl: "wąski" },
      { de: "berühmt", pl: "sławny" },
      { de: "aus Plastik", pl: "plastikowy" },
      { de: "erwachsen", pl: "dorosły" }
    ]
  },

  duo_adjectives_more_1: {
    labelDe: "Adjektive & Eigenschaften I",
    pairs: [
      { de: "durstig", pl: "spragniony" },
      { de: "hungrig", pl: "głodny" },
      { de: "modern", pl: "nowoczesny" },
      { de: "echt", pl: "prawdziwy" },
      { de: "ernst", pl: "poważny" },
      { de: "eigen", pl: "własny" },
      { de: "traditionell", pl: "tradycyjny" },
      { de: "geschlossen", pl: "zamknięty" },
      { de: "nötig", pl: "potrzebny" },
      { de: "klug", pl: "mądry" },
      { de: "offen", pl: "otwarty" },
      { de: "frisch", pl: "świeży" },
      { de: "süß", pl: "słodki" },
      { de: "lustig", pl: "zabawny" },
      { de: "solch", pl: "taki" },
      { de: "fertig", pl: "gotowy" },
      { de: "seltsam", pl: "dziwny" },
      { de: "nützlich", pl: "przydatny" },
      { de: "schrecklich", pl: "straszny" },
      { de: "dick", pl: "gruby" },
      { de: "schlank", pl: "szczupły" },
      { de: "möglich", pl: "możliwy" }
    ]
  },

  duo_adjectives_more_2: {
    labelDe: "Adjektive & Eigenschaften II",
    pairs: [
      { de: "hart", pl: "twardy" },
      { de: "weich", pl: "miękki" },
      { de: "sicher", pl: "bezpieczny" },
      { de: "gemeinsam", pl: "wspólny" },
      { de: "unmöglich", pl: "niemożliwy" },
      { de: "beruflich", pl: "zawodowy" },
      { de: "ähnlich", pl: "podobny" },
      { de: "mittlerer", pl: "średni" },
      { de: "wild", pl: "dziki" },
      { de: "effizient", pl: "wydajny" },
      { de: "laut", pl: "głośny" },
      { de: "privat", pl: "prywatny" },
      { de: "solche", pl: "tacy" },
      { de: "leise", pl: "cichy" },
      { de: "gefährlich", pl: "niebezpieczny" },
      { de: "behindert", pl: "niepełnosprawny" },
      { de: "tief", pl: "głęboki" },
      { de: "es ist kalt", pl: "zimno" },
      { de: "es ist heiß", pl: "gorąco" },
      { de: "einsam", pl: "samotny" },
      { de: "empfindlich", pl: "wrażliwy" }
    ]
  },

  duo_grammar_comparative: {
    labelDe: "Grammatik: Komparativ",
    rules:
      "Komparativ (stopień wyższy)\n" +
      "Adjektive:\n" +
      "• -szy nach einem einzelnen Konsonanten: młody → młodszy, tani → tańszy, słaby → słabszy.\n" +
      "• -ejszy nach einer Konsonantengruppe: łatwy → łatwiejszy, trudny → trudniejszy, ważny → ważniejszy, silny → silniejszy, wolny → wolniejszy.\n" +
      "• -ki, -oki, -eki fallen weg: szybki → szybszy, krótki → krótszy, wysoki → wyższy, niski → niższy; g → ż: długi → dłuższy.\n" +
      "• bardziej + Grundform bei Partizipien und vielen langen Adjektiven: bardziej zmęczony.\n" +
      "• Unregelmäßig: dobry → lepszy, zły → gorszy, duży → większy, mały → mniejszy.\n" +
      "Adverbien:\n" +
      "• Endung -ej, meist mit weichem Konsonanten (-iej): wolno → wolniej, ciepło → cieplej, zimno → zimniej, wcześnie → wcześniej, często → częściej.\n" +
      "• -ko, -oko, -eko fallen weg, oft mit Lautwechsel: szybko → szybciej, rzadko → rzadziej, blisko → bliżej, daleko → dalej, wysoko → wyżej, nisko → niżej.\n" +
      "• Unregelmäßig: dobrze → lepiej, źle → gorzej, dużo → więcej, mało → mniej.\n" +
      "Weiteres:\n" +
      "• Superlativ jeweils mit naj-: najszybszy, najszybciej, najlepiej.\n" +
      "• bardziej = mehr vor Adjektiv/Adverb (bardziej ciekawy); więcej = mehr an Menge, + Genitiv (więcej czasu).\n" +
      "• „als“ = niż + gleicher Fall (szybszy niż ja) oder bei Adjektiven od + Genitiv (szybszy ode mnie).\n" +
      "• Adjektiv steht beim Nomen und nach być (Jestem szybszy.), Adverb beim Verb (Biegam szybciej.).",
    pairs: [
      { de: "mehr (vor Adjektiv)", pl: "bardziej" },
      { de: "höher", pl: "wyższy" },
      { de: "niedriger", pl: "niższy" },
      { de: "jünger", pl: "młodszy" },
      { de: "wichtiger", pl: "ważniejszy" },
      { de: "billiger", pl: "tańszy" },
      { de: "länger", pl: "dłuższy" },
      { de: "kürzer", pl: "krótszy" },
      { de: "stärker", pl: "silniejszy" },
      { de: "leichter", pl: "łatwiejszy" },
      { de: "langsamer", pl: "wolniejszy" },
      { de: "schwächer", pl: "słabszy" },
      { de: "schneller", pl: "szybszy" },
      { de: "schwieriger", pl: "trudniejszy" },
      { de: "langsamer (Adv.)", pl: "wolniej" },
      { de: "besser (Adv.)", pl: "lepiej" },
      { de: "schneller (Adv.)", pl: "szybciej" },
      { de: "schlechter (Adv.)", pl: "gorzej" },
      { de: "früher", pl: "wcześniej" },
      { de: "näher", pl: "bliżej" },
      { de: "kälter", pl: "zimniej" },
      { de: "wärmer", pl: "cieplej" },
      { de: "öfter", pl: "częściej" },
      { de: "weiter", pl: "dalej" },
      { de: "seltener", pl: "rzadziej" }
    ]
  },

  duo_conjunctions: {
    labelDe: "Konjunktionen & Partikeln",
    pairs: [
      { de: "als", pl: "jako" },
      { de: "weil", pl: "bo" },
      { de: "oder", pl: "lub" },
      { de: "also", pl: "więc" },
      { de: "und", pl: "a" },
      { de: "obwohl", pl: "chociaż" },
      { de: "statt", pl: "zamiast" },
      { de: "jedoch", pl: "jednak" },
      { de: "weder", pl: "ani" },
      { de: "zu", pl: "zbyt" },
      { de: "gleichfalls", pl: "nawzajem" },
      { de: "damit", pl: "żeby" },
      { de: "wohl", pl: "chyba" }
    ]
  },

  duo_adverbs: {
    labelDe: "Adverbien",
    pairs: [
      { de: "wieder", pl: "znów" },
      { de: "immer noch", pl: "wciąż" },
      { de: "irgendwo", pl: "gdzieś" },
      { de: "sogar", pl: "nawet" },
      { de: "eher", pl: "raczej" },
      { de: "wirklich", pl: "naprawdę" },
      { de: "besonders", pl: "zwłaszcza" },
      { de: "anders", pl: "inaczej" },
      { de: "bestimmt", pl: "na pewno" },
      { de: "völlig", pl: "zupełnie" },
      { de: "schnell", pl: "szybko" },
      { de: "langsam", pl: "wolno" },
      { de: "ausgezeichnet", pl: "świetnie" },
      { de: "weit", pl: "daleko" },
      { de: "sauber", pl: "czysto" },
      { de: "dunkel", pl: "ciemno" },
      { de: "schmutzig", pl: "brudno" },
      { de: "hell", pl: "jasno" },
      { de: "langweilig (Adv.)", pl: "nudno" },
      { de: "interessant (Adv.)", pl: "ciekawie" },
      { de: "überall", pl: "wszędzie" },
      { de: "nirgendwo", pl: "nigdzie" }
    ]
  },

  duo_grammar_conditional: {
    labelDe: "Grammatik: Konditional",
    rules:
      "Konditional (tryb przypuszczający)\n" +
      "Bildung: l-Form (wie Vergangenheit, 3. Person) + by + Personalendung:\n" +
      "• männlich: -łbym, -łbyś, -łby – pisałbym, pisałbyś, pisałby.\n" +
      "• weiblich: -łabym, -łabyś, -łaby – pisałabym, pisałabyś, pisałaby.\n" +
      "• sächlich: -łoby – pisałoby.\n" +
      "• Plural männlich-persönlich: -libyśmy, -libyście, -liby – pisalibyśmy, pisalibyście, pisaliby.\n" +
      "• Plural sonst: -łybyśmy, -łybyście, -łyby – pisałybyśmy, pisałybyście, pisałyby.\n" +
      "• Lautwechsel wie in der Vergangenheit: miałbym – mielibyśmy, mógłbym – mogłabym, chciałbym – chcielibyśmy.\n" +
      "Das bewegliche by:\n" +
      "• by + Endung kann sich vom Verb lösen und an ein früheres Wort treten (dann getrennt geschrieben): Ja bym chciał … Chętnie bym pomógł.\n" +
      "• Mit Konjunktionen verschmilzt es: gdyby (wenn, irreal), żeby/aby (damit, dass), jakby (als ob) + Endung: gdybym, żebyś.\n" +
      "Verwendung:\n" +
      "• Höflicher Wunsch oder Bitte: Chciałbym kawę. = Ich möchte einen Kaffee. Mógłbyś mi pomóc? = Könntest du mir helfen?\n" +
      "• Irreale Bedingung: Gdybym miał czas, pomagałbym. = Wenn ich Zeit hätte, würde ich helfen. Im gdyby-Satz nur die l-Form, ohne zweites by.\n" +
      "• Gilt auch für die Vergangenheit: Gdybym wiedział, pomógłbym. = Wenn ich es gewusst hätte, hätte ich geholfen.\n" +
      "• Reale Bedingung dagegen mit jeśli/jeżeli + Indikativ: Jeśli będę miał czas, pomogę. = Wenn ich Zeit habe, helfe ich.\n" +
      "• Wunsch, dass ein anderer etwas tut: żeby + l-Form: Chcę, żebyś przyszedł. = Ich will, dass du kommst.",
    pairs: [
      { de: "ich würde schreiben", pl: "pisałbym" },
      { de: "wenn (irreal)", pl: "gdyby" },
      { de: "ich würde lesen", pl: "czytałbym" },
      { de: "ich wäre", pl: "byłbym" },
      { de: "ich könnte", pl: "mógłbym" },
      { de: "ich möchte", pl: "chciałbym" },
      { de: "ich würde helfen", pl: "pomagałbym" },
      { de: "ich würde (Partikel)", pl: "bym" },
      { de: "ich würde benutzen", pl: "używałbym" },
      { de: "ich würde sprechen", pl: "mówiłbym" },
      { de: "ich würde lieber", pl: "wolałbym" },
      { de: "ich müsste", pl: "musiałbym" }
    ]
  },

  duo_verbs_states_1: {
    labelDe: "Verben: Zustand & Denken I",
    pairs: [
      { de: "ausgeben", pl: "wydawać" },
      { de: "sich kümmern", pl: "troszczyć" },
      { de: "lächeln", pl: "uśmiechać" },
      { de: "unterhalten", pl: "bawić" },
      { de: "wehtun", pl: "boleć" },
      { de: "pflegen", pl: "dbać" },
      { de: "wachsen", pl: "rosnąć" },
      { de: "regnen", pl: "padać" },
      { de: "leiden", pl: "cierpieć" },
      { de: "aussehen", pl: "wyglądać" },
      { de: "existieren", pl: "istnieć" },
      { de: "lieber mögen", pl: "woleć" },
      { de: "halten", pl: "trzymać" },
      { de: "erreichen", pl: "osiągnąć" },
      { de: "betreffen", pl: "dotyczyć" },
      { de: "planen", pl: "planować" },
      { de: "mischen", pl: "mieszać" },
      { de: "gehören", pl: "należeć" },
      { de: "akzeptieren", pl: "akceptować" },
      { de: "schaffen", pl: "tworzyć" }
    ]
  },

  duo_verbs_states_2: {
    labelDe: "Verben: Zustand & Denken II",
    pairs: [
      { de: "stammen", pl: "pochodzić" },
      { de: "füllen", pl: "napełniać" },
      { de: "enthalten", pl: "zawierać" },
      { de: "küssen", pl: "całować" },
      { de: "fallen", pl: "spadać" },
      { de: "man kann", pl: "można" },
      { de: "verursachen", pl: "powodować" },
      { de: "verbringen", pl: "spędzać" },
      { de: "vergleichen", pl: "porównywać" },
      { de: "prüfen", pl: "sprawdzać" },
      { de: "auswählen", pl: "wybierać" },
      { de: "man muss", pl: "trzeba" },
      { de: "kosten", pl: "kosztować" },
      { de: "verdienen", pl: "zarabiać" },
      { de: "verringern", pl: "zmniejszyć" },
      { de: "erhöhen", pl: "zwiększyć" },
      { de: "wiegen", pl: "ważyć" },
      { de: "sich ausruhen", pl: "odpocząć" },
      { de: "beenden", pl: "skończyć" }
    ]
  },

  duo_school_1: {
    labelDe: "Schule & Bildung I",
    pairs: [
      { de: "die Bildung", pl: "edukacja" },
      { de: "die Unterrichtsstunde", pl: "lekcja" },
      { de: "das Studium", pl: "studia" },
      { de: "Lieblings-", pl: "ulubiony" },
      { de: "die Geschichte", pl: "historia" },
      { de: "der Kurs", pl: "kurs" },
      { de: "das Beispiel", pl: "przykład" },
      { de: "die Übung", pl: "ćwiczenie" },
      { de: "der Test", pl: "test" },
      { de: "der Titel", pl: "tytuł" },
      { de: "die Präsentation", pl: "prezentacja" },
      { de: "der Kugelschreiber", pl: "długopis" },
      { de: "das Wissen", pl: "wiedza" },
      { de: "das Kapitel", pl: "rozdział" }
    ]
  },

  duo_school_2: {
    labelDe: "Schule & Bildung II",
    pairs: [
      { de: "das Wort", pl: "słowo" },
      { de: "das Semester", pl: "semestr" },
      { de: "die Vorlesung", pl: "wykład" },
      { de: "grundlegend", pl: "podstawowy" },
      { de: "der Aufsatz", pl: "wypracowanie" },
      { de: "der Professor", pl: "profesor" },
      { de: "die Notiz", pl: "notatka" },
      { de: "der Kindergarten", pl: "przedszkole" },
      { de: "das Gymnasium", pl: "liceum" },
      { de: "der Text", pl: "tekst" },
      { de: "das Dokument", pl: "dokument" },
      { de: "das Wörterbuch", pl: "słownik" },
      { de: "die Mittelschule", pl: "gimnazjum" }
    ]
  },

  duo_business_1: {
    labelDe: "Wirtschaft & Geld I",
    pairs: [
      { de: "das Produkt", pl: "produkt" },
      { de: "der Złoty", pl: "złoty" },
      { de: "der Dollar", pl: "dolar" },
      { de: "der Kredit", pl: "kredyt" },
      { de: "die Marke", pl: "marka" },
      { de: "das Angebot", pl: "oferta" },
      { de: "das Geschäft", pl: "biznes" },
      { de: "die Branche", pl: "branża" },
      { de: "die Werbung", pl: "reklama" },
      { de: "die Abteilung", pl: "dział" },
      { de: "die Stelle", pl: "stanowisko" },
      { de: "die Konkurrenz", pl: "konkurencja" },
      { de: "der Vertrag", pl: "umowa" },
      { de: "wert", pl: "warty" },
      { de: "das Treffen", pl: "spotkanie" }
    ]
  },

  duo_business_2: {
    labelDe: "Wirtschaft & Geld II",
    pairs: [
      { de: "die Organisation", pl: "organizacja" },
      { de: "die Kosten (Pl.)", pl: "koszt" },
      { de: "die Wirtschaft", pl: "gospodarka" },
      { de: "der Handel", pl: "handel" },
      { de: "die Bestellung", pl: "zamówienie" },
      { de: "die Unterschrift", pl: "podpis" },
      { de: "die Investition", pl: "inwestycja" },
      { de: "das Konto", pl: "konto" },
      { de: "der Verkauf", pl: "sprzedaż" },
      { de: "die Versicherung", pl: "ubezpieczenie" },
      { de: "das Gold", pl: "złoto" },
      { de: "die Karriere", pl: "kariera" },
      { de: "die Fabrik", pl: "fabryka" },
      { de: "die Dienstleistung", pl: "usługa" }
    ]
  },

  duo_media: {
    labelDe: "Medien & Kommunikation",
    pairs: [
      { de: "der Satz", pl: "zdanie" },
      { de: "das Gespräch", pl: "rozmowa" },
      { de: "der Kommentar", pl: "komentarz" },
      { de: "die Kommunikation", pl: "komunikacja" },
      { de: "die Information", pl: "informacja" },
      { de: "der Kontakt", pl: "kontakt" },
      { de: "das Fernsehen", pl: "telewizja" },
      { de: "der Kanal", pl: "kanał" },
      { de: "die Postkarte", pl: "pocztówka" },
      { de: "die Einladung", pl: "zaproszenie" },
      { de: "der Journalist", pl: "dziennikarz" },
      { de: "die Presse", pl: "prasa" },
      { de: "der Artikel", pl: "artykuł" },
      { de: "die Diskussion", pl: "dyskusja" },
      { de: "die Meinung", pl: "opinia" },
      { de: "das Interview", pl: "wywiad" },
      { de: "die Liste", pl: "lista" },
      { de: "der Sinn", pl: "sens" },
      { de: "die Datei", pl: "plik" },
      { de: "der Zugang", pl: "dostęp" },
      { de: "der Ordner", pl: "folder" },
      { de: "der Brief", pl: "list" },
      { de: "die Stimme", pl: "głos" }
    ]
  },

  duo_abstract_concepts_1: {
    labelDe: "Abstrakte Begriffe I",
    pairs: [
      { de: "die Form", pl: "kształt" },
      { de: "der Tod", pl: "śmierć" },
      { de: "der Teil", pl: "część" },
      { de: "das Leben", pl: "życie" },
      { de: "die Kraft", pl: "siła" },
      { de: "das Mitglied", pl: "członek" },
      { de: "die Art und Weise", pl: "sposób" },
      { de: "das Projekt", pl: "projekt" },
      { de: "die Vergangenheit", pl: "przeszłość" },
      { de: "der Gedanke", pl: "myśl" },
      { de: "der Fall", pl: "przypadek" },
      { de: "die Zukunft", pl: "przyszłość" },
      { de: "die Kontrolle", pl: "kontrola" },
      { de: "die Beschreibung", pl: "opis" },
      { de: "der Fehler", pl: "błąd" },
      { de: "die Änderung", pl: "zmiana" },
      { de: "die Schuld", pl: "wina" },
      { de: "die Handlung", pl: "działanie" },
      { de: "das Problem", pl: "problem" },
      { de: "der Klang", pl: "dźwięk" }
    ]
  },

  duo_abstract_concepts_2: {
    labelDe: "Abstrakte Begriffe II",
    pairs: [
      { de: "der Inhalt", pl: "zawartość" },
      { de: "der Wert", pl: "wartość" },
      { de: "die Aussicht", pl: "widok" },
      { de: "das Ergebnis", pl: "wynik" },
      { de: "der Schutz", pl: "ochrona" },
      { de: "die Option", pl: "opcja" },
      { de: "die Produktion", pl: "produkcja" },
      { de: "die Lösung", pl: "rozwiązanie" },
      { de: "der Vorteil", pl: "zaleta" },
      { de: "die Bahn", pl: "kolej" },
      { de: "die Qualität", pl: "jakość" },
      { de: "der Effekt", pl: "efekt" },
      { de: "die Chance", pl: "szansa" },
      { de: "die Menge", pl: "ilość" },
      { de: "die Freiheit", pl: "wolność" },
      { de: "die Sache", pl: "sprawa" },
      { de: "der Preis", pl: "nagroda" },
      { de: "die Rolle", pl: "rola" },
      { de: "die Regel", pl: "zasada" },
      { de: "die Auswahl", pl: "wybór" }
    ]
  },

  duo_abstract_concepts_3: {
    labelDe: "Abstrakte Begriffe III",
    pairs: [
      { de: "das Risiko", pl: "ryzyko" },
      { de: "die Niederlage", pl: "porażka" },
      { de: "der Name", pl: "nazwa" },
      { de: "die Möglichkeit", pl: "możliwość" },
      { de: "der Erfolg", pl: "sukces" },
      { de: "die Ursache", pl: "przyczyna" },
      { de: "die Macht", pl: "władza" },
      { de: "der Rat", pl: "rada" },
      { de: "die Erholung", pl: "odpoczynek" },
      { de: "die Erfahrung", pl: "doświadczenie" },
      { de: "das Thema", pl: "temat" },
      { de: "die Idee", pl: "pomysł" },
      { de: "die Sorte", pl: "rodzaj" },
      { de: "das Ende", pl: "koniec" },
      { de: "der Anfang", pl: "początek" },
      { de: "die Situation", pl: "sytuacja" },
      { de: "die Wahrheit", pl: "prawda" },
      { de: "die Lüge", pl: "kłamstwo" },
      { de: "der Traum", pl: "marzenie" }
    ]
  },

  duo_abstract_concepts_4: {
    labelDe: "Abstrakte Begriffe IV",
    pairs: [
      { de: "die Anstrengung", pl: "wysiłek" },
      { de: "die Wirklichkeit", pl: "rzeczywistość" },
      { de: "der Ausgang", pl: "wyjście" },
      { de: "die Richtung", pl: "kierunek" },
      { de: "das Interesse", pl: "zainteresowanie" },
      { de: "der Eingang", pl: "wejście" },
      { de: "das Geheimnis", pl: "sekret" },
      { de: "das Glück", pl: "szczęście" },
      { de: "der Nutzen", pl: "korzyść" },
      { de: "der Versuch", pl: "próba" },
      { de: "die Erlaubnis", pl: "pozwolenie" },
      { de: "das Verhalten", pl: "zachowanie" },
      { de: "der Charakter", pl: "charakter" },
      { de: "der Wunsch", pl: "życzenie" },
      { de: "die Verantwortung", pl: "odpowiedzialność" },
      { de: "die Beziehung", pl: "relacja" },
      { de: "der Zweifel", pl: "wątpliwość" },
      { de: "der Beweis", pl: "dowód" },
      { de: "die Folge", pl: "skutek" },
      { de: "die Tradition", pl: "tradycja" },
      { de: "die Anwesenheit", pl: "obecność" },
      { de: "die Ehre", pl: "honor" }
    ]
  },

  duo_abstract_concepts_5: {
    labelDe: "Abstrakte Begriffe V",
    pairs: [
      { de: "der Prozess", pl: "proces" },
      { de: "der Raum", pl: "przestrzeń" },
      { de: "der Gefallen", pl: "przysługa" },
      { de: "der Schatten", pl: "cień" },
      { de: "die Frage", pl: "kwestia" },
      { de: "der Witz", pl: "żart" },
      { de: "das System", pl: "system" },
      { de: "der Verstand", pl: "umysł" },
      { de: "der Mord", pl: "morderstwo" },
      { de: "die Kategorie", pl: "kategoria" },
      { de: "der Punkt", pl: "punkt" },
      { de: "die Stille", pl: "cisza" },
      { de: "das Geschenk", pl: "prezent" },
      { de: "der Lärm", pl: "hałas" },
      { de: "die Gelegenheit", pl: "okazja" },
      { de: "das Gefühl", pl: "poczucie" },
      { de: "das Signal", pl: "sygnał" },
      { de: "das Aussehen", pl: "wygląd" },
      { de: "der Plan", pl: "plan" },
      { de: "der Unterschied", pl: "różnica" },
      { de: "die Eigenschaft", pl: "cecha" }
    ]
  },

  duo_science_1: {
    labelDe: "Wissenschaft & Mathe I",
    pairs: [
      { de: "die Wissenschaft", pl: "nauka" },
      { de: "die Untersuchung", pl: "badanie" },
      { de: "die Technologie", pl: "technologia" },
      { de: "die Energie", pl: "energia" },
      { de: "das Phänomen", pl: "zjawisko" },
      { de: "die Analyse", pl: "analiza" },
      { de: "das Detail", pl: "szczegół" },
      { de: "die Definition", pl: "definicja" },
      { de: "die Mathematik", pl: "matematyka" },
      { de: "die Theorie", pl: "teoria" },
      { de: "die Biologie", pl: "biologia" },
      { de: "die Methode", pl: "metoda" },
      { de: "die Länge", pl: "długość" },
      { de: "der Begriff", pl: "pojęcie" },
      { de: "die Elektrizität", pl: "elektryczność" },
      { de: "die Geschwindigkeit", pl: "prędkość" },
      { de: "die Physik", pl: "fizyka" },
      { de: "das Labor", pl: "laboratorium" }
    ]
  },

  duo_science_2: {
    labelDe: "Wissenschaft & Mathe II",
    pairs: [
      { de: "die Philosophie", pl: "filozofia" },
      { de: "die Entdeckung", pl: "odkrycie" },
      { de: "die Chemie", pl: "chemia" },
      { de: "der Wissenschaftler", pl: "naukowiec" },
      { de: "die Entfernung", pl: "odległość" },
      { de: "die Oberfläche", pl: "powierzchnia" },
      { de: "die Funktion", pl: "funkcja" },
      { de: "die Geografie", pl: "geografia" },
      { de: "die Höhe", pl: "wysokość" },
      { de: "die Größe", pl: "rozmiar" },
      { de: "das Gas", pl: "gaz" },
      { de: "der Antrag", pl: "wniosek" },
      { de: "die Temperatur", pl: "temperatura" },
      { de: "der Meter", pl: "metr" },
      { de: "die Masse", pl: "masa" },
      { de: "der Kilometer", pl: "kilometr" },
      { de: "der Zentimeter", pl: "centymetr" }
    ]
  },

  duo_politics_state: {
    labelDe: "Politik & Staat",
    pairs: [
      { de: "die Politik", pl: "polityka" },
      { de: "das Gericht", pl: "sąd" },
      { de: "die Regierung", pl: "rząd" },
      { de: "der Haushalt", pl: "budżet" },
      { de: "der Premierminister", pl: "premier" },
      { de: "die Steuer", pl: "podatek" },
      { de: "der Präsident", pl: "prezydent" },
      { de: "national", pl: "narodowy" },
      { de: "die Strategie", pl: "strategia" },
      { de: "der Krieg", pl: "wojna" },
      { de: "der König", pl: "król" },
      { de: "die Sicherheit", pl: "bezpieczeństwo" },
      { de: "das Militär", pl: "wojsko" },
      { de: "der Politiker", pl: "polityk" }
    ]
  },

  duo_politics_society: {
    labelDe: "Politik & Gesellschaft",
    pairs: [
      { de: "die Kampagne", pl: "kampania" },
      { de: "der Abgeordnete", pl: "poseł" },
      { de: "der Kandidat", pl: "kandydat" },
      { de: "der Anführer", pl: "przywódca" },
      { de: "die Wahl", pl: "wybory" },
      { de: "das Parlament", pl: "parlament" },
      { de: "die Krise", pl: "kryzys" },
      { de: "der Streik", pl: "strajk" },
      { de: "die Gewalt", pl: "przemoc" },
      { de: "die Waffe", pl: "broń" },
      { de: "der Konflikt", pl: "konflikt" },
      { de: "das Verbrechen", pl: "przestępstwo" },
      { de: "das Argument", pl: "argument" },
      { de: "die Entscheidung", pl: "decyzja" },
      { de: "der Staat", pl: "państwo" },
      { de: "die Konferenz", pl: "konferencja" },
      { de: "die Stiftung", pl: "fundacja" }
    ]
  }
};
