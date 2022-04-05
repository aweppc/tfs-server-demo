import React from 'react';

type Script = {
    defer?: boolean;
    src: string;
};

type Stylesheet = {
    src: string;
}

type Props = {
    scripts: Script[];
    styles: Stylesheet[];
    children: React.ReactNode;
};

export const HtmlPage = (props: Props) => {
    return (
        <>
            <html>

            <head>
                <meta charSet='utf-8' />
                <title>ТФШ. Демка React</title>
                <meta name='viewport' content='width=device-width,initial-scale=1' />
                {props.scripts.map(({ defer, src }, i) => <script key={i} defer={defer} src={src} />)}
                {props.styles.map(({ src }, i) => <link key={i} rel='stylesheet' type='text/css' href={src} />)}
            </head>

            <body>
                <div id='root'>
                    {props.children}
                </div>
            </body>

            </html>
        </>
    )
}