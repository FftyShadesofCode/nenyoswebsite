import React, {Component, useState} from "react"

import "../App.css"
import DragDrop from "../components/DragDrop";

class Uploader extends Component {

    constructor() {
        super()
        this.state = {
            showModal: false,
            drag: false,
            fileList: [],
            progress: [],
            size: [],
            message: "Maximum 10 files / 5mb",
            history: {files: 0, size: 0}
        }
        this.dropRef = React.createRef()
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleFiles = e => {
        const fileList = e.target.files
            ? e.target.files
            : e.dataTransfer.files;
        this.setState({
            fileList: fileList,
            progress: Array(fileList.length).fill(0)
        })
        if (fileList.length > 10) {
            this.setState({
                message: "Maximum 10 files"
            })
        } else {
            const size =
                Array.from(fileList).reduce((acc, {size}) => acc + size, 0) /
                (500 * 500)
            if (size < 10) {
                const date = new Date()
                const today =
                    date.getDate() +
                    "/" +
                    (date.getMonth() + 1) +
                    "/" +
                    date.getFullYear()
                let uploadQuota = {
                    date: today,
                    size: Math.round(size),
                    files: fileList.length
                }
                console.log(localStorage.getItem("_RestrictUpload"))
                //if (!localStorage.getItem ("_RestrictUpload")) {}
                //else {
                const restrictUpload = JSON.parse(
                    window.localStorage.getItem("_RestrictUpload")
                )
                uploadQuota = {
                    date: today,
                    size: Math.round(size) + restrictUpload.size,
                    files: fileList.length + restrictUpload.files
                    // }
                }

                console.log(uploadQuota)
                window.localStorage.setItem(
                    "_RestrictUpload",
                    JSON.stringify(uploadQuota)
                )

                // const restrictUpload = JSON.parse(window.localStorage.getItem ("_RestrictUpload"));

                if (restrictUpload.size > 10) {
                    console.log("too many mb")
                    this.setState({
                        message: "too many mb"
                    })
                } else if (restrictUpload.files > 10) {
                    console.log("too many files")
                    this.setState({
                        message: "too many files"
                    })
                    console.log(restrictUpload.date)
                } else if (restrictUpload.date === today) {
                    console.log(restrictUpload.date)
                } else {
                    this.setState({
                        message: fileList.length + " files / " + Math.round(size) + "mb",
                        fileList: fileList,
                        progress: Array(fileList.length).fill(0)
                    })
                }
            } else {
                this.setState({
                    message: "Maximum 10 mb"
                })
            }
        }
    }

    handleList = id => {
        const fileList = Array.from(this.state.fileList).filter(
            (elem, index) => index !== id
        )
        this.setState({
            fileList: fileList,
            progress: Array(fileList.length).fill(0)
        })
    }

    prepareUpload = () => {
        for (let file = 0; file < this.state.fileList.length; file++) {
            this.fileUpload(this.state.fileList[file], file)
        }
    }

    fileUpload = (file, counter) => {
        const URL = process.env.MONGO_URL
        const request = new XMLHttpRequest()
        request.upload.addEventListener(
            "progress",
            event => {
                let percent = Math.round((event.loaded / event.total) * 100)
                let ids = [...this.state.progress] // create the copy of state array
                ids[counter] = percent //new value
                this.setState({
                    progress: ids
                })
            },
            false
        )
        request.open("POST", URL, true)
        const formData = new FormData()


        console.log("file" + counter)
        formData.append("file", file, file.name)

        request.send(formData)

        request.addEventListener("loadend", event => {
            this.setState({
                message: request.responseText
            })
            console.log(request.responseText)
        })

        if (
            this.state.fileList.length === counter + 1 &&
            this.state.progress[this.state.fileList.length - 1] === 100
        ) {
            // async await!!
            // ################# hacky way!!!
            setTimeout(
                () =>
                    this.setState({
                        fileList: [],
                        progress: []
                    }),
                3000
            )
        }
    }

    render() {

        const {state: orchidGenera, setState: setOrchidGenera} = this.state
        const {state: orchidSpecies, setState: setOrchidSpecies} = this.state
        const {state: growerName, setState: setGrowerName} = this.state
        const {state: careInfo, setState: setCareInfo} = this.state

        return (
            <div className="form-upload-container">
                <div className="heading">

                    <h4> NENYOS In-Bloom Uploader </h4>
                    <div onClick={this.toggleModal}> ?</div>
                </div>
                <div className="container">
                    <div className="left-container">
                        <div className="orchid-wrapper">
                            <label htmlFor="orchidGenera">Orchid Genera</label>
                            <input
                                type="text"
                                value={orchidGenera}
                                id="orchidGenera"
                                placeholder="Orchid Genera"
                                defaultValue=""
                                name="orchidGenera"
                                required={true}
                                onChange={setOrchidGenera}
                            />

                            <label htmlFor="orchidSpecies">Orchid Species</label>
                            <input
                                type="text"
                                value={orchidSpecies}
                                id="orchidSpecies"
                                placeholder="Orchid Species"
                                defaultValue=""
                                name="orchidSpecies"
                                required={true}
                                onChange={setOrchidSpecies}
                            />
                        </div>
                        <div className="grower-wrapper">
                            <label htmlFor="growerName">Grower Name</label>
                            <input
                                type="text"
                                value={growerName}
                                id="growerName"
                                placeholder="Grower Name"
                                defaultValue=""
                                name="growerName"
                                required={true}
                                onChange={setGrowerName}
                            />
                        </div>
                    </div>
                    <div className="right-container">
                        <label htmlFor="careInfo">Care Information</label>
                        <div className="grow-wrap">
                            <textarea
                                value={careInfo}
                                id="careInfo"
                                name="careInfo"
                                rows={2}
                                placeholder={"Care Information"}
                                required={true}
                                defaultValue={"\t\t\t\t"}
                                onChange={setCareInfo}
                            />
                        </div>
                    </div>
                </div>
                <DragDrop />
            </div>
        )
    }
}

export default Uploader