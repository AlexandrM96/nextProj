import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size: 'paragraph-small' | 'paragraph-medium' | 'paragraph-large';
}