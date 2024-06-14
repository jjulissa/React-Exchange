import './App.css'; 
import React, {useState} from 'react'; 
import Footer from './Componente/Footer/Footer.jsx';


function App() { 

  const [resultado, setResultado] = useState(1); 

  const [inputValue, setInputValue] = useState(""); 

  const [selectedValue, setSelectedValue] = useState(''); 

  const [selectedResult, setSelectedResult] = useState('');
  
  const handleInputChange = (event) => { 
    setInputValue(event.target.value); 

  } 

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };  

  const handleChang = (event) => {
    setSelectedResult(event.target.value);
  }; 

    const click = () => { 

      const API = "330c31f9527d296a04ccd85d"; 
      const URL = `https://v6.exchangerate-api.com/v6/${API}/pair/${selectedValue}/${selectedResult}/${inputValue}`;

        fetch(URL)
          .then(response => response.json())
          .then(data => 
            { 
              setResultado(data); 
              console.log(data.conversion_rate);
              console.log(data.conversion_result)
            })
          .catch(error => 
            { 
              console.log("Error") 
              
          })  
    }

  return ( 

    <> 

      <div className="App"> 
        <h1> Converter  </h1> 

        <div className='valor'> 
          <input 
            type="number" name="numero" 
            placeholder="Ingrese el valor ???"
            id="numero" value={inputValue} 
            onChange={handleInputChange} 
          /> 
          <select name="select" value={selectedValue} onChange={handleChange}> 
            <option value="">Seleccione una opción</option>
            <option value="GBP">Libra esterlina</option>
            <option value="FKP">Libra de las Islas Malvinas</option>
            <option value="GTQ">Guatemala quetzal</option> 
            <option value="HKD">Dolar de Hong Kong</option> 
            <option value="USD">Dólar de los Estados Unidos</option> 
            <option value="HUF">Florín húngaro</option> 
            <option value="IQD">Dinar iraquí</option> 
            <option value="IRR">Rial iraní</option> 
            <option value="KMF">Comoras Franco</option> 
            <option value="KRW">Corea del Sur ganó</option> 
            <option value="ALL">Lek albanés</option> 
            <option value="BDT">Bangladesh Taka</option>  
            <option value="AWG">Florin Aruba</option> 
            <option value="BRL">Real brasileño</option>
            <option value="BCH">Bitcoin Cash</option> 
            <option value="BTC">Bitcoin</option> 
            <option value="AED">Dírham de los Emiratos Árabes Unidos</option> 
            <option value="AOA">Angola kwanza</option> 
            <option value="BSD">Dólar de las Bahamas</option> 
            <option value="CLP">Peso chileno</option> 
            <option value="BYN">Rublo bielorruso</option> 
            <option value="COP">Peso colombiano</option> 
            <option value="CUP">Peso cubano</option> 
            <option value="ECS">Sucre ecuatoriano</option> 
            <option value="ETH">Etereum</option> 
            <option value="EUR">Euro</option>
            <option value="HNL">Lempira hondureño</option> 
            <option value="GMD">Dalasi de Gambia</option> 
            <option value="GIP">Libra de Gibraltar</option> 
            <option value="HTG">Gourde haitiano</option> 
            <option value="JOD">Dinar jordano</option> 
            <option value="JPY">Yen japonés</option> 
            <option value="AFN">Afgani de Afganistán</option> 
            <option value="BBD">dólar de Barbados</option> 
            <option value="BMD">Dólar de Bermudas</option> 
            <option value="AMD">Dram armenio</option> 
            <option value="CHF">Franco suizo</option> 
            <option value="DJF">Franco de Yibuti</option>
            <option value="DOP">Peso dominicano</option> 
            <option value="CVE">Escudo caboverdiano</option> 
            <option value="GEL">Lari georgiano</option> 
            <option value="GHS">Cedi de Ghana</option> 
            <option value="GYD">Dólar de Guyana</option> 
            <option value="ILS">Shekel israelí</option> 
            <option value="INR">Rupia india</option> 
            <option value="ISK">Corona islandesa</option> 
            <option value="KHR">Riel camboyano</option> 
            <option value="KES">Chelín keniano</option> 
            <option value="KWD">Dinar kuwaití</option> 
            <option value="KZT">Tenge kazajo</option>
            <option value="LKR">Rupia de Sri Lanka</option> 
            <option value="MAD">Dirham marroquí</option> 
            <option value="MMK">Kyat birmano</option> 
            <option value="MNT">Mongolia Tugrik</option> 
            <option value="MUR">Rupia de Mauricio</option> 
            <option value="MRO">Mauritania ouguiya</option> 
            <option value="Rufiyaa de Maldivas">Rufiyaa de Maldivas</option> 
            <option value="MWK">Kwacha de Malawi</option> 
            <option value="NZD">Dolar de Nueva Zelanda</option> 
            <option value="NPR">Rupia de Nepal</option> 
            <option value="PHP">Peso filipino</option> 
            <option value="PKR">Rupia paquistaní</option>
            <option value="RWF">Ruanda franco</option> 
            <option value="LTC">Litecoin</option> 
            <option value="MXN">Peso méxico</option> 
            <option value="NIO">Córdoba</option> 
            <option value="RON">Leu rumano</option> 
            <option value="KPW">Won de Corea del Norte</option> 
            <option value="KYD">Dólar de las Islas Caimán</option> 
            <option value="LBP">Libra libanesa</option> 
            <option value="LYD">Dinar libio</option> 
            <option value="LAK">Kip lao</option> 
            <option value="MGA">Ariary malgache</option> 
            <option value="LRD">Dólar liberiano</option>
            <option value="MKD">Denar macedonio</option> 
            <option value="LSL">Loti de Lesotho</option> 
            <option value="MOP">Pataca de Macao</option> 
            <option value="MDL">Leu moldavo</option> 
            <option value="NAD">Dólar de Namibia</option> 
            <option value="MYR">Ringgit malayo</option> 
            <option value="OMR">Rial de Omán</option> 
            <option value="NGN">Naira Nigeria</option> 
            <option value="PGK">Papua Nueva Guinea Kina</option> 
            <option value="PAB">Balboa panameño</option> 
            <option value="PEN">Sol peruano</option> 
            <option value="NOK">Corona noruega</option>
            <option value="PLN">Zloty polaco</option> 
            <option value="PYG">Guaraní paraguayo</option> 
            <option value="QAR">Rial qatarí</option> 
            <option value="SBD">Dólar de las Islas Salomón</option> 
            <option value="SAR">Riyal saudí</option> 
            <option value="SGD">Dolar de Singapur</option> 
            <option value="SLL">Leone de Sierra Leona</option> 
            <option value="THB">Baht tailandés</option> 
            <option value="TWD">Dólar de Taiwán</option> 
            <option value="UAH">Hryvnia Ucrania</option> 
            <option value="UGX">Shilling de Uganda</option> 
            <option value="SRD">Dólar de Surinam</option>
            <option value="STD">Santo Tomé y Príncipe dobra</option> 
            <option value="TRY">Lira turca</option> 
            <option value="TTD">Trinidad</option> 
            <option value="TOP">Pa'anga tongano</option> 
            <option value="UZS">Som uzbekistani</option> 
            <option value="YER">Rial yemení</option> 
            <option value="ZAR">Rand sudafricano</option> 
            <option value="RSD">Dinar serbio</option> 
            <option value="RUB">Rublo ruso</option> 
            <option value="SOS">Chelín somalí</option> 
            <option value="SVC">Colón salvadoreño</option> 
            <option value="SYP">Libra Siria</option>
            <option value="SZL">Swazilandia Lilangeni</option> 
            <option value="TND">Dinar tunecino</option> 
            <option value="UYU">Peso uruguayo</option> 
            <option value="VND">Dong vietnamita</option> 
            <option value="VUV">Vanuatu Vatu</option> 
            <option value="WST">Samoan Tala</option> 
            <option value="XAF">Franco CFA</option> 
            <option value="XCD">Dólar del Caribe Oriental</option> 
            <option value="SCR">Rupia de Seychelles</option> 
            <option value="SEK">Corona sueca</option> 
            <option value="SHP">Saint Helena Libra</option> 
            <option value="TZS">Shilling tanzano</option> 
            <option value="XPF">Franco CFP</option> 
            <option value="XOF">Franco CFA de África Occidental</option> 
          </select>

        </div> 

        <div className='valor'> 
          <input 
            type="text" 
            value={resultado.conversion_result} 
          /> 

          <select name="resultado" value={selectedResult} onChange={handleChang}>
            <option value="">Seleccione una opción</option>
            <option value="GBP">Libra esterlina</option>
            <option value="FKP">Libra de las Islas Malvinas</option>
            <option value="GTQ">Guatemala quetzal</option> 
            <option value="HKD">Dolar de Hong Kong</option> 
            <option value="USD">Dólar de los Estados Unidos</option> 
            <option value="HUF">Florín húngaro</option> 
            <option value="IQD">Dinar iraquí</option> 
            <option value="IRR">Rial iraní</option> 
            <option value="KMF">Comoras Franco</option> 
            <option value="KRW">Corea del Sur ganó</option> 
            <option value="ALL">Lek albanés</option> 
            <option value="BDT">Bangladesh Taka</option>  
            <option value="AWG">Florin Aruba</option> 
            <option value="BRL">Real brasileño</option>
            <option value="BCH">Bitcoin Cash</option> 
            <option value="BTC">Bitcoin</option> 
            <option value="AED">Dírham de los Emiratos Árabes Unidos</option> 
            <option value="AOA">Angola kwanza</option> 
            <option value="BSD">Dólar de las Bahamas</option> 
            <option value="CLP">Peso chileno</option> 
            <option value="BYN">Rublo bielorruso</option> 
            <option value="COP">Peso colombiano</option> 
            <option value="CUP">Peso cubano</option> 
            <option value="ECS">Sucre ecuatoriano</option> 
            <option value="ETH">Etereum</option> 
            <option value="EUR">Euro</option>
            <option value="HNL">Lempira hondureño</option> 
            <option value="GMD">Dalasi de Gambia</option> 
            <option value="GIP">Libra de Gibraltar</option> 
            <option value="HTG">Gourde haitiano</option> 
            <option value="JOD">Dinar jordano</option> 
            <option value="JPY">Yen japonés</option> 
            <option value="AFN">Afgani de Afganistán</option> 
            <option value="BBD">dólar de Barbados</option> 
            <option value="BMD">Dólar de Bermudas</option> 
            <option value="AMD">Dram armenio</option> 
            <option value="CHF">Franco suizo</option> 
            <option value="DJF">Franco de Yibuti</option>
            <option value="DOP">Peso dominicano</option> 
            <option value="CVE">Escudo caboverdiano</option> 
            <option value="GEL">Lari georgiano</option> 
            <option value="GHS">Cedi de Ghana</option> 
            <option value="GYD">Dólar de Guyana</option> 
            <option value="ILS">Shekel israelí</option> 
            <option value="INR">Rupia india</option> 
            <option value="ISK">Corona islandesa</option> 
            <option value="KHR">Riel camboyano</option> 
            <option value="KES">Chelín keniano</option> 
            <option value="KWD">Dinar kuwaití</option> 
            <option value="KZT">Tenge kazajo</option>
            <option value="LKR">Rupia de Sri Lanka</option> 
            <option value="MAD">Dirham marroquí</option> 
            <option value="MMK">Kyat birmano</option> 
            <option value="MNT">Mongolia Tugrik</option> 
            <option value="MUR">Rupia de Mauricio</option> 
            <option value="MRO">Mauritania ouguiya</option> 
            <option value="Rufiyaa de Maldivas">Rufiyaa de Maldivas</option> 
            <option value="MWK">Kwacha de Malawi</option> 
            <option value="NZD">Dolar de Nueva Zelanda</option> 
            <option value="NPR">Rupia de Nepal</option> 
            <option value="PHP">Peso filipino</option> 
            <option value="PKR">Rupia paquistaní</option>
            <option value="RWF">Ruanda franco</option> 
            <option value="LTC">Litecoin</option> 
            <option value="MXN">Peso méxico</option> 
            <option value="NIO">Córdoba</option> 
            <option value="RON">Leu rumano</option> 
            <option value="KPW">Won de Corea del Norte</option> 
            <option value="KYD">Dólar de las Islas Caimán</option> 
            <option value="LBP">Libra libanesa</option> 
            <option value="LYD">Dinar libio</option> 
            <option value="LAK">Kip lao</option> 
            <option value="MGA">Ariary malgache</option> 
            <option value="LRD">Dólar liberiano</option>
            <option value="MKD">Denar macedonio</option> 
            <option value="LSL">Loti de Lesotho</option> 
            <option value="MOP">Pataca de Macao</option> 
            <option value="MDL">Leu moldavo</option> 
            <option value="NAD">Dólar de Namibia</option> 
            <option value="MYR">Ringgit malayo</option> 
            <option value="OMR">Rial de Omán</option> 
            <option value="NGN">Naira Nigeria</option> 
            <option value="PGK">Papua Nueva Guinea Kina</option> 
            <option value="PAB">Balboa panameño</option> 
            <option value="PEN">Sol peruano</option> 
            <option value="NOK">Corona noruega</option>
            <option value="PLN">Zloty polaco</option> 
            <option value="PYG">Guaraní paraguayo</option> 
            <option value="QAR">Rial qatarí</option> 
            <option value="SBD">Dólar de las Islas Salomón</option> 
            <option value="SAR">Riyal saudí</option> 
            <option value="SGD">Dolar de Singapur</option> 
            <option value="SLL">Leone de Sierra Leona</option> 
            <option value="THB">Baht tailandés</option> 
            <option value="TWD">Dólar de Taiwán</option> 
            <option value="UAH">Hryvnia Ucrania</option> 
            <option value="UGX">Shilling de Uganda</option> 
            <option value="SRD">Dólar de Surinam</option>
            <option value="STD">Santo Tomé y Príncipe dobra</option> 
            <option value="TRY">Lira turca</option> 
            <option value="TTD">Trinidad</option> 
            <option value="TOP">Pa'anga tongano</option> 
            <option value="UZS">Som uzbekistani</option> 
            <option value="YER">Rial yemení</option> 
            <option value="ZAR">Rand sudafricano</option> 
            <option value="RSD">Dinar serbio</option> 
            <option value="RUB">Rublo ruso</option> 
            <option value="SOS">Chelín somalí</option> 
            <option value="SVC">Colón salvadoreño</option> 
            <option value="SYP">Libra Siria</option>
            <option value="SZL">Swazilandia Lilangeni</option> 
            <option value="TND">Dinar tunecino</option> 
            <option value="UYU">Peso uruguayo</option> 
            <option value="VND">Dong vietnamita</option> 
            <option value="VUV">Vanuatu Vatu</option> 
            <option value="WST">Samoan Tala</option> 
            <option value="XAF">Franco CFA</option> 
            <option value="XCD">Dólar del Caribe Oriental</option> 
            <option value="SCR">Rupia de Seychelles</option> 
            <option value="SEK">Corona sueca</option> 
            <option value="SHP">Saint Helena Libra</option> 
            <option value="TZS">Shilling tanzano</option> 
            <option value="XPF">Franco CFP</option> 
            <option value="XOF">Franco CFA de África Occidental</option>
          </select>
        </div>  

        <h3>1 {selectedValue} es igual a {resultado.conversion_rate} {selectedResult}</h3>


        <button id='enviar' onClick={click}>Enviar</button>  

        <h1>{resultado.conversion_result} {selectedResult}</h1> 
      
      </div> 
      <Footer />

    </>
  );
} 

export default App;


