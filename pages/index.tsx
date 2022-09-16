import React from "react";
import {Button, HTag, Paragraph, Tag} from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <HTag tag='h1'>
                asdfsdf
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
        </div>
    )
}
