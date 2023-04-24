import React from 'react';
import { Readable } from 'stream';
import { renderToNodeStream } from 'react-dom/server';
import { readManifest } from './read-manifest';
import { RouteConfig } from '../types';
import { mergeStreams } from '../../utils/streams';
import { Root } from '../../../application/Root';
import { HtmlPage } from './html-page';

export const appRoute: RouteConfig = {
    method: 'GET',
    url: '/',
    handler: async (req, res) => {
        const { js, css } = await readManifest();
        const scripts = js.map((fileName) => ({ defer: true, src: `/assets/${fileName}` }));
        const styles = css.map((fileName) => ({ src: `/assets/${fileName}` }));
        res
            .type('text/html')
            .send(mergeStreams(
                Readable.from(['<!DOCTYPE html>']),
                renderToNodeStream(<HtmlPage scripts={scripts} styles={styles}><Root /></HtmlPage>)
            ))
    }
};