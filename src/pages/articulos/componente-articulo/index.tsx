import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import './componente-articulo.css';

export const ComponenteArticulo = () => {
    const { article } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
    fetch(`/contenidos/${article}.md`)
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text));
    }, []);

    return <>
        <div className="container">
            <ReactMarkdown children={markdownContent} className='content' />
        </div>
    </>
}