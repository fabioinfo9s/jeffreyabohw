var citySchema = require('../schema/CitiesSchema');
var cityData = [
{
        name : 'Lagos',
        lat: 6.454066,
        lng: 3.394673,
        state_id: 25
},

{
        name: 'Kano',
        lat: 12.002381,
        lng: 8.51316,
        state_id: 20
},

{
        name: 'Ibadan',
        lat: 7.377562,
        lng: 3.905907,
        state_id: 31
},

{
        name: 'Abuja',
        lat: 9.083333,
        lng: 7.533333,
        state_id: 15
},

{
        name: 'Kaduna',
        lat: 10.526413,
        lng: 7.438795,
        state_id: 19
},

{
        name: 'Benin name',
        lat: 6.338153,
        lng: 5.625749,
        state_id: 12
},

{
        name: 'Ikare',
        lat: 7.525913,
        lng: 5.753417,
        state_id: 29
},

{
        name: 'Port Harcourt',
        lat: 4.777423,
        lng: 7.013404,
        state_id: 33
},

{
        name: 'Ogbomoso',
        lat: 8.133725,
        lng: 4.240144,
        state_id: 31
},

{
        name: 'Aba',
        lat: 5.106576,
        lng: 7.366667,
        state_id: 1
},

{
        name: 'Maiduguri',
        lat: 11.846924,
        lng: 13.157122,
        state_id: 8
},

{
        name: 'Zaria',
        lat: 11.078945,
        lng: 7.710359,
        state_id: 19
},

{
        name: 'Warri',
        lat: 5.51737,
        lng: 5.750064,
        state_id: 10
},

{
        name: 'Jos',
        lat: 9.92849,
        lng: 8.892118,
        state_id: 32
},

{
        name: 'Ilorin',
        lat: 8.496642,
        lng: 4.542143,
        state_id: 24
},

{
        name: 'Oyo',
        lat: 7.852575,
        lng: 3.931249,
        state_id: 31
},

{
        name: 'Sokoto',
        lat: 13.048025,
        lng: 5.214285,
        state_id: 34
},

{
        name: 'Enugu',
        lat: 6.441321,
        lng: 7.498834,
        state_id: 14
},

{
        name: 'Abeokuta',
        lat: 7.15571,
        lng: 3.345086,
        state_id: 28
},

{
        name: 'Uyo',
        lat: 5.033333,
        lng: 7.92657,
        state_id: 3
},

{
        name: 'Awka',
        lat: 6.21269,
        lng: 7.071986,
        state_id: 4
},

{
        name: 'Ile-Ife',
        lat: 7.482405,
        lng: 4.560324,
        state_id: 30
},

{
        name: 'Calabar',
        lat: 4.958931,
        lng: 8.32695,
        state_id: 9
},

{
        name: 'Ado-Ekiti',
        lat: 7.623289,
        lng: 5.22087,
        state_id: 13
},

{
        name: 'Katsina',
        lat: 12.990823,
        lng: 7.601769,
        state_id: 21
},

{
        name: 'Akure',
        lat: 7.25256,
        lng: 5.193118,
        state_id: 29
},

{
        name: 'Osogbo',
        lat: 7.771045,
        lng: 4.556979,
        state_id: 30
},

{
        name: 'Bauchi',
        lat: 10.310321,
        lng: 9.843883,
        state_id: 5
},

{
        name: 'Mele',
        lat: 5.889152,
        lng: 5.701355,
        state_id: 10
},

{
        name: 'Makurdi North',
        lat: 7.7493,
        lng: 8.5508,
        state_id: 7
},

{
        name: 'Minna',
        lat: 9.615235,
        lng: 6.54776,
        state_id: 27
},

{
        name: 'Owo',
        lat: 7.196195,
        lng: 5.586806,
        state_id: 29
},

{
        name: 'Gombe',
        lat: 10.28969,
        lng: 11.167288,
        state_id: 16
},

{
        name: 'Umuahia',
        lat: 5.524913,
        lng: 7.494613,
        state_id: 1
},

{
        name: 'Ondo',
        lat: 7.093165,
        lng: 4.835277,
        state_id: 29
},

{
        name: 'Damaturu',
        lat: 11.746968,
        lng: 11.960826,
        state_id: 36
},

{
        name: 'Iwo',
        lat: 7.635268,
        lng: 4.181556,
        state_id: 30
},

{
        name: 'Gusau',
        lat: 12.17024,
        lng: 6.664116,
        state_id: 37
},

{
        name: 'Mubi',
        lat: 10.268585,
        lng: 13.267013,
        state_id: 2
},

{
        name: 'Owerri',
        lat: 5.483626,
        lng: 7.033248,
        state_id: 17
},

{
        name: 'Ijebu-Ode',
        lat: 6.819444,
        lng: 3.917311,
        state_id: 28
},

{
        name: 'Funtua',
        lat: 11.523505,
        lng: 7.311744,
        state_id: 21
},

{
        name: 'Bida',
        lat: 9.080442,
        lng: 6.009902,
        state_id: 27
},

{
        name: 'Lafia',
        lat: 8.493897,
        lng: 8.515316,
        state_id: 26
},

{
        name: 'Gashua',
        lat: 12.873976,
        lng: 11.040568,
        state_id: 36
},

{
        name: 'Buzawa',
        lat: 11.545362,
        lng: 13.684518,
        state_id: 8
},

{
        name: 'Jalingo',
        lat: 8.893668,
        lng: 11.359596,
        state_id: 35
},

{
        name: 'Nsukka',
        lat: 6.856543,
        lng: 7.385977,
        state_id: 14
},

{
        name: 'Nguru',
        lat: 12.876952,
        lng: 10.455361,
        state_id: 36
},

{
        name: 'Birnin Kebbi',
        lat: 12.453889,
        lng: 4.1975,
        state_id: 22
},

{
        name: 'Azare',
        lat: 11.674783,
        lng: 10.190687,
        state_id: 5
},

{
        name: 'Kontagora',
        lat: 10.403189,
        lng: 5.470797,
        state_id: 27
},

{
        name: 'Iseyin',
        lat: 7.97022,
        lng: 3.596256,
        state_id: 31
},

{
        name: 'Yola',
        lat: 9.208394,
        lng: 12.481464,
        state_id: 2
},

{
        name: 'Biu',
        lat: 10.612854,
        lng: 12.194579,
        state_id: 8
},

{
        name: 'Wukari',
        lat: 7.871393,
        lng: 9.77786,
        state_id: 35
},

{
        name: 'Potiskum',
        lat: 11.713909,
        lng: 11.081077,
        state_id: 36
},

{
        name: 'Keffi',
        lat: 8.84651,
        lng: 7.873539,
        state_id: 26
},

{
        name: 'Numan',
        lat: 9.463742,
        lng: 12.03062,
        state_id: 2
},

{
        name: 'Idah',
        lat: 7.113446,
        lng: 6.73866,
        state_id: 23
},

{
        name: 'Onitsha',
        lat: 6.149779,
        lng: 6.78569,
        state_id: 4
},

{
        name: 'Otukpo',
        lat: 7.193963,
        lng: 8.134556,
        state_id: 7
},

{
        name: 'Lokoja',
        lat: 7.796882,
        lng: 6.740481,
        state_id: 23
},

{
        name: 'Kumo',
        lat: 10.048067,
        lng: 11.210555,
        state_id: 16
},

{
        name: 'Opobo',
        lat: 4.513882,
        lng: 7.537941,
        state_id: 33
},

{
        name: 'Koko',
        lat: 11.421544,
        lng: 4.516867,
        state_id: 22
},

{
        name: 'Dutse',
        lat: 11.75618,
        lng: 9.338959,
        state_id: 18
},

{
        name: 'Orlu',
        lat: 5.795645,
        lng: 7.035126,
        state_id: 17
},

{
        name: 'Kankara',
        lat: 11.931137,
        lng: 7.411149,
        state_id: 21
},

{
        name: 'Gwagwalada',
        lat: 8.943423,
        lng: 7.08165,
        state_id: 15
},

{
        name: 'Kebbe',
        lat: 12.128615,
        lng: 4.73433,
        state_id: 34
},

{
        name: 'Keana',
        lat: 8.147244,
        lng: 8.796008,
        state_id: 26
},

{
        name: 'Gbajimba',
        lat: 7.820399,
        lng: 8.859545,
        state_id: 7
},

{
        name: 'Ikot Ekpene',
        lat: 5.18194,
        lng: 7.714812,
        state_id: 3
},

{
        name: 'Ririwai',
        lat: 10.74025,
        lng: 8.741285,
        state_id: 20
},

{
        name: 'Kabba',
        lat: 7.827192,
        lng: 6.075021,
        state_id: 23
},

{
        name: 'Darazo',
        lat: 10.999201,
        lng: 10.410618,
        state_id: 5
},

{
        name: 'Issele-Uku',
        lat: 6.315839,
        lng: 6.47599,
        state_id: 10
},

{
        name: 'Makarfi',
        lat: 11.377342,
        lng: 7.880977,
        state_id: 19
},

{
        name: 'Gombi',
        lat: 10.167556,
        lng: 12.736843,
        state_id: 2
},

{
        name: 'Utu Etim Ekpo',
        lat: 5.004848,
        lng: 7.610283,
        state_id: 3
},

{
        name: 'Katcha',
        lat: 8.760758,
        lng: 6.312003,
        state_id: 27
},

{
        name: 'Igbara-Oke',
        lat: 7.411719,
        lng: 5.058054,
        state_id: 29
},

{
        name: 'Garun Malam',
        lat: 11.685659,
        lng: 8.369856,
        state_id: 20
},

{
        name: 'Hong',
        lat: 10.233045,
        lng: 12.928052,
        state_id: 2
},

{
        name: 'Ikotun',
        lat: 6.544333,
        lng: 3.263789,
        state_id: 25
},

{
        name: 'Nkwerre',
        lat: 5.759175,
        lng: 7.103836,
        state_id: 17
},

{
        name: 'Mafa',
        lat: 11.924171,
        lng: 13.600656,
        state_id: 8
},

{
        name: 'Nasko',
        lat: 10.495389,
        lng: 4.899036,
        state_id: 27
},

{
        name: 'Festac Town',
        lat: 6.469698,
        lng: 3.282988,
        state_id: 25
},

{
        name: 'Nguzu Edda',
        lat: 5.755433,
        lng: 7.817206,
        state_id: 11
},

{
        name: 'Dukku',
        lat: 10.823794,
        lng: 10.772211,
        state_id: 16
},

{
        name: 'Illela',
        lat: 13.730642,
        lng: 5.297772,
        state_id: 34
},

{
        name: 'Effraya',
        lat: 5.859256,
        lng: 8.723006,
        state_id: 9
},

{
        name: 'Isinweke',
        lat: 5.620478,
        lng: 7.349854,
        state_id: 17
},

{
        name: 'Kiri Kasamma',
        lat: 12.692734,
        lng: 10.254557,
        state_id: 18
},

{
        name: 'Ugba',
        lat: 7.506998,
        lng: 9.348042,
        state_id: 7
},

{
        name: 'Obiozara',
        lat: 6.04644,
        lng: 7.772727,
        state_id: 11
},

{
        name: 'Gwoza',
        lat: 11.083125,
        lng: 13.695948,
        state_id: 8
},

{
        name: 'Mashegu',
        lat: 9.972126,
        lng: 5.778858,
        state_id: 27
},

{
        name: 'Yelwa',
        lat: 10.835048,
        lng: 4.742439,
        state_id: 22
},

{
        name: 'Giwa',
        lat: 11.315678,
        lng: 7.44957,
        state_id: 19
},

{
        name: 'Imeko',
        lat: 7.448876,
        lng:  2.842887,
        state_id: 28
},

{
        name: 'Iyara',
        lat: 7.843247,
        lng: 5.970615,
        state_id: 23
},

{
        name: 'Umundugba',
        lat: 5.675968,
        lng: 7.071842,
        state_id: 17
},

{
        name: 'Fugar',
        lat: 7.090761,
        lng: 6.498283,
        state_id: 12
},

{
        name: 'Garaku',
        lat: 8.847168,
        lng: 8.130211,
        state_id: 26
},

{
        name: 'Agenebode',
        lat: 7.105121,
        lng: 6.69381,
        state_id: 12
},

{
        name: 'Jimeta',
        lat: 9.27949,
        lng: 12.458185,
        state_id: 2
},

{
        name: 'Oghara',
        lat: 5.935541,
        lng: 5.666096,
        state_id: 10
},

{
        name: 'Kachia',
        lat: 9.873417,
        lng: 7.95407,
        state_id: 19
},

{
        name: 'Awgu',
        lat: 6.072778,
        lng: 7.477386,
        state_id: 14
},

{
        name: 'Osisioma',
        lat: 5.159795,
        lng: 7.322346,
        state_id: 1
},

{
        name: 'Agege',
        lat: 6.615632,
        lng: 3.333369,
        state_id: 25
},

{
        name: 'Batsari',
        lat: 12.755508,
        lng: 7.248088,
        state_id: 21
},

{
        name: 'Angware',
        lat: 9.991051,
        lng: 9.108105,
        state_id: 32
},

{
        name: 'Iragbiji',
        lat: 7.903998,
        lng: 4.687045,
        state_id: 30
},

{
        name: 'Ugep',
        lat: 5.80865,
        lng: 8.080976,
        state_id: 9
},

{
        name: 'Ughelli',
        lat: 5.489555,
        lng: 6.004069,
        state_id: 10
},

{
        name: 'Wurno',
        lat: 13.290475,
        lng: 5.423729,
        state_id: 34
},

{
        name: 'Bogoro',
        lat: 9.669044,
        lng: 9.605275,
        state_id: 5
},

{
        name: 'Mabudi',
        lat: 8.730372,
        lng: 9.785124,
        state_id: 32
},

{
        name: 'Abakaliki',
        lat: 6.324851,
        lng: 8.11368,
        state_id: 11,
},

{
        name: 'Abak',
        lat: 4.982357,
        lng: 7.789217,
        state_id: 3
},

{
        name: 'Kiru',
        lat: 11.702098,
        lng: 8.134807,
        state_id: 20
},

{
        name: 'Jama are',
        lat: 11.669795,
        lng: 9.927996,
        state_id: 5
},

{
        name: 'Orerokpe',
        lat: 5.637471,
        lng: 5.890126,
        state_id: 10
},

{
        name: 'Uquo',
        lat: 4.658319,
        lng: 8.058684,
        state_id: 3
},

{
        name: 'Song',
        lat: 9.826747,
        lng: 12.623801,
        state_id: 2
},

{
        name: 'Odeda',
        lat: 7.232508,
        lng: 3.528193,
        state_id: 28
},

{
        name: 'Afor-Oru',
        lat: 5.541103,
        lng: 7.268447,
        state_id: 17
},

{
        name: 'Kaura Namoda',
        lat: 12.593715,
        lng: 6.586484,
        state_id: 37
},

{
        name: 'Lissam',
        lat: 7.196098,
        lng: 10.046204,
        state_id: 35
},

{
        name: 'Ribah',
        lat: 11.396367,
        lng: 5.486311,
        state_id: 22
},

{
        name: 'Ojota',
        lat: 6.578063,
        lng: 3.386858,
        state_id: 25
},

{
        name: 'Anka',
        lat: 12.113466,
        lng: 5.926809,
        state_id: 37
},

{
        name: 'Gamawa',
        lat: 12.133786,
        lng: 10.53785,
        state_id: 5
},

{
        name: 'Gamboru',
        lat: 12.372995,
        lng: 14.206903,
        state_id: 8
},

{
        name: 'Okene',
        lat: 7.551219,
        lng: 6.23589,
        state_id: 23
},

{
        name: 'Omuo-Ekiti',
        lat: 7.759144,
        lng: 5.722496,
        state_id: 13
},

{
        name: 'Lamurde',
        lat: 9.608162,
        lng: 11.793151,
        state_id: 2
},

{
        name: 'Fika',
        lat: 11.286744,
        lng: 11.307724,
        state_id: 36
},

{
        name: 'Tsafe',
        lat: 11.957746,
        lng: 6.920832,
        state_id: 37
},

{
        name: 'Ugbodo',
        lat: 6.511548,
        lng: 8.129841,
        state_id: 11
},

{
        name: 'Iyana-Ofa',
        lat: 7.500427,
        lng: 4.081036,
        state_id: 31
},

{
        name: 'Okpoga',
        lat: 7.039108,
        lng: 7.812254,
        state_id: 7
},

{
        name: 'Ogbere',
        lat: 6.739476,
        lng: 4.161021,
        state_id: 28
},

{
        name: 'Sule Tankarkar',
        lat: 12.666861,
        lng: 9.228278,
        state_id: 18
},

{
        name: 'Eyofin',
        lat: 4.751596,
        lng: 8.230556,
        state_id: 3
},

{
        name: 'Ifon',
        lat: 7.859925,
        lng: 4.476211,
        state_id: 30
},

{
        name: 'Ifetedo',
        lat: 7.18419,
        lng: 4.70046,
        state_id: 30
},

{
        name: 'Isa',
        lat: 13.200659,
        lng: 6.404873,
        state_id: 34
},

{
        name: 'Karu',
        lat: 9.009432,
        lng: 7.661472,
        state_id: 26
},

{
        name: 'Kafin Hausa',
        lat: 12.239329,
        lng: 9.911054,
        state_id: 18
},

{
        name: 'Albasu',
        lat: 11.67403,
        lng: 9.140586,
        state_id: 20
},

{
        name: 'Goronyo',
        lat: 13.442258,
        lng: 5.672339,
        state_id: 34
},

{
        name: 'Birniwa',
        lat: 12.7907,
        lng: 10.236144,
        state_id: 18
},

{
        name: 'Marte',
        lat: 12.365027,
        lng: 13.830184,
        state_id: 8
},

{
        name: 'Malumfashi',
        lat: 11.789346,
        lng: 7.620612,
        state_id: 21
},

{
        name: 'Shelleng',
        lat: 9.896473,
        lng: 12.005717,
        state_id: 2
},

{
        name: 'Ikoyi',
        lat: 6.452539,
        lng: 3.435841,
        state_id: 25
},

{
        name: 'Ikoyi-Ile',
        lat: 8.2444,
        lng: 4.171807,
        state_id: 31
},

{
        name: 'Lapai',
        lat: 9.044385,
        lng: 6.570887,
        state_id: 27
},

{
        name: 'Ehor',
        lat: 6.615495,
        lng: 5.982379,
        state_id: 12
},

{
        name: 'Abonnema',
        lat: 4.731714,
        lng: 6.772234,
        state_id: 33
},

{
        name: 'Jobele',
        lat: 7.763003,
        lng: 3.919348,
        state_id: 31
},

{
        name: 'Riyom',
        lat: 9.636807,
        lng: 8.756944,
        state_id: 32
},

{
        name: 'Odo-Ere',
        lat: 8.250575,
        lng: 5.549792,
        state_id: 23
},

{
        name: 'Kaltungo',
        lat: 9.81998,
        lng: 11.308706,
        state_id: 16
},

{
        name: 'Otu',
        lat: 8.206504,
        lng: 3.407355,
        state_id: 31
},

{
        name: 'Obiaruku',
        lat: 5.846717,
        lng: 6.152899,
        state_id: 10
},

{
        name: 'Afuze',
        lat: 6.969454,
        lng: 6.042536,
        state_id: 12
},

{
        name: 'Umumma',
        lat: 5.756899,
        lng: 6.946129,
        state_id: 17
},

{
        name: 'Akpafa',
        lat: 7.471923,
        lng: 6.149787,
        state_id: 23
},

{
        name: 'Sagbama',
        lat: 5.159147,
        lng: 6.196661,
        state_id: 6
},

{
        name: 'Kumbotso',
        lat: 11.890015,
        lng: 8.502998,
        state_id: 20
},

{
        name: 'Ingawa',
        lat: 12.641378,
        lng: 8.051623,
        state_id: 21
},

{
        name: 'Abagana',
        lat: 6.190311,
        lng: 6.993566,
        state_id: 4
},

{
        name: 'Kaita',
        lat: 13.083461,
        lng: 7.740916,
        state_id: 21
},

{
        name: 'Saminaka',
        lat: 10.412266,
        lng: 8.687477,
        state_id: 19
},

{
        name: 'Hunkuyi',
        lat: 11.266796,
        lng: 7.649155,
        state_id: 19
},

{
        name: 'Anaku',
        lat: 6.468752,
        lng: 6.928928,
        state_id: 4
},

{
        name: 'Ijebu-Jesa',
        lat: 7.682671,
        lng: 4.814356,
        state_id: 30
},

{
        name: 'Guri',
        lat: 12.728102,
        lng: 10.419886,
        state_id: 18
},

{
        name: 'Lessel',
        lat: 7.127287,
        lng: 9.019813,
        state_id: 7
},

{
        name: 'Vandeikya',
        lat: 6.784806,
        lng: 9.067989,
        state_id: 7
},

{
        name: 'Billiri',
        lat: 9.890243,
        lng: 11.217938,
        state_id: 16
},

{
        name: 'Okopedi',
        lat: 4.849179,
        lng: 8.125642,
        state_id: 3
},

{
        name: 'Afaha Offiong',
        lat: 4.862263,
        lng: 7.906263,
        state_id: 3
},

{
        name: 'Odukpani',
        lat: 5.133746,
        lng: 8.338144,
        state_id: 9
},

{
        name: 'Nung Udoe',
        lat: 4.916569,
        lng: 7.96314,
        state_id: 3
},

{
        name: 'Ozubulu',
        lat: 5.95753,
        lng: 6.853046,
        state_id: 4
},

{
        name: 'Yusufari',
        lat: 13.066106,
        lng: 11.173478,
        state_id: 36
},

{
        name: 'Garki',
        lat: 12.434558,
        lng: 9.190283,
        state_id: 18
},

{
        name: 'Sapele',
        lat: 5.894053,
        lng: 5.67666,
        state_id: 10
},

{
        name: 'Rijau',
        lat: 11.103893,
        lng: 5.255563,
        state_id: 27
},

{
        name: 'Besse',
        lat: 11.266757,
        lng: 4.431145,
        state_id: 22
},

{
        name: 'Talata Mafara',
        lat: 12.568411,
        lng: 6.062246,
        state_id: 37
},

{
        name: 'Talasse',
        lat: 9.968433,
        lng: 11.679454,
        state_id: 16
},

{
        name: 'Ore',
        lat: 6.747164,
        lng: 4.876103,
        state_id: 29
},

{
        name: 'Okoroete',
        lat: 4.540765,
        lng: 7.748579,
        state_id: 3
},

{
        name: 'Shanono',
        lat: 12.051536,
        lng: 7.992,
        state_id: 20
},

{
        name: 'Jada',
        lat: 8.756817,
        lng: 12.155366,
        state_id: 2
},

{
        name: 'Rabah',
        lat: 13.122573,
        lng: 5.507616,
        state_id: 34
},

{
        name: 'Gembu',
        lat: 6.719209,
        lng: 11.253517,
        state_id: 35
},

{
        name: 'Safana',
        lat: 12.410754,
        lng: 7.414556,
        state_id: 21
},

{
        name: 'Dekina',
        lat: 7.689671,
        lng: 7.043802,
        state_id: 23
},

{
        name: 'Ikeja',
        lat: 6.596506,
        lng: 3.342052,
        state_id: 25,
},

{
        name: 'Ode-Irele',
        lat: 6.494184,
        lng: 4.870359,
        state_id: 29
},

{
        name: 'Urualla',
        lat: 5.85397,
        lng: 7.099064,
        state_id: 17
},

{
        name: 'Sokoto',
        lat: 13.062695,
        lng: 5.243225,
        state_id: 34,
},

{
        name: 'Agbor',
        lat: 6.253748,
        lng: 6.194201,
        state_id: 10
},

{
        name: 'Kurfi',
        lat: 12.6663,
        lng: 7.484779,
        state_id: 21
},

{
        name: 'Ankpa',
        lat: 7.402485,
        lng: 7.631959,
        state_id: 23
},

{
        name: 'Gubio',
        lat: 12.497488,
        lng: 12.780888,
        state_id: 8
},

{
        name: 'Ibi',
        lat: 8.181216,
        lng: 9.744305,
        state_id: 35
},

{
        name: 'Baap',
        lat: 8.943205,
        lng: 9.241258,
        state_id: 32
},

{
        name: 'Ilaro',
        lat: 6.889011,
        lng: 3.014162,
        state_id: 28
},

{
        name: 'Ise-Ekiti',
        lat: 7.464778,
        lng: 5.423328,
        state_id: 13
},

{
        name: 'Burutu',
        lat: 5.353283,
        lng: 5.508265,
        state_id: 10
},

{
        name: 'Nasarawa Egon',
        lat: 8.71226,
        lng: 8.540598,
        state_id: 26
},

{
        name: 'Ungogo',
        lat: 12.09171,
        lng: 8.495307,
        state_id: 20
},

{
        name: 'Koko',
        lat: 6.000843,
        lng: 5.455225,
        state_id: 10
},

{
        name: 'Oka',
        lat: 7.460121,
        lng: 5.801743,
        state_id: 29
},

{
        name: 'Ogaminana',
        lat: 7.593826,
        lng: 6.217976,
        state_id: 23
},

{
        name: 'Iwere-Ile',
        lat: 7.999191,
        lng: 3.088266,
        state_id: 31
},

{
        name: 'Ahoada',
        lat: 5.082805,
        lng: 6.649813,
        state_id: 33
},

{
        name: 'Bunkure',
        lat: 11.699236,
        lng: 8.541266,
        state_id: 20
},

{
        name: 'Kunchi',
        lat: 12.502601,
        lng: 8.27092,
        state_id: 20
},

{
        name: 'Akwanga',
        lat: 8.910769,
        lng: 8.406552,
        state_id: 26
},

{
        name: 'Igbo-Ora',
        lat: 7.433834,
        lng: 3.287879,
        state_id: 31
},

{
        name: 'Bama',
        lat: 11.521339,
        lng: 13.689524,
        state_id: 8
},

{
        name: 'Bajoga',
        lat: 10.851518,
        lng: 11.431689,
        state_id: 16
},

{
        name: 'Ganye',
        lat: 8.434972,
        lng: 12.051073,
        state_id: 2
},

{
        name: 'Rimi',
        lat: 12.850298,
        lng: 7.709745,
        state_id: 21
},

{
        name: 'Deba',
        lat: 10.211867,
        lng: 11.387101,
        state_id: 16
},

{
        name: 'Efon-Alaaye',
        lat: 7.656495,
        lng: 4.922354,
        state_id: 13
},

{
        name: 'Effurun',
        lat: 5.556294,
        lng: 5.784591,
        state_id: 10
},

{
        name: 'Itas',
        lat: 11.857505,
        lng: 9.963943,
        state_id: 5
},

{
        name: 'Mopa',
        lat: 8.103872,
        lng: 5.892798,
        state_id: 23
},

{
        name: 'Takum',
        lat: 7.255323,
        lng: 9.985512,
        state_id: 35
},

{
        name: 'Aboh',
        lat: 5.475689,
        lng: 7.271606,
        state_id: 17
},

{
        name: 'Eruwa',
        lat: 7.53365,
        lng: 3.41796,
        state_id: 31
},

{
        name: 'Aboh',
        lat: 5.547815,
        lng: 6.525879,
        state_id: 10
},

{
        name: 'Fufore',
        lat: 9.221748,
        lng: 12.649747,
        state_id: 2
},

{
        name: 'Fufu',
        lat: 8.448382,
        lng: 4.720768,
        state_id: 24
},

{
        name: 'Adikpo',
        lat: 6.890017,
        lng: 9.23351,
        state_id: 7
},

{
        name: 'Mutum Biyu',
        lat: 8.641381,
        lng: 10.773549,
        state_id: 35
},

{
        name: 'Odoro Ikpe',
        lat: 5.358349,
        lng: 7.751844,
        state_id: 3
},

{
        name: 'Kafin Madaki',
        lat: 10.688558,
        lng: 9.760513,
        state_id: 5
},

{
        name: 'Kagara',
        lat: 10.186623,
        lng: 6.254852,
        state_id: 27
},

{
        name: 'Dambatta',
        lat: 12.434997,
        lng: 8.515314,
        state_id: 20
},

{
        name: 'Damboa',
        lat: 11.155338,
        lng: 12.75638,
        state_id: 8
},

{
        name: 'Omoba',
        lat: 5.242684,
        lng: 7.406232,
        state_id: 1
},

{
        name: 'Mani',
        lat: 12.854262,
        lng: 7.875261,
        state_id: 21
},

{
        name: 'Isua',
        lat: 7.453609,
        lng: 5.910472,
        state_id: 29
},

{
        name: 'Babura',
        lat: 12.77256,
        lng: 9.015251,
        state_id: 18
},

{
        name: 'Ukpor',
        lat: 5.942113,
        lng: 6.929313,
        state_id: 4
},

{
        name: 'Owode',
        lat: 6.94851,
        lng: 3.505605,
        state_id: 28
},

{
        name: 'Mgbidi',
        lat: 5.732361,
        lng: 6.888693,
        state_id: 17
},

{
        name: 'Misau',
        lat: 11.313699,
        lng: 10.466637,
        state_id: 5
},

{
        name: 'Toto',
        lat: 8.387596,
        lng: 7.077511,
        state_id: 26
},

{
        name: 'Ijero-Ekiti',
        lat: 7.815138,
        lng: 5.067162,
        state_id: 13
},

{
        name: 'Aliero',
        lat: 12.288353,
        lng: 4.471391,
        state_id: 22
},

{
        name: 'Mangu',
        lat: 9.520595,
        lng: 9.097695,
        state_id: 32
},

{
        name: 'Iperindo',
        lat: 7.50119,
        lng: 4.824773,
        state_id: 30
},

{
        name: 'Charanchi',
        lat: 12.671545,
        lng: 7.729292,
        state_id: 21
},

{
        name: 'Ndeaboh',
        lat: 6.034054,
        lng: 7.568428,
        state_id: 14
},

{
        name: 'Igbekebo',
        lat: 6.355206,
        lng: 4.86221,
        state_id: 29
},

{
        name: 'Gulak',
        lat: 10.805298,
        lng: 13.458241,
        state_id: 2
},

{
        name: 'Langtang',
        lat: 9.141639,
        lng: 9.791007,
        state_id: 32
},

{
        name: 'Bindawa',
        lat: 12.669875,
        lng: 7.808654,
        state_id: 21
},

{
        name: 'Dapchi',
        lat: 12.495362,
        lng: 11.499775,
        state_id: 36
},

{
        name: 'Ikot Ibritam',
        lat: 4.811712,
        lng: 7.614012,
        state_id: 3
},

{
        name: 'Shendam',
        lat: 8.878659,
        lng: 9.534645,
        state_id: 32
},

{
        name: 'Iloffa',
        lat: 8.093428,
        lng: 5.142327,
        state_id: 24
},

{
        name: 'Ilobu',
        lat: 7.84036,
        lng: 4.48557,
        state_id: 30
},

{
        name: 'Ipokia',
        lat: 6.524989,
        lng: 2.842465,
        state_id: 28
},

{
        name: 'Gwiwa',
        lat: 12.781693,
        lng: 8.337224,
        state_id: 18
},

{
        name: 'Obagaji',
        lat: 7.89169,
        lng: 7.909384,
        state_id: 7
},

{
        name: 'Asaba',
        lat: 6.198474,
        lng: 6.727431,
        state_id: 10
},

{
        name: 'Ugwolawo',
        lat: 7.236723,
        lng: 6.92302,
        state_id: 23
},

{
        name: 'Nto Edino',
        lat: 5.25704,
        lng: 7.575693,
        state_id: 3
},

{
        name: 'Kura',
        lat: 11.772319,
        lng: 8.426307,
        state_id: 20
},

{
        name: 'Sabuwa',
        lat: 11.173722,
        lng: 7.121127,
        state_id: 21
},

{
        name: 'Kankia',
        lat: 12.546366,
        lng: 7.822544,
        state_id: 21
},

{
        name: 'Wara',
        lat: 10.228844,
        lng: 4.623629,
        state_id: 22
},

{
        name: 'Agwara',
        lat: 10.706111,
        lng: 4.581254,
        state_id: 27
},

{
        name: 'Oke-Oyi',
        lat: 8.582635,
        lng: 4.716223,
        state_id: 24
},

{
        name: 'Gboko',
        lat: 7.322755,
        lng: 9.001078,
        state_id: 7
},

{
        name: 'Apomu',
        lat: 7.35156,
        lng: 4.183354,
        state_id: 30
},

{
        name: 'Bagwai',
        lat: 12.157704,
        lng: 8.1358,
        state_id: 20
},

{
        name: 'Damagum',
        lat: 11.678237,
        lng: 11.335174,
        state_id: 36
},

{
        name: 'Iresa-Adu',
        lat: 8.087473,
        lng: 4.39264,
        state_id: 31
},

{
        name: 'Sankwala',
        lat: 6.547535,
        lng: 9.222584,
        state_id: 9
},

{
        name: 'Ilawe-Ekiti',
        lat: 7.598812,
        lng: 5.104698,
        state_id: 13
},

{
        name: 'Bode Osi',
        lat: 7.751031,
        lng: 4.229796,
        state_id: 30
},

{
        name: 'Balle',
        lat: 13.470286,
        lng: 4.681189,
        state_id: 34
},

{
        name: 'Emuoha',
        lat: 4.883996,
        lng: 6.860104,
        state_id: 33
},

{
        name: 'Dange',
        lat: 12.853128,
        lng: 5.345724,
        state_id: 34
},

{
        name: 'Barkin Ladi',
        lat: 9.538124,
        lng: 8.892701,
        state_id: 32
},

{
        name: 'Somolu',
        lat: 6.538907,
        lng: 3.374197,
        state_id: 25
},

{
        name: 'Oguta',
        lat: 5.710435,
        lng: 6.809365,
        state_id: 17
},

{
        name: 'Neni',
        lat: 6.095105,
        lng: 7.024256,
        state_id: 4
},

{
        name: 'Ogidi',
        lat: 6.152093,
        lng: 6.863435,
        state_id: 4
},

{
        name: 'Agaie',
        lat: 9.008498,
        lng: 6.318206,
        state_id: 27
},

{
        name: 'Otu-Jeremi',
        lat: 5.438183,
        lng: 5.878286,
        state_id: 10
},

{
        name: 'Otukpa',
        lat: 7.101675,
        lng: 7.659447,
        state_id: 7
},

{
        name: 'Oko Ita',
        lat: 5.191995,
        lng: 7.895309,
        state_id: 3
},

{
        name: 'Saki',
        lat: 8.667619,
        lng: 3.393929,
        state_id: 31
},

{
        name: 'Suleja',
        lat: 9.18059,
        lng: 7.179393,
        state_id: 27
},

{
        name: 'Kabo',
        lat: 11.856063,
        lng: 8.170203,
        state_id: 20
},

{
        name: 'Gella',
        lat: 10.157379,
        lng: 13.300036,
        state_id: 2
},

{
        name: 'Igbokoda',
        lat: 6.352656,
        lng: 4.804058,
        state_id: 29
},

{
        name: 'Maiyama',
        lat: 12.082245,
        lng: 4.369067,
        state_id: 22
},

{
        name: 'Obarike-Ito',
        lat: 7.024501,
        lng: 8.32358,
        state_id: 7
},

{
        name: 'Irrua',
        lat: 6.736335,
        lng: 6.219839,
        state_id: 12
},

{
        name: 'Itigidi',
        lat: 5.891471,
        lng: 8.021865,
        state_id: 9
},

{
        name: 'Oron',
        lat: 4.821712,
        lng: 8.235038,
        state_id: 3
},

{
        name: 'Akinima',
        lat: 5.085357,
        lng: 6.466333,
        state_id: 33
},

{
        name: 'Nkwo Nike',
        lat: 6.509214,
        lng: 7.510064,
        state_id: 14
},

{
        name: 'Gezawa',
        lat: 12.101573,
        lng: 8.750295,
        state_id: 20
},

{
        name: 'Dutsi',
        lat: 12.828624,
        lng: 8.139804,
        state_id: 21
},

{
        name: 'Mai Adua',
        lat: 13.179858,
        lng: 8.230396,
        state_id: 21
},

{
        name: 'New Bussa',
        lat: 9.886442,
        lng: 4.508545,
        state_id: 27
},

{
        name: 'Gwarzo',
        lat: 11.915973,
        lng: 7.933704,
        state_id: 20
},

{
        name: 'Bokkos',
        lat: 9.299209,
        lng: 8.994667,
        state_id: 32
},

{
        name: 'Jibia',
        lat: 13.093783,
        lng: 7.226241,
        state_id: 21
},

{
        name: 'Nasarawa',
        lat: 8.538945,
        lng: 7.708205,
        state_id: 26
},

{
        name: 'Mahuta',
        lat: 11.553375,
        lng: 4.981384,
        state_id: 22
},

{
        name: 'Oguma',
        lat: 7.896345,
        lng: 7.062286,
        state_id: 23
},

{
        name: 'Onuebonyi Echara',
        lat: 6.0954,
        lng: 8.151566,
        state_id: 11
},

{
        name: 'Kujama',
        lat: 10.457665,
        lng: 7.638076,
        state_id: 19
},

{
        name: 'Ikere-Ekiti',
        lat: 7.497482,
        lng: 5.230414,
        state_id: 13
},

{
        name: 'Ayetoro',
        lat: 7.242809,
        lng: 3.026386,
        state_id: 28
},

{
        name: 'Ilesa',
        lat: 7.627891,
        lng: 4.741609,
        state_id: 30
},

{
        name: 'Gagarawa',
        lat: 12.40848,
        lng: 9.528811,
        state_id: 18
},

{
        name: 'Sabongida-Ora',
        lat: 6.902313,
        lng: 5.931175,
        state_id: 12
},

{
        name: 'Zing',
        lat: 8.990636,
        lng: 11.747634,
        state_id: 35
},

{
        name: 'Sandamu',
        lat: 12.961627,
        lng: 8.360171,
        state_id: 21
},

{
        name: 'Shinkafi',
        lat: 13.072961,
        lng: 6.50574,
        state_id: 37
},

{
        name: 'Obubra',
        lat: 6.076719,
        lng: 8.332414,
        state_id: 9
},

{
        name: 'Obudu',
        lat: 6.668185,
        lng: 9.164528,
        state_id: 9
},

{
        name: 'Rimin Gado',
        lat: 11.967202,
        lng: 8.2476,
        state_id: 20
},

{
        name: 'Kazaure',
        lat: 12.648462,
        lng: 8.411777,
        state_id: 18
},

{
        name: 'Karim Lamido',
        lat: 9.314298,
        lng: 11.18731,
        state_id: 35
},

{
        name: 'Urue Offong',
        lat: 4.752747,
        lng: 8.167705,
        state_id: 3
},

{
        name: 'Egbeda',
        lat: 7.3772,
        lng: 4.049754,
        state_id: 31
},

{
        name: 'Okehi',
        lat: 5.138952,
        lng: 7.139154,
        state_id: 33
},

{
        name: 'Kafanchan',
        lat: 9.581262,
        lng: 8.2926,
        state_id: 19
},

{
        name: 'Ile-Oluji',
        lat: 7.213092,
        lng: 4.869018,
        state_id: 29
},

{
        name: 'Isu',
        lat: 6.150016,
        lng: 7.801312,
        state_id: 11
},

{
        name: 'Moniya',
        lat: 7.528428,
        lng: 3.911563,
        state_id: 31
},

{
        name: 'Monguno',
        lat: 12.670587,
        lng: 13.61224,
        state_id: 8
},

{
        name: 'Bunza',
        lat: 12.088215,
        lng: 4.015201,
        state_id: 22
},

{
        name: 'Pantisawa',
        lat: 8.945043,
        lng: 11.511759,
        state_id: 35
},

{
        name: 'Obangede',
        lat: 7.620658,
        lng: 6.199285,
        state_id: 23
},

{
        name: 'Bali',
        lat: 7.855327,
        lng: 10.967835,
        state_id: 35
},

{
        name: 'Ugbokpo',
        lat: 7.653207,
        lng: 7.884098,
        state_id: 7
},

{
        name: 'Bonny',
        lat: 4.451601,
        lng: 7.170744,
        state_id: 33
},

{
        name: 'Oji River',
        lat: 6.255635,
        lng: 7.270249,
        state_id: 14
},

{
        name: 'Ojo',
        lat: 6.461165,
        lng: 3.16466,
        state_id: 25
},

{
        name: 'Yana',
        lat: 11.40724,
        lng: 10.013454,
        state_id: 5
},

{
        name: 'Karkarna',
        lat: 12.766528,
        lng: 8.509805,
        state_id: 18
},

{
        name: 'Okpuala-Ngwa',
        lat: 5.357097,
        lng: 7.387648,
        state_id: 1
},

{
        name: 'Okigwe',
        lat: 5.829168,
        lng: 7.350559,
        state_id: 17
},

{
        name: 'Bolorunduro',
        lat: 7.165862,
        lng: 4.963698,
        state_id: 29
},

{
        name: 'Serti',
        lat: 7.505744,
        lng: 11.3631,
        state_id: 35
},

{
        name: 'Akwete',
        lat: 4.886881,
        lng: 7.356864,
        state_id: 1
},

{
        name: 'Akwukwu-Igbo',
        lat: 6.357532,
        lng: 6.590661,
        state_id: 10
},

{
        name: 'Nchia',
        lat: 4.793088,
        lng: 7.120605,
        state_id: 33
},

{
        name: 'Wushishi',
        lat: 9.730355,
        lng: 6.073049,
        state_id: 27
},

{
        name: 'Dakingari',
        lat: 11.648094,
        lng: 4.061771,
        state_id: 22
},

{
        name: 'Aramoko-Ekiti',
        lat: 7.704831,
        lng: 5.040539,
        state_id: 13
},

{
        name: 'Maradun',
        lat: 12.567038,
        lng: 6.244069,
        state_id: 37
},

{
        name: 'Agbani',
        lat: 6.306687,
        lng: 7.54862,
        state_id: 14
},

{
        name: 'Birnin Gwari',
        lat: 10.663737,
        lng: 6.540028,
        state_id: 19
},

{
        name: 'Bassa',
        lat: 9.942486,
        lng: 8.740421,
        state_id: 32
},

{
        name: 'Sunkani',
        lat: 8.702981,
        lng: 11.257568,
        state_id: 35
},

{
        name: 'Oke-Ikpe',
        lat: 4.913015,
        lng: 7.319358,
        state_id: 1
},

{
        name: 'Ota',
        lat: 6.688673,
        lng: 3.232015,
        state_id: 28
},

{
        name: 'Patigi',
        lat: 8.72851,
        lng: 5.755615,
        state_id: 24
},

{
        name: 'Awo-Idemili',
        lat: 5.826485,
        lng: 6.933742,
        state_id: 17
},

{
        name: 'Sabon Wuse',
        lat: 9.33424,
        lng: 7.261136,
        state_id: 27
},

{
        name: 'Mallam Sidi',
        lat: 10.468303,
        lng: 11.292939,
        state_id: 16
},

{
        name: 'Gwandu',
        lat: 12.502043,
        lng: 4.642948,
        state_id: 22
},

{
        name: 'Oshodi',
        lat: 6.555044,
        lng: 3.343626,
        state_id: 25
},

{
        name: 'Egbema',
        lat: 5.544346,
        lng: 6.760896,
        state_id: 17
},

{
        name: 'Tede',
        lat: 8.55625,
        lng: 3.446383,
        state_id: 31
},

{
        name: 'Bagudo',
        lat: 11.403509,
        lng: 4.225712,
        state_id: 22
},

{
        name: 'Surulere',
        lat: 6.501532,
        lng: 3.358076,
        state_id: 25
},

{
        name: 'Ekpoma',
        lat: 6.743002,
        lng: 6.140288,
        state_id: 12
},

{
        name: 'Warawa',
        lat: 11.866207,
        lng: 8.701458,
        state_id: 20
},

{
        name: 'Ikot Edibon',
        lat: 4.770218,
        lng: 7.930996,
        state_id: 3
},

{
        name: 'Ezillo',
        lat: 6.429296,
        lng: 7.817873,
        state_id: 11
},

{
        name: 'Dikwa',
        lat: 12.036094,
        lng: 13.918152,
        state_id: 8
},

{
        name: 'Epe',
        lat: 6.584317,
        lng: 3.978511,
        state_id: 25
},

{
        name: 'Bungudu',
        lat: 12.268483,
        lng: 6.552882,
        state_id: 37
},

{
        name: 'Omoku',
        lat: 5.343881,
        lng: 6.656838,
        state_id: 33
},

{
        name: 'Kukawa',
        lat: 12.924753,
        lng: 13.566168,
        state_id: 8
},

{
        name: 'Kaugama',
        lat: 12.474309,
        lng: 9.736707,
        state_id: 18
},

{
        name: 'Ikom',
        lat: 5.962385,
        lng: 8.708234,
        state_id: 9
},

{
        name: 'Baure',
        lat: 12.837716,
        lng: 8.74513,
        state_id: 21
},

{
        name: 'Paiko',
        lat: 9.436855,
        lng: 6.633571,
        state_id: 27
},

{
        name: 'Turunku',
        lat: 10.804326,
        lng: 7.696387,
        state_id: 19
},

{
        name: 'Okwe',
        lat: 5.777429,
        lng: 7.217944,
        state_id: 17
},

{
        name: 'Okpo',
        lat: 7.216263,
        lng: 7.560225,
        state_id: 23
},

{
        name: 'Kuje',
        lat: 8.879523,
        lng: 7.227557,
        state_id: 15
},

{
        name: 'Auyo',
        lat: 12.333377,
        lng: 9.938905,
        state_id: 18
},

{
        name: 'Kajuru',
        lat: 10.322811,
        lng: 7.684617,
        state_id: 19
},

{
        name: 'Toro',
        lat: 10.058892,
        lng: 9.069096,
        state_id: 5
},

{
        name: 'Sabon Birni',
        lat: 13.563874,
        lng: 6.323546,
        state_id: 34
},

{
        name: 'Ikenne',
        lat: 6.865789,
        lng: 3.715179,
        state_id: 28
},

{
        name: 'Gbongan',
        lat: 7.477343,
        lng: 4.353506,
        state_id: 30
},

{
        name: 'Zuru',
        lat: 11.43522,
        lng: 5.234935,
        state_id: 22
},

{
        name: 'Alkaleri',
        lat: 10.266875,
        lng: 10.332383,
        state_id: 5
},

{
        name: 'Igbeti',
        lat: 8.749207,
        lng: 4.131128,
        state_id: 31
},

{
        name: 'Ikot Abasi',
        lat: 4.568507,
        lng: 7.552616,
        state_id: 3
},

{
        name: 'Eberi',
        lat: 5.091167,
        lng: 7.233701,
        state_id: 33
},

{
        name: 'Gwaram',
        lat: 11.277272,
        lng: 9.883849,
        state_id: 18
},

{
        name: 'Ekeremor',
        lat: 5.058053,
        lng: 5.780477,
        state_id: 6
},

{
        name: 'Maigatari',
        lat: 12.807831,
        lng: 9.44516,
        state_id: 18
},

{
        name: 'Mayo-Belwa',
        lat: 9.054213,
        lng: 12.05794,
        state_id: 2
},

{
        name: 'Anchau',
        lat: 10.962452,
        lng: 8.392329,
        state_id: 19
},

{
        name: 'Umulona',
        lat: 6.507887,
        lng: 7.09743,
        state_id: 14
},

{
        name: 'Demsa',
        lat: 9.455665,
        lng: 12.152493,
        state_id: 2
},

{
        name: 'Lemu',
        lat: 9.396367,
        lng: 6.027908,
        state_id: 27
},

{
        name: 'Badagry',
        lat: 6.415017,
        lng:  2.881318,
        state_id: 25
},

{
        name: 'Abejukolo',
        lat: 7.868077,
        lng: 7.509072,
        state_id: 23
},

{
        name: 'Ayete',
        lat: 7.542862,
        lng: 3.222631,
        state_id: 31
},

{
        name: 'Isara',
        lat: 6.99345,
        lng: 3.681477,
        state_id: 28
},

{
        name: 'Maiha',
        lat: 9.996722,
        lng: 13.216652,
        state_id: 2
},

{
        name: 'Kangiwa',
        lat: 12.553389,
        lng: 3.818141,
        state_id: 22
},
{
        name: 'Arochukwu',
        lat: 5.389405,
        lng: 7.912346,
        state_id: 1
},
{
        name:  'Takai',
        lat:  11.575692,
        lng:  9.108804,
        state_id: 20
},
{
        name: 'Bende',
        lat: 5.558741,
        lng: 7.633589,
        state_id: 1
},

{
        name: 'Nzam',
        lat: 6.452965,
        lng: 6.728825,
        state_id: 4
},

{
        name: 'Aguobu-Owa',
        lat: 6.372286,
        lng: 7.271781,
        state_id: 14
},

{
        name: 'Gudumbali',
        lat: 12.942839,
        lng: 13.178313,
        state_id: 8
},

{
        name: 'Iboko',
        lat: 6.406552,
        lng: 8.233285,
        state_id: 11
},

{
        name: 'Oju',
        lat: 6.845264,
        lng: 8.419135,
        state_id: 7
},

{
        name: 'Ojoto',
        lat: 6.058417,
        lng: 6.861241,
        state_id: 4
},

{
        name: 'Awe',
        lat: 8.104452,
        lng: 9.140113,
        state_id: 26
},

{
        name: 'Lafiagi',
        lat: 8.852993,
        lng: 5.416413,
        state_id: 24
},

{
        name: 'Askira',
        lat: 10.650857,
        lng: 12.908833,
        state_id: 8
},

{
        name: 'Garko',
        lat: 11.649745,
        lng: 8.803281,
        state_id: 20
},

{
        name: 'Saakpenwa',
        lat: 4.71677,
        lng: 7.262999,
        state_id: 33
},

{
        name: 'Bichi',
        lat: 12.233853,
        lng: 8.240627,
        state_id: 20
},

{
        name: 'Umuguma',
        lat: 5.467834,
        lng: 6.965939,
        state_id: 17
},

{
        name: 'Wase',
        lat: 9.094242,
        lng: 9.956051,
        state_id: 32
},

{
        name: 'Share',
        lat: 8.820865,
        lng: 4.973418,
        state_id: 24
},

{
        name: 'Kwal',
        lat: 9.371275,
        lng: 9.619202,
        state_id: 32
},

{
        name: 'Igueben',
        lat: 6.601834,
        lng: 6.242758,
        state_id: 12
},

{
        name: 'Wannune',
        lat: 7.56384,
        lng: 8.885337,
        state_id: 7
},

{
        name: 'Amagunze',
        lat: 6.330629,
        lng: 7.652466,
        state_id: 14
},

{
        name: 'Toungo',
        lat: 8.117331,
        lng: 12.046108,
        state_id: 2
},

{
        name: 'Baissa',
        lat: 7.230866,
        lng: 10.624436,
        state_id: 35
},

{
        name: 'Oye-Ekiti',
        lat: 7.799765,
        lng: 5.332422,
        state_id: 13
},

{
        name: 'Idi-Ayunre',
        lat: 7.232921,
        lng: 3.86152,
        state_id: 31
},

{
        name: 'Damasak',
        lat: 13.105177,
        lng: 12.50854,
        state_id: 8
},

{
        name: 'Mbalano',
        lat: 5.734324,
        lng: 7.502377,
        state_id: 1
},

{
        name: 'Abudu',
        lat: 6.294886,
        lng: 6.029947,
        state_id: 12
},

{
        name: 'Katsina-Ala',
        lat: 7.169378,
        lng: 9.284646,
        state_id: 7
},

{
        name: 'Ila Orangun',
        lat: 8.017145,
        lng: 4.904207,
        state_id: 30
},

{
        name: 'Buruku',
        lat: 7.459606,
        lng: 9.204549,
        state_id: 7
},

{
        name: 'Kpor',
        lat: 4.652646,
        lng: 7.283968,
        state_id: 33
},

{
        name: 'Mushin',
        lat: 6.527994,
        lng: 3.354114,
        state_id: 25
},

{
        name: 'Iho',
        lat: 5.582246,
        lng: 7.098965,
        state_id: 17
},

{
        name: 'Bori',
        lat: 4.676294,
        lng: 7.36519,
        state_id: 33
},

{
        name: 'Obi',
        lat: 8.369222,
        lng: 8.773834,
        state_id: 26
},

{
        name: 'Koton-Karfe',
        lat: 8.091196,
        lng: 6.797823,
        state_id: 23
},

{
        name: 'Hadejia',
        lat: 12.453467,
        lng: 10.04115,
        state_id: 18
},

{
        name: 'Ikorodu',
        lat: 6.615261,
        lng: 3.506896,
        state_id: 25
},

{
        name: 'Gummi',
        lat: 12.144843,
        lng: 5.117757,
        state_id: 37
},

{
        name: 'Gumel',
        lat: 12.626901,
        lng: 9.388069,
        state_id: 18
},

{
        name: 'Augie',
        lat: 12.890269,
        lng: 4.599649,
        state_id: 22
},

{
        name: 'Yabo',
        lat: 12.722165,
        lng: 5.013286,
        state_id: 34
},

{
        name: 'Udi',
        lat: 6.315924,
        lng: 7.420855,
        state_id: 14
},

{
        name: 'Ubiaja',
        lat: 6.65581,
        lng: 6.384944,
        state_id: 12
},

{
        name: 'Shagari',
        lat: 12.627273,
        lng: 4.992949,
        state_id: 34
},

{
        name: 'Shagamu',
        lat: 6.848498,
        lng: 3.646325,
        state_id: 28
},

{
        name: 'Ajaawa',
        lat: 7.931176,
        lng: 4.126544,
        state_id: 31
},

{
        name: 'Okpoma',
        lat: 6.596793,
        lng: 8.637284,
        state_id: 9
},

{
        name: 'Ago-Amodu',
        lat: 8.623139,
        lng: 3.614192,
        state_id: 31
},

{
        name: 'Nnenasa',
        lat: 5.732621,
        lng: 7.013641,
        state_id: 17
},

{
        name: 'Isanlu',
        lat: 8.288227,
        lng: 5.818365,
        state_id: 23
},

{
        name: 'Ikot Nakanda',
        lat: 4.884258,
        lng: 8.483788,
        state_id: 9
},

{
        name: 'Gawu Babangida',
        lat: 9.278269,
        lng: 6.993352,
        state_id: 27
},

{
        name: 'Gantsa',
        lat: 11.663117,
        lng: 9.726389,
        state_id: 18
},

{
        name: 'Sarkin Pawa',
        lat: 10.020944,
        lng: 7.112436,
        state_id: 27
},

{
        name: 'Ningi',
        lat: 11.07837,
        lng: 9.568859,
        state_id: 5
},

{
        name: 'Bukkuyum',
        lat: 12.137201,
        lng: 5.468214,
        state_id: 37
},

{
        name: 'Rann',
        lat: 12.269375,
        lng: 14.465521,
        state_id: 8
},

{
        name: 'Rano',
        lat: 11.556838,
        lng: 8.580647,
        state_id: 20
},

{
        name: 'Yenagoa',
        lat: 4.926746,
        lng: 6.267636,
        state_id: 6
},

{
        name: 'Binji',
        lat: 13.222944,
        lng: 4.908885,
        state_id: 34
},

{
        name: 'Briyel',
        lat: 10.34764,
        lng: 11.609896,
        state_id: 8
},

{
        name: 'Kamba',
        lat: 11.851721,
        lng: 3.65478,
        state_id: 22
},

{
        name: 'Ifako',
        lat: 6.644229,
        lng: 3.324876,
        state_id: 25
},

{
        name: 'Ido-Ekiti',
        lat: 7.845975,
        lng: 5.183143,
        state_id: 13
},

{
        name: 'Ido',
        lat: 7.471032,
        lng: 3.7574,
        state_id: 31
},

{
        name: 'Kusada',
        lat: 12.465602,
        lng: 7.978478,
        state_id: 21
},

{
        name: 'Igumale',
        lat: 6.79792,
        lng: 7.967936,
        state_id: 7
},

{
        name: 'Degema',
        lat: 4.748071,
        lng: 6.766181,
        state_id: 33
},

{
        name: 'Argungu',
        lat: 12.74482,
        lng: 4.525136,
        state_id: 22
},

{
        name: 'Iguobazuwa',
        lat: 6.565365,
        lng: 5.354427,
        state_id: 12
},

{
        name: 'Ajingi',
        lat: 11.968258,
        lng: 9.036785,
        state_id: 20
},

{
        name: 'Bakura',
        lat: 12.71141,
        lng: 5.873667,
        state_id: 37
},

{
        name: 'Girei',
        lat: 9.365259,
        lng: 12.546212,
        state_id: 2
},

{
        name: 'Babban Gida',
        lat: 12.154824,
        lng: 11.770904,
        state_id: 36
},

{
        name: 'Araromi-Opin',
        lat: 8.065273,
        lng: 5.253984,
        state_id: 24
},

{
        name: 'Zurmi',
        lat: 12.776748,
        lng: 6.784035,
        state_id: 37
},

{
        name: 'Uromi',
        lat: 6.709707,
        lng: 6.329813,
        state_id: 12
},

{
        name: 'Gidan Madi',
        lat: 13.295754,
        lng: 4.974666,
        state_id: 34
},

{
        name: 'Eket',
        lat: 4.64231,
        lng: 7.924381,
        state_id: 3
},

{
        name: 'Boh',
        lat: 9.781873,
        lng: 11.278816,
        state_id: 16
},

{
        name: 'Makera',
        lat: 10.471402,
        lng: 7.410261,
        state_id: 19
},

{
        name: 'Machina',
        lat: 13.136389,
        lng: 10.04924,
        state_id: 36
},

{
        name: 'Ngo',
        lat: 4.483885,
        lng: 7.41446,
        state_id: 33
},

{
        name: 'Tunkus',
        lat: 9.021673,
        lng: 9.613845,
        state_id: 32
},

{
        name: 'Chibok',
        lat: 10.86949,
        lng: 12.846575,
        state_id: 8
},

{
        name: 'Abaji',
        lat: 8.47372,
        lng: 6.944532,
        state_id: 15
},

{
        name: 'Sabon Garin Nangere',
        lat: 11.849454,
        lng: 11.073297,
        state_id: 36
},

{
        name: 'Sabon Gari',
        lat: 11.118385,
        lng: 7.73316,
        state_id: 19
},

{
        name: 'Isiokolo',
        lat: 5.595858,
        lng: 6.00028,
        state_id: 10
},

{
        name: 'Kaiama',
        lat: 9.605305,
        lng: 3.941013,
        state_id: 24
},

{
        name: 'Kaiama',
        lat: 5.119698,
        lng: 6.301015,
        state_id: 6
},

{
        name: 'Gajiram',
        lat: 12.491494,
        lng: 13.211907,
        state_id: 8
},

{
        name: 'Ukpo',
        lat: 6.214071,
        lng: 6.96657,
        state_id: 4
},

{
        name: 'Igede-Ekiti',
        lat: 7.668501,
        lng: 5.126274,
        state_id: 13
},

{
        name: 'Iju',
        lat: 7.394521,
        lng: 5.25919,
        state_id: 29
},

{
        name: 'Matazu',
        lat: 12.235489,
        lng: 7.674258,
        state_id: 21
},

{
        name: 'Ikirun',
        lat: 7.912828,
        lng: 4.667413,
        state_id: 30
},

{
        name: 'Oporoma',
        lat: 4.806044,
        lng: 6.080161,
        state_id: 6
},

{
        name: 'Ogwashi-Uku',
        lat: 6.178106,
        lng: 6.524609,
        state_id: 10
},

{
        name: 'Owa-Oyibu',
        lat: 6.182668,
        lng: 6.199025,
        state_id: 10
},

{
        name: 'Sankera',
        lat: 7.535296,
        lng: 9.652234,
        state_id: 7
},

{
        name: 'Warji',
        lat: 11.17756,
        lng: 9.752414,
        state_id: 5
},

{
        name: 'Madobi',
        lat: 11.777248,
        lng: 8.288012,
        state_id: 20
},

{
        name: 'Onyedega',
        lat: 6.882095,
        lng: 6.675847,
        state_id: 23
},

{
        name: 'Lau',
        lat: 9.208269,
        lng: 11.27541,
        state_id: 35
},

{
        name: 'Bwari',
        lat: 9.279946,
        lng: 7.380449,
        state_id: 15
},

{
        name: 'Tudun Wada',
        lat: 11.24848,
        lng: 8.40109,
        state_id: 20
},

{
        name: 'Zakirai',
        lat: 12.100326,
        lng: 8.885244,
        state_id: 20
},

{
        name: 'Enugu-Ezike',
        lat: 6.982703,
        lng: 7.455343,
        state_id: 14
},

{
        name: 'Urua Inyang',
        lat: 5.023089,
        lng: 7.538947,
        state_id: 3
},

{
        name: 'Afikpo',
        lat: 5.892577,
        lng: 7.935336,
        state_id: 11
},

{
        name: 'Abua',
        lat: 4.857626,
        lng: 6.645194,
        state_id: 33
},

{
        name: 'Kutigi',
        lat: 9.20103,
        lng: 5.594976,
        state_id: 27
},

{
        name: 'Doma',
        lat: 8.393068,
        lng: 8.355436,
        state_id: 26
},

{
        name: 'Azare',
        lat: 10.52583,
        lng: 12.291145,
        state_id: 8
},

{
        name: 'Benisheikh',
        lat: 11.809189,
        lng: 12.491506,
        state_id: 8
},

{
        name: 'Idogbo',
        lat: 6.268124,
        lng: 5.71296,
        state_id: 12
},

{
        name: 'Kanamma',
        lat: 13.099692,
        lng: 12.107899,
        state_id: 36
},

{
        name: 'Onueke',
        lat: 6.155366,
        lng: 8.037351,
        state_id: 11
},

{
        name: 'Ajegunle',
        lat: 6.45197,
        lng: 3.331147,
        state_id: 25
},

{
        name: 'Jakusko',
        lat: 12.370934,
        lng: 10.773728,
        state_id: 36
},

{
        name: 'Igboho',
        lat: 8.837838,
        lng: 3.756282,
        state_id: 31
},

{
        name: 'Ikem',
        lat: 6.779928,
        lng: 7.714837,
        state_id: 14
},

{
        name: 'Ipetumodu',
        lat: 7.521521,
        lng: 4.444765,
        state_id: 30
},

{
        name: 'Bukuru',
        lat: 9.793987,
        lng: 8.863967,
        state_id: 32
},

{
        name: 'Dawakin Tofa',
        lat: 12.10452,
        lng: 8.329988,
        state_id: 20
},

{
        name: 'Dawakin Kudu',
        lat: 11.837271,
        lng: 8.59699,
        state_id: 20
},

{
        name: 'Ode-Ekiti',
        lat: 7.648126,
        lng: 5.549483,
        state_id: 13
},

{
        name: 'Abigi',
        lat: 6.486756,
        lng: 4.395314,
        state_id: 28
},

{
        name: 'Upenekang',
        lat: 4.570635,
        lng: 7.97955,
        state_id: 3
},

{
        name: 'Guyuk',
        lat: 9.906629,
        lng: 11.927527,
        state_id: 2
},

{
        name: 'Buni Yadi',
        lat: 11.274411,
        lng: 12.008517,
        state_id: 36
},

{
        name: 'Amaigbo',
        lat: 5.730159,
        lng: 7.115098,
        state_id: 17
},

{
        name: 'Aliade',
        lat: 7.296269,
        lng: 8.482775,
        state_id: 7
},

{
        name: 'Kware',
        lat: 13.219686,
        lng: 5.265963,
        state_id: 34
},

{
        name: 'Otun-Ekiti',
        lat: 7.988584,
        lng: 5.122911,
        state_id: 13
},

{
        name: 'Ihiala',
        lat: 5.854752,
        lng: 6.859441,
        state_id: 4
},

{
        name: 'Dutsin-Ma',
        lat: 12.453915,
        lng: 7.497231,
        state_id: 21
},

{
        name: 'Abat',
        lat: 4.61712,
        lng: 7.866395,
        state_id: 3
},

{
        name: 'Ifo',
        lat: 6.814906,
        lng: 3.195182,
        state_id: 28
},

{
        name: 'Mashi',
        lat: 12.980437,
        lng: 7.947029,
        state_id: 21
},

{
        name: 'Boje',
        lat: 6.284278,
        lng: 8.920617,
        state_id: 9
},

{
        name: 'Danja',
        lat: 11.377097,
        lng: 7.560967,
        state_id: 21
},

{
        name: 'Ogu',
        lat: 4.722474,
        lng: 7.198594,
        state_id: 33
},

{
        name: 'Jega',
        lat: 12.222195,
        lng: 4.379633,
        state_id: 22
},

{
        name: 'Aguata',
        lat: 6.016336,
        lng: 7.087822,
        state_id: 4
},

{
        name: 'Khaddamari',
        lat: 11.925894,
        lng: 13.230619,
        state_id: 8
},

{
        name: 'Gwadabawa',
        lat: 13.358187,
        lng: 5.238117,
        state_id: 34
},

{
        name: 'Ibagwa-Aka',
        lat: 6.918541,
        lng: 7.398953,
        state_id: 14
},

{
        name: 'Roni',
        lat: 12.658619,
        lng: 8.265047,
        state_id: 18
},

{
        name: 'Mallam Fatori',
        lat: 13.674595,
        lng: 13.339517,
        state_id: 8
},

{
        name: 'Kaura',
        lat: 9.668122,
        lng: 8.458255,
        state_id: 19
},

{
        name: 'Bakori',
        lat: 11.555591,
        lng: 7.424188,
        state_id: 21
},

{
        name: 'Ilemona',
        lat: 8.109917,
        lng: 4.660591,
        state_id: 24
},

{
        name: 'Pankshin',
        lat: 9.325409,
        lng: 9.435196,
        state_id: 32
},

{
        name: 'Ibokun',
        lat: 7.784919,
        lng: 4.726534,
        state_id: 30
},

{
        name: 'Kibiya',
        lat: 11.528004,
        lng: 8.661078,
        state_id: 20
},

{
        name: 'Dan Musa',
        lat: 12.261568,
        lng: 7.334091,
        state_id: 21
},

{
        name: 'Mkpat Enin',
        lat: 4.73478,
        lng: 7.748975,
        state_id: 3
},

{
        name: 'Odogbolu',
        lat: 6.840351,
        lng: 3.762851,
        state_id: 28
},

{
        name: 'Otor-Udu',
        lat: 5.453411,
        lng: 5.8693,
        state_id: 10
},

{
        name: 'Kagarko',
        lat: 9.491102,
        lng: 7.697709,
        state_id: 19
},

{
        name: 'Uselu',
        lat: 6.384292,
        lng: 5.609839,
        state_id: 12
},

{
        name: 'Kwali',
        lat: 8.883465,
        lng: 7.018575,
        state_id: 15
},

{
        name: 'Kirfi',
        lat: 10.405558,
        lng: 10.404508,
        state_id: 5
},

{
        name: 'Batagarawa',
        lat: 12.906105,
        lng: 7.605856,
        state_id: 21
},

{
        name: 'Nafada',
        lat: 11.095961,
        lng: 11.33261,
        state_id: 16
},

{
        name: 'Dandume',
        lat: 11.458804,
        lng: 7.126023,
        state_id: 21
},

{
        name: 'Igarra',
        lat: 7.293655,
        lng: 6.10432,
        state_id: 12
},

{
        name: 'Owu-Isin',
        lat: 8.280898,
        lng: 5.019395,
        state_id: 24
},

{
        name: 'Apapa',
        lat: 6.4488,
        lng: 3.359008,
        state_id: 25
},

{
        name: 'Ringim',
        lat: 12.151434,
        lng: 9.162161,
        state_id: 18
},

{
        name: 'Zonkwa',
        lat: 9.784534,
        lng: 8.29056,
        state_id: 19
},

{
        name: 'Ijebu-Igbo',
        lat: 6.971977,
        lng: 3.999383,
        state_id: 28
},

{
        name: 'Ogoja',
        lat: 6.658398,
        lng: 8.799227,
        state_id: 9
},

{
        name: 'Maigana',
        lat: 11.027074,
        lng: 7.938441,
        state_id: 19
},

{
        name: 'Ozoro',
        lat: 5.546917,
        lng: 6.226485,
        state_id: 10
},

{
        name: 'Osu',
        lat: 7.585855,
        lng: 4.6226,
        state_id: 30
},

{
        name: 'Abuochiche',
        lat: 6.691323,
        lng: 8.943367,
        state_id: 9
},

{
        name: 'Awo',
        lat: 7.767642,
        lng: 4.395154,
        state_id: 30
},

{
        name: 'Ejigbo',
        lat: 7.902919,
        lng: 4.314192,
        state_id: 30
},

{
        name: 'Atani',
        lat: 6.012772,
        lng: 6.747685,
        state_id: 4
},

{
        name: 'Afam',
        lat: 4.790044,
        lng: 7.311874,
        state_id: 33
},

{
        name: 'Musawa',
        lat: 12.129489,
        lng: 7.670225,
        state_id: 21
},

{
        name: 'Umuelemai',
        lat: 5.687856,
        lng: 7.243335,
        state_id: 17
},

{
        name: 'Isiala Oboro',
        lat: 5.406325,
        lng: 7.56816,
        state_id: 1
},

{
        name: 'Auchi',
        lat: 7.067562,
        lng: 6.263601,
        state_id: 12
},

{
        name: 'Faskari',
        lat: 11.721079,
        lng: 7.029915,
        state_id: 21
},

{
        name: 'Idu',
        lat: 5.030053,
        lng: 8.017156,
        state_id: 3
},

{
        name: 'Shanga',
        lat: 11.213744,
        lng: 4.579413,
        state_id: 22
},

{
        name: 'Akodo',
        lat: 6.437868,
        lng: 3.9309,
        state_id: 25
},

{
        name: 'Shani',
        lat: 10.218239,
        lng: 12.060595,
        state_id: 8
},

{
        name: 'Akanran',
        lat: 7.281239,
        lng: 4.025528,
        state_id: 31
},

{
        name: 'Akamkpa',
        lat: 5.31246,
        lng: 8.355152,
        state_id: 9
},

{
        name: 'Ikara',
        lat: 11.175114,
        lng: 8.224661,
        state_id: 19
},

{
        name: 'Magumeri',
        lat: 12.114511,
        lng: 12.826197,
        state_id: 8
},

{
        name: 'Dambam',
        lat: 11.678929,
        lng: 10.707924,
        state_id: 5
},

{
        name: 'Nkwoagu Isuochi',
        lat: 5.991247,
        lng: 7.394446,
        state_id: 1
},

{
        name: 'Zango',
        lat: 13.053129,
        lng: 8.485744,
        state_id: 21
},

{
        name: 'Birnin Magaji',
        lat: 12.559201,
        lng: 6.89459,
        state_id: 37
},

{
        name: 'Ajaka',
        lat: 7.174156,
        lng: 6.825348,
        state_id: 23
},

{
        name: 'Dikenafai',
        lat: 5.770149,
        lng: 7.154735,
        state_id: 17
},

{
        name: 'Enwang',
        lat: 4.656429,
        lng: 8.25206,
        state_id: 3
},

{
        name: 'Umunze',
        lat: 5.966943,
        lng: 7.236643,
        state_id: 4
},

{
        name: 'Bara',
        lat: 10.936048,
        lng: 11.682415,
        state_id: 36
},

{
        name: 'Naka',
        lat: 7.583305,
        lng: 8.204399,
        state_id: 7
},

{
        name: 'Omu-Aran',
        lat: 8.138568,
        lng: 5.102601,
        state_id: 24
},

{
        name: 'Tureta',
        lat: 12.593667,
        lng: 5.543906,
        state_id: 34
},

{
        name: 'Ikole-Ekiti',
        lat: 7.791481,
        lng: 5.508652,
        state_id: 13
},

{
        name: 'Rumuodomaya',
        lat: 4.893332,
        lng: 7.00228,
        state_id: 33
},

{
        name: 'Maru',
        lat: 12.333595,
        lng: 6.40372,
        state_id: 37
},

{
        name: 'Miga',
        lat: 12.238798,
        lng: 9.713617,
        state_id: 18
},

{
        name: 'Adogo',
        lat: 7.510043,
        lng: 6.479796,
        state_id: 23
},

{
        name: 'Patani',
        lat: 5.228848,
        lng: 6.191387,
        state_id: 10
},

{
        name: 'Sumaila',
        lat: 11.53011,
        lng: 8.955929,
        state_id: 20
},

{
        name: 'Bangi',
        lat: 10.83368,
        lng: 5.826883,
        state_id: 27
},

{
        name: 'Birnin Kudu',
        lat: 11.452066,
        lng: 9.478555,
        state_id: 18
},

{
        name: 'Isiokpo',
        lat: 5.002434,
        lng: 6.87262,
        state_id: 33
},

{
        name: 'Oke-Agbe',
        lat: 7.643141,
        lng: 5.759433,
        state_id: 29
},

{
        name: 'Iye-Ekiti',
        lat: 7.954573,
        lng: 5.233143,
        state_id: 13
},

{
        name: 'Ezzamgbo',
        lat: 6.398949,
        lng: 7.961553,
        state_id: 11
},

{
        name: 'Ita-Ogbolu',
        lat: 7.368376,
        lng: 5.246839,
        state_id: 29
},

{
        name: 'Tsanyawa',
        lat: 12.295591,
        lng: 7.986538,
        state_id: 20
},

{
        name: 'Ebem Ohafia',
        lat: 5.631081,
        lng: 7.830242,
        state_id: 1
},

{
        name: 'Gwantu',
        lat: 9.228989,
        lng: 8.458075,
        state_id: 19
},

{
        name: 'Silame',
        lat: 13.039208,
        lng: 4.845932,
        state_id: 34
},

{
        name: 'Nnewi',
        lat: 6.019625,
        lng: 6.917287,
        state_id: 4
},

{
        name: 'Odot',
        lat: 4.830953,
        lng: 8.038395,
        state_id: 3
},

{
        name: 'Konduga',
        lat: 11.653312,
        lng: 13.41787,
        state_id: 8
},

{
        name: 'Atan',
        lat: 6.894561,
        lng: 4.007146,
        state_id: 28
},

{
        name: 'Jajimaji',
        lat: 12.898499,
        lng: 10.80688,
        state_id: 36
},

{
        name: 'Itu',
        lat: 5.201311,
        lng: 7.983728,
        state_id: 3
},

{
        name: 'Itori',
        lat: 6.931231,
        lng: 3.221466,
        state_id: 28
},

{
        name: 'Dengi',
        lat: 9.368723,
        lng: 9.962233,
        state_id: 32
},

{
        name: 'Akpet Central',
        lat: 5.621048,
        lng: 8.101628,
        state_id: 9
},

{
        name: 'Ibiaku Ntok Okpo',
        lat: 5.308572,
        lng: 7.711059,
        state_id: 3
},

{
        name: 'Ebute-Metta',
        lat: 6.487988,
        lng: 3.381662,
        state_id: 25
},

{
        name: 'Ogbe-Ijoh',
        lat: 5.483243,
        lng: 5.734605,
        state_id: 10
},

{
        name: 'Ogbede',
        lat: 6.672952,
        lng: 7.374409,
        state_id: 14
},

{
        name: 'Bodinga',
        lat: 12.84413,
        lng: 5.150007,
        state_id: 34
},

{
        name: 'Bode Saadu',
        lat: 8.938996,
        lng: 4.78227,
        state_id: 24
},

{
        name: 'Ifon',
        lat: 6.929729,
        lng: 5.773681,
        state_id: 29
},

{
        name: 'Obollo-Afor',
        lat: 6.916245,
        lng: 7.518485,
        state_id: 14
},

{
        name: 'Isiaka',
        lat: 5.862653,
        lng: 7.546215,
        state_id: 11
},

{
        name: 'Giade',
        lat: 11.390833,
        lng: 10.199874,
        state_id: 5
},

{
        name: 'Maikunkele',
        lat: 9.684301,
        lng: 6.478895,
        state_id: 27
},

{
        name: 'Koguna',
        lat: 12.381368,
        lng: 8.457325,
        state_id: 20
},

{
        name: 'Tse-Agberagba',
        lat: 7.076678,
        lng: 8.665508,
        state_id: 7
},

{
        name: 'Kwoi',
        lat: 9.457447,
        lng: 8.006841,
        state_id: 19
},

{
        name: 'Mokwa',
        lat: 9.294818,
        lng: 5.054124,
        state_id: 27
},

{
        name: 'Tofa',
        lat: 12.057886,
        lng: 8.273092,
        state_id: 20
},

{
        name: 'Tafawa Balewa',
        lat: 9.760172,
        lng: 9.551724,
        state_id: 5
},

{
        name: 'Owena',
        lat: 7.194135,
        lng: 5.022645,
        state_id: 29
},

{
        name: 'Ogbia',
        lat: 4.688364,
        lng: 6.315254,
        state_id: 6
},

{
        name: 'Ajalli',
        lat: 6.044268,
        lng: 7.208645,
        state_id: 4
},

{
        name: 'Tambuwal',
        lat: 12.405925,
        lng: 4.646053,
        state_id: 34
},

{
        name: 'Karaye',
        lat: 11.783603,
        lng: 8.01504,
        state_id: 20
},

{
        name: 'Buguma',
        lat: 4.736141,
        lng: 6.862362,
        state_id: 33
},

{
        name: 'Makurdi',
        lat: 7.733746,
        lng: 8.52139,
        state_id: 7
},

{
        name: 'Nteje',
        lat: 6.268102,
        lng: 6.920618,
        state_id: 4
},

{
        name: 'Wudil',
        lat: 11.809374,
        lng: 8.844222,
        state_id: 20
},

{
        name: 'Jahun',
        lat: 12.076292,
        lng: 9.627572,
        state_id: 18
},

{
        name: 'Offa',
        lat: 8.149114,
        lng: 4.720744,
        state_id: 24
},

{
        name: 'Geidam',
        lat: 12.894389,
        lng: 11.926491,
        state_id: 36
},

{
        name: 'Otan Ayegbaju',
        lat: 7.947834,
        lng: 4.788364,
        state_id: 30
},

{
        name: 'Taura',
        lat: 12.227122,
        lng: 9.283062,
        state_id: 18
},

{
        name: 'Dass',
        lat: 10.00065,
        lng: 9.515963,
        state_id: 5
},

{
        name: 'Kuta',
        lat: 9.868638,
        lng: 6.710425,
        state_id: 27
},

{
        name: 'Malam Madori',
        lat: 12.564729,
        lng: 9.880839,
        state_id: 18
},

{
        name: 'Kisi',
        lat: 9.082971,
        lng: 3.851965,
        state_id: 31
},

{
        name: 'Itu',
        lat: 5.463951,
        lng: 7.330776,
        state_id: 17
},

{
        name: 'Otuocha',
        lat: 6.339078,
        lng: 6.846358,
        state_id: 4
},

{
        name: 'Okeho',
        lat: 8.033856,
        lng: 3.347589,
        state_id: 31
},

{
        name: 'Oke-Ila',
        lat: 7.950696,
        lng: 4.988736,
        state_id: 30
},

{
        name: 'Michika',
        lat: 10.620424,
        lng: 13.389283,
        state_id: 2
},

{
        name: 'Ile-Ogbo',
        lat: 7.621292,
        lng: 4.245314,
        state_id: 30
},

{
        name: 'Katagum',
        lat: 12.285071,
        lng: 10.350265,
        state_id: 5
},

{
        name: 'Gaya',
        lat: 11.860637,
        lng: 9.002702,
        state_id: 20
},

{
        name: 'Afaha Ikot Ebak',
        lat: 5.125042,
        lng: 7.657165,
        state_id: 3
},

{
        name: 'Kwaya Kusar',
        lat: 10.502964,
        lng: 11.843311,
        state_id: 8
},

{
        name: 'Kwale',
        lat: 5.707729,
        lng: 6.434017,
        state_id: 10
},

{
        name: 'Okada',
        lat: 6.734686,
        lng: 5.390833,
        state_id: 12
},

{
        name: 'Oleh',
        lat: 5.461857,
        lng: 6.206239,
        state_id: 10
},

{
        name: 'Gada',
        lat: 13.754303,
        lng: 5.657227,
        state_id: 34
},

{
        name: 'Emure-Ekiti',
        lat: 7.436356,
        lng: 5.45925,
        state_id: 13
},

{
        name: 'Enagi',
        lat: 9.127336,
        lng: 5.543868,
        state_id: 27
},

{
        name: 'Afon',
        lat: 8.313129,
        lng: 4.527384,
        state_id: 24
},

{
        name: 'Okrika',
        lat: 4.742154,
        lng: 7.083678,
        state_id: 33
},

{
        name: 'Twon-Brass',
        lat: 4.312306,
        lng: 6.240906,
        state_id: 6
},

{
        name: 'Nembe',
        lat: 4.536734,
        lng: 6.403325,
        state_id: 6
},

{
        name: 'Kosubosu',
        lat: 9.551068,
        lng: 3.228411,
        state_id: 24
},

{
        name: 'Donga',
        lat: 7.721745,
        lng: 10.045261,
        state_id: 35
},

{
        name: 'Etinan',
        lat: 4.842617,
        lng: 7.852523,
        state_id: 3
},

{
        name: 'Okitipupa',
        lat: 6.505503,
        lng: 4.779565,
        state_id: 29
},

{
        name: 'Ede',
        lat: 7.736347,
        lng: 4.435363,
        state_id: 30
},

{
        name: 'Bebeji',
        lat: 11.667684,
        lng: 8.261997,
        state_id: 20
},

{
        name: 'Sakaba',
        lat: 11.06513,
        lng: 5.596099,
        state_id: 22
},

{
        name: 'Okuku',
        lat: 8.018073,
        lng: 4.67253,
        state_id: 30
},

{
        name: 'Rogo',
        lat: 11.552374,
        lng: 7.822532,
        state_id: 20
},

{
        name: 'Daura',
        lat: 13.032992,
        lng: 8.32351,
        state_id: 21
},

{
        name: 'Achalla',
        lat: 6.334651,
        lng: 6.98863,
        state_id: 4
},

{
        name: 'Kauru',
        lat: 10.576008,
        lng: 8.150956,
        state_id: 19
},

{
        name: 'Nwaorieubi',
        lat: 5.581818,
        lng: 7.016505,
        state_id: 17
},

{
        name: 'Umuneke-Ngor',
        lat: 5.335579,
        lng: 7.151869,
        state_id: 17
},

{
        name: 'Kiyawa',
        lat: 11.784422,
        lng: 9.606904,
        state_id: 18
},

{
        name: 'Bomadi',
        lat: 5.160727,
        lng: 5.923747,
        state_id: 10
},

{
        name: 'Ikot Akpa Nkuk',
        lat: 4.872307,
        lng: 7.564585,
        state_id: 3
},

{
        name: 'Mgboko',
        lat: 5.169552,
        lng: 7.358621,
        state_id: 1
},

{
        name: 'Kafur',
        lat: 11.645892,
        lng: 7.690677,
        state_id: 21
},

{
        name: 'Ikire',
        lat: 7.372414,
        lng: 4.187394,
        state_id: 30
},

{
        name: 'Kalgo',
        lat: 12.326664,
        lng: 4.2004,
        state_id: 22
},

{
        name: 'Wamba',
        lat: 8.941532,
        lng: 8.603154,
        state_id: 26
},

{
        name: 'Wamako',
        lat: 13.030541,
        lng: 5.104326,
        state_id: 34
},

{
        name: 'Minjibir',
        lat: 12.177652,
        lng: 8.657818,
        state_id: 20
}
]

function run() {
        citySchema.find({}, function (reject, resolve) {
                for (var i=0; resolve.length - 1; i++) {
                        //if (resolve[i].name )
                }
        })
}
