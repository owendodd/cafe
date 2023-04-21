export function designerFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "designer",
      label: "Designer",
    },
    {
      type: "image",
      name: "gallery",
      label: "Gallery",
      list: true,
    },
  ];
}
export function archiveFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      required: true,
    },
    {
      type: "string",
      name: "duration",
      label: "Duration",
      required: true,
    },
    {
      type: "image",
      name: "shopslideshow",
      label: "Shop slideshow",
      list: true,
    },
    {
      type: "boolean",
      name: "event",
      label: "Event",
    },
    {
      type: "boolean",
      name: "open",
      label: "Open",
    },
    {
      type: "boolean",
      name: "openingsoon",
      label: "Opening Soon",
    },
    {
      type: "boolean",
      name: "tickets",
      label: "Tickets",
    },
    {
      type: "boolean",
      name: "watchnow",
      label: "Watch now",
    },
    {
      type: "string",
      name: "video_embed",
      label: "Video embed",
    },
  ];
}
export function infoFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Press",
      name: "press",
      templates: [
        {
          fields: linkFields(),
          label: "Link",
          name: "link",
        },
      ],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Contact",
      name: "contact",
      templates: [
        {
          fields: linkFields(),
          label: "Link",
          name: "link",
        },
      ],
    },
    {
      type: "string",
      name: "type",
      label: "Type",
    },
  ];
}
export function linkFields() {
  return [
    {
      type: "string",
      name: "link_title",
      label: "Link title",
    },
    {
      type: "string",
      name: "link_url",
      label: "Link URL",
    },
  ];
}
