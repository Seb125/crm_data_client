import { useState, useEffect, useRef } from "react";
import databaseService from "../services/database.service";
import Chart from 'chart.js/auto';


function Campaigns() {
    const [campaigns, setCampaigns] = useState(null);
    const [labels, setLabels] = useState(null);
    const [delivered, setDelivered] = useState(null);
    const [sent, setSent] = useState(null);
    const [openedRate, setOpenedRate] = useState(null);
    const [clickedRate, setClickedRate] = useState(null);
    const [clabels, setCLabels] = useState(null);
    const [cdelivered, setCDelivered] = useState(null);
    const [csent, setCSent] = useState(null);
    const [copenedRate, setCOpenedRate] = useState(null);
    const [cclickedRate, setCClickedRate] = useState(null);
    const [checked, setChecked] = useState([false, false, false, false,false, false, false, false, false, false]);
    const chartContainer = useRef(null);


    useEffect(() => {
        const getData = async () => {
          const response = await databaseService.getData();
          setCampaigns(response.data.campaigns)
          setLabels(response.data.campaigns.map(el => {
            return el.campaign_name
          }));
          setDelivered(response.data.campaigns.map(el => {
            return el.details.count_delivered
          }));
          setSent(response.data.campaigns.map(el => {
            return el.details.count_sent
          }));
          setOpenedRate(response.data.campaigns.map(el => {
            return el.details.percent_open
          }));
          setClickedRate(response.data.campaigns.map(el => {
            return el.details.clicksperopenrate
          }));
          setCLabels(response.data.campaigns.map(el => {
            return el.campaign_name
          }));
          setCDelivered(delivered);
          setCSent(response.data.campaigns.map(el => {
            return el.details.count_sent
          }));
          setCOpenedRate(response.data.campaigns.map(el => {
            return el.details.percent_open
          }));
          setCClickedRate(response.data.campaigns.map(el => {
            return el.details.clicksperopenrate
          }));
        }
      
        getData();
      }, []);

      const handleSomething = async () => {
        try {
          
          console.log(clickedRate)
          console.log(openedRate)
          console.log(sent)
          console.log(delivered)
        } catch (error) {
          console.log(error)
        }
        
      }
      useEffect(() => {

          // Sample data (replace this with your dynamic data)
          const data = {
            labels: clabels,
            datasets: [
            {
                label: 'Öffnungsrate',
                data: copenedRate,
                borderColor: '#828dd7',
                backgroundColor: '#828dd7',
                pointStyle: 'triangle', // Set point style to triangle
                pointRadius: 8,
                type: 'line', // Line chart for Dataset 2
                yAxisID: 'y1',
                order: 2,
                
            },
            {
                label: 'Klickrate',
                data: cclickedRate,
                borderColor: '#abcfeb',
                backgroundColor: '#abcfeb',
                pointStyle: 'triangle', // Set point style to diamond
                pointRadius: 8,
                type: 'line', // Line chart for Dataset 2
                yAxisID: 'y1',
                order: 1
            },
                {
                label: 'Zugestellt',
                data: cdelivered,
                backgroundColor: '#3dd2da',
                borderColor: '#3dd2da',
                pointStyle: 'diamond', // Set point style to diamond
    pointRadius: 8,
                type: 'bar',
                yAxisID: 'y',
                order: 4
            },
            {
                label: 'Gesendet',
                data: csent,
                backgroundColor: '#f3d26a',
                borderColor: '#f3d26a',
                pointStyle: 'diamond', // Set point style to diamond
    pointRadius: 8,
                type: 'bar',
                yAxisID: 'y',
                order: 5
            }
            ]
        };
        // const klicks = [280, 290, 315, 336, 260]
        // let offnungsrate = [];
        // let klickrate = [];
        // data.datasets[3].data.forEach((element, index) => {
        //     if(data.datasets[2].data[index] != 0) offnungsrate.push(element/data.datasets[2].data[index])
        // });
        // data.datasets[0].data = offnungsrate;
    
        // data.datasets[3].data.forEach((element, index) => {
        //     console.log(element)
        //     if(element != 0) klickrate.push(klicks[index]/element)
        // })
        // data.datasets[1].data = klickrate;
    
    
        // console.log(klickrate)
    
        // Chart configuration
        const config = {
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        position: 'left',
                        
                    },
                    x:{ grid: {
                            drawOnChartArea: false, // Hide y-axis grid lines inside the chart area
                        }
                    },
                    y1: {
                        beginAtZero: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false, // Hide y-axis grid lines inside the chart area
                        }
                    },
                    
                },
            },
        };
        // Create a new chart
        let myChart
        if (chartContainer.current) {
            myChart = new Chart(chartContainer.current, config);
        }
        
       
        return () => {
            if(myChart) {
                myChart.destroy();
            }
            
          };
      }, [clabels, cclickedRate, copenedRate, csent, cdelivered])

    const handleCheck = (index) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = !updatedChecked[index];
        setChecked(updatedChecked)
    }
    const generateGraph = () => {
        let updatedDelivered = [...delivered];
        let updatedSent = [...sent];
        let updatedOpenedRate = [...openedRate];
        let updatedclickedRate = [...clickedRate];
        let updatedLabels = [...labels]
        const filterDelivered = updatedDelivered.filter((element, index) => {
            return checked[index]
        });
        const filterSent = updatedSent.filter((element, index) => {
            return checked[index]
        });
        const filterOpenedRate = updatedOpenedRate.filter((element, index) => {
            return checked[index]
        });
        const filterClickedRate = updatedclickedRate.filter((element, index) => {
            return checked[index]
        });
        const filterLabels = updatedLabels.filter((element, index) => {
            return checked[index]
        });
        setCDelivered(filterDelivered);
        setCSent(filterSent);
        setCOpenedRate(filterOpenedRate);
        setCClickedRate(filterClickedRate);
        setCLabels(filterLabels);

    }
    const download =() => {
        const canvas = document.getElementById('downloadChart');
        const image = canvas.toDataURL('image/png');
        console.log(image)
        const link = document.createElement('a');
        link.href = image;
        link.download = 'graph.png';
        link.click();
    }
    return (
    <div id="campaigns-table">
 {/* <button onClick={handleSomething}>HandleSomething</button> */}
{campaigns && <div className="table"> 
    
   
        <table className="tableContent" id="campaigns">
          <thead>
            <tr>
              <th className="column">Name</th>
              <th>Preview</th>
              <th>Gesendet</th>
              <th>Geliefert</th>
              <th>Geliefert_Prozent</th>
              <th>Öffnungsrate</th>
              <th>Klickrate</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={campaign.campaign_key}>
                <td className="column">{checked[index] ? <span className="box-unchecked" onClick={() => handleCheck(index)}>X</span> : <span className="box-unchecked" onClick={() => handleCheck(index)}></span>}{campaign.campaign_name}</td>
                <td><a href={`//${campaign.campaign_preview}`} target="_blank">Vorschau</a></td>
                <td>{campaign.details.count_sent}</td>
                <td>{campaign.details.count_delivered}</td>
                <td>{campaign.details.percent_delivered}</td>
                <td>{campaign.details.percent_open}</td>
                <td>{campaign.details.clicksperopenrate}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  <button onClick={generateGraph}>Plot generieren</button>
        {clabels && cclickedRate && copenedRate && csent && cdelivered && <canvas className="graph" id="downloadChart" ref={chartContainer} width="400" height="200"></canvas>}
        <button onClick={download}>Download pdf</button>
    </div>
  )
}

export default Campaigns