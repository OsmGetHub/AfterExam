import React, { useRef } from "react";
import {Editor} from "@tinymce/tinymce-react";
import Nav from "../offres/nav";
import Footer from "../offres/footer";
export default function AddPost(){
    const editorRef = useRef(null);
    const log = (e) => {
        e.preventDefault()
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <React.StrictMode>
        <div style={{
            backgroundColor : "rgb(232, 232, 232)",
            height : "1100px"
        }}>
            <Nav />
                <div style={POSTING_CONTENT}>
                    <form action="">
                        <input style={TITILE_INPUTS} type="text" placeholder="Titre" required/>
                        <select style={SELECT_INPUTS} name="" id="" required>
                            <option disabled selected>Type d'offre</option>
                            <option>Offre d'emploi</option>
                            <option>Offre de stage</option>
                            <option>Offre de formation</option>
                        </select>
                        <select style={SELECT_INPUTS} name="" id="" required>
                            <option disabled selected>Entreprise</option>
                            <option>Offre d'emploi</option>
                            <option>Offre de stage</option>
                            <option>Offre de formation</option>
                        </select>
                        <div>
                            <Editor
                                apiKey='mu5xd1ac0bmrs2iprvzxjwqhle9cnrsk2of2gqqwib73st76'
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                    ],
                                    toolbar: 'undo redo | blocks | ' +
                                        'bold italic forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                           <button style={SUBMIT_BUTTON} onClick={(e)=>{log(e)}}>Publier</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    );
}
const TITILE_INPUTS ={
    height :"35px",
    backgroundColor : "rgb(232, 232, 232)",
    color : "#3d3d3d",
    width : "99%",
    margin : "10px 0px",
    borderRadius : "5px",
    fontWeight : "bold",
    fontSize : "1.1em",
    padding : "0px 5px"
}

const SELECT_INPUTS = {
    height :"35px",
    backgroundColor : "rgb(232, 232, 232)",
    color : "#3d3d3d",
    width : "20.5%",
    margin : "10px 20px 10px 0px",
    borderRadius : "5px",
    fontWeight : "bold",
}
const POSTING_CONTENT ={
    width : "60%",
    margin : "auto",
    marginTop : "8%",
    border : "2px solid black",
    borderRadius : "15px",
    overflow : "hidden",
    padding : "25px 30px",
    backgroundColor : "white"
}
const SUBMIT_BUTTON = {
    position : "relative",
    left : "40%",
    width : "20%",
    marginTop : "20px",
    marginBottom : "20px",
    padding : "10px 15px",
    fontWeight : "bold",
    fontSize : "1.1em",
    color: "white",
    backgroundColor: "#12549B",
    border : "0px",
    borderRadius : "10px"
}

