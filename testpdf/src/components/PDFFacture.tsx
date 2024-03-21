import { Document, Page, Text, View } from "@react-pdf/renderer";
import donnees from "../data/Donner";
import pdfStyles from "../style/index";

const PDFFacture = () => {
    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                {/* Header Section */}
                <View style={pdfStyles.pageHeader} fixed>
                    <View>
                        <Text style={pdfStyles.headerText}>XX-XX-XX</Text>
                        <Text style={pdfStyles.headerTextBold}>
                            Xxxx Xxxx (XXXXX)
                        </Text>
                        <Text style={pdfStyles.headerText}>xx. : xxxxxxxxxx</Text>
                        <Text style={pdfStyles.headerText}>
                            XXX XXXX : xx-xx-xxxx xx:xx xx+1
                        </Text>
                        <Text style={pdfStyles.headerText}>xxxx xxxxxx :</Text>
                        <Text style={pdfStyles.headerText}>xxxx xx: xx-xx-xxxx xx:xx:xx</Text>
                    </View>
                </View>
                {/* Destination */}
                <View style={pdfStyles.emeteur}>
                    <View style={pdfStyles.twoItem}>
                        <Text style={pdfStyles.headerText}>xxxxxx</Text>
                        <View style={pdfStyles.headerSquare}>
                            <Text style={pdfStyles.headerText}>
                                XXXX : Xxxx Xxxx
                            </Text>
                            <Text style={pdfStyles.headerText}>xxxxxx : x.x</Text>
                            <Text style={pdfStyles.headerText}>xxxx : xxxxxxxxxxxx</Text>
                            <Text style={pdfStyles.headerText}>
                                Xxxx : xxx.xxxxxx@xxx.xx
                            </Text>
                            <Text style={pdfStyles.headerText}>xxxx : xxxx</Text>
                            <Text style={pdfStyles.headerText}>xxx : </Text>
                        </View>
                    </View>
                    <View style={pdfStyles.twoItem}>
                        <Text style={pdfStyles.headerText}>xxxx x</Text>
                        <View style={pdfStyles.headerSquare}>
                            <Text style={pdfStyles.headerText}>xxxx xxx : xxxx</Text>
                            <Text style={pdfStyles.headerText}>xxxx : xxx xx xxxxxx</Text>
                            <Text style={pdfStyles.headerText}>xxxx :</Text>
                            <Text style={pdfStyles.headerText}>xxxxx : xxxxxxxxxxxxxxx</Text>
                            <Text style={pdfStyles.headerText}>
                                xxxxxxxxxxxxxx : xxxxxxxxx
                            </Text>
                        </View>
                    </View>
                </View>
                {/* currency */}
                <View style={pdfStyles.montExp}>
                    <Text style={pdfStyles.mots}>xxxxxx xxx x xxx</Text>
                </View>
                {/* Table Section */}
                <View style={pdfStyles.table}>
                    <View style={[pdfStyles.tableRow]}>
                        <Text style={[pdfStyles.tableHeader, { flex: 7 }]}>xxxxxxxxx</Text>
                        <Text style={pdfStyles.tableHeader}>xxxx</Text>
                        <Text style={pdfStyles.tableHeader}>xxxxxx</Text>
                        <Text style={pdfStyles.tableHeader}>xxx</Text>
                        <Text style={pdfStyles.tableHeader}>xx</Text>
                        <Text style={[pdfStyles.tableHeader, { flex: 2 }]}>xxxxx</Text>
                        <Text style={[pdfStyles.tableHeader, { flex: 1 }]}>xx xx</Text>
                        <Text style={[pdfStyles.tableHeader, { flex: 2 }, pdfStyles.lastTableCol]}>xxxx xx</Text>
                    </View>
                    {donnees.map((item: any, index: number) => (
                        <View key={index} style={[pdfStyles.tableRow, pdfStyles.tableRowCell, index === donnees.length - 1 ? pdfStyles.lastTableRow : {}]}>
                            <Text style={[pdfStyles.tableCell, { flex: 7 }]}>
                                {item.Désignation}
                            </Text>
                            <Text style={[pdfStyles.tableCell, pdfStyles.textRight]}>
                                {item.Long || "--"}
                            </Text>
                            <Text style={[pdfStyles.tableCell, pdfStyles.textRight]}>
                                {item.Larg || "--"}
                            </Text>
                            <Text style={[pdfStyles.tableCell, pdfStyles.textRight]}>
                                {item.Ep || "--"}
                            </Text>
                            <Text style={[pdfStyles.tableCell, pdfStyles.textRight]}>
                                {item.Pce || "--"}
                            </Text>
                            <Text style={[pdfStyles.tableCell, { flex: 2 }, pdfStyles.textRight]}>
                                {item.Métrage || "--"}
                            </Text>
                            <Text style={[pdfStyles.tableCell, { flex: 1 }, pdfStyles.textRight]}>
                                {item.PU || "--"}
                            </Text>
                            <Text style={[pdfStyles.tableCell, { flex: 2 }, pdfStyles.textRight, { borderRight: 0 }]}>
                                {item["HT Total"] || "--"}
                            </Text>
                        </View>
                    ))}
                </View>
                {/* Terms of payment */}
                <View style={pdfStyles.emeteur}>
                    <View style={pdfStyles.twoItem}>
                        <Text style={pdfStyles.headerText}>xxxxxxxxxxxxxxxxxx:</Text>
                        <View>
                            <Text style={pdfStyles.headerText}>
                                xxxxxxxxxxxxxxxxx
                            </Text>
                            <Text style={pdfStyles.headerText}>
                                xxxxxxxxxxxxxxx.
                            </Text>
                            <Text style={pdfStyles.headerText}>
                                xx:xxxx xx xx , xxxxxxxxxxxxxxxxxx.
                            </Text>
                        </View>
                    </View>
                    <View style={pdfStyles.total}>
                        <View style={pdfStyles.twoItemTotal}>
                            <Text style={pdfStyles.styleTextTotal}>xxxxx xxxx</Text>{" "}
                            <Text style={pdfStyles.styleTextTotal}>61 241,25</Text>
                        </View>
                        <View style={pdfStyles.twoItemTotal}>
                            <Text style={pdfStyles.styleTextTotal}>xxxxxx xxxx xx%</Text>
                            <Text style={pdfStyles.styleTextTotal}>12 248,25</Text>
                        </View>
                        <View style={[pdfStyles.twoItemTotal, pdfStyles.background]}>
                            <Text style={pdfStyles.styleTextTotal}>xxxxx xxxx</Text>
                            <Text style={pdfStyles.styleTextTotal}>73 489,50</Text>
                        </View>
                    </View>
                </View>
                {/* Signateur */}
                <View style={pdfStyles.twoItemSign}>
                    <View style={pdfStyles.signSquare}>
                        <View style={pdfStyles.ligneSign}>
                            <Text style={pdfStyles.textSIgn}>
                                xxxxx x xxxxxxxx xxx xxxxxxxxx xxxxxxxx
                            </Text>
                        </View>
                    </View>
                    <View style={pdfStyles.signSquare}>
                        <View style={pdfStyles.ligneSign}>
                            <Text style={pdfStyles.textSIgn}>
                                xxxxx xxxxxxxxxxx ,xxxx,xxxxxxxxx
                            </Text>
                            <Text style={pdfStyles.textSIgn}>"xxx xxx xxxx"</Text>
                        </View>
                    </View>
                </View>
                {/* Page Number */}
                {/* <Text
                    style={pdfStyles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `Page ${pageNumber} of ${totalPages}`
                    }
                    fixed
                /> */}
            </Page>
        </Document>
    );
};

export default PDFFacture;