export default function Footer(props) {
    return (
        <footer className="flex items-center justify-between p-4 mt-4 bg-green-500">
            <h2> {props.report.length} Locations World Wide </h2>
            <h1 className="text-xl">&copy; 2021</h1>
        </footer>
    )
}