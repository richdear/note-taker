import Head from "next/head";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Plus, PlusCircle, Trash} from "react-bootstrap-icons";
import {PencilSquare} from "react-bootstrap-icons";
import styled from "styled-components";
import {useState} from "react";
import Note from "../components/Note";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default function Home() {
    const initalNotes = [
        {id: 1, created_date: '03-03-2021', created_time: '12:12:13', body: 'Body tes'},
        {id: 2, created_date: '03-03-2021', created_time: '12:12:13', body: 'Body tes'},
        {id: 3, created_date: '03-03-2021', created_time: '12:12:13', body: 'Body tes'},
        {id: 4, created_date: '03-03-2021', created_time: '12:12:13', body: 'Body tes'},
    ];
    const [notes, setNotes] = useState(initalNotes);


    const deleteNote = (id) => {
        let newNotes = notes.filter(note => note.id !== id);
        console.log(newNotes)
        setNotes(newNotes)
    }

    const handleSave = (id, body) => {
        let newNotes = [...notes];
        let index = newNotes.findIndex(note => note.id === id);
        newNotes[index].body = body;
        setNotes(newNotes)
        console.log('NEW notes |')
        console.log(newNotes)

        console.log('OLD notes |')
        console.log(notes)
    }

    const handleAddNote = () => {
        let newNotes = [...notes];
        newNotes.push({
            id: getRandomArbitrary(5, 10), body: 'Some body here ',
            created_date: new Date().toLocaleTimeString(),
            created_time: new Date().toLocaleTimeString()
        })
        setNotes(newNotes)
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div>
                <section className={"d-flex justify-content-center mt-4"}>
                    <div className="d-flex flex-wrap col-md-8 align-items-center">
                        <button style={{background: 'none', border: 'none'}}  onClick={() => handleAddNote()}>
                            <PlusCircle size={30}/>
                        </button>

                        <h3 className="mb-0">
                            Notes
                        </h3>
                    </div>

                </section>
                <section className="d-flex justify-content-center">
                    <div className="d-flex flex-wrap col-md-8 ">
                        {
                            notes.map((note) => {
                                return <Note key={note.id} id={note.id}
                                             createdDate={note.created_date}
                                             createdTime={note.created_time}
                                             text={note.body}
                                             onClickDelete={deleteNote} handleSave={handleSave}/>
                            })
                        }
                    </div>
                </section>
            </div>

        </>
    )
}
