import { useState, useEffect } from 'react';
import './Teams.scss';
import Header from '../common/Header/Header';

const Teams = () => {
  const [glitchIndex, setGlitchIndex] = useState(-1);
  
  const teams = [
    { name: "Placeholder team 1", project: "Placeholder Project 1" },
    { name: "Placeholder team 2", project: "Placeholder Project 2" },
    { name: "Placeholder team 3", project: "Placeholder Project 3" },
    { name: "Placeholder team 4", project: "Placeholder Project 4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * teams.length);
      setGlitchIndex(randomIndex);
      
      setTimeout(() => {
        setGlitchIndex(-1);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="teams-container">
      <Header>Finalists</Header>
      
      <div className="table-container">
        
        <div className="table-wrapper">
          <table className="teams-table">
            <thead>
              <tr>
                <th>TEAM NAME</th>
                <th>PROJECT</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr 
                  key={team.name}
                  className={glitchIndex === index ? 'glitch-effect' : ''}
                >
                  <td className="team-name">{team.name}</td>
                  <td className="project-name">{team.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="gradient-border"></div>
      </div>
    </div>
  );
}

export default Teams;