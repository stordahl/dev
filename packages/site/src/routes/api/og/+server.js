import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';
import HelveticaNeue from '$lib/HelveticaNeue.ttf';

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const title = url.searchParams.get('title')

	const html = {
    type: 'div',
    props: {
      children: title,
      style: {
				backgroundColor: "#2a2e38",
				color: '#7d9dff',
				width: '100%',
				height: '100%',
				fontSize: '150px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '100px',
			}
    }
  };
  const svg = await satori(html, {
    fonts: [
      {
        name: 'Helvetica Neue',
        data: Buffer.from(HelveticaNeue),
        style: 'normal'
      }
    ],
    height,
    width
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width
    }
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      'content-type': 'image/png'
    }
  });
};
