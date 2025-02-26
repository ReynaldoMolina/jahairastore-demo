import React from "react";
import { DataContext } from "../../../Context/DataContext";
import { ReactComponent as SvgDownloadPdf } from "./downloadpdf.svg";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FormOption } from "../../../FormOption";
import { ReceiptPdf } from "../../../ReceiptPdf";
import { baseUrl } from "../../../urls/menuOptionsList";
import { useGetData } from "../../../Hooks/useGetData";
import { Loading } from "../../../Loading";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function ReceiptOptions() {
  const { registerId } = React.useContext(DataContext);
  const url = `${baseUrl}receipts/${registerId}`;
  const { data: receipt, isLoading } = useGetData(url);

  if (isLoading) return <Loading/>

  return (
    <>
      <div className="flx flx-center register-options">
        <FormOption label="Descargar PDF">
          <PDFDownloadLink
            document={<ReceiptPdf receipt={receipt}/>}
            fileName={`Recibo ${receipt.id} Pedido ${receipt.orderId} ${receipt.clientName} ${receipt.clientLastname}`}>
            <SvgDownloadPdf
              className={svgClass}
            />
          </PDFDownloadLink>
        </FormOption>
      </div>
    </>
  )
}

export { ReceiptOptions };