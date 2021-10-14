import React, { useState } from "react";

import UploadForm from "./UploadForm";
import TableData from "./TableData";
import GraphFigure from "./GraphFigure";

function Home() {
  const [responseData, setResponseData] = useState({});

  const submitFormDataHandler = (rData) => {
    setResponseData(rData.data);
  };

  // let csvLink = "/" + responseData["link"];
  let csvLink = process.env.REACT_APP_BASE_URL + responseData["link"]

  if (Object.keys(responseData).length < 1) {
    return (
      <div>
        <UploadForm onSubmitFormData={submitFormDataHandler}></UploadForm>
      </div>
    );
  } else {
    return (
      <div>
        <TableData
          tHeader={responseData["header"]}
          tData={responseData["data"]}
          fLink={csvLink}
        />
        <GraphFigure
          x_data={responseData["x_data"]}
          y_data={responseData["y_data"]}
        />
      </div>
    );
  }
}

export default Home;
