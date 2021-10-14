import React, { useState, useRef } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./UploadForm.css";

function UploadForm(props) {
  const ref = useRef();
  const [uploadFile, setUploadFile] = useState();
  const [loader, setLoader] = useState(false);

  const onChangeHandler = (event) => {
    setUploadFile(event.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (!uploadFile) {
      console.log("no file");
    } else {
      setLoader(true);
      const dataArray = new FormData();
      dataArray.append("file", uploadFile);

      // let uploadUrl = "/api/v1/upload-csv/"; 
      let uploadUrl = `${process.env.REACT_APP_BASE_URL}api/v1/upload-csv/` 

      axios
        .post(
          uploadUrl,
          dataArray,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          setLoader(false);
          ref.current.value = "";
          // console.log(response);
          props.onSubmitFormData(response);
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
        });
    }
  };

  if (loader) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={submitForm} className="form-horizontal">
          <div className="form-group">
            <label htmlFor="name">CSV File Link </label>
            <input
              type="file"
              name="csv_file"
              id="csv_file"
              className="form-control"
              onChange={onChangeHandler}
              ref={ref}
            />
                               
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UploadForm;
