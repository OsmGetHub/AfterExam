import React from "react";

export default function EntreprisesArticles({articles, currentPage, setCurrentPage, maxPage}){
    return(
        <div style={MAIN}>
                {
                    (articles.status == 'success') ?
                        articles.entreprisesData[0].map(
                            (e, i) => (
                                <div style={MAIN_A} key={e.id}>
                                    <img style={LOGO} src={e.logoEntreprise} alt=""/>
                                    <h3 style={{textAlign : "center", padding:"5px "}}><a href="" >{e.NomEntreprise}</a></h3>
                                </div>
                            )
                        ) : <p style={{
                            // margin : "auto",
                            fontWeight : "bold",
                            fontSize : "1.2em"

                        }}>{articles.status}</p>
                }
            <div style={{height :"fit-content", marginTop:"50px", marginRight : "50px"}}>
                <ul className="pagination">
                    <li>
                        <a href="" onClick={(e)=>{
                            e.preventDefault();
                            (currentPage !== 1) ? setCurrentPage(currentPage - 1) : ''
                        }
                        }>Precedante</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>{
                            e.preventDefault()
                            setCurrentPage(1)
                        }
                        } >{"<<"}</a>
                    </li>
                    <li ><a onClick={(e)=>e.preventDefault()} href="">...</a></li>
                    <li>
                    </li>
                    <li>
                        <a href="" style={{
                            backgroundColor: "#12549B",
                            color: "white"
                        }}>{currentPage}</a>
                    </li>
                    <li><a href="">...</a></li>
                    <li>
                        <a onClick={(e)=> {
                            e.preventDefault()
                            setCurrentPage(maxPage)
                        }} href="">{">>"}</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>{
                            e.preventDefault();
                            (currentPage < maxPage ) ? setCurrentPage(currentPage + 1) : ''
                        }
                        }>Suivante</a>
                    </li>
                </ul>
            </div>
            </div>


    );
}


const MAIN = {
    width: "100%",
    height: "65%",
    paddingLeft: "50px",
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap : "wrap",
    paddingTop:"30px",
    paddingRight: "50px",
}

const MAIN_A = {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #707070",
    borderRadius: "20px",
    backgroundColor: "white",
    margin: "20px 20px 0px 0px",
    width : "260px",
    height : "240px",
    boxShadow: "5px 5px 5px rgba(0,0,0,0.2)",
}

const LOGO ={
    width: "260px",
    height : "100px",
    objectFit: "cover",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    borderBottom: "1px solid #707070",
    marginRight: "20px",
}