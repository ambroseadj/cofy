import React, { useEffect, useState } from 'react';
import './HomeMainbar.css'

function HomeMainbar() {
  const [data, setData] = useState([]);
  const [sector, setSelectedSector] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedPestle, setSelectedPestle]= useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data') 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data)})
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const filteredData = data.filter((item) => {
    const sectorMatch = !sector || item.sector === sector;
    const topicsMatch = selectedTopics.length === 0 || selectedTopics.includes(item.topic);
    const regionMatch = !selectedRegion || item.region === selectedRegion;
    const pestleMatch = !selectedPestle || item.pestle === selectedPestle;
    return sectorMatch && topicsMatch && regionMatch && pestleMatch;
  });

  const allTopics = [...new Set(data.map((item) => item.topic))];
  const allRegions = [...new Set(data.map((item) => item.region))];
  const allPestle = [...new Set(data.map((item) => item.pestle))];
  const allSector=[...new Set(data.map((item) => item.sector))];


  const uniqueCountries= [...new Set(filteredData
    .filter((item)=> item.country)
    .map(item => item.country))];


  const handleTopicChange = (selected) => setSelectedTopics(selected);
  const handleRegionChange = (selected) => setSelectedRegion(selected);
    const handlePestleChange=(selected) => setSelectedPestle(selected);
    const handleSectorChange=(selected) => setSelectedSector(selected);


  return (
    <div className='HomeMainbar'>
      <h1 style={{textAlign:'center',fontSize:'24px',textDecoration:'underline'}} > SEARCH YOUR COUNTRY</h1>
      <div>
        <label>sector: </label>
        <select value={sector} onChange={(e) =>handleSectorChange(e.target.value)}>
        {allSector.map((sector) =>(
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
        </select>
      </div>
      <div>
        <label>Topics: </label>
        <select value={selectedTopics} onChange={(e) => handleTopicChange(e.target.value)}>
          {allTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Region: </label>
        <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)}>
          <option value="">All</option>
          {allRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

    <label>pestle:</label>
    <select value={selectedPestle} onChange={(e) => handlePestleChange(e.target.value)}>
    <option value="">All</option>
    {allPestle.map((pestle)=>(
      <option key={pestle} value={pestle}>{pestle}</option>))

    }

    </select>
      <ul>
        {[...uniqueCountries]
        
        .map(country => (
        
      
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}


export default HomeMainbar;
