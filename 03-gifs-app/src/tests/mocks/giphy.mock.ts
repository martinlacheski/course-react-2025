export const mockGiphyResponse = {
  data: [
    {
      id: "1",
      title: "Gif 1",
      images: {
        original: {
          url: "http://example.com/gif1.gif",
          width: "100",
          height: "100",
        },
      },
    },
  ],
  meta: {
    msg: "OK",
    status: 200,
    response_id: "123",
  },
  pagination: {
    total_count: 1,
    count: 1,
    offset: 0,
  },
};
