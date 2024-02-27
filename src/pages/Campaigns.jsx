import { useState, useEffect, useRef } from "react";
import databaseService from "../services/database.service";
import Chart from "chart.js/auto";
import html2canvas from "html2canvas";


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
  const [opened, setOpened] = useState(null);
  const [copened, setCOpened] = useState(null);
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const chartContainer = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const response = await databaseService.getData();
      setCampaigns(response.data.campaigns);
      setLabels(
        response.data.campaigns.map((el) => {
          return el.campaign_name;
        })
      );
      setDelivered(
        response.data.campaigns.map((el) => {
          return el.details.count_delivered;
        })
      );
      setSent(
        response.data.campaigns.map((el) => {
          return el.details.count_sent;
        })
      );
      setOpenedRate(
        response.data.campaigns.map((el) => {
          return el.details.percent_open;
        })
      );
      setClickedRate(
        response.data.campaigns.map((el) => {
          return el.details.clicksperopenrate;
        })
      );
      const percOpened = response.data.campaigns.map((el) => {
        return el.details.percent_open;
      })
      setOpened(
        response.data.campaigns.map((el) => {
          return el.details.count_delivered;
        }).map((del, index) => {
          return(
            del*(percOpened[index]/100)
          )
        })
      );
      setCLabels(
        response.data.campaigns.map((el) => {
          return el.campaign_name;
        })
      );
      setCDelivered(
        response.data.campaigns.map((el) => {
          return el.details.count_delivered;
        })
      );
      setCSent(
        response.data.campaigns.map((el) => {
          return el.details.count_sent;
        })
      );
      setCOpenedRate(
        response.data.campaigns.map((el) => {
          return el.details.percent_open;
        })
      );
      setCClickedRate(
        response.data.campaigns.map((el) => {
          return el.details.clicksperopenrate;
        })
      );
      setCOpened(
        response.data.campaigns.map((el) => {
        return el.details.count_delivered;
      }).map((del, index) => {
        return(
          del*(percOpened[index]/100)
        )
      }))
      
    };

    getData();
  }, []);
  


  const handleSomething = async () => {
    try {
      console.log(clickedRate);
      console.log(openedRate);
      console.log(sent);
      console.log(delivered);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const makeChart = async () => {
      try {
        
        // Sample data (replace this with your dynamic data)
        const data = {
          labels: clabels,
          datasets: [
            {
              label: "Öffnungsrate",
              data: copenedRate,
              borderColor: "#828dd7",
              backgroundColor: "#828dd7",
              pointStyle: "triangle", // Set point style to triangle
              pointRadius: 8,
              type: "line", // Line chart for Dataset 2
              yAxisID: "y1",
              order: 2,
            },
            {
              label: "Klickrate",
              data: cclickedRate,
              borderColor: "#abcfeb",
              backgroundColor: "#abcfeb",
              pointStyle: "triangle", // Set point style to diamond
              pointRadius: 8,
              type: "line", // Line chart for Dataset 2
              yAxisID: "y1",
              order: 1,
            },
            {
              label: "Zugestellt",
              data: cdelivered,
              backgroundColor: "#3dd2da",
              borderColor: "#3dd2da",
              pointStyle: "diamond", // Set point style to diamond
              pointRadius: 8,
              type: "bar",
              yAxisID: "y",
              order: 4,
            },
            {
              label: "Geöffnet",
              data: copened,
              backgroundColor: "#828dd7",
              borderColor: "#828dd7",
              type: "bar",
              yAxisID: "y",
              order: 5,
            },
            {
              label: "Gesendet",
              data: csent,
              backgroundColor: "#f3d26a",
              borderColor: "#f3d26a",
              pointStyle: "diamond", // Set point style to diamond
              pointRadius: 8,
              type: "bar",
              yAxisID: "y",
              order: 5,
            },
          ],
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
                position: "left",
              },
              x: {
                grid: {
                  drawOnChartArea: false, // Hide y-axis grid lines inside the chart area
                },
              },
              y1: {
                beginAtZero: true,
                position: "right",
                grid: {
                  drawOnChartArea: false, // Hide y-axis grid lines inside the chart area
                },
              },
            },
          },
        };
        // Create a new chart
        
        if (chartContainer.current) {
          myChart = new Chart(chartContainer.current, config);
        }
    
        
      } catch (error) {
        console.log(error)
      }
    }
    let myChart;
    makeChart();
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [clabels, cclickedRate, copenedRate, csent, cdelivered, copened]);

  const handleCheck = (index) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);
  };
  const generateGraph = () => {
    let updatedDelivered = [...delivered];
    let updatedSent = [...sent];
    let updatedOpenedRate = [...openedRate];
    let updatedclickedRate = [...clickedRate];
    let updatedLabels = [...labels];
    let updatedOpened = [...opened];
    const filterDelivered = updatedDelivered.filter((element, index) => {
      return checked[index];
    });
    const filterSent = updatedSent.filter((element, index) => {
      return checked[index];
    });
    const filterOpenedRate = updatedOpenedRate.filter((element, index) => {
      return checked[index];
    });
    const filterClickedRate = updatedclickedRate.filter((element, index) => {
      return checked[index];
    });
    const filterLabels = updatedLabels.filter((element, index) => {
      return checked[index];
    });
    const filterOpened = updatedOpened.filter((element, index) => {
      return checked[index];
    });
    setCDelivered(filterDelivered);
    setCSent(filterSent);
    setCOpenedRate(filterOpenedRate);
    setCClickedRate(filterClickedRate);
    setCLabels(filterLabels);
    setCOpened(filterOpened);
  };
  const download = async () => {
    try {
      // Capture the table as an image
      const tableCanvas = await html2canvas(document.getElementById("campaigns-table"));
  
      // Capture the chart as an image
      const chartCanvas = await html2canvas(chartContainer.current);
  
      // Create a new canvas to combine table and chart
      const combinedCanvas = document.createElement("canvas");
      const context = combinedCanvas.getContext("2d");
      combinedCanvas.width = Math.max(tableCanvas.width, chartCanvas.width);
      combinedCanvas.height = tableCanvas.height + chartCanvas.height;
  
      // Draw the table image on the combined canvas
      context.drawImage(tableCanvas, 0, 0);
  
      // Draw the chart image below the table image
      //context.drawImage(chartCanvas, 0, tableCanvas.height);
  
      // Convert the combined canvas to an image
      const combinedImage = combinedCanvas.toDataURL("image/png");
  
      // Create a download link for the combined image
      const link = document.createElement("a");
      link.href = combinedImage;
      link.download = "combined_graph_and_table.png";
      link.click();
    } catch (error) {
      console.error("Error downloading: ", error);
    }
  };
  return (
    <div id="campaigns-table">
      {/* <button onClick={handleSomething}>HandleSomething</button> */}
      {campaigns && (
        <div className="table">
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
                  <td className="column">
                    {checked[index] ? (
                      <span
                        className="box-unchecked"
                        onClick={() => handleCheck(index)}
                      >
                        X
                      </span>
                    ) : (
                      <span
                        className="box-unchecked"
                        onClick={() => handleCheck(index)}
                      ></span>
                    )}
                    {campaign.campaign_name}
                  </td>
                  <td>
                    <a href={`//${campaign.campaign_preview}`} target="_blank">
                      Vorschau
                    </a>
                  </td>
                  <td>{campaign.details.count_sent}</td>
                  <td>{campaign.details.count_delivered}</td>
                  <td>{campaign.details.percent_delivered}</td>
                  <td>{campaign.details.percent_open}</td>
                  <td>{campaign.details.clicksperopenrate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button onClick={generateGraph}>Plot generieren</button>
      {clabels && cclickedRate && copenedRate && csent && cdelivered && (
        <canvas
          className="graph"
          id="downloadChart"
          ref={chartContainer}
          width="400"
          height="200"
        ></canvas>
      )}
      <button onClick={download}>Download pdf</button>
    </div>
  );
}

export default Campaigns;
