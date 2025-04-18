import React from 'react';
import {documentToReactComponents, Options} from '@contentful/rich-text-react-renderer';
import {Document, BLOCKS} from '@contentful/rich-text-types';
import Carousel from 'components/common/carousel/carousel';
import {ImageWrap} from 'components/common/image-wrap.styles';
import {CustomCellTable, CustomRowTable, TableCarousel} from 'components/table/table.styles';
import Image from 'next/image';
import {ContentfulRichTextJSON} from 'src/interfaces';

export const _convertToDocument = (value: string): ContentfulRichTextJSON => {
  const data: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [
          {
            nodeType: 'text',
            value,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
  return data;
};

export const renderOptions = (links?: ContentfulRichTextJSON) => {
  if (!links) return;
  // https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  // const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  // for (const entry of links.entries.block) {
  //   entryMap.set(entry.sys.id, entry);
  // }

  // loop through the inline linked entries and add them to the map
  // for (const entry of links.entries.inline) {
  //   entryMap.set(entry.sys.id, entry);
  // }

  const options: Options = {
    renderNode: {
      [BLOCKS.TABLE]: (_, children) => <TableCarousel breakpoint="phone">{children}</TableCarousel>,
      [BLOCKS.TABLE_ROW]: (node, children) => {
        const block = node.content as any;
        let totalRow = false;
        if (block?.[0]?.content?.[0]?.content?.[0].value.toLowerCase().trim() === 'total') {
          totalRow = true;
        }

        return <CustomRowTable totalRow={totalRow}>{children}</CustomRowTable>;
      },
      [BLOCKS.TABLE_HEADER_CELL]: (_, children) => <CustomCellTable>{children}</CustomCellTable>,
      [BLOCKS.TABLE_CELL]: (_, children) => <CustomCellTable>{children}</CustomCellTable>,
      // other options...
      // [INLINES.EMBEDDED_ENTRY]: (node: any) => {
      //   // find the entry in the entryMap by ID
      //   const entry = entryMap.get(node.data.target.sys.id);

      //   // render the entries as needed
      //   if (entry.__typename === 'BlogPost') {
      //     return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
      //   }
      // },
      // [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      //   // find the entry in the entryMap by ID
      //   const entry = entryMap.get(node.data.target.sys.id);

      //   // render the entries as needed by looking at the __typename
      //   // referenced in the GraphQL query
      //   if (entry.__typename === 'CodeBlock') {
      //     return (
      //       <pre>
      //         <code>{entry.code}</code>
      //       </pre>
      //     );
      //   }

      //   if (entry.__typename === 'VideoEmbed') {
      //     return (
      //       <iframe
      //         src={entry.embedUrl}
      //         height="100%"
      //         width="100%"
      //         frameBorder="0"
      //         scrolling="no"
      //         title={entry.title}
      //         allowFullScreen={true}
      //       />
      //     );
      //   }
      // },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <ImageWrap>
            <Image src={asset.url} alt="My image alt text" layout="fill" objectFit="contain" />
          </ImageWrap>
        );
      },
    },
  };

  return options;
};

export default function _documentToReactComponents(content: {json: ContentfulRichTextJSON}): React.ReactNode {
  if (!content) return '<></>';
  const {json} = content;

  const options: Options = {
    renderNode: {
      [BLOCKS.TABLE]: (_, children) => <Carousel breakpoint="phone">{children}</Carousel>,
      [BLOCKS.TABLE_ROW]: (node, children) => {
        const block = node.content as any;
        let totalRow = false;
        if (block?.[0]?.content?.[0]?.content?.[0].value.toLowerCase().trim() === 'total') {
          totalRow = true;
        }

        return <CustomRowTable totalRow={totalRow}>{children}</CustomRowTable>;
      },
      [BLOCKS.TABLE_HEADER_CELL]: (_, children) => <CustomCellTable>{children}</CustomCellTable>,
      [BLOCKS.TABLE_CELL]: (_, children) => <CustomCellTable>{children}</CustomCellTable>,
    },
  };

  try {
    return documentToReactComponents(json as unknown as Document, options);
  } catch (err) {
    console.error(err);
    return '<></>';
  }
}
