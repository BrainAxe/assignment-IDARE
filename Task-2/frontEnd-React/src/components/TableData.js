import "./TableData.css";

function TableData(props) {
  return (
    <div>
      <button id="download">
        <a href={props.fLink}>Download CSV File</a>
      </button>
      <table>
        <thead>
          <tr>
            {props.tHeader.map((header) => {
              return <th key={header}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.tData.slice(0, 15).map((rows) => {
            let row = rows.map((cell, idx) => <td key={idx}>{cell}</td>);
            return <tr>{row}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
