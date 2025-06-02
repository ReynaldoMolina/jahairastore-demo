import { StyleSheet } from '@react-pdf/renderer';

const font = {
  fontSize: 15,
  fontFamily: 'Times-Roman'
}
const flxCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const styles = StyleSheet.create({
  document: {
    width: '100%',
    height: '100%',
  },
  page: {
    display: 'flex',
    backgroundColor: 'white',
    maxWidth: 500
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
  },
  logoimg: {
    height: 110,
    width: 110
  },
  title: {
    ...flxCenter,
    ...font,
    textAlign: 'center',
    width: '100%',
    marginBottom: 15,
    fontFamily: 'Times-Bold',
  },
  orderData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontSize: 10,
    height: 50
  },
  orderInfoContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  orderInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7
  },
  orderInfo2: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginRight: 50
  },
  orderInfoLabel: {
    ...font,
    width: 62,
    fontFamily: 'Times-Bold'
  },
  orderInfoLabel2: {
    ...font,
    width: 55,
    fontFamily: 'Times-Bold'
  },
  orderInfoText: {
    ...font,
  },
  table: {
    ...font,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0'
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '5px 3px',
    backgroundColor: '#f3f3f3',
    fontFamily: 'Times-Bold',
  },
  tableRow: {
    ...flxCenter,
    ...font,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    padding: 3,
  },
  tableRowName: {
    fontFamily: 'Times-Roman',
    display: 'flex',
    justifyContent: 'left',
    fontSize: 12,
    width: '100%',
    lineHeight: 1.3
  },
  tableRowData: {
    display: 'flex',
    fontSize: 12,
    textAlign: 'right',
    width: 90,
    justifyContent: 'flex-end',
    fontFamily: 'Times-Roman',
  },
  tableRowCant: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'right',
    width: 50,
    justifyContent: 'flex-end',
    fontFamily: 'Times-Roman',
  },
  tableRowNameH: {
    fontFamily: 'Times-Bold',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: 12,
    width: '100%',
  },
  tableRowDataH: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'right',
    width: 90,
    justifyContent: 'flex-end',
    fontFamily: 'Times-Bold',
  },
  tableRowCantH: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'right',
    width: 50,
    justifyContent: 'flex-end',
    fontFamily: 'Times-Bold',
  },
  tableFooter: {
    ...font,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '5px 3px',
    backgroundColor: '#f3f3f3',
    borderTop: '1px solid gray',
    fontFamily: 'Times-Bold'
  },
  tableSaldo: {
    ...font,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginRight: 3,
  },
  orderSaldoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  saldoLabel: {
    ...font,
    width: 50,
    fontFamily: 'Times-Bold',
  },
  saldo: {
    ...font,
    textAlign: 'right',
    width: 50
  },
  note: {
    ...font,
    textAlign: 'right',
    width: '100%',
    fontSize: 8,
    color: 'gray',
    flexGrow: 1
  },
  footerGap: {
    display: 'flex',
    flexGrow: 1
  },
  footer: {
    ...flxCenter,
    ...font,
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    color: 'gray',
  }
});

export { styles };