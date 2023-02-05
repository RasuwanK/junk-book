import React, { Fragment } from 'react'
import Head from 'next/head'
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase-services';

interface StorySubmit {
    date: string;
    title: string;
    story: string;
}

export default function AddJunk() {
    const toDateString = (date: Date) => {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }

    const setJunk = async (
        date: Date,
        title: string,
        story: string
    ) => {
        //const documentRef = doc(collection(db, "junks"));
        // setDoc adds, replaces or merges a document
        // addDoc just creates a new document with new id
        // await setDoc(documentRef, {
        //     dateAdded: date,
        //     story,
        //     title
        // });

        await addDoc(collection(db, "junks"), {
            dateAdded: date,
            story,
            title
        });
    }

    const { register, handleSubmit } = useForm<StorySubmit>({
        defaultValues: {
            date: toDateString(new Date()),
            title: "",
            story: ""
        }
    });

    const submitter = async ({ date, title, story }: StorySubmit) => {
        await setJunk(new Date(date), title, story);
        console.log("Junk added !");
    }

    return (
        <Fragment>
            <Head>
                <title>Add Junk</title>
            </Head>
            <main>
                <header>
                    <h1>Create your junk story</h1>
                </header>
                <form onSubmit={handleSubmit(submitter)}>
                    <section>
                        <label htmlFor="date">Date happened</label>
                        <input type="date" {...register("date")} />
                    </section>
                    <section>
                        <label htmlFor="title">Title of the story</label>
                        <input type="text" {...register("title")} placeholder="A day in my life" />
                    </section>
                    <section>
                        <label htmlFor="story">Story content</label>
                        <textarea
                            {...register("story")}
                            placeholder="It happened few years ago and I went to market...."
                        >
                        </textarea>
                    </section>
                    <section>
                        <button type="submit">Add story</button>
                    </section>
                </form>
            </main>
        </Fragment>
    )
}
