// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Post documents */
interface PostDocumentData {
    /**
     * title field in *Post*
     *
     * - **Field Type**: Title
     * - **Placeholder**: title
     * - **API ID Path**: post.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * content field in *Post*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: content
     * - **API ID Path**: post.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Publicationsingle documents */
interface PublicationDocumentData {
    /**
     * title field in *Publicationsingle*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title
     * - **API ID Path**: publication.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * content field in *Publicationsingle*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: publication.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Publicationsingle document from Prismic
 *
 * - **API ID**: `publication`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PublicationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PublicationDocumentData>, "publication", Lang>;
export type AllDocumentTypes = PostDocument | PublicationDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PostDocumentData, PostDocument, PublicationDocumentData, PublicationDocument, AllDocumentTypes };
    }
}
