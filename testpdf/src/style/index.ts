import { StyleSheet } from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: "#FFFFFF",
    },
    // Header Section
    pageHeader: {
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        width: "100%",
        fontStyle: "bold",
    },
    headerText: {
        fontSize: 8,
        fontWeight: "semibold",
        marginBottom: 5,
        color: "#163269",
    },
    headerTextBold: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#800000",
    },
    // Destination
    emeteur: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
    },
    twoItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
        padding: 3,
    },
    headerSquare: {
        borderWidth: 1,
        borderColor: "#000000",
        padding: 10,
        height: 100,
        width: "100%",
    },
    // currency
    montExp: {
        display: "flex",
        width: "100%",
        alignItems: "flex-end",
    },
    mots: {
        fontSize: 10,
        fontWeight: "semibold",
        marginBottom: 5,
    },
    // Table Section
    table: {
        width: "100%",
        borderColor: "#000000",
        border: 1,
        flex: 1,
    },
    tableRow: {
        flexDirection: "row",
        borderBottom: 1,
    },
    lastTableRow: {
        height: "100%",
        flex: 1,
        borderBottom: 0
    },
    lastTableCol: {
        borderRight: 0
    },
    tableRowCell: {
        borderBottomStyle: "dashed",
    },
    tableHeader: {
        flex: 1,
        fontSize: 8,
        fontWeight: "bold",
        padding: 5,
        borderLeftColor: '#000000',
        borderRight: 1,
        backgroundColor: "#f0f5f5",
        alignItems: "center",
        textAlign: "center",
    },
    tableCell: {
        flex: 1,
        fontSize: 8,
        fontWeight: "bold",
        padding: 5,
        borderColor: "#000000",
        borderStyle: "solid",
        borderRight: 1,
    },
    textRight: {
        textAlign: "right",
    },
    // Terms of payment
    total: {
        width: "40%",
    },
    twoItemTotal: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 3,
        marginBottom: 4,
    },
    styleTextTotal: {
        fontSize: 8,
        color: "#163269",
    },
    background: {
        backgroundColor: "#f0f5f5",
    },
    // Signateur
    twoItemSign: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
    },
    signSquare: {
        borderWidth: 1,
        borderColor: "#000000",
        height: 80,
        width: "100%",
    },
    ligneSign: {
        borderBottom: 1,
        borderColor: "#000000",
        height: 30,
    },
    textSIgn: {
        fontSize: 8,
        fontWeight: "semibold",
        textAlign: "center",
        padding: 5,
    },
    // Page Number
    pageNumber: {
        fontSize: 8,
        textAlign: "center",
        margin: 10,
        justifyContent: "flex-end",
    },
    totalPages: {
        fontSize: 8,
        bottom: 30,
        right: 30,
    },
});

export default pdfStyles;