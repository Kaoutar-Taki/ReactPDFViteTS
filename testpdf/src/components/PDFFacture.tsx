import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: '#FFFFFF',
    },
    table: {
        width: '100%',
        borderStyle: 'solid',
        borderRightColor: '#000000',
        borderRight: 1,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        flex: 1,
        fontSize: 10,
        padding: 5,
        borderLeftColor: '#000000',
        borderLeft: 1,
        borderBottomColor: '#000000',
        borderBottom: 1,
        borderBottomStyle: 'dashed'
    },
    tableHeader: {
        flex: 1,
        fontSize: 10,
        fontWeight: 'bold',
        padding: 5,
        borderLeftColor: '#000000',
        borderLeft: 1,
        borderBottomColor: '#000000',
        borderBottom: 1,
        borderTopColor: '#000000',
        borderTop: 1,
        backgroundColor: '#f0f5f5',
    },
    headerText: {
        fontSize: 8,
        fontWeight: "semibold",
        marginBottom: 5,
        color: "#163269"
    },
    pageNumber: {
        fontSize: 8,
        textAlign: 'center',
        margin: 10,
        justifyContent: 'flex-end',
    },
    totalPages: {
        fontSize: 8,
        bottom: 30,
        right: 30,
    },
    pageHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        fontStyle: 'bold'
    },
    headerTextBold: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold',
        color: "#800000"
    },
    emeteur: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    headerSquare: {
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        height: 100,
        width: "100%",
    },
    twoItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
    },
    montExp: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end',
    },
    mots: {
        fontSize: 10,
        fontWeight: "semibold",
        marginBottom: 5,
    },
    sign: {
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
    },
    signItem: {
    },

});

const PDFFacture = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header Section */}
                <View style={styles.pageHeader} fixed>
                    <View>
                        <Text style={styles.headerText}>XXXXXX</Text>
                        <Text style={styles.headerTextBold}>XXXXXX (XXXXXX)</Text>
                        <Text style={styles.headerText}>XXXXXX. : XXXXXX-XXXXXX</Text>
                        <Text style={styles.headerText}>XXXXXX XXXXXX : XXXXXX </Text>
                        <Text style={styles.headerText}>XXXXXX XXXXXX :</Text>
                        <Text style={styles.headerText}>XXXXXX XXXXXX: XX-XX-XX XX:XX:XX</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFFacture;
