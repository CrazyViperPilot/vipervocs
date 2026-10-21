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
    pairs: [
      { de: "mein (m)", pl: "mój" },
      { de: "meine (f)", pl: "moja" },
      { de: "mein (n)", pl: "moje" },
      { de: "dein (m)", pl: "twój" },
      { de: "deine (f)", pl: "twoja" },
      { de: "dein (n)", pl: "twoje" },
      { de: "sein (m/n)", pl: "jego" },
      { de: "ihr (Sg.)", pl: "jej" },
      { de: "unser (m)", pl: "nasz" },
      { de: "unsere (f)", pl: "nasza" },
      { de: "unser (n)", pl: "nasze" },
      { de: "euer (m)", pl: "wasz" },
      { de: "eure (f)", pl: "wasza" },
      { de: "euer (n)", pl: "wasze" },
      { de: "ihr (Pl. - deren)", pl: "ich" },
      { de: "Ihr (formell, Herr)", pl: "Pana" },
      { de: "Ihr (formell, Frau)", pl: "Pani" },
      { de: "Ihr (formell, Plural)", pl: "Państwa" },
      { de: "sein/ihr eigenes (m)", pl: "swój" },
      { de: "sein/ihr eigenes (f)", pl: "swoja" },
      { de: "sein/ihr eigenes (n)", pl: "swoje" }
    ]
  },
  basic_verbs_1: {
    labelDe: "Grundverben I (Konjugationen)",
    rules:
      "Präsens (Gegenwart) im Polnischen:\n" +
      "• Verben werden nach Person und Zahl konjugiert; das Personalpronomen (ja, ty, on …) kann meist entfallen, weil die Endung die Person zeigt.\n" +
      "• Typische Endungen: -ę/-am/-em (ich), -sz (du), -∅/-a/-e (er/sie/es), -my (wir), -cie (ihr), -ą/-ają (sie).\n" +
      "• 'być' (sein) ist unregelmäßig: jestem, jesteś, jest, jesteśmy, jesteście, są.\n" +
      "• Eine Form deckt sowohl 'ich mache' als auch 'ich bin am Machen' ab.",
    pairs: [
      { de: "ich bin (sein)", pl: "ja jestem" },
      { de: "du bist", pl: "ty jesteś" },
      { de: "er/sie/es ist", pl: "on/ona/ono jest" },
      { de: "wir sind", pl: "my jesteśmy" },
      { de: "ihr seid", pl: "wy jesteście" },
      { de: "sie/Sie sind", pl: "oni/one są" },
      
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
      "Präsens (Gegenwart) im Polnischen:\n" +
      "• Verben werden nach Person und Zahl konjugiert; das Personalpronomen (ja, ty, on …) kann meist entfallen, weil die Endung die Person zeigt.\n" +
      "• Typische Endungen: -ę/-am/-em (ich), -sz (du), -∅/-a/-e (er/sie/es), -my (wir), -cie (ihr), -ą/-ają (sie).\n" +
      "• Modalverben (móc, musieć, chcieć) stehen meist mit einem Infinitiv: 'muszę pracować' = ich muss arbeiten.",
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
      "Vergangenheit (Präteritum) im Polnischen:\n" +
      "• Sie wird mit der sogenannten l-Form gebildet: Verbstamm + -ł-/-l- + Personalendung.\n" +
      "• Sie richtet sich nach dem Geschlecht: maskulin -ł (robił), feminin -ła (robiła), neutrum -ło (robiło).\n" +
      "• Im Plural: maskulin-persönlich -li (robili), sonst (Frauen/Dinge) -ły (robiły).\n" +
      "• Deshalb gibt es zwei Ich-Formen: robiłem (Mann) / robiłam (Frau).",
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
      "Vergangenheit (Präteritum) im Polnischen:\n" +
      "• Sie wird mit der sogenannten l-Form gebildet: Verbstamm + -ł-/-l- + Personalendung.\n" +
      "• Sie richtet sich nach dem Geschlecht: maskulin -ł (mógł), feminin -ła (mogła), neutrum -ło (mogło).\n" +
      "• Im Plural: maskulin-persönlich -li (mogli), sonst (Frauen/Dinge) -ły (mogły).\n" +
      "• Deshalb gibt es zwei Ich-Formen: mogłem (Mann) / mogłam (Frau).",
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
      { de: "ihr schriebet", pl: "wy pisaliście / pisałyście" },
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
      "Zukunft (Futur) im Polnischen:\n" +
      "• 'być' (sein) hat eine eigene einfache Zukunftsform: będę, będziesz, będzie, będziemy, będziecie, będą.\n" +
      "• Alle anderen unvollendeten Verben bilden die Zukunft zusammengesetzt: Zukunftsform von 'być' + Infinitiv. Beispiel: będę robić = ich werde machen.\n" +
      "• Alternativ steht statt des Infinitivs die l-Form (wie in der Vergangenheit), die sich nach Geschlecht richtet: będę robił (m) / będę robiła (f).\n" +
      "• Das Personalpronomen (ja, ty …) kann meist entfallen, weil 'być' die Person schon zeigt.",
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
      "Zukunft (Futur) im Polnischen:\n" +
      "• Alle Verben hier sind unvollendet und bilden die zusammengesetzte Zukunft: Zukunftsform von 'być' (będę, będziesz, będzie, będziemy, będziecie, będą) + Infinitiv.\n" +
      "• Beispiel: będę czytać = ich werde lesen.\n" +
      "• Statt des Infinitivs ist auch die l-Form möglich, die sich nach Geschlecht richtet: będę czytał (m) / będę czytała (f).\n" +
      "• Bei vollendeten Verben (z. B. przeczytać) würde man dagegen die Präsens-Endungen für die Zukunft nutzen (przeczytam).",
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

  case_accusative: {
    labelDe: "Fall: Akkusativ (biernik)",
    rules:
      "Akkusativ (biernik) – „wen/was?“:\n" +
      "• Steht nach vielen Verben als direktes Objekt: mieć, lubić, widzieć, jeść, mieć … (mam kota = ich habe eine Katze).\n" +
      "• Maskulin belebt bekommt -a (kot → kota, pies → psa), maskulin unbelebt bleibt wie der Nominativ (stół → stół).\n" +
      "• Feminin auf -a wird zu -ę (kawa → kawę, książka → książkę).\n" +
      "• Neutrum bleibt unverändert (okno → okno).\n" +
      "• Nach Bewegungspräpositionen mit Ziel: na, w, przez + Akkusativ.",
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
      { de: "Ich brauche Zeit.", pl: "Potrzebuję czas." }
    ]
  },
  case_genitive: {
    labelDe: "Fall: Genitiv (dopełniacz)",
    rules:
      "Genitiv (dopełniacz) – „wessen? / von wem?“:\n" +
      "• Steht nach der Verneinung eines Akkusativ-Objekts: mam czas → nie mam czasu.\n" +
      "• Nach Mengenangaben: dużo, mało, trochę, kilo, butelka + Genitiv (dużo pracy).\n" +
      "• Nach vielen Präpositionen: bez, dla, do, od, u, z (aus), obok.\n" +
      "• Endungen (Sg.): maskulin -a/-u, feminin -y/-i, neutrum -a.",
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
      "Lokativ (miejscownik) – „wo? / worüber?“:\n" +
      "• Steht immer nach einer Präposition, nie allein.\n" +
      "• Ortsangabe (wo, ohne Bewegung): w (in), na (auf/an), przy (bei).\n" +
      "• Auch nach: o (über/um), po (nach).\n" +
      "• Typische Endungen: oft -e (mit Konsonantenwechsel) oder -u; feminin -e/-i.",
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
      { de: "bei der Oma (wo)", pl: "u babci" }
    ]
  },
  case_instrumental: {
    labelDe: "Fall: Instrumental (narzędnik)",
    rules:
      "Instrumental (narzędnik) – „mit wem/womit?“:\n" +
      "• Mittel/Begleitung nach z (mit): z kolegą = mit dem Freund.\n" +
      "• Fortbewegungsmittel ohne Präposition: jadę autobusem = ich fahre mit dem Bus.\n" +
      "• Nach 'być' bei Beruf/Identität: jestem nauczycielem = ich bin Lehrer.\n" +
      "• Endungen (Sg.): maskulin/neutrum -em, feminin -ą.",
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
  verb_aspect: {
    labelDe: "Verbaspekt (unvollendet/vollendet)",
    rules:
      "Aspekt – jedes polnische Verb hat meist zwei Formen:\n" +
      "• Unvollendet (niedokonany): Vorgang, Wiederholung, Gewohnheit – „ich war dabei / mache regelmäßig“. Bildet Gegenwart, Vergangenheit und zusammengesetzte Zukunft (będę + Infinitiv).\n" +
      "• Vollendet (dokonany): abgeschlossene, einmalige Handlung mit Ergebnis. Hat KEINE Gegenwart; die Präsens-Endungen ergeben hier die Zukunft (zrobię = ich werde (fertig) machen).\n" +
      "• Oft entsteht der vollendete Aspekt durch eine Vorsilbe: robić → zrobić, pisać → napisać.\n" +
      "Links: unvollendet – rechts: vollendet.",
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
      "Reflexive Verben mit „się“:\n" +
      "• Das Wörtchen 'się' gehört zum Verb und ist unveränderlich (für alle Personen gleich).\n" +
      "• Es steht meist direkt nach dem Verb, aber nie am Satzanfang: 'nazywam się …', aber 'Jak się nazywasz?'.\n" +
      "• Viele Alltagsverben sind reflexiv, auch wenn sie es im Deutschen nicht sind.",
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
      "Steigerung (Komparativ & Superlativ):\n" +
      "• Regelmäßig: Grundform + -szy/-iejszy (Komparativ), Superlativ mit Vorsilbe naj-: nowy → nowszy → najnowszy.\n" +
      "• 'als' beim Vergleich = niż oder od + Genitiv: większy niż … / większy od …\n" +
      "• Wichtige unregelmäßige Formen musst du auswendig lernen (siehe Paare).\n" +
      "Format: Grundform – Komparativ – Superlativ.",
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
      "Uhrzeit & Datum:\n" +
      "• Frage: 'Która godzina?' = Wie spät ist es? Antwort mit Ordnungszahl (weiblich): 'Jest pierwsza' = Es ist eins.\n" +
      "• Uhrzeit-Angabe „um …“: o + Lokativ der Ordnungszahl: o ósmej = um acht.\n" +
      "• Wochentag „am …“: w + Akkusativ: w poniedziałek = am Montag.\n" +
      "• Monat „im …“: w + Lokativ: w maju = im Mai.",
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
      { de: "die Halbe Stunde", pl: "pół godziny" }
    ]
  },
  quantities_packaging: {
    labelDe: "Mengen & Verpackungen",
    rules:
      "Mengen & Verpackungen:\n" +
      "• Mengenangaben stehen mit dem Genitiv: kilo cukru, butelka wody, dużo mleka.\n" +
      "• Zählbares nach Zahlen 2–4: Nominativ Plural (dwa jabłka), ab 5: Genitiv Plural (pięć jabłek).\n" +
      "• 'dużo/mało/trochę' immer + Genitiv.",
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
      "Nützliche Sätze beim Einkaufen. „poproszę“ (ich hätte gern) ist die höfliche Standardformel und wird mit dem Akkusativ benutzt.",
    pairs: [
      { de: "Ich hätte gern …", pl: "Poproszę …" },
      { de: "Was kostet das?", pl: "Ile to kosztuje?" },
      { de: "Wie viel macht das?", pl: "Ile płacę?" },
      { de: "Haben Sie …?", pl: "Czy jest …?" },
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
      "Nützliche Sätze beim Arzt. Für Schmerzen: 'boli mnie …' (… tut mir weh) + Körperteil im Nominativ.",
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
      "Nützliche Sätze für die Wegbeschreibung. 'Przepraszam' (Entschuldigung) leitet höflich die Frage ein.",
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
      "Nützliche Sätze am Telefon. 'Słucham?' (wörtlich „ich höre?“) ist die typische Meldung beim Abheben.",
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
      "Adverbien der Häufigkeit und des Grades. Sie stehen meist direkt vor dem Verb oder Adjektiv, das sie näher bestimmen: 'zawsze pracuję', 'bardzo dobry'.",
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
      "• Der Imperativ (du-Form) entsteht meist aus der 3. Person Plural Präsens ohne Endung: piją → pij!, mówią → mów!, robią → rób!\n" +
      "• Verben auf -ać (-ają) bekommen -aj: słuchają → słuchaj!, czekają → czekaj!\n" +
      "• Bei schwer sprechbaren Konsonanten kommt -ij/-yj dazu: zamkną → zamknij!\n" +
      "• Unregelmäßig: bądź (sei!), weź (nimm!), idź (geh!), jedz (iss!). Vollendet = einmalige Handlung (zrób!), unvollendet = allgemein oder wiederholt (rób!).",
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
      "• Komparativ der Adjektive: Stamm + -szy oder -ejszy (szybki → szybszy, młody → młodszy, łatwy → łatwiejszy).\n" +
      "• Lange Adjektive: bardziej (mehr) + Grundform, z.B. bardziej interesujący.\n" +
      "• Adverbien: -ej oder -iej (szybko → szybciej, wolno → wolniej, rzadko → rzadziej).\n" +
      "• Unregelmäßig: dobry → lepszy (besser), dobrze → lepiej, źle → gorzej.",
    pairs: [
      { de: "mehr", pl: "bardziej" },
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
      { de: "besser", pl: "lepiej" },
      { de: "schneller (Adv.)", pl: "szybciej" },
      { de: "schlechter", pl: "gorzej" },
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
      "• Bildung: Vergangenheitsform + Personalendung -bym (ich), -byś (du), -by (er/sie/es): pisał → pisałbym = ich würde schreiben.\n" +
      "• Männlich -łbym (chciałbym), weiblich -łabym (chciałabym).\n" +
      "• Die Endung kann auch vorn stehen: Ja bym chciał … = Ich würde gern …\n" +
      "• gdyby = wenn (irreal): Gdybym miał czas, pomagałbym. = Wenn ich Zeit hätte, würde ich helfen.",
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
