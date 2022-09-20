import React, {useState} from "react";
import {Button, HTag, Paragraph, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from 'next'
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
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async (context) => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number;
}