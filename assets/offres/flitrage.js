import React from 'react'
import {render} from "react-dom";
import {bag, localisation, search} from "../images";

function Filtrage(){

        return(
                <div style={FILTER_CONTAINER}>
                    <form style={FILTER}>
                            <label style={{

                                marginTop: "50px",
                                marginLeft: "10px",
                                fontSize: "0.9em"

                            }}><h1 style={{fontWeight : "0.8em"}}>Filtrage</h1></label>
                            <input style={INPUTS_SECTEUR} type="text" placeholder="Secteur d'activites" onKeyPress={
                                (e)=> listsPrinter(e)
                            }/>
                            <div id="secteur" style={{

                                margin: "0px 10px",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "flex-start",

                            }}></div>
                            <input style={INPUTS_REGION} type="text" placeholder="Region"onKeyPress={
                                (e)=> listrPrinter(e)
                            }/>
                            <div id="region" style={{

                                margin: "0px 10px",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "flex-start",

                            }}></div>
                            <input style={INPUTS_ENTREPRISE} type="text" placeholder= "Entreprise" onKeyPress={
                                (e)=> listePrinter(e)
                            }/>
                            <div id="entreprise" style={{

                                margin: "0px 10px",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "flex-start",

                            }}></div>
                    </form>
                </div>
        );
    function isAny(val){
        const secteur = records.map((item) => item.title);
        if(secteur.includes(val)) return true
        return false

    }
    function listsPrinter(e){
        const newList = lists;
        if(e.key ==="Enter"){
            if (isAny(e.target.value) === true) {
                if(filtred === []) onChange(e.target.value);
                else filtred.push(e.target.value)
            }
            newList.push(e.target.value)
            e.preventDefault()
             setLists(newList)
            const span = lists.map((list, i) => {
                return <span className="variable" key={i}> {list}</span>
            })
            e.target.value = ''
            render(span, document.getElementById("secteur"))

        }
    }


    function listrPrinter(e){
        const newList = listr;
        if(e.key ==="Enter"){

            onChange(e.target.value);

            if(e.target.value!=='') {
                newList.push(e.target.value)
                e.preventDefault()
                setListr(newList)
                e.target.value = ''
                const span = listr.map((list, i) => {
                    return <span className="variable" key={i}> {list}</span>
                })
                render(span, document.getElementById("region"))
            }
        }
    }

    function listePrinter(e){
        const newList = liste;
        if(e.key ==="Enter"){

            onChange(e.target.value);

            if(e.target.value!=='') {
                newList.push(e.target.value)
                e.preventDefault()
                setListe(newList)
                e.target.value = ''
                const span = liste.map((list, i) => {
                    return <span style={VARIABLE} key={i}> {list}</span>
                })
                render(span, document.getElementById("entreprise"))
            }
        }
    }



}

export default Filtrage

//Styles de filtrage


const FILTER_CONTAINER = {
    "minWidth": "300px",
    "width": "30vw",
    "height": "100%",
    "backgroundColor": "white"
}

const FILTER = {
    "display": "flex",
    "flexDirection": "column",
    "fontFamily": "Arial Rounded MT",
    "color": "#12549B",
    "margin": "0px 10px",
    padding : "0px 5%"
}


const INPUTS_SECTEUR ={
    "height": "50px",
    "margin": "10px 10px",
    "borderRadius": "12px",
    "borderColor": "#707070",
    "backgroundColor": "#F7F7F7",
    "fontFamily": "Arial Rounded MT",
    "fontSize": "15px",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "22px",
    "backgroundPosition": "8px center",
    "paddingLeft": "37px",
    "backgroundImage" : `url(${search})`,
}

const INPUTS_REGION ={
    "height": "50px",
    "margin": "10px 10px",
    "borderRadius": "12px",
    "borderColor": "#707070",
    "backgroundColor": "#F7F7F7",
    "fontFamily": "Arial Rounded MT",
    "fontSize": "15px",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "18px",
    "backgroundPosition": "8px center",
    "paddingLeft": "37px",
    "backgroundImage" : `url(${localisation})`,
}

const INPUTS_ENTREPRISE ={
    "height": "50px",
    "margin": "10px 10px",
    "borderRadius": "12px",
    "borderColor": "#707070",
    "backgroundColor": "#F7F7F7",
    "fontFamily": "Arial Rounded MT",
    "fontSize": "15px",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "22px",
    "backgroundPosition": "8px center",
    "paddingLeft": "37px",
    "backgroundImage" : `url(${bag})`,
}

const VARIABLE = {
    "border": "1px solid #707070",
    "margin": "2.5px",
    "backgroundColor": "#D2F0CC",
    "fontFamily": "Arial Rounded MT",
    "fontSize": "15px",
    "color": "black",
    "padding": "4px 8px",
    "borderRadius": "5px"
}