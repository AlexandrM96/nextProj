import React, {useState} from "react";
import {Button, HTag, Paragraph, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps, GetStaticPaths, GetServerSideProps} from 'next'
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {

    const [rating, setRating] = useState<number>(2);

    return (
        <>
            <HTag tag='h1'>
                что тотототот
            </HTag>
            <HTag tag='h2'>
                что тотототот
            </HTag>
            <HTag tag='h3'>
                что тотототот
            </HTag>
            <Button appearance={'primary'} arrow={"right"}>Кнопка</Button>
            <Button appearance={'ghost'} arrow={"right"}>Кнопка</Button>
            <Paragraph size={'paragraph-small'}>
                Малый текст
            </Paragraph>
            <Paragraph size={'paragraph-medium'}>
                Средний текст
            </Paragraph>
            <Paragraph size={'paragraph-large'}>
                Большой текст
            </Paragraph>
            <Tag size={"div-small"} color={"red"}>Контент</Tag>
            <Tag size={"div-medium"} color={"primary"}>Контент</Tag>
            <Tag size={"div-small"} color={"green"}>Контент</Tag>
            <Tag size={"div-medium"} color={"grey"}>Контент</Tag>
            <Tag size={"div-small"} color={"ghost"}>Контент</Tag>
            <Rating isEditable rating={rating} setRating={setRating}/>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    )
}

export default withLayout(Home);

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
export const getStaticProps: GetStaticProps = async (context) => {
    const firstCatagory = 0;
    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru/api/top-page/find', {
        firstCatagory
    });
    console.log('121212112',menu);
    return {
        props: {
            menu,
            firstCatagory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number;
}