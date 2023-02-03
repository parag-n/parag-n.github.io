import MyNavBar from "./MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Database from "./Database";
import Extra from "./Extra";
import MyTitle from "./MyTitle";
export default function MyApp(){
    return(<div style={{backgroundColor:"black", height:"100vh"}} >
        <center>
        <MyNavBar></MyNavBar>
        <MyTitle></MyTitle>
        <FrontEnd></FrontEnd>
        <BackEnd></BackEnd>
        <Database></Database>
        <Extra></Extra>
        </center>
    </div>)
}