import { DiMysql, DiMongodb} from "react-icons/di"
export default function Database(){

    return(<div>
        <DiMysql style={{ margin: "40px", scale: "4", color: "#3c81c2" }}></DiMysql>
        <DiMongodb style={{ margin: "40px", scale: "4", color: "green" }}></DiMongodb>

    </div>)
}