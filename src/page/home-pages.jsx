import { LayOut } from "../components/LayOut";
import Chart from "../components/chart";

export const SideBar = ({ children }) => {
    return (
        <LayOut>
            <Chart />
        </LayOut>
    )
}