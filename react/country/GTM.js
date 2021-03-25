import { TWO_LEVELS } from '../constants'
import { secondLevelPostalCodes } from '../transforms/postalCodes'
import { getOneLevel, getTwoLevels } from '../transforms/addressFieldsOptions'

const countryData = {
  'Alta Verapaz': {
    '(Fray Bartolomé De Las Casas)': '16019',
    'Boloncho (Fray Bartolomé De Las Casas)': '16020',
    Cahabón: '16012',
    'Campur (San Pedro Carchá)': '16021',
    Chahal: '16014',
    Chisec: '16013',
    Cobán: '16001',
    'El Rosario': '16024',
    'Fray Bartolomé De Las Casas': '16015',
    'La Tinta (Panzós)': '16016',
    Lanquín: '16011',
    'Las Casas': '16022',
    'Las Conchas': '16025',
    'Pancajché (Tucurú)': '16018',
    Panzos: '16007',
    'Raxruha (Chisec)': '16026',
    Salacuín: '16023',
    'San Cristobal Verapaz': '16003',
    'San Juan Chamelco': '16010',
    'San Pedro Carchá': '16009',
    'Santa Cruz Verapaz': '16002',
    Senahú: '16008',
    Tactic: '16004',
    Tamahú: '16005',
    'Telemán (Panzós)': '16017',
    Tucurú: '16006',
  },
  'Baja Verapaz': {
    Cubulco: '15004',
    'El Chol': '15006',
    Granados: '15005',
    'La Canoa (Salama)': '15010',
    'Los Amates (El Chol)': '15009',
    Purulha: '15008',
    Rabinal: '15003',
    Salama: '15001',
    'Saltin (Granados)': '15011',
    'San Gabriel Pantzuy (S Miguel Chihaj)': '15012',
    'San Jeronimo': '15007',
    'San Miguel Chicaj': '15002',
  },
  Chimaltenango: {
    Acatenango: '4011',
    Chimaltenango: '4001',
    Comalapa: '4004',
    'El Tejar': '4016',
    Parramos: '4014',
    Patzicia: '4009',
    Patzun: '4007',
    Pochuta: '4008',
    'San Andres Itzapa': '4013',
    'San Jose Poaquil': '4002',
    'San Martin Jilotepeque': '4003',
    'Santa Apolonia': '4005',
    'Tecpan Guatemala': '4006',
    Yepocapa: '4012',
    Zaragoza: '4015',
  },
  Chiquimula: {
    'Agua Caliente (Esquipulas)': '20019',
    'Anguiatu (Concepcion Las Minas)': '20012',
    Camotán: '20005',
    Chiquimula: '20001',
    'Concepcion Las Minas': '20008',
    'El Amarillo (Jocotan)': '20013',
    'El Florido (Camotan)': '20014',
    Esquipulas: '20007',
    Ipala: '20011',
    Jocotán: '20004',
    'Nueva Anguiatu (Concepcion Las Minas)': '20020',
    Olopa: '20006',
    Quezaltepeque: '20009',
    'San Esteban (Chiquimula)': '20017',
    'San Jacinto': '20010',
    'San José La Arada': '20002',
    'San Juan La Hermita': '20003',
    'Santa Elena (Chiquimula)': '20015',
    'Tierra Colorada (San Jose La Arada)': '20018',
    'Vado Hondo (Chiquimula)': '20016',
  },
  'El Progreso': {
    'El Jicaro': '2005',
    'El Progreso': '2000',
    'El Rancho (San Agustin Acasaguastlan)': '2015',
    'Estacion Jalapa (Sansare)': '2010',
    'Estancia De La Virgen (San Cristobal Acasaguastlan)': '2012',
    Guastatoya: '2001',
    Morazan: '2002',
    'Paso De Los Jalapas (El Jicaro)': '2013',
    'San Agustin Acasaguastlan': '2003',
    'San Antonio La Paz': '2008',
    'San Cristobal Acasaguastlan': '2004',
    Sanarate: '2007',
    Sansare: '2006',
    'Santa Rita (Guastotoya)': '2014',
    'Tulumajillo (San Agustin Acasaguastlan)': '2009',
    'Tulunaje (San Agustin Acasaguastlan)': '2011',
  },
  Escuintla: {
    'Brito (Guanagazapa)': '5015',
    'Cuyuta (Masagua)': '5019',
    'El Naranjo (Masagua)': '5017',
    'El Porvenir (Tiquisata)': '5020',
    Escuintla: '5001',
    Iztapa: '5010',
    'La Democracia': '5003',
    'La Gomera': '5007',
    Masagua: '5005',
    'Nueva Concepcion': '5013',
    'Obero (Masagua)': '5014',
    Palin: '5011',
    'San Andres Osuna (Escuintla)': '5018',
    'San Jose': '5009',
    'San Vicente Pacaya': '5012',
    'Santa Ana Mixtan Nueva Concepcion)': '5016',
    'Santa Lucia Cotzumalguapa': '5002',
    'Sipacate (La Gomera)': '5021',
    Siquinala: '5004',
    Tiquisate: '5006',
  },
  Guatemala: {
    Amatitlan: '1063',
    'Boca Del Monte (Villa Canales)': '1069',
    'Canalitos (Zona 21)': '1067',
    Chinautla: '1055',
    Chuarrancho: '1061',
    'El Fiscal (Palencia)': '1068',
    Fraijanes: '1062',
    'Guatemala Zona 1': '1001',
    'Guatemala Zona 2': '1002',
    'Guatemala Zona 3': '1003',
    'Guatemala Zona 4': '1004',
    'Guatemala Zona 5': '1005',
    'Guatemala Zona 6': '1006',
    'Guatemala Zona 7': '1007',
    'Guatemala Zona 8': '1008',
    'Guatemala Zona 9': '1009',
    'Guatemala Zona 10': '1010',
    'Guatemala Zona 11': '1011',
    'Guatemala Zona 12': '1012',
    'Guatemala Zona 13': '1013',
    'Guatemala Zona 14': '1014',
    'Guatemala Zona 15': '1015',
    'Guatemala Zona 16': '1016',
    'Guatemala Zona 17': '1017',
    'Guatemala Zona 18': '1018',
    'Guatemala Zona 19': '1019',
    'Guatemala Zona 21': '1021',
    'Mixco (sin zona)': '1057',
    'Mixco Zona 1': '105701',
    'Mixco Zona 2': '105702',
    'Mixco Zona 3': '105703',
    'Mixco Zona 4': '105704',
    'Mixco Zona 5': '105705',
    'Mixco Zona 6': '105706',
    'Mixco Zona 7': '105707',
    'Mixco Zona 8': '105708',
    'Mixco Zona 9': '105709',
    'Mixco Zona 10': '105710',
    'Mixco Zona 11': '105711',
    Palencia: '1054',
    Petapa: '1066',
    'Puerta Parada (Santa Catarina Pinula)': '1073',
    'San Jose Del Golfo': '1053',
    'San Jose Pinula': '1052',
    'San Juan Sacatepequez': '1059',
    'San Pedro Ayampuc': '1056',
    'San Pedro Sacatepequez': '1058',
    'San Raymundo': '1060',
    'Santa Catarina Pinula': '1051',
    'Santa Elena Barillas (Villa Canales)': '1072',
    'Trapiche Grande (Chuarrancho)': '1071',
    'Villa Canales': '1065',
    'Villa Nueva (sin zona)': '1064',
    'Villa Nueva Zona 1': '106401',
    'Villa Nueva Zona 2': '106402',
    'Villa Nueva Zona 3': '106403',
    'Villa Nueva Zona 4': '106404',
    'Villa Nueva Zona 5': '106405',
    'Villa Nueva Zona 6': '106406',
    'Villa Nueva Zona 7': '106407',
    'Villa Nueva Zona 8': '106408',
    'Villa Nueva Zona 9': '106409',
    'Villa Nueva Zona 10': '106410',
    'Villa Nueva Zona 11': '106411',
    'Villa Nueva Zona 12': '106412',
    'Vuelta Grande (San Raymundo)': '1070',
  },
  Huehuetenango: {
    Aguacatán: '13027',
    Barillas: '13026',
    'Chalum (La Libertad)': '13040',
    Chiantla: '13002',
    Colotenango: '13019',
    Concepción: '13022',
    Cuilco: '13004',
    'Gracias A Dios (Nentón)': '13032',
    Huehuetenango: '13001',
    Ixtahuacán: '13009',
    Jacaltenango: '13007',
    'Juan Ixcoy': '13023',
    'La Democracia': '13012',
    'La Libertad': '13011',
    'La Mesilla': '13041',
    Malacatancito: '13003',
    'Michicoy (San Pedro Necta)': '13038',
    Nentón: '13005',
    'Paquix (Chiantla)': '13037',
    'Petatán (Concepción)': '13036',
    'San Andrés Huista (Jacaltenango)': '13039',
    'San Antonio Huista': '13024',
    'San Gaspar Ixchil': '13029',
    'San Juan Atitán': '13016',
    'San Lorenzo (Huehuetenango)': '13033',
    'San Marcos Huista (Jacaltenango)': '13035',
    'San Martín Cuchumatán (Todos Santos Cuchumatán)': '13034',
    'San Mateo Ixtatán': '13018',
    'San Miguel Acatán': '13013',
    'San Pedro Necta': '13006',
    'San Rafael La Independencia': '13014',
    'San Rafael Petzal': '13028',
    'San Sebastián Costán': '13025',
    'San Sebastián Huehuetenango': '13020',
    'Santa Ana Huista': '13031',
    'Santa Bárbara': '13010',
    'Santa Eulalia': '13017',
    'Santiago Chimaltenango': '13030',
    Soloma: '13008',
    Tectitán: '13021',
    'Todos Santos Cuchumatán': '13015',
  },
  Izabal: {
    'Bananera (Los Morales)': '18020',
    'Buenos Aires (Morales)': '18023',
    'Cayuga (Morales)': '18008',
    'El Cinchao (Puerto Barrios)': '18010',
    'El Estor': '18003',
    'El Mitchal (Morales)': '18014',
    'El Refugio (Los Amates)': '18016',
    'El Rico (Los Amantes)': '18007',
    'Entre Rios (Puerto Barrios)': '18012',
    'Fronteras (Livingston)': '18021',
    'Las Quebradas (Morales)': '18011',
    'Las Viñas (Morales)': '18015',
    Livingston: '18002',
    'Los Amates': '18005',
    'Mariscos (Los Amates)': '18022',
    Morales: '18004',
    'Playitas (Morales': '18006',
    'Puerto Barrios': '18001',
    'Quirigua (Los Amates)': '18009',
    'San Felipe (Livingston)': '18019',
    'Santa Ines (Los Amates)': '18017',
    'Santo Tomas De Castilla (Puerto Barrios)': '18013',
    'Tenedores (Morales)': '18018',
  },
  Jalapa: {
    Jalapa: '21001',
    'Llano Grande': '20008',
    Mataquescuintla: '21007',
    Monjas: '21006',
    'San Carlos Alzatate': '21005',
    'San Luis Jilotepeque': '21003',
    'San Manuel Chaparron': '21004',
    'San Pedro Pinula': '21002',
  },
  Jutiapa: {
    'Agua Blanca': '22004',
    'Asuncion Mita': '22005',
    Atescatempa: '22007',
    'Ciudad Pedro De Alvarado (Moyuta)': '22018',
    Comapa: '22011',
    Conguanco: '22013',
    'Contepeque (Atescatempa)': '22024',
    'El Adelanto': '22009',
    'El Ovejero (El Progreso)': '22023',
    'El Progreso': '22002',
    'Horcones (Atescatempa)': '22026',
    'Horcones (Sta Cat Mita)': '22022',
    Jalpatagua: '22012',
    Jeres: '22008',
    Jutiapa: '22001',
    'La Esmeralda Jerez': '22025',
    Moyuta: '22014',
    Pasaco: '22015',
    Quesada: '22017',
    'Rio De Paz': '22021',
    'San Cristobal Frontera (Atescatempa)': '22019',
    'San Jose Acatempa': '22016',
    'Santa Catarina Mita': '22003',
    'Tiucal (Asuncion Mita)': '22027',
    'Valle Nuevo Jalpatagua': '22020',
    Yupiltepeque: '22006',
    Zapotitlan: '22010',
  },
  Peten: {
    'Carmelita (San Andres)': '17018',
    Dolores: '17008',
    'Dos Lagunas (Flores)': '17014',
    'El Chal (Dolores)': '17020',
    'El Naranjo (La Libertad)': '17024',
    'El Remate (Flores)': '17022',
    Flores: '17001',
    'La Felicidad (Sayaxche)': '17023',
    'La Libertad': '17005',
    'Las Cruces (La Libertad)': '17027',
    'Macache (Dolores)': '17021',
    'Machaquila (Dolores)': '17019',
    'Melchor de Mencos': '17011',
    'Paso Caballos (San Andres)': '17016',
    'Paxcaman (Flores)': '17026',
    Poptún: '17012',
    'Sabaneta (Dolores)': '17028',
    'Sacpuy (San Andres)': '17025',
    'San Andres': '17004',
    'San Benito': '17003',
    'San Francisco': '17006',
    'San Jose': '17002',
    'San Luis': '17009',
    'Santa Ana': '17007',
    'Santa Elena': '17029',
    'Santo Toribio (Dolores)': '17015',
    Sayaxche: '17010',
    'Tikal (Flores)': '17013',
    'Uaxactun (Flores)': '17017',
  },
  Quetzaltenango: {
    Almolonga: '9013',
    Cabrican: '9006',
    Cajola: '9007',
    Cantel: '9014',
    'Chiquibal (San Carlos Sija)': '9026',
    'Chuatuj (San Carlos Sija)': '9031',
    Coatepeque: '9020',
    Colomba: '9017',
    'Concepcion Chiquirichapa': '9011',
    'Cuicalba(sibilia)': '9028',
    'El Eden (Palestina De Los Altos)': '9030',
    'El Palmar': '9019',
    'El Tambor (El Palmar)': '9032',
    'Flores Costa Cuca': '9022',
    Genova: '9021',
    Huitla: '9015',
    'La Esperanza': '9023',
    'Las Mercedes (Colomba)': '9033',
    'Las Palmas Coatepeque': '9027',
    Olintepeque: '9003',
    Ostuncalco: '9009',
    'Palestina De Los Altos': '9024',
    'Palmira (Colomba)': '9034',
    Quetzaltenango: '9001',
    Salcaja: '9002',
    'San Carlos Sija': '9004',
    'San Francisco La Union': '9018',
    'San Jose Chiquilaja(quetzaltenango)': '9029',
    'San Martin Sacatepequez': '9012',
    'San Mateo': '9010',
    'San Miguel Siguila': '9008',
    'Santa Maria De Jesus (Zunil)': '9025',
    Sibilia: '9005',
    Zunil: '9016',
  },
  Quiche: {
    Canilla: '14018',
    Cantabal: '14023',
    Chajul: '14005',
    Chicaman: '14020',
    Chichicastenango: '14006',
    Chinique: '14003',
    Cunen: '14010',
    Joyabaj: '14012',
    Nebaj: '14013',
    Pachalum: '14022',
    Patzite: '14007',
    'Playa Grande (Ixcan)': '14019',
    Quiche: '14002',
    Sacapulas: '14016',
    'San Andres Sajcabaja': '14014',
    'San Antonio Llotenango': '14008',
    'San Bartolome Jocotenango': '14017',
    'San Jose La 20 (Uspantan)': '14024',
    'San Juan Cotzal': '14011',
    'San Pedro Jocopilas': '14009',
    'Santa Cruz Del Quiche': '14001',
    'Santa Rosa Chujuyub (Santa Cruz Delquiche)': '14021',
    Uspantan: '14015',
    Xacbal: '14025',
    Zacualpa: '14004',
  },
  Retalhuleu: {
    'Caballo Blanco (Retalhuelu)': '11010',
    'Candelaria Xolhuitz (Nvo. Sn. Carlos)': '11011',
    Champerico: '11007',
    'El Asintal': '11009',
    'El Xab (El Asintal)': '11013',
    'La Máquina(sn. Andrés Villa Seca)': '11014',
    'Nuevo San Carlos': '11008',
    'Retalhuleu (Cabecera Deptal.)': '11001',
    'San Andrés Villa Seca': '11006',
    'San Felipe': '11005',
    'San Martín Zapotitlán': '11004',
    'San Sebastián': '11002',
    'Santa Crúz Mulua': '11003',
    'Sinavba (El Asintal)': '11012',
  },
  Sacatepequez: {
    Alotenango: '3014',
    'Antigua Guatemala': '3001',
    'Ciudad Vieja': '3012',
    Jocotenango: '3002',
    'Magdalena Milpas Altas': '3010',
    Pastores: '3003',
    Sacatepequez: '3000',
    'San Antonio Aguas Calientes': '3015',
    'San Bartolome Milpas Altas': '3007',
    'San Lucas Sacatepequez': '3008',
    'San Miguel Dueñas': '3013',
    'Santa Catarina Barahona': '3016',
    'Santa Lucia Milpas Altas': '3009',
    'Santa Maria Cauque (Santiago Sacatepequez)': '3017',
    'Santa Maria De Jesus': '3011',
    'Santiago Sacatepequez': '3006',
    'Santo Domingo Xenacoj': '3005',
    Sumpango: '3004',
  },
  'San Marcos': {
    'Calapte (Ixchiguan)': '12044',
    Catarina: '12016',
    'Champollap (San Pedro Sac)': '12047',
    Comitancillo: '12004',
    'Concepcion Tutuapa': '12006',
    'El Amparo (El Tumbador)': '12036',
    'El Carmen (Malacatan)': '12030',
    'El Ciclo (El Tumbador)': '12040',
    'El Quetzal': '12020',
    'El Rodeo': '12014',
    'El Sitio (Catarina)': '12050',
    'El Tumbador': '12013',
    'Esquipulas Palo Gordo': '12027',
    Ixchiguan: '12023',
    'La Blanca (Ocos)': '12039',
    'La Conquista (Nuevo Progreso)': '12046',
    'La Democracia (El Tumbador)': '12034',
    'La Reforma': '12021',
    'Las Delicias (El Tumbador)': '12043',
    'Los Limines (Ocos)': '12038',
    Malacatan: '12015',
    'Nuevo Progreso': '12012',
    Ocos: '12018',
    Pajapita: '12022',
    'Piedra Grande (San Pedro Grande)': '12048',
    'Platanares (Ocos)': '12042',
    'Rio Blanco': '12028',
    'San Antonio Sacatepequez': '12003',
    'San Critobal Cucho': '12025',
    'San Francisco (El Rodeo)': '12035',
    'San Jeronimo (El Tumbedor)': '12032',
    'San Jose Ixtal (Nuevo Progreso)': '12041',
    'San Jose Ojotepan': '12024',
    'San Lorenzo': '12029',
    'San Marcos': '12001',
    'San Miguel Ixtaguacan': '12005',
    'San Pablo': '12019',
    'San Pedro Sacatepequez': '12002',
    'San Rafael Pie De La Cuesta': '12011',
    'San Sebastian (San Marcos)': '12037',
    'Santa Luicia Ixtacamal (San Marcos)': '12049',
    Sibinal: '12008',
    Sipacana: '12026',
    'Srchil (San Marcos)': '12033',
    Tajumulco: '12009',
    Tanaca: '12007',
    Tejutla: '12010',
    'Tocahe (San Pablo)': '12045',
    'Tocun Uman': '12017',
    'Zanjon San Lorenzo (Tecun Uman)': '12031',
  },
  'Santa Rosa': {
    'Ayarza(casillas)': '6018',
    Barberena: '6002',
    'Casas Viejas (Chiquimulilla)': '6017',
    Casillas: '6004',
    'Cerro Gordo (Santa Rosa De Lima)': '6027',
    Chiquimulilla: '6008',
    Cuilapa: '6001',
    'El Ahumado (Chiquimulilla)': '6015',
    'El Molino (Cuilapa)': '6019',
    'El Rinconcito (Santa Rosa De Lima)': '6026',
    'El Serinal (Barberena)': '6023',
    Guazacapan: '6011',
    'Los Cerritos (Chiquimulilla)': '6016',
    'Los Esclavos (Cuilapa)': '6022',
    'Monterico (Taxisco)': '6024',
    'Nancinta (Chiquimulilla)': '6020',
    'Nueva Santa Rosa': '6014',
    Oratorio: '6006',
    'Publo Nuevo Viñas': '6013',
    'San Juan De Arana (Cuilapa)': '6025',
    'San Juan Tecuaco': '6007',
    'San Miguel Aroche (Chuiquimulilla)': '6021',
    'San Rafael Las Flores': '6005',
    'Santa Cruz Naranjo': '6012',
    'Santa Maria Ixhuatan': '6010',
    'Santa Rosa De Lima': '6003',
    Taxisco: '6009',
  },
  Solola: {
    'Agua Escondida (San Antonio Palopó)': '7022',
    'Argueta (Sololá)': '7023',
    Concepción: '7008',
    'Godínez (San Andrés Semetabaj)': '7021',
    'Los Encuentros Sololá': '7020',
    Nahualá: '7005',
    Panajachel: '7010',
    'Pixbaj (Sololá)': '7024',
    'San Andrés Semetabaj': '7009',
    'San Antonio Palopó': '7012',
    'San José Chacaya': '7002',
    'San Juan La Laguna': '7017',
    'San Lucas Tolimán': '7013',
    'San Marcos La Laguna': '7016',
    'San Pablo La Laguna': '7015',
    'San Pedro La Laguna': '7018',
    'Santa Catarina Ixtahuacán': '7006',
    'Santa Catarina Palopó': '7011',
    'Santa Clara La Laguna': '7007',
    'Santa Cruz La Laguna': '7014',
    'Santa Lucía Utatlán': '7004',
    'Santa María Visitación': '7003',
    'Santiago Atitlán': '7019',
    Sololá: '7001',
  },
  Suchitepequez: {
    'Bolivia (Santo Domingo Suchi)': '10028',
    'Bracitos (Mazatenango)': '10027',
    Chicacao: '10013',
    'Chocola (San Pablo Jocopilas)': '10022',
    'Cocales (Patutul)': '10021',
    Cuyotenango: '10002',
    'Guatalon (Rio Bravo)': '10024',
    'La Maquina (Cuyotenango)': '10030',
    Mazatenango: '10001',
    'Monterrey (Santo Domingo Suchi)': '10029',
    'Palo Gordo (San Antonio Suchi)': '10025',
    Patulul: '10014',
    'Pueblo Nuevo': '10019',
    'Rio Bravo': '10020',
    Samayao: '10008',
    'San Antonio Suchitepequez': '10010',
    'San Bernardino': '10004',
    'San Francisco Zapatitlan': '10003',
    'San Gebriel': '10012',
    'San Jose El Idolo': '10005',
    'San Juan Bautista': '10016',
    'San Lorenzo': '10007',
    'San Miguel Panan': '10011',
    'San Pablo Jocopilas': '10009',
    'San Rafael Panan (Santa Barbara)': '10026',
    'Santa Barbara': '10015',
    'Santo Domingo Suchitepequez': '10006',
    'Santo Tomas La Union': '10017',
    'Tahuexco (Mazatenango)': '10023',
    Zunulito: '10018',
  },
  Totonicapan: {
    Momostenango: '8005',
    'San Andres Xecul': '8004',
    'San Bartolo': '8008',
    'San Cristobal Totonicapan': '8002',
    'San Francisco El Alto': '8003',
    'Santa Lucia La Reforma': '8007',
    'Santa Maria Chiquimula': '8006',
    Totonicapan: '8001',
  },
  Zacapa: {
    Cabañas: '19007',
    Estanzuela: '19002',
    Gualan: '19004',
    Huite: '19010',
    'La Fragua': '19016',
    'La Reforma (Huite)': '19011',
    'La Union': '19009',
    'Rio Ondo': '19003',
    'San Diego': '19008',
    'San Jorge Zacapa)': '19013',
    'San Jose (Teculutan)': '19012',
    'San Pablo (Zacapa)': '19017',
    'San Vicente (Cabañas)': '19018',
    'Santa Lucia (Zacapa)': '19015',
    'Santa Rosalia (Zacapa)': '19014',
    Teculutan: '19005',
    Usumatlan: '19006',
    Zacapa: '19001',
  },
}

export default {
  country: 'GTM',
  abbr: 'GT',
  postalCodeFrom: TWO_LEVELS,
  postalCodeLevels: ['state', 'city'],
  secondLevelPostalCodes: secondLevelPostalCodes(countryData),
  fields: [
    {
      hidden: true,
      name: 'country',
      maxLength: 100,
      label: 'country',
      size: 'medium',
    },
    {
      autoComplete: 'nope',
      hidden: true,
      label: 'postalCode',
      maxLength: 50,
      name: 'postalCode',
      postalCodeAPI: false,
      required: true,
      regex: /^[\d]{4,6}$/,
      size: 'small',
    },
    {
      name: 'state',
      maxLength: 100,
      label: 'department',
      required: true,
      size: 'xlarge',
      level: 1,
      options: getOneLevel(countryData),
    },
    {
      name: 'city',
      maxLength: 100,
      label: 'municipality',
      required: true,
      size: 'xlarge',
      level: 2,
      basedOn: 'state',
      optionsMap: getTwoLevels(countryData),
    },
    {
      hidden: true,
      name: 'neighborhood',
      maxLength: 100,
      label: 'neighborhood',
      size: 'large',
    },
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      hidden: true,
      name: 'number',
      maxLength: 750,
      label: 'number',
      size: 'small',
      autoComplete: 'nope',
    },
    {
      hidden: true,
      name: 'complement',
      maxLength: 750,
      label: 'complement',
      size: 'large',
    },
    {
      hidden: true,
      name: 'reference',
      maxLength: 750,
      label: 'reference',
      size: 'xlarge',
    },
    {
      name: 'receiverName',
      elementName: 'receiver',
      maxLength: 750,
      label: 'receiverName',
      size: 'xlarge',
      required: true,
    },
  ],
  geolocation: {
    postalCode: {
      valueIn: 'long_name',
      types: ['postal_code'],
      required: true,
    },
    number: {
      valueIn: 'long_name',
      types: ['street_number'],
      required: true,
      notApplicable: true,
    },
    street: { valueIn: 'long_name', types: ['route'] },
    neighborhood: {
      valueIn: 'long_name',
      types: ['neighborhood'],
    },
    state: {
      valueIn: 'long_name',
      types: ['administrative_area_level_1'],
    },
    city: {
      valueIn: 'long_name',
      types: ['administrative_area_level_2', 'locality'],
    },
  },
  summary: [
    [
      { name: 'street' },
      { delimiter: ' ', name: 'number' },
      { delimiter: ', ', name: 'complement' },
    ],
    [
      { name: 'neighborhood', delimiterAfter: ' - ' },
      { name: 'city' },
      { delimiter: ' - ', name: 'state' },
    ],
    [{ name: 'postalCode' }],
  ],
}
