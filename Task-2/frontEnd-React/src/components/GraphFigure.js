import React from "react";
import Plot from "react-plotly.js";
import "./GraphFigure.css";

function GraphFigure(props) {
  const openGraph = (e) => {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(e.target.value).style.display = "block";
    e.target.className += " active";
  };

  // let pdfLink = `/api/v1/download-pdf/?x_data=${props.x_data}&y_data=${props.y_data}`; 
  let pdfLink = `${process.env.REACT_APP_BASE_URL}api/v1/download-pdf/?x_data=${props.x_data}&y_data=${props.y_data}`; 

  return (
    <div className="graphs">
      <button id="download">
        <a
          href={pdfLink}
          download
        >
          Download PDF
        </a>
      </button>
      <div className="tab">
        <button className="tabLinks" value="Scatter" onClick={openGraph}>
          Scatter Plot
        </button>
        <button className="tabLinks" value="Box" onClick={openGraph}>
          Box Plot
        </button>
        <button className="tabLinks" value="Histogram" onClick={openGraph}>
          Histogram
        </button>
      </div>
      <hr />

      <div id="Scatter" className="tabContent">
        <Plot
          data={[
            {
              x: props.x_data,
              y: props.y_data,
              type: "scatter",
              mode: "markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ width: 560, height: 420, title: "A Scatter Plot" }}
        />
      </div>
      <div id="Box" className="tabContent">
        <Plot
          data={[
            {
              y: props.y_data,
              type: "box",
            },
            {
              y: props.x_data,
              type: "box",
            },
          ]}
          layout={{ width: 560, height: 420, title: "A Box Plot" }}
        />
      </div>
      <div id="Histogram" className="tabContent">
        <Plot
          data={[
            {
              x: props.x_data,
              type: "histogram",
            },
          ]}
          layout={{ width: 560, height: 420, title: "A Histogram Plot" }}
        />
      </div>
    </div>
  );
}

export default GraphFigure;
