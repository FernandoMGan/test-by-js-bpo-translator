const vaBdTblIdiomas = [
    { id: 1, idioma: 'Afrikáans', codigoISO639: 'af' },
    { id: 2, idioma: 'Aimara', codigoISO639: 'ay' },
    { id: 3, idioma: 'Albanés', codigoISO639: 'sq' },
    { id: 4, idioma: 'Alemán', codigoISO639: 'de' },
    { id: 5, idioma: 'Amárico', codigoISO639: 'am' },
    { id: 6, idioma: 'Árabe', codigoISO639: 'ar' },
    { id: 7, idioma: 'Armenio', codigoISO639: 'hy' },
    { id: 8, idioma: 'Asamés', codigoISO639: 'as' },
    { id: 9, idioma: 'Azerbaiyano', codigoISO639: 'az' },
    { id: 10, idioma: 'Bambara', codigoISO639: 'bm' },
    { id: 11, idioma: 'Bengalí', codigoISO639: 'bn' },
    { id: 12, idioma: 'Bhospuri', codigoISO639: 'bho' },
    { id: 13, idioma: 'Bielorruso', codigoISO639: 'be' },
    { id: 14, idioma: 'Birmano', codigoISO639: 'my' },
    { id: 15, idioma: 'Bosnio', codigoISO639: 'bs' },
    { id: 16, idioma: 'Búlgaro', codigoISO639: 'bg' },
    { id: 17, idioma: 'Canarés', codigoISO639: 'kn' },
    { id: 18, idioma: 'Catalán', codigoISO639: 'ca' },
    { id: 19, idioma: 'Cebuano', codigoISO639: 'ceb' },
    { id: 20, idioma: 'Checo', codigoISO639: 'cs' },
    { id: 21, idioma: 'Chino (simplificado)', codigoISO639: 'zh-CN o zh (BCP-47)' },
    { id: 22, idioma: 'Chino (tradicional)', codigoISO639: 'zh-TW (BCP-47)' },
    { id: 23, idioma: 'Cingalés', codigoISO639: 'si' },
    { id: 24, idioma: 'Corean', codigoISO639: 'ko' },
    { id: 25, idioma: 'Corso', codigoISO639: 'co' },
    { id: 26, idioma: 'Criollo haitiano', codigoISO639: 'ht' },
    { id: 27, idioma: 'Croata', codigoISO639: 'hr' },
    { id: 28, idioma: 'Curdo', codigoISO639: 'ku' },
    { id: 29, idioma: 'Danés', codigoISO639: 'da' },
    { id: 30, idioma: 'Dhivehi', codigoISO639: 'dv' },
    { id: 31, idioma: 'Dogri', codigoISO639: 'doi' },
    { id: 32, idioma: 'Eslovaco', codigoISO639: 'sk' },
    { id: 33, idioma: 'Esloveno', codigoISO639: 'sl' },
    { id: 34, idioma: 'Español', codigoISO639: 'es' },
    { id: 35, idioma: 'Esperanto', codigoISO639: 'eo' },
    { id: 36, idioma: 'Estonio', codigoISO639: 'et' },
    { id: 37, idioma: 'Ewe', codigoISO639: 'ee' },
    { id: 38, idioma: 'Filipino (tagalo)', codigoISO639: 'fil' },
    { id: 39, idioma: 'Finés', codigoISO639: 'fi' },
    { id: 40, idioma: 'Francés', codigoISO639: 'fr' },
    { id: 41, idioma: 'Frisón', codigoISO639: 'fy' },
    { id: 42, idioma: 'Gaélico esc', codigoISO639: 'gd' },
    { id: 43, idioma: 'Galés', codigoISO639: 'cy' },
    { id: 44, idioma: 'Gallego', codigoISO639: 'gl' },
    { id: 45, idioma: 'Georgiano', codigoISO639: 'ka' },
    { id: 46, idioma: 'Grieg', codigoISO639: 'el' },
    { id: 47, idioma: 'Guaraní', codigoISO639: 'gn' },
    { id: 48, idioma: 'Guyaratí', codigoISO639: 'gu' },
    { id: 49, idioma: 'Hausa', codigoISO639: 'ha' },
    { id: 50, idioma: 'Hawaiano', codigoISO639: 'haw' },
    { id: 51, idioma: 'Hebreo', codigoISO639: 'he o iw' },
    { id: 52, idioma: 'Hindi', codigoISO639: 'hi' },
    { id: 53, idioma: 'Hmong', codigoISO639: 'hmn' },
    { id: 54, idioma: 'Holandés', codigoISO639: 'nl' },
    { id: 55, idioma: 'Húngaro', codigoISO639: 'hu' },
    { id: 56, idioma: 'Igbo', codigoISO639: 'ig' },
    { id: 57, idioma: 'Ilocano', codigoISO639: 'ilo' },
    { id: 58, idioma: 'Indonesio', codigoISO639: 'id' },
    { id: 59, idioma: 'Inglés', codigoISO639: 'en' },
    { id: 60, idioma: 'Irlandés', codigoISO639: 'ga' },
    { id: 61, idioma: 'Islandés', codigoISO639: 'is' },
    { id: 62, idioma: 'Italiano', codigoISO639: 'it' },
    { id: 63, idioma: 'Japonés', codigoISO639: 'ja' },
    { id: 64, idioma: 'Javanés', codigoISO639: 'jv o jw' },
    { id: 65, idioma: 'Jemer', codigoISO639: 'km' },
    { id: 66, idioma: 'Kazajo', codigoISO639: 'kk' },
    { id: 67, idioma: 'Kiñaruanda', codigoISO639: 'rw' },
    { id: 68, idioma: 'Kirg', codigoISO639: 'ky' },
    { id: 69, idioma: 'Konkani', codigoISO639: 'gom' },
    { id: 70, idioma: 'Krio', codigoISO639: 'kri' },
    { id: 71, idioma: 'Kurdo (Sorani)', codigoISO639: 'ckb' },
    { id: 72, idioma: 'Laosiano', codigoISO639: 'lo' },
    { id: 73, idioma: 'Latín', codigoISO639: 'la' },
    { id: 74, idioma: 'Letón', codigoISO639: 'lv' },
    { id: 75, idioma: 'Lingala', codigoISO639: 'ln' },
    { id: 76, idioma: 'Lituano', codigoISO639: 'lt' },
    { id: 77, idioma: 'Luganda', codigoISO639: 'lg' },
    { id: 78, idioma: 'Luxemburgués', codigoISO639: 'lb' },
    { id: 79, idioma: 'Macedonio', codigoISO639: 'mk' },
    { id: 80, idioma: 'Maithili', codigoISO639: 'mai' },
    { id: 81, idioma: 'Malabar', codigoISO639: 'ml' },
    { id: 82, idioma: 'Malayo', codigoISO639: 'ms' },
    { id: 83, idioma: 'Malgache', codigoISO639: 'mg' },
    { id: 84, idioma: 'Maltés', codigoISO639: 'mt' },
    { id: 85, idioma: 'Maorí', codigoISO639: 'mi' },
    { id: 86, idioma: 'Marathi', codigoISO639: 'mr' },
    { id: 87, idioma: 'Meiteilon (manipuri)', codigoISO639: 'mni-Mtei' },
    { id: 88, idioma: 'Mizo', codigoISO639: 'lus' },
    { id: 89, idioma: 'Mongol', codigoISO639: 'mn' },
    { id: 90, idioma: 'Nepalí', codigoISO639: 'ne' },
    { id: 91, idioma: 'Noruego', codigoISO639: 'no' },
    { id: 92, idioma: 'Nyanja (chichewa)', codigoISO639: 'ny' },
    { id: 93, idioma: 'Odia (oriya)', codigoISO639: 'or' },
    { id: 94, idioma: 'Oromo', codigoISO639: 'om' },
    { id: 95, idioma: 'Pashto', codigoISO639: 'ps' },
    { id: 96, idioma: 'Persa', codigoISO639: 'fa' },
    { id: 97, idioma: 'Polaco', codigoISO639: 'pl' },
    { id: 98, idioma: 'Portugués (Portugal y Brasil)', codigoISO639: 'pt' },
    { id: 99, idioma: 'Punjabi', codigoISO639: 'pa' },
    { id: 100, idioma: 'Quechua', codigoISO639: 'qu' },
    { id: 101, idioma: 'Rumano', codigoISO639: 'ro' },
    { id: 102, idioma: 'Ruso', codigoISO639: 'ru' },
    { id: 103, idioma: 'Samoano', codigoISO639: 'sm' },
    { id: 104, idioma: 'Sánscr', codigoISO639: 'sa' },
    { id: 105, idioma: 'Sepedi', codigoISO639: 'nso' },
    { id: 106, idioma: 'Serbio', codigoISO639: 'sr' },
    { id: 107, idioma: 'Sesoto', codigoISO639: 'st' },
    { id: 108, idioma: 'Shona', codigoISO639: 'sn' },
    { id: 109, idioma: 'Sindhi', codigoISO639: 'sd' },
    { id: 110, idioma: 'Somalí', codigoISO639: 'so' },
    { id: 111, idioma: 'Suajili', codigoISO639: 'sw' },
    { id: 112, idioma: 'Sueco', codigoISO639: 'sv' },
    { id: 113, idioma: 'Sundanés', codigoISO639: 'su' },
    { id: 114, idioma: 'Tagalo (filipino)', codigoISO639: 'tl' },
    { id: 115, idioma: 'Tailandés', codigoISO639: 'th' },
    { id: 116, idioma: 'Tamil', codigoISO639: 'ta' },
    { id: 117, idioma: 'Tártaro', codigoISO639: 'tt' },
    { id: 118, idioma: 'Tayiko', codigoISO639: 'tg' },
    { id: 119, idioma: 'Telugú', codigoISO639: 'te' },
    { id: 120, idioma: 'Tigriña', codigoISO639: 'ti' },
    { id: 121, idioma: 'Tsonga', codigoISO639: 'ts' },
    { id: 122, idioma: 'Turco', codigoISO639: 'tr' },
    { id: 123, idioma: 'Turcom', codigoISO639: 'tk' },
    { id: 124, idioma: 'Twi (Akan)', codigoISO639: 'ak' },
    { id: 125, idioma: 'Ucraniano', codigoISO639: 'uk' },
    { id: 126, idioma: 'Uigur', codigoISO639: 'ug' },
    { id: 127, idioma: 'Urdu', codigoISO639: 'ur' },
    { id: 128, idioma: 'Uzbeko', codigoISO639: 'uz' },
    { id: 129, idioma: 'Vasco', codigoISO639: 'eu' },
    { id: 130, idioma: 'Vietnamita', codigoISO639: 'vi' },
    { id: 131, idioma: 'Xhosa', codigoISO639: 'xh' },
    { id: 132, idioma: 'Yiddish', codigoISO639: 'yi' },
    { id: 133, idioma: 'Yoruba', codigoISO639: 'yo' },
    { id: 134, idioma: 'Zulú', codigoISO639: 'zu' }
]
export { vaBdTblIdiomas };