import { PDFDownloadLink } from "@react-pdf/renderer";
import "./App.css";
import PDFFile from "./components/PDFFile";

function App() {
  return (
    <>
      <div>
        <PDFDownloadLink document={<PDFFile />} fileName="my-file.pdf">
          {({ loading }) => (loading ? <button> "Loading document..." </button> : <button> "Download now!"</button>)}
        </PDFDownloadLink>
      </div>
    </>
  );
}

export default App;
