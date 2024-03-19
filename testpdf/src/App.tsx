import { PDFDownloadLink } from "@react-pdf/renderer";
import "./App.css";
import PDFFile from "./components/PDFFile";
import PDFFacture from "./components/PDFFacture";

function App() {
  return (
    <>
      <div>
        <PDFDownloadLink document={<PDFFacture />} fileName="my-facture.pdf">
          {({ loading }) => (loading ? <button> Loading document...</button> : <button>Download Facture</button>)}
        </PDFDownloadLink>
        <hr />
        <PDFDownloadLink document={<PDFFile />} fileName="my-file.pdf">
          {({ loading }) => (loading ? <button>Loading document...</button> : <button> Download now!</button>)}
        </PDFDownloadLink>
      </div>
    </>
  );
}

export default App;
