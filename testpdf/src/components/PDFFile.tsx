import {
    Page,
    Text,
    Document,
    StyleSheet,
    Image,
    View,
} from "@react-pdf/renderer";
import logo from "../logo.jpg";
const styles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#E4E4E4",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    text: {
        fontSize: 12,
        textAlign: "center",
        margin: 10,
    },
    pageNumber: {
        fontSize: 12,
        textAlign: "center",
        margin: 10,
        justifyContent: "flex-end"
    },
    totalPages: {
        fontSize: 12,
        bottom: 30,
        right: 30,
    },
});
const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <View >
                    <Text style={styles.header}></Text>
                    <View style={styles.section}>
                        <Image style={styles.image} src={logo} />
                    </View>
                    <Text style={styles.text}>
                        candle, light source now mostly used for decorative and ceremonial
                        purposes, consisting of wax, tallow, or similar slow-burning material,
                        commonly in cylindrical form but made in many fanciful designs,
                        enclosing and saturating a fibrous wick.
                    </Text>
                </View>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `Page ${totalPages} of ${pageNumber}`
                    }
                    fixed
                />
            </Page>
        </Document>
    );
};

export default PDFFile;
