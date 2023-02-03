import "../App.css"
import { DiJsBadge, DiReact, DiCss3, DiHtml5, DiBootstrap, DiJqueryLogo } from "react-icons/di"
export default function FrontEnd() {
    // let mystyle={
    //         margin: "auto", 
    //         marginTop: "10vh", 
    //         width: "fit-content", 
    //         textAlign: "center", 
    //         color: "white", 
    //         justifyContent: "center",
    //         backgroundColor:"rgba(255,255,255,0.6)",
    //         height:"100%",
    //         borderRadius:"5%"
    // }


return (<div>
        {/* <h1>FrontEnd</h1> */}
        <DiReact className="App-logo" style={{ margin: "30px 30px", scale: "4", color: "cyan" }}></DiReact>
        <DiJsBadge style={{ margin: "0px 30px", scale: "3", color: "yellow" }}></DiJsBadge>
        <DiBootstrap style={{ margin: "0px 30px", scale: "4", color: "#6610f2" }}></DiBootstrap>
        <DiJqueryLogo style={{ margin: "0px 30px", scale: "4", color: "#0769ad" }}></DiJqueryLogo>
        <DiHtml5 style={{ margin: "0px 30px", scale: "4", color: "#e34c26" }}></DiHtml5>
        <DiCss3 style={{ margin: "0px 30px", scale: "4", color: "#2965f1" }}></DiCss3>
    </div>)
}

