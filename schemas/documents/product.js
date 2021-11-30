export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "body",
      title: "Body",
      type: "bodyPortableText",
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
